# Itor
Using `for of` syntax itorator instance, supports pause and start at any time

使用`for of`语法迭代实例，支持随时暂停和启动


## Install
```shell
$ npm install Itor
```

## Usage
```js
import { createItor } from 'Itor'

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
  var ls = createItor(lights)
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
### createItor(values)
returns an itorable instance

返回一个可迭代的实例

#### pause()
Pause the instance being itorated

暂停迭代

#### play()
Play the instance being itorated

继续迭代

#### stop()
Stop itorating over the current instance

停止迭代


