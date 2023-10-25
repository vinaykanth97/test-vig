function resetColReorderMD() {
  $($("#process_datatable").DataTable().columns().header()).each(function () {
    var md = $._data($(this)[0]).events.mousedown;
    for (var i = 0, l = md.length; i < l; i++) {
      if (md[i].namespace == "ColReorder") {
        md[i].handler = function () {};
      }
    }
  });
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

let complex_header = Array.from(document.querySelectorAll(".complex_header"));
function getFiltered(node) {
  let result = "";
  complex_header.map((conv) => {
    if (conv.classList.contains(node.classList[0])) {
      result = conv.innerText + " - ";
    }
  });
  return result;
}

var buttonCommon = {
  exportOptions: {
    columns: ":visible",
    format: {
      header: function (data, columnindex, trDOM) {
        if (trDOM.children.length) {
          return getFiltered(trDOM) + trDOM.innerText;
        } else {
          return getFiltered(trDOM) + data;
        }
      },
    },
  },
};

let process_table = $("#process_datatable").DataTable({
  fixedColumns: {
    leftColumns: 1,
  },
  colReorder: true,
  initComplete: function () {
    resetColReorderMD();
  },
  scrollX: false,
  responsive: false,
  autoWidth: false,
  searching: false,
  paging: true,
  bLengthChange: false,
  aaSorting: [],
  dom: "Bfrtip",
  buttons: [
    $.extend(true, {}, buttonCommon, {
      extend: "excelHtml5",
      title: "Processing History Report",
    }),
  ],
  info: true,
  language: {
    paginate: {
      next: nextPagination,
      previous: previousImg,
    },
    lengthMenu: "Display _MENU_ records per page",
    info: `<span>_START_ - _END_</span> of _TOTAL_`,
  },
  drawCallback: function () {
    CalculateScrollableHeight(".overflow-history");
  },
});
$(".processing-history-details").append(
  $("#processing_history .dataTables_info")
);
$(".processing-history-details").append(
  $("#processing_history .dataTables_paginate")
);

$("#processing_history .export_excel_btn").append(
  $("#processing_history .buttons-excel")
);
$("#processing_history .buttons-excel")
  .addClass("btn iconic-button excel-export")
  .html(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d = "M11,3a1.333,1.333,0,0,0-.267.029h0L4.086,4.357h0A1.333,1.333,0,0,0,3,5.667V16.333a1.333,1.333,0,0,0,1.086,1.31l6.646,1.329a1.333,1.333,0,0,0,1.6-1.306V4.333A1.333,1.333,0,0,0,11,3Zm2.667,1.333v2H15V7.667H13.667V9H15v1.333H13.667v1.333H15V13H13.667v1.333H15v1.333H13.667v2h4A1.333,1.333,0,0,0,19,16.333V5.667a1.333,1.333,0,0,0-1.333-1.333Zm2.667,2H17a.667.667,0,0,1,0,1.333h-.667ZM5.124,7.667h1.6L7.555,9.66a3.914,3.914,0,0,1,.173.565H7.75a5.943,5.943,0,0,1,.18-.581l.927-1.978h1.458l-1.742,3.3,1.794,3.362H8.811l-1-2.172a1.869,1.869,0,0,1-.12-.445H7.674c-.023.1-.067.258-.135.464L6.53,14.333H4.966L6.822,11ZM16.333,9H17a.667.667,0,0,1,0,1.333h-.667Zm0,2.667H17A.667.667,0,0,1,17,13h-.667Zm0,2.667H17a.667.667,0,0,1,0,1.333h-.667Z" transform = "translate(-3 -3)" fill = "#666" ></path></svg>'
  );

$("#batch_datatable").DataTable({
  scrollX: false,
  responsive: false,
  autoWidth: false,
  searching: false,
  paging: true,
  bLengthChange: false,
  aaSorting: [],
  dom: "Bfrtip",
  buttons: [
    $.extend(true, {}, buttonCommon, {
      extend: "excelHtml5",
      title: "Batch Data Report",
    }),
  ],
  info: true,
  language: {
    paginate: {
      next: nextPagination,
      previous: previousImg,
    },
    lengthMenu: "Display _MENU_ records per page",
    info: `<span>_START_ - _END_</span> of _TOTAL_`,
  },
  drawCallback: function () {
    CalculateScrollableHeight(".overflow-batch-data");
  },
});
$(".batch-data-details").append($(".batch_related .dataTables_info"));
$(".batch-data-details").append($(".batch_related .dataTables_paginate"));

$("#batch_table .export_excel_btn").append($("#batch_table .buttons-excel"));
$("#batch_table .buttons-excel")
  .addClass("btn iconic-button excel-export")
  .html(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d = "M11,3a1.333,1.333,0,0,0-.267.029h0L4.086,4.357h0A1.333,1.333,0,0,0,3,5.667V16.333a1.333,1.333,0,0,0,1.086,1.31l6.646,1.329a1.333,1.333,0,0,0,1.6-1.306V4.333A1.333,1.333,0,0,0,11,3Zm2.667,1.333v2H15V7.667H13.667V9H15v1.333H13.667v1.333H15V13H13.667v1.333H15v1.333H13.667v2h4A1.333,1.333,0,0,0,19,16.333V5.667a1.333,1.333,0,0,0-1.333-1.333Zm2.667,2H17a.667.667,0,0,1,0,1.333h-.667ZM5.124,7.667h1.6L7.555,9.66a3.914,3.914,0,0,1,.173.565H7.75a5.943,5.943,0,0,1,.18-.581l.927-1.978h1.458l-1.742,3.3,1.794,3.362H8.811l-1-2.172a1.869,1.869,0,0,1-.12-.445H7.674c-.023.1-.067.258-.135.464L6.53,14.333H4.966L6.822,11ZM16.333,9H17a.667.667,0,0,1,0,1.333h-.667Zm0,2.667H17A.667.667,0,0,1,17,13h-.667Zm0,2.667H17a.667.667,0,0,1,0,1.333h-.667Z" transform = "translate(-3 -3)" fill = "#666" ></path></svg>'
  );

$("#related_datatable").DataTable({
  scrollX: false,
  responsive: false,
  autoWidth: false,
  searching: false,
  paging: true,
  bLengthChange: false,
  aaSorting: [],
  dom: "Bfrtip",
  buttons: {
    buttons: [
      {
        extend: "excel",
        title: "Related Alerts Report",
      },
    ],
  },
  colReorder: true,
  info: true,
  language: {
    paginate: {
      next: nextPagination,
      previous: previousImg,
    },
    lengthMenu: "Display _MENU_ records per page",
    info: `<span>_START_ - _END_</span> of _TOTAL_`,
  },
  drawCallback: function () {
    CalculateScrollableHeight(".related-overflow");
  },
});
$(".related-alerts-details").append($(".related-alerts-sec .dataTables_info"));
$(".related-alerts-details").append(
  $(".related-alerts-sec .dataTables_paginate")
);

$("#related_table .export_excel_btn").append(
  $("#related_table .buttons-excel")
);
$("#related_table .buttons-excel")
  .addClass("btn iconic-button excel-export")
  .html(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d = "M11,3a1.333,1.333,0,0,0-.267.029h0L4.086,4.357h0A1.333,1.333,0,0,0,3,5.667V16.333a1.333,1.333,0,0,0,1.086,1.31l6.646,1.329a1.333,1.333,0,0,0,1.6-1.306V4.333A1.333,1.333,0,0,0,11,3Zm2.667,1.333v2H15V7.667H13.667V9H15v1.333H13.667v1.333H15V13H13.667v1.333H15v1.333H13.667v2h4A1.333,1.333,0,0,0,19,16.333V5.667a1.333,1.333,0,0,0-1.333-1.333Zm2.667,2H17a.667.667,0,0,1,0,1.333h-.667ZM5.124,7.667h1.6L7.555,9.66a3.914,3.914,0,0,1,.173.565H7.75a5.943,5.943,0,0,1,.18-.581l.927-1.978h1.458l-1.742,3.3,1.794,3.362H8.811l-1-2.172a1.869,1.869,0,0,1-.12-.445H7.674c-.023.1-.067.258-.135.464L6.53,14.333H4.966L6.822,11ZM16.333,9H17a.667.667,0,0,1,0,1.333h-.667Zm0,2.667H17A.667.667,0,0,1,17,13h-.667Zm0,2.667H17a.667.667,0,0,1,0,1.333h-.667Z" transform = "translate(-3 -3)" fill = "#666" ></path></svg>'
  );

$("#trans_datatable").DataTable({
  scrollX: false,
  responsive: false,
  autoWidth: false,
  searching: false,
  paging: true,
  bLengthChange: false,
  aaSorting: [],
  dom: "Bfrtip",
  buttons: [
    $.extend(true, {}, buttonCommon, {
      extend: "excelHtml5",
      title: "Transaction Report",
    }),
  ],
  info: true,
  language: {
    paginate: {
      next: nextPagination,
      previous: previousImg,
    },
    lengthMenu: "Display _MENU_ records per page",
    info: `<span>_START_ - _END_</span> of _TOTAL_`,
  },
  drawCallback: function () {
    CalculateScrollableHeight(".transaction-overflow");
  },
});
$(".transaction-details-info").append(
  $(".transaction-details-overall .dataTables_info")
);
$(".transaction-details-info").append(
  $(".transaction-details-overall .dataTables_paginate")
);

$("#trans_table .export_excel_btn").append(
  $("#trans_datatable_wrapper .buttons-excel")
);
$("#trans_table .buttons-excel")
  .addClass("btn iconic-button excel-export")
  .html(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d = "M11,3a1.333,1.333,0,0,0-.267.029h0L4.086,4.357h0A1.333,1.333,0,0,0,3,5.667V16.333a1.333,1.333,0,0,0,1.086,1.31l6.646,1.329a1.333,1.333,0,0,0,1.6-1.306V4.333A1.333,1.333,0,0,0,11,3Zm2.667,1.333v2H15V7.667H13.667V9H15v1.333H13.667v1.333H15V13H13.667v1.333H15v1.333H13.667v2h4A1.333,1.333,0,0,0,19,16.333V5.667a1.333,1.333,0,0,0-1.333-1.333Zm2.667,2H17a.667.667,0,0,1,0,1.333h-.667ZM5.124,7.667h1.6L7.555,9.66a3.914,3.914,0,0,1,.173.565H7.75a5.943,5.943,0,0,1,.18-.581l.927-1.978h1.458l-1.742,3.3,1.794,3.362H8.811l-1-2.172a1.869,1.869,0,0,1-.12-.445H7.674c-.023.1-.067.258-.135.464L6.53,14.333H4.966L6.822,11ZM16.333,9H17a.667.667,0,0,1,0,1.333h-.667Zm0,2.667H17A.667.667,0,0,1,17,13h-.667Zm0,2.667H17a.667.667,0,0,1,0,1.333h-.667Z" transform = "translate(-3 -3)" fill = "#666" ></path></svg>'
  );

$("#auth_datatable").DataTable({
  scrollX: false,
  responsive: false,
  autoWidth: false,
  searching: false,
  paging: true,
  bLengthChange: false,
  aaSorting: [],
  dom: "Bfrtip",
  buttons: [
    $.extend(true, {}, buttonCommon, {
      extend: "excelHtml5",
      title: "Authorization Report",
    }),
  ],
  info: true,
  language: {
    paginate: {
      next: nextPagination,
      previous: previousImg,
    },
    lengthMenu: "Display _MENU_ records per page",
    info: `<span>_START_ - _END_</span> of _TOTAL_`,
  },
  drawCallback: function () {
    CalculateScrollableHeight(".authorization-overflow");
  },
});
$(".authorization-details").append(
  $(".authorization-detail-overall .dataTables_info")
);
$(".authorization-details").append(
  $(".authorization-detail-overall .dataTables_paginate")
);

$("#auth_table .export_excel_btn").append(
  $("#auth_datatable_wrapper .buttons-excel")
);
$("#auth_table .buttons-excel")
  .addClass("btn iconic-button excel-export")
  .html(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d = "M11,3a1.333,1.333,0,0,0-.267.029h0L4.086,4.357h0A1.333,1.333,0,0,0,3,5.667V16.333a1.333,1.333,0,0,0,1.086,1.31l6.646,1.329a1.333,1.333,0,0,0,1.6-1.306V4.333A1.333,1.333,0,0,0,11,3Zm2.667,1.333v2H15V7.667H13.667V9H15v1.333H13.667v1.333H15V13H13.667v1.333H15v1.333H13.667v2h4A1.333,1.333,0,0,0,19,16.333V5.667a1.333,1.333,0,0,0-1.333-1.333Zm2.667,2H17a.667.667,0,0,1,0,1.333h-.667ZM5.124,7.667h1.6L7.555,9.66a3.914,3.914,0,0,1,.173.565H7.75a5.943,5.943,0,0,1,.18-.581l.927-1.978h1.458l-1.742,3.3,1.794,3.362H8.811l-1-2.172a1.869,1.869,0,0,1-.12-.445H7.674c-.023.1-.067.258-.135.464L6.53,14.333H4.966L6.822,11ZM16.333,9H17a.667.667,0,0,1,0,1.333h-.667Zm0,2.667H17A.667.667,0,0,1,17,13h-.667Zm0,2.667H17a.667.667,0,0,1,0,1.333h-.667Z" transform = "translate(-3 -3)" fill = "#666" ></path></svg>'
  );

// Popup Customise Dropdown starts
$(".popup_dropdown button").click(function (e) {
  e.stopPropagation();
  $(".popup_dropdown_menu").toggleClass("show");
});
$(document).on("click", function (e) {
  $(".popup_dropdown_menu").removeClass("show");
});
$(".popup_dropdown_menu").on("click", function (e) {
  e.stopPropagation();
});
let allColumnsVar = Array.from(
  document.querySelectorAll(`.sortable-columns-customs th.sorting`)
);
let filteredAllColumnsVar = allColumnsVar.map((element, index) => {
  let getControl = $(element).data("column-index");
  return getControl;
});
let commonPartials = Array.from(
  document.querySelectorAll(`.sortable-columns-customs th.partial-column`)
);
let commonPartialsArray = commonPartials.map((element) => {
  let getControl = $(element).data("column-index");
  return {
    columnIndex: getControl,
    thElement: element,
  };
});

$(".select_all").click(function () {
  if (this.checked) {
    $(".custom_column").prop("checked", true);
    $(".clear_all").prop("checked", false);
    let column = process_table.columns(filteredAllColumnsVar);
    column.visible(true);
    HidePartials();
  }
});

$(".clear_all").click(function () {
  if (this.checked) {
    $(".custom_column,.select_all").prop("checked", false);
  }
});

$(".custom_column").click(function () {
  if ($(".custom_column:checked").length === $(".custom_column").length) {
    $(".select_all").prop("checked", true);
    $(".clear_all").prop("checked", false);
  } else {
    $(".select_all,.clear_all").prop("checked", false);
    if ($(".custom_column:checked").length === 0) {
      $(".clear_all").prop("checked", true);
    }
  }

  let getId = $(this).data("id");
  let ColumnsVar = Array.from(
    document.querySelectorAll(`.sortable-columns-customs th.${getId.trim()}`)
  );

  let filteredColumns = ColumnsVar.map((element, index) => {
    let getControl = $(element).data("column-index");
    return getControl;
  });
  document
    .querySelectorAll(`.sortable-columns-customs th.${getId.trim()}`)
    .forEach((element, index) => {
      $(this).attr("data-arr", filteredColumns);
    });
  let getArray = $(this).data("arr");
  let column = process_table.columns([getArray]);
  column.visible(!column.visible()[0]);
});

// Expand and collapse Column

function HidePartials() {
  commonPartialsArray.forEach((commonPar) => {
    let columnProcess = process_table.columns(commonPar.columnIndex);
    columnProcess.visible(!columnProcess.visible()[0]);
  });
}

HidePartials();

$(document).on("click", ".collapse-column", function () {
  let dataArray = $(this).data("array");
  let dataTriggerPoint = $(this).data("trigger");
  $(`.collapse-column[data-trigger=${dataTriggerPoint}]`).remove();
  let column = process_table.columns(dataArray);
  column.visible(!column.visible()[0]);
  $(`.collapse-column[data-trigger=${dataTriggerPoint}]`).addClass("d-none");

  setTimeout(() => {
    if (
      !$(`.collapse-column[data-trigger=${dataTriggerPoint}]`).hasClass(
        "d-none"
      )
    ) {
      $(`.expand-column[data-trigger=${dataTriggerPoint}]`).removeClass(
        "d-none"
      );
    }
  }, 0);
});

$(".expand-column").on("click", function () {
  let dataTriggerPoint = $(this).data("trigger");
  let dataColor = $(this).data("color");
  let filteredpartials = commonPartialsArray.filter((commonPar) => {
    if (commonPar.thElement.classList.contains(dataTriggerPoint)) {
      return commonPar.columnIndex;
    }
  });
  let filteredParArray = filteredpartials.map((filterPar) => {
    return filterPar.columnIndex;
  });
  let lastParArray = filteredParArray.slice(-1).pop();
  let lastparAttachment = `<span class="collapse-column stretch-control d-none" data-trigger="${dataTriggerPoint}">
    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
      <g id="Group_10296" data-name="Group 10296" transform="translate(9265 16702)">
        <rect id="Rectangle_3566" data-name="Rectangle 3566" width="37" height="37" rx="18.5"
          transform="translate(-9265 -16702)" fill="#0e0e0e" />
        <g id="unfold_less_black_24dp" transform="translate(-9234 -16695) rotate(90)">
          <path id="Path_26532" data-name="Path 26532" d="M24,0V24H0V0Z" fill="none"
            opacity="0.87" />
          <path id="Path_26533" data-name="Path 26533"
            d="M7.41,18.59,8.83,20,12,16.83,15.17,20l1.41-1.41L12,14ZM16.59,5.41,15.17,4,12,7.17,8.83,4,7.41,5.41,12,10Z"
            fill="${dataColor}" />
        </g>
      </g>
    </svg>
  </span>
  `;
  commonPartialsArray.forEach((commPar) => {
    if (commPar.columnIndex === lastParArray) {
      commPar.thElement.innerHTML += lastparAttachment;
    }
  });

  setTimeout(() => {
    $(`.collapse-column[data-trigger=${dataTriggerPoint}]`).attr(
      "data-array",
      `[${filteredParArray}]`
    );
  }, 0);

  let column = process_table.columns(filteredParArray);
  column.visible(true);
  $(this).addClass("d-none");
  setTimeout(() => {
    if ($(this).hasClass("d-none")) {
      $(`.collapse-column[data-trigger=${dataTriggerPoint}]`).removeClass(
        "d-none"
      );
    }
  }, 0);
});

let summaryHeight;
function SetPosition() {
  summaryHeight = $(".popup-sticky-overall").outerHeight();
  $(".popup_tab").css("top", summaryHeight);
}
SetPosition();
// Popup Collapse
function AdjustToggle() {
  $(".popup_toggle").click(function () {
    if ($(this).is(":checked")) {
      $(this).siblings("span").text("COLLAPSED");
      $(".popup_subcontainer").addClass("adjust-height");
      $(".overlay").removeClass("d-none");
      summaryHeight = $(".popup-sticky-overall").outerHeight();
      $(".popup_tab").css("top", summaryHeight);
    } else {
      $(this).siblings("span").text("COLLAPSE");
      $(".popup_subcontainer").removeClass("adjust-height");
      $(".overlay").addClass("d-none");
      summaryHeight = $(".popup-sticky-overall").outerHeight();
      $(".popup_tab").css("top", summaryHeight);
    }
  });
}
AdjustToggle();

// ScrollSpy
function DetectScroll() {
  $("#popup_tab .nav-link").on("click", function () {
    let destination = $(this).data("target").trim();
    $("#popup_tab .nav-link").removeClass("active");
    $(this).addClass("active");
    let destinationTop =
      $("#" + destination).offset().top -
      $(".popup_tab").outerHeight() -
      summaryHeight;
    window.scrollTo(0, destinationTop);
  });

  $(window).on("scroll", function () {
    let currentTop = window.pageYOffset;
    $(".popup_scrollspy_cnt").each(function (index, element) {
      let contTop =
        $(element).offset().top -
        $(".popup_tab").outerHeight() -
        summaryHeight -
        20;
      let contBottom = contTop + $(element).height();
      if (currentTop >= contTop && currentTop <= contBottom) {
        $("#popup_tab .nav-link").removeClass("active");
        $("#popup_tab .nav-link").eq(index).addClass("active");
      }
    });
  });
}
DetectScroll();

$(window).on("resize", function () {
  SetPosition();
  AdjustToggle();
  DetectScroll();
  CalculateScrollableHeight("#processing_history .process_overflow");
  CalculateScrollableHeight("#batch_table .process_overflow");
  CalculateScrollableHeight("#related_table .process_overflow");
  CalculateScrollableHeight("#authorization_details .process_overflow");
  CalculateScrollableHeight("#auth_table .process_overflow");
});

bindDragScroll($("#process_datatable_wrapper"), $(".overflow-history"));
bindDragScroll($("#batch_datatable_wrapper"), $(".overflow-batch-data"));
bindDragScroll($("#related_datatable_wrapper"), $(".related-overflow"));
bindDragScroll($("#trans_datatable_wrapper"), $(".transaction-overflow"));
bindDragScroll($("#auth_datatable_wrapper"), $(".authorization-overflow"));

function CalculateScrollableHeight(sel) {
  let tableHeight = $(sel).height();
  if (tableHeight > 300) {
    $(sel).css("height", tableHeight / 1.3);
  } else {
    $(sel).css("height", "auto");
  }
}
