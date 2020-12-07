
    Plotly.d3.csv('https://raw.githubusercontent.com/idemello/Cholera484/master/choleraDeathLocations.csv', function (err, rows) {
      Plotly.d3.csv("https://raw.githubusercontent.com/idemello/Cholera484/master/choleraPumpLocations.csv", function (err2, rows2) {
        function unpack(rows, key) {
          return rows.map(function (row) {
            return row[key];
          });
        }

        var pumpLocLon = [];
        var pumpLocLat = [];

        //console.log(rows2);

        pumpLocLon.push(Object.keys(rows2[0])[0]);
        pumpLocLat.push(Object.keys(rows2[0])[1]);


        for (var i = 0; i < rows2.length; i++) {
          pumpLocLat.push(rows2[i]["51.513341"]);
          pumpLocLon.push(rows2[i]["-0.136668"]);
        }


        /*for (var i = 0; i <= rows2.length; i++) {
            rows.push({Deaths: "10.9999", PumpLon: pumpLocLon[i], PumpLat: pumpLocLat[i]});
        }
        */
        //console.log(pumpLocLon);
        //console.log(pumpLocLat);

        console.log(pumpLocLat);
        console.log(pumpLocLon);

        // var newArr = Object.values(rows);
        //console.log(newArr[0]);

        for (i = 0; i < rows2.length; i++) {
          // newArr[0].push('0');
        }

        //console.log(rows[0]['Deaths']);


        var scl = [[0, "#a50026"], [0.1, "#d73027"], [0.2, "#f46d43"], [0.3, "#fdae61"], [0.4, "#fee090"], [0.5, "#ffffff"], [0.6, "#e0f3f8"], [0.7, "#313695"], [0.8, "#313695"], [0.9, "#3C2200"], [1, "#000"]];
        var data = [{
          type: 'scattermapbox',
          mode: 'markers',
          text: unpack(rows, 'Deaths'),
          lon: unpack(rows, 'PumpLon'),
          lat: unpack(rows, 'PumpLat'),
          marker: {
            color: 'rgb(255, 3, 3)',
            autocolorscale: false,
            cmin: 0,
            cmax: 20,
            reversescale: false,
            opacity: 0.59,
            size: unpack(rows, 'Deaths'),
            sizeref: 0.3333333333,
            colorbar: {
              thickness: 10,
              titleside: 'right',
              outlinecolor: 'rgba(68,68,68,0)',
              ticks: 'outside',
              ticklen: 3,
              shoticksuffix: 'last',
              ticksuffix: ' deaths',
              dtick: 1
            }
          },

          name: 'Deaths'
        }];

        var pumpData = [{
          type: 'scattermapbox',
          mode: 'markers',
          opacity: 0.5,
          lon: pumpLocLon,
          lat: pumpLocLat,
          marker: {
            symbol: 'square',
            size: 15,
            color: 'rgb(0,0,0)'
          },
          name: 'Pump'
        }];

        var layout = {

          height: 1000,
          width: 2000,
          dragmode: 'zoom',
          title: 'Deaths by Location From Cholera, London, August 19th, 1854 to September 29th 1854',
          mapbox: {
            center: {
              lat: 51.51289,
              lon: -0.136523
            },
            domain: {
              x: [0, 1],
              y: [0, 1]
            },
            style: 'dark',
            zoom: 16.1
          },
          margin: {
            r: 0,
            t: 0,
            b: 0,
            l: 0,
            pad: 0
          },
          showlegend: true,
          legend: {
            x: 0,
            y: 1,
            traceorder: 'normal',
            font: {
              family: 'sans-serif',
              size: 12,
              color: '#000'
            },
            sizeref: 0.3333,
            bgcolor: '#E2E2E2',
            bordercolor: '#FFFFFF',
            borderwidth: 2
          }
        };

        Plotly.setPlotConfig({
          mapboxAccessToken: 'pk.eyJ1IjoiaWRlbWVsbG8iLCJhIjoiY2ptNnFiZmc5MDJoZzNwdXE2aXhiYXNqdCJ9.qKCVHMu9enwE6uzCJRDgFw'
        });

        Plotly.newPlot('myDiv', data, layout);
        Plotly.plot('myDiv', pumpData, layout);
      })
    });
