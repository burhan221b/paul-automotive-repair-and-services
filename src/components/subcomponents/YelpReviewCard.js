import React from 'react';
import '../../scss/YelpReviewCard.scss';
import 'font-awesome/css/font-awesome.min.css';

export default function YelpReviewCard({ name, quote, reviewlink}) {
    return (
        <div className="yelp-card">
            <section className="rating__card">
            <div className="rating__card__stars">
                <span className="rating__card__stars__name">5 out of 5 STARS review by <br/><strong>{name}</strong></span>
                <br />
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>                    
                </div>
                <blockquote className="rating__card__quote">{quote}</blockquote>
                <a href={reviewlink}><p className="rating__card__bottomText">Read more on Yelp!</p></a>
            </section>
        </div>
    )
}
