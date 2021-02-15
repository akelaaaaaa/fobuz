import React from 'react';
import {
    InputGroup,
    Input,
    Button,
} from 'reactstrap';
import './SearchPanel.css'
import axios from "axios"

const SearchPanel = () => {

    function Test() {

        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-news',
            params: { tconst: 'tt4154664', limit: '25' },
            headers: {
                'x-rapidapi-key': '3df338080emsh92d698037ad94dfp1cfa71jsn376770128608',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            const news = response.data.items
            const head = news.map(item => item.head)
            const body = news.map(item => item.body)
            const images = news.map(item => item.image.url)
            const publishTime = news.map(item => item.publishDateTime)
            console.log(publishTime)
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <div className="search-panel">
            <InputGroup>
                <Input placeholder="Поиск по новостям..." />
                <Button color="info" onClick={Test}>Поиск</Button>
            </InputGroup>
            <br />
        </div>
    )
}

export default SearchPanel