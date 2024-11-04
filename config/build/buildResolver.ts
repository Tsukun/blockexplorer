import webpack from 'webpack'
import { BuildOptions } from './types'

export function buildResolvers({
    paths,
}: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    }
}
