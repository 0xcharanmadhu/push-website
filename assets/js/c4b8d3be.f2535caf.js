"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[14672],{881337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var o=n(474848),a=n(28453);n(113490);const s={slug:"how-to-implement-gasless-vote",title:"How to Implement Gasless Vote Delegation \u2014 A novel feature for Governance",description:"How to Implement Gasless Vote Delegation \u2014 A novel feature for Governance",authors:["push"],image:"./cover-image.webp",text:"Last month we released the gas-free vote delegation offer and planned to run it for the whole month of March with the option to extend. Today we\u2019re happy to share that this offer will be available to a wider set of users for a longer period of time. Details below.",tags:["Blockchain","Governance","Epnsproject","Delegation","Vote"]},i=void 0,r={permalink:"/blog/how-to-implement-gasless-vote",source:"@site/blog/2022-04-05-how-to-implement-gasless-vote/index.md",title:"How to Implement Gasless Vote Delegation \u2014 A novel feature for Governance",description:"How to Implement Gasless Vote Delegation \u2014 A novel feature for Governance",date:"2022-04-05T00:00:00.000Z",formattedDate:"April 5, 2022",tags:[{label:"Blockchain",permalink:"/blog/tags/blockchain"},{label:"Governance",permalink:"/blog/tags/governance"},{label:"Epnsproject",permalink:"/blog/tags/epnsproject"},{label:"Delegation",permalink:"/blog/tags/delegation"},{label:"Vote",permalink:"/blog/tags/vote"}],readingTime:2.5433333333333334,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"how-to-implement-gasless-vote",title:"How to Implement Gasless Vote Delegation \u2014 A novel feature for Governance",description:"How to Implement Gasless Vote Delegation \u2014 A novel feature for Governance",authors:["push"],image:"./cover-image.webp",text:"Last month we released the gas-free vote delegation offer and planned to run it for the whole month of March with the option to extend. Today we\u2019re happy to share that this offer will be available to a wider set of users for a longer period of time. Details below.",tags:["Blockchain","Governance","Epnsproject","Delegation","Vote"]},unlisted:!1,prevItem:{title:"EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance",permalink:"/blog/epns-collaborates-with-new-order"},nextItem:{title:"The All-New EPNS Dapp UI is finally here",permalink:"/blog/the-all-new-epns-dapp-ui"}},l={image:n(890699).A,authorsImageUrls:[void 0]},h=[{value:"Gasless Delegation Period Extended!",id:"gasless-delegation-period-extended",level:3},{value:"Vote Delegation",id:"vote-delegation",level:2},{value:"Gasless Delegation",id:"gasless-delegation",level:2},{value:"How to implement Gasless Vote Delegation",id:"how-to-implement-gasless-vote-delegation",level:2},{value:"How the frontend works",id:"how-the-frontend-works",level:2},{value:"How the backend works",id:"how-the-backend-works",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Cover image of How to Implement Gasless Vote Delegation \u2014 A novel feature for Governance",src:n(16263).A+"",width:"1400",height:"700"})}),"\n",(0,o.jsx)(t.h3,{id:"gasless-delegation-period-extended",children:"Gasless Delegation Period Extended!"}),"\n",(0,o.jsx)(t.p,{children:"Last month we released the gas-free vote delegation offer and planned to run it for the whole month of March with the option to extend. Today we\u2019re happy to share that this offer will be available to a wider set of users for a longer period of time. Details below."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Reduced minimum token holding for eligibility from 250 $PUSH to 100."}),"\n",(0,o.jsx)(t.li,{children:"The eligibility period has been extended for the whole month of April."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"All other details will remain the same as of now."}),"\n",(0,o.jsx)(t.h2,{id:"vote-delegation",children:"Vote Delegation"}),"\n",(0,o.jsxs)(t.p,{children:["Vote delegation is a novel feature that is enabled in the PUSH token contract, keeping in mind the idea to grow a strong community that acts in the best interest of the protocol. ",(0,o.jsx)(t.code,{children:"PUSH"})," allows its token holders to ",(0,o.jsx)(t.strong,{children:"delegate"})," their voting rights to an address of their choice."]}),"\n",(0,o.jsxs)(t.p,{children:["Vote delegation is creating a strong barrier for the majority of token holders as it requires ETH to cover gas-fee to execute the ",(0,o.jsx)(t.code,{children:"delegate"})," on-chain transaction."]}),"\n",(0,o.jsxs)(t.p,{children:["As the DAO landscape is going through immense experimentation and innovation to address the pressing problems, we came up with the ",(0,o.jsx)(t.strong,{children:"Gasless Vote Delegation"})," feature as a solution to voter apathy. We launched the feature a month ago and would like to share our insights and feedback received since its release."]}),"\n",(0,o.jsx)(t.h2,{id:"gasless-delegation",children:"Gasless Delegation"}),"\n",(0,o.jsx)(t.p,{children:"The goal of this initiative is to make voting an accessible activity to every PUSH token holder. Holders currently have a few ways to activate their voting power, and many of those ways are already incentivized with users receiving $PUSH token rewards!"}),"\n",(0,o.jsx)(t.p,{children:"With this feature token holders can delegate their voting power, free of gas cost. From our PUSH Governance dashboard, a token holder would just have to sign the delegate transaction."}),"\n",(0,o.jsx)(t.p,{children:"As this feature rollout was an experiment, we took precautions from exploitations by enabling few barriers."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"This feature is accessible to everyone holding at least 250 PUSH."}),"\n",(0,o.jsx)(t.li,{children:"A unique wallet address would be able to use the gasless delegation feature once in 7 days."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-implement-gasless-vote-delegation",children:"How to implement Gasless Vote Delegation"}),"\n",(0,o.jsx)(t.p,{children:"After the implementation of the Gasless Vote Delegation, we see this to be a much better delegation architecture for holders than them delegating votes on-chain. Hence we are releasing this article & making the repositories public so that any DAOs out there could explore & implement the feature without much difficulty."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"A high-level overview of the steps involved for a delegator"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Click on ",(0,o.jsx)(t.em,{children:"Delegate"})," from ",(0,o.jsx)(t.a,{href:"https://incentives.epns.io/",children:"Push Governance Dashboard"})]}),"\n",(0,o.jsxs)(t.li,{children:["Sign the delegate parameters needed for ",(0,o.jsx)(t.em,{children:"delegateBySig"})," contract function"]}),"\n",(0,o.jsx)(t.li,{children:"The backend verifies the signature by leveraging EIP712 & does the backend checks."}),"\n",(0,o.jsx)(t.li,{children:"The backend wallet pays for the transaction."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"EIP-712 is a more advanced and safer signature method. It is a standard for hashing and signing typed structured data. Gasless delegation is implemented using EIP-712."}),"\n",(0,o.jsx)(t.h2,{id:"how-the-frontend-works",children:"How the frontend works"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/push-protocol/push-incentives-dapp",children:"Frontend repository"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Sign the delegate parameters needed for ",(0,o.jsx)(t.em,{children:"delegateBySig"})," contract function"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'const domain = {  \n name: contractName,  \n chainId: chainId,  \n verifyingContract: contractAddress  \n}const types = {  \n Delegation: \\[  \n  { name: "delegatee", type: "address" },  \n  { name: "nonce", type: "uint256" },  \n  { name: "expiry", type: "uint256" },  \n \\]  \n}const value = {  \n \'delegatee\': newDelegatee.toString(),  \n \'nonce\': nonce.toString(),  \n \'expiry\': expiry.toString()  \n}signature = await signerObject.\\_signTypedData(domain, types, value);\n'})}),"\n",(0,o.jsx)(t.p,{children:"2. Check whether the gasEstimate for the transaction is less than or equal to GAS_LIMIT."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'const gasPrice = await EPNSCoreHelper.getGasPriceInDollars(library);  \nconst totalCost = gasPrice \\* gasEstimate;  \nif(totalCost > GAS\\_LIMIT){  \n return "Gas Price is too high, Please try again in a while."  \n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"3. Call the Delegate API"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'await postReq("/gov/gasless\\_delegate", { delegator: account, signature: signature, delegatee: delegatee, nonce: nonce.toString(), expiry: expiry })\n'})}),"\n",(0,o.jsx)(t.h2,{id:"how-the-backend-works",children:"How the backend works"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/push-protocol/push-incentives-backend",children:"Backend repository"})}),"\n",(0,o.jsx)(t.p,{children:"Once the incentives frontend triggers the Delegate API, the following conditions are checked before proceeding to pay for the delegation from the backend wallet."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"ETH balance of the backend wallet must be greater than the WALLET_THRESHOLD"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"balance > WALLET\\_THRESHOLD\n"})}),"\n",(0,o.jsx)(t.p,{children:"2. PUSH Balance of the delegator must be greater than the PUSH_THRESHOLD"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"pushBalance > PUSH\\_THRESHOLD\n"})}),"\n",(0,o.jsx)(t.p,{children:"3. The delegator must not have attempted the Gasless Delegation feature in the past 7 days."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"days > 7\n"})}),"\n",(0,o.jsx)(t.p,{children:"Once these conditions are met, the delegation transaction is initiated from the backend wallet."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Split the signature and extract v, r & s"}),"\n",(0,o.jsxs)(t.li,{children:["Initiate the ",(0,o.jsx)(t.em,{children:"delegateBySig"})," contract call"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," We released this feature on an experimental basis. Please DYOR before implementing this feature."]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},890699:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/cover-image-b3b2824d2144d4ef08d574c8393aefd2.webp"},16263:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/cover-image-b3b2824d2144d4ef08d574c8393aefd2.webp"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(296540);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);