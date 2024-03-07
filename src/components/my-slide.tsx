import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-slide',
  styleUrl: 'my-slide.css',
})
export class MySlide {
  render() {
    return (
      <Host style={{backgroundColor: 'coral'}}>
        <p>My Slide (no-shadow)</p>
        <slot></slot>
      </Host>
    );
  }
}
