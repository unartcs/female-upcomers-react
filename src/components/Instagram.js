import React, { useEffect, useState } from "react";

function Instagram() {
    const [mediaData, setMediaData] = useState({})
  async function getMedia() {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,timestamp,permalink&access_token=${process.env.REACT_APP_INSTAGRAM_API_KEY}...`;
    const data = await fetch(url)
    const feed = await data.json()
    setMediaData(feed)
  }
  useEffect(()=> {
    getMedia()
  },[])
  return (
    <div className="instagram-wrapper">
      <div>
        {/* {mediaData.map((item)=>{
            return (
              <h1>{item.caption}</h1>
            )
        })} */}
      </div>
    </div>
  );
}

export default Instagram;
