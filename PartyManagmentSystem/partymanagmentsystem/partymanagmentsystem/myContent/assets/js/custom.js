$('.number-counter span').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

let menuToggle = document.querySelector('.menu-toggle');
let navigation = document.querySelector('.navigation');

menuToggle.onclick = function () {
    navigation.classList.toggle('active');
}

// Toggle left sidebar menu

$(".toggle-btn").click(function () {
    $("body").toggleClass('side-bar-hide');
});


// ============================================
// As of Chart.js v2.5.0
// http://www.chartjs.org/docs
// ============================================
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        datasets: [{
            label: 'Day',
            data: [12, 40, 30, 50, 28, 60, 7,  6, 7, 21, 4, 11, 50,],
            backgroundColor: "rgba(0,0,255,1)"
        }, {
            label: 'Weeks',
            data: [30, 70, 5, 50, 40, 3, 10,  6, 7, 21, 4, 11, 50,],
            backgroundColor: "rgba(113,118,246,1)"
        }, {
            label: 'months',
            data: [40, 30, 80, 7, 60, 20, 11, 50, 4, 11, 100, 20],
            backgroundColor: "rgba(190, 215, 231, 1)"
        }, {
            label: 'years',
            data: [40, 30, 6, 7, 21, 4, 11, 100, 20, 30 , 40, 50],
            backgroundColor: "rgba(70, 130, 180, 1)"
        }]
    }
});