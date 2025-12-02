import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Book, FileText, Hash } from 'lucide-react';
import { Part, SidebarNode } from '../types';

interface SidebarProps {
  data: Part[];
  onNavigate: (id: string) => void;
  currentView: string;
}

const Sidebar: React.FC<SidebarProps> = ({ data, onNavigate, currentView }) => {
  return (
    <div className="w-80 bg-slate-900 text-slate-300 h-screen overflow-y-auto flex-shrink-0 border-r border-slate-800 flex flex-col">
      <div
        className={`p-4 border-b border-slate-800 font-bold text-white flex items-center gap-2 cursor-pointer hover:bg-slate-800 transition-colors ${currentView === 'dashboard' ? 'bg-slate-800' : ''}`}
        onClick={() => onNavigate('dashboard')}
      >
        <Book className="w-5 h-5 text-blue-400" />
        复习大纲目录
      </div>
      <div className="p-2 space-y-4 flex-1">
        {data.map((part, idx) => (
          <div key={idx} className="space-y-1">
            <h3 className="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-4">
              {part.title}
            </h3>
            {part.chapters.map(chapter => (
              <SidebarItem
                key={chapter.id}
                node={chapter}
                level={0}
                onNavigate={onNavigate}
                currentView={currentView}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{
    node: SidebarNode;
    level: number;
    onNavigate: (id: string) => void;
    currentView: string
}> = ({ node, level, onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = currentView === node.id;
  const hasChildren = node.children && node.children.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate(node.id);
    if (hasChildren) {
        setIsOpen(true);
    }
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Styles based on depth level
  const paddingLeft = level === 0 ? 'px-2' : level === 1 ? 'pl-4 pr-2' : 'pl-8 pr-2';
  const fontSize = level === 0 ? 'text-sm font-medium' : 'text-sm';
  const icon = level === 0 ? null : level === 1 ? <Hash className="w-3 h-3 opacity-50 mr-2" /> : <FileText className="w-3 h-3 opacity-50 mr-2" />;

  return (
    <div className="space-y-0.5">
      <div
        className={`flex items-center ${paddingLeft} py-1.5 rounded-md cursor-pointer transition-colors group ${isActive ? 'bg-blue-900/50 text-blue-200' : 'hover:bg-slate-800 hover:text-white'}`}
        onClick={handleClick}
      >
        {hasChildren ? (
            <div
                onClick={handleToggle}
                className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white mr-1"
            >
                {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </div>
        ) : (
            <div className="w-5 mr-1" /> // Spacer
        )}

        {icon}

        <span className={`${fontSize} truncate flex-1`} title={node.title}>
            {node.title}
        </span>
      </div>

      {isOpen && hasChildren && (
        <div className={`border-l border-slate-800 ${level === 0 ? 'ml-4' : 'ml-6'} space-y-0.5`}>
          {node.children!.map(child => (
            <SidebarItem
                key={child.id}
                node={child}
                level={level + 1}
                onNavigate={onNavigate}
                currentView={currentView}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
