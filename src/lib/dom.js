export function parseDom(arg) { 
    let dom = document.createElement('div')
    dom.innerHTML = arg
    let child = []
    for (let i of dom.childNodes) {
        if (i.nodeType === 1) {
            child.push(i)
        }
    }
    return child.length > 1 ? child : child[0]
}

export function setScale (rest) {
    return Math.min(window.innerHeight / rest.height, document.body.offsetWidth / rest.width)
}
export function delayFun (Fn, time = 300) {
    let timer
    if (timer) clearTimeout(timer)
    timer = setTimeout(Fn, time)
}