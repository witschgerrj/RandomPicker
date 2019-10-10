import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin-top: 100px;
  margin-left: 10%;
  height: 150px;
  width: 400px;
  box-shadow: 2px 2px 8px 0px #7d7d7d;
  border-radius: 8px;
  border: #7d7d7d solid 1px;
`

const AddButtonText = styled.text`
  position: absolute;
  bottom: 14px;
  left: 135px;
  height: 40px;
  width: 100%;
  font-size: 20px;
  user-select: none;
`

const InputName = styled.input`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 40px;
  width: 220px;
  font-size: 20px;
  border: #7d7d7d solid 1px;
  border-radius: 8px;
  padding-left: 10px;
`

const InputEntries = styled.input`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 40px;
  width: 110px;
  font-size: 20px;
  border: #7d7d7d solid 1px;
  border-radius: 8px;
  padding-left: 10px;
`

const AddButton = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  height: 40px;
  width: 360px;
  font-size: 20px;
  background-color: white;
  border: #7d7d7d solid 1px;
  border-radius: 8px;
  background-color: #6FB7BF;
`

export default class AddUser extends React.Component {
  constructor(props) {
    super(props)
    if (JSON.parse(window.localStorage.getItem('participants')) != null) {
      this.state = {
        userList: JSON.parse(window.localStorage.getItem('participants')),
      }
    } else {
      this.state = {
        userList: [],
      }
    }

  }

  _addUser = () => {
    if (this.newEntry.value > 0) {
      let addNames = []
      for (let i = 0; i < this.newEntry.value; i++) {
        addNames[i] = this.newName.value
      }
      this.setState({
        userList: this.state.userList.concat(addNames)
      })
    }
  }
  
  componentDidUpdate() {
    window.localStorage.setItem('participants', JSON.stringify(this.state.userList))
  }

  render() {
    return (
      <Container>

        <InputName placeholder='New Name' ref={InputName => this.newName = InputName}/>
        <InputEntries placeholder='Entries' ref={InputEntries => this.newEntry = InputEntries}/>
        <AddButton/>
        <AddButtonText onClick = {() => this._addUser()}>Add New Name</AddButtonText>
      </Container>

    )
  }
}
