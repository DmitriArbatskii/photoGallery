function showInfo(event) {
    let target = event.target
    if (target.tagName != 'IMG') return

    target.setAttribute('class', 'grid__cell grid__cell_hover')

    let infoParent = target.parentElement
    let info = document.createElement('div')
    info.setAttribute('id', 'grid__cell_info')
    info.setAttribute('class', 'grid__cell_info')
    infoParent.append(info)
    console.log(target)
}

function hideInfo(event) {
    let target = event.target
    if (target.tagName != 'IMG') return

    let info = document.getElementById('grid__cell_info')
    info.remove()

    target.setAttribute('class', 'grid__cell')
}

grid.addEventListener('mouseover', showInfo)
grid.addEventListener('mouseout', hideInfo)
