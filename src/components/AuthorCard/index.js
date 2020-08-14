import React from 'react';

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

export default AuthorCard;