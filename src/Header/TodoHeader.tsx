import { useTodoState } from '../Todo/TodoProvider'
import styles from './TodoHeader.module.css'


const TodoHeader = () => {
  const todoState = useTodoState()
  const count = todoState.todos.filter(todo => !todo.isChecked).length
  // todoState.todos.filter(todo => !todo.isChecked).length
  return (
    <header>
      <h1>
        <mark className={styles.todoCount}>{count}</mark>
        개의 할 일
      </h1>
    </header>
  )
}
export default TodoHeader