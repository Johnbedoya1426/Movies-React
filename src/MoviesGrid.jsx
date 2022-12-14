import React from "react"
import { MovieCard } from "./MovieCard"
import movies from "./movies.json"
import styles from "./MoviesGrid.module.css"

function MoviesGrid() {
    console.log(movies)
    return (
        <ul className={styles.moviesGrid}>
           {movies.map((movie) => 
            <MovieCard key={movie.id} movie={movie}/>
           )}
        </ul>
    )
}

export {MoviesGrid}