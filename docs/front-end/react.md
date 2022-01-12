---
sidebar_position: 2
sidebar_label : "React"
---

# [React](https://reactjs.org/docs/hello-world.html)

## Frameworks/Buildpacks
  - [create react app](https://create-react-app.dev/)
  - [next.js](https://nextjs.org/)

## Conventions
  - [organizing project](https://reactjs.org/docs/faq-structure.html)

## Hooks
- `useEffect`
- `useMemo`
    - [web dev simplified tutorial](https://blog.webdevsimplified.com/2020-05/memoization-in-react/)
    - uses additional memory so dont use it when not necessary
    - 1. to lower the call for slow functions
    - 2. referencial integrity
    
    
- `useCallback`
    - [web dev simplified tutorial](https://www.youtube.com/watch?v=_AyFP5s69N4)   
- `useRef`
- `useState`
- `useContext`
- `useImperativeHandle`
- `useLayoutEffect`

## Design Pattern
- [Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

## Testing

The preferred method of testing react components has is to use [Jest](https://github.com/jsdom/jsdom) + [React Testing Lib](https://testing-library.com/docs/react-testing-library/intro/)

Testing react component practices
| do | don't |
|----|-------|
|test from a user's perspective e.g. clicking this button should cause this to happen |don't test implmentation details e.g. did my state change from A -> B|
|test components that are important, and will save time if tested correctly |trying to achive 100% test coverage, unrealistic and time consuming|


## Reference
- [prop types](https://www.npmjs.com/package/prop-types)

- [hooks](https://reactjs.org/docs/hooks-reference.html)

- [rules of hooks](https://reactjs.org/docs/hooks-rules.html)

- [lifecycle methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  
- [custom hooks](https://fullstackopen.com/en/part7/custom_hooks)
