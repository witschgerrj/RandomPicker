import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  position: relative;
  height: 500px;
  width: 100vw;
  margin-left: ${props => props.left}px;
  transition: all 5s;
`

const UserBox = styled.div`
  position: absolute;
  height: 200px;
  width:  200px;
  top: 20%;
  left: ${props => props.left}px;
  background-color: blue;
`

const Spin = styled.div`
  position: fixed;
  left: 50%;
  bottom: 50px;
  width: 100px;
  height: 50px;
  background-color: red;
`

const Name = styled.text`
  position: relative;
  font-size: 50px;
  color: black;
  width: 100%;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40%;
`

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      participants: JSON.parse(window.localStorage.getItem('participants')),
      carouselPosition: 0
    }
  }

  _animate = () => {
    this.setState({
      carouselPosition: -234 * this.state.participants.length
    })
  }


  _pickWinner = () => {
    let lastIndex = this.state.participants.length
    let random = Math.floor(Math.random() * lastIndex);
    console.log(random)
    let participantsCopy = this.state.participants
    let temp = participantsCopy[random]
    participantsCopy[random] = participantsCopy[lastIndex - 1]
    participantsCopy[lastIndex - 1] = temp
    this.setState({
      participants: participantsCopy
    })
    this._animate()
  }

  render() {
    return (
      <Container left={this.state.carouselPosition}>
        {
          this.state.participants.map((participant, index) => (
            <UserBox left={250 * index} ref={UserBox => this.newBox = UserBox}> 
              <Name>{participant}</Name>
            </UserBox>
          ))
        }

        <Spin onClick = {() => this._pickWinner()}/>
      </Container>
    )
  }
}
