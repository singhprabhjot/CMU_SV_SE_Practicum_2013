function displayResults(){
    testsuite.style.display = "none";
    testResults.style.display = "block";
    generateTable();
    generateChart();
}

function generateTable(){
    $.each(results['tests'], function(index,value){
        var row = document.createElement("tr");
        var nameCell = document.createElement("td");
        var msCell = document.createElement("td");
        var kOpCell = document.createElement("td");

        nameCell.appendChild(document.createTextNode(value['name']));
        msCell.appendChild(document.createTextNode(value['msTime']));
        kOpCell.appendChild(document.createTextNode(value['kOps']));
        row.appendChild(nameCell);
        row.appendChild(msCell);
        row.appendChild(kOpCell);

        resultTable.appendChild(row);
    });
}

function generateChart(){  
    var x_axis = new Array();
    var values = new Array();

	$.each(results['tests'], function(index,value){
		x_axis[index] = value["name"];
        if(isNaN(value["kOps"])){
            values[index] = 0;
        }
        else
		    values[index] = Number(value["kOps"]);
	});

    //Highcharts code
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: "CSS Operations"
        },
        subtitle: {
            text: results.UserAgent
        },
        xAxis: {
            categories: x_axis,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'kOps per second',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' kOps/s'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -100,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [ {
            name: 'kOps',
            data: values
        }]
    });
}