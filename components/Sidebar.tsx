import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Home } from 'lucide-react';

interface SyllabusItem {
    id: string;
    title: string;
    children?: SyllabusItem[];
}

interface SidebarProps {
    data: SyllabusItem[];
    onNavigate: (id: string) => void;
    currentView: string;
}

const Sidebar: React.FC<SidebarProps> = ({ data, onNavigate, currentView }) => {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    const toggleExpand = (id: string) => {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const renderItem = (item: SyllabusItem, depth: number = 0) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expanded[item.id];
        const isActive = currentView === item.id;

        return (
            <div key={item.id}>
                <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all ${isActive
                            ? 'bg-blue-600 text-white font-semibold shadow-md'
                            : 'hover:bg-slate-100 text-slate-700'
                        }`}
                    style={{ paddingLeft: `${depth * 12 + 12}px` }}
                    onClick={() => {
                        if (hasChildren) {
                            toggleExpand(item.id);
                        }
                        onNavigate(item.id);
                    }}
                >
                    {hasChildren && (
                        <span className="shrink-0">
                            {isExpanded ? (
                                <ChevronDown className="w-4 h-4" />
                            ) : (
                                <ChevronRight className="w-4 h-4" />
                            )}
                        </span>
                    )}
                    {!hasChildren && <span className="w-4" />}
                    <span className="text-sm flex-1">{item.title}</span>
                </div>
                {hasChildren && isExpanded && (
                    <div className="mt-1">
                        {item.children!.map(child => renderItem(child, depth + 1))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <aside className="w-80 bg-white border-r border-slate-200 overflow-y-auto">
            <div className="p-4 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-800">计算机组成原理</h2>
                <p className="text-xs text-slate-500 mt-1">期末复习助手</p>
            </div>

            <div className="p-3">
                <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all mb-2 ${currentView === 'dashboard'
                            ? 'bg-blue-600 text-white font-semibold shadow-md'
                            : 'hover:bg-slate-100 text-slate-700'
                        }`}
                    onClick={() => onNavigate('dashboard')}
                >
                    <Home className="w-4 h-4" />
                    <span className="text-sm">复习主页</span>
                </div>

                <div className="space-y-1">
                    {data.map(item => renderItem(item))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
