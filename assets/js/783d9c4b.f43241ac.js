"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[97297],{982284:t=>{t.exports=JSON.parse('{"title":"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1","description":"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1","frontMatter":{"slug":"benchmarking-push-chat-message","title":"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1","authors":["push"],"image":"./cover-image.webp","description":"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1","text":"Push Chat has been a game-changer for  web3 messaging, offering a hassle-free experience for user to user, user to dApp, and group conversations. In essence, Push Chat makes messaging in web3 as seamless as it is in web2. One feature we\u2019ve been working on extensively within Push Chat is change in storage and retreivals of Push chat messages to make them much more faster.","tags":["Push Protocol","Web3","Blockchain Technology","EthGlobal"]},"content":{"id":"benchmarking-push-chat-message","metadata":{"permalink":"/blog/benchmarking-push-chat-message","source":"@site/blog/2024-03-04-benchmarking-push-chat-message-architecture/index.md","title":"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1","description":"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1","date":"2024-03-04T00:00:00.000Z","formattedDate":"March 4, 2024","tags":[{"label":"Push Protocol","permalink":"/blog/tags/push-protocol"},{"label":"Web3","permalink":"/blog/tags/web-3"},{"label":"Blockchain Technology","permalink":"/blog/tags/blockchain-technology"},{"label":"EthGlobal","permalink":"/blog/tags/eth-global"}],"readingTime":5.5633333333333335,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"benchmarking-push-chat-message","title":"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1","authors":["push"],"image":"./cover-image.webp","description":"Benchmarking Push Chat Message Architecture: What Changed? \ud83d\udcac \u26a1","text":"Push Chat has been a game-changer for  web3 messaging, offering a hassle-free experience for user to user, user to dApp, and group conversations. In essence, Push Chat makes messaging in web3 as seamless as it is in web2. One feature we\u2019ve been working on extensively within Push Chat is change in storage and retreivals of Push chat messages to make them much more faster.","tags":["Push Protocol","Web3","Blockchain Technology","EthGlobal"]},"unlisted":false,"prevItem":{"title":"Explaining Push Nodes: Everything You Need To Know","permalink":"/blog/explaining-push-nodes"},"nextItem":{"title":"Announcing Decentralize with PUSH Contest","permalink":"/blog/announcing-decentralize-with-push-contest"}},"content":"![Cover Image of Push Chat message benchmark \ud83d\udcac \u26a1](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nPush Chat has revolutionized web3 messaging, providing a seamless experience for user-to-user, user-to-dApp, and group conversations. Essentially, Push Chat bridges the gap between messaging in web3 and web2, offering a hassle-free transition. One pivotal enhancement we\'ve diligently pursued within Push Chat involves reconfiguring the architecture for storing and retrieving messages, resulting in significantly faster performance.\\n\\nWhether you\'re engaging in public group chats, participating in private discussions, or accessing token-gated communities, Push Group Chat simplifies and secures connections. Now, Push is elevating its scalability and drastically improving message transmission speeds.\\n\\n### Understanding Push Chat Message Architecture\\n\\n#### V1 Architecture\\n\\nIn the earlier iteration of Push Chat, messages were managed within a linked list structure. This architecture employed references where each message pointed to the previous one, creating a sequential chain of messages. However, this design encountered some significant hurdles.\\n\\nOne notable issue arose from the concurrent arrival of messages, as the linked list format struggled to handle the concurrent processing of incoming messages. This concurrency bottleneck often resulted in performance degradation and dropping of messages by Push nodes, undermining the real-time nature of Push Chat.\\n\\nMoreover, the process of retrieving messages from this linked list structure posed its own set of challenges. Since Push nodes primarily stored references to the latest message, retrieving older messages required traversing the entire linked list sequentially. This approach led to slow query speeds, as resolving previous messages necessitated the resolution of the current message first.\\n\\n#### V2 Architecture\\n\\nIn the latest iteration, Push Chat has undergone a significant architectural transformation, one of the most notable changes in v2 is the abandonment of the linked list paradigm, where each message no longer references the previous one.\\n\\nBy eliminating the requirement for messages to reference the previous one, v2 architecture significantly simplifies message processing, enabling Push nodes to handle concurrent messages more efficiently. This architectural shift has alleviated the concurrency bottleneck that plagued the earlier version, enhancing the scalability and responsiveness of Push Chat.\\n\\nFurthermore, in v2, Push nodes now cache every message instead of solely storing references to the latest message hash. This strategic enhancement plays a pivotal role in optimizing message retrieval speeds. By caching every message, Push nodes can swiftly access and deliver messages upon request, mitigating the latency issues associated with sequential message resolution.\\n\\nIt\'s worth noting that despite these architectural changes, the fundamental immutable layer of Push Chat remains rooted in IPFS. Every message, whether in v1 or v2, continues to be backed up by a client-signed and verifiable verification proof. This cryptographic mechanism ensures the integrity and authenticity of messages, safeguarding them against tampering or unauthorized alterations.\\n\\n### Push Chat Benchmarks: Letting The Numbers Speak For Unprecedented Scale And Security\\n\\n> Note:: It\'s important to acknowledge that the benchmarking of v2 architecture was conducted on a development server, while the benchmarking of v1 architecture took place on a production server. It\'s worth highlighting that the production server possesses 16 times more CPU power than the development server, potentially providing an unfair advantage to v1 architecture. Additionally, it\'s crucial to recognize that the traffic volume on the production server is substantially higher compared to the development environment. These discrepancies in server specifications and traffic levels should be considered when interpreting the benchmark results.\\n\\n#### List Paginated User Chats\\n\\nFn Breakdown\\n\\n1. Fetch lists of chat of a account with latest threadhash ( Page Limit = 10 ) - `A`\\n2. Fetch latest message for every chat - `B`\\n3. Decrypt the latest message if its encrypted - Ignored for this benchmark\\n\\n<div style={{ display: \'inline-block\', marginRight: \'20px\' }}>\\n<table>\\n<tr>\\n   <th colspan=\\"2\\">V1 Message Architecture</th>\\n</tr>\\n<tr>\\n    <th>\\n    Call Type\\n    </th>\\n    <th>\\n    Time Taken ( ms )\\n    </th>\\n</tr>\\n<tr>\\n    <td>A</td>\\n    <td>825</td>\\n</tr>\\n<tr>\\n    <td>B - 1</td>\\n    <td>712</td>\\n</tr>\\n<tr>\\n    <td>B - 2</td>\\n    <td>718</td>\\n</tr>\\n<tr>\\n    <td>B - 3</td>\\n    <td>728</td>\\n</tr>\\n<tr>\\n    <td>B - 4</td>\\n    <td>734</td>\\n</tr>\\n<tr>\\n    <td>B - 5</td>\\n    <td>693</td>\\n</tr>\\n<tr>\\n    <td>B - 6</td>\\n    <td>694</td>\\n</tr>\\n<tr>\\n    <td>B - 7</td>\\n    <td>673</td>\\n</tr>\\n<tr>\\n    <td>B - 8</td>\\n    <td>716</td>\\n</tr>\\n<tr>\\n    <td>B - 9</td>\\n    <td>768</td>\\n</tr>\\n<tr>\\n    <td>B - 10</td>\\n    <td>713</td>\\n</tr>\\n</table>\\n</div>\\n\\n<div style={{ display: \'inline-block\' }}>\\n<table>\\n<tr>\\n   <th colspan=\\"2\\">V2 Message Architecture</th>\\n</tr>\\n<tr>\\n    <th>\\n    Call Type\\n    </th>\\n    <th>\\n    Time Taken ( ms )\\n    </th>\\n</tr>\\n<tr>\\n    <td>A</td>\\n    <td>696</td>\\n</tr>\\n<tr>\\n    <td>B - 1</td>\\n    <td>386</td>\\n</tr>\\n<tr>\\n    <td>B - 2</td>\\n    <td>447</td>\\n</tr>\\n<tr>\\n    <td>B - 3</td>\\n    <td>433</td>\\n</tr>\\n<tr>\\n    <td>B - 4</td>\\n    <td>509</td>\\n</tr>\\n<tr>\\n    <td>B - 5</td>\\n    <td>410</td>\\n</tr>\\n<tr>\\n    <td>B - 6</td>\\n    <td>431</td>\\n</tr>\\n<tr>\\n    <td>B - 7</td>\\n    <td>399</td>\\n</tr>\\n<tr>\\n    <td>B - 8</td>\\n    <td>359</td>\\n</tr>\\n<tr>\\n    <td>B - 9</td>\\n    <td>441</td>\\n</tr>\\n<tr>\\n    <td>B - 10</td>\\n    <td>410</td>\\n</tr>\\n</table>\\n</div>\\n\\n#### List Latest Chat Message\\n\\nFn Breakdown\\n\\n1. Fetch latest message reference - `A`\\n2. Fetch latest message for that reference - `B`\\n3. Decrypt the latest message if its encrypted - Ignored for this benchmark\\n\\n<div>\\n   <div style={{ display: \'inline-block\', marginRight: \'20px\' }}>\\n   <table>\\n   <tr>\\n      <th colspan=\\"2\\">V1 Message Architecture</th>\\n   </tr>\\n   <tr>\\n      <th colspan=\\"2\\">Chat with 10 Messages</th>\\n   </tr>\\n   <tr>\\n      <th>\\n      Call Type\\n      </th>\\n      <th>\\n      Time Taken ( ms )\\n      </th>\\n   </tr>\\n   <tr>\\n      <td>A</td>\\n      <td>787</td>\\n   </tr>\\n   <tr>\\n      <td>B</td>\\n      <td>1403</td>\\n   </tr>\\n   </table>\\n   </div>\\n\\n   <div style={{ display: \'inline-block\' }}>\\n      <table>\\n      <tr>\\n         <th colspan=\\"2\\">V2 Message Architecture</th>\\n      </tr>\\n      <tr>\\n         <th colspan=\\"2\\">Chat with 10 Messages</th>\\n      </tr>\\n      <tr>\\n         <th>\\n         Call Type\\n         </th>\\n         <th>\\n         Time Taken ( ms )\\n         </th>\\n      </tr>\\n      <tr>\\n         <td>A</td>\\n         <td>325</td>\\n      </tr>\\n      <tr>\\n         <td>B</td>\\n         <td>673</td>\\n      </tr>\\n      </table>\\n   </div>\\n\\n</div>\\n\\n<div>\\n   <div style={{ display: \'inline-block\', marginRight: \'20px\' }}>\\n      <table>\\n      <tr>\\n         <th colspan=\\"2\\">V1 Message Architecture</th>\\n      </tr>\\n      <tr>\\n         <th colspan=\\"2\\">Chat with 50 Messages</th>\\n      </tr>\\n      <tr>\\n         <th>\\n         Call Type\\n         </th>\\n         <th>\\n         Time Taken ( ms )\\n         </th>\\n      </tr>\\n      <tr>\\n         <td>A</td>\\n         <td>744</td>\\n      </tr>\\n      <tr>\\n         <td>B</td>\\n         <td>1381</td>\\n      </tr>\\n      </table>\\n   </div>\\n\\n   <div style={{ display: \'inline-block\' }}>\\n      <table>\\n      <tr>\\n         <th colspan=\\"2\\">V2 Message Architecture</th>\\n      </tr>\\n      <tr>\\n         <th colspan=\\"2\\">Chat with 50 Messages</th>\\n      </tr>\\n      <tr>\\n         <th>\\n         Call Type\\n         </th>\\n         <th>\\n         Time Taken ( ms )\\n         </th>\\n      </tr>\\n      <tr>\\n         <td>A</td>\\n         <td>399</td>\\n      </tr>\\n      <tr>\\n         <td>B</td>\\n         <td>718</td>\\n      </tr>\\n      </table>\\n   </div>\\n\\n</div>\\n\\n<div>\\n   <div style={{ display: \'inline-block\', marginRight: \'20px\' }}>\\n   <table>\\n   <tr>\\n      <th colspan=\\"2\\">V1 Message Architecture</th>\\n   </tr>\\n   <tr>\\n      <th colspan=\\"2\\">Chat with 100 Messages</th>\\n   </tr>\\n   <tr>\\n      <th>\\n      Call Type\\n      </th>\\n      <th>\\n      Time Taken ( ms )\\n      </th>\\n   </tr>\\n   <tr>\\n      <td>A</td>\\n      <td>693</td>\\n   </tr>\\n   <tr>\\n      <td>B</td>\\n      <td>1524</td>\\n   </tr>\\n   </table>\\n   </div>\\n\\n   <div style={{ display: \'inline-block\' }}>\\n<table>\\n<tr>\\n   <th colspan=\\"2\\">V2 Message Architecture</th>\\n</tr>\\n<tr>\\n   <th colspan=\\"2\\">Chat with 100 Messages</th>\\n</tr>\\n<tr>\\n    <th>\\n    Call Type\\n    </th>\\n    <th>\\n    Time Taken ( ms )\\n    </th>\\n</tr>\\n<tr>\\n    <td>A</td>\\n    <td>348</td>\\n</tr>\\n<tr>\\n    <td>B</td>\\n    <td>716</td>\\n</tr>\\n</table>\\n</div>\\n\\n</div>\\n\\n<div>\\n   <div style={{ display: \'inline-block\', marginRight: \'20px\' }}>\\n      <table>\\n      <tr>\\n         <th colspan=\\"2\\">V1 Message Architecture</th>\\n      </tr>\\n      <tr>\\n         <th colspan=\\"2\\">Chat with 250 Messages</th>\\n      </tr>\\n      <tr>\\n         <th>\\n         Call Type\\n         </th>\\n         <th>\\n         Time Taken ( ms )\\n         </th>\\n      </tr>\\n      <tr>\\n         <td>A</td>\\n         <td>679</td>\\n      </tr>\\n      <tr>\\n         <td>B</td>\\n         <td>1462</td>\\n      </tr>\\n      </table>\\n   </div>\\n\\n   <div style={{ display: \'inline-block\' }}>\\n   <table>\\n   <tr>\\n      <th colspan=\\"2\\">V2 Message Architecture</th>\\n   </tr>\\n   <tr>\\n      <th colspan=\\"2\\">Chat with 250 Messages</th>\\n   </tr>\\n   <tr>\\n      <th>\\n      Call Type\\n      </th>\\n      <th>\\n      Time Taken ( ms )\\n      </th>\\n   </tr>\\n   <tr>\\n      <td>A</td>\\n      <td>312</td>\\n   </tr>\\n   <tr>\\n      <td>B</td>\\n      <td>700</td>\\n   </tr>\\n   </table>\\n   </div>\\n\\n</div>\\n\\n#### List Historical Chat Message\\n\\nFn Breakdown\\n\\n1. Fetch messages frm a given message reference ( Page Limit = 10 ) - `A`\\n2. Decrypt the latest message if its encrypted - Ignored for this benchmark\\n\\n<div>\\n<div style={{ display: \'inline-block\', marginRight: \'20px\' }}>\\n<table>\\n<tr>\\n   <th colspan=\\"2\\">V1 Message Architecture</th>\\n</tr>\\n<tr>\\n   <th colspan=\\"2\\">Chat with 10 Messages</th>\\n</tr>\\n<tr>\\n    <th>\\n    Call Type\\n    </th>\\n    <th>\\n    Time Taken ( ms )\\n    </th>\\n</tr>\\n<tr>\\n    <td>A</td>\\n    <td>1616</td>\\n</tr>\\n</table>\\n</div>\\n\\n<div style={{ display: \'inline-block\' }}>\\n<table>\\n<tr>\\n   <th colspan=\\"2\\">V2 Message Architecture</th>\\n</tr>\\n<tr>\\n   <th colspan=\\"2\\">Chat with 10 Messages</th>\\n</tr>\\n<tr>\\n    <th>\\n    Call Type\\n    </th>\\n    <th>\\n    Time Taken ( ms )\\n    </th>\\n</tr>\\n<tr>\\n    <td>A</td>\\n    <td>991</td>\\n</tr>\\n</table>\\n</div>\\n\\n</div>\\n\\n<div>\\n<div style={{ display: \'inline-block\', marginRight: \'20px\' }}>\\n<table>\\n<tr>\\n   <th colspan=\\"2\\">V1 Message Architecture</th>\\n</tr>\\n<tr>\\n   <th colspan=\\"2\\">Chat with 50 Messages</th>\\n</tr>\\n<tr>\\n    <th>\\n    Call Type\\n    </th>\\n    <th>\\n    Time Taken ( ms )\\n    </th>\\n</tr>\\n<tr>\\n    <td>A</td>\\n    <td>2414</td>\\n</tr>\\n</table>\\n</div>\\n\\n<div style={{ display: \'inline-block\' }}>\\n<table>\\n<tr>\\n   <th colspan=\\"2\\">V2 Message Architecture</th>\\n</tr>\\n<tr>\\n   <th colspan=\\"2\\">Chat with 50 Messages</th>\\n</tr>\\n<tr>\\n    <th>\\n    Call Type\\n    </th>\\n    <th>\\n    Time Taken ( ms )\\n    </th>\\n</tr>\\n<tr>\\n    <td>A</td>\\n    <td>1060</td>\\n</tr>\\n</table>\\n</div>\\n\\n</div>\\n\\n<div>\\n<div style={{ display: \'inline-block\', marginRight: \'20px\' }}>\\n<table>\\n<tr>\\n   <th colspan=\\"2\\">V1 Message Architecture</th>\\n</tr>\\n<tr>\\n   <th colspan=\\"2\\">Chat with 100 Messages</th>\\n</tr>\\n<tr>\\n    <th>\\n    Call Type\\n    </th>\\n    <th>\\n    Time Taken ( ms )\\n    </th>\\n</tr>\\n<tr>\\n    <td>A</td>\\n    <td>2440</td>\\n</tr>\\n</table>\\n</div>\\n\\n<div style={{ display: \'inline-block\' }}>\\n<table>\\n<tr>\\n   <th colspan=\\"2\\">V2 Message Architecture</th>\\n</tr>\\n<tr>\\n   <th colspan=\\"2\\">Chat with 100 Messages</th>\\n</tr>\\n<tr>\\n    <th>\\n    Call Type\\n    </th>\\n    <th>\\n    Time Taken ( ms )\\n    </th>\\n</tr>\\n<tr>\\n    <td>A</td>\\n    <td>1020</td>\\n</tr>\\n</table>\\n</div>\\n\\n</div>\\n\\n<div>\\n<div style={{ display: \'inline-block\', marginRight: \'20px\' }}>\\n<table>\\n<tr>\\n   <th colspan=\\"2\\">V1 Message Architecture</th>\\n</tr>\\n<tr>\\n   <th colspan=\\"2\\">Chat with 100 Messages</th>\\n</tr>\\n<tr>\\n    <th>\\n    Call Type\\n    </th>\\n    <th>\\n    Time Taken ( ms )\\n    </th>\\n</tr>\\n<tr>\\n    <td>A</td>\\n    <td>2360</td>\\n</tr>\\n</table>\\n</div>\\n\\n<div style={{ display: \'inline-block\' }}>\\n<table>\\n<tr>\\n   <th colspan=\\"2\\">V2 Message Architecture</th>\\n</tr>\\n<tr>\\n   <th colspan=\\"2\\">Chat with 250 Messages</th>\\n</tr>\\n<tr>\\n    <th>\\n    Call Type\\n    </th>\\n    <th>\\n    Time Taken ( ms )\\n    </th>\\n</tr>\\n<tr>\\n    <td>A</td>\\n    <td>965</td>\\n</tr>\\n</table>\\n</div>\\n\\n</div>\\n\\n#### Send Message\\n\\nFn Breakdown\\n\\n1. Fetch receiver\u2019s details - Ignored for this benchmark\\n2. Encrypt message - Ignored for this benchmark\\n3. POST Call to Push Nodes - `A`\\n\\n<div>\\n<div style={{ display: \'inline-block\', marginRight: \'20px\' }}>\\n<table>\\n<tr>\\n   <th colspan=\\"2\\">V1 Message Architecture</th>\\n</tr>\\n<tr>\\n    <th>\\n    Call Type\\n    </th>\\n    <th>\\n    Time Taken ( ms )\\n    </th>\\n</tr>\\n<tr>\\n    <td>A - Avg of 10 Msg</td>\\n    <td>854</td>\\n</tr>\\n<tr>\\n    <td>A - Avg of 50 Msg</td>\\n    <td>841</td>\\n</tr>\\n<tr>\\n    <td>A - Avg of 100 Msg</td>\\n    <td>820</td>\\n</tr>\\n</table>\\n</div>\\n\\n<div style={{ display: \'inline-block\' }}>\\n<table>\\n<tr>\\n   <th colspan=\\"2\\">V2 Message Architecture</th>\\n</tr>\\n<tr>\\n    <th>\\n    Call Type\\n    </th>\\n    <th>\\n    Time Taken ( ms )\\n    </th>\\n</tr>\\n<tr>\\n    <td>A - Avg of 10 Msg</td>\\n    <td>823</td>\\n</tr>\\n<tr>\\n    <td>A - Avg of 50 Msg</td>\\n    <td>856</td>\\n</tr>\\n<tr>\\n    <td>A - Avg of 100 Msg</td>\\n    <td>832</td>\\n</tr>\\n</table>\\n</div>\\n\\n</div>"}}')}}]);