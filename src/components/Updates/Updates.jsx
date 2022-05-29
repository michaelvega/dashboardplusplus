import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


const Updates = () => {
  return (
    <div className="Updates">
          <div className="update">
              <TwitterTweetEmbed
                  tweetId={'1521875379190853633'}
              />
          </div>
    </div>
  );
};

export default Updates;
