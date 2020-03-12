
Function.prototype.myApply = myApply;
Function.prototype.myCall = myCall;
Function.prototype.myBind = myBind;

function myApply(context, args) {
  context = context || window;
  args = args || [];
  const key = Symbol('key');
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
}

function myCall(context, ...args) {
  context = context || window;
  // args = args || [];
  const key = Symbol('key');
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
}

function myBind(context, ...args) {
  const fn = this;
  return function newFn() {
    if (this instanceof newFn) {
      return new fn(...args, ...arguments)
    }
    return fn.apply(context, [...args, ...arguments])
  }
}

let obj = {name: 'Michael'}

function fn(a, ...arg) {
  console.log("fn -> a  arg", a , arg)
  console.log('name', this.name)
}

function myNew(fn, ...args) {
  const instance = {};
  Object.setPrototypeOf(instance, fn.prototype)
  const result = fn.apply(instance, args)
  return result instanceof Object ? result : instance;
}