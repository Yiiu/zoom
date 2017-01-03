export default class Zoom {
    constructor (options) {
        this.body = document.body
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

        el.addEventListener('click', (e) => {
            console.log(1)
        })

        return this
    }
}