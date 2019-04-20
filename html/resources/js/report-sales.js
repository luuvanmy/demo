var ctx = document.getElementById("sale-overview");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["17/10", "18/10", "19/10", "20/10", "21/10","22/10", "23/10", "24/10", "25/10", "26/10", "27/10", "28/10","29/10", "30/10", "31/10", "01/11", "02/11", "03/11", "04/11"],
        datasets: [{
            label: 'Doanh số',
            data: [7000000, 12000000, 18000000, 6000000, 9000000,7000000, 12000000, 18000000, 6000000, 9000000, 11000000, 9000000,7000000, 12000000, 18000000, 6000000, 9000000, 11000000, 9000000],
            backgroundColor: [
                'rgba(77, 216, 74, 0.1)'
            ],
            borderColor: [
                'rgba(77, 216, 74, 0.5)'
            ],
            borderWidth: 1
        },{
            label: 'Chỉ tiêu doanh số',
            data: [8000000, 8000000, 8000000, 8000000, 8000000,8000000, 8000000, 8000000, 8000000, 8000000, 8000000, 8000000,8000000, 8000000, 8000000, 8000000, 8000000, 8000000, 8000000],
            backgroundColor: [
                'rgba(255, 0, 0, 0.1)'
            ],
            borderColor: [
                'rgba(255, 0, 0, 0.5)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


var ctx1 = document.getElementById("radar-overview");
var myChart1 = new Chart(ctx1, {
    type: 'radar',
    data: {
        labels: ["Hà Nội", "Tây Bắc Bộ", "Đông Bắc Bộ", "Miển Trung" , "Bắc Trung Bộ", "Nam Trung Bộ", "Hồ Chí Minh", "Tây Nam Bộ", "Đông Nam Bộ"],
        datasets: [{
            label: 'Khách hàng phát sinh theo khu vực',
            data: [150, 720, 330, 540, 350, 660, 370, 780, 490],
            backgroundColor: [
                'rgba(255, 0, 0, 0.1)'
            ],
            borderColor: [
                'rgba(255, 0, 0, 0.5)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            display: false
        }
    }
});