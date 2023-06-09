import React from "react";

const MovieList = (props) => {

  const truncateOverview = (string, maxLength) => {
    if (!string) return null ;
    if (string.length <= maxLength) return string ;
    return `${string.substring(0, maxLength)} ...`;
  }

  return (
    <div className="row" style={{marginRight:'10%', marginLeft:'10%', marginTop:'20px'}}>
      {props.movies.map((movie, i) => (
        <div className="col-lg-4" key={i}>
          <div className="card mb-4 shadow-sm">
            <img src={movie.imageURL} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">{truncateOverview(movie.overview, 150)}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  onClick={(event) => props.deleteMovieProp(movie)}
                  className="btn btn- md btn-outline-danger"
                >
                  Delete
                </button>
                <h2>
                  <span className="badge bg-info">{movie.rating}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
