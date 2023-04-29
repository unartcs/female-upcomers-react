import React, { useEffect, useState } from "react";
import "./Instagram.css";
import { InstagramEmbed } from "react-social-media-embed";
function Instagram() {
  const [mediaData, setMediaData] = useState({});
  const [slicedArray, setSlicedArray] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  // async function getMedia() {
  //   const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,timestamp,permalink&access_token=${process.env.REACT_APP_INSTAGRAM_API_KEY}...`;
  //   const data = await fetch(url);
  //   const feed = await data.json();
  //   await setMediaData(feed);
  //   await setSlicedArray(mediaData.data.slice(0, 7));
  // }
  const fetchData = async () => {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,timestamp,permalink&access_token=${process.env.secrets.INSTAGRAM_TOKEN}...`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Data couldnt be fetched");
    } else {
      return data;
    }
  };
  useEffect(() => {
    fetchData()
      .then((data) => {
        setMediaData(data);
        setSlicedArray(data.data.slice(0, 8));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setIsLoading(true);
      });
  }, []);
  return (
    <div className="instagram-wrapper">
      {isLoading ? (
        "Instagram API Loading!"
      ) : (
        <div className="ig-post-wrapper" >
          {slicedArray.map((item) => {
            return (
              <InstagramEmbed
                url={item.permalink}
                igVersion={14}
              
                height={700}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Instagram;
