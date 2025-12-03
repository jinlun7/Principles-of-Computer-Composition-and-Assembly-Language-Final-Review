
import { ContentBlock } from '../../types';

export const CH3_DATA: Record<string, ContentBlock> = {
  "ch3": {
    id: "ch3",
    type: "chapter",
    title: "第3章 微体系结构层",
    description: "本章是全书难点。深入CPU内部，探讨数据通路的设计、控制单元（CU）的两种实现方式（硬布线与微程序），以及提高CPU效率的关键技术——指令流水线。",
    childrenIds: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6"]
  },
  "3.1": {
    id: "3.1",
    type: "section",
    title: "3.1 CPU 的组成和功能",
    childrenIds: ["3.1.1", "3.1.2", "3.1.3", "3.1.4"]
  },
  "3.1.1": {
    id: "3.1.1",
    type: "subsection",
    title: "3.1.1 CPU 的组成",
    keyPoints: [
      {
        title: "寄存器组",
        content: `**专用寄存器** (用户不可见或受限):
- **PC (Program Counter)**: 存放下一条指令的地址。
- **IR (Instruction Register)**: 存放当前正在执行的指令。
- **MAR (Memory Address Register)**: 存放访存地址。
- **MDR (Memory Data Register)**: 存放访存数据。
- **PSW (Program Status Word)**: 状态寄存器 (ZF, CF, OF 等)。

**通用寄存器** (GPRs):
- R0, R1, R2... (供程序员使用，存放操作数)。`
      }
    ]
  },
  "3.1.2": {
    id: "3.1.2",
    type: "subsection",
    title: "3.1.2 指令执行过程",
    keyPoints: [
      {
        title: "指令周期流程",
        content: `1. **取指**：Fetch Instruction
2. **译码**：Decode Instruction
3. **计算地址**：Calculate Operand Address
4. **取数**：Fetch Operands
5. **执行**：Execute Operation
6. **写回**：Store Result`
      }
    ]
  },
  "3.1.3": {
    id: "3.1.3",
    type: "subsection",
    title: "3.1.3 时序控制方式",
    keyPoints: [
      {
        title: "三种方式",
        content: `1. **同步控制**：所有操作由统一的时钟信号控制。设计简单，但速度受限于最慢的操作。
2. **异步控制**：无统一时钟，各部件通过“应答”信号（Request/Ack）协调。速度快，但电路复杂。
3. **联合控制**：大部分同步，小部分异步（如 I/O 操作）。`
      }
    ]
  },
  "3.1.4": {
    id: "3.1.4",
    type: "subsection",
    title: "3.1.4 指令流水线",
    diagram: "PipelineDiagram",
    keyPoints: [
      {
        title: "流水线原理 (Pipelining)",
        content: `将指令执行过程分解为若干个独立的子过程（段），每个段由专门的硬件电路实现。
就像工厂装配线一样，多条指令在时间上重叠执行。
**五级流水线 (MIPS)**：
- **IF**: 取指
- **ID**: 译码/读寄存器
- **EX**: 执行/计算地址
- **MEM**: 访存
- **WB**: 写回`,
        isExamFocus: true
      },
      {
        title: "流水线性能指标",
        content: `假设流水线有 k 段，每段耗时 $\\Delta t$，处理 n 个任务。
1. **吞吐率 (TP)**：单位时间完成的任务数。
   $$TP = \\frac{n}{T_k}$$
2. **加速比 (S)**：不使用流水线时间 / 使用流水线时间。
   $$S = \\frac{nk}{k + n - 1}$$
   当 $n \\to \\infty$ 时，$S \\approx k$。`
      },
      {
        title: "流水线冒险 (Hazards)",
        content: `流水线受阻的现象。
1. **结构冒险 (资源冲突)**：多条指令同时争用同一资源（如同时访存）。
   *解决*：指令Cache和数据Cache分离。
2. **数据冒险 (Data Hazards)**：后一条指令依赖前一条的结果。
   *解决*：数据旁路 (Forwarding)、流水线暂停 (Stall/Bubble)。
3. **控制冒险 (Control Hazards)**：跳转指令改变 PC，导致预取的指令失效。
   *解决*：分支预测 (Branch Prediction)、延迟槽 (Delay Slot)。`
      }
    ]
  },
  "3.2": {
    id: "3.2",
    type: "section",
    title: "3.2 ALU 和运算方法",
    childrenIds: ["3.2.1", "3.2.2", "3.2.3", "3.2.4"]
  },
  "3.2.1": { id: "3.2.1", type: "subsection", title: "3.2.1 ALU 介绍", keyPoints: [{ title: "ALU", content: "算术逻辑单元。核心电路是加法器 (Adder)。" }] },
  "3.2.2": {
    id: "3.2.2",
    type: "subsection",
    title: "3.2.2 定点数运算方法",
    keyPoints: [
      {
        title: "溢出判断方法 (必考)",
        content: `**1. 单符号位法**
$$V = C_s \\oplus C_1$$
即：符号位进位 $C_s$ 与 最高数值位进位 $C_1$ 异或。
- 若异或为 1，溢出。

**2. 双符号位法 (变形补码)**
使用两位符号位：
- 00: 正数
- 11: 负数
- 01: **上溢** (正溢出)
- 10: **下溢** (负溢出)`,
        isExamFocus: true
      }
    ]
  },
  "3.2.3": {
    id: "3.2.3",
    type: "subsection",
    title: "3.2.3 浮点数运算方法",
    keyPoints: [
      {
        title: "浮点加减运算五步法",
        content: `1. **对阶**：小阶向大阶看齐（尾数右移）。
2. **尾数求和**：带符号运算。
3. **规格化**：
   - 右规：尾数双符号位出现 01/10，尾数右移，阶码+1。
   - 左规：尾数非 1.x 形式，尾数左移，阶码-1。
4. **舍入**：0舍1入法。
5. **溢出判断**：阶码上溢才算真正的溢出（报错）。`
      }
    ]
  },
  "3.2.4": { id: "3.2.4", type: "subsection", title: "3.2.4 十进制数加、减运算", keyPoints: [{ title: "BCD", content: "使用二进制编码的十进制数。" }] },
  "3.3": { id: "3.3", type: "section", title: "3.3 CPU 模型机的组成及其数据通路", childrenIds: ["3.3.1", "3.3.2"] },
  "3.3.1": { id: "3.3.1", type: "subsection", title: "3.3.1 基本组成", keyPoints: [{ title: "数据通路", content: "Datapath。指令执行过程中数据流经的路径，包括 ALU、寄存器、总线。" }] },
  "3.3.2": { id: "3.3.2", type: "subsection", title: "3.3.2 数据传输", keyPoints: [{ title: "微操作", content: "寄存器之间的数据流动。" }] },
  "3.4": { id: "3.4", type: "section", title: "3.4 组合逻辑控制器原理", childrenIds: ["3.4.1", "3.4.2", "3.4.3", "3.4.4", "3.4.5"] },
  "3.4.1": { id: "3.4.1", type: "subsection", title: "3.4.1 模型机的指令系统", keyPoints: [{ title: "概念", content: "设计一套简化的指令集用于教学。" }] },
  "3.4.2": { id: "3.4.2", type: "subsection", title: "3.4.2 模型机的时序系统", keyPoints: [{ title: "周期", content: "指令周期 > 机器周期 (CPU周期) > 时钟周期 (节拍)。" }] },
  "3.4.3": { id: "3.4.3", type: "subsection", title: "3.4.3 指令流程", keyPoints: [{ title: "流程图", content: "分析指令在每个节拍下的有效控制信号。" }] },
  "3.4.4": { id: "3.4.4", type: "subsection", title: "3.4.4 微命令的综合与产生", keyPoints: [{ title: "硬布线设计", content: "写出每个控制信号的逻辑表达式（如 $C_0 = T_1 \\cdot I_{ADD} + ...$），用门电路实现。" }] },
  "3.4.5": { id: "3.4.5", type: "subsection", title: "3.4.5 小结", keyPoints: [{ title: "硬布线特点", content: "速度极快（RISC首选），但设计极其复杂，一旦流片无法修改。" }] },
  "3.5": {
    id: "3.5",
    type: "section",
    title: "3.5 微程序控制器原理",
    childrenIds: ["3.5.1", "3.5.2", "3.5.3", "3.5.4", "3.5.5"]
  },
  "3.5.1": {
    id: "3.5.1",
    type: "subsection",
    title: "3.5.1 微程序控制概念",
    keyPoints: [
      {
        title: "微程序设计思想",
        content: `仿照程序设计的方法来设计控制器。
- **微命令**：控制部件进行最基本操作的信号（如打开某个门）。
- **微指令**：一组同时发生的微命令的集合。
- **微程序**：实现一条机器指令功能的微指令序列。
- **控制存储器 (CM)**：存放微程序。通常是 ROM。`,
        isExamFocus: true
      },
      {
        title: "机器指令 vs 微指令",
        content: `一条机器指令（如 ADD）对应一段微程序（由若干微指令组成）。
执行机器指令 = 执行对应的微程序。`
      }
    ]
  },
  "3.5.2": { id: "3.5.2", type: "subsection", title: "3.5.2 微指令编码方式", keyPoints: [{ title: "编码", content: "1. **直接控制**：每一位代表一个信号。快但字长长。\n2. **字段编码**：互斥信号编码在字段中（译码）。缩短字长。" }] },
  "3.5.3": { id: "3.5.3", type: "subsection", title: "3.5.3 微程序的顺序控制", keyPoints: [{ title: "下址", content: "如何确定下一条微指令地址？\n- 计数器法 (uPC+1)\n- 断定法 (微指令中直接给出下址)" }] },
  "3.5.4": {
    id: "3.5.4",
    type: "subsection",
    title: "3.5.4 微指令格式",
    keyPoints: [
      {
        title: "水平型 vs 垂直型 (考点)",
        content: `**水平型**：
- 一次能定义并执行多个并行操作。
- 编码效率低，微指令长，微程序短。
- 执行速度快。

**垂直型**：
- 类似机器指令，一次只能定义一个操作。
- 编码效率高，微指令短，微程序长。
- 执行速度慢。`
      }
    ]
  },
  "3.5.5": { id: "3.5.5", type: "subsection", title: "3.5.5 典型微指令举例", keyPoints: [{ title: "举例", content: "分析具体的微指令字段分配。" }] },
  "3.6": { id: "3.6", type: "section", title: "3.6 典型 RISC 处理器微体系结构", childrenIds: ["3.6.1", "3.6.2"] },
  "3.6.1": { id: "3.6.1", type: "subsection", title: "3.6.1 MIPS R4000", keyPoints: [{ title: "R4000", content: "超流水线结构。" }] },
  "3.6.2": { id: "3.6.2", type: "subsection", title: "3.6.2 ARM7", keyPoints: [{ title: "ARM7", content: "经典的 3 级流水线：取指、译码、执行。冯·诺依曼结构。" }] }
};
