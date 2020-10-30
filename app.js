var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click', function () {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Yaroslavl&units=metric&appid=8cb5c34ee8f8731976267741851be551'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      var tempValue = data['main']['temp']

      temp.innerHTML = `Temperature is ${tempValue} °`
    })

    .catch((err) => alert('Wrong city name'))

  //можно записывать максимальную в переменную
  //ссуммировать среднюю и разделить на кол-во sum/array.length ++
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=Yaroslavl&units=metric&appid=8cb5c34ee8f8731976267741851be551'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      var tempList = data['list']
      var sum = 0

      console.log(tempList)

      for (var temp in tempList) {
        sum += data['list'][temp]['main']['temp']
        // console.log(temp)
      }
      // console.log(sum)
      // console.log(tempList.length)
      sum = (sum / tempList.length).toFixed(2)

      //console.log(data['list'][temp]['main']['temp']['morn'])

      // for MORN
      // var maxArray = []

      // for (var maxTemp in tempList) {
      //   maxArray.push(data['list'][maxTemp]['main']['temp_max'])
      // }
      // console.log(maxArray)
      desc.innerHTML = `Avarage temperature for 5 days is ${sum} °`
    })
})
