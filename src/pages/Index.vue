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

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "YYYY. MM. DD")
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
import SEO from "~/lib/seo.js";

export default {
  components: {
    PostCard,
    // Author
  },
  metaInfo() {
    const type = 'website';
    const title = 'Main';
    const siteName = this.$static.metadata.siteName;
    const description = '연봉은 책임질 순 없어도, 시간은 책임질 수 있는 개발 경험을 정리한 블로그';
    const url = this.$static.metadata.siteUrl;
    return {
      title: title,
      siteName : siteName,
      description : description,
      meta: SEO(
        type
      , url
      , siteName
      , siteName
      , description),
      link: [
        {rel : "canonical", href: url}
      ]
    }
  }
}
</script>