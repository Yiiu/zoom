/**
 * Created by yuer on 2017/5/4.
 */
import { setStyle } from './lib/styles'
import { setScale } from './lib/dom'

export default class imgs {
    constructor (event) {
        this.event = event
        this.init()
    }

    /**
     * 初始化
     * @returns {this}
     */
    init () {

    }

    style (style) {
        setStyle(this.event, style)
        return this
    }
    scale () {
        return setScale(this.event.getBoundingClientRect())
    }
    offset () {
        let rect = this.event.getBoundingClientRect()
        let offsetY = (rect.width / 2) - (document.body.scrollWidth / 2 - rect.left)
        let offsetX = (rect.height - (rect.height * this.scale())) / 2 + rect.top
        return {
            y: -offsetY,
            x: -offsetX
        }
    }
}