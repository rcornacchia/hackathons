$.get("http://127.0.0.1:5000/GT_data/GearsOfWar4", function(data) {
    console.log(JSON.parse(data));
});

$.get("http://127.0.0.1:5000/twitter_results", function(data) {
    console.log(JSON.parse(data));
});

//////// FIRST GRAPH ///////////////////////////////////
var data = {
    labels: ["Gears of War 4", "Halo 5", "Gears Of War 3", "Halo 4", "Sunset Overdrive", "Alien: Isolation"],
    datasets: [
        {
            label: ["Gears of War 4", "Halo 5", "Gears Of War 3", "Halo 4", "Sunset Overdrive", "Alien: Isolation"],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [802, 840, 271, 401, 580, 182],
        }
    ]
};

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        }
    }
});

// SECOND GRAPH //////////////////////////////////////////

var data2 = {
    labels: ["Gears of War 4", "Halo 5", "Gears Of War 3", "Halo 4", "Sunset Overdrive", "Alien: Isolation"],
    datasets: [
        {
            label: ["Gears of War 4", "Halo 5", "Gears Of War 3", "Halo 4", "Sunset Overdrive", "Alien: Isolation"],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [60, 55, 30, 17, 63, 17],
        }
    ]
};
var ctx2 = document.getElementById("myChart2");
var myBarChart = new Chart(ctx2, {
    type: 'bar',
    data: data2,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        }
    }
});