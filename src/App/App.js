import React from 'react'
import './App.css'
import Home from '../pages/home'
import TopMovies from '../pages/top_movies'
import { BrowserRouter, Route } from 'react-router-dom'


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/home" component={Home} />
                <Route path="/top_movies" component={TopMovies} />
            </BrowserRouter>
        </div>
    )
}

export default App