import defaultOption from './config'
import { parseDom, setScale, delayFun } from './lib/dom'
import { setStyle } from './lib/styles'
export default class Zoom {
    constructor (options) {
        this.body = document.body
        this.el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
        this.imgs = []
        this.style = {}
        this.instance = {
            options: {}
        }
        this.shown = false
        Object.keys(defaultOption).forEach(type => this[type] = options[type] || defaultOption[type])
        this.init()
    }
    init () {
        this.imgs = this.el.querySelectorAll(this.defaultSelector)
        this.listen(this.imgs)
    }
    /**
     * 绑定el
     * 
     * @param {String|Element} el
     * @returns {Zoom}
     */
    listen (el) {
        el.forEach(event => {
            event.addEventListener('click', event => this.binding(event))
        })

        return this
    }

    binding (event) {
        this.open(event)
    }

    /**
     * 打开
     *
     * @param {String|Element} event
     * @returns {Zoom}
     */
    open (event) {
        if (this.shown) {
            return this
        }
        this.shown = true
        const rect = event.target.getBoundingClientRect()
        const scale = setScale(rect)
        let maskDom = this.instance.mask = parseDom(this.maskHtml)
        maskDom.addEventListener('click', e => {
            this.close(event)
        })
        let options = this.instance.options = {
            windowHeight: window.innerHeight,
            windowWidth: document.body.clientWidth,
            windowScrollY: window.scrollY,
            windowScrollX: window.scrollX
        }
        options.transformY = options.windowScrollY - (options.windowWidth / 2)
        options.transformX = (rect.height - (rect.height * scale)) / 2 + rect.top
        this.style.open = {
            position: 'relative',
            zIndex: '233',
            transform: `translate3d(0, ${-options.transformX}px, 0) scale(${scale}, ${scale})`,
            transition: '0.4s cubic-bezier(0.4, 0, 0, 1)'
        }
        setStyle(event.target, this.style.open)
        this.body.appendChild(maskDom)
        document.addEventListener('scroll', function () {
            delayFun(function () {
                console.log(1)
            }, 300)
        })
    }
    close (event) {
        document.body.removeChild(this.instance.mask)
        this.shown = false
        setStyle(event.target, { transform: 'none', zIndex: '', position: '' })
    }
}