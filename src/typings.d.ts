declare interface DialogConfig {
    title: string;
    items: DialogItem[];
    url: string;
    feedback: string;
    showSubtitle?: boolean;
    feedbackDelay?: number;
}

declare interface DialogItem {
    name: string;
    id: number;
}

