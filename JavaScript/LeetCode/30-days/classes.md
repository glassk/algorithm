## 2694. Event Emitter

[문제](https://leetcode.com/problems/event-emitter/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (this.events.has(eventName)) {
      this.events.get(eventName).push(callback);
    } else {
      this.events.set(eventName, [callback]);
    }

    return {
      unsubscribe: () => {
        const callbacks = this.events.get(eventName) || [];
        this.events.set(
          eventName,
          callbacks.filter((cb) => cb !== callback)
        );
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events.has(eventName)) {
      return [];
    }
    return this.events.get(eventName).map((callback) => callback(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
```

## 2695. Array Wrapper

[문제](https://leetcode.com/problems/array-wrapper/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {number[]} nums
 * @return {void}
 */
const ArrayWrapper = function (nums) {
  this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((acc, value) => acc + value, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.nums);
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
```

## 2726. Calculator with Method Chaining

[문제](https://leetcode.com/problems/calculator-with-method-chaining/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.result = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.result += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.result -= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.result *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.result /= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result **= value;
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.result;
  }
}
```
