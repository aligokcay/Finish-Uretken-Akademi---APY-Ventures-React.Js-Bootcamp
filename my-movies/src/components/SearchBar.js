import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleFormSubmit} >
                <div className='form-row' style={{marginRight:'9%', marginLeft:'11.2%', marginBottom:'10px'}}>
                    <div className='col-9' style={{float:'left'}}>
                        <input 
                        onChange={this.props.searchMovieProp} 
                        type="text" className='form-control' 
                        placeholder='Search a movie'                       
                        />
                    </div>
                    <div className='col-2' style={{float:'right'}}>
                        <Link 
                            to='/add'
                            type='button'
                            className='btn btn-md btn-success'
                            >Add Movie
                        </Link>

                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;