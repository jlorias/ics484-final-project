data = [
  {
  type: 'scatterpolar',
  r: [7.6245, 1.350625,	1.491625,	0.915875,	0.606625,	0.1935,	0.3965],
  theta: ['Happiness','GDP','Social Support', 'Life Expectancy', 'Freedom', 'Generosity','Perception of Corruption'],
  fill: 'toself',
  name: 'Finland'
  },
  {
  type: 'scatterpolar',
  r: [1.5, 10, 39, 31, 15, 1.5],
  theta: ['A','B','C', 'D', 'E', 'A'],
  fill: 'toself',
  name: 'Group B'
  }
]

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 50]
    }
  }
}

Plotly.newPlot("myDiv", data, layout)
