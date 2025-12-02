
import React, { useState, useMemo } from 'react';
import { SYLLABUS_DATA, CONTENT_REGISTRY } from './constants';
import Sidebar from './components/Sidebar';
import PlanDashboard from './components/PlanDashboard';
import ContentRenderer from './components/ContentRenderer';
import { FileWarning } from 'lucide-react';

const App: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('dashboard');

  // Lookup content from the flat Registry
  const activeContent = useMemo(() => {
    if (activeId === 'dashboard') return null;
    return CONTENT_REGISTRY[activeId];
  }, [activeId]);

  const handleNavigation = (id: string) => {
    setActiveId(id);
    // Scroll to top on nav
    const main = document.getElementById('main-content');
    if (main) main.scrollTo(0,0);
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      <Sidebar 
        data={SYLLABUS_DATA} 
        onNavigate={handleNavigation} 
        currentView={activeId}
      />
      
      <main id="main-content" className="flex-1 overflow-y-auto scroll-smooth">
        {activeId === 'dashboard' ? (
          <PlanDashboard />
        ) : activeContent ? (
          <ContentRenderer 
            data={activeContent} 
            activeId={activeId}
            onNavigate={handleNavigation}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 p-8 text-center animate-in fade-in zoom-in duration-300">
            <div className="bg-white p-6 rounded-full shadow-sm mb-4">
                <FileWarning className="w-12 h-12 text-slate-300" />
            </div>
            <h2 className="text-xl font-bold text-slate-600 mb-2">内容未找到</h2>
            <p className="max-w-md text-slate-500 mb-6">
              ID: <span className="font-mono bg-slate-200 px-1 rounded">{activeId}</span> 的内容暂时无法显示。
              <br/>
              请选择左侧目录中的其他章节查看。
            </p>
            <button 
                onClick={() => setActiveId('dashboard')}
                className="px-5 py-2 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-sm"
            >
                返回复习主页
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
