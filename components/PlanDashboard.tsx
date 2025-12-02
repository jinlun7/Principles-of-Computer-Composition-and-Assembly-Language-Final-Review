import React from 'react';
import { BookOpen, BarChart3, Layers, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { DIFFICULTY_ANALYSIS, GENERATION_PLAN } from '../constants';

const PlanDashboard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          期末复习策略与分析
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          我已收到你提供的目录结构。这是一份非常标准的《计算机组成原理与系统结构》教学大纲。
          基于你的要求，我没有立即生成复习笔记，而是首先对整个知识体系进行了<strong>分层分析</strong>，并制定了分批生成的计划。
        </p>
      </div>

      {/* Difficulty Analysis */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            难度分布分析
          </h2>
          <div className="space-y-4">
            {DIFFICULTY_ANALYSIS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                <span className={`px-2 py-1 rounded text-xs font-bold ${
                  item.level === 'High' ? 'bg-red-100 text-red-700' :
                  item.level.includes('Medium') ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {item.level}
                </span>
                <div>
                  <div className="font-semibold text-slate-700">第 {item.chapters.join(', ')} 章</div>
                  <div className="text-sm text-slate-600 mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Structural Insight */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            知识体系逻辑
          </h2>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li className="flex gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <span><strong>自底向上：</strong> 从二进制表示(Ch2)到微架构(Ch3)，再到指令集(Ch4)和汇编(Ch5)。</span>
            </li>
            <li className="flex gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0" />
              <span><strong>关键瓶颈：</strong> 第3章是硬件逻辑的巅峰，通常也是挂科率最高的章节，需要花费最多精力。</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <span><strong>软硬交接：</strong> 第4、5章是软件(汇编)控制硬件的接口，理解了这里才算懂了计算机。</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <span><strong>冯诺依曼瓶颈：</strong> 第6、7章解决CPU太快而存储/IO太慢的问题。</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Generation Plan */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <ArrowRight className="w-5 h-5 text-indigo-600" />
          分批生成计划
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {GENERATION_PLAN.map((plan) => (
            <div key={plan.phase} className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-slate-100 text-slate-400 px-2 py-1 text-xs font-mono rounded-bl-lg">
                PHASE {plan.phase}
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{plan.title}</h3>
              <p className="text-sm text-slate-600 mb-3 h-16">{plan.content}</p>
              <div className="flex items-center gap-2 text-xs font-semibold text-green-600">
                <span>{plan.status === 'Completed' ? '已完成' : '待生成'}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-green-50 text-green-800 rounded-lg text-sm border border-green-100">
          <strong>状态：</strong> 所有章节复习资料已生成完毕。请从左侧目录选择章节开始复习。
        </div>
      </div>
    </div>
  );
};

export default PlanDashboard;