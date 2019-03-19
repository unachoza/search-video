import React, {Component} from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/YouTube'
import VideoList from './VideoList' 

class App extends Component {
    state = { videos : [], selectedVideo: null }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({videos: response.data.items})
    }

    onVideoSelect = video => {
        console.log( 'frome App', video)
    }
    render(){
        return (
        <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        </div>)
    }
}

export default App