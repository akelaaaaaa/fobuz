import Header from './Components/header/header'
import SearchPanel from './Components/search-panel/search-panel'
import News from './Components/news/news'
import data from './Components/Mock/Mock'


const App = () => {
  return (
    <div className="my-container">
      <Header />
      <SearchPanel />
      <News data = {data}/>
    </div>
  )
}

export default App
