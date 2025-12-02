import React from 'react';
import { ContentBlock, Example, KeyPoint } from '../types';
import { BookOpen, AlertCircle, PenTool, Lightbulb, Calculator, ArrowRight, LayoutGrid } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

interface ContentRendererProps {
  data: ContentBlock;
  activeId: string;
  onNavigate: (id: string) => void;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ data, activeId, onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 pb-20">
      <Breadcrumbs activeId={activeId} onNavigate={onNavigate} />

      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold uppercase tracking-wider">
               {data.type === 'chapter' ? 'Chapter' : data.type === 'section' ? 'Section' : 'Focus Point'}
            </span>
            <span className="text-slate-400 font-mono text-sm">{data.id}</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{data.title}</h1>
          {data.description && (
            <div className="bg-slate-50 text-slate-700 p-4 rounded-lg flex gap-3 items-start border border-slate-100">
                <BookOpen className="w-5 h-5 mt-1 shrink-0 text-slate-400" />
                <p className="leading-relaxed">{data.description}</p>
            </div>
          )}
        </div>

        {/* Child Navigation (if Parent) */}
        {data.childrenIds && data.childrenIds.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4">
                {data.childrenIds.map(childId => {
                    // We render a simple card for child items. Title should be fetched or we use ID.
                    // Ideally we should lookup the child title. Since we don't have access to registry here easily
                    // (unless passed or imported), we will rely on ID or maybe passed props.
                    // But wait, we can import CONTENT_REGISTRY in components if needed, or pass it.
                    // For now, let's just display "Jump to [childId]" or improved if possible.
                    // Actually, let's try to import CONTENT_REGISTRY.
                    return (
                        <ChildLink key={childId} childId={childId} onNavigate={onNavigate} />
                    )
                })}
            </div>
        )}

        {/* Key Points (Actual Content) */}
        {data.keyPoints && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-indigo-600" />
                核心考点详解
            </h2>
            {data.keyPoints.map((point, idx) => (
              <KeyPointCard key={idx} point={point} />
            ))}
          </div>
        )}

        {/* Examples */}
        {data.examples && data.examples.length > 0 && (
          <div className="space-y-6 mt-8">
             <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <PenTool className="w-5 h-5 text-indigo-600" />
                典型例题与解析
             </h2>
             <div className="grid gap-6">
                {data.examples.map((ex, eIdx) => (
                    <ExampleCard key={eIdx} example={ex} />
                ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper component to avoid circular dependency issues or large imports if possible,
// but importing constants is fine in React.
import { CONTENT_REGISTRY } from '../constants';

const ChildLink: React.FC<{childId: string, onNavigate: (id: string) => void}> = ({childId, onNavigate}) => {
    const child = CONTENT_REGISTRY[childId];
    return (
        <button
            onClick={() => onNavigate(childId)}
            className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-left flex items-center justify-between group bg-white"
        >
            <span className="font-medium text-slate-700 group-hover:text-blue-700">
                {child ? child.title : childId}
            </span>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
        </button>
    );
}

const KeyPointCard: React.FC<{ point: KeyPoint }> = ({ point }) => {
    return (
        <div className={`p-5 rounded-xl border ${point.isExamFocus ? 'bg-amber-50 border-amber-200' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex items-start justify-between mb-2">
                <h3 className={`font-bold text-lg ${point.isExamFocus ? 'text-amber-900' : 'text-slate-800'}`}>
                    {point.title}
                </h3>
                {point.isExamFocus && (
                    <span className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded-full uppercase tracking-wide">
                        <AlertCircle className="w-3 h-3" />
                        必考重点
                    </span>
                )}
            </div>
            <p className="text-slate-700 mb-4 leading-relaxed whitespace-pre-line">
                {point.content}
            </p>

            {point.formulas && point.formulas.length > 0 && (
                <div className="bg-slate-800 text-slate-200 p-4 rounded-lg font-mono text-sm space-y-2 mt-3">
                    <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider mb-1">
                        <Calculator className="w-3 h-3" />
                        Core Formulas
                    </div>
                    {point.formulas.map((f, i) => (
                        <div key={i} className="border-l-2 border-blue-500 pl-3 py-1">{f}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

const ExampleCard: React.FC<{ example: Example }> = ({ example }) => {
    return (
        <div className="bg-indigo-50/50 border border-indigo-100 rounded-lg overflow-hidden">
             <div className="p-4 bg-indigo-100/50 font-medium text-slate-800 border-b border-indigo-100">
                <span className="font-bold text-indigo-700 mr-2">问：</span>
                {example.question}
             </div>
             <div className="p-4">
                <div className="text-slate-700 whitespace-pre-line leading-relaxed">
                    <span className="font-bold text-slate-900 block mb-1">解：</span>
                    {example.solution}
                </div>
                {example.tip && (
                    <div className="mt-4 flex gap-2 text-sm text-indigo-600 bg-white p-3 rounded border border-indigo-100">
                        <Lightbulb className="w-4 h-4 mt-0.5 shrink-0" />
                        <p>{example.tip}</p>
                    </div>
                )}
             </div>
        </div>
    )
}

export default ContentRenderer;
