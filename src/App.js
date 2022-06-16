import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Container } from 'react-bootstrap'
import { Todo } from './components/Todo';
import { TodoInput } from './components/TodoInput';


const StyledContainer = styled(Container)`
  box-sizing: border-box;
  width: 900px;
  .header{
    text-align: center;
    padding-bottom: 15px;
  }
  .form{
    padding-bottom: 15px;
  }
  .alert{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .input{
    display: flex;
    padding: 0
  }
  .todoText{
    text-decoration: line-through;
  }
`

function App() {
  return (
    <StyledContainer>
      <Container className='header'>
        <span>Тестовое задание Frontend intern в Mindbox</span>
      </Container>
      <TodoInput />
      <Todo />
    </StyledContainer>
  )
}



export default App;
