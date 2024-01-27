import { Component } from "react";

class Searchbar extends Component {
    state = { 
        search:""
    } 

    handleChange = ({target}) => {
        const {name, value}=target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({...this.state});
        this.setState({
            search:""
        })
    }




    render() {
        const {handleChange, handleSubmit}=this; 
        const {search}=this.state;

        return (
            <header className="searchbar">
                <form onSubmit={handleSubmit} className="form" >
                    <button type="submit" className="button">
                    <span className="button-label">Search</span>
                    </button>

                    <input 
                    value={search}
                    name="search"
                    onChange={handleChange}
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
        </form>
    </header>
        );
    }
}
 
export default Searchbar;