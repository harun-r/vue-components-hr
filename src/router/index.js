import { createRouter, createWebHistory } from 'vue-router'
import ComponentsShowcase from "@/views/components-showcase/ComponentsShowcase.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'ComponentsShowcase',
      component: ComponentsShowcase,
    }
  ]
})

export default router
