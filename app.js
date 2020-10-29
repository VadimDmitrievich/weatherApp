var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click', function () {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      inputValue.value +
      '&units=metric&appid=8cb5c34ee8f8731976267741851be551'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      var nameValue = data['name']
      var tempValue = data['main']['temp']
      var descValue = data['weather'][0]['description']

      name.innerHTML = `In the city ${nameValue}`
      temp.innerHTML = `Temperature is ${tempValue} °`
      desc.innerHTML = `with ${descValue}`
    })

    .catch((err) => alert('Wrong city name'))
})
