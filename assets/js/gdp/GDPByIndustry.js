var GDPByIndustry = null;

function deleteGDPByIndustry() {
  if (GDPByIndustry) {
    GDPByIndustry.clear();
  }
}

function showGDPByIndustry(elementId) {

  // Initialize the echarts instance based on the prepared dom
  GDPByIndustry = echarts.init(document.getElementById(elementId));

  // Specifies the configuration items and data for the chart
  option = {
    title: {
        text: 'Stacked Area Chart',
        left:'center',
        top: 'top'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['Agriculture (% of GDP)', 'Industry (% of GDP)', 'Services (% of GDP)'],
        //right:'5%',
        top: '5%'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007',
                '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                '2017', '2018', '2019', '2020', '2021']
        }
    ],
    yAxis: [
        {
            type: 'value',
            max: 100
        }
    ],
    series: [
        {
            name: 'Agriculture (% of GDP)',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            itemStyle:{
                normal:{
                    color:'#F46FA1'
                }
            },
            data: [0.09884, 0.08756, 0.07493, 0.0646, 0.05857, 0.05762, 0.051,
                0.04545, 0.0437, 0.0428, 0.03825, 0.03669, 0.0353, 0.03648, 0.03653,
                0.0346, 0.03363, 0.03276, 0.03179, 0.03401, 0.03478, 0.03558]
        },
        {
            name: 'Industry (% of GDP)',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            itemStyle:{
                normal:{
                    color:'#77BC4D'
                }
            },
            data: [34.82106, 32.29967, 32.43431, 31.93841, 33.55911, 32.87524,
                32.24201, 29.9291, 27.86289, 28.41936, 28.18147, 26.7815, 26.54478,
                24.87572, 25.56206, 25.76389, 24.76422, 25.05609, 26.78784, 25.39482,
                24.80282, 26.38436]
        },
        {
            name: 'Services (% of GDP)',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            itemStyle:{
                normal:{
                    color:'#F3C55E'
                }
            },
            data: [65.0801, 67.61277, 67.49075, 67.99699, 66.38232, 67.06714, 67.707,
                70.02545, 72.09341, 71.53784, 71.78028, 73.18181, 73.41992, 75.08781,
                74.4014, 74.20152, 75.20215, 74.91115, 73.18037, 74.57117, 75.1624, 73.58006]
        },
    ]
};

  GDPByIndustry.setOption(option);
}
