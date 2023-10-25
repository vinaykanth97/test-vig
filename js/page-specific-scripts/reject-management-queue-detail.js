function resetColReorderMD(sel) {
    $($(sel).DataTable().columns().header()).each(function () {
        var md = $._data($(this)[0]).events.mousedown;
        for (var i = 0, l = md.length; i < l; i++) {
            if (md[i].namespace == 'ColReorder') {
                md[i].handler = function () { }
            }
        }
    })
}
let previousImg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1.45rem" height="1.45rem" viewBox="0 0 20 20">
  <g id="Group_8611" data-name="Group 8611" transform="translate(0 20) rotate(-90)">
    <g id="keyboard_arrow_down-24px_3_" data-name="keyboard_arrow_down-24px (3)">
      <path id="Path_24649" data-name="Path 24649" d="M0,20H20V0H0Z" fill="none"/>
      <path id="Path_24650" data-name="Path 24650" d="M1.175,6.175,5,2.358,8.825,6.175,10,5,5,0,0,5Z" transform="translate(5 6.667)" fill="#afafaf" class="pag-arrow"/>
    </g>
  </g>
</svg>
    `;
let nextPagination = `
<svg xmlns="http://www.w3.org/2000/svg" width="1.45rem" height="1.45rem" viewBox="0 0 20 20">
<g id="Group_8611" data-name="Group 8611" transform="translate(-151 384) rotate(-90)">
  <g id="keyboard_arrow_down-24px_3_" data-name="keyboard_arrow_down-24px (3)" transform="translate(364 151)">
    <path id="Path_24649" data-name="Path 24649" d="M0,0H20V20H0Z" fill="none"/>
    <path id="Path_24650" data-name="Path 24650" d="M7.175,8.59,11,12.407,14.825,8.59,16,9.765l-5,5-5-5Z" transform="translate(-1 -1.432)" fill="#afafaf" class="pag-arrow"/>
  </g>
</g>
</svg>
  `;



let TransactionDetailsTable = $(".transaction-detail-table").DataTable({
    colReorder: true,
    initComplete: function () {
        resetColReorderMD(".transaction-detail-table")
    },
    "scrollX": false,
    'responsive': false,
    'autoWidth': false,
    'searching': false,
    "paging": true,
    "bLengthChange": false,
    "aaSorting": [],
    info: true,
    language: {
        paginate: {
            next: nextPagination,
            previous: previousImg
        },
        "lengthMenu": "Display _MENU_ records per page",
        "info": `<span>_START_ - _END_</span> of _TOTAL_`,
    },
});
$(".trans-detail-pagination").append($(`#trans_details .dataTables_info`));
$(".trans-detail-pagination").append($(`#trans_details .dataTables_paginate`));


let TransactionDetailsPtsTable = $(".trans-pts-detail").DataTable({
    colReorder: true,
    initComplete: function () {
        resetColReorderMD(".trans-pts-detail")
    },
    "scrollX": false,
    'responsive': false,
    'autoWidth': false,
    'searching': false,
    "paging": true,
    "bLengthChange": false,
    "aaSorting": [],
    info: true,
    language: {
        paginate: {
            next: nextPagination,
            previous: previousImg
        },
        "lengthMenu": "Display _MENU_ records per page",
        "info": `<span>_START_ - _END_</span> of _TOTAL_`,
    },
});
$(".trans-detail-pts-pagination").append($(`#trans_details_pts .dataTables_info`));
$(".trans-detail-pts-pagination").append($(`#trans_details_pts .dataTables_paginate`));

let fundingExclusionTable = $(".funding_exclusion_table").DataTable({
    colReorder: true,
    initComplete: function () {
        resetColReorderMD(".funding_exclusion_table")
    },
    "scrollX": false,
    'responsive': false,
    'autoWidth': false,
    'searching': false,
    "paging": true,
    "bLengthChange": false,
    "aaSorting": [],
    info: true,
    language: {
        paginate: {
            next: nextPagination,
            previous: previousImg
        },
        "lengthMenu": "Display _MENU_ records per page",
        "info": `<span>_START_ - _END_</span> of _TOTAL_`,
    },
});
$(".funding-exclusion-pagination").append($(`#funding_exclusion .dataTables_info`))
$(".funding-exclusion-pagination").append($(`#funding_exclusion .dataTables_paginate`));

let transAlertTable = $(".trans-alert-table").DataTable({
    colReorder: true,
    initComplete: function () {
        resetColReorderMD(".trans-alert-table")
    },
    "scrollX": false,
    'responsive': false,
    'autoWidth': false,
    'searching': false,
    "paging": true,
    "bLengthChange": false,
    "aaSorting": [],
    info: true,
    language: {
        paginate: {
            next: nextPagination,
            previous: previousImg
        },
        "lengthMenu": "Display _MENU_ records per page",
        "info": `<span>_START_ - _END_</span> of _TOTAL_`,
    },
});
$(".trans-alert-pagination").append($(`#trans_alert .dataTables_info`))
$(".trans-alert-pagination").append($(`#trans_alert .dataTables_paginate`));


let assignSpecificTable = {
    "trans_details": TransactionDetailsTable,
    "trans_details_pts": TransactionDetailsPtsTable,
    "funding_exclusion": fundingExclusionTable,
    "trans_alert": transAlertTable
}
function SetIndex(grandSelector) {
    $(`${grandSelector} .custom_column`).each(function (i) {
        $(this).attr('data-column', i)
    })
}
SetIndex('#trans_details')
SetIndex('#trans_details_pts')
SetIndex('#funding_exclusion')
SetIndex('#trans_alert')


// Checkbox
let whichTable;
$(".popup_dropdown button").click(function (e) {
    e.stopPropagation()
    $(".popup_dropdown button").next().not($(this).next()).removeClass('show')
    $(this).next().toggleClass("show");
    whichTable = $(this).data('id').trim()
});
$(document).on("click", function (e) {
    $(".popup_dropdown_menu").removeClass("show");
})
$('.popup_dropdown_menu').on('click', function (e) {
    e.stopPropagation()
})


$(".custom_column").click(function () {
    let getSpecificTable = assignSpecificTable[whichTable]
    let numberChecked = $(`#${whichTable} .custom_column:checked`).length;
    if ($(`#${whichTable} .custom_column:checked`).length === $(`#${whichTable} .custom_column`).length) {
        $(`#${whichTable} .select_all`).prop('checked', true);
    } else {
        $(`#${whichTable} .select_all`).prop('checked', false);
    }


    if (numberChecked < 1) {
        $(`#${whichTable} .trans_details_cnt .no-data`).removeClass('d-none')
        $(`#${whichTable} .trans_details_cnt .no-data`).parent().addClass('p-0')
    } else {
        $(`#${whichTable} .trans_details_cnt .no-data`).addClass('d-none')
        $(`#${whichTable} .trans_details_cnt .no-data`).parent().removeClass('p-0')
    }


    let getIndex = $(this).data('column')
    let column = getSpecificTable.column(getIndex);
    column.visible(!column.visible());
})

$(".select_all").click(function () {
    if (this.checked) {
        $(`#${whichTable} .custom_column`).prop('checked', true);
        let getSpecificTable = assignSpecificTable[whichTable]
        $(`#${whichTable} .trans_details_cnt .no-data`).addClass('d-none')
        $(`#${whichTable} .trans_details_cnt .no-data`).parent().removeClass('p-0')
        let customCheckDatas = Array.from(document.querySelectorAll(`#${whichTable} .custom_column`))
        let allTableDatas = customCheckDatas.map((element, i) => {
            return parseInt(element.getAttribute('data-column'))
        })
        let column = getSpecificTable.columns(allTableDatas);
        column.visible(true);
    }
})



var options = {
    series: [{
        name: 'SALES',
        data: [24, 17, 15, 16, 18, 18, 17, 14, 10, 11, 13, 15]
    }, {
        name: 'REFUNDS',
        data: [25, 15, 9, 11, 20, 23, 17, 16, 21, 23, 14, 12]
    }, {
        name: 'DISPUTES',
        data: [12, 15, 14, 11, 9, 11, 15, 15, 14, 12, 12, 15]
    }, {
        name: 'AI',
        data: [8, 7, 6, 6, 8, 9, 9, 9, 6, 10, 0, 0]
    }],
    colors: ['#FF6600', '#0072CE', '#F3B823', '#666666'],
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'months',
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        min: 0,
        max: 25,
        tickAmount: 4,
        labels: {
            formatter: function (value) {
                return "$" + value.toFixed();
            }
        },
    },

    legend: {
        show: false
    },
    markers: {
        size: 3,
        colors: ["#fff", "#fff", "#fff", "#fff"],
        strokeColor: ['#FF6600', '#0072CE', '#F3B823', '#666666'],
        strokeWidth: 2,
        hover: {
            size: 5
        }
    },

    stroke: {
        curve: "smooth",
        width: 2,
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: ".2",
            type: "vertical",
            opacityFrom: 0.45,
            opacityTo: 0.3,
            stops: [0, 100],
        },
    },
};
var chart = new ApexCharts(document.querySelector(".reject_detail_chart"), options);
chart.render();