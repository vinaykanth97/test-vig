// Datatables
$(".limits-datables").DataTable({
    'responsive': false,
    'autoWidth': false,
    'searching': false,
    "paging": false,
    "aaSorting": [],
    "info": false
});
$(".communication-datables").DataTable({
    'responsive': false,
    'autoWidth': false,
    'searching': false,
    "paging": false,
    "aaSorting": [],
    "info": false
});

$(".popup_dataTables").DataTable({
    fixedColumns: {
        leftColumns: 2
    },
    'responsive': false,
    'autoWidth': false,
    'searching': false,
    "paging": false,
    "aaSorting": [],
    "info": false
});

// Charts
document.addEventListener('DOMContentLoaded', (event) => {
    var commu_options = {
        series: [{
            data: [30, 20, 50, 40, 10]
        }],
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            },
        },
        colors: ['#FF6600'],
        plotOptions: {
            bar: {
                distributed: true,
                horizontal: false,
                columnWidth: "20px",
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                'SMS', 'OBC', 'Email', 'Call', 'RFI'
            ],
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        tooltip: {
            enabled: true,
            custom: function ({
                series,
                seriesIndex,
                dataPointIndex,
                w
            }) {
                let eachPlot = series[seriesIndex][dataPointIndex]
                let cusLabels = w.globals.labels[dataPointIndex]
                return (
                    `
                    <div class="communication-card-tooltip">
                        <p style="font-size:12px;color:#333333;padding:8px 10px">${cusLabels} ${eachPlot}</p>
                    </div>
    
                    `
                );
            },
        },
    };

    var commu_chart = new ApexCharts(document.querySelector("#commu_chart"), commu_options);
    commu_chart.render();

    var invest_options = {
        series: [{
            data: [50, 10, 30, 20, 40]
        }],
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            },
        },
        colors: ['#FF6600', '#F3B823', '#2E8BC9', '#E0E0E0', '#54B34A'],
        plotOptions: {
            bar: {
                columnWidth: '70px',
                distributed: true,
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "0.9",
                type: "vertical",
                opacityFrom: 0.7,
                opacityTo: 0.1,
                stops: [0, 100],
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        stroke: {
            colors: ['#FF6600', '#F3B823', '#0B78BF', '#B2B2B2', '#54B34A'],
            width: 1,
        },
        grid: {
            show: false,
            lines: {
                show: false
            }
        },
        xaxis: {
            categories: [
                'FUNDING EXCLUSION BALANCE', 'RPP BALANCE', 'ACH DELAY BALANCE', 'MBM BALANCE', 'OPEN REJECT MGMT SALES'
            ],
            labels: {
                show: false,
                style: {
                    fontSize: '12px'
                }
            },
            axisTicks: {
                show: false,
            },
        },

        yaxis: {
            labels: {
                formatter: function (value) {
                    return "";
                }
            },
        },
        tooltip: {
            enabled: false,
        }
    };

    var invest_chart = new ApexCharts(document.querySelector("#invest_chart"), invest_options);
    invest_chart.render();

    let cardRatioColors = ['#FF6600', '#2E8BC9', '#54B34A']
    var number_options =
    {
        series: [{
            data: [80, 40, 60]
        }],
        chart: {
            type: 'bar',
            height: "18%",
            parentHeightOffset: 0,
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false
            },
            animations: {
                enabled: false,
            }
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        plotOptions: {
            bar: {
                distributed: true,
                borderRadius: 3,
                horizontal: true,
                barHeight: '30%',
                endingShape: 'rounded',
                startingShape: 'rounded',
                colors: {
                    backgroundBarColors: ['#F0F2F8', '#F0F2F8', '#F0F2F8'],
                },
            }
        },
        fill: {
            colors: cardRatioColors
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'right',
            markers: {
                radius: 8,
                width: 13,
                height: 6,
                offsetY: -15
            },
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
        tooltip: {
            enabled: true,
            custom: function ({
                series,
                seriesIndex,
                dataPointIndex,
                w
            }) {
                let eachPlot = series[seriesIndex][dataPointIndex]
                let cusLabels = w.globals.labels[dataPointIndex]
                return (
                    `
                    <div class="custom-card-ratio-tooltip">
                        <p class="label">${cusLabels} Number Ratio</p>
                        <p style="font-size:18px;" class="amount"><sup>$</sup>${eachPlot}</p>
                    </div>
    
                    `
                );
            },
        },
        xaxis: {
            show: true,
            categories: ["Govt", "Corp", "Foreign"],
            labels: {
                formatter: function (value) {
                    return "";
                }
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },

    };

    let number_update = {
        'number_oulet': {
            "daily": [20, 30, 40],
            "day7": [10, 20, 30],
            "day30": [50, 60, 70]
        },
        'number_chain': {
            "daily": [10, 20, 30],
            "day7": [40, 50, 60],
            "day30": [15, 25, 35]
        }
    };
    let amount_update = {
        'amount_oulet': {
            "daily": [10, 20, 30],
            "day7": [15, 25, 35],
            "day30": [20, 40, 60]
        },
        'amount_chain': {
            "daily": [15, 20, 25],
            "day7": [30, 35, 40],
            "day30": [45, 50, 55]
        }
    };
    let { number_oulet, number_chain } = number_update;
    let { amount_oulet, amount_chain } = amount_update;

    var amount_options =
    {
        series: [{
            data: [50, 40, 20]
        }],
        chart: {
            type: 'bar',
            height: "18%",
            toolbar: {
                show: false
            },
            animations: {
                enabled: false,
            },
            parentHeightOffset: 0,
            sparkline: {
                enabled: true,
            },
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        plotOptions: {
            bar: {
                distributed: true,
                borderRadius: 3,
                horizontal: true,
                barHeight: '30%',
                endingShape: 'rounded',
                startingShape: 'rounded',
                colors: {
                    backgroundBarColors: ['#F0F2F8', '#F0F2F8', '#F0F2F8'],
                },
            }
        },
        fill: {
            colors: cardRatioColors
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'right',
            markers: {
                radius: 8,
                width: 13,
                height: 6,
                offsetY: -15
            },
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
        tooltip: {
            enabled: true,
            custom: function ({
                series,
                seriesIndex,
                dataPointIndex,
                w
            }) {
                let eachPlot = series[seriesIndex][dataPointIndex]
                let cusLabels = w.globals.labels[dataPointIndex]
                return (
                    `
                    <div class="custom-card-ratio-tooltip">
                        <p class="label">${cusLabels} Amount Ratio</p>
                        <p style="font-size:18px;" class="amount"><sup>$</sup>${eachPlot}</p>
                     </div>
    
                    `
                );
            },
        },
        xaxis: {
            show: true,
            categories: ["Govt", "Corp", "Foreign"],
            labels: {
                formatter: function (value) {
                    return "";
                }
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },

    };

    Updatechart('.daily_outlet_number', number_oulet.daily, number_options);
    Updatechart('.daily_chain_number', number_chain.daily, number_options);
    Updatechart('.day7_outlet_number', number_oulet.daily, number_options);
    Updatechart('.day7_chain_number', number_chain.daily, number_options);
    Updatechart('.day30_oulet_number', number_oulet.daily, number_options);
    Updatechart('.day30_chain_number', number_chain.daily, number_options);

    Updatechart('.daily_outlet_amount', amount_oulet.daily, amount_options);
    Updatechart('.daily_chain_amount', amount_chain.daily, amount_options);
    Updatechart('.day7_outlet_amount', amount_oulet.daily, amount_options);
    Updatechart('.day7_chain_amount', amount_chain.daily, amount_options);
    Updatechart('.day30_oulet_amount', amount_oulet.daily, amount_options);
    Updatechart('.day30_chain_amount', amount_chain.daily, amount_options);




    function Updatechart(element, chartValues, selector) {
        var update_chart = new ApexCharts(document.querySelector(element), selector);
        update_chart.render();
        update_chart.updateSeries([{
            data: chartValues
        }]);
    }


    // var amount_chart = new ApexCharts(document.querySelector("#amount_ratio"), amount_options);
    // amount_chart.render();
});

// Popup new Window
let widthPop = window.innerWidth / 1.2
let HeightPop = window.innerHeight
function WindowToggler(url) {
    popupWindow1 = window.open(
        url, 'popUpWindow1', `height=${HeightPop},width=${widthPop},left=0,top=0,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no`)
}

bindDragScroll($('.investigation-card-main'), $('.investigation-card-main'));

$(".outlet_input").click(function () {
    $(this).closest(".outlet_switch").toggleClass("toggle_outlet");
    $(this).closest(".switch_filter").toggleClass("chainswitch");
});
$(".credit_input").click(function () {
    $(this).closest(".outlet_switch").toggleClass("toggle_outlet");
    $(this).closest(".switch_filter").toggleClass("debitswitch");
});
$(".filter_dropdown li a").click(function () {
    let remove_class = 'daily day_30 day_7 month_12';
    let add_class = $(this).attr('data-id');
    $(this).closest(".switch_filter").removeClass(remove_class).addClass(add_class);
    $(this).closest(".filter_dropdown").find('button').text($(this).text());
    $(this).closest(".filter_dropdown").find('li').removeClass('active');
    $(this).parent('li').addClass('active');
})
