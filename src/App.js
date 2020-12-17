import { Component } from 'react';
import Card from './Components/Card';
import Form from './Components/Form'
import './App.css';

import data from './data'

class App extends Component {
  constructor() {
    super()

    this.state = {
      peopleList: data,
      currentCardIndex: 0,
      formOn: false,
    }
    this.nextCard = this.nextCard.bind(this)
    this.previousCard = this.previousCard.bind(this)
  }

  nextCard() {
    const index = this.state.peopleList[this.state.currentCardIndex + 1] ? this.state.currentCardIndex + 1 : 0
    this.setState({ currentCardIndex: index })
  }

  previousCard() {
    const index = this.state.peopleList[this.state.currentCardIndex - 1] ? this.state.currentCardIndex - 1 : this.state.peopleList.length - 1
    this.setState({ currentCardIndex: index })
  }

  handleEditClick = () => {
    this.setState({
      formOn: true,
      isEdit: true
    })
  }

  handleDeleteClick = () => {
    const copyIndex = this.state.currentCardIndex
    const newIndex = this.state.currentCardIndex + 1 === this.state.peopleList.length ? this.state.currentCardIndex - 1 : this.state.currentCardIndex
    this.setState({
      currentCardIndex: newIndex,
      peopleList: this.state.peopleList.filter((person, i) => i !== copyIndex)
    })
  }

  handleNewClick = () => {
    this.setState({
      formOn: true,
      isEdit: false
    })
  }

  newCard = (newPerson) => {
    this.setState({
      peopleList: [...this.state.peopleList, newPerson],
      formOn: false,
      isEdit: false
    })
  }

  newEdit = (newPerson) => {
    this.setState({
      peopleList: this.state.peopleList.map((e, i) => i === this.state.currentCardIndex ? Object.assign(e, newPerson) : e),
      formOn: false,
      isEdit: false
    })
  }

  render() {
    return (
      <div className="App">
        <header><h1>Home</h1></header>
        <main>
          <section>
            <h2>{this.state.currentCardIndex + 1} / {this.state.peopleList.length}</h2>
            {this.state.formOn ? (
              <Form card={this.state.peopleList[this.state.currentCardIndex]} newCard={this.newCard} newEdit={this.newEdit} isEdit={this.state.isEdit} />
            ) : (
                <Card card={this.state.peopleList[this.state.currentCardIndex]} />
              )
            }
          </section>
          <nav className="card-nav">
            <button id="previous" onClick={this.previousCard}>&lt; Previous</button>
            <div className="nav-edit">
              <button onClick={this.handleEditClick}>EDIT</button>
              <button onClick={this.handleDeleteClick}>DELETE</button>
              <button onClick={this.handleNewClick}>NEW</button>
            </div>
            <button id="next" onClick={this.nextCard}>Next &gt;</button>
          </nav>
        </main>
      </div>
    );
  }
}

export default App;
