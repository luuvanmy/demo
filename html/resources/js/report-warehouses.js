//chart selling
var selling_chart = $("#report-selling");
var selling_labels = $(selling_chart.data('label'));
    var data = {
        labels:  ['So maybe doing something ','sản phẩm 2','wrong but as far as I can gather'],
        datasets: [{
            data: [300,50,100],
            backgroundColor:["#f0cb3d","#8a8a8a","#2581c9"],
        }]
    };

var chartDoughnutSelling= new Chart(selling_chart, {
    type: "doughnut",
    data: data,
    options:{
         // cutoutPercentage: 170,
      legend: {
        display: false
      },
      animation: {
        duration: 1000,
        onComplete: function(animation) {
          selling_labels.html(chartDoughnutSelling.generateLegend());
        }
      },
    }
});
//chart inventory
var inventory_chart = $("#report-inventory");
var inventory_labels = $(inventory_chart.data('label'));
    var data = {
        labels:  ['sản phẩm 1','wrong but as far as I can gather','sản phẩm 3'],
        datasets: [{
            data: [300,50,100],
            backgroundColor:["#2581c9","#00d282","#d95553"],
        }]
    };

var chartDoughnutInventory= new Chart(inventory_chart, {
    type: "doughnut",
    data: data,
    options:{
         // cutoutPercentage: 170,
      legend: {
        display: false
      },
      animation: {
        duration: 1000,
        onComplete: function(animation) {
          inventory_labels.html(chartDoughnutInventory.generateLegend());
        }
      },
    }
});

//report import / export warehouse
var report_chart = document.getElementById("report-export");

var chartBarExport = new Chart(report_chart, {
  type:"bar",
  data:{"labels":["January","February","March","April","May","June","July","August","September","October","November","December"],
  datasets:[{
    label:"Xuất kho",
    data:[10,20,30,40,10,20,30,40,10,20,30,250],
    borderColor:"rgb(255, 99, 132)",
    backgroundColor:"rgba(255, 99, 132, 0.2)"},
    {
      label:"Nhập kho",
      data:[10,20,30,40,10,50,30,70,10,20,30,250],
      type:"line","fill":false,
      borderColor:"rgb(54, 162, 235)"}
    ]},
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
  });
