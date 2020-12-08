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
  r: [7.56625,	1.3915,	1.49475,	0.914375,	0.6080625,	0.29375,	0.42225],
  theta: ['Happiness','GDP','Social Support', 'Life Expectancy', 'Freedom', 'Generosity','Perception of Corruption'],
  fill: 'toself',
  name: 'Denmark'
  },
  {
  type: 'scatterpolar',
  r: [7.56625,	1.3915,	1.49475,	0.914375,	0.6080625,	0.29375,	0.42225],
  theta: ['Happiness','GDP','Social Support', 'Life Expectancy', 'Freedom', 'Generosity','Perception of Corruption'],
  fill: 'toself',
  name: 'Norway'
  },
  {
  type: 'scatterpolar',
  r: [7.504625,	1.384125,	1.542	0.958375,	0.6010625,	0.39475,	0.131875],
  theta: ['Happiness','GDP','Social Support', 'Life Expectancy', 'Freedom', 'Generosity','Perception of Corruption'],
  fill: 'toself',
  name: 'Iceland'
  },
  {
  type: 'scatterpolar',
  r: [7.499625,	1.464625,	1.458125,	0.974625,	0.60075,	0.272125,	0.366],
  theta: ['Happiness','GDP','Social Support', 'Life Expectancy', 'Freedom', 'Generosity','Perception of Corruption'],
  fill: 'toself',
  name: 'Switzerland'
  },
  {
  type: 'scatterpolar',
  r: [7.435875,	1.405375,	1.41425,	0.92375,	0.5739375,	0.380125,	0.298375],
  theta: ['Happiness','GDP','Social Support', 'Life Expectancy', 'Freedom', 'Generosity','Perception of Corruption'],
  fill: 'toself',
  name: 'Netherlands'
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
      visible: false,
      range: [0, 10]
    }
  }
}

Plotly.newPlot("myDiv", data, layout)
