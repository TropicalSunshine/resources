### Network
  - [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
  - [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
    - secruity addon/mechanism most modern browsers have in order to protect against send requests to malicious/unknown backend servers. Allows your front end to be assigned to a parent in a sense. The client/child can only make contact with the parent(service) that cors has approved.
  - [http headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
### CSS
- Conventions
  -  [BEM](https://css-tricks.com/bem-101/)
    - simple convention for naming css classes in order to easily work with across developers
- CSS In JS
  - ___It seems like so far these libraries cannot be code splitted and is loaded all at once using `<style/>` tags [ref](https://getstream.io/blog/styled-components-vs-css-stylesheets/)___
  - [Emotion](https://emotion.sh/docs/introduction)
  - [Styled Components](https://styled-components.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- Cross Bowser Consistency
  - [caniuse](https://caniuse.com/)
  - [Normalize CSS vs. Reset CSS](https://medium.com/@elad/normalize-css-or-css-reset-9d75175c5d1e)
  - Reset CSS
    - [Eric Meyer](https://meyerweb.com/eric/tools/css/reset/)
  - Normalize CSS
    - [necolas](https://github.com/necolas/normalize.css/)

### UI
- [Figma](https://www.figma.com/)
  - allows of calloborative UI design and prototyping
- [Coloors](https://coolors.co/) pallete creator
- [Material Design](https://material.io/design) Google's design specification
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
  - Great for component based UI

### Linting
- [AirBnb Style Guide](https://github.com/airbnb/javascript)
- [Google Style Guide](https://google.github.io/styleguide/jsguide.html#naming)

### Testing
- [Jest](https://jestjs.io/)
  - [React - jsdom](https://github.com/jsdom/jsdom)

### Referencing
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
  - best web dev reference
- [cssreference.io](https://cssreference.io/)
- [mdn](https://developer.mozilla.org/en-US/)
- [display: grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [display: flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [caniuse](https://caniuse.com/)

### Design Patterns
- [Flux](https://facebook.github.io/flux/)
  - [Redux](https://redux.js.org/)
    - [The Intent of Redux](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/#the-intent-and-design-of-redux)
    - [Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
      - will teach you how to use Redux the right way using our latest recommended patterns and practices
- [Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

### [React](https://reactjs.org/docs/hello-world.html) 
- #### Frameworks/Buildpacks
  - [create react app](https://create-react-app.dev/)
  - [next.js](https://nextjs.org/)
- #### Conventions
  - [organizing project](https://reactjs.org/docs/faq-structure.html)
- #### Reference
  - [prop types](https://www.npmjs.com/package/prop-types)
  - [hooks](https://reactjs.org/docs/hooks-reference.html)
  - [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
  - [lifecycle methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  - [custom hooks](https://fullstackopen.com/en/part7/custom_hooks)
- ### hooks
  - `useEffect`
  - `useMemo`
    - [web dev simplified tutorial](https://blog.webdevsimplified.com/2020-05/memoization-in-react/)
    - uses additional memory so dont use it when not necessary
    - 1. to lower the call for slow functions
    - 2. referencial integrity
    
    
  - `useCallback`
  - `useRef`
  - `useState`
  - `useContext`
  - `useImperativeHandle`
  - `useLayoutEffect`
  
- #### Concepts
  - [Code Splitting](https://reactjs.org/docs/hooks-rules.html)
    - lazy loading / suspense
    - allows for webpack to module code and will be lazy loaded by client
  - [HOC](https://reactjs.org/docs/higher-order-components.html)
    - essentially a wrapper components for common features/logic needed by child components
  - [Hook Flow](https://github.com/donavon/hook-flow)
    - lifecycle of react hooks
  - [Importance of React Keys](https://www.freecodecamp.org/news/react-under-the-hood/)
    - keys allow react a more efficient way of detecting change in components
  - [React Rendering Behavior Mark Erikson](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/)
- #### Advanced Concepts
  - [Reconciliation](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#what-is-rendering)
    - how react calculates the differences from the virtual dom to the real dom

### Redux
  - global state management
  - [Redux essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts#introduction) 
  - [Redux vs. React Context](https://www.codehousegroup.com/insight-and-inspiration/tech-stream/using-redux-and-context-api)
  - [Redux Slices](https://redux.js.org/tutorials/essentials/part-2-app-structure#redux-slices)
    - a "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file ( from redux website )  

### Cool Libraries
- 3D Graphics
  - [three.js](https://threejs.org/)  



### Reads
- [next.js vs cra](https://blog.logrocket.com/next-js-vs-create-react-app/)
- [ssr (server-side rendering) vs (client-side rendering) csr](https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8)
