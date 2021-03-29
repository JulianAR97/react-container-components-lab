// Code MovieReviews Here
import React from 'react';

const Review = ({byline, link, summary_short}) => (
  <div className="review">
    <a href={link.url}>{link.suggested_link_text}</a>
    <p>By: {byline}</p>
    <p>{summary_short}</p>
    <br />
  </div>
)

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
)

export default MovieReviews;
