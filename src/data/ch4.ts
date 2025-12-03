
import { ContentBlock } from '../../types';

export const CH4_DATA: Record<string, ContentBlock> = {
  "ch4": {
    id: "ch4",
    type: "chapter",
    title: "第4章 指令系统层",
    description: "本章主要介绍 80x86 架构的指令系统。重点在于寻址方式的识别、物理地址的计算、标志位的变化以及常用指令（传送、算术、逻辑）的用法。",
    childrenIds: ["4.1", "4.2", "4.3"]
  },
  "4.1": {
    id: "4.1",
    type: "section",
    title: "4.1 80x86 CPU",
    childrenIds: ["4.1.1", "4.1.2", "4.1.3"]
  },
  "4.1.1": { id: "4.1.1", type: "subsection", title: "4.1.1 8086/8088 CPU", keyPoints: [{ title: "概况", content: "16位微处理器。20位地址总线 (1MB寻址空间)。引入指令预取队列。" }] },
  "4.1.2": { id: "4.1.2", type: "subsection", title: "4.1.2 80386/80486 CPU", keyPoints: [{ title: "概况", content: "32位微处理器。4GB寻址空间。引入保护模式和虚拟存储管理。" }] },
  "4.1.3": { id: "4.1.3", type: "subsection", title: "4.1.3 Pentium 系列 CPU", keyPoints: [{ title: "概况", content: "超标量流水线 (U/V Pipeline)。" }] },
  "4.2": {
    id: "4.2",
    type: "section",
    title: "4.2 80x86 CPU 的寄存器和主存储器",
    childrenIds: ["4.2.1", "4.2.2"]
  },
  "4.2.1": {
    id: "4.2.1",
    type: "subsection",
    title: "4.2.1 80x86 CPU 的寄存器",
    keyPoints: [
      {
        title: "通用寄存器 (8个)",
        content: `**数据寄存器**：
- **AX** (Accumulator): 累加器，I/O指令必用。
- **BX** (Base): 基址寄存器，可作地址指针。
- **CX** (Count): 计数寄存器，循环/串操作用。
- **DX** (Data): 数据寄存器，乘除法/I/O端口地址。
**指针与变址寄存器**：
- **SP** (Stack Pointer): 堆栈指针。
- **BP** (Base Pointer): 基址指针 (栈帧)。
- **SI** (Source Index): 源变址。
- **DI** (Destination Index): 目的变址。`
      },
      {
        title: "段寄存器 (4个)",
        content: `用于地址分段：
- **CS**: 代码段。
- **DS**: 数据段。
- **SS**: 堆栈段。
- **ES**: 附加段。`
      },
      {
        title: "标志寄存器 FLAGS (考点)",
        content: `**状态标志**：
- **CF** (Carry): 进位/借位 (无符号数溢出)。
- **ZF** (Zero): 结果为零。
- **SF** (Sign): 结果为负。
- **OF** (Overflow): 带符号数溢出。
- **PF** (Parity): 奇偶标志。
- **AF** (Auxiliary): 辅助进位 (BCD用)。

**控制标志**：
- **IF**: 中断允许。
- **DF**: 方向标志 (串操作)。
- **TF**: 陷阱标志 (单步调试)。`,
        isExamFocus: true
      }
    ]
  },
  "4.2.2": {
    id: "4.2.2",
    type: "subsection",
    title: "4.2.2 80x86 的主存储器",
    keyPoints: [
      {
        title: "物理地址计算",
        content: `8086 有 20根地址线，但寄存器只有 16位。
**分段机制**：
$$物理地址 = 段基址 \\times 16 + 偏移地址$$
即段寄存器内容左移 4 位 (相当于十六进制末尾补0) 加上偏移量。
例如：CS=2000H, IP=1000H -> 物理地址 = 21000H。`,
        isExamFocus: true
      },
      {
        title: "小端存储 (Little Endian)",
        content: "低字节存放在低地址，高字节存放在高地址。x86 系列采用小端模式。"
      }
    ]
  },
  "4.3": {
    id: "4.3",
    type: "section",
    title: "4.3 80x86 CPU 指令系统",
    childrenIds: ["4.3.1", "4.3.2", "4.3.3", "4.3.4", "4.3.5", "4.3.6", "4.3.7"]
  },
  "4.3.1": { id: "4.3.1", type: "subsection", title: "4.3.1 80x86 寻址方式", keyPoints: [{ title: "复习", content: "参见 2.3.2 节。注意：只有 BX, BP, SI, DI 可以作为间接寻址的寄存器 (16位模式下)。BP默认段是 SS，其余是 DS。" }] },
  "4.3.2": { id: "4.3.2", type: "subsection", title: "4.3.2 指令分类", keyPoints: [{ title: "概览", content: "传送、算术、逻辑、串操作、控制转移、处理机控制。" }] },
  "4.3.3": {
    id: "4.3.3",
    type: "subsection",
    title: "4.3.3 传送类指令",
    keyPoints: [
      {
        title: "MOV 指令",
        content: `MOV dst, src
- 不影响标志位。
- 两个操作数不能同时为内存。
- 立即数不能直接送段寄存器。
- CS 不能作为目的操作数。`
      },
      {
        title: "堆栈操作",
        content: `**PUSH src**: SP = SP - 2, 将 src 压入。
**POP dst**: 弹出至 dst, SP = SP + 2。
*注意*：x86 堆栈向下生长（高地址 -> 低地址）。`
      }
    ]
  },
  "4.3.4": {
    id: "4.3.4",
    type: "subsection",
    title: "4.3.4 算术运算类指令",
    keyPoints: [
      {
        title: "加减法",
        content: `**ADD/SUB**: 普通加减。
**ADC/SBB**: 带进位加减 (用于多字节运算)。
**INC/DEC**: 自增/自减 (不影响 CF 标志，常用于循环计数)。`
      },
      {
        title: "比较 CMP",
        content: `CMP dest, src
做减法运算 (dest - src)，但不回写结果，**只改变标志位**。
常用于条件跳转之前。`
      }
    ]
  },
  "4.3.5": {
    id: "4.3.5",
    type: "subsection",
    title: "4.3.5 逻辑类指令",
    keyPoints: [
      {
        title: "逻辑运算",
        content: `**AND**: 逻辑与 (常用于清零某些位)。
**OR**: 逻辑或 (常用于置1)。
**XOR**: 异或 (常用于自身清零 XOR AX, AX)。
**NOT**: 取反。
**TEST**: 测试 (做AND运算但不回写，只置标志)。`
      }
    ]
  },
  "4.3.6": { id: "4.3.6", type: "subsection", title: "4.3.6 串操作类指令", keyPoints: [{ title: "串操作", content: "MOVS, STOS, LODS, SCAS, CMPS。配合 REP 前缀。方向标志 DF (0增1减)。" }] },
  "4.3.7": { id: "4.3.7", type: "subsection", title: "4.3.7 处理机控制类指令", keyPoints: [{ title: "控制", content: "CLC (清CF), STC (置CF), CLI (关中断), STI (开中断), HLT (停机)。" }] }
};
