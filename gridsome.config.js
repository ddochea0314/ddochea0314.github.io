// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '또치의 삽질 보관함 v2.0',
  siteDescription: 'C#과 .NET으로 먹고사는 개발자가 다른거 하고싶어서 Vuejs, Docker, DB 등등 마음가는대로 이것저것 익혀본 걸 끄적이는 블로그입니다.',
  siteUrl: 'https://ddochea0314.github.io',
  pathPremfix: '/',
  // titleTemplate: '%s', // https://gridsome.org/docs/config/#titletemplate
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
    }],
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
