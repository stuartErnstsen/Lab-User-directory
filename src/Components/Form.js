import { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.isEdit ? (this.props.card.name ? this.props.card.name : { first: '', last: '' }) : { first: '', last: '' },
            city: props.isEdit ? (this.props.card.city ? this.props.card.city : '') : '',
            country: props.isEdit ? (this.props.card.country ? this.props.card.country : '') : '',
            title: props.isEdit ? (this.props.card.title ? this.props.card.title : '') : '',
            employer: props.isEdit ? (this.props.card.employer ? this.props.card.employer : '') : '',
            favoriteMovies: props.isEdit ? (this.props.card.favoriteMovies ? this.props.card.favoriteMovies : []) : [],
            movieInput: ''
        }
    }
    handleFirstNameChange = (e) => {
        this.setState({ name: Object.assign(this.state.name, { first: e.target.value }) })
    }

    handleLastNameChange = (e) => {
        this.setState({ name: Object.assign(this.state.name, { last: e.target.value }) })
    }

    handleCityChange = (e) => {
        this.setState({ city: e.target.value })
    }

    handleCountryChange = (e) => {
        this.setState({ country: e.target.value })
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value })
    }

    handleEmployerChange = (e) => {
        this.setState({ employer: e.target.value })
    }

    handleMovieChange = (e) => {
        this.setState({ movieInput: e.target.value })
    }

    addMovie = (e) => {
        e.preventDefault()
        this.setState({
            favoriteMovies: [...this.state.favoriteMovies, this.state.movieInput],
            movieInput: ''
        })
    }

    removeMovie = (i) => {
        this.setState({ favoriteMovies: this.state.favoriteMovies.filter((e, index) => index !== i) })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.isEdit ? this.props.newEdit(this.state) : this.props.newCard(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>Name:</label><input value={this.state.name.first} onChange={e => this.handleFirstNameChange(e)} placeholder='Enter First Name' />
                    <input value={this.state.name.last} onChange={e => this.handleLastNameChange(e)} placeholder='Enter Last Name' />
                    <br />
                    <label>From:</label><input value={this.state.city} onChange={e => this.handleCityChange(e)} placeholder="Enter City" />
                    <input value={this.state.country} onChange={e => this.handleCountryChange(e)} placeholder="Enter Country" />
                    <br />
                    <label>Job Title:</label><input value={this.state.title} onChange={e => this.handleTitleChange(e)} placeholder="Enter Job Title" />
                    <br />
                    <label>Employer:</label><input value={this.state.employer} onChange={e => this.handleEmployerChange(e)} placeholder="Enter Employer" />
                    <br />
                    <label>Favorite Movies:</label><input value={this.state.movieInput} onChange={e => this.handleMovieChange(e)} placeholder="Enter Movie to be added to Favorites" />
                    <button onClick={(e) => this.addMovie(e)}>Add Movie</button>
                    <br />
                    <ol>
                        {this.state.favoriteMovies.map((movie, i) => {
                            return <li key={i} onClick={() => this.removeMovie(i)}>{movie}</li>
                        })}
                    </ol>
                    <p>^^ Click on Movies Above to remove them from list ^^</p>
                    {this.props.isEdit ? (
                        <button type="submit">Save Edited Person</button>
                    ) : (
                            <button type="submit">Add New Person</button>
                        )}
                </form>
            </div>
        )
    }

}

export default Form;