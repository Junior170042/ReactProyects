import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';

const GetMovie = ({ _URL }) => {

    const [movies, setMovies] = useState({})
    const [loading, setLoading] = useState(false)
    let mounted = true;

    const ShowMovie = (movies) => {
        const path = "https://image.tmdb.org/t/p/w500"

        const verMovie = movie => {
            console.log(movie.title)
            return (
                <div className="col-10" key={movie.id} >
                    <h1 className="text-center my-4 single">{movie.title}</h1>
                    <div className="card mx-2 my-5 cards" >
                        <img className="card-img-top" src={path + movie.poster_path}
                            alt={movie.title} />
                        <div className="card-body text-center">
                            <h4 className="card-title titles">{movie.title}</h4>
                            <a href={movie.homepage} className="btn btn-primary btn-play"
                                target="_blank" rel="noopener noreferrer">
                                Trailler <i className="fa fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="d-flex justify-content-center">
                {verMovie(movies)}
            </div>


        )


    }


    useEffect(() => {

        const fetchMovies = async () => {

            setLoading(true)
            const getDatas = await fetch(_URL);
            const data = await getDatas.json()
            if (mounted) {

                setMovies(data)

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
            {
                movies && loading ? <Loading /> : ShowMovie(movies)
            }
        </>
    )

}

export default GetMovie