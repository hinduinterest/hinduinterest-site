module.exports = {
  siteTitle: 'Hindu Interest',
  siteDescription: 'Hindu Interest website',
  authorName: 'Hindu Interest',
  twitterUsername: 'hinduinterest',
  authorAvatar: 'HinduInterestIcon.png', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  `,
  siteUrl: 'https://hinduinterest.com',
  disqusSiteUrl: 'https://hinduinterest.disqus.com',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: 'HinduInterestCover.png', // file in content/images
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/HinduInterestIcon.png',
  postsPerPage: 20,
  disqusShortname: 'hinduinterest',
  //disqusShortname: '',
  headerTitle: 'Hindu Interest',
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    }
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about',
        },
      ],
    },
    {
      sectionName: 'Follow',
      links: [
        {
          label: 'Facebook',
          url: 'https://facebook.com/hinduinterest',
          rel: 'external',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/hinduinterest',
          rel: 'external',
        },
      ],
    },
  ],
}
