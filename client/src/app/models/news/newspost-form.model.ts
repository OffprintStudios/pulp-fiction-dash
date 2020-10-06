import { NewsCategory } from './news-category.enum';

export interface NewspostForm {
    readonly title: String;
    readonly desc: String;
    readonly body: String;
    readonly category: NewsCategory;
}