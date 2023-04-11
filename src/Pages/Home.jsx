import { useEffect } from "react"
export const Home = ({loadMovies}) => {

    useEffect(() => {

        let movies = loadMovies()

        console.log(movies)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    return (
        <div>
            <p>Home-page</p>
        </div>
    )
}