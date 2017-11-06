import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _741f5f78 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _2a9909d8 = () => import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages\\users\\index" */).then(m => m.default || m)
const _4d659b08 = () => import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages\\users\\_id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _741f5f78,
			name: "index"
		},
		{
			path: "/users",
			component: _2a9909d8,
			name: "users"
		},
		{
			path: "/users/:id",
			component: _4d659b08,
			name: "users-id"
		}
    ],
    fallback: false
  })
}
