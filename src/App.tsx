import styles from './root.module.scss'
import { CardSwitch, CardForm, CardCheckbox, CardAccardion, CardTabs, CardDropdown, CardDatePicker } from './cards'
function App() {


  return (
    <div className={styles.area} >
      <div className={styles.wrapper}>
        <div style={{ display: 'flex', gap: "12px" }}>
          <div className={styles.column}>
            <CardSwitch />
            <CardAccardion />
          </div>
          <div className={styles.column}>
            <CardForm />
            <CardDatePicker />
            <CardDropdown />
          </div>
          <div className={styles.column}>
            <CardCheckbox />
            <CardTabs />
          </div>
        </div>
      </div>
      <ul className={styles.circles} >
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div >
  )
}

export default App
