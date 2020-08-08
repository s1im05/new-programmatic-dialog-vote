declare interface DialogConfig {
    title: string;
    items: DialogItem[];
    url: string;
    feedback: string;
}

declare interface DialogItem {
    name: string;
    id: number;
}
