import React from 'react'
import './App.css'
import Home from '../pages/home'
import TopMovies from '../pages/top_movies'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'


const App:React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/top_movies" component={TopMovies} />
                    <Redirect to="/home" />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App