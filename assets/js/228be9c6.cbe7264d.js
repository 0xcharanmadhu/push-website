"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[97124],{700200:e=>{e.exports=JSON.parse('{"title":"EPNS Roadmap 2021","description":"EPNS Roadmap 2021","frontMatter":{"slug":"epns-roadmap-2021","title":"EPNS Roadmap 2021","authors":["push"],"image":"./cover-image.webp","description":"EPNS Roadmap 2021","text":"This past year has been an unbelievable adventure of learning and growth for us at EPNS since we originally came up with our PoC during ETHGlobal\u2019s Hack Money 2020 Hackathon. We have received so much support and appreciation from the entire Ethereum community, and we can\u2019t thank you enough.","tags":["Announcements","Ethereum","Blockchain","Newsletter","Roadmaps"]},"content":{"id":"epns-roadmap-2021","metadata":{"permalink":"/blog/epns-roadmap-2021","source":"@site/blog/2021-04-27-epns-roadmap-2021/index.md","title":"EPNS Roadmap 2021","description":"EPNS Roadmap 2021","date":"2021-04-27T00:00:00.000Z","formattedDate":"April 27, 2021","tags":[{"label":"Announcements","permalink":"/blog/tags/announcements"},{"label":"Ethereum","permalink":"/blog/tags/ethereum"},{"label":"Blockchain","permalink":"/blog/tags/blockchain"},{"label":"Newsletter","permalink":"/blog/tags/newsletter"},{"label":"Roadmaps","permalink":"/blog/tags/roadmaps"}],"readingTime":7.12,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-roadmap-2021","title":"EPNS Roadmap 2021","authors":["push"],"image":"./cover-image.webp","description":"EPNS Roadmap 2021","text":"This past year has been an unbelievable adventure of learning and growth for us at EPNS since we originally came up with our PoC during ETHGlobal\u2019s Hack Money 2020 Hackathon. We have received so much support and appreciation from the entire Ethereum community, and we can\u2019t thank you enough.","tags":["Announcements","Ethereum","Blockchain","Newsletter","Roadmaps"]},"unlisted":false,"prevItem":{"title":"DeFi Aggregator Frontier to Support Web3 Notifs","permalink":"/blog/defi-aggregator-frontier-to-support"},"nextItem":{"title":"Scaling Web3Notifs on Polygon\u2019s Layer-2","permalink":"/blog/scaling-web3notifs-on-polygon"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover Image of EPNS Roadmap 2021](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nThis past year has been an unbelievable adventure of learning and growth for us at EPNS since we originally came up with our PoC during ETHGlobal\u2019s Hack Money 2020 Hackathon. We have received so much support and appreciation from the entire Ethereum community, and we can\u2019t thank you enough.\\n\\nThis week marks the one year anniversary of the start of EPNS\u2019 journey towards becoming the standard, flexible communication middleware for both Web3 and Web2 companies to benefit from.\\n\\nFor the EPNS protocol to become a de-facto communication layer, several different ecosystem cogs need to be innovated and developed. Our roadmap for 2021 thus is designed to address the highest priority elements that we intend to complete to achieve the maximum impact with v1.0 of the EPNS Protocol and the entire ecosystem of EPNS.\\n\\nWorking on these will enable us to deploy the protocol on the Ethereum Mainnet with the necessary communication middleware APIs and SDKs built into it for sending notifications, which will allow us to foster a developer ecosystem.\\n\\nAdditionally, putting special attention to creating a receiving infrastructure that allows for the easier embracing of the protocol for any crypto wallets and platform that wants to implement decentralized notifications.\\n\\nTo help us achieve our objectives, we will focus on the following product categories:\\n\\n- EPNS Protocol (Send Notifications)\\n- PUSH Nodes (Retrieval & Dispatch)\\n- Governance of EPNS Protocol\\n- Front-End products: dApp, MobileApp, Browser extension\\n- Development SDKs and Documentation\\n- Showrunners (to enable traditional services to interface with Web3)\\n\\n#### EPNS Protocol (Send Notifications)\\n\\n![First Image of EPNS Roadmap 2021](./image-1.webp)\\n\\nThe main goal of the EPNS Protocol is to make sure all notifications are prepared and sent in compliance with the protocol standards. This will make every notification readily available to be picked up by the PUSH Nodes in charge of dispatching.\\n\\nTo this effect, we already have completed several features, some of the prominent ones are:\\n\\n- Upgradability with on-chain governance upgrades\\n- Ability to create channels\\n- Ability to subscribe / unsubscribe\\n- Ability to passively earn through staking (by services)\u2014 lending (via protocol) \u2014 interest (to users)\\n- Ability to send notifs\\n\\nThough the majority of the MVP features are complete, we did find a few more features during our validation cycle to include those in v1 as well. Some of these are:\\n\\n- Delegating multiple user wallets to send notifications on a channel\u2019s behalf\\n- Enabling subscription via meta transactions\\n- Verification badges and social proofs that can be used as a reputation score and to filter channels on the frontend\\n- Pivoting to delivering all notifs even when a user is not a subscriber of a channel. Instead, having provisions to land them into spam box achieving the same - result but a more adaptable UX\\n- Designing the spam score throttle to ensure automatic throttling of notifs\\n- Layer 2 support for the protocol\\n- Integrating Ceramic decentralized identifier (DID)\\n\\nBy delegating more wallets, we intend to address the issue of network congestion. If a channel delegates 5\u20136 wallets, then these could be used to send notifications in a round-robin fashion and hence reduce the chance of transactions being queued in the txpool.\\n\\nAt present, using the EPNS protocol, a service can send messages and notify only its subscribers. We plan to upgrade it in such a way that services may send messages to all its users, but only those who have subscribed to the channel would receive the message as a notification. Others would receive it in their spam box without a push notification.\\n\\nWith the integration of Ceramic, users would be able to receive notifications on their DID, which could be an ID connected to an ethereum wallet or bitcoin of any other blockchain.\\n\\n#### Push Nodes (Retrieve and Dispatch)\\n\\n![Second Image of EPNS Roadmap 2021](./image-2.webp)\\n\\nThe main goal of the PUSH Nodes is to listen to events in the EPNS protocol smart contracts and dispatch the notifications to the corresponding recipients.\\n\\nFeatures currently available include:\\n\\n- The cache of channels/payloads\\n- Capability to map subscribers addresses to channels in the database\\n- Ability to deconstruct and synchronize payloads sent from a channel in the payloads database\\n- Connect wallet addresses to deviceIDs\\n\\nWhile currently the receiving nodes infrastructure is built in a centralized manner, working on decentralizing this component is one of our top priorities.\\n\\nSome of the tasks we will be working on are:\\n\\n- Establish a peer-to-peer network of PUSH nodes\\n- Implement a P2P Push nodes incentive mechanism\\n- Pinning of notification payloads on IPFS\\n\\nEven though we only listen to smart contracts of Layer 1 dApps and services at the moment, our ultimate aim is to be a blockchain agnostic decentralized middleware solution. Forming a P2P network of PUSH Nodes would be a stepping stone to achieving that goal. This will ensure nodes are more scalable and the protocol will be able to support Layer 2 solutions and lays the foundation to support other solutions as well in the future. Along with establishing the network, the implementation of an incentive mechanism for active participants is also in our pipeline.\\n\\nWith all notification payloads uploaded to IPFS, making sure that no notification gets lost is of utmost importance. We will be working towards pinning all the notification payloads sent out to users.\\n\\n#### Governance\\n\\n![Third Image of EPNS Roadmap 2021](./image-3.webp)\\n\\nGovernance is crucial for any decentralized protocol, and EPNS is no exception. Incentives for participation both in terms of token rewards and otherwise is importance to ensure strong network effects. We already created the following incentives for governance:\\n\\nIntroduced liquidity mining and staking on https://incentives.epns.io\\nIntroduced $ROCKSTAR of EPNS NFTs and $PUSH rewards to signal gratitude to early community and to reward new community and their participation in the ecosystem. [Read more about it here](https://medium.com/ethereum-push-notification-service/the-first-nft-collection-from-epns-677e23173c95)\\n\\nMoving forward, we plan to further introduce three governance capabilities to continue decentralizing the EPNS protocol:\\n\\n- Upgradeability through online voting\\n- Incentives towards developing 3rd party channels via the protocol\\n-Incentives for active participation in the protocol\\n\\nThe $PUSH Token plays an essential role as it carries on-chain governance as well as enabling fees to split right from the token genesis. Token holders that own the tokens for the longest time will have higher fees based on their share \u2014 whenever a majority of users decides to activate the fee and the fee split.\\n\\n#### Development SDKs, and Documentation\\n\\n![Fourth Image of EPNS Roadmap 2021](./image-4.webp)\\n\\n<b>Toolkits and SDKs</b>\\nAfter participating in Hackathons, bounty programs, and integrating EPNS with some of our partners, we\u2019ve learned which tools will make a developer\u2019s life easier.\\n\\nWe are targeting the release of four SDKs:\\n\\n<b>Front-end SDK</b>: Will enable 3rd party services to interface with the channels, and facilitate sending notifications to users directly from third party dApp front-ends.\\n\\n<b>Back-end SDK</b>: Will allow easy integration for protocols wanting to send notifications interfacing directly with the EPNS protocol smart contracts.\\n\\n<b>PUSH Mobile SDK</b>: Will enable Mobile Apps to easily integrate and interface with EPNS PUSH Nodes and receive real-time notifications with the PUSH SDK doing most of the heavy lifting.\\n\\n<b>EPNS Subgraph</b>: Together with these three important components of our Developers Toolkit, we will continue developing further our Subgraph.\\n\\n#### Technical Documentation\\nWe will develop extensive Technical documentation about the EPNS products, Integration guides, and tutorials in addition to what already exists. From the basic HelloWorld to more complex integrations with real-world protocols.\\n\\nOur focus will be on three main areas, for which we will provide both simple and advanced examples of all types of integration:\\n\\n<i>\\nServer Integration \u2192 through EPNS protocol\\n\\ndApp Integration \u2192 through EPNS protocol\\n\\nSmart Contract Integrations \u2192 through EPNS protocol Smart Contracts\\n</i>\\n\\nWith the Server integration, our intent is to provide developers with a boilerplate solution that will help them speed up the EPNS integration process into their respective protocols.\\n\\nSome additional guides for developers we will be working on are:\\n\\n- How to Create channels?\\n- How to Send notifications through the dApp?\\n- How to deliver automated notifications?\\n\\n#### How To Guides for End users\\nOur How-To Guides section will be mostly focused on end-users. Providing them with a One-stop-shop to help them get set up and maximize the power of EPNS and all its products.\\n\\n- How to set up to receive decentralized notifications?\\n- How to subscribe to channels?\\n\\n### Front-End\\n\\n![Fifth Image of EPNS Roadmap 2021](./image-5.webp)\\n\\n\\nEPNS will offer three major front-end components providing participants of the protocol different alternatives to interface with their favorite products and services. These components are:\\n\\n- dApp (decentralized App)\\n- MobileApp (iOS & Android)\\n- Browser extension.\\n\\n#### Decentralized App (dApp)\\nUp until today, we have been working on a set of foundational features on our dApp that will allow us to grow more functionalities. Some of them being:\\n\\n- Creation of channels and viewing basic channel statistics (Stake of channel, number of users, Owner indicator)\\n- Subscribe/Unsubscribe to channels and viewing notifications.\\n- Sending different types of notifications with different configurations.\\n\\nNow, we will add more mechanisms for channel owners and subscribers to do more! Some of them being:\\n\\n<b>For channel owners:</b>\\n\\n- Adding Notification templates, notification previews, a quick send panel, and scheduling of notifications\\n- Seeing notification statistics\\n- Updating/disabling channels, readjusting stakes, channel categories, verified badges for channels\\n\\n<b>\\nFor Subscribers:\\n</b>\\n\\n- Mass channel subscribe/unsubscribe\\n- Different channel layouts, and the ability to configure settings per channel when available.\\n- Channels filters and categories\\n- Display of approximate earnings\\n\\nAdditionally, for the end-user, we will develop dashboards that will give much more aside from receiving notifications or browsing channels. It will allow the user to perform actions regarding governance, rewards incentives, creating profiles, and more.\\n\\n#### Mobile App (iOS & Android)\\nSame as with the dApp, we have been building a solid foundation and now its time to scale it. Some of the features we have been working on being:\\n\\n- Signing in with just the public wallet address\\n- A dashboard that allows users to view their profile and lock the app, as well as swiping out a wallet\\n- Receiving notifications based on Pull, including private notifications\\n- Support for logging in with ENS and .crypto domains\\n- Streamline the mobile app onboarding process by allowing users to configure access to the app using passcode and biometrics\\n\\nNow, these are some of the features we have in the pipeline to expand the set of functionalities available in the Mobile App:\\n\\n- Channels discovery, Muting of notifications, Report Spam, Scanning QR codes to subscribe to channels.\\n- Notifications search, pagination, different notifications screen layouts, improved security towards displaying private notifications \u2014 including adding other methods such as Wallet Connect to read private notifications without signing via private key\\n- Profile information including passive earnings, and the ability to claim passive earnings from the Dashboard.\\n\\n#### Browser Extension\\nThis component seeks to be a very lightweight yet powerful tool that provides a reduced but still rich feature set of all the capabilities available in the dApp and the Mobile App.\\n\\n#### Showrunners (Notification Logic Nodes)\\n\\n![Sixth Image of EPNS Roadmap 2021](./image-6.webp)\\n\\nAn important part of our plan falls into improving our Showrunners offering by expanding its capabilities together with adding more useful channels to the community.\\n\\nWe have already achieved significant progress in the infrastructure front, by implementing the following:\\n\\n- Routines to ensure business continuity, making provisioning a priority by implementing channel monitoring with alerting and automatic funds flow from Master - Wallets to Supporting Wallets\\n- Channels testing tools for developers\\n- Notifications scheduling capabilities blockchain-based and event-based\\n- Database Support, Cache layer, and Logging\\n\\nHaving worked on these foundational elements empowers us to have more flexibility to design channels that meet the community needs, and also prepare us to be ready for upcoming trends and new protocols.\\n\\nWhat\u2019s next in line?\\n\\n- Ability to send email from AWS SES\\n- Ability to send notifications from multiple wallets for the same channel\\n- Robust list of channels that provide significant value to the community covering a wide variety of topics such as DeFi, DAOs, Services, NFTs, and marketplaces.\\n\\nWe plan to release v1.0 of our Showrunners this year to serve as a boilerplate solution for developers to rapidly develop their own Showrunners software.\\n\\nTLDR;\\n\\n![Seventh Image of EPNS Roadmap 2021](./image-7.webp)\\n\\nWe are proud and committed to our mission to fill an existing gap in communication in Web3 today and we take this endeavor with the greatest urgency and responsibility. Let\u2019s build the ultimate notifications layer suite together!\\n\\nIf you have any comments or questions please feel free to reach out to us on telegram or check out our website for more details: https://epns.io/"}}')}}]);