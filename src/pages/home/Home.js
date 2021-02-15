import * as React from 'react'
import Header from '../../Components/Header'
import SearchPanel from './Components/SearchPanel'
import News from './Components/News'
import axios from "axios"


const Home = () => {
	const [data, setData] = React.useState([])

	React.useEffect(() => {
		const getData = async () => {
			const response = await axios.request({
				method: 'GET',
				url: 'https://imdb8.p.rapidapi.com/title/get-news',
				params: { tconst: 'tt4154664', limit: '25' },
				headers: {
					'x-rapidapi-key': '3df338080emsh92d698037ad94dfp1cfa71jsn376770128608',
					'x-rapidapi-host': 'imdb8.p.rapidapi.com'
				}
			})

			let news = response.data.items
			let head = news.map(item => item.head)
			let body = news.map(item => item.body)
			let images = news.map(item => item.image.url)
			let publishTime = news.map(item => item.publishDateTime)
			let arr = []
			for (let i = 0; i < news.length; i++) {
				arr.push({
					title: head[i],
					text: body[i],
					date: publishTime[i],
					img: images[i],
					key: i
				})
			}
			setData(arr)
		}
		getData()
	}, [])
	return (
		<>
			<Header />
			<SearchPanel />
			<News data={data} />
		</>
	)
}

export default Home