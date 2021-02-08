import React from 'react';
import {
  InputGroup,
  Input,
  Button,
 } from 'reactstrap';
 import './search-panel.css'

 const SearchPanel = () => {
     
        function Test () {
                return fetch("https://imdb8.p.rapidapi.com/title/auto-complete?q=Game%20of%20thr", {
                            "method": "GET",
                            "headers": {
                                "x-rapidapi-key": "3df338080emsh92d698037ad94dfp1cfa71jsn376770128608",
                                "x-rapidapi-host": "imdb8.p.rapidapi.com"
                            }
                            })
                            .then(response => {
                                return response.json();
                            })
                            .then(response => {
                                console.log(response.d[0].s)
                            })
                            .catch(err => {
                                console.error(err);
                            })
                        }
     return (
         <div className = "search-panel">
            <InputGroup>
                <Input placeholder = "Поиск по новостям..." />   
                <Button color = "info" onClick = {Test}>Поиск</Button>
            </InputGroup>
      <br />
         </div>
     )
 }

 export default SearchPanel