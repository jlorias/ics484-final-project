let finland = {
        x: [2015,2016,2017,2018,2019],
        y: [6, 5, 5, 1, 1],
        mode: 'scatter',
        name: 'Finland',
        line: {color: '#5272f0'}
    }

let top5_line_layout = {
        title:'Top 5 Countries Ranking Over Time',
        xaxis: {
        title: 'Years (2015-2019)',
        range:  ['2015', '2019']
        },
        yaxis: {
            title: 'Ranking',
            type: 'linear'
        }
    };


data = [finland];

Plotly.newPlot('line_plot', data, top5_line_layout);