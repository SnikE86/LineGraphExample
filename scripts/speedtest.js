window.addEventListener("load", function () {
    DevExpress.ui.themes.current("generic.light");
    
    var zoomedChart = $("#container").dxChart({
        dataSource: jsonstr,
        argumentAxis: {
            valueMarginsEnabled: false
        },
        commonSeriesSettings: {
            hoverStyle: {
                size: 1
            }, point: {
                size: 1
            }
        },
        series: [
            {
                argumentField: "dateTime",
                valueField: "uploadSpeed",
                name: "Upload Speed Mbit/s"
            }, 
            {
                argumentField: "dateTime",
                valueField: "downloadSpeed",
                name: "Download Speed Mbit/s"
            }
        ],
        scrollBar: {
            visible: true
        },
        scrollingMode: "all",
        zoomingMode: "all",
        legend: {
            visible: true

        },
        loadingIndicator: {
            show: true,
            backgroundColor: 'lightcyan',
            font: {
                weight: 700,
                size: 16
            }
        },
        tooltip: {
            enabled: true
        },
        title: 'Speed test results'
    }).dxChart("instance");

    zoomedChart.zoomArgument(300, 500);
    
    var headerTemplate = function (header, info) {
        $('<div>').html(info.column.caption).css('font-weight', 'bold').appendTo(header);
    };

    var dataGrid = $("#gridContainer").dxDataGrid({
        dataSource: jsonstr,
        showRowLines: true,
        rowAlternationEnabled: true,
        showBorders: true,
        selection: {
            mode: "multiple"
        },
        "export": {
            enabled: true,
            fileName: "SpeedTestResults",
            allowExportSelectedData: true
        },
        columns: [
            {
                dataField: 'dateTime',
                caption: "Date/Time",
                sortOrder: "asc"
            },
            {
                dataField: 'uploadSpeed',
                caption: "Upload Speed Mbit/s"
            },
            {
                dataField: 'downloadSpeed',
                caption: "Download Speed Mbit/s"
            },
            {
                dataField: 'pingTime',
                caption: "Ping ms"
            }
        ],
        customizeColumns: function (columns) {
            $.each(columns, function (_, element) {
                element.headerCellTemplate = headerTemplate;
            });
        },
        paging: { 
            pageSize: 48 
        },
        pager: {
            showNavigationButtons: true
        },
        allowColumnResizing: true,
        sorting: { 
            mode: "multiple" 
        },
        loadPanel: {
            height: 150,
            width: 400,
            text: 'Data is loading...'
        },
        height: 500
    }).dxDataGrid("instance");
});