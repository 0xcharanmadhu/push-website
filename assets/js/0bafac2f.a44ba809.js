"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[26396],{113864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=n(474848),a=n(28453),o=n(411470),s=n(119365);const i={id:"docs-chat-ui-components-advanced-chatuiprovider",title:"ChatUIProvider",hide_title:!0,slug:"./chatuiprovider",displayed_sidebar:"pushChatSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_chat_ui_components_advanced--chatuiprovider.png"},c="ChatUIProvider",d={id:"chat/ui-components/Advanced/docs-chat-ui-components-advanced-chatuiprovider",title:"ChatUIProvider",description:"Enhance State Management: Boost Your Component's Functionality by Wrapping it with ChatUIProvider.",source:"@site/docs/chat/03-ui-components/Advanced/01-Integrate-Advanced-ChatUIProvider.mdx",sourceDirName:"chat/03-ui-components/Advanced",slug:"/chat/ui-components/Advanced/chatuiprovider",permalink:"/docs/chat/ui-components/Advanced/chatuiprovider",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/chat/03-ui-components/Advanced/01-Integrate-Advanced-ChatUIProvider.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"docs-chat-ui-components-advanced-chatuiprovider",title:"ChatUIProvider",hide_title:!0,slug:"./chatuiprovider",displayed_sidebar:"pushChatSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_chat_ui_components_advanced--chatuiprovider.png"},sidebar:"pushChatSidebar",previous:{title:"Integrate Support Bot",permalink:"/docs/chat/ui-components/integrate-support-bot"},next:{title:"ChatView Component",permalink:"/docs/chat/ui-components/Advanced/chatview-component"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Customization parameters",id:"customization-parameters",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"chatuiprovider",children:"ChatUIProvider"}),"\n",(0,r.jsx)(t.p,{children:"Enhance State Management: Boost Your Component's Functionality by Wrapping it with ChatUIProvider."}),"\n",(0,r.jsx)(t.p,{children:"You can seamlessly integrate your main root file with the ChatUIProvider, allowing you to effortlessly incorporate any component throughout your entire application. This simplifies the process of using components independently across the app, eliminating the need to manage common inputs such as account information and PGP private keys, among others."}),"\n",(0,r.jsx)(n,{children:(0,r.jsx)("title",{children:"ChatUIProvider | UI Components (@pushprotocol/uiweb) | Push Chat | Push\nDocumentation"})}),"\n","\n","\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(o.A,{className:"codetabs",groupId:"code-examples",children:(0,r.jsx)(s.A,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import { ChatUIProvider } from "@pushprotocol/uiweb";\nimport { darkChatTheme } from "@pushprotocol/uiweb";\n\nexport function App({ Component }) {\n  return (\n    <ChatUIProvider theme={darkChatTheme}>\n      <Component />\n    </ChatUIProvider>\n  );\n}\n'})})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"customization-parameters",children:"Customization parameters"}),"\n",(0,r.jsx)(t.p,{children:"Customize the parameters as per your need and the chat component being used."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Remarks"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"account"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Supports wallet address or chain agnostic wallet address format"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pgpPrivatekey"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Decrypted pgp private key of the user"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"theme"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"IChatTheme"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/chat/ui-components/Advanced/Themization/",children:"Theme object"}),", it can be custom theme object, ",(0,r.jsx)(t.code,{children:"lightChatTheme"})," ",(0,r.jsx)(t.code,{children:"darkChatTheme"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"children"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"React.ReactNode"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"env"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Env"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"API env - 'prod' or 'staging'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"signer"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"SignerType"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"Ethers or Viem Signer"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"user"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"PushAPI"})}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"initialized Push user for accessing all function calls"})]})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: Parameters ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.code,{children:"in this style"})})," are mandatory."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>s});n(296540);var r=n(618215);const a={tabItem:"tabItem_Ymn6"};var o=n(474848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>C});var r=n(296540),a=n(618215),o=n(823104),s=n(956347),i=n(300205),c=n(757485),d=n(231682),l=n(289466);function u(e){var t,n;return null!==(t=null===(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,c]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!==(t=r.find((e=>e.default)))&&void 0!==t?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[d,u]=m({queryString:n,groupId:a}),[v,x]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,o]=(0,l.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=null!=d?d:v;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=n(992303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(474848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),l=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==r&&(d(t),s(a))},u=e=>{var t;let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{var r;const t=c.indexOf(e.currentTarget)+1;n=null!==(r=c[t])&&void 0!==r?r:c[0];break}case"ArrowLeft":{var a;const t=c.indexOf(e.currentTarget)-1;n=null!==(a=c[t])&&void 0!==a?a:c[c.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:l,...o,className:(0,a.A)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=v(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,j.jsx)(f,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function C(e){const t=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(296540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);