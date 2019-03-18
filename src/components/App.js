import React, {Component} from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/YouTube'

class App extends Component {

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        }).then(response => console.log(response))
    }
    render(){
        return (
        <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        </div>)
    }
}

export default App