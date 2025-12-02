export interface KeyPoint {
    title: string;
    content: string;
    isExamFocus?: boolean;
    formulas?: string[];
}

export interface Example {
    question: string;
    solution: string;
    tip?: string;
}

export interface ContentBlock {
    id: string;
    type: 'chapter' | 'section' | 'subsection';
    title: string;
    description?: string;
    childrenIds?: string[];
    keyPoints?: KeyPoint[];
    examples?: Example[];
    // For compatibility if we want to keep the old structure or if some blocks use it
    sections?: {
        subtitle?: string;
        content: string | string[];
        type?: 'text' | 'list' | 'important' | 'tip';
    }[];
}

export interface SyllabusItem {
    id: string;
    title: string;
    children?: SyllabusItem[];
}

export interface Part {
    title: string;
    chapters: SyllabusItem[];
}
