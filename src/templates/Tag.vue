<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.tag.title }}
    </h1>

    <div class="posts">
      <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "YYYY. MM. DD")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
// import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import SEO from "~/lib/seo.js";

export default {
  components: {
    // Author,
    PostCard
  },
  metaInfo() {
    const type = 'website';
    const title = `'${this.$page.tag.title}' 태그 글 목록 - ${this.$static.metadata.siteName}`;
    const siteName = this.$static.metadata.siteName;
    const description = title;
    const keywords = this.$page.tag.title;
    const url = `${this.$static.metadata.siteUrl}/tag/${this.$page.tag.title}`;
    return {
      title: title,
      siteName : siteName,
      description: description,
      keywords: keywords,
      meta: SEO(
        type
      , url
      , siteName
      , title
      , description
      , keywords),
      link: [
        {rel : "canonical", href: url}
      ]
    }
  },
}
</script>

<style lang="scss">

</style>

