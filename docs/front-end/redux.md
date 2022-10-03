---
sidebar_position: 3
sidebar_label : "Redux"
---

# [Redux](https://redux.js.org/)

global state management

## Concepts
- [Redux essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts#introduction) 

- [Redux Slices](https://redux.js.org/tutorials/essentials/part-2-app-structure#redux-slices)

    - "a "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file"

- [Reducers and Immutable Updates](https://redux.js.org/tutorials/essentials/part-2-app-structure#reducers-and-immutable-updates)

    - "You can only write "mutating" logic in Redux Toolkit's createSlice and createReducer because they use Immer inside! If you write mutating logic in reducers without Immer, it will mutate the state and cause bugs!"

    - "components can't talk to the Redux store directly, because we're not allowed to import it into component files"

## Design Pattern
- [Flux](https://facebook.github.io/flux/)

## Reads

- [Redux vs. React Context](https://www.codehousegroup.com/insight-and-inspiration/tech-stream/using-redux-and-context-api)   

- [The Intent of Redux](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/#the-intent-and-design-of-redux)
- [Avoid using es6 Map + Set](https://github.com/reduxjs/redux/issues/1499)
