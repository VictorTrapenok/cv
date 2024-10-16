import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "I'm searching new remote job",
  tagline: "Full-time / Part-time / Contract / C2C / Remote",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://viktor-t.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "VictorTrapenok", // Usually your GitHub org/user name.
  projectName: "cv", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/viktor-t-social-card.jpg",
    navbar: {
      title: "Trapenok Viktor",
      logo: {
        alt: "Trapenok Viktor - Principal Software Engineer",
        src: "img/me.jpeg",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        {
          href: "https://viktor-t.com/mails/TrapenokViktor-CV.pdf",
          label: "Resume",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "html",
          position: "right",
          value: `<a onClick="window.gtag_report_conversion('https://www.linkedin.com/in/victor-trapenok/'); return false;"
          href="https://www.linkedin.com/in/victor-trapenok/" target="_blank" rel="noopener noreferrer"
           class="navbar__item navbar__link">LinkedIn<svg 
           width="13.5" height="13.5" aria-hidden="true" 
           viewBox="0 0 24 24" 
           class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>`,
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Tutorial",
        //       to: "/docs/intro",
        //     },
        //   ],
        // },
        {
          title: "Contacts",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/victor-trapenok/",
            },
            {
              label: "Github",
              href: "https://github.com/VictorTrapenok",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/79244269357",
            },
            {
              label: "Telegram",
              href: "https://t.me/levhav",
            },
            {
              label: "Levhav@gmail.com",
              href: "mailto:Levhav@gmail.com",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "My blog",
              to: "/blog",
            },
            {
              label: "My resume",
              href: "https://viktor-t.com/mails/TrapenokViktor-CV.pdf",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Trapenok Viktor`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
