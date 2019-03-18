import axios from 'axios'

const  KEY = 'AIzaSyAXHOexnafK3M6BSJrauy8IPR42v3_FOTw'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5, 
        key: KEY
    }
})