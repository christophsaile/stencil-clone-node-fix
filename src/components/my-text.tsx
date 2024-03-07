import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-text',
  styleUrl: 'my-text.css',
})
export class MyText {
  render() {
    return (
      <Host>
        <p>My Text (no-shadow)</p>
      </Host>
    );
  }
}
