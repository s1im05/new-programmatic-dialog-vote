import './scss/main.scss';
import './polyfills.ts';
import {DialogPopupClass} from "./dialogPopup.class";

(window as any).npDialog = (config: DialogConfig) => {
    return new DialogPopupClass(config);
}
