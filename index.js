export default class Itor {
  constructor(value) {
    this._value = value
    this._stop = false
    this._resolve = null
    this._promise = null
  }
  [Symbol.asyncIterator]() {
    let index = 0
    return {
      next: async () => {
        if (this._promise) {
          await this._promise
        }
        this._promise = null
        return { value: this._value[index++ % this._value.length], done: this._stop }
      }
    }
  }
  get value() {
    return this._value
  }
  pause() {
    this._promise = new Promise((resolve) => {
      this.resolve = resolve
    })
  }
  play() {
    this.resolve()
  }
  stop() {
    this._stop = true
  }
}
export function createItor(value) {
  return new Itor(value)
}
