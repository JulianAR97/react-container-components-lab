import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(URL + '&query=' + this.state.searchTerm).then(resp => resp.json()).then(data => this.setState({reviews: data.results}))
  }
  
  render() {
    console.log(this.state.searchTerm)
    return (
      <div className="searchable-movie-reviews">
        <h2>Search Movie Reviews </h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search-term" id="search-term" onChange={this.handleChange}/>
          <input type="submit" value="Search" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
