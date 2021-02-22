import * as React from 'react'
import {observer} from 'mobx-react-lite'
import Header from '../../Components/Header'
import SearchPanel from './Components/SearchPanel'
import News from './Components/News'
import MyNewsStore from './MyNewsStore'


const store = new MyNewsStore()
store.getData()

const Home:React.FC = () => {
	return (
		<>
			<Header />
			<SearchPanel />
			<News data={store.data} />
		</>
	)
}

export default observer(Home)