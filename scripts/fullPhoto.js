// grid.addEventListener('click', function (event) {
//     let target = event.target
//     if (target.tagName != 'IMG') return
//
//     let fullPhoto_container = document.createElement('div')
//     fullPhoto_container.setAttribute('id', 'fullPhoto__container')
//     grid.append(fullPhoto_container)
//
//     let fullPhoto = document.createElement('img')
//     fullPhoto.setAttribute('id', 'fullPhoto')
//     fullPhoto.setAttribute('alt', target.alt)
//     fullPhoto.setAttribute('src', target.src)
//     grid.append(fullPhoto)
//
//     let fullPhoto_closeButton = document.createElement('button')
//     fullPhoto_closeButton.setAttribute('id', 'fullPhoto__closeButton')
//     fullPhoto_closeButton.innerHTML = 'x'
//     grid.append(fullPhoto_closeButton)
// })
//
// let button = document.getElementById('fullPhoto_closeButton')
// button.addEventListener('click', function (event) {
//     // let fullPhoto_container = document.getElementById('fullPhoto_container').remove()
//     // let fullPhoto = document.getElementById('fullPhoto').remove()
//     // let fullPhoto_closeButton = document.getElementById('fullPhoto_closeButton').remove()
//     console.log('click')
// })

grid.addEventListener('click', function (event) {
    let target = event.target

    let fullPhoto_container = document.getElementById('fullPhoto_container')
    let fullPhoto = document.getElementById('fullPhoto')
    fullPhoto.setAttribute('alt', target.alt)
    fullPhoto.setAttribute('src', target.src)
    let fullPhoto_closeButton = document.getElementById('fullPhoto_closeButton')

    fullPhoto_container.style.display = 'block'
    fullPhoto.style.display = 'block'
    fullPhoto_closeButton.style.display = 'block'
})
