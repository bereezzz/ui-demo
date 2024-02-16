import { Widgets } from "../../components/widgets/widgets"
import { DatePicker } from "platon";
import styles from './card-date-picker.module.scss'
import { useState } from "react";



export const CardDatePicker = () => {
    const [value, setValue] = useState<Date | null>(null);

    return (
        <Widgets title="Form calendar" size="small" description="Тестовая форма с календарем">
            <div className={styles.wrapper}>
                <DatePicker
                    locale="ru"
                    type="default"
                    value={value}
                    onChange={(newValue) => {
                        if (newValue instanceof Date || newValue === null) {
                            setValue((prevValue) =>
                                prevValue && prevValue.getTime() === newValue?.getTime()
                                    ? null
                                    : newValue,
                            );
                        }
                    }}
                />
            </div>
        </Widgets>
    )
}

