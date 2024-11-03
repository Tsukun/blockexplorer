const BlockMainInfo = (props) => {
    const { info } = props

    const render = (object) => {
        if (!object) {
            return null
        }
        return Object.keys(object).map((key) => {
            if (typeof object[key] === 'object') {
                return (
                    <details key={key}>
                        <summary>{key}</summary>
                        <span>{render(object[key])}</span>
                    </details>
                )
            }
            return (
                <div key={object[key]}>
                    {key}: {object[key]}
                </div>
            )
        })
    }

    return <div>{render(info)}</div>
}
export default BlockMainInfo
