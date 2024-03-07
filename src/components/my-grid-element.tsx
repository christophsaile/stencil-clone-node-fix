import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-grid-element',
  styleUrl: 'my-grid-element.css',
  shadow: true,
})
export class MyGridElement {
  render() {
    return (
      <Host>
        <p>My Grid Element (shadow)</p>
        <slot></slot>
      </Host>
    );
  }
}
