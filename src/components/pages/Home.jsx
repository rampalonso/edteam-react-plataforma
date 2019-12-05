import React, { Fragment, useEffect } from 'react'
import { connect } from "react-redux";
import store from 'store'
import { getAllPosts } from 'store/actions/post'

import { Banner, Publication } from 'components/organisms'



const Home = ({ posts }) => {

  useEffect(() => {
    store.dispatch(getAllPosts())
  }, [])


  return (
    <Fragment>
      <Banner
        color="dark-color"
        image={{
          src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          alt: 'Banner especialidades'
        }}
        title="Bienvenido a la experiencia mas increible en educacion online. Comienza hoy mismo a aprender"
        subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estas buscando contenido de calidad. Aqui lo encontraras"
        home
        poster="https://images.unsplash.com/photo-1575386955427-d82db4af08bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
      />

      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          <div>
            {
              posts
                ?
                <div>
                  {
                    posts.map(p => {
                      return <Publication
                        key={p.id}
                        author={p.author}
                        title={p.title}
                        date={p.fecha}
                        content={p.content}
                      />
                    })
                  }
                </div>
                :
                <p>No existen publicaciones</p>
            }
          </div>
        </div>
        <div>
          <h3>Lista de categorias</h3>
          <ul className="feature-list">
            <li><span>React JS</span></li>
            <li><span>React Native</span></li>
            <li><span>Angular</span></li>
            <li><span>Vue</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
          </ul>
        </div>
      </main>

    </Fragment>
  )
}

const mapStateToProps = (state) => (
  {
    posts: state.postReducer.posts
  }
)

export default connect(mapStateToProps, {})(Home);

