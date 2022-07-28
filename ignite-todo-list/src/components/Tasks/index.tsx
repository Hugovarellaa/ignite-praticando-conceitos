import { ITask } from '../../App'
import clipboardImg from '../../assets/clipboard.svg'
import { Task } from '../Task'
import styles from './Tasks.module.css'

interface Props {
  tasks: ITask[]
  onRemoveTask: (id: string) => void
  onCheck: (id: string) => void
}

export function Tasks({ tasks, onRemoveTask, onCheck }: Props) {
  const taskQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{taskQuantity}</span>
        </div>
        <div>
          <strong>Tarefas concluídas</strong>
          <span>
            {completedTasks} de {taskQuantity}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onRemoveTask={onRemoveTask}
            onCheck={onCheck}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <img src={clipboardImg} alt="" />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}
