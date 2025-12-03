
import React from 'react';

// === 1. Von Neumann Architecture Diagram ===
export const VonNeumannArch = () => (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center gap-4">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">冯·诺依曼结构示意图</h4>
        <svg viewBox="0 0 600 350" className="w-full max-w-lg drop-shadow-sm">
            {/* Memory */}
            <rect x="200" y="20" width="200" height="60" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="300" y="55" textAnchor="middle" className="text-sm font-bold fill-slate-700">存储器 (Memory)</text>

            {/* Bus */}
            <path d="M300 80 L300 150" stroke="#64748b" strokeWidth="4" markerEnd="url(#arrow)" />
            <path d="M100 150 L500 150" stroke="#64748b" strokeWidth="4" />

            {/* CPU Box */}
            <rect x="150" y="180" width="300" height="140" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
            <text x="160" y="200" className="text-xs font-bold fill-slate-500">CPU</text>

            {/* Controller */}
            <rect x="180" y="220" width="100" height="80" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            <text x="230" y="265" textAnchor="middle" className="text-sm font-bold fill-slate-700">控制器</text>

            {/* ALU */}
            <rect x="320" y="220" width="100" height="80" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="370" y="265" textAnchor="middle" className="text-sm font-bold fill-slate-700">运算器</text>

            {/* IO */}
            <rect x="20" y="220" width="80" height="60" rx="4" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
            <text x="60" y="255" textAnchor="middle" className="text-xs font-bold fill-slate-700">输入设备</text>

            <rect x="500" y="220" width="80" height="60" rx="4" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
            <text x="540" y="255" textAnchor="middle" className="text-xs font-bold fill-slate-700">输出设备</text>

            {/* Connections */}
            <path d="M60 220 L60 150" stroke="#64748b" strokeWidth="2" />
            <path d="M540 220 L540 150" stroke="#64748b" strokeWidth="2" />
            <path d="M230 220 L230 150" stroke="#64748b" strokeWidth="2" />
            <path d="M370 220 L370 150" stroke="#64748b" strokeWidth="2" />
        </svg>
    </div>
);

// === 2. Complement Ring (Modulo Arithmetic) ===
export const ComplementRing = () => (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center gap-4">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">补码模运算环 (4位)</h4>
        <svg viewBox="0 0 400 300" className="w-full max-w-md">
            <circle cx="200" cy="150" r="100" fill="none" stroke="#e2e8f0" strokeWidth="20" />
            {/* Numbers */}
            <g className="text-xs font-mono fill-slate-600">
                <text x="190" y="40">0000 (0)</text>
                <text x="280" y="150">0111 (+7)</text>
                <text x="190" y="270">1000 (-8)</text>
                <text x="80" y="150">1111 (-1)</text>
            </g>
            <path d="M200 60 A90 90 0 0 1 290 150" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="250" y="90" className="text-xs fill-blue-500">正数递增</text>
            <path d="M200 60 A90 90 0 0 0 110 150" fill="none" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="120" y="90" className="text-xs fill-red-500">负数递减</text>
        </svg>
        <p className="text-xs text-slate-500 text-center">4位补码范围：-8 到 +7。越过边界即溢出。</p>
    </div>
);

// === 3. Pipeline Stages ===
export const PipelineDiagram = () => (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center gap-4">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">五级指令流水线 (MIPS)</h4>
        <svg viewBox="0 0 600 200" className="w-full max-w-xl">
            {/* Stages */}
            <g transform="translate(10, 50)">
                <rect x="0" y="0" width="100" height="60" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
                <text x="50" y="35" textAnchor="middle" className="text-sm font-bold fill-blue-900">IF</text>

                <rect x="120" y="0" width="100" height="60" rx="4" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
                <text x="170" y="35" textAnchor="middle" className="text-sm font-bold fill-orange-900">ID</text>

                <rect x="240" y="0" width="100" height="60" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
                <text x="290" y="35" textAnchor="middle" className="text-sm font-bold fill-green-900">EX</text>

                <rect x="360" y="0" width="100" height="60" rx="4" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
                <text x="410" y="35" textAnchor="middle" className="text-sm font-bold fill-purple-900">MEM</text>

                <rect x="480" y="0" width="100" height="60" rx="4" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
                <text x="530" y="35" textAnchor="middle" className="text-sm font-bold fill-slate-900">WB</text>
            </g>
            {/* Arrows */}
            <path d="M110 80 L120 80" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M220 80 L240 80" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M340 80 L360 80" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M460 80 L480 80" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
                </marker>
            </defs>
        </svg>
        <div className="flex gap-4 text-xs text-slate-500">
            <span>IF: 取指</span>
            <span>ID: 译码</span>
            <span>EX: 执行</span>
            <span>MEM: 访存</span>
            <span>WB: 写回</span>
        </div>
    </div>
);

// === 4. Memory Hierarchy ===
export const MemoryHierarchy = () => (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center gap-4">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">存储器层次结构</h4>
        <svg viewBox="0 0 400 300" className="w-full max-w-sm">
            <polygon points="200,20 80,280 320,280" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />

            {/* Levels */}
            <line x1="172" y1="80" x2="228" y2="80" stroke="#cbd5e1" strokeWidth="1" />
            <text x="200" y="65" textAnchor="middle" className="text-xs font-bold fill-red-500">寄存器 (Registers)</text>

            <line x1="145" y1="140" x2="255" y2="140" stroke="#cbd5e1" strokeWidth="1" />
            <text x="200" y="120" textAnchor="middle" className="text-xs font-bold fill-orange-500">Cache (SRAM)</text>

            <line x1="117" y1="200" x2="283" y2="200" stroke="#cbd5e1" strokeWidth="1" />
            <text x="200" y="180" textAnchor="middle" className="text-xs font-bold fill-blue-500">主存 (DRAM)</text>

            <text x="200" y="250" textAnchor="middle" className="text-xs font-bold fill-slate-500">辅存 (Disk/SSD)</text>

            {/* Labels Side */}
            <text x="340" y="50" className="text-xs fill-slate-400">速度快，小，贵</text>
            <text x="340" y="270" className="text-xs fill-slate-400">速度慢，大，廉</text>
            <path d="M330 60 L330 260" stroke="#cbd5e1" strokeWidth="1" markerEnd="url(#arrow)" />
        </svg>
    </div>
);

// === 5. Cache Mapping ===
export const CacheMapping = () => (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center gap-4">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Cache 映射方式对比</h4>
        <div className="grid grid-cols-3 gap-2 w-full text-center text-xs">
            <div className="p-2 border rounded bg-white">
                <div className="font-bold text-blue-600 mb-1">直接映射</div>
                <div className="text-slate-500">对应关系固定</div>
                <div className="mt-2 text-[10px] bg-slate-100 p-1 rounded">冲突大，硬件简</div>
            </div>
            <div className="p-2 border rounded bg-white">
                <div className="font-bold text-green-600 mb-1">全相联</div>
                <div className="text-slate-500">任意位置存放</div>
                <div className="mt-2 text-[10px] bg-slate-100 p-1 rounded">冲突小，硬件繁</div>
            </div>
            <div className="p-2 border rounded bg-white">
                <div className="font-bold text-orange-600 mb-1">组相联</div>
                <div className="text-slate-500">组间固定，组内任意</div>
                <div className="mt-2 text-[10px] bg-slate-100 p-1 rounded">折中方案 (常用)</div>
            </div>
        </div>
    </div>
);

// === 6. Segmented Addressing (Logic to Physical) ===
export const SegmentedAddr = () => (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center gap-4">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">逻辑地址转换物理地址</h4>
        <svg viewBox="0 0 500 200" className="w-full max-w-lg">
            {/* Logic Address */}
            <g transform="translate(50, 40)">
                <rect x="0" y="0" width="80" height="40" fill="#dbeafe" stroke="#2563eb" />
                <text x="40" y="25" textAnchor="middle" className="text-xs font-bold fill-blue-900">段基址</text>
                <text x="40" y="-10" textAnchor="middle" className="text-[10px] fill-slate-500">16位</text>

                <rect x="100" y="0" width="80" height="40" fill="#ffedd5" stroke="#ea580c" />
                <text x="140" y="25" textAnchor="middle" className="text-xs font-bold fill-orange-900">偏移量</text>
                <text x="140" y="-10" textAnchor="middle" className="text-[10px] fill-slate-500">16位</text>
            </g>

            {/* Calculation */}
            <path d="M90 60 L120 100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M140 60 L160 100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

            <g transform="translate(100, 110)">
                <text x="100" y="0" textAnchor="middle" className="text-xs fill-slate-700">物理地址 = 段基址 × 16 + 偏移量</text>
                <text x="100" y="20" textAnchor="middle" className="text-[10px] fill-slate-500">(左移4位)</text>
            </g>

             <g transform="translate(120, 140)">
                <rect x="0" y="0" width="160" height="40" fill="#dcfce7" stroke="#16a34a" />
                <text x="80" y="25" textAnchor="middle" className="text-xs font-bold fill-green-900">物理地址 (20位)</text>
            </g>
        </svg>
    </div>
);

// === 7. Interrupt Timeline ===
export const InterruptTimeline = () => (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center gap-4">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">中断处理过程时间轴</h4>
        <svg viewBox="0 0 500 200" className="w-full max-w-lg">
             <line x1="50" y1="100" x2="450" y2="100" stroke="#cbd5e1" strokeWidth="2" />

             {/* Main Program */}
             <rect x="50" y="90" width="100" height="20" fill="#3b82f6" rx="2" />
             <text x="100" y="80" textAnchor="middle" className="text-xs fill-blue-600 font-bold">主程序</text>

             {/* Interrupt Point */}
             <circle cx="150" cy="100" r="4" fill="#ef4444" />
             <text x="150" y="130" textAnchor="middle" className="text-[10px] fill-red-500">中断请求</text>

             {/* Response */}
             <path d="M150 100 L180 50 L350 50 L380 100" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4" />

             {/* ISR */}
             <rect x="200" y="40" width="120" height="20" fill="#f59e0b" rx="2" />
             <text x="260" y="30" textAnchor="middle" className="text-xs fill-orange-600 font-bold">中断服务程序 (ISR)</text>

             {/* Return */}
             <rect x="380" y="90" width="70" height="20" fill="#3b82f6" rx="2" />
             <text x="415" y="80" textAnchor="middle" className="text-xs fill-blue-600 font-bold">继续执行</text>

             <text x="260" y="150" textAnchor="middle" className="text-[10px] fill-slate-400">保护现场 -> 服务 -> 恢复现场 -> 返回</text>
        </svg>
    </div>
);

const DIAGRAM_MAP: Record<string, React.FC> = {
    VonNeumannArch,
    ComplementRing,
    PipelineDiagram,
    MemoryHierarchy,
    CacheMapping,
    SegmentedAddr,
    InterruptTimeline,
};

export default DIAGRAM_MAP;
