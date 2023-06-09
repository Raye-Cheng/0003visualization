
    // Initialize the echarts instance based on the prepared dom

    var myChart = echarts.init(document.getElementById('main'));
    var option;   

    // Specify the configuration items and data for the chart
    setTimeout(function () {
  option = {
    legend: {
      textStyle: {color: '#FFFFFF'}
    },
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
      ['Industry','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'],
      ['Manufacturing', 288.8,306.9,298.3,302.5,296.6,273.9,301.7,304.5,311.9,293.6,291.4,292.4,288.2,280,249.3,238.6,227.2,223.4,227.8,214.4,213,212.1,224.9],
      ['Construction', 92.3,100,96.5,97.7,92.6,85.5,95,100.8,105.5,113.8,104,99.7,104.5,101.9,98.2,110.6,101.2,100.7,104.4,98,97.2,98.4,97.7],
      ['Services', 1088.3,1154.8,1159.6,1184.9,1221.7,1268.4,1377.6,1377.3,1412,1441.2,1530,1583.4,1621.5,1647.5,1731.2,1775.5,1816.9,1829.4,1849.9,1894.5,1891.3,1952.6,2006],
      ['Others', 13.1,20.7,19.2,20.3,21.2,19.5,22.4,20.5,22.7,20.8,37.5,23.5,26.4,26.8,24.8,23.2,20,21.7,21.6,23.5,21.2,23.4,21.9]
      ]
    },
    xAxis: { 
      type: 'category',
      axisLabel: {color: '#FFFFFF'},
      axisLine: {
        lineStyle: {
          color: '#FFFFFF'}} },
    yAxis: { 
      gridIndex: 0,
      axisLabel: {color: '#FFFFFF'} },
    grid: { top: '40%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
        lineStyle: { color: '#57B9C0' } //manufacture
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
        lineStyle: { color: '#77BC4D' } //construction
        
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
        lineStyle: { color: '#F3C55E' } //service
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
        lineStyle: { color: '#F46FA1' } //others(including agricultural)
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2000} ({d}%)',
          textStyle: {
            color: '#FFFFFF'
          }
        },
        encode: {
          itemName: 'service_group',
          value: '2000',
          tooltip: '2000'
        },
        color: ['#57B9C0','#77BC4D', '#F3C55E', '#F46FA1']
      }
    ]
  };
  myChart.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)',
            textStyle: {
              color: '#FFFFFF'
            }
          },
          textStyle: {
            color: "#FFFFFF"},
          encode: {
            value: dimension,
            tooltip: dimension
          }         
        }
      });
    }
  });
  myChart.setOption(option);
});