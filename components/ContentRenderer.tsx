import React, { useState } from 'react';
import { BookOpen, Lightbulb, AlertCircle, CheckCircle2, Calculator, HelpCircle, PenTool, List, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { ContentBlock, KeyPoint, Example } from '../types';
import { CONTENT_REGISTRY } from '../constants';

interface ContentRendererProps {
    data: ContentBlock;
    activeId: string;
    onNavigate: (id: string) => void;
}

const ExampleCard = ({ ex, index }: { ex: Example, index: number }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div key={`ex-${index}`} className="rounded-lg p-5 border border-blue-100 bg-blue-50/50 mb-4">
            <h3 className="text-base font-bold text-blue-800 mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                典型例题 {index + 1}
            </h3>
            <div className="mb-3 font-medium text-slate-800 whitespace-pre-wrap leading-relaxed">
                {ex.question}
            </div>

            {showAnswer ? (
                <div className="bg-white p-4 rounded border border-blue-100 text-slate-600 text-sm animate-in fade-in slide-in-from-top-2">
                    <div className="font-bold text-slate-400 text-xs mb-1 uppercase">解析</div>
                    <div className="whitespace-pre-wrap leading-relaxed">{ex.solution}</div>
                    {ex.tip && (
                        <div className="mt-3 flex gap-2 text-sm text-amber-700 bg-amber-50 p-3 rounded border border-amber-100">
                            <Lightbulb className="w-4 h-4 shrink-0" />
                            <span>{ex.tip}</span>
                        </div>
                    )}
                </div>
            ) : (
                <div className="bg-slate-50 p-6 rounded border border-slate-100 flex justify-center items-center">
                    <button
                        onClick={() => setShowAnswer(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium shadow-sm hover:shadow"
                    >
                        <Eye className="w-4 h-4" />
                        查看解析
                    </button>
                </div>
            )}

            {showAnswer && (
                <div className="mt-2 text-right">
                    <button onClick={() => setShowAnswer(false)} className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1 ml-auto">
                        <EyeOff className="w-3 h-3" />
                        隐藏解析
                    </button>
                </div>
            )}
        </div>
    );
};

const ContentRenderer: React.FC<ContentRendererProps> = ({ data, onNavigate }) => {

    const renderKeyPoint = (kp: KeyPoint, index: number) => {
        return (
            <div key={`kp-${index}`} className={`rounded-lg p-5 border mb-4 ${kp.isExamFocus ? 'bg-red-50 border-red-200' : 'bg-white border-slate-200'}`}>
                <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                    {kp.isExamFocus ? (
                        <AlertCircle className="w-5 h-5 text-red-500" />
                    ) : (
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    )}
                    {kp.title}
                    {kp.isExamFocus && <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">高频考点</span>}
                </h3>

                <div className="text-slate-700 leading-relaxed whitespace-pre-wrap pl-7 mb-2">
                    {kp.content}
                </div>

                {kp.formulas && kp.formulas.length > 0 && (
                    <div className="mt-3 ml-7 bg-slate-800 text-slate-100 p-4 rounded-lg font-mono text-sm shadow-inner">
                        <div className="flex items-center gap-2 text-slate-400 mb-2 text-xs uppercase tracking-wider">
                            <Calculator className="w-4 h-4" /> 核心公式
                        </div>
                        <ul className="space-y-2">
                            {kp.formulas.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    // Legacy section renderer for backward compatibility
    const renderLegacySection = (section: any, index: number) => {
        const { subtitle, content } = section;
        return (
            <div key={`sec-${index}`} className="rounded-lg p-6 border bg-white border-slate-200 mb-4">
                {subtitle && <h3 className="text-lg font-bold mb-2">{subtitle}</h3>}
                <p>{content}</p>
            </div>
        )
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2 font-mono uppercase">
                    <span className="bg-slate-100 px-2 py-1 rounded">{data.id}</span>
                    <span>{data.type.toUpperCase()}</span>
                </div>
                <h1 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                    {data.title}
                </h1>
                {data.description && (
                    <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-200 pl-4">
                        {data.description}
                    </p>
                )}
            </div>

            {/* Children Links (Table of Contents for this Chapter/Section) */}
            {data.childrenIds && data.childrenIds.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <List className="w-5 h-5 text-slate-500" />
                        本章目录
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {data.childrenIds.map(childId => {
                            const child = CONTENT_REGISTRY[childId];
                            if (!child) return null;
                            return (
                                <div
                                    key={childId}
                                    onClick={() => onNavigate(childId)}
                                    className="p-4 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md cursor-pointer bg-white transition-all flex items-center justify-between group"
                                >
                                    <span className="font-medium text-slate-700 group-hover:text-blue-600">{child.title}</span>
                                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Key Points */}
            {data.keyPoints && data.keyPoints.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <PenTool className="w-5 h-5 text-slate-500" />
                        核心知识点
                    </h2>
                    <div className="space-y-4">
                        {data.keyPoints.map((kp, i) => renderKeyPoint(kp, i))}
                    </div>
                </div>
            )}

            {/* Examples */}
            {data.examples && data.examples.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-slate-500" />
                        典型例题
                    </h2>
                    <div className="space-y-4">
                        {data.examples.map((ex, i) => <ExampleCard key={i} ex={ex} index={i} />)}
                    </div>
                </div>
            )}

            {/* Legacy Sections Support */}
            {data.sections && (
                <div className="space-y-4">
                    {data.sections.map((sec, i) => renderLegacySection(sec, i))}
                </div>
            )}
        </div>
    );
};

export default ContentRenderer;
