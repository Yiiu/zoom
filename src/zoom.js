export default class Zoom {
    constructor (options) {
        this.body = document.body
        this.show = false
    }
    /**
     * 绑定el
     * 
     * @param {String|Element} el
     * @returns
     * 
     * @memberOf Zoom
     */
    listen (el) {
        if (typeof el === 'string') {
            let els = document.querySelectorAll(el)
            let i = els.length
            while (i--) {
                this.listen(els[i])
            }
            return
        }

        el.addEventListener('click', (e) => this.binding(e))

        return this
    }

    binding (e) {
        this.show ? console.log(1) : this.open()
    }
    
    open () {
        
    }
}