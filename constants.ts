
import { SyllabusItem, ContentBlock } from './types';

// --- CONTENT REGISTRY (FLAT MAP) ---
export const CONTENT_REGISTRY: Record<string, ContentBlock> = {
  // ==========================================
  // 第一篇 基础知识
  // ==========================================

  // --- 第1章 绪论 ---
  "ch1": {
    id: "ch1",
    type: "chapter",
    title: "第1章 绪论",
    description: "本章主要介绍计算机的基本组成、工作原理及性能指标。对于零基础复习，重点在于理解冯·诺依曼结构和掌握性能公式（MIPS、CPI、执行时间）的计算。",
    childrenIds: ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"]
  },
  "1.1": {
    id: "1.1",
    type: "section",
    title: "1.1 计算机的基本概念",
    childrenIds: ["1.1.1", "1.1.2"]
  },
  "1.1.1": {
    id: "1.1.1",
    type: "subsection",
    title: "1.1.1 存储程序工作方式",
    description: "这是现代计算机（冯·诺依曼机）最根本的工作原理。",
    keyPoints: [
      {
        title: "冯·诺依曼结构的核心思想",
        content: "1. **二进制表示**：程序和数据在计算机中都采用二进制形式表示。\n2. **存储程序**：程序和数据预先存放在存储器中，计算机启动后自动、连续地执行指令，无需人工干预。\n3. **五大部件**：计算机由运算器、控制器、存储器、输入设备和输出设备五大部分组成。\n4. **以运算器为中心**：早期的冯·诺依曼机以运算器为中心（现代计算机多以存储器为中心）。",
        isExamFocus: true
      }
    ],
    examples: [
      {
        question: "什么是'存储程序'工作方式？",
        solution: "指将指令和数据预先存放在主存储器中，计算机启动后，CPU能自动取出指令并执行，直到程序结束。这是计算机能自动工作的关键。",
        tip: "简答题常考概念。"
      },
      {
        question: "冯·诺依曼计算机中指令和数据都以二进制存放，CPU如何区分它们？",
        solution: "CPU根据指令周期的不同阶段来区分：\n- 在**取指周期**取出的内容被视为**指令**；\n- 在**执行周期**取出的内容被视为**数据**。",
        tip: "选择题高频考点。"
      }
    ]
  },
  "1.1.2": {
    id: "1.1.2",
    type: "subsection",
    title: "1.1.2 信息的数字化表示",
    keyPoints: [
      {
        title: "为什么用二进制？",
        content: "1. 物理实现容易（开关通/断，电压高/低）。\n2. 运算规则简单。\n3. 抗干扰能力强。\n4. 易于逻辑运算（对应逻辑代数中的真/假）。"
      }
    ]
  },
  "1.2": {
    id: "1.2",
    type: "section",
    title: "1.2 计算机系统的硬件和软件组成",
    childrenIds: ["1.2.1", "1.2.2"]
  },
  "1.2.1": {
    id: "1.2.1",
    type: "subsection",
    title: "1.2.1 计算机硬件系统",
    keyPoints: [
      {
        title: "五大部件的功能",
        content: "- **运算器 (ALU)**：进行算术运算（加减乘除）和逻辑运算。\n- **控制器 (CU)**：指挥全机工作，发出控制信号（取指令、分析指令、执行指令）。\n- **存储器**：存放程序和数据。\n- **输入/输出设备 (I/O)**：人机交互的桥梁。\n\n*注：CPU = 运算器 + 控制器*"
      },
      {
        title: "主存的组成",
        content: "- **MAR (Memory Address Register)**：地址寄存器，位数决定存储容量。\n- **MDR (Memory Data Register)**：数据寄存器，位数决定存储字长。",
        isExamFocus: true
      }
    ]
  },
  "1.2.2": {
    id: "1.2.2",
    type: "subsection",
    title: "1.2.2 计算机软件系统",
    keyPoints: [
      {
        title: "分类",
        content: "- **系统软件**：操作系统(OS)、数据库管理系统(DBMS)、语言处理程序（编译器/汇编器）。\n- **应用软件**：用户为解决具体问题编写的程序。"
      }
    ]
  },
  "1.3": {
    id: "1.3",
    type: "section",
    title: "1.3 层次结构模型",
    childrenIds: ["1.3.1", "1.3.2", "1.3.3"]
  },
  "1.3.1": {
    id: "1.3.1",
    type: "subsection",
    title: "1.3.1 从计算机系统组成角度划分层次结构",
    keyPoints: [
      {
        title: "多级层次结构（由下至上）",
        content: "1. **微程序机器层**（微指令，硬件直接执行）\n2. **传统机器语言层**（机器指令，微程序解释）\n3. **操作系统层**（系统调用，软硬接口）\n4. **汇编语言层**（汇编指令，汇编程序翻译）\n5. **高级语言层**（高级语言，编译器翻译）",
        isExamFocus: true
      }
    ]
  },
  "1.3.2": {
    id: "1.3.2",
    type: "subsection",
    title: "1.3.2 从语言功能角度划分层次结构",
    keyPoints: [{ title: "说明", content: "即高级语言 -> 汇编语言 -> 机器语言 -> 微指令 的翻译/解释过程。" }]
  },
  "1.3.3": {
    id: "1.3.3",
    type: "subsection",
    title: "1.3.3 软件和硬件在逻辑上的等价",
    keyPoints: [
      {
        title: "软硬逻辑等价性",
        content: "任何由软件实现的操作（如浮点乘法）理论上都可以由专用硬件电路实现（速度快但成本高）；反之亦然（成本低但速度慢）。\n**设计决策**：根据性能价格比来决定某功能由硬件还是软件实现。"
      }
    ]
  },
  "1.4": {
    id: "1.4",
    type: "section",
    title: "1.4 计算机的工作过程",
    childrenIds: ["1.4.1", "1.4.2"]
  },
  "1.4.1": {
    id: "1.4.1",
    type: "subsection",
    title: "1.4.1 处理问题的步骤",
    keyPoints: [{ title: "步骤", content: "系统分析 -> 算法设计 -> 编写程序 -> 编译/汇编 -> 链接 -> 运行。" }]
  },
  "1.4.2": {
    id: "1.4.2",
    type: "subsection",
    title: "1.4.2 指令执行过程",
    description: "CPU 执行指令的微操作序列。",
    keyPoints: [
      {
        title: "基本指令周期",
        content: "1. **取指**：PC -> MAR -> Memory -> MDR -> IR; PC+1 -> PC。\n2. **分析 (译码)**：CU 解码操作码，生成控制信号。\n3. **执行**：ALU 进行运算。\n4. **访存/写回**：结果写回寄存器或内存。",
        isExamFocus: true
      }
    ]
  },
  "1.5": {
    id: "1.5",
    type: "section",
    title: "1.5 计算机的特点和性能指标",
    description: "本节包含必考计算题：性能指标计算。",
    childrenIds: ["1.5.1", "1.5.2"]
  },
  "1.5.1": {
    id: "1.5.1",
    type: "subsection",
    title: "1.5.1 计算机的特点",
    keyPoints: [{ title: "特点", content: "快、准、灵（逻辑判断）、大（存储容量）、通用。" }]
  },
  "1.5.2": {
    id: "1.5.2",
    type: "subsection",
    title: "1.5.2 计算机的性能指标",
    keyPoints: [
      {
        title: "核心公式 (必须背诵)",
        content: "1. **主频 (f)**：时钟频率，单位 Hz/MHz/GHz。\n2. **时钟周期 (T)**：T = 1/f。\n3. **CPI (Cycles Per Instruction)**：执行一条指令所需的平均时钟周期数。\n4. **MIPS (Million Instructions Per Second)**：每秒执行多少百万条指令。\n   **MIPS = f / (CPI × 10^6)**\n5. **CPU执行时间**：\n   **T_cpu = 指令总数 × CPI × 时钟周期 = (指令总数 × CPI) / f**",
        isExamFocus: true,
        formulas: [
          "T = 1/f",
          "MIPS = f / (CPI × 10^6)",
          "CPU Time = (Instruction Count × CPI) / f"
        ]
      }
    ],
    examples: [
      {
        question: "【习题改编】某计算机主频为 1GHz，执行一段程序包含 10^6 条指令，平均 CPI 为 5。求该程序的 CPU 执行时间和机器的 MIPS。",
        solution: "1. **已知**：f = 1GHz = 10^9 Hz, IC (指令数) = 10^6, CPI = 5。\n2. **求 CPU 执行时间**：\n   Time = (IC × CPI) / f = (10^6 × 5) / 10^9 = 5 × 10^-3 s = 5ms。\n3. **求 MIPS**：\n   MIPS = f / (CPI × 10^6) = 10^9 / (5 × 10^6) = 200 MIPS。",
        tip: "计算 MIPS 时千万别忘了分母里的 10^6，否则结果会差一百万倍。"
      },
      {
        question: "【习题改编】若将上述处理器的 CPI 降为 4，但主频也降为 0.8GHz，性能是提高了还是降低了？",
        solution: "1. **原性能**：Time1 = 5ms。\n2. **新性能**：\n   Time2 = (10^6 × 4) / (0.8 × 10^9) = 4000000 / 800000000 = 0.005s = 5ms。\n3. **结论**：性能持平（时间相同）。",
        tip: "衡量性能的唯一标准是**执行时间**，不要只看主频或 CPI。"
      }
    ]
  },
  "1.6": {
    id: "1.6",
    type: "section",
    title: "1.6 计算机的发展与应用",
    childrenIds: ["1.6.1", "1.6.2", "1.6.3"]
  },
  "1.6.1": {
    id: "1.6.1",
    type: "subsection",
    title: "1.6.1 计算机的发展历程",
    keyPoints: [{ title: "四代计算机", content: "电子管 -> 晶体管 -> 中小规模集成电路 -> 大规模/超大规模集成电路。" }]
  },
  "1.6.2": {
    id: "1.6.2",
    type: "subsection",
    title: "1.6.2 计算机性能提高的技术",
    keyPoints: [{ title: "摩尔定律", content: "集成电路上可容纳的晶体管数目，约每 18 个月增加一倍，性能提升一倍。" }]
  },
  "1.6.3": {
    id: "1.6.3",
    type: "subsection",
    title: "1.6.3 计算机应用举例",
    keyPoints: [{ title: "应用", content: "科学计算、信息处理（最广泛）、自动控制、人工智能等。" }]
  },


  // --- 第2章 信息表示 ---
  "ch2": {
    id: "ch2",
    type: "chapter",
    title: "第2章 信息表示",
    description: "本章是计算机组成原理的基石。对于考试，必须熟练掌握【补码计算】和【IEEE754浮点数】转换。",
    childrenIds: ["2.1", "2.2", "2.3"]
  },
  "2.1": {
    id: "2.1",
    type: "section",
    title: "2.1 数值型数据的表示",
    childrenIds: ["2.1.1", "2.1.2"]
  },
  "2.1.1": {
    id: "2.1.1",
    type: "subsection",
    title: "2.1.1 带符号数的表示 (原反补)",
    description: "计算机内部做减法运算时，需要将减法变为加法，这就是引入补码的原因。",
    keyPoints: [
      {
        title: "原码、反码、补码转换规则 (重点)",
        content: "对于**正数**：原码 = 反码 = 补码。\n对于**负数**：\n1. **原码**：符号位为1，数值位不变。\n2. **反码**：符号位不变，数值位按位取反。\n3. **补码**：反码 + 1。",
        isExamFocus: true
      },
      {
        title: "补码的范围与特性",
        content: "1. **表示范围** (n位)：-2^(n-1) ~ +2^(n-1)-1。\n   *例如 8位补码：-128 ~ +127。*\n2. **0 的表示**：补码中 0 只有一种表示形式 (00...0)，而原码有 +0 和 -0。",
        isExamFocus: true
      },
      {
        title: "移码",
        content: "通常用于浮点数的阶码。移码 = 补码的符号位取反。"
      }
    ],
    examples: [
      {
        question: "【习题改编】已知机器字长为8位，求整数 x = -100 (十进制) 的原码、反码和补码。",
        solution: "1. **二进制绝对值**：100 = 64 + 32 + 4 = 01100100。\n2. **原码**：符号位变1 -> 11100100。\n3. **反码**：符号位不变，数值位取反 -> 10011011。\n4. **补码**：反码 + 1 -> 10011100。",
        tip: "如果补码求原码：也是“取反加1”（针对数值位，符号位不动）。"
      },
      {
        question: "【考点】8位定点整数能表示的最小负数是多少？其补码是什么？",
        solution: "最小负数是 -128。\n补码为 10000000。\n注意：-128 没有对应的8位原码和反码，这是补码特有的。"
      }
    ]
  },
  "2.1.2": {
    id: "2.1.2",
    type: "subsection",
    title: "2.1.2 定点数与浮点数 (IEEE 754)",
    description: "本节是全书第一个难点，也是必考大题点。",
    keyPoints: [
      {
        title: "定点数 vs 浮点数",
        content: "- **定点数**：小数点固定，表示范围小，常用于整数。\n- **浮点数**：小数点浮动，表示范围大 (N = M × R^E)。"
      },
      {
        title: "IEEE 754 单精度标准 (32位)",
        content: "结构：**符号位 S (1位) | 阶码 E (8位) | 尾数 M (23位)**\n\n1. **符号位 S**：0正1负。\n2. **阶码 E**：采用移码表示，**偏移量为 127**。E = 真实指数 + 127。\n3. **尾数 M**：规格化表示 1.XXXX，**隐藏最高位 1**，只存小数部分。",
        isExamFocus: true,
        formulas: ["真值 = (-1)^S × 1.M × 2^(E-127)"]
      }
    ],
    examples: [
      {
        question: "【经典大题】将十进制数 -12.75 转换为 IEEE 754 单精度浮点数的十六进制机器码。",
        solution: "步骤 1：**转二进制**\n   - 整数 12 = 1100\n   - 小数 0.75 = 0.11\n   - 绝对值二进制 = 1100.11\n\n步骤 2：**规格化**\n   - 移动小数点：1.10011 × 2^3 (右移3位，指数为3)\n\n步骤 3：**确定各部分**\n   - **符号 S**：负数 -> 1\n   - **阶码 E**：真实指数 3 + 127 = 130 -> 10000010\n   - **尾数 M**：去头(1.) -> 10011000...0 (补足23位)\n\n步骤 4：**拼合**\n   1 | 10000010 | 10011000000000000000000\n\n步骤 5：**转十六进制**\n   1100 0001 0100 1100 0000 0000 0000 0000\n   = C1 4C 00 00 H",
        tip: "考试技巧：每4位二进制对应1位十六进制，从左到右分组转换。"
      }
    ]
  },
  "2.2": {
    id: "2.2",
    type: "section",
    title: "2.2 字符的表示",
    childrenIds: ["2.2.1", "2.2.2", "2.2.3"]
  },
  "2.2.1": {
    id: "2.2.1",
    type: "subsection",
    title: "2.2.1 ASCII",
    keyPoints: [{ title: "ASCII", content: "7位编码，表示128个字符。常用字符：'0'=30H, 'A'=41H, 'a'=61H。" }]
  },
  "2.2.2": {
    id: "2.2.2",
    type: "subsection",
    title: "2.2.2 Unicode 编码",
    keyPoints: [{ title: "Unicode", content: "统一码，涵盖世界上绝大多数字符。UTF-8 是其常见的实现方式。" }]
  },
  "2.2.3": {
    id: "2.2.3",
    type: "subsection",
    title: "2.2.3 汉字编码简介",
    keyPoints: [{ title: "GB2312", content: "双字节编码。区位码 -> 国标码 -> 机内码（最高位置1，避免与ASCII冲突）。" }]
  },
  "2.3": {
    id: "2.3",
    type: "section",
    title: "2.3 指令信息的表示",
    childrenIds: ["2.3.1", "2.3.2", "2.3.3", "2.3.4", "2.3.5", "2.3.6", "2.3.7"]
  },
  "2.3.1": {
    id: "2.3.1",
    type: "subsection",
    title: "2.3.1 指令格式",
    keyPoints: [{ title: "格式", content: "操作码 (OP) + 地址码 (A)。\n定长指令字 vs 变长指令字。" }]
  },
  "2.3.2": {
    id: "2.3.2",
    type: "subsection",
    title: "2.3.2 常用寻址方式",
    description: "寻址方式是指寻找操作数有效地址的方法。",
    keyPoints: [
      {
        title: "常见方式 (考点)",
        content: "1. **立即寻址**：操作数直接在指令中（#100）。速度最快。\n2. **直接寻址**：指令给出操作数内存地址 ([1000])。\n3. **寄存器寻址**：操作数在寄存器中 (R1)。无访存，速度快。\n4. **寄存器间接寻址**：寄存器存放操作数地址 ([R1])。\n5. **基址/变址/相对寻址**：用于数组、循环、程序浮动。",
        isExamFocus: true
      }
    ]
  },
  "2.3.3": {
    id: "2.3.3",
    type: "subsection",
    title: "2.3.3 指令类型",
    keyPoints: [{ title: "类型", content: "数据传送、算术逻辑运算、移位、程序控制（跳转）、输入输出。" }]
  },
  "2.3.4": {
    id: "2.3.4",
    type: "subsection",
    title: "2.3.4 Pentium II 指令格式",
    keyPoints: [{ title: "特点", content: "变长指令，CISC 架构的典型代表。" }]
  },
  "2.3.5": {
    id: "2.3.5",
    type: "subsection",
    title: "2.3.5 RISC 概述",
    keyPoints: [{ title: "RISC vs CISC", content: "RISC (精简指令集)：指令少、定长、单周期、硬布线控制、多寄存器（如 MIPS, ARM）。\nCISC (复杂指令集)：指令多、变长、微程序控制（如 x86）。" }]
  },
  "2.3.6": {
    id: "2.3.6",
    type: "subsection",
    title: "2.3.6 MIPS 指令系统",
    keyPoints: [{ title: "MIPS", content: "经典的 RISC 架构，32个通用寄存器，指令长度固定为32位。" }]
  },
  "2.3.7": {
    id: "2.3.7",
    type: "subsection",
    title: "2.3.7 ARM 指令系统",
    keyPoints: [{ title: "ARM", content: "Advanced RISC Machine。广泛用于移动设备。具有条件执行等特色。" }]
  },

  // ==========================================
  // 第二篇 计算机系统结构 (占位)
  // ==========================================
  "ch3": { id: "ch3", type: "chapter", title: "第3章 微体系结构层", description: "待完善...", childrenIds: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6"] },
  "3.1": { id: "3.1", type: "section", title: "3.1 CPU 的组成和功能", childrenIds: ["3.1.1", "3.1.2", "3.1.3", "3.1.4"] },
  "3.2": { id: "3.2", type: "section", title: "3.2 ALU 和运算方法", childrenIds: ["3.2.1", "3.2.2", "3.2.3", "3.2.4"] },
  "3.3": { id: "3.3", type: "section", title: "3.3 CPU 模型机的组成及其数据通路", childrenIds: ["3.3.1", "3.3.2"] },
  "3.4": { id: "3.4", type: "section", title: "3.4 组合逻辑控制器原理", childrenIds: ["3.4.1", "3.4.2", "3.4.3", "3.4.4", "3.4.5"] },
  "3.5": { id: "3.5", type: "section", title: "3.5 微程序控制器原理", childrenIds: ["3.5.1", "3.5.2", "3.5.3", "3.5.4", "3.5.5"] },
  "3.6": { id: "3.6", type: "section", title: "3.6 典型 RISC 处理器微体系结构", childrenIds: ["3.6.1", "3.6.2"] },

  "ch4": { id: "ch4", type: "chapter", title: "第4章 指令系统层", description: "待完善...", childrenIds: ["4.1", "4.2", "4.3"] },
  "4.1": { id: "4.1", type: "section", title: "4.1 80x86 CPU", childrenIds: ["4.1.1", "4.1.2", "4.1.3"] },
  "4.2": { id: "4.2", type: "section", title: "4.2 80x86 CPU 的寄存器和主存储器", childrenIds: ["4.2.1", "4.2.2"] },
  "4.3": { id: "4.3", type: "section", title: "4.3 80x86 CPU 指令系统", childrenIds: ["4.3.1", "4.3.2", "4.3.3", "4.3.4", "4.3.5", "4.3.6", "4.3.7"] },

  "ch5": { id: "ch5", type: "chapter", title: "第5章 汇编语言层", description: "待完善...", childrenIds: ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"] },
  "5.1": { id: "5.1", type: "section", title: "5.1 汇编语言层概述", childrenIds: [] },
  "5.2": { id: "5.2", type: "section", title: "5.2 汇编语言语句格式", childrenIds: [] },
  "5.3": { id: "5.3", type: "section", title: "5.3 80x86 宏汇编语言数据、表达式和运算符", childrenIds: ["5.3.1", "5.3.2", "5.3.3", "5.3.4"] },
  "5.4": { id: "5.4", type: "section", title: "5.4 80x86 宏汇编语言伪指令", childrenIds: ["5.4.1", "5.4.2", "5.4.3", "5.4.4", "5.4.5", "5.4.6", "5.4.7", "5.4.8", "5.4.9"] },
  "5.5": { id: "5.5", type: "section", title: "5.5 宏指令", childrenIds: [] },
  "5.6": { id: "5.6", type: "section", title: "5.6 汇编语言程序设计基本技术", childrenIds: ["5.6.1", "5.6.2", "5.6.3", "5.6.4", "5.6.5", "5.6.6", "5.6.7"] },

  // ==========================================
  // 第三篇 存储系统和输入/输出系统 (占位)
  // ==========================================
  "ch6": { id: "ch6", type: "chapter", title: "第6章 存储系统", description: "待完善...", childrenIds: ["6.1", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7"] },
  "6.1": { id: "6.1", type: "section", title: "6.1 存储系统概述", childrenIds: ["6.1.1", "6.1.2"] },
  "6.2": { id: "6.2", type: "section", title: "6.2 存储原理", childrenIds: ["6.2.1", "6.2.2"] },
  "6.3": { id: "6.3", type: "section", title: "6.3 主存储器的组织", childrenIds: ["6.3.1", "6.3.2", "6.3.3", "6.3.4"] },
  "6.4": { id: "6.4", type: "section", title: "6.4 高速缓冲存储器", childrenIds: ["6.4.1", "6.4.2", "6.4.3"] },
  "6.5": { id: "6.5", type: "section", title: "6.5 外部存储器", childrenIds: ["6.5.1", "6.5.2"] },
  "6.6": { id: "6.6", type: "section", title: "6.6 物理存储系统的组织", childrenIds: ["6.6.1", "6.6.2", "6.6.3"] },
  "6.7": { id: "6.7", type: "section", title: "6.7 虚拟存储系统的组织", childrenIds: ["6.7.1", "6.7.2", "6.7.3", "6.7.4"] },

  "ch7": { id: "ch7", type: "chapter", title: "第7章 输入/输出系统", description: "待完善...", childrenIds: ["7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "7.7"] },
  "7.1": { id: "7.1", type: "section", title: "7.1 输入/输出系统概述", childrenIds: ["7.1.1", "7.1.2", "7.1.3"] },
  "7.2": { id: "7.2", type: "section", title: "7.2 直接程序控制方式", childrenIds: [] },
  "7.3": { id: "7.3", type: "section", title: "7.3 程序中断方式", childrenIds: ["7.3.1", "7.3.2", "7.3.3", "7.3.4", "7.3.5"] },
  "7.4": { id: "7.4", type: "section", title: "7.4 DMA 方式", childrenIds: ["7.4.1", "7.4.2", "7.4.3", "7.4.4"] },
  "7.5": { id: "7.5", type: "section", title: "7.5 总线", childrenIds: ["7.5.1", "7.5.2", "7.5.3", "7.5.4"] },
  "7.6": { id: "7.6", type: "section", title: "7.6 典型外设接口", childrenIds: ["7.6.1", "7.6.2"] },
  "7.7": { id: "7.7", type: "section", title: "7.7 I/O 设备与 I/O 程序设计", childrenIds: ["7.7.1", "7.7.2", "7.7.3", "7.7.4", "7.7.5"] }
};


// --- SYLLABUS DATA ---
export const SYLLABUS_DATA: SyllabusItem[] = [
  {
    id: "part1",
    title: "第一篇 基础知识",
    children: [
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
              { id: "1.3.1", title: "1.3.1 划分层次结构" },
              { id: "1.3.2", title: "1.3.2 从语言功能划分" },
              { id: "1.3.3", title: "1.3.3 软硬件逻辑等价" }
            ]
          },
          {
            id: "1.4",
            title: "1.4 计算机的工作过程",
            children: [
              { id: "1.4.1", title: "1.4.1 处理问题的步骤" },
              { id: "1.4.2", title: "1.4.2 指令执行过程" }
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
              { id: "1.6.1", title: "1.6.1 计算机的发展历程" },
              { id: "1.6.2", title: "1.6.2 性能提高的技术" },
              { id: "1.6.3", title: "1.6.3 计算机应用举例" }
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
              { id: "2.2.1", title: "2.2.1 ASCII" },
              { id: "2.2.2", title: "2.2.2 Unicode 编码" },
              { id: "2.2.3", title: "2.2.3 汉字编码简介" }
            ]
          },
          {
            id: "2.3",
            title: "2.3 指令信息的表示",
            children: [
              { id: "2.3.1", title: "2.3.1 指令格式" },
              { id: "2.3.2", title: "2.3.2 常用寻址方式" },
              { id: "2.3.3", title: "2.3.3 指令类型" },
              { id: "2.3.4", title: "2.3.4 Pentium II 指令格式" },
              { id: "2.3.5", title: "2.3.5 RISC 概述" },
              { id: "2.3.6", title: "2.3.6 MIPS 指令系统" },
              { id: "2.3.7", title: "2.3.7 ARM 指令系统" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "part2",
    title: "第二篇 计算机系统结构",
    children: [
      {
        id: "ch3",
        title: "第3章 微体系结构层",
        children: [
          {
            id: "3.1",
            title: "3.1 CPU 的组成和功能",
            children: [
                { id: "3.1.1", title: "3.1.1 CPU 的组成" },
                { id: "3.1.2", title: "3.1.2 指令执行过程" },
                { id: "3.1.3", title: "3.1.3 时序控制方式" },
                { id: "3.1.4", title: "3.1.4 指令流水线" }
            ]
          },
          {
            id: "3.2",
            title: "3.2 ALU 和运算方法",
            children: [
                { id: "3.2.1", title: "3.2.1 ALU 介绍" },
                { id: "3.2.2", title: "3.2.2 定点数运算方法" },
                { id: "3.2.3", title: "3.2.3 浮点数运算方法" },
                { id: "3.2.4", title: "3.2.4 十进制数加减" }
            ]
          },
          {
            id: "3.3",
            title: "3.3 CPU 模型机",
            children: [
                { id: "3.3.1", title: "3.3.1 基本组成" },
                { id: "3.3.2", title: "3.3.2 数据传输" }
            ]
          },
          {
            id: "3.4",
            title: "3.4 组合逻辑控制器",
            children: [
                { id: "3.4.1", title: "3.4.1 模型机的指令系统" },
                { id: "3.4.2", title: "3.4.2 模型机的时序系统" },
                { id: "3.4.3", title: "3.4.3 指令流程" },
                { id: "3.4.4", title: "3.4.4 微命令的综合" },
                { id: "3.4.5", title: "3.4.5 小结" }
            ]
          },
          {
            id: "3.5",
            title: "3.5 微程序控制器",
            children: [
                { id: "3.5.1", title: "3.5.1 微程序控制概念" },
                { id: "3.5.2", title: "3.5.2 微指令编码方式" },
                { id: "3.5.3", title: "3.5.3 微程序的顺序控制" },
                { id: "3.5.4", title: "3.5.4 微指令格式" },
                { id: "3.5.5", title: "3.5.5 典型微指令举例" }
            ]
          },
          {
            id: "3.6",
            title: "3.6 典型 RISC 处理器",
            children: [
                { id: "3.6.1", title: "3.6.1 MIPS R4000" },
                { id: "3.6.2", title: "3.6.2 ARM7" }
            ]
          }
        ]
      },
      {
        id: "ch4",
        title: "第4章 指令系统层",
        children: [
          {
            id: "4.1",
            title: "4.1 80x86 CPU",
            children: [
              { id: "4.1.1", title: "4.1.1 8086/8088 CPU" },
              { id: "4.1.2", title: "4.1.2 80386/80486 CPU" },
              { id: "4.1.3", title: "4.1.3 Pentium 系列 CPU" }
            ]
          },
          {
            id: "4.2",
            title: "4.2 寄存器和主存储器",
            children: [
              { id: "4.2.1", title: "4.2.1 80x86 CPU 的寄存器" },
              { id: "4.2.2", title: "4.2.2 80x86 的主存储器" }
            ]
          },
          {
            id: "4.3",
            title: "4.3 80x86 CPU 指令系统",
            children: [
              { id: "4.3.1", title: "4.3.1 80x86 寻址方式" },
              { id: "4.3.2", title: "4.3.2 80x86 CPU 指令分类" },
              { id: "4.3.3", title: "4.3.3 传送类指令" },
              { id: "4.3.4", title: "4.3.4 算术运算类指令" },
              { id: "4.3.5", title: "4.3.5 逻辑类指令" },
              { id: "4.3.6", title: "4.3.6 串操作类指令" },
              { id: "4.3.7", title: "4.3.7 处理机控制类指令" }
            ]
          }
        ]
      },
      {
        id: "ch5",
        title: "第5章 汇编语言层",
        children: [
          { id: "5.1", title: "5.1 汇编语言层概述" },
          { id: "5.2", title: "5.2 汇编语言语句格式" },
          {
            id: "5.3",
            title: "5.3 数据、表达式和运算符",
            children: [
              { id: "5.3.1", title: "5.3.1 常数" },
              { id: "5.3.2", title: "5.3.2 变量" },
              { id: "5.3.3", title: "5.3.3 标号" },
              { id: "5.3.4", title: "5.3.4 表达式与运算符" }
            ]
          },
          {
            id: "5.4",
            title: "5.4 宏汇编语言伪指令",
            children: [
              { id: "5.4.1", title: "5.4.1 符号定义语句" },
              { id: "5.4.2", title: "5.4.2 处理器选择伪指令" },
              { id: "5.4.3", title: "5.4.3 段结构伪指令" },
              { id: "5.4.4", title: "5.4.4 段组伪指令" },
              { id: "5.4.5", title: "5.4.5 内存模式和简化段" },
              { id: "5.4.6", title: "5.4.6 定位和对准伪指令" },
              { id: "5.4.7", title: "5.4.7 过程定义伪指令" },
              { id: "5.4.8", title: "5.4.8 包含伪指令" },
              { id: "5.4.9", title: "5.4.9 标题伪指令" }
            ]
          },
          { id: "5.5", title: "5.5 宏指令" },
          {
            id: "5.6",
            title: "5.6 汇编程序设计基本技术",
            children: [
              { id: "5.6.1", title: "5.6.1 程序设计步骤" },
              { id: "5.6.2", title: "5.6.2 顺序程序设计" },
              { id: "5.6.3", title: "5.6.3 分支程序设计" },
              { id: "5.6.4", title: "5.6.4 循环程序设计" },
              { id: "5.6.5", title: "5.6.5 子程序设计" },
              { id: "5.6.6", title: "5.6.6 系统功能调用" },
              { id: "5.6.7", title: "5.6.7 汇编程序的开发" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "part3",
    title: "第三篇 存储系统和输入/输出系统",
    children: [
      {
        id: "ch6",
        title: "第6章 存储系统",
        children: [
          {
            id: "6.1",
            title: "6.1 存储系统概述",
            children: [
              { id: "6.1.1", title: "6.1.1 存储器的分类" },
              { id: "6.1.2", title: "6.1.2 主存的主要技术指标" }
            ]
          },
          {
            id: "6.2",
            title: "6.2 存储原理",
            children: [
              { id: "6.2.1", title: "6.2.1 半导体存储器" },
              { id: "6.2.2", title: "6.2.2 磁表面存储器" }
            ]
          },
          {
            id: "6.3",
            title: "6.3 主存储器的组织",
            children: [
              { id: "6.3.1", title: "6.3.1 主存储器的逻辑设计" },
              { id: "6.3.2", title: "6.3.2 主存储器与 CPU 的连接" },
              { id: "6.3.3", title: "6.3.3 Pentium CPU 与存储器" },
              { id: "6.3.4", title: "6.3.4 高级 DRAM" }
            ]
          },
          {
            id: "6.4",
            title: "6.4 高速缓冲存储器",
            children: [
              { id: "6.4.1", title: "6.4.1 Cache 的工作原理" },
              { id: "6.4.2", title: "6.4.2 Cache 的组织" },
              { id: "6.4.3", title: "6.4.3 Pentium II Cache" }
            ]
          },
          {
            id: "6.5",
            title: "6.5 外部存储器",
            children: [
              { id: "6.5.1", title: "6.5.1 硬磁盘存储器" },
              { id: "6.5.2", title: "6.5.2 U盘和固态硬盘" }
            ]
          },
          {
            id: "6.6",
            title: "6.6 物理存储系统的组织",
            children: [
              { id: "6.6.1", title: "6.6.1 存储系统的层次结构" },
              { id: "6.6.2", title: "6.6.2 磁盘阵列" },
              { id: "6.6.3", title: "6.6.3 多体交叉存取技术" }
            ]
          },
          {
            id: "6.7",
            title: "6.7 虚拟存储系统的组织",
            children: [
              { id: "6.7.1", title: "6.7.1 概述" },
              { id: "6.7.2", title: "6.7.2 虚拟存储器的组织方式" },
              { id: "6.7.3", title: "6.7.3 Pentium CPU 虚拟存储器" },
              { id: "6.7.4", title: "6.7.4 存储管理部件" }
            ]
          }
        ]
      },
      {
        id: "ch7",
        title: "第7章 输入/输出系统",
        children: [
          {
            id: "7.1",
            title: "7.1 输入/输出系统概述",
            children: [
              { id: "7.1.1", title: "7.1.1 主机与外设连接" },
              { id: "7.1.2", title: "7.1.2 I/O 接口的功能和分类" },
              { id: "7.1.3", title: "7.1.3 接口的编址和 I/O 指令" }
            ]
          },
          { id: "7.2", title: "7.2 直接程序控制方式" },
          {
            id: "7.3",
            title: "7.3 程序中断方式",
            children: [
              { id: "7.3.1", title: "7.3.1 中断的基本概念" },
              { id: "7.3.2", title: "7.3.2 中断的过程" },
              { id: "7.3.3", title: "7.3.3 80x86 中断指令" },
              { id: "7.3.4", title: "7.3.4 中断接口模型" },
              { id: "7.3.5", title: "7.3.5 中断接口举例" }
            ]
          },
          {
            id: "7.4",
            title: "7.4 DMA 方式",
            children: [
              { id: "7.4.1", title: "7.4.1 DMA 方式的一般概念" },
              { id: "7.4.2", title: "7.4.2 DMA 工作过程" },
              { id: "7.4.3", title: "7.4.3 DMA 接口组成" },
              { id: "7.4.4", title: "7.4.4 DMA 控制器编程" }
            ]
          },
          {
            id: "7.5",
            title: "7.5 总线",
            children: [
              { id: "7.5.1", title: "7.5.1 总线的功能与分类" },
              { id: "7.5.2", title: "7.5.2 总线标准及信号" },
              { id: "7.5.3", title: "7.5.3 总线操作时序" },
              { id: "7.5.4", title: "7.5.4 典型总线举例" }
            ]
          },
          {
            id: "7.6",
            title: "7.6 典型外设接口",
            children: [
              { id: "7.6.1", title: "7.6.1 ATA 接口" },
              { id: "7.6.2", title: "7.6.2 SCSI 接口" }
            ]
          },
          {
            id: "7.7",
            title: "7.7 I/O 设备与 I/O 程序设计",
            children: [
              { id: "7.7.1", title: "7.7.1 概述" },
              { id: "7.7.2", title: "7.7.2 键盘" },
              { id: "7.7.3", title: "7.7.3 鼠标器" },
              { id: "7.7.4", title: "7.7.4 打印机" },
              { id: "7.7.5", title: "7.7.5 液晶显示器" }
            ]
          }
        ]
      }
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
    status: "Pending"
  },
  {
    phase: 3,
    title: "指令与编程 (第4-5章)",
    content: "梳理80x86指令系统，掌握寻址方式，并进行汇编语言程序设计。",
    status: "Pending"
  },
  {
    phase: 4,
    title: "系统扩展 (第6-7章)",
    content: "存储器扩展逻辑、Cache机制、虚拟存储器、中断系统、DMA及总线标准。",
    status: "Pending"
  }
];
