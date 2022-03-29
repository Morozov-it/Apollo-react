import React from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_CHARACTER } from '../api/query';



const Character = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const { data, error, loading } = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    })

    if (loading) return <div>Loading...</div>
    if (error) return <div>Some error occuried</div>

    return (
        <>
        <div className='card'>
            <div className='image'>
                <img src={data.character.image} alt="" />
            </div>
            <div className='content'>
                <h3>{data.character.name}</h3>
                <div className='episode'>
                    {data.character.episode.map((e, i) => 
                        <div key={i}>
                            {e.name} - <b>{e.episode}</b>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <button onClick={()=> navigate('/')}>back</button>
        </>
    )
}

export default Character