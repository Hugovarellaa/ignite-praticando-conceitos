import { Circle, Trash } from 'phosphor-react'
import { ITask } from '../../App'
import checkImg from '../../assets/check.svg'
import styles from './Task.module.css'

interface Props {
  task: ITask
  onRemoveTask: (id: string) => void
  onCheck: (id: string) => void
}

export function Task({ task, onRemoveTask, onCheck }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.check} onClick={() => onCheck(task.id)}>
        {task.isCompleted ? (
          <img src={checkImg} alt="check" />
        ) : (
          <Circle size={24} />
        )}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ''}>
        {task.title}
      </p>
      <button
        className={styles.delete}
        title="Delete"
        onClick={() => onRemoveTask(task.id)}
      >
        <Trash size={18} />
      </button>
    </div>
  )
}
