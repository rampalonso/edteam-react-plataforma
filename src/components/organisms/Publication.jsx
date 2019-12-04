import React from 'react'

const Publication = ({ title, author, date, content }) => {
  return (
    <article className="publication l-block">
      <div className="publication__container">
        <h2 className="publication__title t3">{title}</h2>
        <span><b>{author}</b> {date}</span>
        <div className="publication__content">
          <p>{content}</p>
        </div>
      </div>
    </article>
  )
}

export default Publication;