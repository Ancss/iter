export default class Iter<T> {
  /**
  A async pauseable iterator

	The instance is an [`Iterable`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols) of `[key, value]` pairs so you can use it directly in a [`for…of`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of) loop.

	@example
	```js
	import Iter from './index.js'
  var lights = [
    {
      color: 'red',
      time: 3000
    },
    {
      color: 'yellow',
      time: 1000
    },
    {
      color: 'green',
      time: 3000
    },
  ];
  (async () => {
    var ls = new Iter(lights)
    for await (let value of ls) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, value.time)
      })
    }
  })()
	```
	*/
  constructor(_value: T[]);
  readonly value: T[];
  pause: () => void;
  play: () => void;
  stop: () => void;
  [Symbol.asyncIterator](): IterableIterator<T>;
}

export function createIter<T>(value: T[]): Iter<T>;
