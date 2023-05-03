import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  
  const [articals, setArticals] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    let data = await fetch(url);

    let parsedData = await data.json();
    props.setProgress(70);

    setArticals(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100);
    
  }

  // ---------------- when first time page load
  useEffect(() => {
    updateNews();
    document.title = `${capitalize(props.category)} - NewsThief`;
  }, [])


  const fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)

    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticals(articals.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)

  };

  return (
    <>
      <h1 className='text-center' style={{margin : '85px 0 35px'}}>NewsThief - Top {capitalize(props.category)} Headlines</h1>

      <InfiniteScroll
        dataLength={articals.length}
        next={fetchMoreData}
        hasMore={articals.length !== totalResults}
        loader={loading && <Spiner />}
      >
        <div className="container">
          <div className="row">
            {articals.map((element, index) => {
              return <div className="col-md-4" key={index}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author}
                  date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>
  )

} 

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News



