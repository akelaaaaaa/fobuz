import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './News.css'
import { CardColumns } from 'reactstrap'

interface Props {
    data: any[]
}

const News:React.FC<Props> = ({ data }) => {
    const news = data.map((item: any) => {
        return <NewsCard title={item.title} text={item.text} date={item.date} img={item.img} key={item.key} />
    })

    return (
        <CardColumns className="wrap">
            {news}
        </CardColumns>
    )
}

export default News