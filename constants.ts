
import { Part, ContentBlock } from './types';

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
    childrenIds: ["1.3.1", "1.3.2", "1.3.3"]
  },
  "1.3.1": {
    id: "1.3.1",
    type: "subsection",
    title: "1.3.1 从计算机系统组成角度划分层次结构",
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
    title: "1.3.2 从语言功能角度划分层次结构",
    keyPoints: [
      {
        title: "高级语言与机器语言",
        content: "高级语言需要通过编译器或解释器转换为机器语言才能执行。编译程序将源程序一次性翻译；解释程序逐条翻译执行。"
      }
    ]
  },
  "1.3.3": {
    id: "1.3.3",
    type: "subsection",
    title: "1.3.3 软件和硬件在逻辑上的等价",
    keyPoints: [
        {
            title: "逻辑等价性",
            content: "任何由软件实现的操作（如浮点运算、乘法）都可以由硬件直接实现；任何由硬件实现的操作也可以由软件模拟。\n选择标准：性价比、速度（硬件快）、灵活性（软件好）。"
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
    keyPoints: [
        {
            title: "步骤",
            content: "1. 系统分析与设计 (建模)\n2. 编制程序 (高级语言)\n3. 编译/汇编 (生成目标代码)\n4. 链接 (生成可执行文件)\n5. 执行"
        }
    ]
  },
  "1.4.2": {
    id: "1.4.2",
    type: "subsection",
    title: "1.4.2 指令执行过程",
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
    childrenIds: ["1.5.1", "1.5.2"]
  },
  "1.5.1": {
    id: "1.5.1",
    type: "subsection",
    title: "1.5.1 计算机的特点",
    keyPoints: [
      {
        title: "主要特点",
        content: "1. 运算速度快\n2. 计算精度高\n3. 记忆能力强\n4. 具有逻辑判断能力\n5. 具有自动控制能力"
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
        title: "字长",
        content: "CPU一次能处理的二进制数据的位数。直接影响精度和范围。"
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
    childrenIds: ["1.6.1", "1.6.2", "1.6.3"]
  },
  "1.6.1": {
    id: "1.6.1",
    type: "subsection",
    title: "1.6.1 计算机的发展历程",
    keyPoints: [
      {
        title: "四代发展",
        content: "第一代：电子管 (机器语言)\n第二代：晶体管 (高级语言)\n第三代：中小规模集成电路 (操作系统)\n第四代：大规模/超大规模集成电路 (微处理器)"
      }
    ]
  },
  "1.6.2": {
      id: "1.6.2",
      type: "subsection",
      title: "1.6.2 计算机性能提高的技术",
      keyPoints: [
          {
              title: "摩尔定律",
              content: "集成电路芯片上所集成的晶体管数目，每隔 18-24 个月翻一番。"
          },
          {
              title: "并行处理技术",
              content: "流水线技术、多核技术、多处理器系统。"
          }
      ]
  },
  "1.6.3": {
      id: "1.6.3",
      type: "subsection",
      title: "1.6.3 计算机应用举例",
      keyPoints: [
          {
              title: "应用领域",
              content: "科学计算、数据处理、过程控制、人工智能 (AI)、网络通信。"
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
    childrenIds: ["2.2.1", "2.2.2", "2.2.3"]
  },
  "2.2.1": {
    id: "2.2.1",
    type: "subsection",
    title: "2.2.1 ASCII",
    keyPoints: [
      {
        title: "ASCII",
        content: "7位编码，共128个字符。最高位通常为0或作奇偶校验。"
      }
    ]
  },
  "2.2.2": {
    id: "2.2.2",
    type: "subsection",
    title: "2.2.2 Unicode 编码",
    keyPoints: [
        {
            title: "Unicode",
            content: "统一码，为世界上所有字符提供唯一编号。常见实现：UTF-8 (变长), UTF-16。"
        }
    ]
  },
  "2.2.3": {
      id: "2.2.3",
      type: "subsection",
      title: "2.2.3 汉字编码简介",
      keyPoints: [
          {
              title: "汉字处理流程",
              content: "输入码 (拼音/五笔) -> 国标码 (交换码) -> 机内码 (存储码) -> 字形码 (输出码)。"
          },
          {
              title: "机内码计算",
              content: "机内码 = 国标码 + 8080H (将最高位置1，以区分ASCII)。"
          }
      ]
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
    title: "2.3.2 常用寻址方式",
    keyPoints: [
      {
        title: "常见方式",
        content: "1. 立即寻址 (Operand in instruction)\n2. 直接寻址 (Addr in instruction)\n3. 间接寻址 (Addr points to Addr)\n4. 寄存器寻址 (In Register)\n5. 寄存器间接寻址 (Reg holds Addr)"
      }
    ]
  },
  "2.3.3": {
      id: "2.3.3",
      type: "subsection",
      title: "2.3.3 指令类型",
      keyPoints: [
          {
              title: "分类",
              content: "数据传送类、算术逻辑运算类、移位类、程序控制类 (跳转/调用)、输入输出类。"
          }
      ]
  },
  "2.3.4": {
      id: "2.3.4",
      type: "subsection",
      title: "2.3.4 Pentium II 指令格式",
      keyPoints: [
          {
              title: "变长指令",
              content: "x86 指令长度不固定，从 1 字节到 15 字节不等。"
          }
      ]
  },
  "2.3.5": {
      id: "2.3.5",
      type: "subsection",
      title: "2.3.5 RISC 概述",
      keyPoints: [
          {
              title: "RISC 特点",
              content: "1. 指令少且简单\n2. 寻址方式少\n3. 指令长度固定\n4. 大量使用寄存器\n5. 硬布线控制为主\n6. 优化流水线"
          }
      ]
  },
  "2.3.6": {
      id: "2.3.6",
      type: "subsection",
      title: "2.3.6 MIPS 指令系统",
      keyPoints: [
          {
              title: "MIPS 格式",
              content: "R型 (寄存器-寄存器), I型 (立即数/分支), J型 (跳转)。均为32位定长。"
          }
      ]
  },
  "2.3.7": {
      id: "2.3.7",
      type: "subsection",
      title: "2.3.7 ARM 指令系统",
      keyPoints: [
          {
              title: "ARM 特点",
              content: "大多数指令可条件执行 (Conditional Execution)，拥有丰富的桶形移位器。"
          }
      ]
  },

  // === CHAPTER 3 ===
  "ch3": {
    id: "ch3",
    type: "chapter",
    title: "第3章 微体系结构层",
    description: "本章进入CPU内部，理解数据通路和控制逻辑，以及流水线技术。",
    childrenIds: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6"]
  },
  "3.1": { id: "3.1", type: "section", title: "3.1 CPU 的组成和功能", childrenIds: ["3.1.1", "3.1.2", "3.1.3", "3.1.4"] },
  "3.1.1": {
    id: "3.1.1",
    type: "subsection",
    title: "3.1.1 CPU 的组成",
    keyPoints: [{ title: "组成部件", content: "ALU (运算器), CU (控制器), Registers (寄存器组 - PC, IR, MAR, MDR, GPRs)。" }]
  },
  "3.1.2": {
      id: "3.1.2",
      type: "subsection",
      title: "3.1.2 指令执行过程",
      keyPoints: [{ title: "过程", content: "取指 -> 译码 -> 执行 -> 访存 -> 写回。" }]
  },
  "3.1.3": {
      id: "3.1.3",
      type: "subsection",
      title: "3.1.3 时序控制方式",
      keyPoints: [{ title: "方式", content: "同步控制 (统一时钟)、异步控制 (应答机制)、联合控制。" }]
  },
  "3.1.4": {
      id: "3.1.4",
      type: "subsection",
      title: "3.1.4 指令流水线",
      keyPoints: [{ title: "概念", content: "将指令执行过程分解为若干子过程，并行处理，提高吞吐率。" }]
  },
  "3.2": { id: "3.2", type: "section", title: "3.2 ALU 和运算方法", childrenIds: ["3.2.1", "3.2.2", "3.2.3", "3.2.4"] },
  "3.2.1": {
    id: "3.2.1",
    type: "subsection",
    title: "3.2.1 ALU 介绍",
    keyPoints: [{ title: "ALU", content: "算术逻辑单元，核心部件，完成加减乘除、逻辑与或非等操作。" }]
  },
  "3.2.2": {
      id: "3.2.2",
      type: "subsection",
      title: "3.2.2 定点数运算方法",
      keyPoints: [
          { title: "补码加减法", content: "[X+Y]补 = [X]补 + [Y]补; [X-Y]补 = [X]补 + [-Y]补。" },
          { title: "溢出判断", content: "1. 单符号位：结果符号位与操作数符号位矛盾。\n2. 双符号位：01上溢，10下溢。", isExamFocus: true }
      ]
  },
  "3.2.3": {
      id: "3.2.3",
      type: "subsection",
      title: "3.2.3 浮点数运算方法",
      keyPoints: [{ title: "步骤", content: "1. 对阶 (小阶向大阶看齐)\n2. 尾数运算\n3. 规格化 (左规/右规)\n4. 舍入\n5. 溢出判断" }]
  },
  "3.2.4": {
      id: "3.2.4",
      type: "subsection",
      title: "3.2.4 十进制数加、减运算",
      keyPoints: [{ title: "BCD码", content: "8421码，加法修正时，若结果>9或有进位，需加6修正。" }]
  },
  "3.3": { id: "3.3", type: "section", title: "3.3 CPU 模型机的组成及其数据通路", childrenIds: ["3.3.1", "3.3.2"] },
  "3.3.1": {
      id: "3.3.1",
      type: "subsection",
      title: "3.3.1 基本组成",
      keyPoints: [{ title: "总线结构", content: "单总线、双总线、三总线结构。" }]
  },
  "3.3.2": {
      id: "3.3.2",
      type: "subsection",
      title: "3.3.2 数据传输",
      keyPoints: [{ title: "寄存器传送", content: "MOV R1, R2。数据通过总线从R2传送到R1。" }]
  },
  "3.4": { id: "3.4", type: "section", title: "3.4 组合逻辑控制器原理", childrenIds: ["3.4.1", "3.4.2", "3.4.3", "3.4.4", "3.4.5"] },
  "3.4.1": { id: "3.4.1", type: "subsection", title: "3.4.1 模型机的指令系统", keyPoints: [{ title: "指令集", content: "定义模型机支持的指令集合。" }] },
  "3.4.2": { id: "3.4.2", type: "subsection", title: "3.4.2 模型机的时序系统", keyPoints: [{ title: "时序", content: "时钟周期、机器周期、指令周期。" }] },
  "3.4.3": { id: "3.4.3", type: "subsection", title: "3.4.3 指令流程", keyPoints: [{ title: "微操作流程", content: "分析每条指令在每个周期的具体微操作。" }] },
  "3.4.4": { id: "3.4.4", type: "subsection", title: "3.4.4 微命令的综合与产生", keyPoints: [{ title: "逻辑表达式", content: "利用布尔代数综合出每个控制信号的逻辑表达式。" }] },
  "3.4.5": { id: "3.4.5", type: "subsection", title: "3.4.5 小结", keyPoints: [{ title: "优缺点", content: "硬布线控制器速度快，但设计复杂，一旦成型难以修改。" }] },
  "3.5": { id: "3.5", type: "section", title: "3.5 微程序控制器原理", childrenIds: ["3.5.1", "3.5.2", "3.5.3", "3.5.4", "3.5.5"] },
  "3.5.1": {
    id: "3.5.1",
    type: "subsection",
    title: "3.5.1 微程序控制概念",
    keyPoints: [
      { title: "原理", content: "将控制信号编码成微指令，存放在控制存储器（CM）中。执行机器指令就是执行一段微程序。" },
      { title: "概念辨析", content: "微命令 -> 微指令 -> 微程序 -> 机器指令。\nCM（ROM） vs 主存（RAM）。", isExamFocus: true }
    ]
  },
  "3.5.2": { id: "3.5.2", type: "subsection", title: "3.5.2 微指令编码方式", keyPoints: [{ title: "编码", content: "直接控制法 (一位一控)、字段编码法 (互斥微命令分组)、混合编码法。" }] },
  "3.5.3": { id: "3.5.3", type: "subsection", title: "3.5.3 微程序的顺序控制", keyPoints: [{ title: "下址生成", content: "断定法 (由微指令下址字段指定)、计数器法 (uPC+1)。" }] },
  "3.5.4": { id: "3.5.4", type: "subsection", title: "3.5.4 微指令格式", keyPoints: [{ title: "格式", content: "水平型 (并行度高, 字长长, 执行快), 垂直型 (类似机器指令, 字长短, 执行慢)。" }] },
  "3.5.5": { id: "3.5.5", type: "subsection", title: "3.5.5 典型微指令举例", keyPoints: [{ title: "实例", content: "模型机微指令格式分析。" }] },
  "3.6": { id: "3.6", type: "section", title: "3.6 典型 RISC 处理器微体系结构", childrenIds: ["3.6.1", "3.6.2"] },
  "3.6.1": { id: "3.6.1", type: "subsection", title: "3.6.1 MIPS R4000", keyPoints: [{ title: "R4000", content: "超流水线结构，8级流水。" }] },
  "3.6.2": { id: "3.6.2", type: "subsection", title: "3.6.2 ARM7", keyPoints: [{ title: "ARM7", content: "冯·诺依曼结构，3级流水 (取指、译码、执行)。" }] },


  // === CHAPTER 4 ===
  "ch4": {
    id: "ch4",
    type: "chapter",
    title: "第4章 指令系统层",
    description: "深入了解指令集架构 (ISA)，特别是 x86 体系。",
    childrenIds: ["4.1", "4.2", "4.3"]
  },
  "4.1": { id: "4.1", type: "section", title: "4.1 80x86 CPU", childrenIds: ["4.1.1", "4.1.2", "4.1.3"] },
  "4.1.1": { id: "4.1.1", type: "subsection", title: "4.1.1 8086/8088 CPU", keyPoints: [{ title: "16位CPU", content: "20位地址总线 (1MB寻址)，16位数据总线。引入指令队列。" }] },
  "4.1.2": { id: "4.1.2", type: "subsection", title: "4.1.2 80386/80486 CPU", keyPoints: [{ title: "32位CPU", content: "32位地址总线 (4GB寻址)。保护模式，虚拟存储。" }] },
  "4.1.3": { id: "4.1.3", type: "subsection", title: "4.1.3 Pentium 系列 CPU", keyPoints: [{ title: "超标量", content: "U、V双流水线，分支预测，MMX技术。" }] },
  "4.2": { id: "4.2", type: "section", title: "4.2 80x86 CPU 的寄存器和主存储器", childrenIds: ["4.2.1", "4.2.2"] },
  "4.2.1": {
    id: "4.2.1",
    type: "subsection",
    title: "4.2.1 80x86 CPU 的寄存器",
    keyPoints: [
        { title: "通用寄存器", content: "AX, BX, CX, DX, SI, DI, SP, BP。" },
        { title: "段寄存器", content: "CS (代码), DS (数据), SS (堆栈), ES (附加)。" },
        { title: "标志寄存器", content: "ZF, SF, CF, OF, IF, DF。" }
    ]
  },
  "4.2.2": {
      id: "4.2.2",
      type: "subsection",
      title: "4.2.2 80x86 的主存储器",
      keyPoints: [
          { title: "分段管理", content: "逻辑地址 = 段基址:偏移量。物理地址 = 段基址 × 16 + 偏移量。", isExamFocus: true },
          { title: "Little Endian", content: "小端存储：低字节存放在低地址。" }
      ]
  },
  "4.3": { id: "4.3", type: "section", title: "4.3 80x86 CPU 指令系统", childrenIds: ["4.3.1", "4.3.2", "4.3.3", "4.3.4", "4.3.5", "4.3.6", "4.3.7"] },
  "4.3.1": {
      id: "4.3.1",
      type: "subsection",
      title: "4.3.1 80x86 寻址方式",
      keyPoints: [
          { title: "寻址", content: "立即、寄存器、直接、寄存器间接、寄存器相对、基址变址、相对基址变址。" }
      ]
  },
  "4.3.2": { id: "4.3.2", type: "subsection", title: "4.3.2 80x86 CPU 指令分类", keyPoints: [{ title: "分类", content: "传送、算术、逻辑、串操作、控制转移、处理机控制。" }] },
  "4.3.3": { id: "4.3.3", type: "subsection", title: "4.3.3 传送类指令", keyPoints: [{ title: "MOV, PUSH, POP, XCHG", content: "MOV A, B (B->A)。PUSH入栈(SP-2)，POP出栈(SP+2)。" }] },
  "4.3.4": { id: "4.3.4", type: "subsection", title: "4.3.4 算术运算类指令", keyPoints: [{ title: "ADD, SUB, MUL, DIV", content: "ADD/SUB 影响标志位。INC/DEC 不影响CF。" }] },
  "4.3.5": { id: "4.3.5", type: "subsection", title: "4.3.5 逻辑类指令", keyPoints: [{ title: "AND, OR, XOR, TEST", content: "逻辑运算按位进行。TEST 同 AND 但不回写结果，只置标志位。" }] },
  "4.3.6": { id: "4.3.6", type: "subsection", title: "4.3.6 串操作类指令", keyPoints: [{ title: "MOVS, STOS, LODS", content: "配合 REP 前缀使用。SI/DI 自动增减。" }] },
  "4.3.7": { id: "4.3.7", type: "subsection", title: "4.3.7 处理机控制类指令", keyPoints: [{ title: "CLC, STC, CLI, STI", content: "标志位操作。HLT 停机。" }] },

  // === CHAPTER 5 ===
  "ch5": {
    id: "ch5",
    type: "chapter",
    title: "第5章 汇编语言层",
    description: "汇编语言是机器语言的助记符表示，理解底层堆栈和函数调用。",
    childrenIds: ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"]
  },
  "5.1": { id: "5.1", type: "section", title: "5.1 汇编语言层概述", childrenIds: ["5.1.1"] },
  "5.1.1": { id: "5.1.1", type: "subsection", title: "5.1.1 汇编程序", keyPoints: [{ title: "作用", content: "将汇编源程序翻译成机器目标程序。" }] },
  "5.2": { id: "5.2", type: "section", title: "5.2 汇编语言语句格式", childrenIds: ["5.2.1"] },
  "5.2.1": {
    id: "5.2.1",
    type: "subsection",
    title: "5.2.1 语句格式",
    keyPoints: [{ title: "格式", content: "[Label:] Mnemonic [Operands] [;Comment]\n例如: LOOP: ADD AX, BX ; AX = AX + BX" }]
  },
  "5.3": { id: "5.3", type: "section", title: "5.3 80x86 宏汇编语言数据、表达式和运算符", childrenIds: ["5.3.1", "5.3.2", "5.3.3", "5.3.4"] },
  "5.3.1": { id: "5.3.1", type: "subsection", title: "5.3.1 常数", keyPoints: [{ title: "类型", content: "二进制(B), 八进制(Q), 十进制(D), 十六进制(H), 字符串('A')。" }] },
  "5.3.2": { id: "5.3.2", type: "subsection", title: "5.3.2 变量", keyPoints: [{ title: "定义", content: "DB (字节), DW (字), DD (双字)。" }] },
  "5.3.3": { id: "5.3.3", type: "subsection", title: "5.3.3 标号", keyPoints: [{ title: "标号", content: "指令的符号地址，具有段、偏移、类型属性。" }] },
  "5.3.4": { id: "5.3.4", type: "subsection", title: "5.3.4 表达式与运算符", keyPoints: [{ title: "运算符", content: "算术运算符 (+-*/), 逻辑运算符 (AND/OR), 属性运算符 (PTR, SEG, OFFSET)。" }] },
  "5.4": { id: "5.4", type: "section", title: "5.4 80x86 宏汇编语言伪指令", childrenIds: ["5.4.1", "5.4.2", "5.4.3", "5.4.4", "5.4.5", "5.4.6", "5.4.7", "5.4.8", "5.4.9"] },
  "5.4.1": { id: "5.4.1", type: "subsection", title: "5.4.1 符号定义语句", keyPoints: [{ title: "EQU, =", content: "COUNT EQU 100。= 可以重定义。" }] },
  "5.4.2": { id: "5.4.2", type: "subsection", title: "5.4.2 处理器选择", keyPoints: [{ title: ".386", content: "指定指令集。" }] },
  "5.4.3": { id: "5.4.3", type: "subsection", title: "5.4.3 段结构伪指令", keyPoints: [{ title: "SEGMENT/ENDS", content: "定义段的开始和结束。" }] },
  "5.4.4": { id: "5.4.4", type: "subsection", title: "5.4.4 段组伪指令", keyPoints: [{ title: "GROUP", content: "将多个段归并为一个组。" }] },
  "5.4.5": { id: "5.4.5", type: "subsection", title: "5.4.5 内存模式", keyPoints: [{ title: ".MODEL", content: "SMALL, COMPACT, LARGE 等。" }] },
  "5.4.6": { id: "5.4.6", type: "subsection", title: "5.4.6 定位和对准", keyPoints: [{ title: "ORG, ALIGN", content: "ORG 100H (指定偏移地址)。" }] },
  "5.4.7": { id: "5.4.7", type: "subsection", title: "5.4.7 过程定义", keyPoints: [{ title: "PROC/ENDP", content: "NEAR/FAR 属性。" }] },
  "5.4.8": { id: "5.4.8", type: "subsection", title: "5.4.8 包含伪指令", keyPoints: [{ title: "INCLUDE", content: "包含其他文件。" }] },
  "5.4.9": { id: "5.4.9", type: "subsection", title: "5.4.9 标题伪指令", keyPoints: [{ title: "TITLE", content: "指定程序标题。" }] },
  "5.5": { id: "5.5", type: "section", title: "5.5 宏指令", childrenIds: [] },
  "5.6": { id: "5.6", type: "section", title: "5.6 汇编语言程序设计基本技术", childrenIds: ["5.6.1", "5.6.2", "5.6.3", "5.6.4", "5.6.5", "5.6.6", "5.6.7"] },
  "5.6.1": { id: "5.6.1", type: "subsection", title: "5.6.1 程序设计步骤", keyPoints: [{ title: "步骤", content: "分析问题 -> 确定算法 -> 绘流程图 -> 编写代码 -> 调试。" }] },
  "5.6.2": { id: "5.6.2", type: "subsection", title: "5.6.2 顺序程序设计", keyPoints: [{ title: "顺序", content: "按指令书写先后顺序执行。" }] },
  "5.6.3": { id: "5.6.3", type: "subsection", title: "5.6.3 分支程序设计", keyPoints: [{ title: "分支", content: "利用条件转移指令 (JZ, JNZ, JC) 实现 IF-ELSE。" }] },
  "5.6.4": { id: "5.6.4", type: "subsection", title: "5.6.4 循环程序设计", keyPoints: [{ title: "循环", content: "LOOP 指令 (CX计数)。结构：初始化 -> 循环体 -> 修改参数 -> 判断退出。" }] },
  "5.6.5": { id: "5.6.5", type: "subsection", title: "5.6.5 子程序设计", keyPoints: [{ title: "子程序", content: "利用 CALL 和 RET。注意现场保护 (PUSH/POP)。" }] },
  "5.6.6": { id: "5.6.6", type: "subsection", title: "5.6.6 系统功能子程序调用", keyPoints: [{ title: "INT 21H", content: "AH=01H(读字符), AH=02H(显字符), AH=09H(显字符串), AH=4CH(返回DOS)。", isExamFocus: true }] },
  "5.6.7": { id: "5.6.7", type: "subsection", title: "5.6.7 汇编语言程序的开发", keyPoints: [{ title: "开发流程", content: "Edit -> Masm -> Link -> Debug。" }] },

  // === CHAPTER 6 ===
  "ch6": {
    id: "ch6",
    type: "chapter",
    title: "第6章 存储系统",
    description: "存储墙问题与层次化存储结构，重点在 Cache 和虚拟存储器。",
    childrenIds: ["6.1", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7"]
  },
  "6.1": { id: "6.1", type: "section", title: "6.1 存储系统概述", childrenIds: ["6.1.1", "6.1.2"] },
  "6.1.1": { id: "6.1.1", type: "subsection", title: "6.1.1 存储器的分类", keyPoints: [{ title: "分类", content: "按介质 (半导体/磁/光)，按存取方式 (RAM/ROM/SAM/DAM)，按作用 (主/辅/Cache)。" }] },
  "6.1.2": { id: "6.1.2", type: "subsection", title: "6.1.2 主存的主要技术指标", keyPoints: [{ title: "指标", content: "存储容量、存取速度 (存取时间/存取周期)、存储带宽。" }] },
  "6.2": { id: "6.2", type: "section", title: "6.2 存储原理", childrenIds: ["6.2.1", "6.2.2"] },
  "6.2.1": { id: "6.2.1", type: "subsection", title: "6.2.1 半导体存储器", keyPoints: [{ title: "SRAM vs DRAM", content: "SRAM: 触发器，快，贵，做Cache。\nDRAM: 电容，慢，便宜，需刷新，做主存。", isExamFocus: true }] },
  "6.2.2": { id: "6.2.2", type: "subsection", title: "6.2.2 磁表面存储器", keyPoints: [{ title: "原理", content: "利用磁性材料的磁化状态存储 0/1。" }] },
  "6.3": { id: "6.3", type: "section", title: "6.3 主存储器的组织", childrenIds: ["6.3.1", "6.3.2", "6.3.3", "6.3.4"] },
  "6.3.1": { id: "6.3.1", type: "subsection", title: "6.3.1 主存储器的逻辑设计", keyPoints: [{ title: "设计", content: "芯片选型、逻辑连接。" }] },
  "6.3.2": {
    id: "6.3.2",
    type: "subsection",
    title: "6.3.2 主存储器与 CPU 的连接",
    keyPoints: [
      { title: "位扩展", content: "增加字长 (8位 -> 16位)。数据线并联。" },
      { title: "字扩展", content: "增加容量 (1K -> 2K)。地址线高位做片选 (CS)。", isExamFocus: true }
    ]
  },
  "6.3.3": { id: "6.3.3", type: "subsection", title: "6.3.3 Pentium CPU 与存储器组织", keyPoints: [{ title: "组织", content: "64位数据总线，8个字节选通信号 (BE0#-BE7#)。" }] },
  "6.3.4": { id: "6.3.4", type: "subsection", title: "6.3.4 高级 DRAM", keyPoints: [{ title: "类型", content: "SDRAM (同步), DDR (双倍速率)。" }] },
  "6.4": { id: "6.4", type: "section", title: "6.4 高速缓冲存储器", childrenIds: ["6.4.1", "6.4.2", "6.4.3"] },
  "6.4.1": {
      id: "6.4.1",
      type: "subsection",
      title: "6.4.1 Cache 的工作原理",
      keyPoints: [{ title: "局部性原理", content: "时间局部性（循环）、空间局部性（数组）。" }]
  },
  "6.4.2": {
      id: "6.4.2",
      type: "subsection",
      title: "6.4.2 Cache 的组织",
      keyPoints: [
          { title: "映射方式", content: "直接映射、全相联、组相联。", isExamFocus: true },
          { title: "替换算法", content: "RAND, FIFO, LRU (近期最少使用)。" },
          { title: "写策略", content: "写回法 (Write Back), 写直达法 (Write Through)。" }
      ],
      examples: [{
          question: "Cache容量16KB，块大小64B，采用2路组相联。主存地址32位，求Tag, Set, Offset位数。",
          solution: "1. 块内偏移 Offset: 64B -> 6位。\n2. 组数 Sets: (16KB / 64B) / 2 = 128组 -> 7位。\n3. Tag: 32 - 7 - 6 = 19位。",
          tip: "Tag + Set + Offset = Total Address Bits"
      }]
  },
  "6.4.3": { id: "6.4.3", type: "subsection", title: "6.4.3 Pentium II Cache", keyPoints: [{ title: "结构", content: "L1 (指令/数据分离), L2 (统一)。" }] },
  "6.5": { id: "6.5", type: "section", title: "6.5 外部存储器", childrenIds: ["6.5.1", "6.5.2"] },
  "6.5.1": { id: "6.5.1", type: "subsection", title: "6.5.1 硬磁盘存储器", keyPoints: [{ title: "指标", content: "寻道时间 + 旋转延迟 + 传输时间。" }] },
  "6.5.2": { id: "6.5.2", type: "subsection", title: "6.5.2 U盘和固态硬盘", keyPoints: [{ title: "SSD", content: "基于Flash Memory，无机械部件，速度快。" }] },
  "6.6": { id: "6.6", type: "section", title: "6.6 物理存储系统的组织", childrenIds: ["6.6.1", "6.6.2", "6.6.3"] },
  "6.6.1": { id: "6.6.1", type: "subsection", title: "6.6.1 层次结构", keyPoints: [{ title: "金字塔", content: "Reg - L1 - L2 - Main Mem - Disk。" }] },
  "6.6.2": { id: "6.6.2", type: "subsection", title: "6.6.2 磁盘阵列", keyPoints: [{ title: "RAID", content: "RAID0 (条带), RAID1 (镜像), RAID5 (分布式校验)。" }] },
  "6.6.3": { id: "6.6.3", type: "subsection", title: "6.6.3 多体交叉存取", keyPoints: [{ title: "交叉", content: "低位交叉（流水线访问），提高带宽。" }] },
  "6.7": { id: "6.7", type: "section", title: "6.7 虚拟存储系统的组织", childrenIds: ["6.7.1", "6.7.2", "6.7.3", "6.7.4"] },
  "6.7.1": { id: "6.7.1", type: "subsection", title: "6.7.1 概述", keyPoints: [{ title: "目的", content: "扩大逻辑存储容量。" }] },
  "6.7.2": { id: "6.7.2", type: "subsection", title: "6.7.2 组织方式", keyPoints: [{ title: "方式", content: "页式、段式、段页式。" }] },
  "6.7.3": { id: "6.7.3", type: "subsection", title: "6.7.3 Pentium 虚存", keyPoints: [{ title: "机制", content: "段页式管理。" }] },
  "6.7.4": { id: "6.7.4", type: "subsection", title: "6.7.4 存储管理部件", keyPoints: [{ title: "MMU", content: "内存管理单元，负责地址映射。" }] },

  // === CHAPTER 7 ===
  "ch7": {
    id: "ch7",
    type: "chapter",
    title: "第7章 输入/输出系统",
    description: "CPU与外设的通信方式。",
    childrenIds: ["7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "7.7"]
  },
  "7.1": { id: "7.1", type: "section", title: "7.1 输入/输出系统概述", childrenIds: ["7.1.1", "7.1.2", "7.1.3"] },
  "7.1.1": { id: "7.1.1", type: "subsection", title: "7.1.1 连接方式", keyPoints: [{ title: "方式", content: "辐射式 (早期)、总线式 (现代)。" }] },
  "7.1.2": { id: "7.1.2", type: "subsection", title: "7.1.2 I/O 接口的功能和分类", keyPoints: [{ title: "功能", content: "数据缓冲、电平转换、地址译码、状态控制。" }] },
  "7.1.3": { id: "7.1.3", type: "subsection", title: "7.1.3 接口的编址", keyPoints: [{ title: "编址", content: "统一编址 (Mem Mapped IO), 独立编址 (IO Mapped IO)。" }] },
  "7.2": { id: "7.2", type: "section", title: "7.2 直接程序控制方式", childrenIds: [] },
  "7.3": { id: "7.3", type: "section", title: "7.3 程序中断方式", childrenIds: ["7.3.1", "7.3.2", "7.3.3", "7.3.4", "7.3.5"] },
  "7.3.1": { id: "7.3.1", type: "subsection", title: "7.3.1 中断的基本概念", keyPoints: [{ title: "中断", content: "CPU暂停当前程序，转去执行中断服务程序。" }] },
  "7.3.2": { id: "7.3.2", type: "subsection", title: "7.3.2 中断的过程", keyPoints: [{ title: "流程", content: "请求 -> 判优 -> 响应 -> 保护现场 -> 服务 -> 恢复 -> 返回。", isExamFocus: true }] },
  "7.3.3": { id: "7.3.3", type: "subsection", title: "7.3.3 80x86 中断指令", keyPoints: [{ title: "INT n", content: "软中断指令。" }] },
  "7.3.4": { id: "7.3.4", type: "subsection", title: "7.3.4 中断接口模型", keyPoints: [{ title: "模型", content: "中断请求触发器 (INTR), 屏蔽触发器 (MASK)。" }] },
  "7.3.5": { id: "7.3.5", type: "subsection", title: "7.3.5 中断接口举例", keyPoints: [{ title: "8259A", content: "可编程中断控制器。" }] },
  "7.4": { id: "7.4", type: "section", title: "7.4 DMA 方式", childrenIds: ["7.4.1", "7.4.2", "7.4.3", "7.4.4"] },
  "7.4.1": { id: "7.4.1", type: "subsection", title: "7.4.1 DMA 一般概念", keyPoints: [{ title: "DMA", content: "直接存储器访问，主存与外设直接交换数据。" }] },
  "7.4.2": { id: "7.4.2", type: "subsection", title: "7.4.2 DMA 工作过程", keyPoints: [{ title: "过程", content: "预处理 -> 数据传输 -> 后处理。传输时不需CPU干预。" }] },
  "7.4.3": { id: "7.4.3", type: "subsection", title: "7.4.3 DMA 接口组成", keyPoints: [{ title: "组成", content: "主存地址寄存器、字计数器、数据缓冲寄存器、DMA控制逻辑。" }] },
  "7.4.4": { id: "7.4.4", type: "subsection", title: "7.4.4 DMA 控制器", keyPoints: [{ title: "8237A", content: "典型的DMA控制器芯片。" }] },
  "7.5": { id: "7.5", type: "section", title: "7.5 总线", childrenIds: ["7.5.1", "7.5.2", "7.5.3", "7.5.4"] },
  "7.5.1": { id: "7.5.1", type: "subsection", title: "7.5.1 总线功能与分类", keyPoints: [{ title: "分类", content: "片内总线、系统总线、通信总线。" }] },
  "7.5.2": { id: "7.5.2", type: "subsection", title: "7.5.2 标准及信号", keyPoints: [{ title: "信号", content: "数据线、地址线、控制线。" }] },
  "7.5.3": { id: "7.5.3", type: "subsection", title: "7.5.3 操作时序", keyPoints: [{ title: "时序", content: "同步、异步、半同步、分离事务。" }] },
  "7.5.4": { id: "7.5.4", type: "subsection", title: "7.5.4 典型总线", keyPoints: [{ title: "举例", content: "ISA, PCI, PCI-E, USB。" }] },
  "7.6": { id: "7.6", type: "section", title: "7.6 典型外设接口", childrenIds: ["7.6.1", "7.6.2"] },
  "7.6.1": { id: "7.6.1", type: "subsection", title: "7.6.1 ATA 接口", keyPoints: [{ title: "IDE", content: "硬盘接口标准。" }] },
  "7.6.2": { id: "7.6.2", type: "subsection", title: "7.6.2 SCSI 接口", keyPoints: [{ title: "SCSI", content: "小型计算机系统接口，智能通用接口。" }] },
  "7.7": { id: "7.7", type: "section", title: "7.7 I/O 设备与 I/O 程序设计", childrenIds: ["7.7.1", "7.7.2", "7.7.3", "7.7.4", "7.7.5"] },
  "7.7.1": { id: "7.7.1", type: "subsection", title: "7.7.1 概述", keyPoints: [{ title: "设备", content: "人机交互设备、外部存储设备、通信设备。" }] },
  "7.7.2": { id: "7.7.2", type: "subsection", title: "7.7.2 键盘", keyPoints: [{ title: "键盘", content: "扫描码。" }] },
  "7.7.3": { id: "7.7.3", type: "subsection", title: "7.7.3 鼠标器", keyPoints: [{ title: "鼠标", content: "机械式、光电式。" }] },
  "7.7.4": { id: "7.7.4", type: "subsection", title: "7.7.4 打印机", keyPoints: [{ title: "打印机", content: "针式、喷墨、激光。" }] },
  "7.7.5": { id: "7.7.5", type: "subsection", title: "7.7.5 液晶显示器", keyPoints: [{ title: "LCD", content: "液晶控制透光率。" }] }

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
              { id: "1.3.1", title: "1.3.1 从计算机系统组成角度划分层次结构" },
              { id: "1.3.2", title: "1.3.2 从语言功能角度划分层次结构" },
              { id: "1.3.3", title: "1.3.3 软件和硬件在逻辑上的等价" }
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
              { id: "1.6.2", title: "1.6.2 计算机性能提高的技术" },
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
    title: "第二篇 计算机系统结构",
    chapters: [
      {
        id: "ch3",
        title: "第3章 微体系结构层",
        children: [
            { id: "3.1", title: "3.1 CPU 的组成和功能", children: [
                { id: "3.1.1", title: "3.1.1 CPU 的组成" },
                { id: "3.1.2", title: "3.1.2 指令执行过程" },
                { id: "3.1.3", title: "3.1.3 时序控制方式" },
                { id: "3.1.4", title: "3.1.4 指令流水线" }
            ]},
            { id: "3.2", title: "3.2 ALU 和运算方法", children: [
                { id: "3.2.1", title: "3.2.1 ALU 介绍" },
                { id: "3.2.2", title: "3.2.2 定点数运算方法" },
                { id: "3.2.3", title: "3.2.3 浮点数运算方法" },
                { id: "3.2.4", title: "3.2.4 十进制数加、减运算" }
            ]},
            { id: "3.3", title: "3.3 CPU 模型机的组成及其数据通路", children: [
                { id: "3.3.1", title: "3.3.1 基本组成" },
                { id: "3.3.2", title: "3.3.2 数据传输" }
            ]},
            { id: "3.4", title: "3.4 组合逻辑控制器原理", children: [
                { id: "3.4.1", title: "3.4.1 模型机的指令系统" },
                { id: "3.4.2", title: "3.4.2 模型机的时序系统" },
                { id: "3.4.3", title: "3.4.3 指令流程" },
                { id: "3.4.4", title: "3.4.4 微命令的综合与产生" },
                { id: "3.4.5", title: "3.4.5 小结" }
            ]},
            { id: "3.5", title: "3.5 微程序控制器原理", children: [
                { id: "3.5.1", title: "3.5.1 微程序控制概念" },
                { id: "3.5.2", title: "3.5.2 微指令编码方式" },
                { id: "3.5.3", title: "3.5.3 微程序的顺序控制" },
                { id: "3.5.4", title: "3.5.4 微指令格式" },
                { id: "3.5.5", title: "3.5.5 典型微指令举例——模型机微指令格式" }
            ]},
            { id: "3.6", title: "3.6 典型 RISC 处理器微体系结构", children: [
                { id: "3.6.1", title: "3.6.1 MIPS R4000 的微体系结构" },
                { id: "3.6.2", title: "3.6.2 ARM7 的微体系结构" }
            ]}
        ] 
      },
      {
        id: "ch4",
        title: "第4章 指令系统层",
        children: [
            { id: "4.1", title: "4.1 80x86 CPU", children: [
                { id: "4.1.1", title: "4.1.1 8086/8088 CPU" },
                { id: "4.1.2", title: "4.1.2 80386/80486 CPU" },
                { id: "4.1.3", title: "4.1.3 Pentium 系列 CPU" }
            ]},
            { id: "4.2", title: "4.2 80x86 CPU 的寄存器和主存储器", children: [
                { id: "4.2.1", title: "4.2.1 80x86 CPU 的寄存器" },
                { id: "4.2.2", title: "4.2.2 80x86 的主存储器" }
            ]},
            { id: "4.3", title: "4.3 80x86 CPU 指令系统", children: [
                { id: "4.3.1", title: "4.3.1 80x86 寻址方式" },
                { id: "4.3.2", title: "4.3.2 80x86 CPU 指令分类" },
                { id: "4.3.3", title: "4.3.3 传送类指令" },
                { id: "4.3.4", title: "4.3.4 算术运算类指令" },
                { id: "4.3.5", title: "4.3.5 逻辑类指令" },
                { id: "4.3.6", title: "4.3.6 串操作类指令" },
                { id: "4.3.7", title: "4.3.7 处理机控制类指令" }
            ]}
        ]
      },
      {
        id: "ch5",
        title: "第5章 汇编语言层",
        children: [
             { id: "5.1", title: "5.1 汇编语言层概述", children: [
                 { id: "5.1.1", title: "5.1.1 汇编程序" }
             ]},
             { id: "5.2", title: "5.2 汇编语言语句格式", children: [
                 { id: "5.2.1", title: "5.2.1 语句格式" }
             ]},
             { id: "5.3", title: "5.3 80x86 宏汇编语言数据、表达式和运算符", children: [
                 { id: "5.3.1", title: "5.3.1 常数" },
                 { id: "5.3.2", title: "5.3.2 变量" },
                 { id: "5.3.3", title: "5.3.3 标号" },
                 { id: "5.3.4", title: "5.3.4 表达式与运算符" }
             ]},
             { id: "5.4", title: "5.4 80x86 宏汇编语言伪指令", children: [
                 { id: "5.4.1", title: "5.4.1 符号定义语句" },
                 { id: "5.4.2", title: "5.4.2 处理器选择伪指令" },
                 { id: "5.4.3", title: "5.4.3 段结构伪指令" },
                 { id: "5.4.4", title: "5.4.4 段组伪指令" },
                 { id: "5.4.5", title: "5.4.5 内存模式和简化段定义伪指令" },
                 { id: "5.4.6", title: "5.4.6 定位和对准伪指令" },
                 { id: "5.4.7", title: "5.4.7 过程定义伪指令" },
                 { id: "5.4.8", title: "5.4.8 包含伪指令" },
                 { id: "5.4.9", title: "5.4.9 标题伪指令" }
             ]},
             { id: "5.5", title: "5.5 宏指令", children: []},
             { id: "5.6", title: "5.6 汇编语言程序设计基本技术", children: [
                 { id: "5.6.1", title: "5.6.1 程序设计步骤" },
                 { id: "5.6.2", title: "5.6.2 顺序程序设计" },
                 { id: "5.6.3", title: "5.6.3 分支程序设计" },
                 { id: "5.6.4", title: "5.6.4 循环程序设计" },
                 { id: "5.6.5", title: "5.6.5 子程序设计" },
                 { id: "5.6.6", title: "5.6.6 系统功能子程序的调用" },
                 { id: "5.6.7", title: "5.6.7 汇编语言程序的开发" }
             ]}
        ]
      }
    ]
  },
  {
    title: "第三篇 存储系统和输入/输出系统",
    chapters: [
      { id: "ch6", title: "第6章 存储系统", children: [
          { id: "6.1", title: "6.1 存储系统概述", children: [
              {id: "6.1.1", title: "6.1.1 存储器的分类"},
              {id: "6.1.2", title: "6.1.2 主存的主要技术指标"}
          ] },
          { id: "6.2", title: "6.2 存储原理", children: [
              {id: "6.2.1", title: "6.2.1 半导体存储器的存储原理"},
              {id: "6.2.2", title: "6.2.2 磁表面存储器的存储原理"}
          ] },
          { id: "6.3", title: "6.3 主存储器的组织", children: [
              {id: "6.3.1", title: "6.3.1 主存储器的逻辑设计"},
              {id: "6.3.2", title: "6.3.2 主存储器与 CPU 的连接"},
              {id: "6.3.3", title: "6.3.3 Pentium CPU 与存储器组织"},
              {id: "6.3.4", title: "6.3.4 高级 DRAM"}
          ] },
          { id: "6.4", title: "6.4 高速缓冲存储器", children: [
              {id: "6.4.1", title: "6.4.1 Cache 的工作原理"},
              {id: "6.4.2", title: "6.4.2 Cache 的组织"},
              {id: "6.4.3", title: "6.4.3 Pentium II CPU 的 Cache 组织"}
          ] },
          { id: "6.5", title: "6.5 外部存储器", children: [
              {id: "6.5.1", title: "6.5.1 硬磁盘存储器"},
              {id: "6.5.2", title: "6.5.2 U盘和固态硬盘"}
          ] },
          { id: "6.6", title: "6.6 物理存储系统的组织", children: [
              {id: "6.6.1", title: "6.6.1 存储系统的层次结构"},
              {id: "6.6.2", title: "6.6.2 磁盘阵列"},
              {id: "6.6.3", title: "6.6.3 多体交叉存取技术"}
          ] },
          { id: "6.7", title: "6.7 虚拟存储系统的组织", children: [
              {id: "6.7.1", title: "6.7.1 概述"},
              {id: "6.7.2", title: "6.7.2 虚拟存储器的组织方式"},
              {id: "6.7.3", title: "6.7.3 Pentium CPU 支持的虚拟存储器"},
              {id: "6.7.4", title: "6.7.4 存储管理部件"}
          ] }
      ] },
      { id: "ch7", title: "第7章 输入/输出系统", children: [
          { id: "7.1", title: "7.1 输入/输出系统概述", children: [
              {id: "7.1.1", title: "7.1.1 主机与外围设备间的连接方式"},
              {id: "7.1.2", title: "7.1.2 I/O 接口的功能和分类"},
              {id: "7.1.3", title: "7.1.3 接口的编址和 I/O 指令"}
          ] },
          { id: "7.2", title: "7.2 直接程序控制方式", children: [] },
          { id: "7.3", title: "7.3 程序中断方式", children: [
              {id: "7.3.1", title: "7.3.1 中断的基本概念"},
              {id: "7.3.2", title: "7.3.2 中断的过程"},
              {id: "7.3.3", title: "7.3.3 80x86 中断指令"},
              {id: "7.3.4", title: "7.3.4 中断接口模型"},
              {id: "7.3.5", title: "7.3.5 中断接口举例"}
          ] },
          { id: "7.4", title: "7.4 DMA 方式", children: [
              {id: "7.4.1", title: "7.4.1 DMA 方式的一般概念"},
              {id: "7.4.2", title: "7.4.2 DMA 工作过程"},
              {id: "7.4.3", title: "7.4.3 DMA 接口组成"},
              {id: "7.4.4", title: "7.4.4 DMA 控制器编程及应用"}
          ] },
          { id: "7.5", title: "7.5 总线", children: [
              {id: "7.5.1", title: "7.5.1 总线的功能与分类"},
              {id: "7.5.2", title: "7.5.2 总线标准及信号组成"},
              {id: "7.5.3", title: "7.5.3 总线操作时序"},
              {id: "7.5.4", title: "7.5.4 典型总线举例"}
          ] },
          { id: "7.6", title: "7.6 典型外设接口", children: [
              {id: "7.6.1", title: "7.6.1 ATA 接口"},
              {id: "7.6.2", title: "7.6.2 SCSI 接口"}
          ] },
          { id: "7.7", title: "7.7 I/O 设备与 I/O 程序设计", children: [
              {id: "7.7.1", title: "7.7.1 概述"},
              {id: "7.7.2", title: "7.7.2 键盘"},
              {id: "7.7.3", title: "7.7.3 鼠标器"},
              {id: "7.7.4", title: "7.7.4 打印机"},
              {id: "7.7.5", title: "7.7.5 液晶显示器"}
          ] }
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
