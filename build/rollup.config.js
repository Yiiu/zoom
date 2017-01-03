const rollup = require('rollup')
const buble = require('rollup-plugin-buble')

export default {
    entry: 'src/index.js',
    dest: 'dist/js/main.js',
    format: 'umd',
    sourceMap: 'inline',
    moduleName: 'zoom',
    plugins: [
        buble()
    ],
    banner: 
`/**
 * test
 * (c) ${new Date().getFullYear()} Yiiu
 * @license MIT
 */`
}