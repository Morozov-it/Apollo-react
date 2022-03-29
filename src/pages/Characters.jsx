import React from 'react';
import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../api/query';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

const Characters = () => {

    const { data = {
        characters: { results: [] }
    }, error, loading } = useQuery(GET_CHARACTERS)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Some error occuried</div>

    return (
        <>
        <Search />
        <div className='list'>
            {data.characters.results.map((char) =>
                <Link to={`/${char.id}`}
                    className='item'
                    key={char.id}>
                    <img src={char.image} alt="" />
                    <h4>{char.name}</h4>
                </Link>
            )}
        </div>
        </>
    )
}

export default Characters