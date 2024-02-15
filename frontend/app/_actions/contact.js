
import API_URL from '@/services'
import axios from 'axios'



export const getSocialLinks = () => {
    return axios.get(API_URL + 'about/social/').then(async (soc) => await soc.data)
}