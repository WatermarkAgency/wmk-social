/**
 * @jest-environment jsdom
 */

import SocialMediaIcon from "./SocialMediaIcon";
import { GrFacebook } from "react-icons/gr";
import renderer from "react-test-renderer";
import React from "react";

it("renders a Facebook icon hyperlink with accesible text", () => {
  const icon = renderer.create(
    <SocialMediaIcon
      platform={{ Icon: <GrFacebook />, name: "facebook" }}
      url="https://facebook.com"
    />
  );
  let tree = icon.toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  style={
    Object {
      "display": "inline",
    }
  }
>
  <a
    className="wmk-link wmk-link-anchor facebook"
    href="https://facebook.com"
    rel="noopener noreferrer"
    role="link"
    style={
      Object {
        "textDecoration": "none",
        "transition": "all 0.3s ease",
      }
    }
    target="_blank"
    title="Visit facebook page"
  >
    <svg
      fill="currentColor"
      height="1em"
      stroke="currentColor"
      strokeWidth="0"
      style={
        Object {
          "color": undefined,
        }
      }
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0"
        fillRule="evenodd"
      />
    </svg>
    <span
      className="sr-only sr-only-focusable visually-hidden visually-hidden-focusable"
    >
      Visit facebook page
    </span>
  </a>
</div>
`);
});
