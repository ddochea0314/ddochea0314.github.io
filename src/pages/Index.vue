<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <!-- <Author :show-title="true" /> -->

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        path
        cover_image (width: 770, height: 380, blur: 10)
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "~/components/PostCard.vue";
// import Author from "~/components/Author.vue";

export default {
  components: {
    PostCard,
    // Author
  },
  metaInfo() {
    return {
      title: 'Home'
      // meta: [
      //   {
      //     key: 'google-site-verification',
      //     name: 'google-site-verification',
      //   },
      //   { property: "og:type", content: 'website' },
      //   { property: "og:title", content: this.$static.metadata.siteName },
      //   { property: "og:description", content: this.$static.metadata.siteDescription },
      //   { property: "og:url", content: this.$static.metadata.siteUrl }
      // ]
    }
  }
}
</script>