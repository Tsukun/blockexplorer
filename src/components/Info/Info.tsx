import { Block } from 'app/types/ethereum'

import styles from './Info.module.scss'
import Accordion from 'components/Accordion/Accordion'

interface BlockMainInfoProps {
    info: Block
}

const Info = (props: BlockMainInfoProps) => {
    const { info } = props

    const render = (object: Block | any): React.ReactNode => {
        if (!object) {
            return null
        }
        return Object.entries(object).map(([key, value]) => {
            const typedKey = key as keyof Block
            if (typeof object[typedKey] === 'object') {
                return (
                    <Accordion title={key}>
                        {render(object[typedKey])}
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

    return <div className={styles.container}>{render(info)}</div>
}
export default Info
