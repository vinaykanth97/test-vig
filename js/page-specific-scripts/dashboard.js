document.addEventListener("DOMContentLoaded", () => {
  let max = 57399;

  function formatedVal(min) {
    return Math.round((min / max) * 100);
  }
  let chartCategories = {
    investigation: ["12 Signed Date > 90 Days", "03 Signed Date > 90 Days"],
    reject: ["03 Signed Date > 90 Days", "12 Signed Date > 90 Days"],
  };
  let seriesValueAssign = {
    investigationFunds: [40000, 20000],
    investigationPtsTransaction: [12000, 32000],
    rejectManagementFunds: [22000, 33000],
    rejectManagementPts: [25000, 50000],
  };
  function DashboardRadial(renderElement, chartCategory, seriesValue) {
    let options = {
      series: [formatedVal(seriesValue[0]), formatedVal(seriesValue[1])],
      chart: {
        width: "100%",
        height: 200,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 10,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "50%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      colors: ["#FF6600", "#2E8BC9"],
      labels: chartCategory,
      legend: {
        show: true,
        floating: true,
        fontSize: "8px",
        position: "left",
        fontFamily: "Univers Fiserv Regular",
        offsetX: -20,
        offsetY: -4,
        margin: 0,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          strokeOpacity: 0,
          width: 0,
          height: 0,
        },
        formatter: function (seriesName, opts) {
          return seriesName;
        },
        itemMargin: {
          vertical: 3,
        },
      },
      tooltip: {
        enabled: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return `
                            <div class='dashboard_tooltip'>
                                <div class='tooltip_txt' style="color:${w.config.colors[seriesIndex]}">${chartCategory[seriesIndex]}</div>
                                <div class='tooltip_val'><sup>$</sup>${seriesValue[seriesIndex]}</div>
                            </div>
                            `;
        },
      },
    };
    let chartOpt = new ApexCharts(
      document.querySelector(renderElement),
      options
    );
    chartOpt.render();
  }
  DashboardRadial(
    ".invest_fund_chart",
    chartCategories.investigation,
    seriesValueAssign.investigationFunds
  );
  DashboardRadial(
    ".invest_pts_fund_chart",
    chartCategories.investigation,
    seriesValueAssign.investigationPtsTransaction
  );
  DashboardRadial(
    ".reject_fund_chart",
    chartCategories.reject,
    seriesValueAssign.rejectManagementFunds
  );
  DashboardRadial(
    ".reject_pts_fund_chart",
    chartCategories.reject,
    seriesValueAssign.rejectManagementPts
  );
  $(".vigilance-preloader").css('display', 'flex');
  $(".vigilance-preloader").delay(3000).fadeOut(500);
});
