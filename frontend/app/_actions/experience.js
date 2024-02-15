
import API_URL from '@/services'
import axios from 'axios'



export const getExperience = () => {
    return axios.get(API_URL + 'experience/').then(async (experience) => await experience.data)
}