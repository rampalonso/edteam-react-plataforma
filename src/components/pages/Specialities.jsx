import React, { Fragment } from 'react'
import { Banner } from 'components/organisms'

const Specialities = () => (
  <Fragment>
    <Banner
      color="first-color"
      image={{
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        alt: 'Banner especialidades'
      }}
      title="Especialidades"
      subtitle="Domina una tecnologia con las rutas de aprendizaje que te ofrecemos"
    />
  </Fragment>
)

export default Specialities;
