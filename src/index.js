import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/index.css';

function BookCard(props) {
    const { 
        name, 
        annotation, 
        pages, 
        language, 
        progress,
        coverUrl, 
        author, 
        price_minimum, 
        price_suggested, 
        sum_collected, 
        sum_expected 
    } = props.bookinfo;
    return (
        <div className='book_card'>
            <div className='column'>
                <img src={coverUrl} className='book_cover'></img>
            </div>
            <div className='column'>
                <h1 className='book_title'>{name}</h1>
                <p className='book_annotation'>{annotation}</p>
                <p className='book_spec'>{pages} pages, in {language}</p>
                <p className='book_spec'>{progress}% done</p>   
                <p className='funding'>${sum_collected} out of ${sum_expected} collected!</p>            
                <AuthorCard authorinfo = {author} /> 
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
    const { name, email, avatarUrl, summary } = props.authorinfo;
    return (
        <div className='author_card'>
            <img src={avatarUrl} alt={name} className='avatar'></img>
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
    <BookCard bookinfo={book} />,
    document.getElementById('root')
  );