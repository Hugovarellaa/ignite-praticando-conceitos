import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

export interface ITask {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [task, setTask] = useState<ITask[]>([])
  // eslint-disable-next-line no-unused-vars
  function addTask(taskTitle: string) {
    setTask((oldState) => [
      ...oldState,
      {
        id: String(Math.round(Math.random() * 100)),
        title: taskTitle,
        isCompleted: false,
      },
    ])
  }

  function deleteTaskById(id: string) {
    setTask((oldState) => oldState.filter((task) => task.id !== id))
  }

  function toogleTaskCompletedById(taskId: string) {
    const newTasks = task.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTask(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={task}
        onRemoveTask={deleteTaskById}
        onCheck={toogleTaskCompletedById}
      />
    </>
  )
}
