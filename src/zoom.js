import defaultOption from './config'
import Imgs from './img'
import Mask from './mask'
export default class Zoom {
    constructor (options) {
        this.body = document.body
        this.el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
        this.imgs = []
        this.style = {}
        this.instance = {
            options: {},
            event: null
        }
        this.lock = false   // 过渡时不允许操作
        this.shown = false
        this.Mask = new Mask()
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
            event.addEventListener('click', this.handleClick.bind(this))
        })
        document.addEventListener('scroll', this.close.bind(this))

        return this
    }

    handleClick () {
        if (!this.shown) {
            this.open(event.target)
        } else {
            this.close()
        }
    }

    /**
     * 打开
     *
     * @param {String|Element} event
     * @returns {Zoom}
     */
    open (event) {
        if (this.lock || this.shown) return this
        let img = this.instance.event = new Imgs(event)
        img.style({
            position: 'relative',
            transform: `translate3d(${img.offset().y}px, ${img.offset().x}px, 0) scale3d(${img.scale()}, ${img.scale()}, 1)`,
            transition: '0.4s cubic-bezier(0.4, 0, 0, 1)',
            zIndex: 2333
        })
        this.lock = true
        this.shown = true
        this.Mask.insert()
        this.Mask.show()
        let End = () => {
            img.event.removeEventListener('transitionend', End)
            this.lock = false
        }
        img.event.addEventListener('transitionend', End)
    }

    /**
     * 关闭
     */
    close () {
        if (this.lock || !this.shown) return this
        let img = this.instance.event
        this.Mask.hide()
        img.style({
            transform: `translate3d(0, 0, 0) scale3d(1, 1, 1)`
        })
        this.lock = true
        this.shown = false
        let End = () => {
            img.event.removeEventListener('transitionend', End)
            this.lock = false
            this.Mask.remove()
            img.style({
                position: 'relative',
                zIndex: ''
            })
        }
        img.event.addEventListener('transitionend', End)
    }
}