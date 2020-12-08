// loop through csv data
data = [
  {
  type: 'scatterpolar',
  r: [7.6245, 1.350625,	1.491625,	0.915875,	0.606625,	0.1935,	0.3965],
  theta: ['Happiness','GDP','Social Support', 'Life Expectancy', 'Freedom', 'Generosity','Perception of Corruption'],
  fill: 'toself',
  name: 'Norway'
  },
  {
  type: 'scatterpolar',
  r: [1.350625,	1.491625,	0.915875,	0.606625,	0.1935,	0.3965],
  theta: ['Happiness','GDP','Social Support', 'Life Expectancy', 'Freedom', 'Generosity','Perception of Corruption'],
  fill: 'toself',
  name: 'Finland'
  }
]

layout = {
  polar: {
    radialaxis: {
      visible: false,
      range: [0, 10]
    }
  }
}

Plotly.newPlot("myDiv", data, layout)
