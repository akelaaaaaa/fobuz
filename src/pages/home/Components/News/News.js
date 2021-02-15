import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './News.css'
import { CardColumns } from 'reactstrap'

const News = ({ data }) => {
    const news = data.map((item) => {
        return <NewsCard title={item.title} text={item.text} date={item.date} img={item.img} key={item.key} />
    })

    return (
        <CardColumns className="wrap">
            {news}
        </CardColumns>
    )
}

export default News