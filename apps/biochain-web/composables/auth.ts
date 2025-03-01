export function useAuth() {
  const nuxtApp = useNuxtApp()
  return nuxtApp.$auth
}
export const useLoggedIn = () => useState('loggedIn')

// const { $auth } = useNuxtApp();

export async function authLogin(username: string, password: string) {
  // const useLoggedIn = () => useState('loggedIn')
  try {
    const auth = useAuth()
    const result = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        password,
        username,
      },
    })
    useLoggedIn().value = true
    auth.redirectTo.value = ''
    await useAuth().refresh()
    await navigateTo(useAuth().redirectTo.value || '/')

    return result
  } catch (error) {
    console.error('Error in authLogin:', error)
  }
}

export async function authRegister(username: string, password: string) {
  await $fetch('/api/auth/register', {
    body: {
      password,
      username,
    },
    method: 'POST',
  })
  return await authLogin(username, password)
}

export async function authLogout() {
  const useLoggedIn = useState('loggedIn')

  await $fetch('/api/auth/logout', {
    method: 'POST',
  })
  useLoggedIn.value = false
  await useAuth().refresh()
}
