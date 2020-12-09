let finland_line = {
        x: [2015,2016,2017,2018,2019],
        y: [6, 5, 5, 1, 1],
        mode: 'scatter',
        name: 'Finland',
        line: {color: '#FFBA08'}
    }

let denmark_line = {
    x: [2015,2016,2017,2018,2019],
    y: [3, 1, 2, 3, 2],
    mode: 'scatter',
    name: 'Denmark',
    line: {color: '#FAA307'}
}

let norway_line = {
    x: [2015,2016,2017,2018,2019],
    y: [4, 4, 1, 2, 3],
    mode: 'scatter',
    name: 'Norway',
    line: {color: '#F48C06'}
}

let iceland_line = {
    x: [2015,2016,2017,2018,2019],
    y: [2, 3, 3, 4, 4],
    mode: 'scatter',
    name: 'Iceland',
    line: {color: '#E85D04'}
}

let switzerland_line = {
    x: [2015,2016,2017,2018,2019],
    y: [1, 2, 4, 5, 6],
    mode: 'scatter',
    name: 'Switzerland',
    line: {color: '#DC2F02'}
}

let top5_line_layout = {
    showlegend: true,
    xaxis: {
        title: 'Years (2015-2019)',
        range:  ['2015', '2019'],
        dtick: 1
    },
    yaxis: {
        title: 'Ranking',
        range: [8, 1],
        dtick: 1
    },
    title:'Top 5 Countries Ranking Over Time'
    };

data = [finland_line, denmark_line, iceland_line, norway_line, switzerland_line];

Plotly.newPlot('line-plot-top', data, top5_line_layout);