import React from 'react'
import styled from 'styled-components'
import AddUser from './AddUser'
import Carousel from './Carousel'


const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: white;
`

export default class Picker extends React.Component {

  render() {
    return (
        <Container>
                        
          <Carousel/>
          <AddUser/>

        </Container>
    )
  }
}
