import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url'
const packageJson = require("finetek-icons-regular/package.json");
const sharedRollupConfig = {
    input: 'src/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        nodeResolve(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'runtime',
        }),
        commonjs(),
        del({ targets: 'dist/*' }),
        peerDepsExternal(),
        postcss(),
        url({
            include: [
                '**/*.svg',
            ],
            limit: 8192,
            emitFiles: true,
            fileName: '[name].[hash][extname]',
        }),

    ],
    external:['react', 'react-dom'],
}
export default sharedRollupConfig;