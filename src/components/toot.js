import React from "react"

const tootStyle = {
  borderStyle: "solid",
  borderColor: "gray",
  borderRadius: "5px",
  borderWidth: "thin",
  padding: "5px",
  direction:"rtl"
}

function Toot({ toot }) {
  console.log(toot)
  return (
    <div style={tootStyle}>
      <p>from:{toot.account.display_name}</p>
      <p>date:{toot.created_at}</p>
      <p>{(toot.content)}</p>
      <p>media: {toot.media_attachments.length > 0?'yes':'no'}</p>
    </div>
  )
}

export default Toot
