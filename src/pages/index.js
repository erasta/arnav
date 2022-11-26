import React, { useState, useEffect } from "react"
import axios from "axios"

import Layout from "../components/layout"
import * as styles from "../components/index.module.css"

import Toot from "../components/toot"

function IndexPage() {
  const [toots, setToots] = useState([])

  useEffect(() => {
    // Make a request from tooot.im
    const sites = ["tooot.im","hed.im","kishkush.net","hayu.sh","leftodon.social","pirsamti.com"]
    var tootList = []
    sites.forEach(function (url) {
      axios
        .get(`https://${url}/api/v1/timelines/public?local=true`)
        .then(function (response) {
          tootList=[...tootList, ...response.data]
        })
        .catch(function (error) {
          console.log(error)
        })
    })
    setToots(tootList.sort(function(a, b){return a.created_at - b.created_at}))
  },[])

  return (
    <Layout>
      <h1>בודק משהו בשביל הערנב🐇🐇🐇</h1>
      <h2>מצטער, מינימום השקעה היום</h2>
      <h3>חצרוצים: {toots.length}</h3>
      {toots.map(function (toot, i) {
        return <Toot toot={toot} key={i} />
      })}
    </Layout>
  )
}

export default IndexPage
