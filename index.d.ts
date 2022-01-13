export default class Itor<T> {
  /**
  A async pauseable itorator

	The instance is an [`Itorable`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Itoration_protocols) of `[key, value]` pairs so you can use it directly in a [`for…of`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of) loop.

	@example
	```js
	import Itor from 'itor'
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
  for await (let value of ls) {
    console.log(value.color)
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, value.time)
    })
  }

	```
	*/
  constructor(_value: T[]);
  readonly value: T[];
  pause: () => void;
  play: () => void;
  stop: () => void;
  [Symbol.asyncIterator](): AsyncIterableIterator<T>;
}

export function createItor<T>(value: T[]): Itor<T>;
