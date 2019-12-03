import React, { Fragment } from 'react'
import { Banner } from 'components/organisms'

const Courses = () => (
  <Fragment>
    <Banner
      color="dark-color"
      image={{
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        alt: 'Banner cursos'
      }}
      title="Nuestros cursos"
      subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnologia"
    />
  </Fragment>
)

export default Courses;
