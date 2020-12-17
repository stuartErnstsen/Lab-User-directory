import { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <h2>{`${this.props.card.name.first} ${this.props.card.name.last}`}</h2>
                <h3><span>From: </span>{`${this.props.card.city}, ${this.props.card.country}`}</h3>
                <h3><span>Job Title: </span>{this.props.card.title}</h3>
                <h3><span>Employer: </span>{this.props.card.employer}</h3>
                <h3 id="movie"><span>Favorite Movies:</span></h3>
                <ol>
                    {this.props.card.favoriteMovies.map((movie, i) => {
                        return <li key={i}>{movie}</li>
                    })}
                </ol>
            </div>
        )
    }
}

export default Card;