import React from 'react'
import { Banner } from 'components/organisms'

const Teachers = () => (
  <Banner
    color="third-color"
    image={{
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      alt: 'Banner profesores'
    }}
    title="Nuestro profesores"
    subtitle="Este panel docente esta altamente calificado para guiarte en tu educacion"
  />
)

export default Teachers;