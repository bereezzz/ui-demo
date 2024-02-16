import { Widgets } from "../../components/widgets/widgets"
import { AccordionItem, Accordion } from "platon";
import styles from './card-accardion.module.scss'

export const CardAccardion = () => {


    return (
        <Widgets title="Recent activity" description="Recent activity settings test test." size="large">
            <div className={styles.accordionWrapper}>
                <Accordion defaultValue=''
                    type='single'>
                    <AccordionItem
                        children="Yes. It adheres to the WAI-ARIA design pattern."
                        text="Is it accessible"
                        value="item-1"
                    />
                    <AccordionItem
                        children="Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern."
                        text="Is it accessible"
                        value="item-2"
                    />
                    <AccordionItem
                        children="Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern."
                        text="Is it accessible"
                        value="item-3"
                    />
                </Accordion>
            </div>
        </Widgets>
    )
}

