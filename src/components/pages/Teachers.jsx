import React, { useEffect, Fragment } from 'react'
import store from 'store';
import { getAllTeachers } from 'store/actions/teacher';
import { connect } from "react-redux";

import { Banner, Teacher } from 'components/organisms';

const Teachers = ({ match, teachers }) => {

  useEffect(() => {
    store.dispatch(getAllTeachers())
  }, [match])

  return (
    <Fragment>
      <Banner
        color="third-color"
        image={{
          src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          alt: 'Banner profesores'
        }}
        title="Nuestros profesores"
        subtitle="Este panel docente esta altamente calificado para guiarte en tu educacion"
      />
      {
        teachers &&
        <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
          {

            teachers.map(t => {
              return <Teacher
                key={t.id}
                picture={t.picture}
                name={t.name}
                country={t.country}
              />
            })
          }
        </main>
      }
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    teachers: state.teacherReducer.teachers
  }
}

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Teachers);
