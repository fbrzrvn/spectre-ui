import styles from '~/App.module.scss'
import {} from '~/components'

function App() {
  return (
    <main>
      <header className={styles.header}>
        <h1 className={styles.title}>Spectre UI components library</h1>
        <h3 className={styles.subtitle}>
          Use this page as playground to develop your components import it in this page and start play with it.
        </h3>
      </header>

      <section className={styles.section}>{/* Drop your component here to start testing it */}</section>
    </main>
  )
}

export default App
