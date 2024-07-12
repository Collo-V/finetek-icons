import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url'
import copy from 'rollup-plugin-copy-assets'
import svgr from '@svgr/rollup'
const packageJson = require("finetek-icons-regular/package.json");
const sharedRollupConfig = {
    input: 'src/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            assetFileNames: 'assets/[name]-[hash][extname]',
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
            assetFileNames: 'assets/[name]-[hash][extname]',
        },
    ],
    plugins: [
        nodeResolve(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
        }),
        commonjs(),
        del({ targets: 'dist/*' }),
        peerDepsExternal(),
        copy({
            assets: [
                "src/assets",
            ],
        }),
        url({
            include: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg', '**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf', '**/*.otf'],
            limit: 8192,
            emitFiles: true,
            fileName: '[name].[hash][extname]',
            publicPath: 'assets/',
            destDir: 'dist/assets',
        }),
        svgr(),
        postcss()

    ],
    external:['react', 'react-dom'],
}
export default sharedRollupConfig;