import React, { useEffect, useState } from 'react'
import ShowMovies from '../components/ShowMovies';

const GetMovies = ({ pelis = "Spiderman" }) => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    let mounted = true;


    useEffect(() => {

        const fetchMovies = async () => {
            setLoading(true)
            const getDatas = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ce34f04e42f935f347ac371d31c2b114&query=${pelis}`);

            const data = await getDatas.json();

            if (mounted) {

                setMovies(data.results)
                setLoading(false)
            }

            mounted = false;

        }

        fetchMovies()
    }, [pelis])

    return (
        <>

            {
                loading ? 'loading' : <ShowMovies movies={movies} />

            }

        </>
    )

}

export default GetMovies
