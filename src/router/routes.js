import MainLayout from "layouts/MainLayout";
import Index from 'pages/Index'
import Error404 from "pages/Error404";
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Index }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: Error404
  }
]

export default routes
