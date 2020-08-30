<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>

      <PostMeta :post="$page.post" />

    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div id="comments" class="post-comments">
      <!-- Add comment widgets here -->
    </div>

    <!-- <Author class="post-author" /> -->
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
// import Author from '~/components/Author.vue'

export default {
  components: {
    // Author,
    PostMeta,
    PostTags
  },
  metaInfo() {
    return this.$seo({
      title: this.$page.post.title,
      siteName : this.$static.metadata.siteName,
      description: this.$page.post.description,
      keywords: this.$page.post.tags.map(t => t.title).join(",")
    })
  },
  mounted() {
    const script = window.document.createElement("script");
    const utterance = window.document.getElementById('comments');
    const attrs = {
      src : 'https://utteranc.es/client.js',
      repo : 'ddochea0314/ddochea0314.github.io',
      "issue-term": `(${this.$page.post.date}) - ${this.$page.post.title}`,
      theme : "github-light",
      crossorigin: "anonymous",
      async : true
    }
    Object.entries(attrs).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
    utterance.appendChild(script);
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    date (format: "D. MMMM YYYY")
    timeToRead
    path
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    // p:first-of-type {
    //   font-size: 1.2em;
    //   color: var(--title-color);
    // }

    img {
      // width: calc(100% + var(--space) * 2);
      // margin-left: calc(var(--space) * -1);
      width:100%;
      display: block;
      max-width: none;
      box-shadow: 1px 1px 5px 0 rgba(0,0,0,.04), 1px 1px 15px 0 rgba(0,0,0,.06);
    }
    span.img-title {
      text-align:center;
      display:block;
      font-size:.8em;
    }
    span.line-through {
      text-decoration: line-through;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
