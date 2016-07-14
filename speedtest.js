window.addEventListener("load", function () {
    var zoomingData = loadJSON()

    var zoomedChart = $("#container").dxChart({
        dataSource: zoomingData
        , argumentAxis: {
            valueMarginsEnabled: false
        }
        , commonSeriesSettings: {
            hoverStyle: {
                size: 1
            }
            , point: {
                size: 1
            }
        }
        , series: [{
            argumentField: "dateTime"
            , valueField: "uploadSpeed"
            , name: "Upload Speed Mbit/s"
        }, {
            argumentField: "dateTime"
            , valueField: "downloadSpeed"
            , name: "Download Speed Mbit/s"
        }]
        , scrollBar: {
            visible: true
        }
        , scrollingMode: "all"
        , zoomingMode: "all"
        , legend: {
            visible: true
            
        }
    }).dxChart("instance");

    zoomedChart.zoomArgument(300, 500);
});

function loadJSON() {
    return jsonstr;
};