---
sidebar_position: 8
sidebar_label : "Javascript"
---

# Javascript
 
Javascript is a rich language that is continously evolving iterating with each "ES" (ECMAScript) version that is introduced every few years. It deserves it's own section. ES versions are determined by a collective group of people, proposals to the ES language are submitted [here](https://github.com/tc39/proposals).

### History
- [How Web Apps Work: Javascript and the DOM](https://github.com/TropicalSunshine/resources.git)
read the section titled "Language Evolution"


### Knowledge
- introduction to Javascript
  - [Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md#chapter-1-what-is-javascript)
  - [Dan Abaramov Just Javascript](https://justjavascript.com/) 
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### Core Topics

#### primitive types :
 - `null`
   - the `typeof null` returns an `object` type due to a [bug](https://2ality.com/2013/10/typeof-null.html?ck_subscriber_id=1001202893)
   - for intentional unknown values
 - `undefined`
   - for unintentional unknown values
 - `Booleans`
 - `Numbers`
 - `BigInts`
 - `Strings`
 - `Symbols`
 - `Function`
 - `Objects`

 
#### closures
 - JS functions remembers variables and values outside of it's scope, during creation
 - [Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch3.md#closure)
 - [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
#### hoisting
 - all variable declarations anywhere in the code are treated as though if they were already declared, or compiled first
   - `it would be like a global header file for C++ that contains all variables ever declared in your program`
 - [Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch3.md#closure)
 - [mdn](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
#### values & reference
 - [Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apA.md#values-vs-references)
#### pure functions
 - functions that have no side effects like logging or making a network call, everything happens within the confines of that function
 - also "given the same input, will always return the same output" - Eric Elliot Medium [src](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
   - [Eric Elliott via Medium](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
 - [mutations, and pure functions](https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3)

#### Iterators & Generators
 - [MDN: Iterators & Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
    
### Advanced topics
 
 #### Arithmetic
     - [Arithmetic in JS](https://floating-point-gui.de/formats/fp/?ck_subscriber_id=1001202893)
     - floating point map is used instead of conventional mathematics
 
 #### Event Loop
   - [Jake Archibald:In The Loop - JSConf.Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0&ab_channel=JSConf)
### Tools
  - [jsdoc](https://jsdoc.app/index.html)
    - great for documenting js code
  - [TypeScript](https://www.typescriptlang.org/)
    - typed javascript
    - error and type checking
 

### Testing 
  - [testing socket.io servers with jest](https://medium.com/@tozwierz/testing-socket-io-with-jest-on-backend-node-js-f71f7ec7010f)

### References
  - [object destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
  - [ES6 syntax cheatsheet](https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f)

### Reads
  - [Mark Erikson](https://blog.isquaredsoftware.com/)
  
