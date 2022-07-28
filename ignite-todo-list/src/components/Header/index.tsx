import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import logoImg from '../../assets/logo.svg'
import styles from './Header.module.css'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: Props) {
  const [taskTitle, setTaskTitle] = useState('')

  function handleAddTask(event: FormEvent) {
    event.preventDefault()
    onAddTask(taskTitle)
    setTaskTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img src={logoImg} alt="foguete azul com o nome Todo" />

      <form className={styles.newTaskForm} onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={taskTitle}
        />
        <button>
          <span>Criar</span>
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}
