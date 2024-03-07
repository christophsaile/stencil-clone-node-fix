import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-grid',
  styleUrl: 'my-grid.css',
  shadow: true,
})
export class MyGrid {
  render() {
    return (
      <Host>
        <p>My Grid (shadow)</p>
        <slot></slot>
      </Host>
    );
  }
}
