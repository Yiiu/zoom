const babel = require('rollup-plugin-babel')
const eslint = require('rollup-plugin-eslint')
const uglify = require('rollup-plugin-uglify')

module.exports =  {
    entry: 'src/index.js',
    dest: 'dist/js/main.js',
    format: 'umd',
    sourceMap: 'inline',
    moduleName: 'zoom',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        eslint({ /* your options */ }),
        uglify()
    ],
    banner: 
`/**
 * test
 * (c) ${new Date().getFullYear()} Yiiu
 * @license MIT
 */`
}