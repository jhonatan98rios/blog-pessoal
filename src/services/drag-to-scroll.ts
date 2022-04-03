export class DragInScroll {

  slider: any
  isDown: boolean
  startX: any
  scrollLeft: any

  constructor (element: HTMLElement) {
    this.slider = element;
    this.isDown = false;

    this.slider.addEventListener('mousedown', this.handleMouseDown.bind(this))
    this.slider.addEventListener('mouseleave', this.handleMouseUpOrLeave.bind(this));
    this.slider.addEventListener('mouseup', this.handleMouseUpOrLeave.bind(this));
    this.slider.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  handleMouseDown(e: MouseEvent) {
    this.isDown = true;
    this.slider.classList.add('carousel-active');
    this.startX = e.pageX - this.slider.offsetLeft;
    this.scrollLeft = this.slider.scrollLeft;
  }

  handleMouseUpOrLeave(e: MouseEvent) {
    this.isDown = false;
    this.slider.classList.remove('carousel-active');
  }

  handleMouseMove(e: MouseEvent) {
    if(!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.slider.offsetLeft;
    const walk = (x - this.startX) * 3; //scroll-fast
    this.slider.scrollLeft = this.scrollLeft - walk;
  }

}