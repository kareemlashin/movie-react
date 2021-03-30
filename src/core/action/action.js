import axios from 'axios'
import i18next from 'i18next'

const Types = {
    get: '',
    spinner: 'spinner',
    message: 'message',
    loadingPage: 'loadingPage',
    nav: 'nav',
    mode: ''
}
export const nav = (margin) => {
    return (dispatch) => {
        dispatch({
            type: 'nav',
            nav: margin
        })
    }
}
export const modePage = (mode) => {
    return (dispatch) => {
        dispatch({
            type: 'mode',
            mode: mode
        })
    }
}

export const getEgypt = () => {

    return (dispatch) => {

        axios
            .get(`https://covid19.mathdro.id/api/countries/egypt/confirmed`)
            .then(res => {
                dispatch({
                    type: 'egypt',
                    egypt: res.data[0]
                })

                    dispatch({
                        type: 'loadingPage',
                        loadingPage: false
                    })

            }).catch(err => {
                    dispatch({
                        type: 'loadingPage',
                        loadingPage: false
                    })

            })
    }
}