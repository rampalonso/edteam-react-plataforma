import React, { useEffect, Fragment } from 'react'
import { connect } from "react-redux";
import store from 'store';
import { getCourse } from 'store/actions/course';
import { Banner } from 'components/organisms';

const Course = ({ course = {} }) => {

  useEffect(() => {
    store.dispatch(getCourse(1))
  }, [])
  
  return (
    <Fragment>
      <Banner
        color="dark-color"
        image={{
          src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          alt: 'Banner especialidades'
        }}
        title={course.name}
        subtitle={course.subtitle}
        home
      />

    </Fragment>
  )
}

const mapStateToProps = state => ({
  course: state.courseReducer.course
})

export default connect(mapStateToProps, {})(Course);
