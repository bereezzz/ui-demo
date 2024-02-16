import { Widgets } from "../../components/widgets/widgets"
import { Switch } from "platon";
import styles from './card-switch.module.scss'
import { useState } from "react";

export const CardSwitch = () => {

    const [isChecked, setIsChecked] = useState<{ [key: number]: boolean }>({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
    });

    const handleCheckedChange = (id: number) => {
        setIsChecked((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <Widgets title="Notifications" description="Manage your notification settings." size="large">
            <>
                <hr className={styles.hr} />
                <div className={styles.wrapper} id="first">
                    <div className={styles.wrapperItem}>
                        <div className={styles.title}>Comments</div>
                        <div className={styles.description}>Receive notifications when someone comments.</div>
                    </div>
                    <div className={styles.wrapperItem}>
                    {[1, 2, 3].map((id) => (
                            <Switch
                                key={id}
                                isChecked={isChecked[id]}
                                onCheckedChange={() => handleCheckedChange(id)}
                            />
                        ))}
                    </div>
                </div>
                <hr className={styles.hr} />
                <div className={styles.wrapper} >
                    <div className={styles.wrapperItem}>
                        <div className={styles.title}>Comments</div>
                        <div className={styles.description}>Receive notifications when someone comments.</div>
                    </div>
                    <div className={styles.wrapperItem}>
                    {[4, 5, 6].map((id) => (
                            <Switch
                                key={id}
                                isChecked={isChecked[id]}
                                onCheckedChange={() => handleCheckedChange(id)}
                            />
                        ))}
                    </div>
                </div>
            </>
        </Widgets>
    )
}

