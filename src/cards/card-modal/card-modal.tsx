import { Widgets } from "../../components/widgets/widgets"
import { Button, Drawer, Modal} from "platon";
import styles from './card-modal.module.scss'
import { useState } from "react";

export const CardModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    return (
        <Widgets title="Modal" size="small">
            <div className={styles.wrapper}>
                <Button onClick={() => setIsOpenModal(true)} type="button">
                    Открыть модалку
                </Button>
                <Button onClick={() => setIsOpenDrawer(true)} type="button">
                    Открыть драйвер
                </Button>
            </div>
            <Modal
                isOpen={isOpenModal}
                setIsOpen={setIsOpenModal}
                title="Модалка"
                footer={
                    <Button onClick={() => setIsOpenModal(false)} size="sm" type="button">
                        Кнопка закрыть
                    </Button>
                }
                description="Кто не понял - это модалка">
                Таким образом, убеждённость некоторых оппонентов способствует подготовке и
                реализации как самодостаточных, так и внешне зависимых концептуальных
                решений. Являясь всего лишь частью общей картины, многие известные личности,
                инициированные исключительно синтетически, призваны к ответу.
            </Modal>
            <Drawer isOpen={isOpenDrawer} onChange={setIsOpenDrawer} zIndex={1000}>
                <div style={{ maxWidth: 500, width: '100%' }}>
                    Таким образом, убеждённость некоторых оппонентов способствует подготовке и
                    реализации как самодостаточных, так и внешне зависимых концептуальных
                    решений. Являясь всего лишь частью общей картины, многие известные личности,
                    инициированные исключительно синтетически, призваны к ответу.
                </div>
            </Drawer>
        </Widgets>
    )
}

