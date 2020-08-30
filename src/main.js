// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  head.htmlAttrs = { lang: 'ko' };
  head.meta.push({
    name : "viewport",
    "data-key" : "viewport",
    content : "width=device-width, initial-scale=1, viewport-fit=cover"
  })
  head.meta.push({
    name: "google-site-verification",
    content : "OVIHzNht7I3Mf9zXHubqGB4Mba-1dVDK_xqGAlXg9z8"
  })
}
