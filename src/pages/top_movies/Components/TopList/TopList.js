import React from 'react'
import TopListItem from '../TopListItem'
import './TopList.css'
const TopList = ({ top }) => {
	const list = top.map(item => {
		return <TopListItem title={item.title} actors={item.actors}
			img={item.img} number={item.number} rating={item.rating} />
	})
	return (
		<div className="top-list">
			{list}
		</div>
	)
}

export default TopList