// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fintech Enigma',
  tagline: 'Bindeleddet mellom ITØK-studenter og næringslivet',
  url: 'https://fintechenigmaweb.onrender.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/FE.svg',
  

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
          src: 'img/FE.svg',
          srcDark: 'img/FEdark.svg'
          // src: `
          //   <scipt>
          //   (() => {
          //     const theme = localStorage.getItem("theme");
          //     return theme === "dark" ? 'img/FEdark.svg' : 'img/FE.svg'
          //   })()
          //   </script>
          // `
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
            // title: 'Docs',
            items: [
              {
                html: `<a href="https://www.instagram.com/enigma.uib/" target="_blank"><img src="/img/Enigma-orginal-svg.svg" style="width: auto; height: 10rem;"></a>`
              },
              {
                html: 'Underordnet linjeforeningen <a href="https://www.instagram.com/enigma.uib/" style="color: #06ADF4;" target="_blank">Enigma</a>',
                // to: '/docs/Om Fintech Enigma',
              }
            ],
          },
          {
            title: 'Finn oss',
            items: [
              // {
              //   label: 'LinkedIn',
              //   href: '#',
              // },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/fintechenigma.uib/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/fintech-enigma',
              },
              {
                label: 'Fosswinckels gate 14, 5007 Bergen',
                href: 'https://goo.gl/maps/L6EmoWn5wHDZ9dj96'
              },
              {
                html: `<br>
                  <strong>Kontakt oss</strong>
                `
              },
              {
                label: "Epost",
                href: "mailto: fintechenigma@gmail.com"
              },
              {
                label: "Kontaktsjema",
                href: "/docs/Kontakt_oss"
              }
              // {
              //   label: 'Facebook',
              //   href: '#',
              // },
            ],
          },
          {
            title: 'Partnere',
            items: [
             {
               html: `
                  <a href="https://stacc.com" target="_blank"><img src="/img/stacc_logo_red-white.png" style="width: auto; height: 4rem;"></a>
                 `
              },
              // {
              //   html: `
              //     <a href="https://www.soprasteria.no/home" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sopra_Steria_logo.svg/2560px-Sopra_Steria_logo.svg.png" style="width: auto; height: 3rem;"></a>
              //   `
              // },
              // {
              //   html: `
              //     <a href="https://vizir.no/" target="_blank"><img src="/img/vizir.png" style="width: auto; height: 3rem;"></a>
              //   `
              // }
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
