import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import * as styles from "../components/index.module.css"

import Toot from "../components/toot"

function IndexPage() {
  const [toots, setToots] = useState([
    {
      id: "109383709545089105",
      created_at: "2022-11-21T20:35:50.823Z",
      in_reply_to_id: null,
      in_reply_to_account_id: null,
      sensitive: false,
      spoiler_text: "",
      visibility: "public",
      language: "he",
      uri: "https://tooot.im/users/yuvallerman/statuses/109383709545089105",
      url: "https://tooot.im/@yuvallerman/109383709545089105",
      replies_count: 0,
      reblogs_count: 0,
      favourites_count: 0,
      edited_at: null,
      favourited: false,
      reblogged: false,
      muted: false,
      bookmarked: false,
      content: "<p>אל יווני<br />הא?</p>",
      filtered: [],
      reblog: null,
      application: null,
      account: {
        id: "109250480774141831",
        username: "yuvallerman",
        acct: "yuvallerman",
        display_name: "יובל לרמן",
        locked: false,
        bot: false,
        discoverable: true,
        group: false,
        created_at: "2022-10-29T00:00:00.000Z",
        note: "<p>פנסיונר מיקנעם עילית, הנדסאי מכונות בדימוס וחובב טיולים בשעות הפנאי</p>",
        url: "https://tooot.im/@yuvallerman",
        avatar:
          "https://s3-eu-central-1.amazonaws.com/toootim/accounts/avatars/109/250/480/774/141/831/original/00ed9ce4e2ddf6c3.jpg",
        avatar_static:
          "https://s3-eu-central-1.amazonaws.com/toootim/accounts/avatars/109/250/480/774/141/831/original/00ed9ce4e2ddf6c3.jpg",
        header: "https://tooot.im/headers/original/missing.png",
        header_static: "https://tooot.im/headers/original/missing.png",
        followers_count: 25,
        following_count: 49,
        statuses_count: 33,
        last_status_at: "2022-11-21",
        noindex: true,
        emojis: [],
        fields: [],
      },
      media_attachments: [
        {
          id: "109383709033857266",
          type: "image",
          url: "https://s3-eu-central-1.amazonaws.com/toootim/media_attachments/files/109/383/709/033/857/266/original/5b34128cbcab7b27.jpeg",
          preview_url:
            "https://s3-eu-central-1.amazonaws.com/toootim/media_attachments/files/109/383/709/033/857/266/small/5b34128cbcab7b27.jpeg",
          remote_url: null,
          preview_remote_url: null,
          text_url: null,
          meta: {
            original: {
              width: 1440,
              height: 1440,
              size: "1440x1440",
              aspect: 1,
            },
            small: {
              width: 480,
              height: 480,
              size: "480x480",
              aspect: 1,
            },
          },
          description: null,
          blurhash: "U7HeXr.S4TS5#k8_,,Ri58=rWVspNMNG9ao}",
        },
      ],
      mentions: [],
      tags: [],
      emojis: [],
      card: null,
      poll: null,
    },
    {
      id: "109383708526233156",
      created_at: "2022-11-21T20:35:35.276Z",
      in_reply_to_id: null,
      in_reply_to_account_id: null,
      sensitive: false,
      spoiler_text: "",
      visibility: "public",
      language: "he",
      uri: "https://tooot.im/users/xatuz/statuses/109383708526233156",
      url: "https://tooot.im/@xatuz/109383708526233156",
      replies_count: 0,
      reblogs_count: 0,
      favourites_count: 2,
      edited_at: null,
      favourited: false,
      reblogged: false,
      muted: false,
      bookmarked: false,
      content: "<p>מצב נפשי: אוכלת חומוס מקופסת שימורים</p>",
      filtered: [],
      reblog: null,
      application: null,
      account: {
        id: "109346388613435514",
        username: "xatuz",
        acct: "xatuz",
        display_name: "חתול זוללת",
        locked: false,
        bot: false,
        discoverable: true,
        group: false,
        created_at: "2022-11-15T00:00:00.000Z",
        note: "",
        url: "https://tooot.im/@xatuz",
        avatar:
          "https://s3-eu-central-1.amazonaws.com/toootim/accounts/avatars/109/346/388/613/435/514/original/37d58073e956d408.jpg",
        avatar_static:
          "https://s3-eu-central-1.amazonaws.com/toootim/accounts/avatars/109/346/388/613/435/514/original/37d58073e956d408.jpg",
        header: "https://tooot.im/headers/original/missing.png",
        header_static: "https://tooot.im/headers/original/missing.png",
        followers_count: 43,
        following_count: 47,
        statuses_count: 22,
        last_status_at: "2022-11-21",
        noindex: true,
        emojis: [],
        fields: [
          {
            name: "טוויטר",
            value: "@xatul_zolelet",
            verified_at: null,
          },
        ],
      },
      media_attachments: [],
      mentions: [],
      tags: [],
      emojis: [],
      card: null,
      poll: null,
    },
  ])

  return (
    <Layout>
      <h1>בודק משהו בשביל הערנב🐇🐇🐇</h1>
      <h2>מצטער, מינימום השקעה היום</h2>
      <h3>חצרוצים: {toots.length}</h3>
      {toots.map(function (toot,i) {
        return <Toot toot={toot} key={i}/>
      })}
    </Layout>
  )
}

export default IndexPage
