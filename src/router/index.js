import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'
import Guide from '@/components/Guide'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/example',
      name: 'Example',
      component: Example  // conponents - <script>name
    },
    {
      path: '/todo',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    }
  ]
});
