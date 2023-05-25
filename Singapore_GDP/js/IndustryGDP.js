var IndustryGDP = null;

function deleteIndustryGDP() {
    if (IndustryGDP) {
        IndustryGDP.clear();
    }
}

function showIndustryGDP(elementId) {

    // Initialize the echarts instance based on the prepared dom
    IndustryGDP = echarts.init(document.getElementById(elementId));

    // Specifies the configuration items and data for the chart
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            AxisLable: {
                show: true,
                textStyle: {
                    color: "#FFFFFF"
                }
            }
        },
        xAxis: {
            type: 'category',
            data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007',
                '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
                '2017', '2018', '2019', '2020', '2021'],
               
                splitLine: {
                    lineStyle: {
                    
                        color: ['#02ad81']
                    }
                },


        },
        series: [
            {
                name: 'Services',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle:{
                    normal:{
                        color:'#4ad2ff'
                    }
                },
                data: [6252536.63, 6071284.85, 6245442.33, 6639596.57, 7636323.29, 8571691.43,
                    10063316.68, 12670540.88, 13958148.34, 13889235.17, 17213584.99, 20443424.15,
                    21665280.15, 23095235.32, 23425366.81, 22854375.8, 23976884.11, 25709008.68, 27588863.85,
                    27999440.87, 25953271.1, 29210319.91]
            },
            {
                name: 'Industry',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [3345415.16, 2900347.04, 3001398.16, 3118640.36, 3860488.96, 4201706.13, 4792141.98,
                    5415429.46, 5394589.49, 5517683.71, 6758181.06, 7481443.32, 7833025.36, 7651183.42,
                    8048244.15, 7935384.94, 7895636.4, 8599083.52, 10098966.03, 9535062.43, 8564312.9, 10474245.28]
            },
            {
                name: 'Agriculture',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [9496, 7862.45, 6933.85, 6307.9, 6737.63, 7364.27, 7580.15, 8223.81, 8460.84,
                    8309.72, 9172.71, 10249.39, 10416.58, 11220.39, 11501.51, 10656.94, 10722.33, 11243.01,
                    11984.77, 12769.83, 12009.39, 14124.79]
            }
        ]
    };

    //option && myChart.setOption(option);

    IndustryGDP.setOption(option);
}
