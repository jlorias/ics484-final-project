let finland_corruption_line = {
    x: [2015,2016,2017,2018,2019],
    y: [0.414, 0.41, 0.383, 0.393, 0.393],
    mode: 'scatter',
    name: 'Finland',
    line: {color: '#FFBA08'}
}

let denmark_corruption_line = {
    x: [2015,2016,2017,2018,2019],
    y: [0.484, 0.445, 0.401, 0.408, 0.41],
    mode: 'scatter',
    name: 'Denmark',
    line: {color: '#FAA307'}
}

let norway_corruption_line = {
    x: [2015,2016,2017,2018,2019],
    y: [0.365, 0.358, 0.316, 0.34, 0.341],
    mode: 'scatter',
    name: 'Norway',
    line: {color: '#F48C06'}
}

let iceland_corruption_line = {
    x: [2015,2016,2017,2018,2019],
    y: [0.141, 0.15, 0.154, 0.138, 0.118],
    mode: 'scatter',
    name: 'Iceland',
    line: {color: '#E85D04'}
}

let switzerland_corruption_line = {
    x: [2015,2016,2017,2018,2019],
    y: [0.42, 0.412, 0.367, 0.357, 0.343],
    mode: 'scatter',
    name: 'Switzerland',
    line: {color: '#DC2F02'}
}

let rwanda_corruption_line = {
    x: [2015,2016,2017,2018,2019],
    y: [0.552, 0.505, 0.455, 0.444, 0.411],
    mode: 'scatter',
    name: 'Rwanda',
    line: {color: '#D00000'}
}

let afghanistan_corruption_line = {
    x: [2015,2016,2017,2018,2019],
    y: [0.097, 0.071, 0.061, 0.036, 0.025],
    mode: 'scatter',
    name: 'Afghanistan',
    line: {color: '#9D0208'}
}

let tanzania_corruption_line = {
    x: [2015,2016,2017,2018,2019],
    y: [0.057, 0.051, 0.066, 0.097, 0.147],
    mode: 'scatter',
    name: 'Tanzania',
    line: {color: '#6A040F'}
}

let syria_corruption_line = {
    x: [2015,2016,2017,2018,2019],
    y: [0.189, 0.172, 0.151, 0.144, 0.141],
    mode: 'scatter',
    name: 'Syria',
    line: {color: '#370617'}
}

let burundi_corruption_line = {
    x: [2015,2016,2017,2018,2019],
    y: [0.101, 0.094, 0.084, 0.076, 0.18],
    mode: 'scatter',
    name: 'Burundi',
    line: {color: '#03071E'}
}

let top_bot_corrupt_line_layout = {
    showlegend: true,
    xaxis: {
        title: 'Years (2015-2019)',
        range:  ['2015', '2019'],
        dtick: 1
    },
    yaxis: {
        title: 'Ranking',
        range: [0, 0.70],
        dtick: 0.02
    },
    title:'Top 5 and Bottom 5 Countries Perception of Corruption from 2015 - 2019'
};

top_bot_data = [finland_corruption_line, denmark_corruption_line, iceland_corruption_line, norway_corruption_line, switzerland_corruption_line, rwanda_corruption_line, afghanistan_corruption_line, tanzania_corruption_line, syria_corruption_line, burundi_corruption_line];

Plotly.newPlot('corruption', top_bot_data , top_bot_corrupt_line_layout);