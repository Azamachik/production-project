export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    MATH = 'MATH',
}

export enum ArticleBlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    NOTE = 'NOTE',
    QUOTE = 'QUOTE',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title: string;
    paragraphs: string[];
}

export interface ArticleQuoteBlock extends ArticleBlockBase {
    type: ArticleBlockType.QUOTE;
    content: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock
    | ArticleQuoteBlock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    views: number;
    createdAt: string;
    updatedAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

export interface ArticleDetailsSchema {
    data?: Article;
    isLoading: boolean;
    error?: string;
}
