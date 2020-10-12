// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '또치의 삽질 보관함 v2.0',
  // siteDescription: '연봉은 책임질 순 없어도, 시간은 책임질 수 있는 개발 경험을 정리한 블로그', // 페이지 전체에 description 를 해당문자열로 다 적용시킴. 따라서 주석처리
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
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: '또치의 삽질 보관함 v2.0',
          feed_url: 'https://ddochea0314.github.io/rss.xml',
          site_url: 'https://ddochea0314.github.io'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://ddochea0314.github.io/' + node.id,
          author: "ddochea0314"
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
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
