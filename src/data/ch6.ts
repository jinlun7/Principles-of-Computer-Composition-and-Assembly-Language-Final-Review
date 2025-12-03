
import { ContentBlock } from '../../types';

export const CH6_DATA: Record<string, ContentBlock> = {
  "ch6": {
    id: "ch6",
    type: "chapter",
    title: "第6章 存储系统",
    description: "本章主要解决“存储墙”问题。重点掌握存储器的层次结构（Cache-主存-辅存）、Cache 的三种映射方式及其地址计算、主存的容量扩展设计。",
    childrenIds: ["6.1", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7"]
  },
  "6.1": { id: "6.1", type: "section", title: "6.1 存储系统概述", childrenIds: ["6.1.1", "6.1.2"] },
  "6.1.1": { id: "6.1.1", type: "subsection", title: "6.1.1 存储器的分类", keyPoints: [{ title: "分类", content: "RAM (随机存取), ROM (只读), SAM (顺序存取, 磁带), DAM (直接存取, 磁盘)。" }] },
  "6.1.2": { id: "6.1.2", type: "subsection", title: "6.1.2 指标", keyPoints: [{ title: "带宽", content: "存储带宽 = 字长 / 存取周期。" }] },
  "6.2": {
    id: "6.2",
    type: "section",
    title: "6.2 存储原理",
    childrenIds: ["6.2.1"]
  },
  "6.2.1": {
    id: "6.2.1",
    type: "subsection",
    title: "6.2.1 SRAM vs DRAM",
    keyPoints: [
      {
        title: "对比 (考点)",
        content: `**SRAM (Static RAM)**:
- 存储元：双稳态触发器 (6个晶体管)。
- 速度：快。
- 刷新：不需要。
- 集成度：低。
- 成本：高。
- 用途：**Cache**。

**DRAM (Dynamic RAM)**:
- 存储元：电容 (1个晶体管)。
- 速度：慢 (需充放电)。
- 刷新：**需要** (电容漏电)。
- 集成度：高。
- 成本：低。
- 用途：**主存**。`,
        isExamFocus: true
      }
    ]
  },
  "6.3": {
    id: "6.3",
    type: "section",
    title: "6.3 主存储器的组织",
    childrenIds: ["6.3.2", "6.3.3"]
  },
  "6.3.2": {
    id: "6.3.2",
    type: "subsection",
    title: "6.3.2 主存储器与 CPU 的连接",
    keyPoints: [
      {
        title: "存储容量扩展",
        content: `**1. 位扩展 (增加字长)**
- 地址线并联，数据线分别引出。
- 例：用 1Kx4 芯片组成 1Kx8 存储器。需 2 片。

**2. 字扩展 (增加单元数)**
- 数据线并联，地址线低位并联，高位用于片选 (CS)。
- 例：用 1Kx8 芯片组成 2Kx8 存储器。需 2 片。

**3. 字位同时扩展**
- 先位扩展，再字扩展。`
      }
    ]
  },
  "6.3.3": { id: "6.3.3", type: "subsection", title: "6.3.3 Pentium 存储组织", keyPoints: [{ title: "字节使能", content: "64位数据线，8个字节使能信号 BE0#-BE7#，支持非对齐访问。" }] },
  "6.4": {
    id: "6.4",
    type: "section",
    title: "6.4 高速缓冲存储器 (Cache)",
    childrenIds: ["6.4.1", "6.4.2"]
  },
  "6.4.1": {
    id: "6.4.1",
    type: "subsection",
    title: "6.4.1 Cache 工作原理",
    diagram: "MemoryHierarchy",
    keyPoints: [
      {
        title: "局部性原理",
        content: `**时间局部性**：刚被访问的单元不久后可能再次被访问 (Loop)。
**空间局部性**：刚被访问的单元的邻近单元可能不久后被访问 (Array)。`
      },
      {
        title: "命中率 (Hit Rate)",
        content: `$$h = N_c / (N_c + N_m)$$
平均访问时间：$$T_a = h \\times T_c + (1-h) \\times T_m$$`
      }
    ]
  },
  "6.4.2": {
    id: "6.4.2",
    type: "subsection",
    title: "6.4.2 Cache 的组织 (映射方式)",
    diagram: "CacheMapping",
    keyPoints: [
      {
        title: "三种映射方式 (重难点)",
        content: `**1. 直接映射 (Direct Mapping)**
- 规则：主存块只能存放到 Cache 的特定行。$i = j \\mod m$。
- 地址：Tag | Line(Index) | Offset。
- 优点：简单。缺点：冲突率高。

**2. 全相联映射 (Fully Associative)**
- 规则：主存块可以存放到 Cache 任意行。
- 地址：Tag | Offset。
- 优点：冲突率低。缺点：比较器电路复杂，慢。

**3. 组相联映射 (Set Associative)**
- 规则：主存块映射到固定组，组内任意行。
- 地址：Tag | Set(Index) | Offset。
- 折中方案，最常用 (2路, 4路)。`,
        isExamFocus: true
      },
      {
        title: "替换算法",
        content: `当 Cache 满时，替换哪一块？
- **RAND**: 随机。
- **FIFO**: 先进先出。没利用局部性。
- **LRU (Least Recently Used)**: 近期最少使用。利用局部性，效果最好。`
      },
      {
        title: "写策略",
        content: `命中时：
- **写回法 (Write Back)**: 只修改 Cache，脏位 (Dirty Bit) 置 1，被替换时才写回主存。
- **写直达法 (Write Through)**: 同时修改 Cache 和主存。

未命中时：
- **写分配**: 加载块到 Cache，然后修改。
- **非写分配**: 直接写主存，不加载到 Cache。`
      }
    ]
  },
  "6.6": { id: "6.6", type: "section", title: "6.6 物理存储系统的组织", childrenIds: ["6.6.3"] },
  "6.6.3": { id: "6.6.3", type: "subsection", title: "6.6.3 多体交叉存取", keyPoints: [{ title: "低位交叉", content: "模 m 交叉编址。支持流水线方式并行存取，带宽提高 m 倍。" }] },
  "6.7": {
    id: "6.7",
    type: "section",
    title: "6.7 虚拟存储系统的组织",
    childrenIds: ["6.7.1", "6.7.2"]
  },
  "6.7.1": { id: "6.7.1", type: "subsection", title: "6.7.1 概述", keyPoints: [{ title: "虚存", content: "利用辅存模拟大容量主存。逻辑地址 -> MMU -> 物理地址。" }] },
  "6.7.2": {
    id: "6.7.2",
    type: "subsection",
    title: "6.7.2 组织方式",
    keyPoints: [
      {
        title: "页式管理",
        content: `将主存和程序都分为固定大小的页 (4KB)。
**TLB (Translation Lookaside Buffer)**: 页表的 Cache (快表)，加速地址转换。`
      }
    ]
  }
};
