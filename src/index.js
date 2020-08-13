import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../dist/index.css';

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

function BookCard(props) {
    if (!props.book)
        return <div className='loading'>Loading...</div>;
    const { 
        name,
        coverUrl, 
        annotation,
        pages,
        language,
        progress,
        price_minimum,
        price_suggested,
        sum_collected,
        sum_expected
    } = props.book;
    return (
        <div className='book_card'>
            <div className='column'>
                <img src={coverUrl[0].url} alt={name} className='book_cover'></img>
            </div>
            <div className='column'>
                <h1 className='book_title'>{name}</h1>
                <p className='book_annotation'>{annotation}</p>
                <p className='book_spec'>{pages} pages, in {language}</p>
                <p className='book_spec'>{progress}% done</p>   
                <p className='funding'>${sum_collected} out of ${sum_expected} collected!</p>            
                <AuthorCard {...props.author} /> 
                <div className='book_prices_container'>
                    <div className='book_price'>
                        <p>${price_minimum}</p>
                        <p className='price_tag'>minimum price</p>
                    </div>
                    <div className='book_price'>
                        <p>${price_suggested}</p>
                        <p className='price_tag'>suggested price</p>
                    </div>
                </div>
                
                 <button className='grey_button'>Add to cart</button>
            </div> 
        </div>
    )
}

function AuthorCard(props) {
    if (!props.avatarUrl)
        return <div>Loading...</div>;
    const {
        name,
        email,
        summary,
        avatarUrl
    } = props;
    return (
        <div className='author_card'>
            <img src={avatarUrl[0].url} alt={name} className='avatar'></img>
            <div className='author_contacts'>
                <p className='author_contacts_item'>{name}</p>
                <p className='author_contacts_item'>{email}</p>
                <p className='author_contacts_item'>{summary}</p>
            </div>
        </div>
    )
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

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );