import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import ShowMovies from '../components/ShowMovies';
const GetMovies = ({ _URL }) => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    let mounted = true;

    useEffect(() => {

        const fetchMovies = async () => {
            const url2 = `https://api.themoviedb.org/3/search/movie?api_key=ce34f04e42f935f347ac371d31c2b114&query=superman`;

            setLoading(true)
            const getDatas = await fetch(_URL);

            const data = await getDatas.json();

            if (mounted) {

                setMovies(data.results)
                console.log(data.results)
                console.log(data.page)
                setLoading(false)
            }
            // eslint-disable-next-line 
            mounted = false;
        }

        fetchMovies()
        // eslint-disable-next-line 
    }, [_URL])

    return (
        <>
            <div className="row mx-auto">
                {loading ? <Loading /> : <ShowMovies movies={movies} />}
            </div>

        </>
    )

}

export default GetMovies
