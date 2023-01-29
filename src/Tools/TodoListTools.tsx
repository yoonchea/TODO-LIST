import styles from './TodoListTools.module.css'
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import {MdDelete} from 'react-icons/md'
import {CgRadioCheck} from 'react-icons/cg'
import { useTodoDispatch, useTodoState } from '../Todo/TodoProvider'




const TodoListTools = () => {
  const todoState = useTodoState()
  const todoDispatch = useTodoDispatch()
  const isTodoAllChecked = () => {
    return todoState.todos.every(todo => todo.isChecked)
  }
  const handleToggleAllClick = () => {
    todoDispatch({
      type: 'allChecked',
      payload: isTodoAllChecked()
      })
  }
  const handleRemoveAllClick = () => {
    todoDispatch({
      type: 'allRemove'
    })
  }
  return (
    <section className={styles.container}>
      <button onClick={handleToggleAllClick} className={styles.btn}>
        {
          isTodoAllChecked() ? <><CgRadioCheck className={styles.allCheck} />전체 해제</> : 
          <>
           <IoCheckmarkDoneCircleOutline className={styles.allCheck}/>전체 완료
          </>
        }
      </button>
      <button onClick={handleRemoveAllClick} className={[styles.btn, styles.removeAllButton].join(' ')}><MdDelete className={styles.allRemove}/>전체 삭제</button>
    </section>
  )
}

export default TodoListTools