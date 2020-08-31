<template>
  <div class="layout">
    <header class="header">
      <div class="header__left">
        <!-- <Logo v-if="showLogo" />  -->
      </div>
      
      <div class="header__right">        
        <ToggleTheme />
      </div>
    </header>
    <div class="container">
      <div class="aside">
        <div class="wrapper">
          <Author showTitle="true" />
        </div>
      </div>
      <main id="main" class="main">
        <slot/>
      </main>
    </div>

    <footer class="footer">
      <span class="footer__copyright">Copyright ddochea {{ new Date().getFullYear() }}. </span>
      <span class="footer__links">Powered by <a href="//gridsome.org"> Gridsome </a></span>
    </footer>

  </div>
</template>

<script>

import Author from "~/components/Author.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Author,
    ToggleTheme
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}
.container {
  @media screen and (min-width:1300px) {
    margin: 0 auto;
    width:1280px;
    display: flex;
  }
}
.aside {
  @media screen and (min-width: 1300px) {
    width:340px;
    margin: 0 auto;
    padding: calc(var(--space) / 2) 0;
    .wrapper {
      top:0;
      position: sticky;
    }
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
  // @media screen and (min-width: 1300px) {
  //   margin-right: 0;
  // }
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>
