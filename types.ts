export interface Example {
  question: string;
  solution: string;
  tip?: string;
}

export interface KeyPoint {
  title: string;
  content: string;
  isExamFocus?: boolean;
  formulas?: string[];
}

export type ContentType = 'chapter' | 'section' | 'subsection';

// The universal unit of content.
// Whether it's a Chapter, Section, or SubSection, it looks like this.
export interface ContentBlock {
  id: string;
  type: ContentType;
  title: string;
  description?: string; // Summary or Intro
  keyPoints?: KeyPoint[];
  examples?: Example[];
  childrenIds?: string[]; // IDs of the next level down (for navigation)
  sections?: any[]; // Keep for legacy if needed, but new code uses childrenIds
}

// Syllabus Structure for Sidebar (Tree)
export interface SidebarNode {
  id: string;
  title: string;
  children?: SidebarNode[];
}

export interface Part {
  title: string;
  chapters: SidebarNode[];
}
