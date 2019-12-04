import React from 'react'
import { Link } from "react-router-dom";

const Banner = ({ color, image, title, subtitle, home }) => (
  <div className={"main-banner img-container l-block " + color}>
    <div className="ed-grid">
      <div>
        <img src={image.src} alt={image.alt} className="main-banner__img" />
        {
          home
            ?
            <div className="ed-grid m-grid-2">
              <div className="main-banner__data">
                <h1 className="main-banner__title">{title}</h1>
                <p>{subtitle}</p>
                <Link to="/cursos" className="button accent-color">Ver cursos</Link>
              </div>
              <div className="img-container s-ratio-16-9">
                <img src="https://images.unsplash.com/photo-1575386955427-d82db4af08bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" alt="Curso actual"/>
              </div>
            </div>
            :
            <div className="main-banner__data s-center">
              <h1 className="main-banner__title">{title}</h1>
              <p>{subtitle}</p>
            </div>
        }
      </div>
    </div>
  </div>
)

export default Banner;