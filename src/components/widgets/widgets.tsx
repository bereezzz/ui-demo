import { FC } from 'react'
import styles from './widgets.module.scss'
import { WidgetsProps } from './widgets-types'
import cn from 'classnames'

export const Widgets: FC<WidgetsProps> = ({ children, title, description, size='medium' }) => {


    return (
        <div className={cn(styles.widgets, styles[size])} >
            <div className={styles.wrapper}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>

            {children}
        </div >
    )
}

