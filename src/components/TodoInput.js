import { Form, Container, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { setAddTodo, setInputValue } from '../redux/todoReducer';

export function TodoInput() {
  const dispatch = useDispatch()
  const inputValue = useSelector(state => state.todo.inputValue)
  const todos = useSelector(state => state.todo.todos)

  const handleChange = (e) => {
    dispatch(setInputValue(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(inputValue, todos)
    dispatch(setInputValue(''))
  }

  const addTodo = (inputValue) => {
    if (inputValue) {
      const item = {
        id: new Date().getTime(),
        text: inputValue,
        complete: false
      }
      dispatch(setAddTodo(item))
    }
  }


  return (
    <>
      <Form onSubmit={handleSubmit} className='form'>
        <Form.Label >Задачи: {todos.length}</Form.Label>
        <Container className='input'>
          <Form.Control type="text" value={inputValue} maxLength='55' onChange={handleChange} placeholder='Введите задачу' />
          <Button variant="info" type='submit' >Сохранить</Button>
        </Container>

      </Form>
    </>
  )
}