import { flush, render } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('should build', () => {
    expect(new MyComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [MyComponent],
        html: '<my-component></my-component>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    });

    it('should work with a first name', async () => {
      element.first = 'Peter';
      await flush(element);
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    });

    it('should work with a last name', async () => {
      element.last = 'Parker';
      await flush(element);
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
    });

    it('should work with both a first and a last name', async () => {
      element.first = 'Peter'
      element.last = 'Parker';
      await flush(element);
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
    });

    it('Should emit custom event on click', async () => {
      let selected = jest.fn();
      element.addEventListener('itemSelected', selected);
      let button = element.querySelector('button');
      await button.click();
      expect(selected).toHaveBeenCalledWith('hello');   
  }); 
  });
});