import React from 'react'

function Card({ data }) {

  console.log(data);

  const readMore = (url) => {
    window.open(url)
  }


  return (
    <div className='cardContainer'>

      {data.map((currItem, index) => {
        if (!currItem.urlToImage) {
          return null
        }
        else {
          return (
            <div className="card">
              <img src={currItem.urlToImage} alt="" />
              <div className="content">
                <a href="" className="title" onClick={() => window.open(currItem.url)}>{currItem.title}</a>
                <p>{currItem.desription}</p>
                <button onClick={() => window.open(currItem.url)}>Read More</button>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Card