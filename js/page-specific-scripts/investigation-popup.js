
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

// detail popup width and height attributes
let widthPop = '707px';
let HeightPop = '520px';
let Heightemail = '631px';

if ($(".view-notes-popup, .view-notes-detail").length > 0 || $(".overview-popup").length > 0) {
    // view notes datatables
    $(".viewnotes_datatable").DataTable({
        responsive: false,
        searching: false,
        paging: true,
        pageLength: 15,
        aaSorting: [],
        pageLength: 5,
        bLengthChange: false,
        columnDefs: [{
            orderable: false,
            targets: [0],
        }],
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
            infoEmpty: "0 to 0 of 0"
        },
        dom: "Bfrtip",
        buttons: {
            buttons: [
                {
                    extend: "excel",
                    title: "Notes Report",
                },
            ],
        },
    });

    // View notes detail popup
    $(".view-notes .viewnotes_datatable tbody td").on("click", function () {
        window.open('./view-notes-detail.html', 'viewNotesdetail', `height=${HeightPop},width=${widthPop},left=0,top=0,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no`);
    })
}

if ($(".view-email-popup, .view-email-detail").length > 0 || $(".overview-popup").length > 0) {
    // view email datatables
    $(".viewemail_datatable").DataTable({
        responsive: false,
        searching: false,
        paging: true,
        pageLength: 15,
        aaSorting: [],
        pageLength: 5,
        bLengthChange: false,
        columnDefs: [{
            orderable: false,
            targets: [0, 1, 2, 5],
        }],
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
            infoEmpty: "0 to 0 of 0"
        },
        dom: "Bfrtip",
        buttons: {
            buttons: [
                {
                    extend: "excel",
                    title: "Emails Report",
                },
            ],
        },
    });

    // View email detail popup
    $(".view-email .viewemail_datatable tbody td").on("click", function () {
        window.open('./view-email-detail.html', 'viewEmaildetail', `height=${Heightemail},width=${widthPop},left=0,top=0,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no`);
    })
}

if ($(".attach-popup").length > 0 || $(".overview-popup").length > 0) {
    // attachments datatables
    $(".attach_datatable").DataTable({
        responsive: false,
        searching: false,
        paging: true,
        pageLength: 15,
        aaSorting: [],
        pageLength: 5,
        bLengthChange: false,
        columnDefs: [{
            orderable: false,
            targets: [0, 1],
        }],
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
            infoEmpty: "0 to 0 of 0"
        },
        dom: "Bfrtip",
        buttons: {
            buttons: [
                {
                    extend: "excel",
                    title: "Attachment Report",
                },
            ],
        },
    });

    // attachments datatables in overview tab
    $(".overview-table .attach-datatable").DataTable({
        responsive: false,
        searching: false,
        paging: true,
        pageLength: 15,
        aaSorting: [],
        pageLength: 5,
        bLengthChange: false,
        columnDefs: [{
            orderable: false,
            targets: [0],
        }],
    });
}

if ($(".audit-popup").length > 0 || $(".overview-popup").length > 0) {
    // audit datatables
    $(".audit_datatable").DataTable({
        responsive: false,
        searching: false,
        paging: true,
        pageLength: 15,
        aaSorting: [],
        pageLength: 5,
        bLengthChange: false,
        columnDefs: [{
            orderable: false,
            targets: [0],
        }],
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
            infoEmpty: "0 to 0 of 0"
        },
        dom: "Bfrtip",
        buttons: {
            buttons: [
                {
                    extend: "excel",
                    title: "Audit Report",
                },
            ],
        },
    });
}

$(".pagination-provision").append($(".dataTables_info"));
$(".pagination-provision").append($(".dataTables_paginate"));

// excel export
$(".export_excel_btn").append($(".buttons-excel"));
$(".buttons-excel").addClass("btn iconic-button excel-export")
    .html(
        '<svg id="Component_332_17" data-name="Component 332 – 17" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect id="Rectangle_3813" data-name="Rectangle 3813" width="32" height="32" rx="2" fill="#ffefe5" opacity="0.002"></rect><path id="icons8-microsoft-excel_2_" data-name="icons8-microsoft-excel (2)" d="M16.789,4.042a2.054,2.054,0,0,0-.477.039L7.175,5.908A2.715,2.715,0,0,0,5,8.561V23.521a2.715,2.715,0,0,0,2.175,2.653L16.312,28a2.1,2.1,0,0,0,2.441-1.739H24.54a3.321,3.321,0,0,0,3.307-3.307V9.728A3.321,3.321,0,0,0,24.54,6.421H18.829V6.144A2.129,2.129,0,0,0,16.789,4.042Zm-.123,1.807a.284.284,0,0,1,.359.295V25.938a.284.284,0,0,1-.359.295h0L7.529,24.4h0a.891.891,0,0,1-.725-.883V8.561a.893.893,0,0,1,.726-.884Zm2.163,2.376H24.54a1.49,1.49,0,0,1,1.5,1.5V22.955a1.49,1.49,0,0,1-1.5,1.5H18.829Zm2.1,2.4a.9.9,0,1,0,0,1.8h2.4a.9.9,0,1,0,0-1.8Zm-11.124,1.3a.9.9,0,0,0-.784,1.386l1.8,2.823-1.8,2.823a.9.9,0,0,0,1.522.969l1.343-2.111,1.343,2.11a.9.9,0,0,0,.762.418.889.889,0,0,0,.483-.141.9.9,0,0,0,.277-1.246l-1.8-2.822,1.8-2.822a.9.9,0,1,0-1.522-.969l-1.343,2.11-1.343-2.111A.9.9,0,0,0,9.809,11.928ZM20.933,15.44a.9.9,0,1,0,0,1.8h2.4a.9.9,0,1,0,0-1.8Zm0,4.81a.9.9,0,1,0,0,1.8h2.4a.9.9,0,1,0,0-1.8Z" transform="translate(-0.5 0.459)" fill="#666" stroke="#eeeef0" stroke-width="0.8"></path></svg>'
    );

if ($(".tags-popup").length > 0) {
    $(".untag, .tagged").sortable({
        connectWith: ".popup-detail-body",
        stack: '.popup-detail-body'
    }).disableSelection();
}

if ($(".change-step-popup").length > 0) {
    // change step dropdown select
    $(".queue-list li").click(function (e) {
        categoryIndex = 0;
        dropdownValue = $(this).children("a").html().trim().toUpperCase();
        $(this).closest('.queue-list').find('.btn').text(dropdownValue)
    });
}

