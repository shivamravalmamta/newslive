import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageurl, newsurl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card" >
          <span className="badge badge-danger mb-2" >{source}</span>
          {imageurl ?
            <img src={imageurl} className="card-img-top" alt="..." /> :
            <img src={imageurl ? imageurl : "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/10_06_2022_10_02_51_124674.webp?width=920&format=jpeg"} className="card-img-top" alt="..." />
          }
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By <b>{author ? author : 'Unknown'}</b> On {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )

}

export default NewsItem
