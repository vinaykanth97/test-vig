/* Common and reusable scripts starts */
$("#menu-toggle-2").on("click", function (e) {
  $("#wrapper").toggleClass("toggled-2");
});

// Dropdown Text append
function DropDown(grandElement) {
  $(document).on("click", `${grandElement} .dropdown-menu a`, function () {
    let getText = $(this).text();
    $(this).parents(".dropdown").find(".btn").text(getText);
    $(`${grandElement} .dropdown-menu a`).parent().removeClass("active");
    $(this).parent().addClass("active");
  });
}

// Investigation Tabs
function detailPagetab(tab) {
  $(`${tab} li a`).on("click", function () {
    $(`${tab} li a`).removeClass("active");
    $(this).addClass("active");
    $(".detail_tab_content").hide();
    $('.detail_tab_content[id="' + $(this).attr("data-id") + '"]').show();
    window.scrollTo(0, 0);
  });
}

// Copy Text functionality for draggable table
function CopyClipBoard(element) {
  setTimeout(() => {
    $(element).on("click", function (e) {
      let currentText = $(this).text();
      if ($(this).children().length === 0) {
        $("mark").contents().unwrap();
        $(this).html(`<mark>${currentText}</mark>`);
        $(this).find("mark").addClass("table-mark");
      }
      $("body").append('<input class="clipboard-text">');
      $(".clipboard-text").val(currentText).select();
      document.execCommand("copy");
      $(".clipboard-text").remove();
    });
  }, 0);
}

let modifiedHeight;
function ToggleSwitchButton() {
  $("#switch_toggle").click(function () {
    if ($(this).is(":checked")) {
      $(".detail_card_main").addClass("toggle_collapse");
      $(this).siblings("span").text("COLLAPSED");
    } else {
      $(".detail_card_main").removeClass("toggle_collapse");
      $(this).siblings("span").text("COLLAPSE");
    }
    modifiedHeight = $(".sticky-informations").outerHeight();
    $(".spy-detect-content").css("top", modifiedHeight);
  });
}

// Sticky Info Scroll
let stickyHeight;
let headerHeight = $("header").height();
function ScrollSetup() {
  stickyHeight = $(".sticky-informations").outerHeight() + headerHeight;
  $(".spy-detect-content").css("top", stickyHeight);
}

// Scroll Spy
function ScrollToLocation(grandSelector) {
  $(`${grandSelector} .nav-link`).click(function () {
    $(`${grandSelector} .nav-link`).removeClass("active");
    $(this).addClass("active");
    let getData = $(this).data("id");
    let scrollPositionElement =
      $("#" + getData).offset().top -
      stickyHeight -
      $(`${grandSelector} .spy-detect-content `).height();
    console.log($("#" + getData).offset().top);
    if (
      $(".detail_card_main").hasClass("toggle_collapse") ||
      $(".reject-extra-details").hasClass("d-none")
    ) {
      scrollPositionElement =
        $("#" + getData).offset().top -
        modifiedHeight -
        $(`${grandSelector} .spy-detect-content`).height() -
        30;
    }

    window.scrollTo(0, scrollPositionElement);
  });
}
function DetectScrollLocation(grandSelector) {
  $(window).on("scroll", function () {
    let currentTop = window.pageYOffset;
    $(`${grandSelector} .content-pos`).each(function (index, element) {
      let contTop =
        $(element).offset().top -
        stickyHeight -
        $(`${grandSelector} .spy-detect-content`).height() -
        $("header").height();
      if (
        $(".detail_card_main").hasClass("toggle_collapse") ||
        $(".reject-extra-details").hasClass("d-none")
      ) {
        contTop =
          $(element).offset().top -
          modifiedHeight -
          $(`${grandSelector} .spy-detect-content`).height() -
          50;
      }
      let contBottom = contTop + $(element).height();
      if (currentTop >= contTop && currentTop <= contBottom) {
        $(`${grandSelector} .spy-detect-content .nav-link`).removeClass(
          "active"
        );
        $(`${grandSelector} .spy-detect-content .nav-link`)
          .eq(index)
          .addClass("active");
      }
    });
  });
}

// Print Page
$(".print-btn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 100);
  setTimeout(function () {
    window.print();
  }, 3000);
  return false;
});

// AutoSearch
function AutoSearch() {
  $(".searchbox")
    .on("input.highlight", function () {
      var searchTerm = $(this).val();
      $(".detail_tab_content").unmark().mark(searchTerm, {
        acrossElements: true,
        separateWordSearch: false,
      });
    })
    .trigger("input.highlight")
    .focus();
}

/* Common and reusable scripts Ends */

// Page Specific scripts
if ($(".overview-page").length > 0) {
  /* Scripts for overview dashboard page starts */
  DropDown(".dbcard");

  // Chart Percentage
  function PercentageCal(max, min, sel, grandSel) {
    let percent = (100 / max) * min;
    $(`${grandSel} ${sel}`).css("height", percent + "%");
    if (percent > 75) {
      $(`${grandSel} .orange_chart,${grandSel} .blue_chart`)
        .siblings(".tooltip_main")
        .children(".tooltip_left")
        .removeClass("tooltip_left")
        .addClass("tooltip_top");
    }

    $(`${grandSel} ${sel} .tooltip_txt h3`).html(`<sup>$</sup>${min}`);
  }
  PercentageCal(57399, 9399, ".orange_chart", ".iv-queue-cht-1");
  PercentageCal(57399, 48000, ".blue_chart", ".iv-queue-cht-1");
  PercentageCal(57399, 50000, ".orange_chart", ".iv-queue-cht-2");
  PercentageCal(57399, 30000, ".blue_chart", ".iv-queue-cht-2");
  PercentageCal(57399, 48000, ".orange_chart", ".rj-queue-cht-1");
  PercentageCal(57399, 48000, ".blue_chart", ".rj-queue-cht-1");
  PercentageCal(57399, 56000, ".orange_chart", ".rj-queue-cht-2");
  PercentageCal(57399, 28000, ".blue_chart", ".rj-queue-cht-2");
  $(".custom_chart_fund").on("mouseenter", function () {
    $(this).css("zIndex", 22);
  });
  $(".custom_chart_fund").on("mouseleave", function () {
    $(this).css("zIndex", "");
  });
  /* Scripts for overview dashboard page Ends */
}

if ($(".investigation-queue-page").length > 0) {
  /* Investigation Queue Page Script Starts */
  DropDown(".left-opt");
  // Add and remove active on Click
  $(".queue-list .dropdown-menu li a").on("click", function () {
    if ($(this).parent() !== $(`.queue-list .dropdown-menu a`).parent()) {
      $(".queue-list .dropdown-menu a").parent().removeClass("active");
    }
    $(this).parent().addClass("active");
  });

  // filter select box actions
  $(".queue-list").on("mouseenter", function () {
    $(this).find(".btn").text("Select");
  });
  $(".queue-list").on("mouseleave", function () {
    let listAnchor = $(".queue-list .dropdown-menu li.active a").text();
    $(this).find(".btn").text(listAnchor);
  });
  // CopyClipBoard(".collapsible-table td");
  DropDown(".activity-history");
  // bindDragScroll($(".table-wrap"), $(".iv-table-parent"));
  /* Investigation Queue Page Script Ends */

}

if ($(".investigation-queue-page-inner").length > 0) {
  /* Scripts for investigation queue inner page starts */

  detailPagetab(".detail-tab", "");

  ToggleSwitchButton();

  DropDown(".left-opt");

  // Auto Search
  AutoSearch();
  // Scroll Spy Initialisation
  ScrollSetup();
  $(window).on("scroll", function (e) {
    ScrollSetup();
  });

  ScrollToLocation("#merchant-profile");
  ScrollToLocation("#financials");
  DetectScrollLocation("#merchant-profile");
  DetectScrollLocation("#financials");
  bindDragScroll($(".table-wrap"), $(".detail_card_main"));
  $(window).on("resize", function () {
    DetectScrollLocation("#merchant-profile");
    DetectScrollLocation("#financials");
  });
  /* Scripts for investigation queue inner page Ends */
}

if ($(".reject-management-queue").length > 0) {
  /* Scripts for Reject Management queue page starts */
  DropDown(".left-opt");
  // filter select box actions
  $(".queue-list").on("mouseenter", function () {
    $(this).find(".btn").text("Select");
  });
  $(".queue-list").on("mouseleave", function () {
    let listAnchor = $(".queue-list .dropdown-menu li.active a").text();
    $(this).find(".btn").text(listAnchor);
  });
  // bindDragScroll($(".container"), $(".iv-table-parent"));
  // CopyClipBoard(".collapsible-table td");
  /* Scripts for Reject Management queue Ends starts */
}
if ($(".reject-management-queue-detail").length > 0) {
  /* Scripts for investigation queue inner page starts */
  detailPagetab(".detail-tab");
  DropDown(".left-opt");
  AutoSearch();

  $("#switch_toggle").click(function () {
    if ($(this).is(":checked")) {
      $(this).siblings("span").text("COLLAPSED");
      $(".reject-extra-details").addClass("d-none");
      $(".detail_card_main").addClass("mb-4").removeClass("mb-2");
    } else {
      $(this).siblings("span").text("COLLAPSE");
      $(".reject-extra-details").removeClass("d-none");
      $(".detail_card_main").eq(0).addClass("mb-2").removeClass("mb-4");
      // $('.reject-extra-details').removeClass('mb-2')
      // $('.reject-extra-details').removeClass('mb-4')
    }
    modifiedHeight = $(".sticky-informations").outerHeight();
    $(".spy-detect-content").css("top", modifiedHeight);
  });
  ScrollSetup();
  $(window).on("scroll", function (e) {
    ScrollSetup();
  });
  // CopyClipBoard(".transaction-datables td");
  ScrollToLocation("#transaction");
  DetectScrollLocation("#transaction");
  bindDragScroll($(".detail_card_main"), $(".detail_card"));
  bindDragScroll(
    $(".funding_exclusion_details"),
    $(".funding_exclusion_details")
  );
  bindDragScroll(
    $("#trans_details_pts .overflow_auto"),
    $("#trans_details_pts .overflow_auto")
  );
  bindDragScroll(
    $("#trans_alert .overflow_auto"),
    $("#trans_alert .overflow_auto")
  );
  /* Scripts for investigation queue inner page Ends */
}

// datatables header checkbox
$("#iv-table,.popup-datatable").on("click", "tbody td.input-select,thead th.input-select", function () {
  if ($(this).closest("tr").hasClass('checked')) {
    $(this).closest("tr").removeClass('checked');
  } else {
    $(this).closest("tr").addClass('checked');
  }

  if ($(this)[0].tagName === 'TH') {
    if ($(this).closest("tr").hasClass('checked')) {
      $(this).closest("table").find('tbody td.input-select').parent().addClass('checked');
    } else {
      $(this).closest("table").find('tbody td.input-select').parent().removeClass('checked');
    }
  } else {
    if ($(this).closest("table").find('tbody tr.checked td.input-select').length === $(this).closest("table").find('tbody tr td.input-select').length) {
      $(this).closest("table").find('thead th.input-select').parent().addClass('checked');
    } else {
      $(this).closest("table").find('thead th.input-select').parent().removeClass('checked');
    }
  }

  if ($(this).closest("table").find('tr.checked').length) {
    $(".investigation-icons").show();
  } else {
    $(".investigation-icons").attr('style', 'display: none !important');
  }
});