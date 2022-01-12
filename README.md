# Iter
Using `for of` syntax iterator instance, supports pause and start at any time

使用`for of`语法迭代实例，支持随时暂停和启动


## Install
```shell
$ npm install Iter
```

## Usage
```js
import { createIter } from 'Iter'

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
  var ls = createIter(lights)
  for await (let value of ls) {
    console.log(value.color)//loop:red=>yellow=>green
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, value.time)
    })
  }
})()
```

## API
### createIter(values)
returns an iterable instance

返回一个可迭代的实例

#### pause()
Pause the instance being iterated

暂停迭代

#### play()
Play the instance being iterated

继续迭代

#### stop()
Stop iterating over the current instance

停止迭代


