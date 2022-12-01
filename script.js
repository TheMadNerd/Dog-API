const button = document.querySelector('button')
const img = document.querySelector('img')

const dogApi = 'https://dog.ceo/api/breeds/image/random'

button.addEventListener('click', () => {

    fetch(dogApi)
    .then(res => res.json() )
    .then(data => img.setAttribute('src', data.message))
    .catch(err => console.error(err))

})
