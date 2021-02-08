import React from 'react'
import { NavItem } from 'reactstrap'
import NewsCard from '../news-card/news-card'
import './news.css'


const News = ({data}) => {
    const news = data.map((item) => {
        return (
            <>
                <NewsCard title = {item.title} text = {item.director} date = {item.date} img = {item.img}  />
            </>
        )
    })

    return (
            <div className = "wrap">
                {news}
            </div>
    )
}

export default News