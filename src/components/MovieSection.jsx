import React from 'react';
import MovieCard from "./MovieCard";
import endpoints from "../endpoints";

function MovieSection() {
    return (
        <div>
            {endpoints.map((endpoint) => (
                <MovieCard url={endpoint.uri} title={endpoint.title} />
            ))}
        </div>
    )
}

export default MovieSection
