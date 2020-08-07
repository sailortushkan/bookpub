import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/index.css';

function BookCard(props) {
    return (
        <div className='book_card'>
            <div className='column'>
                <img src={props.bookinfo.coverUrl} className='book_cover'></img>
            </div>
            <div className='column'>
                <h1 className='book_title'>{props.bookinfo.name}</h1>
                <p className='book_annotation'>{props.bookinfo.annotation}</p>
                <p className='book_spec'>{props.bookinfo.pages} pages, in {props.bookinfo.language}</p>
                <p className='book_spec'>{props.bookinfo.progress}% done</p>   
                <p className='funding'>${props.bookinfo.sum_collected} out of ${props.bookinfo.sum_expected} collected!</p>            
                <AuthorCard authorinfo = {props.bookinfo.author} /> 
                <div className='book_prices_container'>
                    <div className='book_price'>
                        <p>${props.bookinfo.price_minimum}</p>
                        <p className='price_tag'>minimum price</p>
                    </div>
                    <div className='book_price'>
                        <p>${props.bookinfo.price_suggested}</p>
                        <p className='price_tag'>suggested price</p>
                    </div>
                </div>
                
                 <button className='grey_button'>Add to cart</button>
            </div> 
        </div>
    )
}

function AuthorCard(props) {
    return (
        <div className='authorcard'>
            <img src={props.authorinfo.avatarUrl} alt={props.authorinfo.name} className='avatar'></img>
            <div className='author_contacts'>
                <p className='author_contacts_item'>{props.authorinfo.name}</p>
                <p className='author_contacts_item'>{props.authorinfo.email}</p>
                <p className='author_contacts_item'>{props.authorinfo.summary}</p>
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
    <BookCard bookinfo={book} />,
    document.getElementById('root')
  );