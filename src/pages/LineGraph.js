let finland = {
        x: [2015,2016,2017,2018,2019],
        y: [6, 5, 5, 1, 1],
        mode: 'scatter',
        name: 'Finland',
        line: {color: '#900C3F'}
    }

let denmark = {
    x: [2015,2016,2017,2018,2019],
    y: [3, 1, 2, 3, 2],
    mode: 'scatter',
    name: 'Denmark',
    line: {color: '#C70039'}
}

let norway = {
    x: [2015,2016,2017,2018,2019],
    y: [4, 4, 1, 2, 3],
    mode: 'scatter',
    name: 'Norway',
    line: {color: '#FF5733'}
}

let iceland = {
    x: [2015,2016,2017,2018,2019],
    y: [2, 3, 3, 4, 4],
    mode: 'scatter',
    name: 'Iceland',
    line: {color: '#FFC300'}
}

let switzerland = {
    x: [2015,2016,2017,2018,2019],
    y: [1, 2, 4, 5, 6],
    mode: 'scatter',
    name: 'Switzerland',
    line: {color: '#DAF7A6'}
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
        range: [6, 1],
    },
    title:'Top 5 Countries Ranking Over Time'
    };

data = [finland, denmark, iceland, norway, switzerland];

Plotly.newPlot('line-plot-top', data, top5_line_layout);



let rwanda = {
    x: [2015,2016,2017,2018,2019],
    y: [154, 152, 151, 151, 152],
    mode: 'scatter',
    name: 'Rwanda',
    line: {color: '#900C3F'}
}

let afghanistan = {
    x: [2015,2016,2017,2018,2019],
    y: [153, 154, 141, 145, 154],
    mode: 'scatter',
    name: 'Afghanistan',
    line: {color: '#C70039'}
}

let tanzania = {
    x: [2015,2016,2017,2018,2019],
    y: [146, 149, 153, 153, 153],
    mode: 'scatter',
    name: 'Tanzania',
    line: {color: '#FF5733'}
}

let syria = {
    x: [2015,2016,2017,2018,2019],
    y: [156, 156, 152, 150, 149],
    mode: 'scatter',
    name: 'Syria',
    line: {color: '#FFC300'}
}

let burundi = {
    x: [2015,2016,2017,2018,2019],
    y: [157, 157, 154, 156, 145],
    mode: 'scatter',
    name: 'Burundi',
    line: {color: '#DAF7A6'}
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
        range: [157, 141],
    },
    title:'Bottom 5 Countries Ranking Over Time'
};

data2 = [rwanda, afghanistan, tanzania, syria, burundi];

Plotly.newPlot('line-plot-bottom', data2, bot5_line_layout)