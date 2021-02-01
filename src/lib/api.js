import axios from 'axios'

// const baseUrl = '/api'

// const withHeaders = () => {
//   return { headers: 'cfa0a716709cc25b3de1747cdbc12469'}
// }

export const getAllPhotos = () => {
  return axios.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json')
}