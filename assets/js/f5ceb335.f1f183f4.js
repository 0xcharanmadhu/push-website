"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[16985],{360111:e=>{e.exports=JSON.parse('{"title":"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f","description":"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f","frontMatter":{"slug":"deep-dive-into-push-snaps-features-and-getting-started-all-the-technical-specifications-and-getting-started-tips-you-need","title":"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f","authors":["push"],"image":"./cover-image.webp","description":"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f","text":"As we outlined in our announcement article \u2014 the Push Snap is a powerful tool that allows any wallet address and user to receive notifications directly in their MetaMask wallet.","tags":["Push Protocol","Metamask","Metamask Wallet","Web3","Blockchain"]},"content":{"id":"deep-dive-into-push-snaps-features-and-getting-started-all-the-technical-specifications-and-getting-started-tips-you-need","metadata":{"permalink":"/blog/deep-dive-into-push-snaps-features-and-getting-started-all-the-technical-specifications-and-getting-started-tips-you-need","source":"@site/blog/2023-09-13-deep-dive-into-push-snaps/index.md","title":"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f","description":"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f","date":"2023-09-13T00:00:00.000Z","formattedDate":"September 13, 2023","tags":[{"label":"Push Protocol","permalink":"/blog/tags/push-protocol"},{"label":"Metamask","permalink":"/blog/tags/metamask"},{"label":"Metamask Wallet","permalink":"/blog/tags/metamask-wallet"},{"label":"Web3","permalink":"/blog/tags/web-3"},{"label":"Blockchain","permalink":"/blog/tags/blockchain"}],"readingTime":4.32,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"deep-dive-into-push-snaps-features-and-getting-started-all-the-technical-specifications-and-getting-started-tips-you-need","title":"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f","authors":["push"],"image":"./cover-image.webp","description":"Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f","text":"As we outlined in our announcement article \u2014 the Push Snap is a powerful tool that allows any wallet address and user to receive notifications directly in their MetaMask wallet.","tags":["Push Protocol","Metamask","Metamask Wallet","Web3","Blockchain"]},"unlisted":false,"prevItem":{"title":"4 Reasons To Separate Your dApp\u2019s Communication and Execution Layers","permalink":"/blog/4-reasons-to-seperate-your-dapp-communication-and-execution-layers"},"nextItem":{"title":"Bringing Push to MetaMask Snaps","permalink":"/blog/bringing-push-to-meta-mask-snaps"}},"content":"![Cover image of Deep-dive into Push Snaps Features & Getting Started \ud83d\udee0\ufe0f](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\n\x3c!--customheaderpoint--\x3e\\n# All the technical specifications and getting started tips you need.\\n\\nAs we outlined in our [announcement article](https://push-protocol.medium.com/bringing-push-to-metamask-snaps-fc780fec004b) \u2014 the Push Snap is a powerful tool that allows any wallet address and user to receive notifications directly in their MetaMask wallet. With the Push Snap installed, you can now seamlessly receive notifications powered by [Push Protocol](https://push.org/) directly into your wallet, ensuring you never miss out on important updates from the channels you subscribe to.\\n\\n\\nBy delivering notifications directly to your wallet address, we\u2019re eliminating the need to log in to any other front-end separately to get those same notifications and alerts. By bringing all your notifications into one place, we\u2019re saving you time, effort, and allowing you to more easily stay connected and informed.\\n\\n## Core Snap Features\\n\\nThe main features of version 1 of the Push Snap include:\\n\\n1. <b>Notifications</b>: Notifying users of all updates from the channels they\\n   opt-in to.\\n2. <b>Address Selection</b>: Addition or removal of their desired addresses for\\n   notifications.\\n3. <b>Customization of Pop-Ups</b>: Push Snap allows users to toggle popup\\n   notifications at their convenience.\\n\\n## Brief glance at the Push Snap\u2019s working mechanism\\n\\n- The snap requests permission to run periodically every minute.\\n- While running, it scouts for all new notifications/alerts received by your wallet\\n- It then bundles all the notifications together and shows all of them in the form of a pop-up as well as in-app notification.\\n- The Push Snap allows users to update their address for which they prefer to receive notifications.\\n- The Push Snap also includes features to toggle the pop-up notifications as per the user\u2019s choice.\\n\\n<blockquote>\\n<i>\\n  Note: Currently, the Push Snap checks if more than 25 notifications are\\n  received per minute. If that\u2019s the case, the Push Snap automatically notifies\\n  the user and snoozes the popups, which can always be turned back on from the\\n  dApp.\\n  </i>\\n</blockquote>\\n\\n## Snap installation and Set-Up guide\\n\\n- If you don\u2019t already have a MetaMask wallet, install and [set-up a wallet in MetaMask](https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask) here.\\n- Next, go to [https://app.push.org/receive](https://app.push.org/receive)\\n- Click on <b>Install Snap</b> \u2192 <i>approve the required permissions to run the snap</i>\\n- Once successfully installed the snap will redirect to Push Channels Dapp\\n- Here you can opt-in to your favourite channels to receive notifications\\n- Once done, you can go back to the Snap Settings Page.\\n- With the connected wallet, click on <b>Add Address:</b>\\n- This allows you to add an address for which you prefer to receive notifications\\n- Once you click, simply sign the message to complete the process\\n- Once done, you are all set. The address will now start receiving notifications.\\n\\n## Snap\u2019s permissions\\n\\n- <b>Local storage</b>: To store the addresses to send notifications and PGP\\n  private key to send PUSH Chat notifications\\n- <b>Periodic actions</b>: This includes sending notifications every minute to\\n  the wallet\\n- <b>Dialog Boxes</b>: This includes popups for showing notifications on screen\\n  and the initial screen\\n- <b>Internet Access</b>: The Push Snap has internet access and can make API\\n  calls using fetch()\\n\\n## Technical Specifications\\n\\nMentioned below are the imperative calls made by the Push Snap.\\n\\n## onRPCHandler Specifications\\n\\n- <b>\u2018pushproto_addaddress\u2019</b> \u2014 This stores the address in the local storage chosen\\n  by the user after the signature is successful. This address will be served the\\n  notifications.\\n- <b>\u2018pushproto_removeaddress\u2019</b> \u2014 This removes the address from the local storage\\n  chosen by the user. That address won\u2019t be served the notification anymore.\\n- <b>\u2018pushproto_welcome\u2019</b> \u2014 Serves as an initial popup to introduce the user to\\n  what the snap does and redirects the user to <a href=\\"https://app.push.org\\">\\n    app.push.org\\n  </a> to opt-in to the push channels to start getting notifications.\\n- <b>\u2018pushproto_togglepopup\u2019</b> \u2014 This method turns off the snooze and notifications\\n  would be allowed to be shown in the form of popups again.\\n\\n## onCronjob Handler Specifications\\n\\n- Check if the total notification received is >25. If not it continues to display notifications in the form of popups, otherwise it turns off popups notifying the user, and it can be toggled from the app\\n- InApp notifications have a limit of 11 notifications per second since notifications could be sent every 5 sec, to adhere to that it\u2019s limited to 11 latest notifications per second fired every 5 seconds, adding up to 55 secs, and the next 5-sec gap is freed for the next iteration\\n\\n## Trouble getting started? We\u2019re here to help!\\n\\nIf you have any issues with setting up your Push Snap, we have a 24/7 dedicated team of devs to help you out.\\n\\nYou can find us here \ud83d\udc49https://discord.gg/pushprotocol\\n\\n## Other FAQs\\n\\n### How can I install the Push Snap?\\n\\nTo install the Push Protocol Snap, you need to go to our dApp, https://app.push.org/receive and click on the Receive Notifications section. From there, install the Push Snap by giving it the required permissions. After adding addresses, you\u2019re all set to start receiving notifications.\\n\\n### Can I add an address that I do not own?\\n\\nThe addresses to receive notifications can be added only after signing a message, which proves the ownership of that address, hence un-owned addresses cannot be added\\n\\n### Can I opt for only in-app MetaMask notifications?\\n\\nYes, the Push Snap can run only on in-app notifications, to avail that, you need to go through the Push Snap settings in the Push dApp and turn off pop-up notifications.\\n\\n### Can I opt into channels using this Push Snap?\\n\\nOpting-in to channels can only be done using the Push Protocol dApp. The Push Snap is only for receiving and displaying these notifications.\\n\\n### Can the Push Snap sign and send transactions?\\n\\nNo, the Push Snap does not have access to the Ethereum provider nor the signer hence the Push Snap cannot initiate any kind of transaction that may or may not involve asset transfers.\\n\\n### Is there a way to minimize frequent notification pop-ups?\\n\\nThe Push Snap has an in-built feature to snooze frequent pop-up notifications. If you receive more than 25 notifications within 5 minutes, it automatically goes into snooze mode and notifications would only come in MetaMask. These settings can always be reset from the dApp.\\n\\n### What permissions do I need to provide while installing or using the Push Snap?\\n\\nThe only permissions required are:\\n\\n- Local storage access for the Push Snap to store details of notifications received and allowed addresses\\n- Internet access to gather notifications from Push Protocol\\n- Periodic running of services while the browser is active to check for latest notifications\\n- Dialog box access to allow pop-up notifications\\n\\n### Can I add more than one wallet to receive notifications?\\n\\nYes, more than one wallet can be added to receive notifications:\\n\\n- Go to the Push Snap settings on the Push dApp\\n- Connect the wallet you want to add\\n- Click on <a>Add Address</a> button and sign a message\\n- The address will be added to the snap to receive notifications\\n\\n### If I have more than one wallet added to the Push Snap, will I receive notifications for all of them?\\n\\nYes, every wallet you add will receive a notification.\\n\\n### Does the MetaMask Wallet need to be unlocked to receive notification?\\n\\nYes, the browser window needs to be active and MetaMask needs to be unlocked to start receiving notifications.\\n\\n\\n\\n\x3c!-- [Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as: --\x3e\\n\\n\x3c!-- The blog supports tags as well! --\x3e\\n\\n\x3c!-- **And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config. --\x3e"}}')}}]);