import type { ArticleTemplate } from "./Article.d.js";

export class Article implements ArticleTemplate {
    static _id: number = 0;

    _id: number = 0;
    _title: string;
    _content: string;

    constructor();
    constructor(title: string, content: string);
    constructor(title?: string, content?: string) {
        this._title = title ?? 'Default Title';
        this._content = content ?? 'Default Content';
        this._id = Article._id;

        Article._id++;
    }

    get id(): number {
        return this._id;
    }
    get title(): string {
        return this._title;
    }
    get content(): string {
        return this._content;
    }

    set title(value: string) {
        this._title = value;
    }
    set content(value: string) {
        this._content = value;
    }
}