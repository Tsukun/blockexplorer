export type BuildMode = 'production' | 'development'

export interface BuildEnv {
    mode: BuildMode
    port: number
}

export interface BuildOptions extends BuildEnv {
    paths: BuildPaths
    isDev: boolean
}

export interface BuildPaths {
    entry: string
    output: string
    html: string
    src: string
}
