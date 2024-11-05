import { Block } from 'app/types/ethereum'

import styles from './Info.module.scss'
import Accordion from 'components/Accordion/Accordion'
import classNames from 'classnames'
import Scrollbar from 'components/Scrollbar/Scrollbar'

interface BlockMainInfoProps {
    className?: string
    info: Block
}

const Info = (props: BlockMainInfoProps) => {
    const { info, className } = props

    const render = (object: Block | any): React.ReactNode => {
        if (!object) {
            return null
        }
        return Object.entries(object).map(([key, value]) => {
            const typedKey = key as keyof Block
            if (typeof object[typedKey] === 'object') {
                return (
                    <Accordion title={key}>
                        <Scrollbar className={styles.scrollbar}>
                            {render(object[typedKey])}
                        </Scrollbar>
                    </Accordion>
                )
            }
            return (
                <div key={object[typedKey]}>
                    {key}: {object[key]}
                </div>
            )
        })
    }

    return (
        <div className={classNames(className, styles.container)}>
            {render(info)}
        </div>
    )
}
export default Info
