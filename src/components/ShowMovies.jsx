import React from 'react'

const ShowMovies = ({ movies }) => {

    const verMovies = movie => {
        return (

            <div key={movie.id}>
                <h1>{movie.title}</h1>
            </div>

        )
    }
    return (
        <>

            {movies.length !== 0 ? movies.map(movie => {
                return verMovies(movie)

            }) : ''
            }


        </>


    )
}

export default ShowMovies
