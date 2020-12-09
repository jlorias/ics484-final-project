let rwanda_line = {
    x: [2015,2016,2017,2018,2019],
    y: [154, 152, 151, 151, 152],
    mode: 'scatter',
    name: 'Rwanda',
    line: {color: '#6064db'}
}

let afghanistan_line = {
    x: [2015,2016,2017,2018,2019],
    y: [153, 154, 141, 145, 154],
    mode: 'scatter',
    name: 'Afghanistan',
    line: {color: '#7477e0'}
}

let tanzania_line = {
    x: [2015,2016,2017,2018,2019],
    y: [146, 149, 153, 153, 153],
    mode: 'scatter',
    name: 'Tanzania',
    line: {color: '#888be4'}
}

let syria_line = {
    x: [2015,2016,2017,2018,2019],
    y: [156, 156, 152, 150, 149],
    mode: 'scatter',
    name: 'Syria',
    line: {color: '#9c9ee9'}
}

let burundi_line = {
    x: [2015,2016,2017,2018,2019],
    y: [157, 157, 154, 156, 145],
    mode: 'scatter',
    name: 'Burundi',
    line: {color: '#b0b2ed'}
}

let bot5_line_layout = {
    showlegend: true,
    xaxis: {
        title: 'Years (2015-2019)',
        range:  ['2015', '2019'],
        dtick: 1
    },
    yaxis: {
        title: 'Ranking',
        dtick: 1,
        range: [158, 140],
    },
    title:'Bottom 5 Countries Ranking Over Time'
};

data2 = [rwanda_line, afghanistan_line, tanzania_line, syria_line, burundi_line];

Plotly.newPlot('line-plot-bottom', data2, bot5_line_layout);