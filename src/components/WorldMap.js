/*
 Plotly.d3.csv("src/data/Country_Codes_Revised.csv", function(err, rows) {
        function unpack(rows, key) {
          return rows.map(function (row) {
            return row[key];
          });
        }

        let totalScore = [];
        let country = [];
        let countryCode = [];
        let rank = [];

        totalScore.push(unpack(rows, "AVG_TOTAL_SCORE"));
        country.push(unpack(rows, "COUNTRY"));
        countryCode.push(unpack(rows,  "COUNTRY_CODE"));
        rank.push(unpack(rows, "RANK"));

        // debugging outputs - delete later
        console.log(totalScore);
        console.log(country);
        console.log(countryCode);

        let data = [{
          type: 'choropleth',
          locationmode: 'ISO-3',
          locations: countryCode,
          z: totalScore,
          text: country,
          colorscale: [
            [0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],
            [0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],
            [0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']],
          autocolorscale: false,
          reversescale: true,
          marker: {
            line: {
              color: "rgb(180, 180, 180)",
              width: 0.5
            }
          },
          tick0: 0,
          zmin: 0,
          dtick: 1000,
          colorbar: {
            autotic: true,
            title: 'Average Happiness Score'
          }
        }];

        let layout = {
          width: 2000,
          height: 1000,
          title: "Countries Ranked by Average Total Happiness from 2015-2019",
          geo:{
            projection:{
              type: 'mercator',
            }
          },
          margin: {
            r: 0,
            l: 0,
            t: 15,
            b: 0
          }
        };

        Plotly.newPlot("myDiv", data, layout, {responsive: true});
      });
 */
// // public access token - copy to use
//     // pk.eyJ1IjoiamxvcmlhcyIsImEiOiJja2llZnY5eWoxc3NmMnludm45MHoxc3Z5In0.TwbCO39rRPJq4ctLODRH0w
//  github for country codes: https://gist.github.com/tadast/8827699#file-countries_codes_and_coordinates-csv