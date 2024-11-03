import { BuildEnv, BuildPaths } from 'src/config/build/types'
import path from 'path'
import webpack from 'webpack'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode = env.mode || 'development'
    const PORT = env.port || 3000
    const isDev = mode === 'development'
}
