"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[65748],{3775:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var t=r(474848),s=r(28453),o=r(411470),i=r(119365);const l={id:"docs-notifications-showrunners-get-started",title:"Get Started",hide_title:!0,slug:"./get-started",displayed_sidebar:"pushNotificationSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_notifications_showrunners--get_started.png"},d="Showrunners scaffold overview",a={id:"notifications/showrunners-scaffold/docs-notifications-showrunners-get-started",title:"Get Started",description:"The showrunners framework is a scaffold that developers can use to build out notifications for their use cases.",source:"@site/docs/notifications/03-showrunners-scaffold/01-Showrunners-Scaffold-Get-Started.mdx",sourceDirName:"notifications/03-showrunners-scaffold",slug:"/notifications/showrunners-scaffold/get-started",permalink:"/docs/notifications/showrunners-scaffold/get-started",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/03-showrunners-scaffold/01-Showrunners-Scaffold-Get-Started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"docs-notifications-showrunners-get-started",title:"Get Started",hide_title:!0,slug:"./get-started",displayed_sidebar:"pushNotificationSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_notifications_showrunners--get_started.png"},sidebar:"pushNotificationSidebar",previous:{title:"Showrunners Scaffold",permalink:"/docs/notifications/showrunners-scaffold"},next:{title:"Scaffold Deepdive",permalink:"/docs/notifications/showrunners-scaffold/scaffold-deepdive"}},c={},h=[{value:"Setup showrunner",id:"setup-showrunner",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Clone showrunners scaffold repo",id:"clone-showrunners-scaffold-repo",level:3},{value:"Install dependancies",id:"install-dependancies",level:3},{value:"Run docker",id:"run-docker",level:3},{value:"Start showrunners",id:"start-showrunners",level:3},{value:"Setup trigger channel - Hello World",id:"setup-trigger-channel---hello-world",level:2},{value:"Setup",id:"setup",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Head:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"showrunners-scaffold-overview",children:"Showrunners scaffold overview"}),"\n",(0,t.jsx)(n.p,{children:"The showrunners framework is a scaffold that developers can use to build out notifications for their use cases."}),"\n",(0,t.jsx)(n.p,{children:"Showrunners framework provides the tools and helpers required for constructing the payload and sending the notification using the Push protocol infrastructure."}),"\n",(0,t.jsx)(n.p,{children:"Out-of-the-box showrunners provide the developer with a scheduling engine and libraries and helpers for easy access to blockchain data as well as web2 data sources."}),"\n","\n","\n",(0,t.jsx)(l,{children:(0,t.jsx)("title",{children:"Get Started | Showrunners Scaffold | Push Notifications | Push Documentation"})}),"\n",(0,t.jsx)(n.h2,{id:"setup-showrunner",children:"Setup showrunner"}),"\n",(0,t.jsx)(n.h3,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,t.jsx)(n.p,{children:"You should have the following installed on your system:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Docker"}),"\n",(0,t.jsx)(n.li,{children:"Node JS"}),"\n",(0,t.jsx)(n.li,{children:"NPM"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"clone-showrunners-scaffold-repo",children:"Clone showrunners scaffold repo"}),"\n",(0,t.jsx)(n.p,{children:"The initial step in setting up the showrunners is cloning the showrunners repo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-zsh",children:"git clone https://github.com/ethereum-push-notification-service/push-showrunners-framework\n"})}),"\n",(0,t.jsx)(n.p,{children:"This repository will contain the showrunner framework that you require to instantly build your channels logic."}),"\n",(0,t.jsx)(n.p,{children:"Now in order to run this showrunner, we will need .env file which will contain your credentials that are required for fetching data from blockchains (for example, Infura)."}),"\n",(0,t.jsxs)(n.p,{children:["For creating this ",(0,t.jsx)(n.code,{children:".env"})," file, simply copy the ",(0,t.jsx)(n.code,{children:".env.sample"})," file present in the root of the folder and replace the fields with valid credentials for each field."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"# MAKE A COPY OF THIS AND FILL WITH YOUR CREDENTIALS AND NAME IT .env (Remove .sample Part)\n\n# SHOWRUNNERS ENVIRONMENT: prod or staging or dev\nSHOWRUNNERS_ENV=staging\n\n## NORMAL CONFIG\n# DEBUG | CAN BE 'debug' or 'prod'\nLOG_LEVEL=debug_or_prod # 'debug' or 'prod'\n\n# WEB3 ENDPOINTS | NEED ATLEAST INFURA OR ETHERSCAN OR ALCHEMY, REST CAN BE NULL\nINFURA_PROJECT_ID=your_infura_project_id\nINFURA_PROJECT_SECRET=your_infura_project_secret\n\n## ADVANCED CONFIG\n# WEB3 ENDPOINTS | OPTIONAL IF YOU FILLED INFURA_PROJECT AND INFURA_PROJECT_SECRET, CAN SET IT TO NULL IF YOU WANT TO\nETHERSCAN_API=your_etherscan_api_key_or_null\nALCHEMY_API=your_alchemy_api_key_or_null\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Valid Values"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SHOWRUNNERS_ENV"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"prod"})," or ",(0,t.jsx)(n.code,{children:"staging"})]}),(0,t.jsxs)(n.td,{children:["Describes the Push Network you are targeting. If you deployed your channel on staging then this will be ",(0,t.jsx)(n.code,{children:"staging"})," else if you deployed on mainnet (even multi-chain channel) then this will be ",(0,t.jsx)(n.code,{children:"prod"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"LOG_LEVEL"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"debug"})," or ",(0,t.jsx)(n.code,{children:"prod"})]}),(0,t.jsx)(n.td,{children:"Changes the amount of log generated, recommended to use debug until you are sure of the logic."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"INFURA_PROJECT"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"your_infura_project_id"})," or ",(0,t.jsx)(n.code,{children:"null"})]}),(0,t.jsxs)(n.td,{children:["Head to ",(0,t.jsx)(n.a,{href:"https://infura.io",children:"infura.io"})," to generate one, required to query data of blockchain."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"INFURA_PROJECT_SECRET"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"your_infura_project_secret"})," or ",(0,t.jsx)(n.code,{children:"null"})]}),(0,t.jsx)(n.td,{children:"Need at least one (Infura, Etherscan or Alchemy) to operate correctly."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ETHERSCAN_API"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"your_etherscan_api_key"})," or ",(0,t.jsx)(n.code,{children:"null"})]}),(0,t.jsxs)(n.td,{children:["Head to ",(0,t.jsx)(n.a,{href:"https://etherscan.io",children:"etherscan.io"})," to generate one, required to query data of blockchain."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ALCHEMY_API"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"your_alchemy_api_key"})," or ",(0,t.jsx)(n.code,{children:"null"})]}),(0,t.jsxs)(n.td,{children:["Head to ",(0,t.jsx)(n.a,{href:"https://alchemy.com",children:"alchemy.com"})," to generate one, required to query data of blockchain."]})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"At least INFURA_PROJECT, INFURA_PROJECT_SECRET or ETHERSCAN_API or ALCHEMY_API key is required to correctly operate showrunners. Recommended to put all as the data fetching becomes more decentralised."})}),"\n",(0,t.jsx)(n.h3,{id:"install-dependancies",children:"Install dependancies"}),"\n",(0,t.jsxs)(n.p,{children:["Now that you have set up the showrunners ",(0,t.jsx)(n.code,{children:".env"})," file, you are all set to run the showrunners. Ensure that all dependencies are installed, open the terminal (or command prompt), and go to the root of the cloned repo, ",(0,t.jsx)(n.code,{children:"npm install"})," or ",(0,t.jsx)(n.code,{children:"yarn install"})," to install dependencies."]}),"\n",(0,t.jsxs)(o.A,{className:"showrunners",groupId:"showrunners-install",children:[(0,t.jsx)(i.A,{value:"npm",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-zsh",children:"npm install\n"})})}),(0,t.jsx)(i.A,{value:"yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-zsh",children:"yarn install\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"run-docker",children:"Run docker"}),"\n",(0,t.jsxs)(n.p,{children:["Next, open another terminal and type ",(0,t.jsx)(n.code,{children:"docker-compose up"})," to start running docker image."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-zsh",children:"docker-compose up\n"})}),"\n",(0,t.jsx)(n.h3,{id:"start-showrunners",children:"Start showrunners"}),"\n",(0,t.jsxs)(n.p,{children:["Finally, open another terminal and ensure you are still at the root of the cloned repo and type ",(0,t.jsx)(n.code,{children:"npm start"})," or ",(0,t.jsx)(n.code,{children:"yarn start"}),"."]}),"\n",(0,t.jsxs)(o.A,{className:"showrunners",groupId:"showrunners-install",children:[(0,t.jsx)(i.A,{value:"npm",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-zsh",children:"npm start\n"})})}),(0,t.jsx)(i.A,{value:"yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-zsh",children:"yarn start\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["If everything is good, this is the output that you should see! Congrats, you just installed Showrunners framework \ud83d\ude0a\ud83d\ude0a running on the port: ",(0,t.jsx)(n.code,{children:"5432"})," \ud83d\udcaa."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Screenshot of how Showrunners will look when you start it first",src:r(697845).A+"",title:"Representation of showrunners initial setup",width:"1200",height:"244"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"You might see that showrunners are throwing an error explaining that no channels can be found, a channel is what is needed to run logic controls through showrunners."}),(0,t.jsx)(n.p,{children:"Let's dive in and see next how to create your hello world channel to run on top of the showrunners framework!"})]}),"\n",(0,t.jsx)(n.h2,{id:"setup-trigger-channel---hello-world",children:"Setup trigger channel - Hello World"}),"\n",(0,t.jsx)(n.p,{children:"Let's create a simple trigger channel next to see how notifications can be triggered automatically from Showrunners framework. For this example, we will use a pre-existing template present inside Showrunners scaffold called Hello World."}),"\n",(0,t.jsx)(n.p,{children:"Hello World channel exists to simply demonstrate how easy it is to send notifications in Web3. To setup the channel, you will need to do the following things."}),"\n",(0,t.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Ensure that you have ",(0,t.jsx)(n.a,{href:"/docs/notifications/tutorials/create-your-channel/",title:"Tutorial on how to create your channel",children:"created your channel"})," and make a note of the private key used for the same."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Head to ",(0,t.jsx)(n.code,{children:"src/sample_showrunners"})," from the git clone of ",(0,t.jsx)(n.code,{children:"push-showrunners-framework"})," which you just setup."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the folder ",(0,t.jsx)(n.code,{children:"helloWorld"})," and drop it in ",(0,t.jsx)(n.code,{children:"src/showrunners"})," folder."]}),"\n",(0,t.jsxs)(n.p,{children:["You might notice that the showrunners has already moved to complain about ",(0,t.jsx)(n.code,{children:"helloWorldKeys.json"})," not containing the correct private key."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n  "PRIVATE_KEY_NEW_STANDARD_1":\n  {\n      "PK": "YOUR_CHANNEL_PRIVATE_KEY_HERE",\n      "CHAIN_ID": "CHAIN_ID_HERE"\n  },\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Just copy and paste the private key of your channel instead of ",(0,t.jsx)(n.code,{children:"YOUR_CHANNEL_PRIVATE_KEY_HERE"})]}),"\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.code,{children:"CHAIN_ID_HERE"}),", You will need to paste the multi chain id format, some examples of supported formats are:"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Network name"}),(0,t.jsx)(n.th,{children:"Chain_ID"}),(0,t.jsx)(n.th,{children:"Required ENV setting"}),(0,t.jsx)(n.th,{children:"Remarks"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Ethereum Mainnet"})}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SHOWRUNNERS_ENV=prod"})}),(0,t.jsxs)(n.td,{children:["Note: Use ",(0,t.jsx)(n.code,{children:"eip155:1"})," if you deployed your channel on Ethereum Mainnet."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Polygon Mainnet"})}),(0,t.jsx)(n.td,{children:"137"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SHOWRUNNERS_ENV=prod"})}),(0,t.jsxs)(n.td,{children:["Note: Use ",(0,t.jsx)(n.code,{children:"eip155:137"})," if you deployed your channel on Polygon Mainnet."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"BNB Mainnet"})}),(0,t.jsx)(n.td,{children:"56"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SHOWRUNNERS_ENV=prod"})}),(0,t.jsxs)(n.td,{children:["Note: Use ",(0,t.jsx)(n.code,{children:"eip155:111551116"})," if you deployed your channel on BNB Mainnet."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Arbitrum Mainnet"})}),(0,t.jsx)(n.td,{children:"42151"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SHOWRUNNERS_ENV=prod"})}),(0,t.jsxs)(n.td,{children:["Note: Use ",(0,t.jsx)(n.code,{children:"eip155:42151"})," if you deployed your channel on Arbitrum Mainnet."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Ethereum Testnet"})}),(0,t.jsx)(n.td,{children:"11155111"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SHOWRUNNERS_ENV=staging"})}),(0,t.jsxs)(n.td,{children:["Note: Use ",(0,t.jsx)(n.code,{children:"eip155:11155111"})," if you deployed your channel on Ethereum Testnet."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Polygon Mumbai"})}),(0,t.jsx)(n.td,{children:"80001"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SHOWRUNNERS_ENV=staging"})}),(0,t.jsxs)(n.td,{children:["Note: Use ",(0,t.jsx)(n.code,{children:"eip155:80001"})," if you deployed your channel on Polygon Mumbai."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"BNB Testnet"})}),(0,t.jsx)(n.td,{children:"97"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SHOWRUNNERS_ENV=staging"})}),(0,t.jsxs)(n.td,{children:["Note: Use ",(0,t.jsx)(n.code,{children:"eip155:97"})," if you deployed your channel on BNB Testnet."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Arbitrum Goerli"})}),(0,t.jsx)(n.td,{children:"421613"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SHOWRUNNERS_ENV=staging"})}),(0,t.jsxs)(n.td,{children:["Note: Use ",(0,t.jsx)(n.code,{children:"eip155:421613"})," if you deployed your channel on Arbitrum Goerli."]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Now run ",(0,t.jsx)(n.code,{children:"npm start"})," or ",(0,t.jsx)(n.code,{children:"yarn start"})," again and you should be able to see the following screen:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Screenshot of how Showrunners will look in the end after proper setup",src:r(88242).A+"",title:"Representation of showrunners final setup",width:"1200",height:"812"})}),"\n",(0,t.jsx)(n.p,{children:"Congrats, your channel custom notification trigger is setup and good to go. Let's look at what components of your channel folders enable what functionality next!"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},119365:(e,n,r)=>{r.d(n,{A:()=>i});r(296540);var t=r(618215);const s={tabItem:"tabItem_Ymn6"};var o=r(474848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:r,children:n})}},411470:(e,n,r)=>{r.d(n,{A:()=>b});var t=r(296540),s=r(618215),o=r(823104),i=r(956347),l=r(300205),d=r(757485),a=r(231682),c=r(289466);function h(e){var n,r;return null!==(n=null===(r=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===r?void 0:r.filter(Boolean))&&void 0!==n?n:[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,d.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,o=u(e),[i,d]=(0,t.useState)((()=>function(e){var n;let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}const s=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[a,h]=x({queryString:r,groupId:s}),[f,j]=function(e){let{groupId:n}=e;const r=function(e){return e?"docusaurus.tab."+e:null}(n),[s,o]=(0,c.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),m=(()=>{const e=null!=a?a:f;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{m&&d(m)}),[m]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);d(e),h(e),j(e)}),[h,j,o]),tabValues:o}}var j=r(992303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(474848);function w(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,o.a_)(),c=e=>{const n=e.currentTarget,r=d.indexOf(n),s=l[r].value;s!==t&&(a(n),i(s))},h=e=>{var n;let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var t;const n=d.indexOf(e.currentTarget)+1;r=null!==(t=d[n])&&void 0!==t?t:d[0];break}case"ArrowLeft":{var s;const n=d.indexOf(e.currentTarget)-1;r=null!==(s=d[n])&&void 0!==s?s:d[d.length-1];break}}null===(n=r)||void 0===n||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:c,...o,className:(0,s.A)("tabs__item",m.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===n}),children:null!=r?r:n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function N(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,g.jsx)(w,{...e,...n}),(0,g.jsx)(y,{...e,...n})]})}function b(e){const n=(0,j.A)();return(0,g.jsx)(N,{...e,children:h(e.children)},String(n))}},697845:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/showrunners-status-c9ef531ff1ef67d43c76d5c88309d49e.png"},88242:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/showrunners-success-46ba8e5b518def7ab0726d37a05768d2.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(296540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);