import * as React from "react";
import SocialMediaIcon from "./SocialMediaIcon";
import { wmkClass } from "../logic";
import { LinkTarget } from "wmk-link";
import {
  GrFacebook,
  GrInstagram,
  GrLinkedin,
  GrMedium,
  GrPinterest,
  GrReddit,
  GrSnapchat,
  GrSpotify,
  GrTumblr,
  GrTwitter,
  GrVimeo,
  GrYoutube
} from "react-icons/gr";
import { FaBehance, FaFlickr, FaHouzz, FaTiktok, FaYelp } from "react-icons/fa";

export interface SocialIconQuery {
  title: string;
  url: string;
  target?: LinkTarget;
}

export interface SocialPlatformFields {
  name: string;
}

export const defaultPlatforms = {
  facebook: <GrFacebook />,
  twitter: <GrTwitter />,
  linkedin: <GrLinkedin />,
  youtube: <GrYoutube />,
  instagram: <GrInstagram />,
  pinterest: <GrPinterest />,
  yelp: <FaYelp />,
  medium: <GrMedium />,
  reddit: <GrReddit />,
  snapchat: <GrSnapchat />,
  spotify: <GrSpotify />,
  tumblr: <GrTumblr />,
  vimeo: <GrVimeo />,
  tiktok: <FaTiktok />,
  behance: <FaBehance />,
  flickr: <FaFlickr />,
  houzz: <FaHouzz />
};

export const SocialMediaIcons = ({
  socials,
  platforms = defaultPlatforms,
  className = ""
}: {
  socials: SocialIconQuery[];
  platforms?: { [key: string]: JSX.Element };
  className?: string;
}) => {
  const getPlatform = (platform: string) => {
    const p = platform.toLocaleLowerCase();
    return p in platforms ? (
      platforms[p]
    ) : (
      <>{console.log(`Error: No Icon in platform definition for ${p}`)}</>
    );
  };
  const _className = wmkClass("icon", "social", className);
  return (
    <div>
      {socials.map((icon) => {
        const { title, url, target } = icon;
        const platform = getPlatform(title);
        return (
          <SocialMediaIcon
            platform={{ name: title, Icon: platform }}
            url={url}
            target={target}
            className={_className}
            key={title + "-icon"}
          />
        );
      })}
    </div>
  );
};
