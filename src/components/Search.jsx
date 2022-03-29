import { useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'
import { GET_CHARACTER_LOCATIONS } from '../api/query'


const Search = () => {
    const [ value, setValue ] = useState('')
    const [ getLocations, {loading, error, data} ] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name: value
        }
    })

    const handler = () => {
        if (value) {
            getLocations()
        }
    }

    return (
        <div className='search'>
            <div className='input'>
                <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder='find...'
                type="text" />
            <button onClick={handler}>search</button>
            </div>
            {loading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {data && (
                <ul>
                    {data.characters.results.map((char, i) =>
                        <li key={i}>{char.location.name}</li>
                    )}
                </ul>
            )}
        </div>
    )
}

export default Search