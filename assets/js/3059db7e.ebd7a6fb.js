"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[64034],{429882:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(474848),o=t(28453);const s={id:"docs-notifications-tutorial-send-notification-via-subgraph",title:"Send notification via your subgraph",hide_title:!0,slug:"./send-notification-via-subgraph",displayed_sidebar:"pushNotificationSidebar",sidebar_position:6,image:"/assets/docs/previews/docs_notifications_tutorial_send_notification_via_subgraph--send_notification_via_your_subgraph.png"},a="Overview",r={id:"notifications/tutorials/docs-notifications-tutorial-send-notification-via-subgraph",title:"Send notification via your subgraph",description:"This is an introductory guide to take you through the entire process of how to send notifications from a Subgraph using Push.",source:"@site/docs/notifications/04-tutorials/06-Tutorial-Send-Notifications-Subgraph.mdx",sourceDirName:"notifications/04-tutorials",slug:"/notifications/tutorials/send-notification-via-subgraph",permalink:"/docs/notifications/tutorials/send-notification-via-subgraph",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/04-tutorials/06-Tutorial-Send-Notifications-Subgraph.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"docs-notifications-tutorial-send-notification-via-subgraph",title:"Send notification via your subgraph",hide_title:!0,slug:"./send-notification-via-subgraph",displayed_sidebar:"pushNotificationSidebar",sidebar_position:6,image:"/assets/docs/previews/docs_notifications_tutorial_send_notification_via_subgraph--send_notification_via_your_subgraph.png"},sidebar:"pushNotificationSidebar",previous:{title:"Advance - Create channel and notif from smart contract",permalink:"/docs/notifications/tutorials/advance-create-channel-and-notif-from-smart-contract"},next:{title:"Integrate notifications via Delivery Node",permalink:"/docs/notifications/tutorials/integrate-notifications-via-delivery-node"}},c={},l=[{value:"Introduction: The Graph Protocol &amp; Subgraphs",id:"introduction-the-graph-protocol--subgraphs",level:2},{value:"Notifications from Subgraphs \ud83d\udca1",id:"notifications-from-subgraphs-",level:2},{value:"Sending Notifications using Push",id:"sending-notifications-using-push",level:3},{value:"Push X Graph Integration Example",id:"push-x-graph-integration-example",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Contract deployment",id:"contract-deployment",level:3},{value:"Subgraph deployment",id:"subgraph-deployment",level:3},{value:"Redploy your subgraph",id:"redploy-your-subgraph",level:3},{value:"Attach subgraph to your channel",id:"attach-subgraph-to-your-channel",level:3},{value:"Testing notification",id:"testing-notification",level:3}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components},{Head:s}=e;return s||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(e.p,{children:"This is an introductory guide to take you through the entire process of how to send notifications from a Subgraph using Push."}),"\n",(0,i.jsx)(e.admonition,{type:"caution",children:(0,i.jsxs)(e.p,{children:["Subgraph notifications are currenly supported on staging environtment from ",(0,i.jsx)(e.a,{href:"https://staging.push.org",title:"Link to Push staging dApp",children:"Push dApp"})]})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)("title",{children:"Send Notification via your Subgraph | Tutorial | Push Notifications | Push\nDocumentation"})}),"\n",(0,i.jsx)(e.h2,{id:"introduction-the-graph-protocol--subgraphs",children:"Introduction: The Graph Protocol & Subgraphs"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"The Graph"})," is a decentralized protocol for indexing and querying data from blockchains, starting with Ethereum. It makes it possible to query data that is difficult to query directly."]}),"\n",(0,i.jsxs)(e.p,{children:["A ",(0,i.jsx)(e.strong,{children:"Subgraph"})," defines which data ",(0,i.jsx)(e.strong,{children:"The Graph"})," will index from a blockchain, and how it will store it. Once deployed, it will form a part of a global graph of blockchain data which you can retrieve using GraphQL."]}),"\n",(0,i.jsxs)(e.p,{children:["Currently, Push only supports the subgraphs deployed on ",(0,i.jsx)(e.strong,{children:"Hosted Service of The Graph Protocol"}),". Providing support to Subgraph Studio would be part of the next iteration."]}),"\n",(0,i.jsxs)(e.p,{children:["For more information on how to deploy a subgraph on the hosted service for your smart contract or dApp, check out ",(0,i.jsx)(e.a,{href:"https://thegraph.com/docs/en/deploying/deploying-a-subgraph-to-hosted/",title:"Tutorial on how to deploy your hosted subgraph from The Graph",children:"this documentation"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"notifications-from-subgraphs-",children:"Notifications from Subgraphs \ud83d\udca1"}),"\n",(0,i.jsx)(e.p,{children:"Subgraphs retrieve and store data from the blockchain for a particular smart contract. This data can be used to analyze a variety of things related to the smart contract."}),"\n",(0,i.jsxs)(e.p,{children:["For example, the ",(0,i.jsx)(e.a,{href:"https://thegraph.com/hosted-service/subgraph/uniswap/uniswap-v2",title:"Subgraph of Uniswap V2 protocol",children:"Uniswap Subgraph"})," stores data related to the total volume across all trading pairs, volume data per trading pair, and even data for a particular token."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"What if you intelligently fetch the data from a Subgraph and generate useful alerts \ud83e\udd14?"}),"\nThis will be extremely helpful for the end-users of your dApp and entities connected to your smart contract making the user experience smoother."]}),"\n",(0,i.jsx)(e.h3,{id:"sending-notifications-using-push",children:"Sending Notifications using Push"}),"\n",(0,i.jsxs)(e.p,{children:["Push protocol has developed an in-house ",(0,i.jsx)(e.code,{children:"helper function"})," specifically for The Graph Protocol which allows you to read events from the Subgraph and define notifications accordingly. Once defined, they will be stored on the Subgraph in a ",(0,i.jsx)(e.code,{children:"Long String"})," format."]}),"\n",(0,i.jsx)(e.p,{children:"Push Nodes can, later on, fetch the notifications defined on a Subgraph and push them accordingly to Subscribers of the Channel."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Notifications via The Graph architecture",src:t(899675).A+"",title:"Flow diagram of how notifications are sent",width:"2000",height:"1000"})}),"\n",(0,i.jsx)(e.h2,{id:"push-x-graph-integration-example",children:"Push X Graph Integration Example"}),"\n",(0,i.jsxs)(e.p,{children:["Integrate Push Protocol with an ERC-20 contract's subgraph to ",(0,i.jsx)(e.strong,{children:"send out notifications whenever a Transfer happens"}),"."]}),"\n",(0,i.jsx)(e.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Have a Push Notification Channel ready - see the docs ",(0,i.jsx)(e.a,{href:"/docs/notifications/tutorials/create-your-channel/",title:"Tutorial on how to create your channel",children:"here"})," to create a channel."]}),"\n",(0,i.jsxs)(e.li,{children:["Install the ",(0,i.jsx)(e.strong,{children:"graph CLI"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-zsh",children:"npm install -g @graphprotocol/graph-cli\n# OR\nyarn global add @graphprotocol/graph-cli\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Link your Github to ",(0,i.jsx)(e.a,{href:"https://thegraph.com/hosted-service",title:"Link to The Graph hosted service",children:"The Graph's hosted service"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Add a subgraph named ",(0,i.jsx)(e.strong,{children:"MySubgraphXYZ"})," (or a name of your choice) from your ",(0,i.jsx)(e.a,{href:"https://thegraph.com/hosted-service/dashboard",title:"Add subgraph from your dashboard",children:"Hosted Service Dashboard"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"contract-deployment",children:"Contract deployment"}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"Skip this step if you a have deployed contract already that you want to query"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Copy and Deploy the sample ERC-20 contract using ",(0,i.jsx)(e.a,{href:"https://remix.ethereum.org/",title:"Remix IDE from Ethereum",children:"Remix IDE"})," \u2014"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-solidity",children:'pragma solidity ^0.4.24;\n\n//Safe Math Interface\ncontract SafeMath {\n\n  function safeAdd(uint a, uint b) public pure returns (uint c) {\n    c = a + b;\n    require(c >= a);\n  }\n\n  function safeSub(uint a, uint b) public pure returns (uint c) {\n    require(b <= a);\n    c = a - b;\n  }\n\n  function safeMul(uint a, uint b) public pure returns (uint c) {\n    c = a * b;\n    require(a == 0 || c / a == b);\n  }\n\n  function safeDiv(uint a, uint b) public pure returns (uint c) {\n    require(b > 0);\n    c = a / b;\n  }\n}\n\n// ERC Token Standard #20 Interface\ncontract ERC20Interface {\n  function totalSupply() public constant returns (uint);\n  function balanceOf(address tokenOwner) public constant returns (uint balance);\n  function allowance(address tokenOwner, address spender) public constant returns (uint remaining);\n  function transfer(address to, uint tokens) public returns (bool success);\n  function approve(address spender, uint tokens) public returns (bool success);\n  function transferFrom(address from, address to, uint tokens) public returns (bool success);\n\n  event Transfer(address indexed from, address indexed to, uint tokens);\n  event Approval(address indexed tokenOwner, address indexed spender, uint tokens);\n}\n\n// Contract function to receive approval and execute function in one call\ncontract ApproveAndCallFallBack {\n  function receiveApproval(address from, uint256 tokens, address token, bytes data) public;\n}\n\n//Actual token contract\ncontract PushToken is ERC20Interface, SafeMath {\n  string public symbol;\n  string public  name;\n  uint8 public decimals;\n  uint public _totalSupply;\n\n  mapping(address => uint) balances;\n  mapping(address => mapping(address => uint)) allowed;\n\n  constructor() public {\n    symbol = "PUSH";\n    name = "Push Token";\n    decimals = 2;\n    _totalSupply = 100000;\n    balances[msg.sender] = _totalSupply;\n    emit Transfer(address(0), msg.sender, _totalSupply);\n  }\n\n  function totalSupply() public constant returns (uint) {\n    return _totalSupply  - balances[address(0)];\n  }\n\n  function balanceOf(address tokenOwner) public constant returns (uint balance) {\n    return balances[tokenOwner];\n  }\n\n  function transfer(address to, uint tokens) public returns (bool success) {\n    balances[msg.sender] = safeSub(balances[msg.sender], tokens);\n    balances[to] = safeAdd(balances[to], tokens);\n    emit Transfer(msg.sender, to, tokens);\n    return true;\n  }\n\n  function approve(address spender, uint tokens) public returns (bool success) {\n    allowed[msg.sender][spender] = tokens;\n    emit Approval(msg.sender, spender, tokens);\n    return true;\n  }\n\n  function transferFrom(address from, address to, uint tokens) public returns (bool success) {\n    balances[from] = safeSub(balances[from], tokens);\n    allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);\n    balances[to] = safeAdd(balances[to], tokens);\n    emit Transfer(from, to, tokens);\n    return true;\n  }\n\n  function allowance(address tokenOwner, address spender) public constant returns (uint remaining) {\n    return allowed[tokenOwner][spender];\n  }\n\n  function approveAndCall(address spender, uint tokens, bytes data) public returns (bool success) {\n    allowed[msg.sender][spender] = tokens;\n    emit Approval(msg.sender, spender, tokens);\n    ApproveAndCallFallBack(spender).receiveApproval(msg.sender, tokens, this, data);\n    return true;\n  }\n\n  function () public payable {\n    revert();\n  }\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"subgraph-deployment",children:"Subgraph deployment"}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"Skip this step if you already have a deployed subgraph"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Navigate to the Subgraph directory and you\u2019ll find schema.graphql file. Open in an editor of your choice and include the following Push Schema \u2014"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"type EpnsNotificationCounter @entity {\n  id: ID!\n  totalCount: BigInt!\n}\n\ntype EpnsPushNotification @entity {\n  id: ID!\n  notificationNumber: BigInt!\n  recipient: String!\n  notification: String!\n}\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsxs)(e.li,{children:["In the mappings file under ",(0,i.jsx)(e.code,{children:"src/"})," of your subgraph, export the subgraph ID \u2014"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'// Note: Push Protocol supports only The Graph Hosted Service at present\n\nexport const subgraphID = "<GITHUB_USERNAME>/<SUBGRAPH_NAME>";\n\n// example\n// export const subgraphID = "aiswaryawalter/push-graph-test"\n'})}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"Make sure the above step is complete, as Subgraph ID will be imported in the next step!"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsxs)(e.li,{children:["Create a file named ",(0,i.jsx)(e.code,{children:"PushNotification.ts"})," in the ",(0,i.jsx)(e.code,{children:"src/"})," folder of your subgraph. We\u2019ll call this our Helper File. Now, copy the below-provided TypeScript code and paste it into the newly created Helper file \u2014"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'import { BigInt, log } from "@graphprotocol/graph-ts";\nimport {\n  EpnsNotificationCounter,\n  EpnsPushNotification,\n} from "../generated/schema";\nimport { subgraphID } from "./push-token";\n\nexport function sendPushNotification(\n  recipient: string,\n  notification: string,\n): void {\n  let id1 = subgraphID;\n  log.info("New id of EpnsNotificationCounter is: {}", [id1]);\n  let epnsNotificationCounter = EpnsNotificationCounter.load(id1);\n  if (epnsNotificationCounter == null) {\n    epnsNotificationCounter = new EpnsNotificationCounter(id1);\n    epnsNotificationCounter.totalCount = BigInt.fromI32(0);\n  }\n  epnsNotificationCounter.totalCount = epnsNotificationCounter.totalCount.plus(\n    BigInt.fromI32(1),\n  );\n\n  let count = epnsNotificationCounter.totalCount.toHexString();\n  let id2 = `${subgraphID}+${count}`;\n  log.info("New id of EpnsPushNotification is: {}", [id2]);\n  let epnsPushNotification = EpnsPushNotification.load(id2);\n  if (epnsPushNotification == null) {\n    epnsPushNotification = new EpnsPushNotification(id2);\n  }\n  epnsPushNotification.recipient = recipient;\n  epnsPushNotification.notification = notification;\n  epnsPushNotification.notificationNumber = epnsNotificationCounter.totalCount;\n  epnsPushNotification.save();\n  epnsNotificationCounter.save();\n}\n'})}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsx)(e.li,{children:"Import the helper function in the mappings file"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'import { sendPushNotification } from "./PushNotification";\n'})}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"Follow steps 5, 6 and 7 within the respective handler functions from which the notification needs to be sent \ud83d\udc47\ud83c\udffc"})}),"\n",(0,i.jsxs)(e.ol,{start:"5",children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Define Notification Payload Items:"})," In the event handler mapping from which you need to send the notification, define the notification payload items such as recipient of the notification, type, title, message, etc. These variables will be further used to define the notification variable."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["It\u2019s highly recommended to take a look at ",(0,i.jsx)(e.a,{href:"/docs/notifications/build/types-of-notification/",title:"Article explaining types of notifications",children:"types of notifications"})," to understand which one you want to send."]}),"\n",(0,i.jsxs)(e.p,{children:["For a quick reference, the ",(0,i.jsx)(e.code,{children:"recipient"})," differs with the payload type. For example, ",(0,i.jsx)(e.strong,{children:"broadcast"})," (type = 1) and special multi-payload notifications have the ",(0,i.jsx)(e.strong,{children:"channel address"})," as the ",(0,i.jsx)(e.code,{children:"recipient"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'let recipient = event.params.to.toHexString(),\n  type = "3",\n  title = "PUSH Received",\n  body = `Received ${event.params.tokens.div(\n    power,\n  )} PUSH from ${event.params.from.toHexString()}`,\n  subject = "PUSH Received",\n  message = `Received ${event.params.tokens.div(\n    power,\n  )} PUSH from ${event.params.from.toHexString()}`,\n  image =\n    "https://play-lh.googleusercontent.com/i911_wMmFilaAAOTLvlQJZMXoxBF34BMSzRmascHezvurtslYUgOHamxgEnMXTklsF-S",\n  secret = "null",\n  cta = "https://push.org/";\n'})}),"\n",(0,i.jsxs)(e.ol,{start:"6",children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Define Notification:"})," The notification variable is defined in the given below format \ud83d\udc47\ud83c\udffc"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Format: ",(0,i.jsx)(e.code,{children:'{"field1" : "value1", "field2" : "value2" }'})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:'let notification = `{\\"type\\": \\"${type}\\", \\"title\\": \\"${title}\\", \\"body\\": \\"${body}\\", \\"subject\\": \\"${subject}\\", \\"message\\": \\"${message}\\", \\"image\\": \\"${image}\\", \\"secret\\": \\"${secret}\\", \\"cta\\": \\"${cta}\\"}`;\n'})}),"\n",(0,i.jsxs)(e.ol,{start:"7",children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Call the Push Helper Function:"})," Once the above steps are complete, we need to invoke the Push helper function and send the response. To call the Push Notification helper function, use the below script \u2014"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"sendPushNotification(recipient, notification);\n"})}),"\n",(0,i.jsx)(e.h3,{id:"redploy-your-subgraph",children:"Redploy your subgraph"}),"\n",(0,i.jsx)(e.p,{children:"Once you have made changes to your subgraph to include Push related logic, you now need to redploy for the subgraph network to sync the newly added logic \u2014"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Generate code"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-zsh",children:"graph codegen\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"Get the access token from the Graph dashboard & authenticate"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-zsh",children:"graph auth --product hosted-service <ACCESS_TOKEN>\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"Deploy the subgraph"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-zsh",children:"graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH NAME>\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsxs)(e.li,{children:["Test that the logic is synced by going to the subgraph playground and pasting the below ",(0,i.jsx)(e.strong,{children:"query"})," to show the notification payloads"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"{\n  epnsPushNotifications(first: 20) {\n      id\n      notificationNumber\n      recipient\n      notification\n  }\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Here is the ",(0,i.jsx)(e.a,{href:"https://github.com/ethereum-push-notification-service/push-sdk/tree/main/packages/examples/subgraph-notification",title:"Example of subgraph that has Push notifications enabled",children:"final Subgraph with Push integration"}),"."]}),"\n",(0,i.jsx)(e.h3,{id:"attach-subgraph-to-your-channel",children:"Attach subgraph to your channel"}),"\n",(0,i.jsxs)(e.p,{children:["Once you have set up Push integration into your subgraph, you must add the subgraph to its notification channel in order to deliver notifications. You will require the ",(0,i.jsx)(e.strong,{children:"Subgraph ID"})," for this purpose."]}),"\n",(0,i.jsx)(e.p,{children:"It is a slug usually present at the end of the subgraph URL \ud83d\ude09, for example \u2014"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"https://thegraph.com/hosted-service/subgraph/aiswaryawalter/push-graph-test\n"})}),"\n",(0,i.jsxs)(e.p,{children:["If you have ",(0,i.jsx)(e.strong,{children:"already created your channel"}),", you can follow the below steps to enable notifications from your subgraph by following these steps \u2014"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Go to ",(0,i.jsx)(e.a,{href:"https://staging.push.org",title:"Link to staging dApp of Push",children:"Push staging dApp"})," \u2192 Channel Dashboard \u2192 Add Subgraph Details"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Enter your ",(0,i.jsx)(e.code,{children:"Subgraph ID"})," and ",(0,i.jsx)(e.code,{children:"Poll Interval"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Poll Interval (in seconds) defines the time period at which Push Nodes shall ping the subgraph for fetching the latest notifications."}),"\n",(0,i.jsx)(e.admonition,{type:"caution",children:(0,i.jsx)(e.p,{children:"This is an on-chain transaction that stores the above data to Push Core Contract. So it requires $ETH for gas fees."})}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["If you don\u2019t have a channel yet, you can easily create one by following this guide ",(0,i.jsx)(e.a,{href:"/docs/notifications/tutorials/create-your-channel/",title:"Tutorial on how to create your channel",children:"here"})]})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Push dApp subgraph option reference",src:t(37626).A+"",title:"Illustation of how subgraph option on Push dApp looks like",width:"1650",height:"1000"})}),"\n",(0,i.jsx)(e.h3,{id:"testing-notification",children:"Testing notification"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Opt-in"})," to the newly created channel."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Initiate a ",(0,i.jsx)(e.code,{children:"Transfer"})," from your deployed contract."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Wait for the notification to appear on the recipient's wallet via Push Metamask snap, Push dApp, Push extension, Unstoppable mobile app, Push mobile app or any of the other supported interfaces."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\ud83c\udf89 Congratulations on successfully integrating Push Helper Function into your Subgraph, and also adding Subgraph details into your channel."})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},899675:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/graphdiagram-1927c8d76718467a8ef54d64f717df72.png"},37626:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/subgraphdetails-7a187bc0a9fb5c1a6196df5fa6ac91b3.png"},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>r});var i=t(296540);const o={},s=i.createContext(o);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);