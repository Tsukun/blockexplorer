export interface QueryVariables {
    hash?: string
}

export const queryParse = (query: string) => {
    const queryString = query.split('?')[1]
    const queryArray = queryString.split('&')
    const queryObject: QueryVariables = {}
    queryArray.forEach((item: string) => {
        const [key, value] = item.split('=')
        queryObject[key as keyof QueryVariables] = value
    })
    return queryObject
}
