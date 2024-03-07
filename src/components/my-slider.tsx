import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'my-slider',
  styleUrl: 'my-slider.css',
})
export class MySlider {
  @Element() el: HTMLElement;

  componentDidLoad() {
    this.el.querySelectorAll('my-slide').forEach((slide, index) => {
      const copySlide = slide.cloneNode(true);
      this.el.appendChild(copySlide);
    });
  }

  render() {
    return (
      <Host style={{backgroundColor: 'lightblue'}}>
        <p>My Slider (no-shadow)</p>
        <slot></slot>
      </Host>
    );
  }
}
