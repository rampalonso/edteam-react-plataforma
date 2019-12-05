import React, { Fragment, useEffect } from 'react'
import { connect } from "react-redux";
import store from 'store';
import { getAllCourses } from 'store/actions/course';

import { Banner, Card } from 'components/organisms'

const Courses = ({ courses, match }) => {

  useEffect(() => {
    store.dispatch(getAllCourses())
  }, [match])


  return (
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
      {
        courses &&
        <main className="ed-grid m-grid-5">
          {
            courses.map(c => {
              return (
                <Card
                  key={c.id}
                  pKey={c.id}
                  path="cursos"
                  picture={c.picture}
                  name={c.name}
                />
              )
            })
          }
        </main>
      }
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    courses: state.courseReducer.courses
  }
}

export default connect(mapStateToProps, {})(Courses);
