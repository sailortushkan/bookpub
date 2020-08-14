import React, { Component } from 'react';
import BookCard from '../BookCard'

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
          book: null,
          author: null,
      };
    }

    componentDidMount() {
        fetch('https://api.airtable.com/v0/app8QPpFH2bwTTvxH/Books?api_key=keyXFiwBMjZtYhcLw')
        .then((resp) => resp.json())
        .then(data => {
            this.setState({book: data.records[0].fields});
        }).catch(err => {
            // Error
        });

        fetch('https://api.airtable.com/v0/app8QPpFH2bwTTvxH/Authors?api_key=keyXFiwBMjZtYhcLw')
        .then((resp) => resp.json())
        .then(data => {
            this.setState({ author: data.records[0].fields});
        }).catch(err => {
            // Error
        });
    }

    render() {
        return (
            <BookCard {...this.state} />
        )
    }
  }



let book = {
    name: 'Walden. Life in the woods',
    annotation: 'The text is a reflection upon simple living in natural surroundings. The work is part personal declaration of independence, social experiment, voyage of spiritual discovery, satire, and — to some degree — a manual for self-reliance.',
    pages: 136,
    language: 'English',
    progress: 70,
    coverUrl: './Walden.jpg',
    author: {
        name: 'Henry David Thoreau',
        email: 'henry@thoreau.com',
        avatarUrl: './Henry_David_Thoreau.jpg',
        summary: 'Henry David Thoreau is an American essayist, poet, and philosopher-transcendentalist.'
    },
    price_minimum: 10,
    price_suggested: 15,
    sum_collected: 700,
    sum_expected: 1000
}

export default App;