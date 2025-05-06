import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "The Ahmad",
  DESCRIPTION:
    "Welcome to Rabiu Ahmad's, portfolio, this resource contains details you need to know about Ahmad as a Software Developer and Engineer.",
  AUTHOR: "Rabiu Ahmad",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "mail@theahmad.me",
    HREF: "mailto:therabiuahmad@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "dd3vahmad",
    HREF: "https://github.com/dd3vahmad",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Ahmad Rabiu",
    HREF: "https://www.linkedin.com/in/rabiuahmad/",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "dd3vahmad",
    HREF: "https://x.com/dd3vahmad",
  },
];
