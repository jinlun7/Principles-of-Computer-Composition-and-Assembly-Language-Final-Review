import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { SYLLABUS_DATA } from '../constants';

interface BreadcrumbsProps {
  activeId: string;
  onNavigate: (id: string) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ activeId, onNavigate }) => {
  // Helper to find path
  const findPath = (targetId: string): {id: string, title: string}[] => {
    for (const part of SYLLABUS_DATA) {
      for (const ch of part.chapters) {
        if (ch.id === targetId) return [{id: ch.id, title: ch.title}];
        if (ch.children) {
          for (const sec of ch.children) {
            if (sec.id === targetId) return [{id: ch.id, title: ch.title}, {id: sec.id, title: sec.title}];
            if (sec.children) {
              for (const sub of sec.children) {
                if (sub.id === targetId) return [{id: ch.id, title: ch.title}, {id: sec.id, title: sec.title}, {id: sub.id, title: sub.title}];
              }
            }
          }
        }
      }
    }
    return [];
  };

  const path = findPath(activeId);

  return (
    <nav className="flex items-center text-sm text-slate-500 mb-6 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
      <button onClick={() => onNavigate('dashboard')} className="hover:text-blue-600 flex items-center">
        <Home className="w-4 h-4 mr-1" />
        首页
      </button>
      {path.map((item, idx) => (
        <React.Fragment key={item.id}>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
          <button
            onClick={() => onNavigate(item.id)}
            className={`truncate max-w-[150px] ${idx === path.length - 1 ? 'font-bold text-slate-800' : 'hover:text-blue-600'}`}
          >
            {item.title}
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
