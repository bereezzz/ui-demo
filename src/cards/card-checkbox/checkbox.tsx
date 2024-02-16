import { Widgets } from "../../components/widgets/widgets"
import { Checkbox } from "platon";
import styles from './checkbox.module.scss'
import { useState } from "react";

interface CheckboxItem {
    id: number;
    label: string;
    isChecked: boolean;
}

export const CardCheckbox = () => {
    const initialCheckboxes: CheckboxItem[] = [
        { id: 1, label: "Respond to comment #384 from Travis Ross", isChecked: false },
        { id: 2, label: "Invite Acme Co. team to Slack", isChecked: false },
        { id: 3, label: "Create a report requested by Danilo Sousa", isChecked: false },
        { id: 4, label: "Review support request #85", isChecked: false },
        { id: 5, label: "Close Q2 finances", isChecked: false },
        { id: 6, label: "Review invoice #3456", isChecked: false }
    ];

    const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>(initialCheckboxes);

    const handleCheckboxChange = (id: number) => {
        setCheckboxes(prevCheckboxes =>
            prevCheckboxes.map(checkbox =>
                checkbox.id === id ? { ...checkbox, isChecked: !checkbox.isChecked } : checkbox
            )
        );
    };

    return (
        <Widgets title="To-Do" description="Stay on top of your daily tasks." size="medium">
            <div className={styles.wrapper}>
                {checkboxes.map(checkbox => (
                    <Checkbox
                        key={checkbox.id}
                        label={checkbox.label}
                        checked={checkbox.isChecked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                ))}
            </div>
        </Widgets>
    )
}

