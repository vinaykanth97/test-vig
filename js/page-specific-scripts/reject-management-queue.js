// Rendering Datatables
let previousImg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1.45rem" height="1.45rem" viewBox="0 0 20 20">
  <g id="Group_8611" data-name="Group 8611" transform="translate(0 20) rotate(-90)">
    <g id="keyboard_arrow_down-24px_3_" data-name="keyboard_arrow_down-24px (3)">
      <path id="Path_24649" data-name="Path 24649" d="M0,20H20V0H0Z" fill="none"/>
      <path id="Path_24650" data-name="Path 24650" d="M1.175,6.175,5,2.358,8.825,6.175,10,5,5,0,0,5Z" transform="translate(5 6.667)" fill="#afafaf"/>
    </g>
  </g>
</svg>
    `;
let nextPagination = `
<svg xmlns="http://www.w3.org/2000/svg" width="1.45rem" height="1.45rem" viewBox="0 0 20 20">
<g id="Group_8611" data-name="Group 8611" transform="translate(-151 384) rotate(-90)">
  <g id="keyboard_arrow_down-24px_3_" data-name="keyboard_arrow_down-24px (3)" transform="translate(364 151)">
    <path id="Path_24649" data-name="Path 24649" d="M0,0H20V20H0Z" fill="none"/>
    <path id="Path_24650" data-name="Path 24650" d="M7.175,8.59,11,12.407,14.825,8.59,16,9.765l-5,5-5-5Z" transform="translate(-1 -1.432)" fill="#afafaf"/>
  </g>
</g>
</svg>

  `;

//  Setting Width for scroll
let getAllTableHeaders = document.querySelectorAll(
  "#iv-table_reject thead tr th"
);
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
    action: "OPEN",
    item_id: "133ITEM13",
    mid: "82923118888",
    no_of_outlet: "05",
    dba_address: "232 W. MARKET ST. GREENSBORO, NC 27401",
    alert_triggered: "NOT ACTIVE",
    alert_reason: "TBD",
    priority: "MEDIUM",
    link: "./reject-management-queue-detail.html",
    dba_name: "RAJ’S RECORD SHOP",
    legal_name: "LL ENTERPRISES",
    board_date: "10/12/2022",
    email_address: "RAJ@GMAIL.COM",
    url: "LISOXFANS.COM",
    step: "FOUR STEP",
    relationship_manager: "MANAGER",
    sales_amt: "3,585",
    credit_amt: "5,585",
    chbks_amt: "8,585",
    chbks_cnt: "13,585",
    declines_cnt: "3,508",
    fe: "1,07,550",
    sum_pts_refund: "3,585",
    sum_pts_sales: "1,07,550",
  },
  {
    id: 1,
    action: "CLOSE",
    item_id: "133ITEM12",
    mid: "82923114433",
    no_of_outlet: "10",
    dba_address: "232 W. MARKET ST. GREENSBORO, NC 27401",
    alert_triggered: "NOT ACTIVE",
    alert_reason: "TBD",
    priority: "HIGH",
    link: "./reject-management-queue-detail.html",
    dba_name: "RAJ’S RECORD SHOP",
    legal_name: "LL ENTERPRISES",
    board_date: "10/12/2022",
    email_address: "RAJ@GMAIL.COM",
    url: "LISOXFANS.COM",
    step: "FOUR STEP",
    relationship_manager: "MANAGER",
    sales_amt: "3,585",
    credit_amt: "5,585",
    chbks_amt: "8,585",
    chbks_cnt: "13,585",
    declines_cnt: "3,508",
    fe: "1,07,550",
    sum_pts_refund: "3,585",
    sum_pts_sales: "1,07,550",
  },
  {
    id: 2,
    action: "OPEN",
    item_id: "133ITEM13",
    mid: "82923118888",
    no_of_outlet: "05",
    dba_address: "232 W. MARKET ST. GREENSBORO, NC 27401",
    alert_triggered: "NOT ACTIVE",
    alert_reason: "TBD",
    priority: "LOW",
    link: "./reject-management-queue-detail.html",
    dba_name: "RAJ’S RECORD SHOP",
    legal_name: "LL ENTERPRISES",
    board_date: "10/12/2022",
    email_address: "RAJ@GMAIL.COM",
    url: "LISOXFANS.COM",
    step: "FOUR STEP",
    relationship_manager: "MANAGER",
    sales_amt: "3,585",
    credit_amt: "5,585",
    chbks_amt: "8,585",
    chbks_cnt: "13,585",
    declines_cnt: "3,508",
    fe: "1,07,550",
    sum_pts_refund: "3,585",
    sum_pts_sales: "1,07,550",
  },
];

let rejectManagementTable = $("#iv-table_reject").DataTable({
  responsive: true,
  autoWidth: false,
  info: true,
  searching: true,
  dom: "Bfrtip",
  order: [],
  fixedHeader: true,
  buttons: ["copy", "csv", "excel", "pdf", "print"],
  columnDefs: [
    {
      orderable: false,
      targets: [GetIndexOfElements(getAllTableHeaders), 0, 9],
    },
  ],
  columns: [
    {
      className: "details-control",
      defaultContent: "",
      data: null,
      orderable: false,
    },
    { data: "action" },
    { data: "item_id" },
    { data: "mid" },
    { data: "no_of_outlet" },
    { data: "dba_address" },
    { data: "alert_triggered" },
    { data: "alert_reason" },
    {
      data: "priority",
      render: function (dataField) {
        return `<span class="priority-badges text-center 
        ${
          dataField === "MEDIUM"
            ? "medium_badge"
            : dataField === "HIGH"
            ? "high_badge"
            : "low_badge"
        }">${dataField}</span>`;
      },
    },
    {
      data: "link",
      className: "custom-fixed",
      render: function (dataField) {
        return `<a class="d-block ext-link-icon" href="${dataField}"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g data-name="Group 10194" transform="translate(-172 -382)"> <g data-name="Group 10191" transform="translate(175.1 385)"> <g data-name="Group 10193"> <path data-name="Path 26517" d="M15.888,17.97H2.029A2.082,2.082,0,0,1-.05,15.89V2.032A2.082,2.082,0,0,1,2.029-.048H8.958v1.9H2.029a.18.18,0,0,0-.179.18V15.89a.18.18,0,0,0,.179.18H15.888a.18.18,0,0,0,.179-.18V8.961h1.9V15.89A2.082,2.082,0,0,1,15.888,17.97Z" fill="#afafaf" class="fill-color"></path> <g class="hover-arrow" data-name="Group 10192"> <path data-name="Path 26518" d="M17.967,6.962h-1.9V2.032a.179.179,0,0,0-.179-.179H11.033v-1.9h4.855a2.081,2.081,0,0,1,2.079,2.079Z" fill="#afafaf" class="fill-color"></path> <path data-name="Line 1227" d="M.672,12.424-.672,11.082,11.071-.671,12.415.671Z" transform="translate(5.429 0.749)" fill="#afafaf" class="fill-color"></path> <path data-name="Path 26519" d="M15.874,0h2.049V2.1Z" fill="#afafaf" class="fill-color"></path> </g> </g> </g> <path data-name="Path 26520" d="M0,0H24V24H0Z" transform="translate(172 382)" fill="none"></path> </g> </svg> </a>`;
      },
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
      //"sFileName": "report.xlsx",
      action: function (e, dt, button, config) {
        exportTableToCSV.apply(this, [
          $("#iv-table_reject"),
          "reject-management.csv",
        ]);
      },
    },
  ],
  language: {
    paginate: {
      next: nextPagination,
      previous: previousImg,
    },
    lengthMenu: "Display _MENU_ records per page",
    info: `<span>_START_ - _END_</span> of _TOTAL_`,
    search: "",
    infoFiltered: "",
    zeroRecords: "No records to display",
  },
  fixedColumns: {
    leftColumns: 2,
    rightColumns: 1,
  },
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
  $("#iv-table_reject_wrapper .buttons-html5").click();
});

$(".pagination-provision").append($(".dataTables_info"));
$(".pagination-provision").append($(".dataTables_paginate"));

$(".search-box").append($(".dataTables_filter"));
$(".search-box .dataTables_filter label input")
  .addClass("form-control border-end-0 border input-type-1")
  .attr("placeholder", "Search here…");
$(".input-type-1").click(function () {
  $(this).focus();
});

var categoryIndex = 0;
var dropdownValue = $(".queue-list button").html().trim().toUpperCase();

$.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
  var selectedItem = $(".dataTables_filter input").val().toUpperCase();
  var category = data[categoryIndex];
  if (dropdownValue === "ALL" || category.includes(selectedItem)) {
    return true;
  }
  return false;
});

$(".queue-list li").click(function (e) {
  categoryIndex = 0;
  dropdownValue = $(this).children("a").html().trim().toUpperCase();
  setTimeout(() => {
    $("#iv-table_reject th").each(function (i) {
      if ($(this).html() === dropdownValue) {
        categoryIndex = i;
        return false;
      }
    });
  }, 500);
});

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
      <div class="table-inner-content d-flex align-items-start justify-content-between position-relative">
      <table class="overall-table">
         <tr>
            <td class="table-info">
               <table class="table mini-table">
                  <tbody>
                     <tr>
                        <th scope="row" class="copy-element">DBA Name</th>
                        <td class="column-divide copy-element">:</td>
                        <td class="copy-element">${tableColumnDatas.dba_name}</td>
                     </tr>
                     <tr>
                        <th scope="row" class="copy-element">Legal Name</th>
                        <td class="column-divide copy-element">:</td>
                        <td class="copy-element">${tableColumnDatas.legal_name}</td>
                     </tr>
                     <tr>
                        <th scope="row" class="copy-element">Board Date</th>
                        <td class="column-divide copy-element">:</td>
                        <td class="copy-element">${tableColumnDatas.board_date}</td>
                     </tr>
                     <tr>
                        <th scope="row" class="copy-element">Email Address</th>
                        <td class="column-divide copy-element">:</td>
                        <td class="copy-element">${tableColumnDatas.email_address}</td>
                     </tr>
                     <tr>
                        <th scope="row" class="copy-element"> URL</th>
                        <td class="column-divide copy-element">:</td>
                        <td class="copy-element">${tableColumnDatas.url}</td>
                     </tr>
                     <tr>
                        <th scope="row" class="copy-element">Step</th>
                        <td class="column-divide copy-element">:</td>
                        <td class="copy-element">${tableColumnDatas.step}</td>
                     </tr>
                     <tr>
                        <th scope="row" class="copy-element">Relationship Manager</th>
                        <td class="column-divide copy-element">:</td>
                        <td class="copy-element">${tableColumnDatas.relationship_manager}</td>
                     </tr>
                  </tbody>
               </table>
            </td>
         </tr>
      </table>
      <div class="overall-table_40">
         <div class="align-top activity-history">
            <div class="activity-card">
               <div
                  class="activity-card-header  d-flex align-items-center justify-content-between">
                  <h4 class="mb-0">Processing Stats</h4>
               </div>
            </div>
         </div>
         <table class="align-top indicator-action">
            <tr>
               <td>
                  <div class="indicator-inner">
                     <div class="all-categories">
                        <div class="action-categories d-flex">
                           <figure class="action-icon">
                              <img src="./images/processing-stats-dollar.svg"
                                 alt="Gross Risk">
                           </figure>
                           <div class="content">
                              <h3 class="copy-element"><sup>$</sup>${tableColumnDatas.sales_amt}</h3>
                              <h5 class="copy-element">30D SALES AMT</h5>
                           </div>
                           <span class="line"></span>
                        </div>
                     </div>
                  </div>
               </td>
               <td>
                  <div class="indicator-inner">
                     <div class="all-categories">
                        <div class="action-categories d-flex">
                           <figure class="action-icon">
                              <img src="./images/processing-stats-dollar.svg"
                                 alt="Gross Risk">
                           </figure>
                           <div class="content">
                              <h3 class="copy-element"><sup>$</sup>${tableColumnDatas.chbks_cnt}</h3>
                              <h5 class="copy-element">30D CHBKS CNT</h5>
                           </div>
                           <span class="line"></span>
                        </div>
                     </div>
                  </div>
               </td>
            </tr>
            <tr>
               <td>
                  <div class="indicator-inner">
                     <div class="all-categories">
                        <div class="action-categories d-flex">
                           <figure class="action-icon">
                              <img src="./images/processing-stats-dollar.svg"
                                 alt="Gross Risk">
                           </figure>
                           <div class="content">
                              <h3 class="copy-element"><sup>$</sup>${tableColumnDatas.credit_amt}</h3>
                              <h5 class="copy-element">30D CREDITS AMT</h5>
                           </div>
                           <span class="line"></span>
                        </div>
                     </div>
                  </div>
               </td>
               <td>
                  <div class="indicator-inner">
                     <div class="all-categories">
                        <div class="action-categories d-flex">
                           <figure class="action-icon">
                              <img src="./images/processing-stats-dollar.svg"
                                 alt="Gross Risk">
                           </figure>
                           <div class="content">
                              <h3 class="copy-element"><sup>$</sup>${tableColumnDatas.declines_cnt}</h3>
                              <h5 class="copy-element">30D DECLINES CNT</h5>
                           </div>
                           <span class="line"></span>
                        </div>
                     </div>
                  </div>
               </td>
            </tr>
            <tr>
               <td>
                  <div class="indicator-inner">
                     <div class="all-categories">
                        <div class="action-categories d-flex">
                           <figure class="action-icon">
                              <img src="./images/processing-stats-dollar.svg"
                                 alt="Gross Risk">
                           </figure>
                           <div class="content">
                              <h3 class="copy-element"><sup>$</sup>${tableColumnDatas.chbks_amt}</h3>
                              <h5 class="copy-element">30D CHBKS AMT</h5>
                           </div>
                           <span class="line"></span>
                        </div>
                     </div>
                  </div>
               </td>
               <td>
                  <div class="indicator-inner">
                     <div class="all-categories">
                        <div class="action-categories d-flex">
                        </div>
                     </div>
                  </div>
               </td>
            </tr>
         </table>
      </div>
      <div class="overall-table_30">
         <div class="align-top activity-history">
            <div class="activity-card">
               <div
                  class="activity-card-header  d-flex align-items-center justify-content-between">
                  <h4 class="mb-0 copy-element">Sum of FE</h4>
               </div>
            </div>
         </div>
         <table class="align-top indicator-action mbot20">
            <tr>
               <td>
                  <div class="indicator-inner">
                     <div class="all-categories">
                        <div class="action-categories d-flex">
                           <figure class="action-icon">
                              <img src="./images/processing-stats-dollar.svg"
                                 alt="Gross Risk">
                           </figure>
                           <div class="content">
                              <h3 class="copy-element"><sup>$</sup>${tableColumnDatas.fe}</h3>
                              <h5 class="copy-element">FE</h5>
                           </div>
                           <span class="line"></span>
                        </div>
                     </div>
                  </div>
               </td>
            </tr>
         </table>
         <div class="align-top activity-history ">
            <div class="activity-card">
               <div
                  class="activity-card-header  d-flex align-items-center justify-content-between">
                  <h4 class="mb-0 copy-element">Sum of PTS</h4>
               </div>
            </div>
         </div>
         <table class="align-top indicator-action sum-pts">
            <tr>
               <td>
                  <div class="indicator-inner">
                     <div class="all-categories">
                        <div class="action-categories d-flex">
                           <figure class="action-icon">
                              <img src="./images/processing-stats-dollar.svg"
                                 alt="Gross Risk">
                           </figure>
                           <div class="content">
                              <h3 class="copy-element">$${tableColumnDatas.sum_pts_refund}</h3>
                              <h5 class="copy-element">REFUNDS</h5>
                           </div>
                           <span class="line"></span>
                        </div>
                     </div>
                  </div>
               </td>
            </tr>
            <tr>
               <td>
                  <div class="indicator-inner">
                     <div class="all-categories">
                        <div class="action-categories d-flex">
                           <figure class="action-icon">
                              <img src="./images/processing-stats-dollar.svg"
                                 alt="Gross Risk">
                           </figure>
                           <div class="content">
                              <h3 class="copy-element">$${tableColumnDatas.sum_pts_sales}</h3>
                              <h5 class="copy-element">SALES</h5>
                           </div>
                           <span class="line"></span>
                        </div>
                     </div>
                  </div>
               </td>
            </tr>
         </table>
      </div>
   </div>
   <!-- Export Table cells (Used as a clone for only exporting in Excel) -->
   <table class="d-none export-table-dyn">
      <tr>
         <td>DBA Name</td>
         <td class="column-divide">:</td>
         <td>${tableColumnDatas.dba_name}</td>
      </tr>
      <tr>
         <td>Legal Name</td>
         <td class="column-divide">:</td>
         <td>${tableColumnDatas.legal_name}</td>
      </tr>
      <tr>
         <td>Board Date</td>
         <td class="column-divide">:</td>
         <td>${tableColumnDatas.board_date}</td>
      </tr>
      <tr>
         <td>Email Address</td>
         <td class="column-divide">:</td>
         <td>${tableColumnDatas.email_address}</td>
      </tr>
      <tr>
         <td>  URL</td>
         <td class="column-divide">:</td>
         <td>${tableColumnDatas.url}</td>
      </tr>
      <tr>
         <td>Step</td>
         <td class="column-divide">:</td>
         <td>${tableColumnDatas.step}</td>
      </tr>
      <tr>
         <td>Relationship Manager</td>
         <td class="column-divide">:</td>
         <td>${tableColumnDatas.relationship_manager}</td>
      </tr>
      <tr>
         <td>30D SALES AMT</td>
         <td class="column-divide">:</td>
         <td>$${tableColumnDatas.sales_amt}</td>
      </tr>
      <tr>
         <td>30D CHBKS CNT</td>
         <td class="column-divide">:</td>
         <td>$${tableColumnDatas.chbks_cnt}</td>
      </tr>
      <tr>
         <td>30D CREDITS AMT</td>
         <td class="column-divide">:</td>
         <td>$${tableColumnDatas.credit_amt}</td>
      </tr>
      <tr>
         <td>30D DECLINES CNT</td>
         <td class="column-divide">:</td>
         <td>$${tableColumnDatas.declines_cnt}</td>
      </tr>
      <tr>
         <td>30D CHBKS AMT</td>
         <td class="column-divide">:</td>
         <td>$${tableColumnDatas.chbks_amt}</td>
      </tr>
      <tr>
         <td>FE</td>
         <td class="column-divide">:</td>
         <td>$${tableColumnDatas.fe}</td>
      </tr>
      <tr>
         <td>REFUNDS</td>
         <td class="column-divide">:</td>
         <td>$${tableColumnDatas.sum_pts_refund}</td>
      </tr>
      <tr>
      <td>SALES</td>
      <td class="column-divide">:</td>
      <td>$${tableColumnDatas.sum_pts_sales}</td>
   </tr>
   </table>
   <!-- -->

    `;
}
$("#iv-table_reject tbody").on("click", "td.details-control", function () {
  var tr = $(this).closest("tr"),
    row = rejectManagementTable.row(tr);

  if (row.child.isShown()) {
    tr.next("tr").removeClass("details-row");
    row.child.hide();
    tr.removeClass("shown");
  } else {
    row.child(AccordionOutput(row.data())).show();
    tr.next("tr").addClass("details-row");
    tr.addClass("shown");
    let tableWrapWidth = $("#iv-table_reject_wrapper").innerWidth();
    $("tr.details-row .table-inner-content").css("width", tableWrapWidth);
    $(".table-inner-content").css("left", $(".iv-table-parent").scrollLeft());
    // if drag functionality is required
    //  $(".copy-element").on("click", function () {
    //    let currentText = $(this).text();
    //    $("mark").contents().unwrap();
    //    $(this).html(`<mark>${currentText}</mark>`);
    //    $(this).find("mark").addClass("table-mark");
    //    $("body").append('<input class="clipboard-text">');
    //    $(".clipboard-text").val(currentText).select();
    //    document.execCommand("copy");
    //    $(".clipboard-text").remove();
    //  });
  }
});

let hasHorizontalScrollbar =
  document.querySelector(".iv-table-parent").scrollWidth >
  document.querySelector(".iv-table-parent").clientWidth;
hasHorizontalScrollbar
  ? $(".arrows").addClass("visually-collapse")
  : $(".arrows").addClass("v-hide");

function ResizeWidthAccordion() {
  setTimeout(() => {
    let tableWrapWidth = $("#iv-table_wrapper").innerWidth();
    if (hasHorizontalScrollbar) {
      $("tr.details-row .table-inner-content").css("width", tableWrapWidth);
    } else {
      $(".arrows").addClass("v-hide");
    }
  }, 0);
}
$(window).resize(function () {
  ResizeWidthAccordion();
  let tableWrapWidth = $("#iv-table_reject_wrapper").innerWidth();
  $("tr.details-row .table-inner-content").css("width", tableWrapWidth);
});
ResizeWidthAccordion();

$(".swipe-arrows .arrows").each(function (index, element) {
  let item = $(".iv-table-parent");
  $(element).click(function () {
    if ($(element).hasClass("next-arrow")) {
      $(item).animate({ scrollLeft: "+=145px" }, 300);
      $(".fixedHeader-floating,.fixedHeader-locked").animate(
        { scrollLeft: "+=145px" },
        300
      );
      setTimeout(() => {
        $(".table-inner-content").css("left", $(item).scrollLeft());
      }, 0);
    } else {
      $(item).animate({ scrollLeft: "-=145px" }, 300);
      $(".fixedHeader-floating,.fixedHeader-locked").animate(
        { scrollLeft: "-=145px" },
        300
      );
      setTimeout(() => {
        $(".table-inner-content").css("left", $(item).scrollLeft());
      }, 0);
    }
  });
  $(item).on("scroll", function (e) {
    if ($(this).scrollLeft() === 0) {
      $(".previous-arrow").addClass("disabled");
      $(".table-inner-content").css("left", 0);
    } else {
      $(".previous-arrow").removeClass("disabled");
    }
    let maxScrollLeft = this.scrollWidth - this.clientWidth - 5;
    if ($(this).scrollLeft() >= maxScrollLeft) {
      $(".next-arrow").addClass("disabled");
      $(".table-inner-content").css("left", maxScrollLeft);
    } else {
      $(".next-arrow").removeClass("disabled");
    }
    $(".table-inner-content").css("left", $(this).scrollLeft());
  });
});

$(".burger-icon").on("click", function () {
  if ($("#wrapper:not(.toggled-2)")) {
    setTimeout(() => {
      if ($(".collapsible-table tr").hasClass("shown")) {
        let tableWrapWidth = $("#iv-table_reject_wrapper").width();
        $("tr.details-row .table-inner-content").css("width", tableWrapWidth);
      }
    }, 1000);
  }
});
