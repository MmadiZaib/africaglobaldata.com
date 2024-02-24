// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Africa Global Data",
  tagline: "Libérez le pouvoir de la data et façonnez l’avenir avec sagesse",
  url: "https://africaglobaldata.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "main",
  favicon: "img/logo-dfg-new.png",
  organizationName: "africaglobaldata", // Usually your GitHub org/user name.
  projectName: "africaglobaldata.com", // Usually your repo name.
  plugins: [
    // require.resolve('docusaurus-lunr-search'),
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "projects",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "projects",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./projects",
        postsPerPage: "ALL",
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Africa Global Data",
        logo: {
          alt: "Africa Global Data Logo",
          src: "img/logo-dfg-new2.png",
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'dataforgood',
          //   position: 'left',
          //   label: "🌎 Qui sommes-nous ?",
          // },
          {
            to: "#",
            label: "🌎 Qui sommes-nous ?",
            position: "left",
          },
          {
            label: "⭐ Projets",
            position: "left",
            dropdownActiveClassDisabled: true,
            items: [
              {
                label: "Tous les projets",
                to: "/projects",
              },
              {
                label: "Saison 12",
                to: "/projects/tags/saison-12",
              },
              {
                label: "Saison 11",
                to: "/projects/tags/saison-11",
              },
              {
                label: "Saison 10",
                to: "/projects/tags/saison-10",
              },
              {
                label: "Le serment d'Hippocrate du Data Scientist",
                to: "/hippocrate",
              },
              {
                label: "Les projets qui ont besoin d'aide",
                to: "https://dataforgood.notion.site/Trouver-un-projet-6244df9394d048fca5e7350260919c8c",
              },
            ],
          },
          { to: "/blog", label: "📚 Blog", position: "left" },
          { to: "/iagenerative", label: "🤖 IA Générative", position: "left" },
          {
            to: "/join",
            label: "💪 Rejoindre la communauté",
            className: "button button--secondary button--lg button-navbar",
            position: "right",
          },
          {
            to: "/propose",
            label: "💡 Proposer un projet",
            className: "button button--secondary button--lg button-navbar",
            position: "right",
          },
//          {
//            to: "#",
//            label: "👏 Faire un don",
//            className: "button button--secondary button--lg button-navbar",
//            position: "right",
//          },
          // {
          //   href: 'https://dataforgood.slite.com/p/channel/F9UR6bhuYCPAtvfLDje8Zc/notes/p8MSVDq6k',
          //   label: 'FAQ',
          //   position: 'right',
          // },
          {
            href: "#",
            className: "header-github-link",
            position: "right",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Pages",
            items: [
              {
                label: "L'association Africa Global Data",
                to: "#",
              },
              {
                label: "Serment d'Hippocrate",
                to: "/hippocrate",
              },
              {
                label: "FAQ",
                to: "#",
              },
              {
                label: "Politique de confidentialité",
                to: "/confidentialite",
              },
            ],
          },
          {
            title: "Liens externes",
            items: [
              {
                label: "GitHub",
                href: "https://africaglobaldata.com",
              },
              {
                label: "Youtube",
                href: "https://africaglobaldata.com",
              },
            ],
          },
          {
            title: "Mais aussi",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Notion",
                href: "https://africaglobaldata.com",
              },
              {
                label: "Linkedin",
                href: "https://africaglobaldata.com",
              },
              {
                label: "Instagram",
                href: "https://africaglobaldata.com",
              },
              {
                label: "Twitter",
                href: "https://africaglobaldata.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Africa Global Data`,
      },
      // announcementBar: {
      //   id: 'announcementBar-2', // Increment on change
      //   content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus" >Twitter</a>`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
