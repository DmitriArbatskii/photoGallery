let apiUrl = 'https://jsonplaceholder.typicode.com/photos'
const grid = document.getElementById('grid')
const select = document.getElementById('select')

async function getAPI(url) {
    let response = await fetch(url)
    let data = await response.json()

    data = data.splice(0, 300)
    return data
}

//выводит список фотографий по заданному альбому
function renderPhoto(data) {
    //очищает список фотографий перед обновлением
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    for (let item in data) {
        let imgContainer = document.createElement('div')
        imgContainer.setAttribute('class', 'grid__cell_container')
        grid.append(imgContainer)

        let img = document.createElement('img')
        img.className = 'grid__cell'
        img.setAttribute('src', data[item].url)
        img.setAttribute('alt', data[item].title)
        imgContainer.append(img)
    }
}

//получаем массив из всех возможных альбомов и создаем из них селект
function getAlbums(data) {
    let arr = []
    for (let item in data) {
        //проверка, есть ли такой альбом в массиве
        if (! arr.includes(data[item].albumId)) {
            arr.push(data[item].albumId)
        }
    }
    renderAlbums(arr)
}

function renderAlbums(arr) {
    for (let value of arr)  {
        let option = document.createElement('option')
        option.setAttribute('value', value)
        option.textContent = value
        select.append(option)
    }
}

//по выбору из селекта генерируем нужную ссылку с уже выбраным альбомом
async function selectAlbum(event) {
    let target = event.target.value
    if (target != 'all') {
        apiUrl += `?albumId=${target}`
    }
    photoPequest()
    apiUrl = 'https://jsonplaceholder.typicode.com/photos'
}


async function photoPequest() {
    let res = await getAPI(apiUrl)
    renderPhoto(res)
}

async function albumPequest() {
    let res = await getAPI(apiUrl)
    getAlbums(res)
}

photoPequest()
albumPequest()
select.addEventListener('change', selectAlbum)