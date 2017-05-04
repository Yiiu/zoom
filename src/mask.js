/**
 * Created by yuer on 2017/5/4.
 */
import { parseDom } from './lib/dom'
import { setStyle } from './lib/styles'
const defaultConfig = {
    html: `
        <div class="mask"></div>
    `
}
export default class Mask {
    constructor (options, instance) {
        this.options = options
        this.instance = instance
        this.el = parseDom(defaultConfig.html)
        this.parent = document.body
        this.init()
    }
    init () {
        setStyle(this.el, {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zindex: 233,
            background: 'rgba(255, 255, 255, 0.4)',
            transition: '0.4s cubic-bezier(0.4, 0, 0, 1)',
        })
    }
    insert () {
        this.parent.appendChild(this.el)
    }
    show () {
        setTimeout(() => this.el.style.opacity = 1, 30)
    }
    hide  () {
        this.el.style.opacity = 0
    }
    remove () {
        this.parent.removeChild(this.el)
    }
}