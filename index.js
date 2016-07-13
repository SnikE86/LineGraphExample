window.addEventListener("load", function () {
    var zoomingData = getMyData()

    var zoomedChart = $("#container").dxChart({
        dataSource: zoomingData
        , argumentAxis: {
            valueMarginsEnabled: false
        }
        , series: [{
            argumentField: "arg"
            , valueField: "y1"
    }, {
            argumentField: "arg"
            , valueField: "y2"
    }]
        , scrollBar: {
            visible: true
        }
        , scrollingMode: "all"
        , zoomingMode: "all"
        , legend: {
            visible: false
        }
    }).dxChart("instance");

    //zoomedChart.zoomArgument(300, 500);



});

function getMyData(){
	return[{
		arg: "AAA",
		y1: 12,
		y2: 10
	},
	{
		arg: "BBB",
		y1: 12,
		y2: 30
	},
	{
		arg: "CCC",
		y1: 25,
		y2: 20
	}];
}