"use strict";(self.webpackChunkresources=self.webpackChunkresources||[]).push([[1127],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2515:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(3117),a=r(102),l=(r(7294),r(3905)),i=["components"],o={sidebar_position:2,sidebar_label:"React"},s="[React](https://reactjs.org/docs/hello-world.html)",p={unversionedId:"front-end/react",id:"front-end/react",title:"[React](https://reactjs.org/docs/hello-world.html)",description:"Frameworks/Buildpacks",source:"@site/docs/front-end/react.md",sourceDirName:"front-end",slug:"/front-end/react",permalink:"/resources/docs/front-end/react",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/front-end/react.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"React"},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/resources/docs/front-end/intro"},next:{title:"Redux",permalink:"/resources/docs/front-end/redux"}},c=[{value:"Frameworks/Buildpacks",id:"frameworksbuildpacks",children:[],level:2},{value:"Conventions",id:"conventions",children:[],level:2},{value:"Hooks",id:"hooks",children:[],level:2},{value:"Design Pattern",id:"design-pattern",children:[],level:2},{value:"Testing",id:"testing",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"react"},(0,l.kt)("a",{parentName:"h1",href:"https://reactjs.org/docs/hello-world.html"},"React")),(0,l.kt)("h2",{id:"frameworksbuildpacks"},"Frameworks/Buildpacks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://create-react-app.dev/"},"create react app")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nextjs.org/"},"next.js"))),(0,l.kt)("h2",{id:"conventions"},"Conventions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/faq-structure.html"},"organizing project"))),(0,l.kt)("h2",{id:"hooks"},"Hooks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useEffect")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useMemo"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.webdevsimplified.com/2020-05/memoization-in-react/"},"web dev simplified tutorial")),(0,l.kt)("li",{parentName:"ul"},"uses additional memory so dont use it when not necessary"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"to lower the call for slow functions"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"referencial integrity"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useCallback"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=_AyFP5s69N4"},"web dev simplified tutorial")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kentcdodds.com/blog/usememo-and-usecallback"},"when to useMemo and useCallback"),"   "))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useRef")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useState")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useContext")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useImperativeHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useLayoutEffect"))),(0,l.kt)("h2",{id:"design-pattern"},"Design Pattern"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"},"Model-View-Controller (MVC)"))),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jsdom/jsdom"},"Jest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/intro"},"React Testing Library")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/ecosystem-user-event/"},"React Testing Library User Event")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/@JeffLombardJr/organizing-tests-in-jest-17fc431ff850"},"Organizing Tests in Jest"))),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/prop-types"},"prop types"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html"},"hooks"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-rules.html"},"rules of hooks"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"},"lifecycle methods diagram"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://fullstackopen.com/en/part7/custom_hooks"},"custom hooks")))))}m.isMDXComponent=!0}}]);