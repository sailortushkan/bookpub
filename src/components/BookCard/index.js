import React from 'react';
import AuthorCard from '../AuthorCard'

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

export default BookCard;