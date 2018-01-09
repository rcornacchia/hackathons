$.get("http://127.0.0.1:5000/GT_data/MaddenNFL17", function(data) {
    // $("#myChart").remove();
    console.log(JSON.parse(data));
    // var data = {
    //     labels: ["Madden NFL 16", "Madden NFL 15", "EA Sports UFC 2", "FIFA 16", "NHL 16"],
    //     datasets: [
    //         {
    //             label: ["Madden NFL 16", "Madden NFL 15", "EA Sports UFC 2", "FIFA 16", "NHL 16"],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255,99,132,1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1,
    //             data: [40, 60, 21, 22, 18],
    //         }
    //     ]
    // };
    // var ctx = document.getElementById("myChart");
    // var myChart = new Chart(ctx, {
    //     type: 'bar',
    //     data: data,
    //     options: {
    //         responsive: true,
    //         maintainAspectRatio: false
    //     }
    // });    
});

$.get("http://127.0.0.1:5000/twitter_results", function(data) {
    console.log(JSON.parse(data));
    // var data = {
    //     labels: ["January", "February", "March", "April", "May", "June", "July"],
    //     datasets: [
    //         {
    //             label: "My First dataset",
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255,99,132,1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1,
    //             data: [65, 59, 80, 81, 56, 55, 40],
    //         }
    //     ]
    // };
    // var ctx2 = document.getElementById("myChart2");
    // var myBarChart = new Chart(ctx2, {
    //     type: 'bar',
    //     data: data,
    //     options: {
    //         responsive: true,
    //         maintainAspectRatio: false
    //     }
    // });

});

//////// FIRST GRAPH ///////////////////////////////////

var data = {
    labels: ["Madden NFL 17", "Madden NFL 16", "Madden NFL 15", "EA Sports UFC 2", "FIFA 16", "NHL 16"],
    datasets: [
        {
            label: "My First dataset",
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
            data: [1475, 590, 1857, 663, 10005, 229],
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
    labels: ["Madden NFL 17", "Madden NFL 16", "Madden NFL 15", "EA Sports UFC 2", "FIFA 16", "NHL 16"],
    datasets: [
        {
            label: ["Madden NFL 16", "Madden NFL 15", "EA Sports UFC 2", "FIFA 16", "NHL 16"],
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
            data: [70, 65, 59, 80, 81, 56, 55, 40],
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