import { Widgets } from "../../components/widgets/widgets"
import { Tabs, Tab, Loader } from "platon";
import styles from './card-tabs.module.scss'


export const CardTabs = () => {


    return (
        <Widgets title="Notifications" description="Manage your notification settings." size="medium">
            <Tabs tabButtons={[
                { label: 'Таб 1', value: 'tab1' },
                { label: 'Таб 2', value: 'tab2' },
            ]}
                className={styles.tabs}
                defaultValue="tab1">
                <Tab key="tab1" value="tab1">
                    <div className={styles.text}>
                        Безусловно, граница обучения кадров предоставляет широкие возможности для
                        укрепления моральных ценностей. Учитывая ключевые сценарии поведения,
                        перспективное планирование однозначно определяет каждого участника как
                        способного принимать собственные решения касаемо приоретизации разума над
                        эмоциями.
                    </div>
                </Tab>
                <Tab key="tab2" value="tab2">
                    <div className={styles.loader}>
                      <Loader/>
                    </div>
                </Tab>
            </Tabs>
        </Widgets>
    )
}

