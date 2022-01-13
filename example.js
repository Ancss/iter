import Itor, { createItor } from './index.js'
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
var ls = createItor(lights)
setTimeout(() => {
  console.log('pause')
  ls.pause()
}, 5000);
setTimeout(() => {
  console.log('play')
  ls.play()
}, 10000);
setTimeout(() => {
  console.log('stop')
  ls.stop()
}, 15000);
for await (let value of ls) {
  console.log(value.color)
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, value.time)
  })
}
