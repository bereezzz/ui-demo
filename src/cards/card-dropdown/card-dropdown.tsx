import { Widgets } from "../../components/widgets/widgets"
import { Select, Button, FormItem, SelectOption, Dropdown, DropdownItem } from "platon";
import styles from './card-dropdown.module.scss';
import { useState } from "react";

const data = [
    { id: 0, name: 'apple' },
    { id: 1, name: 'banana' },
    { id: 2, name: 'grape' },
    { id: 3, name: 'orange' },
    { id: 4, name: 'lemon' },
    { id: 5, name: 'lemon1' },
    { id: 6, name: 'lemon7' },
    { id: 7, name: 'lemon2' },
];

const dataDropdown = [
    { id: 0, name: 'New Tab', rightSlot: '⌘+T' },
    { id: 1, name: 'New Tab1' },
    { id: 2, name: 'New Tab2' },
    { id: 3, name: 'New Tab3', rightSlot: '⌘+B', disabled: true },
    { id: 4, name: 'New Tab4', rightSlot: '⌘+D' },
];

export const CardDropdown = () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    const [, setItem] = useState('');

    return (
        <Widgets title="Form dropdown" size="small" description="Тестовая форма с выпадающими списками">
            <div className={styles.wrapper}>
                <FormItem label='Email address'>
                    <Select onChange={setValue} value={value} placeholder="Выберите...">
                        {data.map((item) => (
                            <SelectOption key={item.id} value={item.name}>
                                {item.name}
                            </SelectOption>
                        ))}
                    </Select>
                </FormItem>
                <FormItem>
                    <Dropdown trigger={<Button type="button">открыть</Button>}>
                        {dataDropdown.map((tab) => (
                            <DropdownItem
                                key={tab.id}
                                disabled={tab.disabled}
                                name={tab.name}
                                onAction={() => setItem(tab.name)}
                                rightSlot={tab.rightSlot}
                            />
                        ))}
                    </Dropdown>
                </FormItem>
            </div>
        </Widgets>
    )
}

