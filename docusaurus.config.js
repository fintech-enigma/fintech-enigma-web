// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fintech Enigma',
  tagline: 'Bindeleddet mellom ITØK-studenter og næringslivet',
  url: 'https://github.com/fintech-enigma/fintech-enigma-web',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/FEdark.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fintech-Enigma', // Usually your GitHub org/user name.
  projectName: 'Fintech-Enigma-Web', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
       },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Hjem',
        logo: {
          alt: 'FE Dark Logo',
          src: 'img/FEdark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Om Fintech Enigma',
            position: 'left',
            label: 'Om Fintech Enigma',
          },
          {to: '/docs/Vedtekter', label: 'Vedtekter', position: 'left'},
          // {to: '/docs/DN Graf', label: 'Portefølje', position: 'left'},
          {to: '/blog', label: 'Blogg', position: 'left'},
          {
            href: 'https://github.com/fintech-enigma',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Om Fintech Enigma',
                to: '/docs/Om Fintech Enigma',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: '#',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/fintechenigma.uib/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/fintech-enigma',
              },
              {
                label: 'Facebook',
                href: '#',
              },
            ],
          },
          {
            title: 'Partnere',
            items: [
              {
                html: `
                  <a href="https://stacc.com"><img src="https://verdane.com/uploads/2022/06/stacc-logo.png?x95825" style="width: auto; height: 4rem;"></a>
                `
              },
              {
                html: `
                  <a href="https://www.soprasteria.no/home"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sopra_Steria_logo.svg/2560px-Sopra_Steria_logo.svg.png" style="width: auto; height: 3rem;"></a>
                `
              },
              {
                html: `
                  <a href="https://vizir.no/"><img src="/img/vizir.png" style="width: auto; height: 3rem;"></a>
                `
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fintech Enigma. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
