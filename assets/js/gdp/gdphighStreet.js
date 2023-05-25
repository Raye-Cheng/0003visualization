var chart = Highcharts.chart('container', {
    chart: {
        zoomType: 'xy',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    subtitle: {
        text: 'source: Word Bank'
    },
    title: {
        text: 'Singapore GDP'
    },
    xAxis: [{
        categories: ['1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969',
            '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979',
            '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
            '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
            '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
            '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
            '2020', '2021'],
        zoomEnabled: true,
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        floor: 0,
        ceiling: 400000,
        title: {
            text: 'Total GDP(million US$)',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        labels: {
            format: '{value} %',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        title: {
            text: 'GDP growth',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    legend: {
        enabled: false,
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    tooltip: {
        shared: true
    },
    series: [{
        name: 'Total GDP',
        type: 'waterfall',
        upColor: '#32CD32',
        color: '#DC143C',
        data: [704.76, 59.88, 61.61, 91.37, -23.45, 80.49, 121.78, 141.61, 187.67, 234.19, 260.68, 343.2,
            457.66, 974.77, 1525.32, 412.14, 693.4, 291.51, 898.59, 1779.75, 2599.34, 2278.97, 1909.02,
            1699.86, 1965.25, -592.83, -569.79, 2332.47, 4452.25, 5093.9, 5678.97, 9321.83, 6664.1,
            8473.21, 13087.37, 14120.14, 8484.89, 3828.31, -14395.88, 556.35, 9789.82, -6279.53, 2742.81,
            5107.7, 17390.05, 12772.12, 20822.75, 32311.57, 12670.05, 540.3, 45657.1, 39541.78, 15736.05,
            12489.14, 7274.8, -6847.01, 10828.28, 24360.92, 33804.79, -1525.42, -30176.8, 51690.97
        ],
        tooltip: {
            valueSuffix: '$'
        }
    }, {
        name: 'GDP growth',
        type: 'spline',
        data: [0, 8.14, 7.55, 10.04, -3.1, 7.83, 10.18, 12.51, 13.53, 13.83, 13.94, 12.41, 13.32, 10.6, 6.12,
            3.99, 7.44, 6.85, 7.78, 9.55, 10.11, 10.82, 7.1, 8.55, 8.79, -0.62, 1.34, 10.8, 11.26, 10.16,
            9.82, 6.69, 6.64, 11.46, 11.1, 7.18, 7.47, 8.32, -2.19, 5.72, 9.04, -1.07, 3.92, 4.55, 9.94, 7.37,
            9.01, 9.02, 1.86, 0.13, 14.52, 6.21, 4.44, 4.82, 3.94, 2.98, 3.56, 4.66, 3.66, 1.1, -4.14, 7.61],
        tooltip: {
            valueSuffix: '%'
        },
        yAxis: 1
    }]
});

