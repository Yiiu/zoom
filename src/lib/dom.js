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