import defaultOption from './config'
import { parseDom } from './lib/dom'
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
        this.show = false
        Object.keys(defaultOption).forEach(type => this[type] = options[type] || defaultOption[type])
        this.init()
    }
    init () {
        this.imgs = this.el.querySelectorAll(this.defaultSelector)
        this.listen(this.imgs)
    }
    /**
     * 绑定<e></e>l
     * 
     * @param {String|Element} el
     * @returns
     * 
     * @memberOf Zoom
     */
    listen (el) {
        el.forEach(event => {
            event.addEventListener('click', event => this.binding(event))
        })

        return this
    }

    binding (event) {
        this.show ? console.log(2) : this.open(event)
    }
    
    open (event) {
        let options = this.instance.options
        const rect = event.getBoundingClientRect()
        let maskDom = parseDom(this.maskHtml)
        maskDom.addEventListener('click', e => {
            this.close(event)
        })
        options = {
            windowHeight: window.innerHeight,
            windowWidth: document.body.clientWidth,
            imgOffsetTop: event.target.offsetTop,
            imgOffsetLeft: event.target.offsetLeft,
            width: event.target.clientWidth,
            height: event.target.clientHeight,
            windowScrollY: window.scrollY,
            windowScrollX: window.scrollX
        }
        options.scale = options.windowHeight / options.height
        options.transformY = options.windowScrollY - (options.windowWidth / 2),
        options.transformX = options.windowScrollY - (options.windowHeight / 2)
        console.dir(options)
        this.style.open = {
            position: 'relative',
            zIndex: '233',
            transform: `translate3d(0, ${options.transformX}px, 0) scale(${options.scale}, ${options.scale})`,
            transition: '0.4s cubic-bezier(0.4, 0, 0, 1)'
        }
        setStyle(event.target, this.style.open)
        this.body.appendChild(maskDom)
    }
    close (event) {
        let options = this.instance.options
        setStyle(event.target, { transform: 'none' })
    }
}