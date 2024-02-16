import styles from './root.module.scss'
import { CardSwitch, CardForm, CardCheckbox, CardAccardion, CardTabs, CardDropdown, CardDatePicker } from './cards'
import cn from 'classnames'
function App() {


  return (
    <div className={styles.area} >
      <div className={styles.wrapper}>
        <div className={cn(styles.column, styles.margin)}>
          <CardSwitch />
          <CardAccardion />
        </div>
        <div className={styles.column}>
          <CardForm />
          <CardDatePicker />
          <CardDropdown />
        </div>
        <div className={cn(styles.column, styles.margin)}>
          <CardCheckbox />
          <CardTabs />
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
