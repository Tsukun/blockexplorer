import { Block } from 'src/types/ethereum'

interface BlockMainInfoProps {
    info: Block
}

const BlockMainInfo = (props: BlockMainInfoProps) => {
    const { info } = props

    const render = (object: Block | any): React.ReactNode => {
        if (!object) {
            return null
        }
        return Object.entries(object).map(([key, value]) => {
            const typedKey = key as keyof Block
            if (typeof object[typedKey] === 'object') {
                return (
                    <details key={key}>
                        <summary>{key}</summary>
                        <span>{render(object[typedKey])}</span>
                    </details>
                )
            }
            return (
                <div key={object[typedKey]}>
                    {key}: {object[key]}
                </div>
            )
        })
    }

    return <div>{render(info)}</div>
}
export default BlockMainInfo
