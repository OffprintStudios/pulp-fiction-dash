import { NewsCategory } from './news-category.enum';

export interface NewsDocument {
    readonly _id: string;
    readonly userId: string;
    readonly title: string;
    readonly desc: string;
    readonly body: string;
    readonly wordcount: number;
    readonly audit: {
        readonly featured: boolean;
        readonly category: NewsCategory;
        readonly published: boolean;
        readonly publishedOn?: Date;
        readonly isDeleted: boolean;
    }
}