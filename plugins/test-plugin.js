export default defineNuxtPlugin((nuxtApp) =>{
  return {
    provide: {
      testPlugin: (name) => `hello ${name}`
    }
  }
})
