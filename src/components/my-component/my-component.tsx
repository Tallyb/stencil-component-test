import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  @Event() itemSelected: EventEmitter;
  selectItem(item: string) {
      console.log('ITEM CLICKED')
      this.itemSelected.emit(item);

  }

  render() {
    return (
      <div onClick={this.selectItem.bind(this, 'hello')}>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
