/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { defaultPlatforms, SocialMediaIcons } from "./SocialMediaIcons";
import { render, screen } from "@testing-library/react";
import { FaAmazon } from "react-icons/fa";

//Enzyme.configure({ adapter: new EnzymeAdapter() });

describe(" <SocialMediaIcons />", () => {
  it("Renders default social media icons properly with exact matching names and accessible text", () => {
    render(
      <SocialMediaIcons
        socials={[
          { title: "facebook", url: "https://facebook.com" },
          { title: "twitter", url: "https://twitter.com" }
        ]}
      />
    );
    //screen.debug();

    expect(screen.getByText("Visit twitter page")).toBeTruthy();
    expect(screen.getAllByRole("link").length).toBe(2);
  });

  it("Renders renders default social media icons properly with case-insensitive matching names", () => {
    render(
      <SocialMediaIcons
        socials={[
          { title: "BEhAnCe", url: "https://behance.com" },
          { title: "fliCKR", url: "https://flickr.com" },
          { title: "VIMEO", url: "https://vimeo.com" }
        ]}
      />
    );
    //screen.debug();

    expect(screen.getByText("Visit vimeo page")).toBeTruthy();
    expect(screen.getAllByRole("link").length).toBe(3);
  });

  it("Does not render an icon with an undefined name", () => {
    render(
      <SocialMediaIcons
        socials={[
          { title: "facebook", url: "https://facebook.com" },
          { title: "onlyfans", url: "https://onlyfans.com" },
          { title: "twitter", url: "https://twitter.com" }
        ]}
      />
    );

    expect(screen.getByText("Visit twitter page")).toBeTruthy();
    expect(screen.getAllByRole("link").length).toBe(2);
  });

  it("Will render a custom defined Icon", () => {
    render(
      <SocialMediaIcons
        socials={[
          { title: "facebook", url: "https://facebook.com" },
          { title: "amazon", url: "https://amazon.com" },
          { title: "twitter", url: "https://twitter.com" }
        ]}
        platforms={{ ...defaultPlatforms, amazon: <FaAmazon /> }}
      />
    );

    expect(screen.getByText("Visit amazon page")).toBeTruthy();
    expect(screen.getAllByRole("link").length).toBe(3);
  });
});
