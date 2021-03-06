const classPrefix = 'np-dialog';

export class DialogPopupClass {

  overlay: HTMLDivElement;
  clicked: boolean;
  container: HTMLElement;
  private _feedbackDelay = 1000;

  constructor(private config: DialogConfig) {
  }

  show() {
    try {
      this.container = document.querySelector('body');
      this.container.classList.add(classPrefix);
      this.container.appendChild(this.createOverlay());
    } catch (e) {
      console.error(e);
    }
  }

  hide() {
    this.container.classList.remove(classPrefix);
    this.container.removeChild(this.overlay);
  }

  createOverlay() {
    try {
      this.overlay = document.createElement('div');
      this.overlay.classList.add(`${classPrefix}-overlay`);
      this.overlay.innerHTML = this.getDialogTemplate(this.config);
      this.overlay.querySelectorAll(`.${classPrefix}-item`).forEach((el: HTMLDivElement, index: number) => {
        el.onclick = this.itemClickHandler.bind(this, this.config.items[index].id, index);
      });
    } catch (e) {
      console.error(e);
    }

    return this.overlay;
  }

  getDialogTemplate(config: DialogConfig) {
    const items: string = config.items.map(item => `<div class="${classPrefix}-item">
            <div class="${classPrefix}-item-container">
                <span class="${classPrefix}-item-checkbox"></span>
                <span class="${classPrefix}-item-name">${item.name}</span>
            </div>
         </div>`).join('');

    const subtitle = this.config.showSubtitle === false ? '' : `<div class="${classPrefix}-dialog-subtitle">Реклама</div>`;

    return `
      <div class="${classPrefix}-dialog">
        ${subtitle}
        <p class="${classPrefix}-dialog-title">${config.title}<sup class="${classPrefix}-red">*</sup></p>
        <div class="${classPrefix}-items">${items}</div>
        <div class="${classPrefix}-yandex">
          Опрос проводится на технологиях<br>
          <a target="_blank" href="https://surveys.yandex.ru/"><span class="${classPrefix}-red">Я</span>ндекс.Взгляда</a>
        </div>
      </div>`;
  }

  async itemClickHandler(id: number, index: number) {
    if (this.clicked) return;
    this.clicked = true;
    const selected = this.overlay.querySelectorAll(`.${classPrefix}-item-checkbox`)[index];
    selected.classList.add(`${classPrefix}-item-checkbox-on`);

    fetch(this.config.url, {
      method: 'POST',
      body: JSON.stringify({id}),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    await this.delay(500);
    this.overlay.innerHTML = `<div class="${classPrefix}-feedback">${this.config.feedback}</div>`;
    await this.delay(this.config.feedbackDelay || this._feedbackDelay);
    this.hide();
  }

  delay(time: number): Promise<any> {
    return new Promise<any>(resolve => {
      window.setTimeout(() => {
        resolve();
      }, time);
    });
  }
}
