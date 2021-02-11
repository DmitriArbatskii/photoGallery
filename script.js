//два запроса надо, чтобы один из запросов всегда генерировал
//список всех возможных альбомов, а второй загружал только
// только выбранные фотографии
let apiUrl = 'https://jsonplaceholder.typicode.com/photos'
let apiUrl2 = 'https://jsonplaceholder.typicode.com/photos'
const grid = document.getElementById('grid')
const select = document.getElementById('select')

//первый запрос отвечает за рендер фотографий
async function getAPI(url) {
    let response = await fetch(url)
    let data = await response.json()

    data = data.splice(0, 300)
    getPhoto(data)
}

//второй запрос отвечает за генерирование списка альбомов
async function getAPI2(url) {
    let response = await fetch(url)
    let data = await response.json()

    data = data.splice(0, 300)
    getAlbums(data)
}

//выводит список фотографий по заданному альбому
function getPhoto(data) {
    //очищает список фотографий перед обновлением
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    for (let item in data) {
        let img = document.createElement('img')
        img.className = 'grid__cell'
        img.setAttribute('src', data[item].url)
        grid.append(img)
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
    for (let value of arr)  {
        let option = document.createElement('option')
        option.setAttribute('value', value)
        option.textContent = value
        select.append(option)
    }

}

//по выбору из селекта генерируем нужную ссылку с уже выбраным альбомом
function selectAlbum(event) {
    let target = event.target.value
    if (target != 'all') {
        apiUrl += `?albumId=${target}`
    }
    getAPI(apiUrl)
    apiUrl = 'https://jsonplaceholder.typicode.com/photos'
}

select.addEventListener('change', selectAlbum)

getAPI(apiUrl)
getAPI2(apiUrl2)