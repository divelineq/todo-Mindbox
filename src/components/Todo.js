import { Alert, Button, ButtonGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { setRemoveTodo, setToggleAlert } from '../redux/todoReducer';

export function Todo() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todo.todos)

  const toggleAlert = (todo) => {
    dispatch(setToggleAlert(todo.id))
  }

  const removeTodo = (todo) => {
    dispatch(setRemoveTodo(todo.id))
  }

  return (
    <>
      {todos.map(todo =>
        <Alert className='alert' key={todo.id} variant={todo.complete ? 'success' : 'primary'}>
          <span className={todo.complete ? 'todoText' : null}>{todo.text}</span>
          <ButtonGroup aria-label="Basic example">
            <Button variant="success" onClick={() => toggleAlert(todo)}>Выполнено</Button>
            <Button variant="danger" onClick={() => removeTodo(todo)}>Удалить</Button>
          </ButtonGroup>
        </Alert>
      )}
    </>

  )
}