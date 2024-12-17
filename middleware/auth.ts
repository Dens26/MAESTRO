export default defineNuxtRouteMiddleware((to, from) => {
    const profilStore = useProfilStore()
    const isAuthenticated = computed(() => profilStore.isAuthenticated)
  
    if (!isAuthenticated.value) {
      return navigateTo('/login')
    }
  })