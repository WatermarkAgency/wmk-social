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
    return Icon ? (
      <WmkLink
        key={name}
        to={url}
        target={target}
        className={_className}
        ref={ref}
        title={"Visit " + name + " page"}>
        {Icon}
        <span className="sr-only sr-only-focusable visually-hidden visually-hidden-focusable">
          {"Visit " + name.toLocaleLowerCase() + " page"}
        </span>
      </WmkLink>
    ) : null;
  }
);

export default SocialMediaIcon;
