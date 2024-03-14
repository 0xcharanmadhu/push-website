"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[71035],{591650:n=>{n.exports=JSON.parse('{"title":"Getting Started With Push SDK: uiweb API\ud83d\udee0\ufe0f","description":"Cover image of Getting Started With Push SDK: uiweb API\ud83d\udee0\ufe0f","frontMatter":{"slug":"getting-started-with-push-sdk-uiweb-api","title":"Getting Started With Push SDK: uiweb API\ud83d\udee0\ufe0f","authors":["push"],"image":"./cover-image.webp","text":"The @pushprotocol/uiweb package is a collection of React components for building dApps that interact with the Push Protocol. It includes components for rendering notifications, spam notifications, and forms for subscribing and unsubscribing to spam notification channels.","tags":["Web3","Developer","Blockchain Development","Web3 Notifications"]},"content":{"id":"getting-started-with-push-sdk-uiweb-api","metadata":{"permalink":"/blog/getting-started-with-push-sdk-uiweb-api","source":"@site/blog/2023-02-21-getting-started-with-push-sdk/index.md","title":"Getting Started With Push SDK: uiweb API\ud83d\udee0\ufe0f","description":"Cover image of Getting Started With Push SDK: uiweb API\ud83d\udee0\ufe0f","date":"2023-02-21T00:00:00.000Z","formattedDate":"February 21, 2023","tags":[{"label":"Web3","permalink":"/blog/tags/web-3"},{"label":"Developer","permalink":"/blog/tags/developer"},{"label":"Blockchain Development","permalink":"/blog/tags/blockchain-development"},{"label":"Web3 Notifications","permalink":"/blog/tags/web-3-notifications"}],"readingTime":4.74,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"getting-started-with-push-sdk-uiweb-api","title":"Getting Started With Push SDK: uiweb API\ud83d\udee0\ufe0f","authors":["push"],"image":"./cover-image.webp","text":"The @pushprotocol/uiweb package is a collection of React components for building dApps that interact with the Push Protocol. It includes components for rendering notifications, spam notifications, and forms for subscribing and unsubscribing to spam notification channels.","tags":["Web3","Developer","Blockchain Development","Web3 Notifications"]},"unlisted":false,"prevItem":{"title":"Push @ETHDenver Full Itinerary \ud83c\udf04","permalink":"/blog/push-eth-denver-full-itinerary"},"nextItem":{"title":"Empower Your Wallet, App, or Platform with Push Delivery Nodes\u26a1","permalink":"/blog/empower-your-wallet-app-or-platform-with-push-delivery-nodes"}},"content":"![Cover image of Getting Started With Push SDK: uiweb API\ud83d\udee0\ufe0f](./cover-image.webp)\\n\x3c!--truncate--\x3e\\n\\nThe <b>@pushprotocol/uiweb</b> package is a collection of React components for building dApps that interact with the Push Protocol. It includes components for rendering notifications, spam notifications, and forms for subscribing and unsubscribing to spam notification channels.\\n\\n\\nIn this blog post, we\'ll take a closer look at the components included in the <b>@pushprotocol/uiweb</b> package and how you can use them in your dApp.\\n\\n## Components\\n### NotificationItem\\nThis component displays a single notification item. It takes the following props:\\n\\n- <b>notificationTitle</b> (string): The title of the notification.\\n- <b>notificationBody</b> (string): The body of the notification.\\n- <b>app</b> (string): The name of the app that sent the notification.\\n- <b>icon</b> (string): The URL of an icon to display next to the notification title.\\n- <b>image</b> (string): The URL of an image to display in the notification.\\n- <b>url</b> (string): The URL to open when the notification is clicked.\\n- <b>theme</b> (string): The theme to use for the notification. Possible values are \'light\' and \'dark\'.\\n- <b>chainName</b> (string): The name of the blockchain the notification was sent on. Possible values are \\"ETH_TEST_GOERLI\\", \\"POLYGON_TEST_MUMBAI\u201d.\\n- <b>isSpam</b> (boolean, optional): Set to true if the notification is spam.\\n- <b>subscribeFn</b> (function, optional): A function to call when the user clicks the \\"Opt-in\\" button on a spam notification.\\n- <b>isSubscribedFN</b> (function, optional): A function that returns a boolean indicating whether the user is subscribed to the spam notification\'s channel.\\n\\nExample:\\n\\n```js\\nimport { NotificationItem } from \\"@pushprotocol/uiweb\\";\\n\\nfunction MydApp() {\\n  const notifications = [\\n    {\\n      title: \\"Notification 1\\",\\n      message: \\"This is the first notification\\",\\n      app: \\"My App\\",\\n      icon: \\"https://my-app.com/icon.png\\",\\n      image: \\"https://my-app.com/image.png\\",\\n      url: \\"https://my-app.com/notification-1\\",\\n      blockchain: \\"ETH_TEST_GOERLI\\"\\n    },\\n    {\\n      title: \\"Notification 2\\",\\n      message: \\"This is the second notification\\",\\n      app: \\"My App\\",\\n      icon: \\"https://my-app.com/icon.png\\",\\n      image: \\"https://my-app.com/image.png\\",\\n      url: \\"https://my-app.com/notification-2\\",\\n      blockchain: \\"ETH_TEST_GOERLI\\"\\n    }\\n  ];\\n\\n  return (\\n    <div>\\n      {notifications.map((notification, i) => (\\n        <NotificationItem\\n          key={i}\\n          notificationTitle={notification.title}\\n          notificationBody={notification.message}\\n          app={notification.app}\\n          icon={notification.icon}\\n          image={notification.image}\\n          url={notification.url}\\n          theme={{ background: \\"blue\\", color: \\"white\\" }}\\n          chainName={notification.blockchain}\\n        />\\n      ))}\\n    </div>\\n  );\\n}\\n\\n```\\n\\n\\nThe <b>Notification Item</b> component can also be used to render spam notifications. To get the spam data, you can use the <b>PushAPI.user.getFeeds() </b> method with the <b>spam</b> parameter set to <b>true</b>.\\n\\nThe <b>NotificationItem</b> component is a general-purpose component that can be used to render any type of notification item, including spam notifications. It accepts props such as <b>notificationTitle, notificationBody, cta, app, icon, image,</b> and <b>url</b> to customize the appearance and behavior of the component.\\n\\nThe <b>Spam</b> component is a specialized variant of the <b>NotificationItem</b> component that is specifically designed for rendering spam notifications. It includes additional props such as <b>isSpam, subscribeFn,</b> and <b>isSubscribedFn</b> that allow the user to interact with the spam notification channel. It also includes an unsubscribe form that is displayed if the user is subscribed to the spam notification channel.\\n\\nYou can use the <b>PushAPI.user.getFeeds()</b> method with the <b>spam</b> parameter set to <b>true</b> to get the spam data. Here\'s an example of how you can use it:\\n\\n\\n```js\\nconst spams = await PushAPI.user.getFeeds({\\n  user: \'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681\',\\n  spam: true,\\n  env: \'staging\'\\n});\\n```\\n\\nTo render the <b>Notification Item</b> component for each spam notification, you\'ll need to pass in the additional props <b>isSpam, subscribeFn,</b> and <b>isSubscribedFn</b>\\n\\n- isSpam: A boolean value indicating whether the notification is a spam notification\\n- subscribeFn: A function that opts the user in to the spam notification\'s channel\\n- isSubscribedFn: A function that returns a boolean value indicating whether the user is subscribed to the spam notification\'s channel\\nHere\u2019s an example of how you can render the Notification Item component for each spam notification:\\n\\n\\n```js\\n{spams.map((oneNotification, i) => {\\n  const { \\n    cta,\\n    title,\\n    message,\\n    app,\\n    icon,\\n    image,\\n    url,\\n    blockchain,\\n    secret,\\n    notification\\n  } = oneNotification;\\n\\nreturn (\\n    <NotificationItem\\n      key={`spam-${i}`}\\n      notificationTitle={title}\\n      notificationBody={message}\\n      cta={cta}\\n      app={app}\\n      icon={icon}\\n      image={image}\\n      url={url}\\n      theme={theme}\\n      chainName={blockchain}\\n      isSpam={true}\\n      subscribeFn={subscribeFn}\\n      isSubscribedFn={isSubscribedFn}\\n    />\\n  );\\n})}\\n```\\n\\nTo implement the <b>subscribeFn</b> and <b>isSubscribedFn</b> functions, you can use the <b>PushAPI.channel.subscribe()</b> and <b>PushAPI.channel.subscribe()</b> methods from @pushprotocol/restapi package, respectively.\\n\\nFor examples on how you can implement these functions, check out [PUSH-SDK Rest API blog post](https://medium.com/push-protocol/getting-started-with-push-sdk-rest-api-%EF%B8%8F-821e5b8389cc) we recently published.\\n\\nHere\u2019s an example of how you can implement these functions:\\n\\n```js\\nawait PushAPI.channels.subscribe({\\n  signer: _signer,\\n  user: \'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681\',\\n  channel: \'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681\',\\n\\tenv: \'staging\'\\n});\\n\\nconst subscriptions = await PushAPI.user.getSubscriptions({\\n  user: \'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681\',\\n  env: \'staging\'\\n});\\n```\\n\\n## Putting it all together\\nHere is an example using <b>subscribeFn</b> that demonstrates the <b>uiweb</b> components used together.\\n\\n```js\\nimport React, { useState, useEffect } from \\"react\\";\\nimport { NotificationItem, chainNameType } from \\"@pushprotocol/uiweb\\";\\n\\nfunction MydApp() {\\n  const [notifications, setNotifications] = useState([]);\\n  useEffect(() => {\\n    const fetchNotifications = async () => {\\n      // fetch user notifications using the PushAPI\\n      const notifications = await PushAPI.user.getFeeds({\\n        user: \'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681\', // user address in CAIP\\n        env: \'staging\'\\n      });\\n      setNotifications(notifications);\\n    };\\n    fetchNotifications();\\n  }, []);\\n  return (\\n    <div>\\n      <h1>MydApp</h1>\\n      <h2>Notifications</h2>\\n      {notifications.map((notification, i) => {\\n        const {\\n          title,\\n          message,\\n          app,\\n          icon,\\n          image,\\n          url,\\n          blockchain\\n        } = notification;\\n        return (\\n          <NotificationItem\\n            key={i}\\n            notificationTitle={title}\\n            notificationBody={message}\\n            app={app}\\n            icon={icon}\\n            image={image}\\n            url={url}\\n            theme={theme}\\n            chainName={blockchain as chainNameType}\\n          />\\n        );\\n      })}\\n    </div>\\n  );\\n}\\n```\\n\\n<b>MydApp</b> is a component that renders a list of notifications and spam notifications, as well as a form for subscribing to or unsubscribing from spam notifications. It uses the following components from the <b>@pushprotocol/uiweb</b> package:\\n\\n- <b>NotificationItem:</b> A React component for rendering a single notification item.\\n- <b>Spam:</b> A React component for rendering a single spam notification item, with options for subscribing or unsubscribing to the spam notification channel.\\n- <b>Subscribe:</b> A React component for rendering a form for subscribing to a spam notification channel.\\n- <b>Unsubscribe:</b> A React component for rendering a form for unsubscribing from a spam notification channel.\\n\\n<b>MydApp</b> uses the <b>useState</b> and <b>useEffect</b> Hooks to fetch and display the user\'s notifications and spam notifications using the <b>PushAPI</b>. It also defines event handlers for subscribing to and unsubscribing from spam notifications.\\n\\n<b>MydApp</b> returns a JSX element that contains the following elements:\\n\\n- A <b>div</b> element with a <b>h1</b> element for the title of the application and a <b>h2</b> element for the section heading for the notifications.\\n- A loop that renders a <b>NotificationItem</b> component for each notification in the <b>notifications</b> array.\\n- A <b>h2</b> element for the section heading for the spam notifications.\\n- A loop that renders a <b>Spam</b> component for each spam notification in the <b>spamNotifications</b> array.\\n- A <b>h2</b> element for the section heading for the subscription form.\\n- An <b>Unsubscribe</b> component if the user is subscribed to spam notifications, or a <b>Subscribe</b> component if the user is not subscribed to spam notifications.\\n\\nThere are of course other React components that you can to compliment the uiweb API. For instance: the <b>Feed </b>component is a container for displaying a list of notifications in a UI. It takes the following props:\\n\\n- notifications (array of Notification objects): An array of notifications to be displayed in the feed. Each Notification object should have the following shape:\\n- <b>cta</b> (string): The call-to-action text for the notification.\\n- <b>title</b> (string): The title of the notification.\\n- <b>message</b> (string): The body of the notification.\\n- <b>app</b> (string): The name of the app that sent the notification.\\n- <b>icon</b> (string): The URL of an icon to be displayed with the notification.\\n- <b>image</b> (string): The URL of an image to be displayed with the notification.\\n- <b>url</b> (string): The URL to be opened when the notification is clicked.\\n- <b>blockchain</b> (string): The name of the blockchain on which the notification was sent.\\n- <b>theme</b>(Theme object): An object defining the colors and styles to be used in the feed. The Theme object should have the following shape:\\n- <b>background</b> (string): The background color of the feed.\\n- <b>color</b> (string): The text color of the feed.\\n- <b>chainName</b> (string): The name of the blockchain to be displayed in the feed.\\n\\nExample:\\n```js\\nimport NotificationItem from \\"@pushprotocol/uiweb/NotificationItem\\";\\nimport Feed from \\"./Feed\\"; // User-implemented component\\n\\nconst notifications = [\\n  {\\n    cta: \\"Learn More\\",\\n    title: \\"Notification 1\\",\\n    message: \\"This is the first notification\\",\\n    app: \\"My App\\",\\n    icon: \\"<https://my-app.com/icon.png>\\",\\n    image: \\"<https://my-app.com/image.png>\\",\\n    url: \\"<https://my-app.com/notification-1>\\",\\n    blockchain: \\"Ethereum\\"\\n  },\\n  {\\n    cta: \\"Get Started\\",\\n    title: \\"Notification 2\\",\\n    message: \\"This is the second notification\\",\\n    app: \\"My App\\",\\n    icon: \\"<https://my-app.com/icon.png>\\",\\n    image: \\"<https://my-app.com/image.png>\\",\\n    url: \\"<https://my-app.com/notification-2>\\",\\n    blockchain: \\"Ethereum\\"\\n  }\\n];\\nfunction MydApp() {\\n  return (\\n    <Feed\\n      notifications={notifications}\\n      theme={{ background: \\"blue\\", color: \\"white\\" }}\\n      chainName=\\"Ethereum\\"\\n    />\\n  );\\n}\\n```\\n\\nThat\u2019s it! You now know how to use the components of the <b>@pushprotocol/uiweb</b> API to add push notification functionality to your application.\\n\\nWe\u2019ll cover the other parts of the SDK in the coming posts. More reference material is available in the [Push Protocol SDK documentation](https://push.org/docs/).\\n\\nIn addition, try out the [Push SDK sandbox](https://github.com/ethereum-push-notification-service/push-sdk-sandbox).\\n\\nKeep PUSHING! #PoweredbyPush"}}')}}]);