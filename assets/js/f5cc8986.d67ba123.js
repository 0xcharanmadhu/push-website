"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[53801],{31204:e=>{e.exports=JSON.parse('{"title":"How to Get Started with EPNS (for Devs!)","description":"How to Get Started with EPNS (for Devs!)","frontMatter":{"slug":"how-to-get-started-with-epns","title":"How to Get Started with EPNS (for Devs!)","description":"How to Get Started with EPNS (for Devs!)","authors":["push"],"image":"./cover-image.webp","text":"EPNS is an open-source, decentralized notification protocol. The protocol went live on Ethereum Mainnet on Jan 11th and it now has 19 official channels by major projects in Web3 including ENS, MakerDAO, Coindesk and dYdX.","tags":["Epnsproject","Web3","Blockchain","Notifications","Developer"]},"content":{"id":"how-to-get-started-with-epns","metadata":{"permalink":"/blog/how-to-get-started-with-epns","source":"@site/blog/2022-01-25-how-to-get-started-with-epns/index.md","title":"How to Get Started with EPNS (for Devs!)","description":"How to Get Started with EPNS (for Devs!)","date":"2022-01-25T00:00:00.000Z","formattedDate":"January 25, 2022","tags":[{"label":"Epnsproject","permalink":"/blog/tags/epnsproject"},{"label":"Web3","permalink":"/blog/tags/web-3"},{"label":"Blockchain","permalink":"/blog/tags/blockchain"},{"label":"Notifications","permalink":"/blog/tags/notifications"},{"label":"Developer","permalink":"/blog/tags/developer"}],"readingTime":3.0633333333333335,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"how-to-get-started-with-epns","title":"How to Get Started with EPNS (for Devs!)","description":"How to Get Started with EPNS (for Devs!)","authors":["push"],"image":"./cover-image.webp","text":"EPNS is an open-source, decentralized notification protocol. The protocol went live on Ethereum Mainnet on Jan 11th and it now has 19 official channels by major projects in Web3 including ENS, MakerDAO, Coindesk and dYdX.","tags":["Epnsproject","Web3","Blockchain","Notifications","Developer"]},"unlisted":false,"prevItem":{"title":"Dmitry Buterin \u2014 Rockstars of Ethereum Vol 2 #1 Recap","permalink":"/blog/dmitry-buterin\u2014rockstars-of-ethereum-vol-2"},"nextItem":{"title":"EPNS Allies With Angle Protocol to Facilitate Push Notifications for Users","permalink":"/blog/epns-allies-with-angle-protocol"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover image of How to Get Started with EPNS (for Devs!)](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nEPNS is an open-source, decentralized notification protocol. The protocol went live on [Ethereum Mainnet on Jan 11th](https://medium.com/ethereum-push-notification-service/the-epns-mainnet-is-here-470faec0c01) and it now has 19 official channels by major projects in Web3 including ENS, MakerDAO, Coindesk and dYdX.\\n\\nAny service, protocol, or individual who wants to send notifications could start right away with EPNS. **In this post, we\u2019ve made it easy to learn how to get started.**\\n\\nEPNS Integration\\n================\\n\\nThe initial step for EPNS integration is **channel creation**. Here is the [**step-by-step guide on how to create a channel**](https://medium.com/ethereum-push-notification-service/getting-started-with-epns-ca2dd7f43329).\\n\\nOnce the channel is created, the channel owner could start sending notifications from the dApp and receive notifications on all of the EPNS platforms \u2014 dApp, Android App, iOS App, Browser Extension.\\n\\n**Integrating with the Backend SDK**\\n====================================\\n\\nThe back-end SDK allows developers & protocols to access EPNS Protocol functionalities from within their backends and implement custom logic for notifications. This SDK also comes packed with tooling for easy debugging and testing of notifications through the _simulate_ object.\\n\\nCheck-out our  [**Starter guide to implementing the EPNS backend SDK**](https://github.com/ethereum-push-notification-service/backend-sdk-starter-code)**.** The quickest way to get started using our SDK.\\n\\nHere is how you can integrate the SDK to your back-end server:\\n\\n**Step 1:** Install the npm package\\n\\n```\\nnpm install @epnsproject/backend-sdk   \\n//this is the package for our production environment**OR**npm install @epnsproject/backend-sdk-staging   \\n//this is the package for our staging environment recommended for testing.\\n```\\n\\n**Step 2:** Import the package.\\n\\n```\\nimport EpnsSDK from \\"@epnsproject/backend-sdk\\"   \\n// for production**OR**import EpnsSDK from \\"@epnsproject/backend-sdk-staging\\"   \\n// for testing or development.\\n```\\n\\n**Step 3:** Initialise the SDK instance.\\n\\n```\\n// the private key of the address which you used to create a channel  \\nconst  CHANNEL\\\\_PK = \'0x0000000000000000000000000000000000000000000000000000000000000fff\';// Initialise the SDK  \\nconst  epnsSdk = new EpnsSDK(CHANNEL\\\\_PK);const  CHANNEL\\\\_PK = \'0x0000000000000000000000000000000000000000000000000000000000000fff\'; // the private key of the address which you used to create a channel// Initialise the SDK  \\nconst  epnsSdk = new EpnsSDK(CHANNEL\\\\_PK);\\n```\\n\\nIf you are yet to create a channel you can proceed to [our staging dapp](http://staging-app.epns.io/) to create one or refer to our [how-to guides](https://www.notion.so/epns/How-to-EPNS-853afe64839b4cdd8c63209342a783d0).\\n\\n**Step 4:** Implement the notification logic whether it\u2019s on-chain or off-chain, based on which the notification is to be sent.\\n\\n**Step 5:** Let\'s send a notification!!\\n\\n```\\nconst tx = await sdk.sendNotification(  \\n        recipientAddress,  \\n        pushNotificationtitle,  \\n        pushNotificationMessage,  \\n        notificationTitle,  \\n        notificationMessage,  \\n        3, //this is the notificationType  \\n        cta, // a url for users to be redirected to  \\n        image ,// an image url, or an empty string  \\n        null, //this can be left as null  \\n      );\\n```\\n\\nMore details on the parameters for the backend SDK can be found in [the documentation](https://github.com/ethereum-push-notification-service/epns-backend-sdk-staging).\\n\\nThe owner of the address specified as the recipient can log into [our staging](https://staging-app.epns.io/) or [production environment](http://app.epns.io/) in order to see the notification received, or get our chrome extension or mobile application in order to receive the notification.\\n\\nFor more complex logic in your notifications you can refer to [the documentation](https://github.com/ethereum-push-notification-service/epns-backend-sdk-staging), or clone our [starter guide to implementing our backend SDK](https://github.com/ethereum-push-notification-service/backend-sdk-starter-code) which contains a working example.\\n\\nIntegrating with the Frontend SDK\\n=================================\\n\\nFront-end SDK allows developers & protocols to integrate the notifications to their dApp or mobile app.\\n\\nThe SDK comprises of three modules majorly:\\n\\n*   Fetching notifications from the EPNS backend.\\n*   Parsing the fetched notifications.\\n*   Rendering the parsed notification on mobile and the web.\\n\\nHere is how you can integrate your React Frontend Dapp with EPNS Decentralized notification service:\\n\\n**Step 1:** Install the npm package\\n\\n```\\nnpm install @epnsproject/frontend-sdk\\n```\\n\\nFetching the notifications\\n--------------------------\\n\\n**Step 2:** Import the just-installed package.\\n\\n```\\nimport { api, utils, NotificationItem } from \\"@epnsproject/frontend-sdk\\"\\n```\\n\\n**Step 3:** Define the required variables to make a request to fetch some notifications!\\n\\n```\\n// define the variables required to make a request**const walletAddress = \\"0x1234567890abcdcdefghijklmnopqrstuvwxyz123\\";  \\nconst pageNumber = 1;  \\nconst itemsPerPage = 20;**\\n```\\n\\n**Step 4:** Make a request to fetch some notifications!\\n\\n```\\n//fetch the notifications**const fetchedNotifications = await api.fetchNotifications(walletAddress, itemsPerPage, pageNumber)  \\nconsole.log(fetchedNotifications);**\\n```\\n\\nParsing the notifications\\n-------------------------\\n\\n**Step 5:** The next step is to parse the just-fetched notifications, essentially converting the massive object we have you above into a more readable format.\\n\\n```\\n//parse the notification fetched**const parsedResponse = utils.parseApiResponse(fetchedNotifications.results);  \\nconsole.log(parsedResponse);**\\n```\\n\\n**Rendering the notifications**\\n-------------------------------\\n\\n**Step 6:** Finally, we proceed to render the object above as a notification using JSX.\\n\\n```\\n// This is used to render the text present in a notification body as a JSX element**<NotificationItem  \\nnotificationTitle=\\"ETH Tracker - ETH at $3,235.16\\"  \\nnotificationBody=\\"\\\\\\\\\\\\[d:Summary & Latest Balance\\\\]\\\\\\\\n---------  \\\\\\\\n\\\\\\\\n\\\\[\u2795\\\\] \\\\[d:ETH: \\\\] \\\\[b:2.961\\\\] \\\\[t:ETH\\\\] \\\\[\\\\[dg:+-0.000 ETH\\\\]\\\\]\\\\[timestamp: 1630069200\\\\]\\"  \\ncta=\\"www.cta.com\\"  \\n/>**\\n```\\n\\n![First image of How to Get Started with EPNS (for Devs!)](./image-1.webp)\\n\\nSubscribing to channels from your own DApp\\n==========================================\\n\\nIn order to implement signing we take advantage of [EIP-712](https://eips.ethereum.org/EIPS/eip-712) (more details on the **signer** parameter can be found [here](https://eips.ethereum.org/EIPS/eip-712)), you can also take a look at our working [example](https://github.com/ethereum-push-notification-service/epns-frontend-sdk-staging/blob/main/sample_codes/loadNotifications/src/App.js)\\n\\n**Step 1:** Create a button component:\\n\\n`<button onClick={epnsSubscribe}/>`\\n\\n**Step 2:** Implement the function to subscribe/unsubscribe to the channel:\\n\\n```\\n  \\nimport {  \\n  channels,  \\n} from \\"[@epnsproject/frontend-sdk-staging](http://twitter.com/epnsproject/frontend-sdk-staging)\\";const epnsSubscribe = () => {  \\n     await channels.optIn(  \\n         [signer](https://docs.ethers.io/v5/api/signer/),  \\n         channelAddress,  \\n         chainId,  \\n         userAddress,  \\n         {  \\n            onSuccess: () =>  // do something after success  \\n         }  \\n    )}  \\nconst epnsUnSubscribe = () => {  \\n     await channels.optOut(  \\n         [signer](https://docs.ethers.io/v5/api/signer/),  \\n         channelAddress,  \\n         chainId,  \\n         userAddress,  \\n         {  \\n            onSuccess: () =>  // do something after success  \\n         }  \\n    )}\\n```\\n\\nMainnet URLs\\n============\\n\\n**EPNS dapp** -[https://app.epns.io/](https://app.epns.io/)\\n\\n**Back-end SDK** - [https://www.npmjs.com/package/@epnsproject/backend-sdk](https://www.npmjs.com/package/@epnsproject/backend-sdk)\\n\\n**Front-end SDK** - [https://www.npmjs.com/package/@epnsproject/frontend-sdk](https://www.npmjs.com/package/@epnsproject/frontend-sdk)\\n\\nTestnet URLs\\n============\\n\\n**EPNS Staging dapp** -[https://staging-app.epns.io/](https://staging-app.epns.io/)\\n\\n**Back-end SDK Staging** - [https://www.npmjs.com/package/@epnsproject/backend-sdk-staging](https://www.npmjs.com/package/@epnsproject/backend-sdk-staging)\\n\\n**Front-end SDK Staging** -[https://www.npmjs.com/package/@epnsproject/frontend-sdk-staging](https://www.npmjs.com/package/@epnsproject/frontend-sdk-staging)\\n\\nStarter Repositories URLs\\n=========================\\n\\n**Frontend SDK starter code** \u2014  \\n[https://github.com/ethereum-push-notification-service/epns-frontend-sdk-staging/tree/main/sample\\\\_codes/loadNotifications](https://github.com/ethereum-push-notification-service/epns-frontend-sdk-staging/tree/main/sample_codes/loadNotifications)\\n\\n**Backend SDK starter code \u2014**\\n\\n[https://github.com/ethereum-push-notification-service/backend-sdk-starter-code](https://github.com/ethereum-push-notification-service/backend-sdk-starter-code)"}}')}}]);