import logoImg from '../../assets/logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="foguete azul com o nome Todo" />

      <form className={styles.newTaskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>Criar</button>
      </form>
    </header>
  )
}
