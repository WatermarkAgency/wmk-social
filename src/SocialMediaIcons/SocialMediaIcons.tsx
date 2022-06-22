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

export const PLATFORMS = {
  FACEBOOK: "facebook",
  TWITTER: "twitter",
  LINKEDIN: "linkedin",
  YOUTUBE: "youtube",
  INSTAGRAM: "instagram",
  PINTEREST: "pinterest",
  YELP: "yelp",
  MEDIUM: "medium",
  REDDIT: "reddit",
  SNAPCHAT: "snapchat",
  SPOTIFY: "spotify",
  TUMBLR: "tumblr",
  VIMEO: "vimeo",
  TIKTOK: "tiktok",
  BEHANCE: "behance",
  FLICKR: "flickr",
  HOUZZ: "houzz"
} as const;

export type SocialPlatforms = typeof PLATFORMS[keyof typeof PLATFORMS];

export interface SocialIconQuery {
  title: SocialPlatforms | string;
  url: string;
  target?: LinkTarget;
}

export interface SocialPlatformFields {
  name: string;
}

export const defaultPlatforms = {
  [PLATFORMS.FACEBOOK]: <GrFacebook />,
  [PLATFORMS.TWITTER]: <GrTwitter />,
  [PLATFORMS.LINKEDIN]: <GrLinkedin />,
  [PLATFORMS.YOUTUBE]: <GrYoutube />,
  [PLATFORMS.INSTAGRAM]: <GrInstagram />,
  [PLATFORMS.PINTEREST]: <GrPinterest />,
  [PLATFORMS.YELP]: <FaYelp />,
  [PLATFORMS.MEDIUM]: <GrMedium />,
  [PLATFORMS.REDDIT]: <GrReddit />,
  [PLATFORMS.SNAPCHAT]: <GrSnapchat />,
  [PLATFORMS.SPOTIFY]: <GrSpotify />,
  [PLATFORMS.TUMBLR]: <GrTumblr />,
  [PLATFORMS.VIMEO]: <GrVimeo />,
  [PLATFORMS.TIKTOK]: <FaTiktok />,
  [PLATFORMS.BEHANCE]: <FaBehance />,
  [PLATFORMS.FLICKR]: <FaFlickr />,
  [PLATFORMS.HOUZZ]: <FaHouzz />
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
  const getPlatform = (platform: string): JSX.Element => {
    const down = platform.toLocaleLowerCase();
    if (!(down in platforms)) {
      console.log(`Error: No Icon in platform definition for ${down}`);
    }
    return down in platforms ? platforms[down] : undefined;
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
