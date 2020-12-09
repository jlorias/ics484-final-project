Plotly.d3.csv("./src/assets/top5.csv", function(err, rows) {
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
        }

        var top5HeaderNames= Plotly.d3.keys(rows[0]);

      var top5HeaderValues = [];
      var top5CellValues = [];
      for (i = 0; i < 9; i++) {
          top5HeaderValue = [top5HeaderNames[i]];
          top5HeaderValues[i] = top5HeaderValue;
          top5CellValue = unpack(rows, top5HeaderNames[i]);
          top5CellValues[i] = top5CellValue;
    }

    var finland = {
        x: cellValues[0],
        y: cellValues[1],
        mode: 'lines+markers',
        name: 'Finland',
        line: {color: '#5272f0'}

    }

    var top5_line_layout = {
        title:'Top 5 Countries Ranking Over Time',
        xaxis: {
        title: 'Years (2015-2019)',
        range:  ['2015', '2019'],
        type: 'date'
        },
        yaxis: {
            title: 'Ranking',
            type: 'linear'
        }
    };


    data = [finland];

    Plotly.newPlot('line_plot', data, top5_line_layout);

    });