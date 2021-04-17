export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
          Accept: 'text/plain, */*'
        }
      }
    })
    
    this.$axios.setBaseURL('https://localhost:44382')

    // Change URL only for client
    if (process.client) {
      this.$axios.setBaseURL('https://localhost:44382')
    }
    
    // Change URL only for server
    if (process.server) {
      this.$axios.setBaseURL('https://localhost:44382')
    }

    inject('api', api)
  }
  