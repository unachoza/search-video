import React, {Component} from 'react'

class SearchBar extends Component{
    state = { term: ''}

    handleInputChange = (e) => {
        this.setState({ term: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

    }
    render(){
        return (
        <div className="search-bar ui segment">
            <form onSubmit={this.handleSubmit}className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                    type="text" 
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    />
                </div>
            </form>
        </div>
        )
    }
}
export default SearchBar