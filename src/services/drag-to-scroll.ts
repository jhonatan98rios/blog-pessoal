export class DragInScroll {

  left: number
  x: number
  grabbed: boolean
  element: HTMLElement

  constructor(element: HTMLElement) {
    this.left = 0
    this.x = 0
    this.grabbed = false
    this.element = element

    this.element.style.cursor = 'grab';
    document.addEventListener('mousemove', this.mouseMoveHandler.bind(this))
    document.addEventListener('mouseup', this.mouseUpHandler.bind(this))
  }

  mouseMoveHandler(e) {
    if (this.grabbed) {
      const dx = e.clientX - this.x;
      this.element.scrollLeft = this.left - dx;
      console.log('mouseMoveHandler')
    }
  };

  mouseUpHandler() {

    this.grabbed = false

    this.element.style.cursor = 'grab';
    this.element.style.removeProperty('user-select');

    console.log('mouseUpHandler')
  };

  mouseDownHandler(e: MouseEvent) {

    this.grabbed = true

    this.left = this.element.scrollLeft
    this.x = e.clientX

    this.element.style.cursor = 'grabbing';
    this.element.style.userSelect = 'none';

    console.log('mouseDownHandler')
  };
}