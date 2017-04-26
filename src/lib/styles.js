export function setStyle (el, styleObj) {
    let styles = el.style
    Object.keys(styleObj).forEach(key => {
        styles[key] = styleObj[key]
    })

    return styles
}