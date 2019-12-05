import React, { useEffect, Fragment } from 'react'
import { connect } from "react-redux";
import store from 'store';
import { getCourse } from 'store/actions/course';
import { Banner } from 'components/organisms';

const Course = ({ course, match }) => {

  useEffect(() => {
    // store.dispatch(getCourse(match.params.id))
    store.dispatch(getCourse(1))
  }, [])

  return (
    <Fragment>
      {
        course &&
        <Fragment>
          <Banner
            color="dark-color"
            image={{
              src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
              alt: 'Banner especialidades'
            }}
            title={course.name}
            subtitle={course.subtitle}
            info={course.information}
            courseBanner
            poster={course.picture}
            speciality={course.data.specialities[0].name}
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-features ed-grid lg-grid-3 l-block s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white s-shadow-bottom">
                <div>
                  <h3 className="t4">¿Que aprenderas?</h3>
                  <ul dangerouslySetInnerHTML={{ __html: course.you_learn }}>
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Conocimientos previos</h3>
                  <ul dangerouslySetInnerHTML={{ __html: course.requirements }}>
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Nivel</h3>
                  <ul dangerouslySetInnerHTML={{ __html: course.level }}>
                  </ul>
                </div>
              </div>
              <h2>Temario del curso</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {
                  course.data.classes.map(cl => (
                    <div className="course-class l-section" key={cl.class.id}>
                      <h3>{cl.class.title}</h3>
                      <p>{cl.class.description}</p>
                      <ul>
                        {
                          cl.subjects.map(s => (
                            <li key={s.subject.id}>{s.subject.title}</li>
                          ))
                        }
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="lg-cols-3">

            </div>
          </main>
        </Fragment>
      }
    </Fragment>
  )
}

const mapStateToProps = state => ({
  course: state.courseReducer.course
})

export default connect(mapStateToProps, {})(Course);
