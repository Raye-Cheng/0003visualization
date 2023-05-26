var dom = document.getElementById('trade2');
var myChart2 = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

// Specify configurations and data graphs 
var option = {
    // 
    textStyle: {
        fontcolor: '#F7C37E',
    },
    backgroudColor: 'rgba(128,128,128,0.1)',
    color: [
        '#e8f7e8',
        '#d3f9d3',
        '#c8fad2',
        '#b4fac1',
        '#aafab8',
        '#97f9a7',
        '#8ef89e',
        '#85f796',
        '#73f484',
        '#6bf27a',
        '#62f171',
        '#52ec5d',
        '#42e846',
        '#3be538',
        '#2BCF29',
        '#1BBA18'

    ],
    title: {
        text: 'Top Average annual air cargo volume by country/region of destination',
        x: 'left',
        textStyle: {
            fontSize: 15,
            color: 'rgb(76, 123, 155)'
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        fontsize: 10,
    },

    toolbox: {
        show: false,
        feature: {
            mark: { show: true },
            // dataView : {show: true, readOnly: false},
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
            // restore : {show: true},
            // saveAsImage : {show: true}
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
                            color: 'rgb(76, 123, 155)',
                            fontSize: 14,
                            fontWeight: 'bolder'
                        }
                    },

                }
            },
            data: [
                { name: "	France	", value: 9049.87 },
                { name: "	Philippines	", value: 18628.85 },
                { name: "	Vietnam	", value: 20881.65 },
                { name: "	Germany	", value: 21020.51 },
                { name: "	Malaysia	", value: 26356.71 },
                { name: "	NorthAmerica	", value: 28054.81 },
                { name: "	UnitedKingdom	", value: 31541.32 },
                { name: "	MiddleEast	", value: 42415.38 },
                { name: "	Thailand	", value: 49126.19 },
                { name: "	Other countries/regions in Europe	", value: 51466.89 },
                { name: "	Japan	", value: 61067.82 },
                { name: "	SouthAsia	", value: 69792.71 },
                { name: "	 HongKong	", value: 79270.54 },
                { name: "	MainlandChina	", value: 90053.46 },
                { name: "	Oceania	", value: 128140.73 },
                { name: "	Other countries/regions in Asia	", value: 393704.91 },
            ]
        }
    ]
};

// Use just the specified configurations and data charts. 
if (option && typeof option === 'object') {
    myChart2.setOption(option);
}

window.addEventListener('resize', myChart2.resize);