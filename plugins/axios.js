export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })

    $axios.onError(error => {
        if (error.response.status === 500) {
            redirect('/sorry')
        }
    })

    $axios.onError(error => {
        nuxtError({
            statusCode: error.response.status,
            message: error.message,
        });
        return Promise.resolve(false);
    })
}
