import React, { useState, useEffect } from 'react'
import Card from './Card'

const NewsApp = () => {


  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "0dc674d382ac4618b74868aaeb275c2b";
  const newsURL = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`


  const getData = async () => {
    const response = await fetch(newsURL);
    const jsonData = await response.json();
    console.log(jsonData);
    let dt = jsonData.articles.slice(0, 11)
    setNewsData(dt);
  }

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)
  }

  const userInput = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    getData()
  }, [])




  return (
    <div>
      <nav className='newsNavigationBar'>
        <div>
          <h1>Trendy News</h1>
        </div>


        <ul className='navItemsItems__links'>
          <li><a href="">All News</a></li>
          <li><a href=""></a>Trending</li>
        </ul>

        <div className="searchbar">
          <input type="text" name="" id="" placeholder='Search News' value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className="head"> Stay Up to Date with Trendy News</p>
      </div>
      <div className="categoryBtn">
        <button onClick={userInput}>Sports</button>
        <button onClick={userInput}>Politics</button>
        <button onClick={userInput}>Entertainment</button>
        <button onClick={userInput}>Health</button>
        <button onClick={userInput}>Fitness</button>
      </div>

      <div className="cards">
        {newsData ? <Card data={newsData} /> : null}
      </div>
    </div>
  )
}

export default NewsApp