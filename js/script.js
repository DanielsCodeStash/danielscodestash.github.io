window.app = {}
var app = window.app;

$(document).ready(function () {
  $('#forwardButton2').click(function (e) {
    app.changeData('data/201911.json')
  })

  $('#forwardButton').click(function (e) {
    app.changeData('data/201909.json')
  })

  $('#backButton').click(function (e) {
    app.changeData('data/201910.json')
  })

  app.displayMonth('data/201909.json')
  $.getJSON('data/201909.json', function (json) {
    app.treemap = new d3plus.Treemap()
      .data(json)
      .groupBy(['g1', 'g2'])
      .select('#graphPanel')
      .sum('value')
      .render()

    app.resizeChart()
  })
})

app.displayMonth = function (datapath) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  var prefixLength = 'data/'.length
  var yearLength = 4
  var monthLength = 2

  var year = datapath.substring(prefixLength, prefixLength + yearLength)
  var month = datapath.substring(
    prefixLength + yearLength,
    prefixLength + yearLength + monthLength
  )

  var text = monthNames[month - 1] + ' ' + year

  $('#activeMonth').text(text)
}

app.changeData = function (datapath) {
  app.displayMonth(datapath)
  app.treemap.data(datapath)
  app.treemap.render()
}

app.resizeChart = function () {
  var w = window.innerWidth
  var h = window.innerHeight

  document
    .getElementById('topPanel')
    .setAttribute('style', 'height: ' + 60 + 'px')
  document
    .getElementById('mainPanel')
    .setAttribute('style', 'padding-left:10px')

  if (app.treemap) {
    app.treemap.width(w - 20)
    app.treemap.height(h - 60 - 50)

    app.treemap.render()
  }
  console.log('w = ' + w + ', h = ' + h)
}

window.addEventListener('load', function (event) {
  app.resizeChart()
})

window.addEventListener('resize', function (event) {
  app.resizeChart()
})
