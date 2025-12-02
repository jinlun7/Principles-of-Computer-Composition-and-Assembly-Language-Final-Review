
import { Part, ContentBlock } from './types';

// --- CONTENT REGISTRY (FLAT MAP) ---
// This acts as the database. Every ID in the syllabus maps to a block here.

export const CONTENT_REGISTRY: Record<string, ContentBlock> = {
  // === CHAPTER 1 ===
  "ch1": {
    id: "ch1",
    type: "chapter",
    title: "第1章 绪论",
    description: "本章主要考查计算机的基本组成框架与性能指标计算。重点在于冯·诺依曼结构特点、五大部件功能以及性能公式（CPU时间、CPI、MIPS）的应用。",
    childrenIds: ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"]
  },
  "1.1": {
    id: "1.1",
    type: "section",
    title: "1.1 计算机的基本概念",
    description: "理解计算机系统的核心工作原理：存储程序。",
    childrenIds: ["1.1.1", "1.1.2"]
  },
  "1.1.1": {
    id: "1.1.1",
    type: "subsection",
    title: "1.1.1 存储程序工作方式",
    description: "这是计算机组成原理中最基础的理论基石，由冯·诺依曼提出。",
    keyPoints: [
      {
        title: "冯·诺依曼体制核心",
        content: "1. 采用二进制：程序和数据都用二进制代码表示。\n2. 存储程序：程序和数据预先存放在存储器中，计算机自动、连续地执行。\n3. 五大部件：运算器、控制器、存储器、输入设备、输出设备。\n4. 指令执行：以运算器为中心（早期），指令由操作码和地址码组成。",
        isExamFocus: true
      },
      {
        title: "现代计算机结构的改进",
        content: "现代计算机以【存储器】为中心，减轻了CPU在I/O操作上的负担（如DMA技术）。"
      }
    ],
    examples: [
      {
        question: "冯·诺依曼计算机中指令和数据均以二进制形式存放在存储器中，CPU如何区分它们？",
        solution: "CPU通过指令周期的不同阶段来区分。\n在【取指周期】取出的为指令；\n在【执行周期】（或间址周期）取出的为数据。",
        tip: "这是一个经典简答题/选择题。"
      }
    ]
  },
  "1.1.2": {
    id: "1.1.2",
    type: "subsection",
    title: "1.1.2 信息的数字化表示",
    description: "为什么计算机要使用二进制？",
    keyPoints: [
      {
        title: "二进制的优势",
        content: "1. 物理器件易实现（开关的通/断，电压的高/低）。\n2. 运算规则简单（只有0和1）。\n3. 逻辑判断方便（对应逻辑代数的真/假）。\n4. 抗干扰能力强。"
      }
    ]
  },
  "1.2": {
    id: "1.2",
    type: "section",
    title: "1.2 计算机系统的硬件和软件组成",
    description: "硬件是躯体，软件是灵魂。",
    childrenIds: ["1.2.1", "1.2.2"]
  },
  "1.2.1": {
    id: "1.2.1",
    type: "subsection",
    title: "1.2.1 计算机硬件系统",
    keyPoints: [
      {
        title: "CPU (中央处理器)",
        content: "CPU = 运算器 (ALU) + 控制器 (CU) + 寄存器组 (Registers)。\n核心功能：指令控制、操作控制、时间控制、数据加工。"
      },
      {
        title: "主存储器 (Main Memory)",
        content: "由存储体（M）、地址寄存器（MAR）、数据寄存器（MDR）组成。\n注意：MAR的位数决定了寻址范围，MDR的位数决定了字长。"
      }
    ]
  },
  "1.2.2": {
    id: "1.2.2",
    type: "subsection",
    title: "1.2.2 计算机软件系统",
    keyPoints: [
      {
        title: "系统软件 vs 应用软件",
        content: "系统软件：OS、DBMS、语言处理程序（汇编器、编译器）、辅助工具。\n应用软件：用户编写的程序。"
      }
    ]
  },
  "1.3": {
    id: "1.3",
    type: "section",
    title: "1.3 层次结构模型",
    description: "计算机系统是一个复杂的层次结构，从底层硬件到上层应用。",
    childrenIds: ["1.3.1", "1.3.2"]
  },
  "1.3.1": {
    id: "1.3.1",
    type: "subsection",
    title: "1.3.1 多级层次结构",
    keyPoints: [
      {
        title: "五个层次",
        content: "L0: 微程序机器层 (微指令)\nL1: 传统机器语言层 (机器指令)\nL2: 操作系统层 (系统调用)\nL3: 汇编语言层 (汇编指令)\nL4: 高级语言层 (C/C++, Java等)",
        isExamFocus: true
      }
    ]
  },
  "1.3.2": {
    id: "1.3.2",
    type: "subsection",
    title: "1.3.2 软硬件逻辑等价性",
    keyPoints: [
      {
        title: "逻辑等价性",
        content: "任何由软件实现的操作（如乘法）都可以由硬件直接实现；任何由硬件实现的操作也可以由软件模拟。\n选择标准：性价比、速度（硬件快）、灵活性（软件好）。"
      }
    ]
  },
  "1.4": {
    id: "1.4",
    type: "section",
    title: "1.4 计算机的工作过程",
    childrenIds: ["1.4.1"]
  },
  "1.4.1": {
    id: "1.4.1",
    type: "subsection",
    title: "1.4.1 指令执行过程",
    keyPoints: [
      {
        title: "基本周期",
        content: "取指周期 -> 译码/分析 -> 执行周期 -> (写回)"
      },
      {
        title: "取指微操作",
        content: "1. PC -> MAR\n2. M -> MDR -> IR\n3. PC + 1 -> PC",
        isExamFocus: true
      }
    ]
  },
  "1.5": {
    id: "1.5",
    type: "section",
    title: "1.5 计算机的特点和性能指标",
    description: "本章唯一的计算大题出处。",
    childrenIds: ["1.5.1", "1.5.2"]
  },
  "1.5.1": {
    id: "1.5.1",
    type: "subsection",
    title: "1.5.1 计算机的特点",
    keyPoints: [
      {
        title: "主要特点",
        content: "运算速度快、计算精度高、记忆能力强、逻辑判断能力、自动控制能力。"
      }
    ]
  },
  "1.5.2": {
    id: "1.5.2",
    type: "subsection",
    title: "1.5.2 计算机的性能指标",
    keyPoints: [
      {
        title: "核心计算公式",
        content: "必须背诵以下公式，考试必考。",
        isExamFocus: true,
        formulas: [
          "CPU时钟周期 = 1 / 主频 (f)",
          "CPI (Cycles Per Instruction) = 执行某段程序所需的时钟周期数 / 指令条数",
          "CPU执行时间 = (指令条数 × CPI) / 主频",
          "MIPS = 指令条数 / (执行时间 × 10^6) = 主频 / (CPI × 10^6)"
        ]
      },
      {
        title: "Amdahl定律",
        content: "加速比 S = 1 / ((1 - Fe) + Fe / Se)\nFe: 可改进部分的比例\nSe: 改进部分的加速倍数"
      }
    ],
    examples: [
      {
        question: "某机主频 1.2GHz，指令序列包含 A, B, C 三类指令，占比分别为 50%, 30%, 20%，CPI 分别为 2, 3, 5。求程序的平均 CPI 和 MIPS。",
        solution: "1. 平均 CPI = 0.5×2 + 0.3×3 + 0.2×5 = 1.0 + 0.9 + 1.0 = 2.9\n2. MIPS = f / (CPI × 10^6) = 1.2 × 10^9 / (2.9 × 10^6) ≈ 413.8 MIPS",
        tip: "MIPS 计算时不要忘记分母里的 10^6。"
      }
    ]
  },
  "1.6": {
    id: "1.6",
    type: "section",
    title: "1.6 计算机的发展与应用",
    childrenIds: ["1.6.1"]
  },
  "1.6.1": {
    id: "1.6.1",
    type: "subsection",
    title: "1.6.1 摩尔定律",
    keyPoints: [
      {
        title: "Moore's Law",
        content: "集成电路芯片上所集成的晶体管数目，每隔 18-24 个月翻一番，性能提升一倍，价格降低一半。"
      }
    ]
  },

  // === CHAPTER 2 ===
  "ch2": {
    id: "ch2",
    type: "chapter",
    title: "第2章 信息表示",
    description: "计算机组成的基石。必考点包括：补码的计算与范围、IEEE754浮点数转换。",
    childrenIds: ["2.1", "2.2", "2.3"]
  },
  "2.1": {
    id: "2.1",
    type: "section",
    title: "2.1 数值型数据的表示",
    description: "定点数处理整数和小数，浮点数处理极大极小值。",
    childrenIds: ["2.1.1", "2.1.2"]
  },
  "2.1.1": {
    id: "2.1.1",
    type: "subsection",
    title: "2.1.1 带符号数的表示",
    keyPoints: [
      {
        title: "原码、反码、补码",
        content: "正数：三码合一。\n负数：\n- 原码：符号位为1，数值位不变。\n- 反码：符号位为1，数值位取反。\n- 补码：反码 + 1。",
        isExamFocus: true
      },
      {
        title: "补码的特殊性质",
        content: "1. 0 的补码唯一 (00...0)。\n2. n位补码表示范围：-2^(n-1) ~ +2^(n-1)-1。\n3. 例如 8位补码范围：-128 ~ +127 (注意 -128 没有对应的原码和反码)。"
      }
    ],
    examples: [
      {
        question: "已知 x = -0.1011(二进制)，求 [x]原 和 [x]补 (设字长8位)。",
        solution: "x是纯小数。\n[x]原 = 1.1011000 (符号位1，数值位补0对齐)\n[x]反 = 1.0100111\n[x]补 = 1.0101000 (反码末位+1)",
        tip: "补0时注意：整数在前面补0，小数在后面补0。"
      }
    ]
  },
  "2.1.2": {
    id: "2.1.2",
    type: "subsection",
    title: "2.1.2 定点数与浮点数 (IEEE754)",
    description: "本节是全书第一个难点，尤其是IEEE754转换。",
    keyPoints: [
      {
        title: "IEEE 754 单精度浮点数 (32位)",
        content: "结构：S(1位符号) | E(8位阶码) | M(23位尾数)。\n公式：Value = (-1)^S × 1.M × 2^(E-127)。",
        isExamFocus: true,
        formulas: [
          "阶码 E (移码) = 真值指数 e + 127",
          "尾数 M = 原数值归一化后的“小数点后部分” (隐含最高位1)"
        ]
      }
    ],
    examples: [
      {
        question: "将 20.59375 转换为 IEEE754 单精度格式 (十六进制表示)。",
        solution: "1. 整数部分 20 = 10100(B)\n2. 小数部分 0.59375 = 0.10011(B)\n3. 合并：10100.10011 = 1.010010011 × 2^4\n4. 符号 S=0\n5. 阶码 E = 4 + 127 = 131 = 10000011(B)\n6. 尾数 M = 010010011000...0 (补足23位)\n7. 组合：0 | 10000011 | 01001001100000000000000\n8. 十六进制：41 A4 C0 00 H",
        tip: "这题计算量大，考试时要细心。记住 0.5=2^-1, 0.25=2^-2, 0.125=2^-3..."
      }
    ]
  },
  "2.2": {
    id: "2.2",
    type: "section",
    title: "2.2 字符的表示",
    childrenIds: ["2.2.1"]
  },
  "2.2.1": {
    id: "2.2.1",
    type: "subsection",
    title: "2.2.1 ASCII与Unicode",
    keyPoints: [
      {
        title: "ASCII",
        content: "7位编码，共128个字符。最高位通常为0或作奇偶校验。"
      },
      {
        title: "汉字编码",
        content: "国标码 (GB2312) -> 机内码 (GB2312 + 8080H) 以区分ASCII。"
      }
    ]
  },
  "2.3": {
    id: "2.3",
    type: "section",
    title: "2.3 指令信息的表示",
    childrenIds: ["2.3.1", "2.3.2"]
  },
  "2.3.1": {
    id: "2.3.1",
    type: "subsection",
    title: "2.3.1 指令格式与操作码",
    keyPoints: [
      {
        title: "指令组成",
        content: "操作码 (Opcode) + 地址码 (Operand/Address)。"
      },
      {
        title: "定长 vs 变长",
        content: "定长操作码：译码简单，浪费空间。\n扩展操作码：利用地址位扩展操作码长度，高频指令用短操作码。"
      }
    ]
  },
  "2.3.2": {
    id: "2.3.2",
    type: "subsection",
    title: "2.3.2 寻址方式概述",
    keyPoints: [
      {
        title: "常见方式",
        content: "立即寻址 (Operand in instruction)\n直接寻址 (Addr in instruction)\n间接寻址 (Addr points to Addr)\n寄存器寻址 (In Register)\n寄存器间接寻址 (Reg holds Addr)"
      }
    ]
  },

  // === CHAPTER 3 ===
  "ch3": {
    id: "ch3",
    type: "chapter",
    title: "第3章 微体系结构层",
    description: "本章进入CPU内部，理解数据通路和控制逻辑，以及流水线技术。",
    childrenIds: ["3.1", "3.2", "3.3"]
  },
  "3.1": { id: "3.1", type: "section", title: "3.1 CPU的数据通路", childrenIds: ["3.1.1", "3.1.2"] },
  "3.1.1": {
    id: "3.1.1",
    type: "subsection",
    title: "3.1.1 单总线结构",
    keyPoints: [{ title: "特点", content: "所有部件挂在一条总线上，同一时刻只能有一个数据传输。结构简单但存在瓶颈。" }]
  },
  "3.1.2": {
    id: "3.1.2",
    type: "subsection",
    title: "3.1.2 多总线结构",
    keyPoints: [{ title: "特点", content: "如三总线（数据、地址、控制或输入、输出、DMA），支持并行传输，效率高。" }]
  },
  "3.2": { id: "3.2", type: "section", title: "3.2 控制单元的设计", childrenIds: ["3.2.1", "3.2.2"] },
  "3.2.1": {
    id: "3.2.1",
    type: "subsection",
    title: "3.2.1 硬布线控制器",
    keyPoints: [{ title: "原理", content: "使用组合逻辑电路（门电路）产生控制信号。\n优点：速度快（RISC常用）。\n缺点：设计复杂，修改困难。" }]
  },
  "3.2.2": {
    id: "3.2.2",
    type: "subsection",
    title: "3.2.2 微程序控制器",
    keyPoints: [
      { title: "原理", content: "将控制信号编码成微指令，存放在控制存储器（CM）中。执行机器指令就是执行一段微程序。" },
      { title: "概念辨析", content: "微命令 -> 微指令 -> 微程序 -> 机器指令。\nCM（ROM） vs 主存（RAM）。", isExamFocus: true }
    ]
  },
  "3.3": { id: "3.3", type: "section", title: "3.3 指令流水线", childrenIds: ["3.3.1", "3.3.2"] },
  "3.3.1": {
    id: "3.3.1",
    type: "subsection",
    title: "3.3.1 流水线原理",
    keyPoints: [
      { title: "五级流水", content: "IF (取指) -> ID (译码) -> EX (执行) -> MEM (访存) -> WB (写回)。" },
      { title: "加速比", content: "理想情况下，CPI趋近于1。S = nk / (n + k - 1) ≈ k (n很大时)。" }
    ]
  },
  "3.3.2": {
    id: "3.3.2",
    type: "subsection",
    title: "3.3.2 流水线冒险",
    keyPoints: [
      { title: "结构冒险", content: "资源冲突（如同时访问内存）。解决：指令/数据Cache分离。" },
      { title: "数据冒险", content: "RAW (Read After Write)。解决：数据旁路 (Forwarding)、暂停 (Stall)。" },
      { title: "控制冒险", content: "分支指令导致PC改变。解决：分支预测、延迟槽。" }
    ]
  },

  // === CHAPTER 4 ===
  "ch4": {
    id: "ch4",
    type: "chapter",
    title: "第4章 指令系统层",
    description: "深入了解指令集架构 (ISA)，特别是 x86 体系。",
    childrenIds: ["4.1", "4.2"]
  },
  "4.1": { id: "4.1", type: "section", title: "4.1 指令系统体系结构", childrenIds: ["4.1.1"] },
  "4.1.1": {
    id: "4.1.1",
    type: "subsection",
    title: "4.1.1 CISC vs RISC",
    keyPoints: [
      { title: "CISC (复杂指令集)", content: "指令多且复杂，变长，微程序控制。代表：x86。" },
      { title: "RISC (精简指令集)", content: "指令少且简单，定长，硬布线控制，依赖编译器优化。代表：ARM, MIPS, RISC-V。", isExamFocus: true }
    ]
  },
  "4.2": { id: "4.2", type: "section", title: "4.2 寻址方式详解", childrenIds: ["4.2.1"] },
  "4.2.1": {
    id: "4.2.1",
    type: "subsection",
    title: "4.2.1 基本寻址方式",
    description: "掌握有效地址 EA 的计算。",
    keyPoints: [
      { title: "相对寻址", content: "EA = (PC) + Offset。用于相对跳转（循环、if）。" },
      { title: "基址寻址", content: "EA = (BaseReg) + Offset。用于多道程序重定位。" },
      { title: "变址寻址", content: "EA = (IndexReg) + Offset。用于数组访问。", isExamFocus: true }
    ]
  },

  // === CHAPTER 5 ===
  "ch5": {
    id: "ch5",
    type: "chapter",
    title: "第5章 汇编语言层",
    description: "汇编语言是机器语言的助记符表示，理解底层堆栈和函数调用。",
    childrenIds: ["5.1", "5.2"]
  },
  "5.1": { id: "5.1", type: "section", title: "5.1 汇编基础", childrenIds: ["5.1.1"] },
  "5.1.1": {
    id: "5.1.1",
    type: "subsection",
    title: "5.1.1 语句格式",
    keyPoints: [{ title: "格式", content: "[Label:] Mnemonic [Operands] [;Comment]\n例如: LOOP: ADD AX, BX ; AX = AX + BX" }]
  },
  "5.2": { id: "5.2", type: "section", title: "5.2 程序流程控制", childrenIds: ["5.2.1", "5.2.2"] },
  "5.2.1": {
    id: "5.2.1",
    type: "subsection",
    title: "5.2.1 顺序与分支",
    keyPoints: [{ title: "标志寄存器", content: "CF(进位), ZF(零), SF(符号), OF(溢出)。\nCMP A, B 后根据标志位跳转 (JE, JNE, JG, JL)。" }]
  },
  "5.2.2": {
    id: "5.2.2",
    type: "subsection",
    title: "5.2.2 循环与子程序",
    keyPoints: [{ title: "栈操作", content: "PUSH, POP。栈底高地址，栈顶低地址。\nCALL指令：PUSH PC, JMP Target。\nRET指令：POP PC。" }]
  },

  // === CHAPTER 6 ===
  "ch6": {
    id: "ch6",
    type: "chapter",
    title: "第6章 存储系统",
    description: "存储墙问题与层次化存储结构，重点在 Cache 和虚拟存储器。",
    childrenIds: ["6.1", "6.2", "6.3", "6.4"]
  },
  "6.1": { id: "6.1", type: "section", title: "6.1 存储器概述", childrenIds: ["6.1.1"] },
  "6.1.1": {
    id: "6.1.1",
    type: "subsection",
    title: "6.1.1 分类与层级",
    keyPoints: [{ title: "局部性原理", content: "时间局部性（循环）、空间局部性（数组）。这是Cache存在的基础。" }]
  },
  "6.2": { id: "6.2", type: "section", title: "6.2 主存储器", childrenIds: ["6.2.1"] },
  "6.2.1": {
    id: "6.2.1",
    type: "subsection",
    title: "6.2.1 存储扩展",
    keyPoints: [
      { title: "位扩展", content: "增加字长 (8位 -> 16位)。数据线并联。" },
      { title: "字扩展", content: "增加容量 (1K -> 2K)。地址线高位做片选 (CS)。" },
      { title: "多体并行", content: "高位交叉 (顺序)、低位交叉 (流水线，性能好)。" }
    ]
  },
  "6.3": { id: "6.3", type: "section", title: "6.3 Cache", childrenIds: ["6.3.1", "6.3.2"] },
  "6.3.1": {
    id: "6.3.1",
    type: "subsection",
    title: "6.3.1 映射方式",
    keyPoints: [
      { title: "直接映射", content: "Addr % Lines。简单，冲突率高。", isExamFocus: true },
      { title: "全相联", content: "任意放。冲突低，比较器贵。"},
      { title: "组相联", content: "Addr % Sets。折中方案 (2路/4路常用)。"}
    ],
    examples: [{
        question: "Cache容量16KB，块大小64B，采用2路组相联。主存地址32位，求Tag, Set, Offset位数。",
        solution: "1. 块内偏移 Offset: 64B -> 6位。\n2. 组数 Sets: (16KB / 64B) / 2 = 128组 -> 7位。\n3. Tag: 32 - 7 - 6 = 19位。",
        tip: "Tag + Set + Offset = Total Address Bits"
    }]
  },
  "6.3.2": {
    id: "6.3.2",
    type: "subsection",
    title: "6.3.2 替换算法",
    keyPoints: [{ title: "算法", content: "RAND (随机), FIFO (先进先出), LRU (最近最少使用 - 最好)。" }]
  },
  "6.4": { id: "6.4", type: "section", title: "6.4 虚拟存储器", childrenIds: ["6.4.1"] },
  "6.4.1": {
    id: "6.4.1",
    type: "subsection",
    title: "6.4.1 页式虚拟存储器",
    keyPoints: [{ title: "TLB (快表)", content: "TLB是页表的Cache，用于加速虚拟地址到物理地址的转换。" }]
  },

  // === CHAPTER 7 ===
  "ch7": {
    id: "ch7",
    type: "chapter",
    title: "第7章 输入/输出系统",
    description: "CPU与外设的通信方式。",
    childrenIds: ["7.1", "7.2"]
  },
  "7.1": { id: "7.1", type: "section", title: "7.1 I/O接口", childrenIds: ["7.1.1"] },
  "7.1.1": {
    id: "7.1.1",
    type: "subsection",
    title: "7.1.1 接口功能",
    keyPoints: [{ title: "功能", content: "数据缓冲、电平转换、地址译码、状态控制。" }]
  },
  "7.2": { id: "7.2", type: "section", title: "7.2 I/O控制方式", childrenIds: ["7.2.1", "7.2.2", "7.2.3"] },
  "7.2.1": {
    id: "7.2.1",
    type: "subsection",
    title: "7.2.1 程序查询方式",
    keyPoints: [{ title: "特点", content: "CPU不断查询状态位，串行工作，效率极低 (踏步等待)。" }]
  },
  "7.2.2": {
    id: "7.2.2",
    type: "subsection",
    title: "7.2.2 中断方式",
    keyPoints: [
      { title: "流程", content: "中断请求 -> 中断响应 -> 保护现场 -> 中断服务(ISR) -> 恢复现场 -> 中断返回。", isExamFocus: true },
      { title: "多重中断", content: "利用中断屏蔽技术实现中断嵌套（高优先级打断低优先级）。" }
    ]
  },
  "7.2.3": {
    id: "7.2.3",
    type: "subsection",
    title: "7.2.3 DMA方式",
    keyPoints: [
      { title: "特点", content: "DMA控制器接管总线，实现内存与外设直接传输数据块，不经过CPU。" },
      { title: "方式", content: "周期挪用 (Cycle Stealing)、停止CPU访存、突发传输。" }
    ]
  }
};


// --- SYLLABUS DATA ---

export const SYLLABUS_DATA: Part[] = [
  {
    title: "第一篇 基础知识",
    chapters: [
      {
        id: "ch1",
        title: "第1章 绪论",
        children: [
          {
            id: "1.1",
            title: "1.1 计算机的基本概念",
            children: [
              { id: "1.1.1", title: "1.1.1 存储程序工作方式" },
              { id: "1.1.2", title: "1.1.2 信息的数字化表示" }
            ]
          },
          {
            id: "1.2",
            title: "1.2 计算机系统的硬件和软件组成",
            children: [
              { id: "1.2.1", title: "1.2.1 计算机硬件系统" },
              { id: "1.2.2", title: "1.2.2 计算机软件系统" }
            ]
          },
          {
            id: "1.3",
            title: "1.3 层次结构模型",
            children: [
              { id: "1.3.1", title: "1.3.1 多级层次结构" },
              { id: "1.3.2", title: "1.3.2 软硬件逻辑等价性" }
            ]
          },
          {
            id: "1.4",
            title: "1.4 计算机的工作过程",
            children: [
              { id: "1.4.1", title: "1.4.1 指令执行过程" }
            ]
          },
          {
            id: "1.5",
            title: "1.5 计算机的特点和性能指标",
            children: [
              { id: "1.5.1", title: "1.5.1 计算机的特点" },
              { id: "1.5.2", title: "1.5.2 计算机的性能指标" }
            ]
          },
          {
            id: "1.6",
            title: "1.6 计算机的发展与应用",
            children: [
              { id: "1.6.1", title: "1.6.1 摩尔定律" }
            ]
          }
        ]
      },
      {
        id: "ch2",
        title: "第2章 信息表示",
        children: [
          {
            id: "2.1",
            title: "2.1 数值型数据的表示",
            children: [
              { id: "2.1.1", title: "2.1.1 带符号数的表示" },
              { id: "2.1.2", title: "2.1.2 定点数与浮点数" }
            ]
          },
          {
            id: "2.2",
            title: "2.2 字符的表示",
            children: [
              { id: "2.2.1", title: "2.2.1 ASCII与Unicode" }
            ]
          },
          {
            id: "2.3",
            title: "2.3 指令信息的表示",
            children: [
              { id: "2.3.1", title: "2.3.1 指令格式与操作码" },
              { id: "2.3.2", title: "2.3.2 寻址方式概述" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "第二篇 计算机系统结构",
    chapters: [
      {
        id: "ch3",
        title: "第3章 微体系结构层",
        children: [
            { id: "3.1", title: "3.1 CPU的数据通路", children: [
                { id: "3.1.1", title: "3.1.1 单总线结构" },
                { id: "3.1.2", title: "3.1.2 多总线结构" }
            ]},
            { id: "3.2", title: "3.2 控制单元的设计", children: [
                { id: "3.2.1", title: "3.2.1 硬布线控制器" },
                { id: "3.2.2", title: "3.2.2 微程序控制器" }
            ]},
            { id: "3.3", title: "3.3 指令流水线", children: [
                { id: "3.3.1", title: "3.3.1 流水线原理" },
                { id: "3.3.2", title: "3.3.2 流水线冒险" }
            ]}
        ] 
      },
      {
        id: "ch4",
        title: "第4章 指令系统层",
        children: [
            { id: "4.1", title: "4.1 指令系统体系结构", children: [
                { id: "4.1.1", title: "4.1.1 CISC vs RISC" }
            ]},
            { id: "4.2", title: "4.2 寻址方式详解", children: [
                { id: "4.2.1", title: "4.2.1 基本寻址方式" }
            ]}
        ]
      },
      {
        id: "ch5",
        title: "第5章 汇编语言层",
        children: [
             { id: "5.1", title: "5.1 汇编基础", children: [
                { id: "5.1.1", title: "5.1.1 语句格式" }
             ]},
             { id: "5.2", title: "5.2 程序流程控制", children: [
                { id: "5.2.1", title: "5.2.1 顺序与分支" },
                { id: "5.2.2", title: "5.2.2 循环与子程序" }
             ]}
        ]
      }
    ]
  },
  {
    title: "第三篇 存储系统和输入/输出系统",
    chapters: [
      { id: "ch6", title: "第6章 存储系统", children: [
          { id: "6.1", title: "6.1 存储器概述", children: [{id: "6.1.1", title: "6.1.1 分类与层级"}] },
          { id: "6.2", title: "6.2 主存储器", children: [{id: "6.2.1", title: "6.2.1 存储扩展"}] },
          { id: "6.3", title: "6.3 Cache", children: [{id: "6.3.1", title: "6.3.1 映射方式"}, {id: "6.3.2", title: "6.3.2 替换算法"}] },
          { id: "6.4", title: "6.4 虚拟存储器", children: [{id: "6.4.1", title: "6.4.1 页式虚拟存储器"}] }
      ] },
      { id: "ch7", title: "第7章 输入/输出系统", children: [
          { id: "7.1", title: "7.1 I/O接口", children: [{id: "7.1.1", title: "7.1.1 接口功能"}] },
          { id: "7.2", title: "7.2 I/O控制方式", children: [
              {id: "7.2.1", title: "7.2.1 程序查询方式"},
              {id: "7.2.2", title: "7.2.2 中断方式"},
              {id: "7.2.3", title: "7.2.3 DMA方式"}
          ]}
      ] }
    ]
  }
];

export const DIFFICULTY_ANALYSIS = [
  { level: "Low", chapters: ["1", "2"], desc: "基础概念与数据表示。重点在于二进制转换、补码计算及浮点数标准。" },
  { level: "High", chapters: ["3"], desc: "核心难点。微体系结构、数据通路、流水线及微程序设计，逻辑复杂且抽象。" },
  { level: "Medium-High", chapters: ["4", "5"], desc: "记忆与应用。80x86指令集繁多，汇编编程需要严密的逻辑思维。" },
  { level: "Medium", chapters: ["6", "7"], desc: "系统集成。存储器扩展设计、Cache映射、中断机制与DMA，偏向硬件接口逻辑。" }
];

export const GENERATION_PLAN = [
  {
    phase: 1,
    title: "基础夯实 (第1-2章)",
    content: "完成计算机系统概论、性能指标计算、数值与字符编码（原反补、IEEE754）。",
    status: "Completed"
  },
  {
    phase: 2,
    title: "核心攻坚 (第3章)",
    content: "深入CPU内部，详解ALU、控制器、指令流水线及微程序设计。",
    status: "Completed"
  },
  {
    phase: 3,
    title: "指令与编程 (第4-5章)",
    content: "梳理80x86指令系统，掌握寻址方式，并进行汇编语言程序设计。",
    status: "Completed"
  },
  {
    phase: 4,
    title: "系统扩展 (第6-7章)",
    content: "存储器扩展逻辑、Cache机制、虚拟存储器、中断系统、DMA及总线标准。",
    status: "Completed"
  }
];
