var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var city = document.querySelector('.city')
var temp = document.querySelector('.temp')
var avTemp = document.querySelector('.avTemp')
var maxTemp = document.querySelector('.maxTemp')

button.addEventListener('click', function () {
  city.innerHTML = `Yaroslavl, Russia`

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Yaroslavl&units=metric&appid=8cb5c34ee8f8731976267741851be551'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      var tempValue = data['main']['temp']

      temp.innerHTML = `${tempValue} °c`
    })

    .catch((err) => alert('Wrong city name'))

  // 'https://api.openweathermap.org/data/2.5/forecast?q=Yaroslavl&units=metric&appid=8cb5c34ee8f8731976267741851be551' - 5 days

  // 'https://api.openweathermap.org/data/2.5/forecast/daily?q=Yaroslavl&cnt=5&units=metric&appid=8cb5c34ee8f8731976267741851be551' - 16 days

  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=Yaroslavl&units=metric&appid=8cb5c34ee8f8731976267741851be551'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      var tempList = data['list']
      var sum = 0
      var tempMax = data['list'][0]['main']['temp_max']

      for (var temp in tempList) {
        sum += data['list'][temp]['main']['temp']
        if (data['list'][temp]['main']['temp_max'] > tempMax) {
          tempMax = data['list'][temp]['main']['temp_max']
        }
      }
      sum = (sum / tempList.length).toFixed(2)

      avTemp.innerHTML = `Avarage temperature for 5 days is ${sum} °c`
      maxTemp.innerHTML = `Max temperature for 5 days is ${tempMax} °c`
    })
})
