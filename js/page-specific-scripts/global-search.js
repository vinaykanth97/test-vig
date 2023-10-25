// Rendering Datatables
let previousImg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1.45rem" height="1.45rem" viewBox="0 0 20 20">
  <g id="Group_8611" data-name="Group 8611" transform="translate(0 20) rotate(-90)">
    <g id="keyboard_arrow_down-24px_3_" data-name="keyboard_arrow_down-24px (3)">
      <path id="Path_24649" data-name="Path 24649" d="M0,20H20V0H0Z" fill="none"/>
      <path id="Path_24650" data-name="Path 24650" d="M1.175,6.175,5,2.358,8.825,6.175,10,5,5,0,0,5Z" transform="translate(5 6.667)" fill="#afafaf"/>
    </g>
  </g>
</svg>`;
let nextPagination = `
     
<svg xmlns="http://www.w3.org/2000/svg" width="1.45rem" height="1.45rem" viewBox="0 0 20 20">
<g id="Group_8611" data-name="Group 8611" transform="translate(-151 384) rotate(-90)">
  <g id="keyboard_arrow_down-24px_3_" data-name="keyboard_arrow_down-24px (3)" transform="translate(364 151)">
    <path id="Path_24649" data-name="Path 24649" d="M0,0H20V20H0Z" fill="none"/>
    <path id="Path_24650" data-name="Path 24650" d="M7.175,8.59,11,12.407,14.825,8.59,16,9.765l-5,5-5-5Z" transform="translate(-1 -1.432)" fill="#afafaf"/>
  </g>
</g>
</svg>`;

//  Setting Width for scroll
let getAllTableHeaders = document.querySelectorAll("#iv-table thead tr th");
// Get Index of Any Elements
function GetIndexOfElements(selector) {
  let elementIndex = Array.from(selector).findIndex((element, i) => {
    if (element.classList.contains("custom-fixed")) {
      return i;
    }
  });
  return elementIndex;
}
// All Table related Datas
let tableColumnDatas = [
  {
    id: 0,
    mid: "530961200064640",
    chain_id: "82923114430",
    dba_name: "STAHL’S GOAT ROPING",
    dba_address: "232 W. MARKET ST. GREENSBORO, NC 27400",
    key_data: "12/01/2021",
    acc_status: "OPEN",
    portfolio: "DEBIT BANK DIGITAL",
    assigned_rm: "TUSJ - TIM STAHL",
    link: "./investigation-queue-detail.html",
    legal_names: "LL ENTERPRISES",
    phone: "336-255-7733",
    url: "LISOXFANS.COM",
    no_of_otlts: "1",
    signed_vol: "$500,000 / $150",
    review_days: "5",
    last_comms_date: "12/10/21",
    daily_funding: "$55,534",
    day_funding: "$40,000",
    pts_sales: "$5,233",
    pts_refund: "$5,233",
    pts_cumm_refund: "$40,000",
    530961200064640: {
      "6months": [
        {
          name: "SALES",
          data: [0, 17, 18, 15, 16, 19],
        },
        {
          name: "REFUNDS",
          data: [5, 6, 10, 7, 9, 8],
        },
        {
          name: "DISPUTES",
          data: [2, 1, 5, 4, 6, 6],
        },
      ],
      "12months": [
        {
          name: "SALES",
          data: [0, 17, 18, 15, 16, 19, 12, 8, 0, 12, 15, 0],
        },
        {
          name: "REFUNDS",
          data: [5, 6, 10, 7, 9, 8, 12, 10, 15, 18, 22, 0],
        },
        {
          name: "DISPUTES",
          data: [2, 1, 5, 4, 6, 6, 8, 8, 7, 10, 11, 0],
        },
      ],
    },
  },
  {
    id: 1,
    mid: "530961200064641",
    chain_id: "82923114431",
    dba_name: "GLOBAL MUSEUM",
    dba_address: "232 W. MARKET ST. GREENSBORO, NC 28401",
    key_data: "13/03/2020",
    acc_status: "CLOSED",
    portfolio: "DISCORD SERVICES",
    assigned_rm: "TUSJ - TIM SJAHL",
    link: "./investigation-queue-detail.html",
    legal_names: "FISERV INC",
    phone: "336-255-7733",
    url: "LISOXFANS.COM",
    no_of_otlts: "1",
    signed_vol: "$500,000 / $150",
    review_days: "5",
    last_comms_date: "12/10/21",
    daily_funding: "$55,534",
    day_funding: "$40,000",
    pts_sales: "$5,233",
    pts_refund: "$5,233",
    pts_cumm_refund: "$40,000",
    530961200064641: {
      "6months": [
        {
          name: "SALES",
          data: [26, 17, 18, 15, 16, 19],
        },
        {
          name: "REFUNDS",
          data: [5, 6, 10, 7, 9, 8],
        },
        {
          name: "DISPUTES",
          data: [2, 1, 5, 4, 6, 6],
        },
      ],
      "12months": [
        {
          name: "SALES",
          data: [26, 17, 18, 15, 16, 19, 12, 12, 0, 18, 0, 0],
        },
        {
          name: "REFUNDS",
          data: [5, 6, 10, 7, 10, 8, 12, 10, 15, 18, 22, 0],
        },
        {
          name: "DISPUTES",
          data: [2, 1, 5, 4, 6, 6, 8, 8, 7, 10, 11, 0],
        },
      ],
    },
  },
  {
    id: 2,
    mid: "530961200064642",
    chain_id: "82923114231",
    dba_name: "RAJ TEA SHOP",
    dba_address: "232 W. MARKET ST. GREENSBORO, NC 27402",
    key_data: "12/01/2021",
    acc_status: "OPEN",
    portfolio: "KEY BANK DIGITAL",
    assigned_rm: "TUSJ - TJM STAHL",
    link: "./investigation-queue-detail.html",
    legal_names: "NEURAL NETWORKS",
    phone: "336-255-7733",
    url: "LISOXFANS.COM",
    no_of_otlts: "1",
    signed_vol: "$500,000 / $150",
    review_days: "5",
    last_comms_date: "12/10/21",
    daily_funding: "$55,534",
    day_funding: "$40,000",
    pts_sales: "$5,233",
    pts_refund: "$5,233",
    pts_cumm_refund: "$40,000",
    530961200064642: {
      "6months": [
        {
          name: "SALES",
          data: [0, 17, 18, 15, 16, 19],
        },
        {
          name: "REFUNDS",
          data: [5, 6, 12, 7, 10, 8],
        },
        {
          name: "DISPUTES",
          data: [2, 1, 5, 4, 6, 6],
        },
      ],
      "12months": [
        {
          name: "SALES",
          data: [0, 17, 18, 15, 16, 19, 12, 0, 0, 0, 11, 0],
        },
        {
          name: "REFUNDS",
          data: [5, 6, 12, 19, 10, 8, 12, 10, 15, 18, 22, 0],
        },
        {
          name: "DISPUTES",
          data: [2, 1, 5, 4, 6, 6, 8, 8, 7, 10, 0, 0],
        },
      ],
    },
  },
];
let ivTable = $("#iv-table").DataTable({
  responsive: false,
  autoWidth: false,
  info: true,
  searching: true,
  dom: "Bfrtip",
  order: [],
  columns: [
    {
      className: "details-control",
      defaultContent: "",
      data: null,
      orderable: false,
    },
    { data: "mid", className: "merchant-id" },
    { data: "chain_id" },
    { data: "dba_name" },
    { data: "dba_address" },
    { data: "key_data" },
    { data: "acc_status" },
    { data: "portfolio" },
    { data: "assigned_rm" },
    {
      data: "link",
      className: "custom-fixed",
      orderable: false,
      render: function (dataField) {
        return `<a class="d-block ext-link-icon" href="${dataField}"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g data-name="Group 10194" transform="translate(-172 -382)"> <g data-name="Group 10191" transform="translate(175.1 385)"> <g data-name="Group 10193"> <path data-name="Path 26517" d="M15.888,17.97H2.029A2.082,2.082,0,0,1-.05,15.89V2.032A2.082,2.082,0,0,1,2.029-.048H8.958v1.9H2.029a.18.18,0,0,0-.179.18V15.89a.18.18,0,0,0,.179.18H15.888a.18.18,0,0,0,.179-.18V8.961h1.9V15.89A2.082,2.082,0,0,1,15.888,17.97Z" fill="#afafaf" class="fill-color"></path> <g class="hover-arrow" data-name="Group 10192"> <path data-name="Path 26518" d="M17.967,6.962h-1.9V2.032a.179.179,0,0,0-.179-.179H11.033v-1.9h4.855a2.081,2.081,0,0,1,2.079,2.079Z" fill="#afafaf" class="fill-color"></path> <path data-name="Line 1227" d="M.672,12.424-.672,11.082,11.071-.671,12.415.671Z" transform="translate(5.429 0.749)" fill="#afafaf" class="fill-color"></path> <path data-name="Path 26519" d="M15.874,0h2.049V2.1Z" fill="#afafaf" class="fill-color"></path> </g> </g> </g> <path data-name="Path 26520" d="M0,0H24V24H0Z" transform="translate(172 382)" fill="none"></path> </g> </svg> </a>`;
      },
    },
    {
      className: "d-none",
      data: "legal_names",
    },
  ],
  data: tableColumnDatas,
  buttons: [
    {
      extend: "excelHtml5",
      charset: "UTF-8",
      bom: true,
      showNEntries: true,
      text: '<i class="fa fa-file-excel-o">Export EXCEL</i>',
      titleAttr: "Excel",
      oSelectorOpts: { filter: "applied", order: "current" },
      // "sFileName": "report.xlsx",
      action: function () {
        exportTableToCSV.apply(this, [$("#iv-table"), "global-search.csv"]);
      },
    },
  ],
  columnDefs: [
    {
      orderable: false,
      targets: [GetIndexOfElements(getAllTableHeaders), 0],
    },
  ],
  language: {
    paginate: {
      next: nextPagination,
      previous: previousImg,
    },
    lengthMenu: "Display _MENU_ records per page",
    info: `<span>_START_ - _END_</span> of _MAX_`,
    infoEmpty: `<span>0 - 0</span> of _MAX_`,
    search: "",
    infoFiltered: "",
    zeroRecords: "No records to display",
  },
});

// Switch Wild Search
$(".search_input").click(function () {
  $(this).closest(".search_switch").toggleClass("toggle_search");
  $(".global-submit").click();
});

// Global Search
$(".global-submit").click(function (e) {
  e.preventDefault();

  // Getting Empty fields Length
  let globalFields = $('.global-search-form input[type="text"]').filter(
    function () {
      return this.value !== "";
    }
  );
  $('.global-search-form input[type="text"]').map(function (index, key) {
    // Checking what message the action needs based on globalfields length
    if (globalFields.length <= 0) {
      $(".no-data-header").text("Atleast one field is mandatory");
    } else {
      $(".no-data-header").text("No Records Found");
    }

    // Checking to See if prop is checked default is exact search
    if (!$(".search_input").prop("checked")) {
      // Regular expression to return empty datas if incase there is no values in the field (Exact search scenario)
      if (globalFields.length <= 0) {
        let noEmptyRegex = "^s*$\\b" + key.value.trim() + "\\b";
        ivTable
          .columns(parseInt($(key).data("column")))
          .search(noEmptyRegex, true, false)
          .draw();
      } else {
        // Exact Search based on REGEX
        let regex = "\\b" + key.value.trim() + "\\b";
        ivTable
          .columns(parseInt($(key).data("column")))
          .search(regex, true, false)
          .draw();
      }
    } else {
      // Regular expression to return empty datas if incase there is no values in the field (Wild search scenario)
      if (globalFields.length <= 0) {
        let noEmptyRegex = "^s*$\\b" + key.value.trim() + "\\b";
        ivTable
          .columns(parseInt($(key).data("column")))
          .search(noEmptyRegex, true, false)
          .draw();
      } else {
        // Regular Search
        ivTable
          .columns(parseInt($(key).data("column")))
          .search(key.value.trim())
          .draw();
      }
    }

    // Check for Empty tables and display a empty message in a div
    if (ivTable.page.info().recordsDisplay > 0) {
      $(".right-opt .switch_button").css("pointerEvents", "all");
      $("#iv-table").removeClass("d-none");
      $("#iv-table")
        .closest(".iv-table-parent")
        .find(".no-data")
        .addClass("d-none");
    } else {
      $(".right-opt .switch_button").css("pointerEvents", "");
      $("#iv-table").addClass("d-none");
      $("#iv-table")
        .closest(".iv-table-parent")
        .find(".no-data")
        .removeClass("d-none");
    }
  });
});

// Clear Search and input fields
$(".clear-search").on("click", function () {
  $('.global-search-form input[type="text"]').map(function (index, element) {
    if (element.value) {
      $(this).val("");
      $("#iv-table,.no-data").addClass("d-none");
    }
  });
});

// Export excel
function exportTableToCSV($table, filename) {
  var $Tabla_Nueva = $table.find("tr:has(td,th)");
  var Tabla_Nueva2 = $Tabla_Nueva.filter(function () {
    return this.childElementCount != 1;
  });
  var $rows = Tabla_Nueva2,
    tmpColDelim = String.fromCharCode(11),
    tmpRowDelim = String.fromCharCode(0),
    colDelim = filename.indexOf("xls") != -1 ? '"\t"' : '","',
    rowDelim = '"\r\n"',
    csv =
      '"' +
      $rows
        .map(function (i, row) {
          var $row = $(row);
          var $cols = $row.find("td:not(.not-export),th:not(.not-export)");
          if ($cols.length !== 0) {
            return $cols
              .map(function (j, col) {
                var $col = $(col);
                var text = $col.text().replace(/\./g, "");
                return text.replace('"', '""');
              })
              .get()
              .join(tmpColDelim);
          }
        })
        .get()
        .join(tmpRowDelim)
        .split(tmpRowDelim)
        .join(rowDelim)
        .split(tmpColDelim)
        .join(colDelim) +
      '"';
  download_csv(csv, filename);
}
function download_csv(csv, filename) {
  var csvFile;
  var downloadLink;
  csvFile = new Blob([csv], { type: "text/csv" });
  downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
}
$(".excel-export").on("click", function () {
  $("#iv-table_wrapper .buttons-html5").click();
});

$(".pagination-provision").append($(".dataTables_info"));
$(".pagination-provision").append($(".dataTables_paginate"));

$(".details-control").click(function () {
  setTimeout(() => {
    $(
      ".table-inner-content table:not(.export-table-dyn) td,.table-inner-content table:not(.export-table-dyn) th"
    ).each(function (index, element) {
      $(element).addClass("not-export");
    });
  }, 0);
});
// Accordion HTML
function AccordionOutput(tableColumnDatas) {
  return `
        <div
        class="table-inner-content d-flex align-items-start justify-content-between position-relative">
        <table class="overall-table">
           <tr>
              <td class="table-info">
                 <table class="table mini-table">
                    <tbody>
                       <tr>
                          <th scope="row" class="copy-element">Legal Name</th>
                          <td class="column-divide copy-element">:</td>
                          <td class="copy-element">${tableColumnDatas.legal_names}</td>
                       </tr>
                       <tr>
                          <th scope="row" class="copy-element">Assigned RM</th>
                          <td class="column-divide copy-element">:</td>
                          <td class="copy-element">${tableColumnDatas.assigned_rm}</td>
                       </tr>
                       <tr>
                          <th scope="row" class="copy-element">Phone</th>
                          <td class="column-divide copy-element">:</td>
                          <td class="copy-element">${tableColumnDatas.phone}</td>
                       </tr>
                       <tr>
                          <th scope="row" class="copy-element">URL</th>
                          <td class="column-divide copy-element">:</td>
                          <td class="copy-element">${tableColumnDatas.url}</td>
                       </tr>
                       <tr>
                          <th scope="row" class="copy-element"> Portfolio</th>
                          <td class="column-divide copy-element">:</td>
                          <td class="copy-element">${tableColumnDatas.portfolio}</td>
                       </tr>
                       <tr>
                          <th scope="row" class="copy-element"># Of Otlts</th>
                          <td class="column-divide copy-element">:</td>
                          <td class="copy-element">${tableColumnDatas.no_of_otlts}</td>
                       </tr>
                       <tr>
                          <th scope="row" class="copy-element">Signed Vol / Avg Tkt</th>
                          <td class="column-divide copy-element">:</td>
                          <td class="copy-element">${tableColumnDatas.signed_vol}</td>
                       </tr>
                       <tr>
                          <th scope="row" class="copy-element">Days In Review</th>
                          <td class="column-divide copy-element">:</td>
                          <td class="copy-element">${tableColumnDatas.review_days}</td>
                       </tr>
                       <tr>
                          <th scope="row" class="copy-element">Last Coms Date</th>
                          <td class="column-divide copy-element">:</td>
                          <td class="copy-element">${tableColumnDatas.last_comms_date}</td>
                       </tr>
                    </tbody>
                 </table>
              </td>
           </tr>
        </table>
        <table class="align-top indicator-action">
           <tr>
              <td>
                 <div class="indicator-inner">
                    <div class="all-categories">
                       <div class="action-categories d-flex">
                          <figure class="action-icon">
                             <img src="./images/daily-funding.svg" alt="Gross Risk">
                          </figure>
                          <div class="content">
                             <h3 class="copy-element">${tableColumnDatas.daily_funding}</h3>
                             <h5 class="copy-element">DAILY FUNDING</h5>
                          </div>
                          <span class="line"></span>
                       </div>
                       <div class="action-categories d-flex">
                          <figure class="action-icon">
                             <img src="./images/30-day-funcing.svg" alt="30-day-funcing">
                          </figure>
                          <div class="content">
                             <h3 class="copy-element">${tableColumnDatas.day_funding}</h3>
                             <h5 class="copy-element">30DAY FUNDING</h5>
                          </div>
                          <span class="line"></span>
                       </div>
                       <div class="action-categories d-flex">
                          <figure class="action-icon">
                             <img src="./images/pts-sales.svg" alt="PTS Sales">
                          </figure>
                          <div class="content">
                             <h3 class="copy-element">${tableColumnDatas.pts_sales}</h3>
                             <h5 class="copy-element">PTS SALES</h5>
                          </div>
                          <span class="line"></span>
                       </div>
                       <div class="action-categories d-flex">
                          <figure class="action-icon">
                             <img src="./images/pts-refund.svg" alt="PTS refund">
                          </figure>
                          <div class="content">
                             <h3 class="copy-element">${tableColumnDatas.pts_refund}</h3>
                             <h5 class="copy-element">PTS REFUND</h5>
                          </div>
                          <span class="line"></span>
                       </div>
                       <div class="action-categories d-flex">
                          <figure class="action-icon">
                             <img src="./images/pts-cumm-refund.svg" alt="PTS cumm Refund">
                          </figure>
                          <div class="content">
                             <h3 class="copy-element">${tableColumnDatas.pts_cumm_refund}</h3>
                             <h5 class="copy-element">PTS CUMM REFUND</h5>
                          </div>
                          <span class="line"></span>
                       </div>
                    </div>
                 </div>
              </td>
           </tr>
        </table>
        <div class="align-top activity-history">
           <div class="activity-card">
              <div
                 class="activity-card-header  d-flex align-items-center justify-content-between">
                 <h4 class="mb-0">Activity History</h4>
                 <div class="left-options d-flex align-items-center">
                    <div class="dropdown month-classify" data-trigger=${tableColumnDatas.mid} data-row=${tableColumnDatas.id}>
                       <button class="btn dropdown-toggle dropdown-angle" type="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                       Last 12 months
                       </button>
                       <ul class="dropdown-menu">
                          <li>
                             <a class="dropdown-item" href="javascript:void(0)"
                                data-id="6months">Past 6
                             months</a>
                          </li>
                          <li class="divider"></li>
                          <li class="active">
                             <a class="dropdown-item" href="javascript:void(0)"
                                data-id="12months">Past 12
                             months</a>
                          </li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
           <div class="activity-body">
              <div class="activity-chart" data-id=${tableColumnDatas.mid}></div>
           </div>
        </div>
     </div>
     
     <!-- Export Table cells (Used as a clone for only exporting in Excel) -->
     <table class="d-none export-table-dyn">
     <tr>
        <td>Legal Name</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.legal_names}</td>
     </tr>
     <tr>
        <td>Assigned RM</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.assigned_rm}</td>
     </tr>
     <tr>
        <td>Phone</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.phone}</td>
     </tr>
     <tr>
        <td>URL</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.url}</td>
     </tr>
     <tr>
        <td> Portfolio</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.portfolio}</td>
     </tr>
     <tr>
        <td># Of Otlts</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.no_of_otlts}</td>
     </tr>
     <tr>
        <td>Signed Vol / Avg Tkt</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.signed_vol}</td>
     </tr>
     <tr>
        <td>Days In Review</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.review_days}</td>
     </tr>
     <tr>
        <td>Last Coms Date</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.last_comms_date}</td>
     </tr>
     <tr>
        <td>DAILY FUNDING</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.daily_funding}</td>
     </tr>
     <tr>
        <td>30DAY FUNDING</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.day_funding}</td>
     </tr>
     <tr>
        <td>PTS SALES</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.pts_sales}</td>
     </tr>
     <tr>
        <td>PTS REFUND</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.pts_refund}</td>
     </tr>
     <tr>
        <td>PTS CUMM REFUND</td>
        <td class="column-divide">:</td>
        <td>${tableColumnDatas.pts_cumm_refund}</td>
     </tr>
     </table>
     <!-- -->
`;
}

// Chart customisations which comes under under each datatable row
let usedColors = ["#A0D59A", "#FF6600", "#2E8BC9"];
var options = {
  series: [
    {
      name: "SALES",
      data: [25000, 17, 18, 15, 16, 19, 12],
    },
    {
      name: "REFUNDS",
      data: [5, 6, 10, 7, 9, 8, 12, 10, 15, 18, 22],
    },
    {
      name: "DISPUTES",
      data: [2, 1, 5, 4, 6, 6, 8, 8, 7, 10, 11],
    },
  ],

  chart: {
    height: 400,
    width: "100%",
    type: "area",
    fontFamily: "Univers Fiserv Regular",
    fontSize: "0.875rem",
    color: "#666666",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    show: true,
    width: 2,
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      style: {
        colors: "#666",
      },
    },
    tickPlacement: "on",
  },
  yaxis: {
    show: false,
    labels: {
      formatter: function (value) {
        return "$" + value;
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  colors: usedColors,
  fill: {
    type: "gradient",
    gradient: {
      shade: "0.8",
      type: "vertical",
      opacityFrom: 0.6,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
  tooltip: {
    style: {
      fontSize: "18px",
    },
    y: {
      show: false,
      title: {
        formatter: (value) => {
          return;
        },
      },
    },
    x: {
      show: true,
      format: "dd MMM",
    },
    marker: {
      show: false,
    },
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      let xAxisCategory = w.globals.categoryLabels;
      let EachColors = usedColors[seriesIndex];
      let eachPlot = series[seriesIndex][dataPointIndex];
      return `
                    <p>${
                      xAxisCategory[dataPointIndex]
                    } ${new Date().getFullYear()}</p>
                    <p style="color:${EachColors};font-size:18px;">$${eachPlot}K</p>

                `;
    },
  },

  legend: {
    position: "top",
    horizontalAlign: "right",
    labels: {
      colors: "#666666",
    },
    styles: {
      colors: "#666666",
    },
    itemMargin: {
      horizontal: 20,
      vertical: 20,
    },
    markers: {
      width: 15,
      height: 15,
      radius: 3,
      offsetY: 3,
    },
  },
  grid: {
    borderColor: "#EAF0F4",
    opacity: 0.8,
    strokeDashArray: 7,
    row: {
      colors: ["transparent", "transparent"],
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
};

let tableHeadElements = $("#iv-table > thead > tr > th:not(.sorting_disabled)");
let tableDataElements = $("#iv-table > tbody > tr > td.merchant-id");
$(tableDataElements).each(function (it) {
  let dataId = $(this).text().trim();
  $("#iv-table > tbody > tr > td.details-control")
    .eq(it)
    .attr("data-id", dataId);
  $("#iv-table > tbody > tr > td.details-control")
    .eq(it)
    .attr("data-index", it);
});

$("#iv-table tbody").on("click", "td.details-control", function () {
  var tr = $(this).closest("tr"),
    row = ivTable.row(tr);
  let merchantData = $(this).data("id");
  if (row.child.isShown()) {
    tr.next("tr").removeClass("details-row");
    row.child.hide();
    tr.removeClass("shown");
  } else {
    row.child(AccordionOutput(row.data())).show();
    tr.next("tr").addClass("details-row");
    tr.addClass("shown");
    let chart = new ApexCharts(
      document.querySelector(`.activity-chart[data-id="${merchantData}"]`),
      options
    );

    chart.render();
    setTimeout(() => {
      parseInt(row.data().mid) === merchantData
        ? chart.updateSeries(row.data()[merchantData]["12months"])
        : null;
    }, 0);
  }
});

$(document).on(
  "click",
  ".activity-history .month-classify .dropdown-item",
  function () {
    let getFilterCriteria = $(this).data("id").trim();
    let getCurrentTab = $(this).parents(".month-classify").attr("data-trigger");
    let getCurrentRow = $(this).parents(".month-classify").attr("data-row");
    let chart = new ApexCharts(
      document.querySelector(`.activity-chart[data-id="${getCurrentTab}"]`),
      options
    );
    chart.render();
    if (getFilterCriteria === "6months") {
      chart.updateOptions({
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        series:
          tableColumnDatas[getCurrentRow][getCurrentTab][getFilterCriteria],
        chart: {
          animations: {
            enabled: true,
          },
        },
      });
    } else {
      let actualData =
        tableColumnDatas[getCurrentRow][getCurrentTab][getFilterCriteria];
      chart.updateSeries(actualData);
    }
  }
);

// Scroll Activities
$(window).on("scroll", function () {
  $(
    "table.collapsible-table.fixedHeader-floating,table.collapsible-table.fixedHeader-locked"
  ).css("width", $("#iv-table_wrapper").outerWidth() + "px");
  collapseHeight();
});
function collapseHeight() {
  let headHeight = $("header").outerHeight();
  let pageTopHeight = $(".page-secondary-head").outerHeight();
  let overAlheight = headHeight + pageTopHeight;
  $("#iv-table > thead").css("top", overAlheight);
}

collapseHeight();

$("#switch_toggle").click(function () {
  if ($("#switch_toggle").is(":checked")) {
    $("body").addClass("collapse-active");
    collapseHeight();
  } else {
    $("body").removeClass("collapse-active");
  }
});
