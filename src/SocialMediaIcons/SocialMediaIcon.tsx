import * as React from "react";
import { LinkTarget, WmkLink } from "wmk-link";

interface SocialsProps {
  platform: { Icon: JSX.Element; name: string };
  url: string;
  target?: LinkTarget;
  className?: string;
}

const SocialMediaIcon = React.forwardRef<HTMLDivElement, SocialsProps>(
  ({ platform, url, target = "blank", className = "" }: SocialsProps, ref) => {
    const { Icon, name } = platform;
    const _className = name + (className !== "" ? " " + className : "");
    return (
      <WmkLink
        key={name}
        to={url}
        target={target}
        className={_className}
        ref={ref}>
        {Icon}
        <span className="sr-only sr-only-focusable visually-hidden visually-hidden-focusable">
          {"Visit " + name + " page"}
        </span>
      </WmkLink>
    );
  }
);

export default SocialMediaIcon;
