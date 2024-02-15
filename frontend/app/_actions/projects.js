
import API_URL from '@/services'
import axios from 'axios'



export const getProjects = () => {
    return axios.get(API_URL + 'projects/').then(async (product) => await product.data)
}
export const getProjectDetails=(id)=>{
    return axios.get(API_URL + 'projects/'+id+'/').then(async (product) => await product.data)

}