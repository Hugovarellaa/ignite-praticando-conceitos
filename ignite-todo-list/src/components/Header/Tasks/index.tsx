import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>10</span>
        </div>
        <div>
          <strong>Tarefas concluídas</strong>
          <span>5 de 10</span>
        </div>
      </header>
    </section>
  )
}
