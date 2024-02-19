import { Widgets } from "../../components/widgets/widgets"
import { Input, Button, FormItem, Tooltip } from "platon";
import styles from './card-form.module.scss'

export const CardForm = () => {

    return (
        <Widgets title="Sign up" size="small">
            <div className={styles.wrapper}>
                <FormItem label={<>Email address <Tooltip trigger={<Button className={styles.triggerTooltip}>*</Button>}>Enter your email address</Tooltip></>}>
                    <Input className={styles.input} />
                </FormItem>
                <FormItem label={<>Password <Tooltip trigger={<Button className={styles.triggerTooltip}>*</Button>}>Enter your password</Tooltip></>}>
                    <Input />
                </FormItem>
                <div className={styles.wrapperButton}>
                    <Button variant="outline">Create an account</Button>
                    <Button>Sign in</Button>
                </div>
            </div>
        </Widgets>
    )
}

