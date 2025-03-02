const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') } // Página inicial
    ]
  },

  {
    path: '/login',// Caminho atualizado para a tela de login
    // component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/login/login.vue') } // Página de login
    ]
  },

  // Rota para páginas não encontradas
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
