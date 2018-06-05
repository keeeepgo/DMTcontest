var myChart = echarts.init(document.getElementById('vitality'), 'macarons');
// 模拟数据
function getVirtulData(year) {
    year = year || '2018';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 50)
        ]);
    }
    return data;
}

option = {
    title: {
        top: 30,
        left: 'center',
        text: '今年的活跃度表'
    },
    tooltip: {},
    visualMap: {
        min: 0,
        max: 50,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
        textStyle: {
            color: '#000'
        }
    },
    calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2018',
        itemStyle: {
            normal: { borderWidth: 0.5 },
        },
        yearLabel: { show: false }
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData(2018),
        itemStyle: {
            normal: {
                color: '#aaa'
            }
        }
    }
};

myChart.setOption(option);