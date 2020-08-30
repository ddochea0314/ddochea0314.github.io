// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '또치의 삽질 보관함 v2.0',
  siteDescription: '시간과 삽을 연성하여 뻘짓을 만드는 놀라움을 선보이는 곳',
  siteUrl: 'https://ddochea0314.github.io',
  pathPremfix: '/',
  titleTemplate: '%s', // https://gridsome.org/docs/config/#titletemplate
  icon: './src/favicon.png', // https://gridsome.org/docs/config/#icon
  templates: {
    Post: '/:id',
    Tag: '/tag/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'contents/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-seo'
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
