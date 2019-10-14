import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid #780787;
color: #780787;
margin: 1em 1em;
padding: 0.25em 1em;
cursor: pointer;
outline: none;

`
const Container = styled.div`
  
  width: 400px;
  background-color: #fff;
  margin: 30px auto;
  font-family: arial;
  font-size: 12;
  color: grey;
  ul {
    list-style: none;
    padding: 10px 20px;
    margin: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: 3px solid #780787};
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
    li {
      padding: 10px 0px;
      height: 20px;
      border-top: 1px solid #daf542;
      :first-child {
        border-top: none;
      }
    }
  }
`;

class RandomCharacter extends Component {
    state = { 
       persons: [],
       random: [],
     }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
            console.log(this.state.persons)
          })
          
      }
    pickRandomProperty() {
        let result;
        let count = 0;
        for (var prop in this.state.persons)
            if (Math.random() < 1/++count)
               result = prop;
        this.setState({
            random: this.state.persons[result]
        })
    }

    render() { 
        return ( 
            <Container>
                <Button onClick={() => this.pickRandomProperty()}>Generate fake identity</Button>
                <ul>
                <li>{this.state.random.name}</li>
                <li>{this.state.random.username}</li>
                <li>{this.state.random.email}</li>
                <li>{this.state.random.phone}</li>
                </ul>
            </Container>
         );
    }
}
 
export default RandomCharacter;