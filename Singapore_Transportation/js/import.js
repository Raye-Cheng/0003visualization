var dom = document.getElementById('trade');
var myChart1 = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option = {
    // 
    textStyle: {
        fontcolor: 'black',
    },
    backgroudColor: 'rgba(128,128,128,0.1)',
    color: [
        '#f7ebe8',
        '#f9dad3',
        '#fad2c8',
        '#fac1b4',
        '#fab8aa',
        '#f9a797',
        '#f89e8e',
        '#f79685',
        '#f48473',
        '#f27a6b',
        '#f17162',
        '#ec5d52',
        '#e84642',
        '#e5383b',
        '#CF292B',
        '#BA181B'
    ],
    title: {
        text: 'Top Average annual air cargo volume by country/region of origin',
        x: 'left',
        textStyle: {
            fontSize: 15,
            color: 'rgb(224, 109, 104)'
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        fontsize: 3,
    },

    toolbox: {
        show: false,
        feature: {
            mark: { show: true },
            magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
      
        }
    },
    calculable: true,
    series: [
        {
            name: 'count of flights',
            type: 'pie',
            radius: [50, 150],
            center: ['50%', 200],
            roseType: 'area',
            itemStyle: {
                normal: {
                    label: {
                        textStyle: {
                            color: 'rgb(224, 109, 104)',
                            fontSize: 14,
                            fontWeight: 'bolder'
                        }
                    },

                }
            },
            data: [
                { name: "	France	", value: 8895.74 },
                { name: "	Philippines	", value: 12204.04 },
                { name: "	Malaysia	", value: 16192.69 },
                { name: "	NorthAmerica	", value: 19398.15 },
                { name: "	Germany	", value: 19604.86 },
                { name: "	Vietnam	", value: 23422.76 },
                { name: "	UnitedKingdom	", value: 46298.76 },
                { name: "	Indonesia	", value: 49612.37 },
                { name: "	MiddleEast	", value: 49650.41 },
                { name: "	Japan	", value: 75065.36 },
                { name: "	Other countries/regions in Europe	", value: 92553.90 },
                { name: "	Oceania	", value: 106311.19 },
                { name: "	HongKong	", value: 131897.97 },
                { name: "	Europe	", value: 145528.68 },
                { name: "	MainlandChina	", value: 165264.85 },
                { name: "	Other countries/regions in Asia	", value: 208575.03 },
            ]
        }
    ]
};


if (option && typeof option === 'object') {
    myChart1.setOption(option);
}
window.addEventListener('resize', myChart1.resize);