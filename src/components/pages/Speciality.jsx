import React, { useEffect, Fragment } from 'react'
import { connect } from "react-redux";
import store from 'store';
import { getSpeciality } from 'store/actions/speciality';
import { Banner } from 'components/organisms';

const Speciality = ({ speciality }) => {

  useEffect(() => {
    store.dispatch(getSpeciality(1))
  }, [])


  return (
    <Fragment>
      {
        speciality &&
        <Fragment>
          <Banner
            color="dark-color"
            image={{
              src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
              alt: speciality.data.name
            }}
            title={speciality.data.name}
            subtitle={speciality.data.subtitle}
            info={speciality.data.information}
            courseBanner
            poster={speciality.data.picture}
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-features ed-grid lg-grid-3 l-block s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white s-shadow-bottom">
                <div>
                  <h3 className="t4">¿Que aprenderas?</h3>
                  <ul>
                    {
                      speciality.data.abilities.map(a => (
                        <li key={a.id}>{a.description}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Conocimientos previos</h3>
                  <ul>
                    {
                      speciality.data.knowledge.map(a => (
                        <li key={a.id}>{a.description}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Nivel</h3>
                  <p>{speciality.data.level}</p>
                </div>
              </div>
              <h2>Temario de la especialidad</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {
                  speciality.data.courses.map(c => (
                    <div className="course-class l-section" key={c.id}>
                      <div className="ed-grid m-grid-3">
                        <img src={c.picture} alt={c.name} />
                        <div className="m-cols-2">
                          <h3>{c.name}</h3>
                          <p>{c.information}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

          </main>
        </Fragment>
      }
    </Fragment>
  )
}

const mapStateToProps = state => ({
  speciality: state.specialityReducer.speciality
})

export default connect(mapStateToProps, {})(Speciality);
