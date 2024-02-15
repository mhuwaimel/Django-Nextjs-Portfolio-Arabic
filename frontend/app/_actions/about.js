
import API_URL from '@/services'
import axios from 'axios'



export const getAboutInfo = () => {
    return axios.get(API_URL + 'about/').then(async (product) => await product.data)
}
