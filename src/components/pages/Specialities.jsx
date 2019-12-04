import React, { Fragment, useEffect } from 'react'
import { connect } from "react-redux";
import { Banner, Card } from 'components/organisms'
import store from 'store'
import { getAllSpecialities } from 'store/actions/speciality'

const Specialities = ({ specialities }) => {

  useEffect(() => {
    store.dispatch(getAllSpecialities())
  }, [])

  return (
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
      {
        specialities &&
        <main className="ed-grid m-grid-3">
          {
            specialities.map(s => {
              return <Card
                key={s.id}
                pKey={s.id}
                path="especialidades"
                picture={s.picture}
                name={s.name}
              />
            })
          }
        </main>
      }

    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  specialities: state.specialityReducer.specialities
})

export default connect(mapStateToProps, {})(Specialities);
