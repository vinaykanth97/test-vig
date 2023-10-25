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
    view_notes: `<a href="javascript:openToggler('./view-notes.html','835px','494px','viewNotes');" class="table-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="NOTES"><svg id="viewnotes" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19927 15890)"><rect id="Rectangle_3796" data-name="Rectangle 3796" width="24" height="24" transform="translate(-19927 -15890)" fill="#fff" opacity="0.999"/><g id="Group_11975" data-name="Group 11975" transform="translate(-70 2.217)"><g id="Group_11965" data-name="Group 11965" transform="translate(-19849.699 -15887.217)"><path id="Path_26863" data-name="Path 26863" d="M12.783,12.361H4.976A.977.977,0,0,1,4,11.385V.976A.977.977,0,0,1,4.976,0h6.237a.97.97,0,0,1,.69.286l1.571,1.571a.97.97,0,0,1,.286.69v8.839a.977.977,0,0,1-.976.976M4.976.651a.326.326,0,0,0-.325.325V11.385a.326.326,0,0,0,.325.325h7.807a.326.326,0,0,0,.325-.325V2.546a.322.322,0,0,0-.095-.23L11.442.746a.322.322,0,0,0-.23-.095Z" transform="translate(-2.699)" fill="#333"/><path id="Path_26864" data-name="Path 26864" d="M10.783,14.711H2.976A.977.977,0,0,1,2,13.735V3.325a.325.325,0,1,1,.651,0V13.735a.326.326,0,0,0,.325.325h7.807a.325.325,0,1,1,0,.651" transform="translate(-2 -1.048)" fill="#333"/></g><path id="Path_26865" data-name="Path 26865" d="M8.783,16.711H.976A.977.977,0,0,1,0,15.735V5.325a.325.325,0,1,1,.651,0V15.735a.326.326,0,0,0,.325.325H8.783a.325.325,0,1,1,0,.651" transform="translate(-19851 -15888.964)" fill="#333"/></g></g></svg></a>`,
    email_icon: `<a href="javascript:openToggler('./view-email.html','910px','494px','viewEmail');" class="table-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="EMAILS"><svg id="email" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19824 15890)"><rect id="Rectangle_4431" data-name="Rectangle 4431" width="24" height="24" transform="translate(-19824 -15890)" fill="#fff" opacity="0.999"/><g id="Group_11974" data-name="Group 11974" transform="translate(88.912 -40.58)"><path id="Rectangle_4379" data-name="Rectangle 4379" d="M.742-.5H15.668A1.244,1.244,0,0,1,16.911.742V9.828a1.244,1.244,0,0,1-1.242,1.242H.742A1.244,1.244,0,0,1-.5,9.828V.742A1.244,1.244,0,0,1,.742-.5ZM15.668,10.45a.622.622,0,0,0,.621-.621V.742a.622.622,0,0,0-.621-.621H.742A.622.622,0,0,0,.121.742V9.828a.622.622,0,0,0,.621.621Z" transform="translate(-19909.412 -15842.92)" fill="#333"/><path id="Path_26861" data-name="Path 26861" d="M9.515,8.636a.31.31,0,0,1-.169-.05l-6.2-4.015a.311.311,0,0,1,.337-.522L9.515,7.955,15.551,4.05a.311.311,0,0,1,.337.522l-6.2,4.015A.31.31,0,0,1,9.515,8.636Z" transform="translate(-19910.723 -15844.498)" fill="#333"/><path id="Line_2399" data-name="Line 2399" d="M-.189,1.581a.31.31,0,0,1-.27-.157A.311.311,0,0,1-.344,1L2.211-.459a.311.311,0,0,1,.424.116A.311.311,0,0,1,2.52.08L-.035,1.54A.309.309,0,0,1-.189,1.581Z" transform="translate(-19907.223 -15835.986)" fill="#333"/><path id="Line_2400" data-name="Line 2400" d="M2.365,1.581a.309.309,0,0,1-.154-.041L-.344.08A.311.311,0,0,1-.459-.344.311.311,0,0,1-.035-.459L2.52,1a.311.311,0,0,1-.154.58Z" transform="translate(-19897.367 -15835.986)" fill="#333"/></g></g></svg></a>`,
    attach_icon: `<a href="javascript:openToggler('./attachment.html','780px','430px','Attachments');" class="table-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="ATTACHMENT"><svg id="attachment" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19765 15890)"><rect id="Rectangle_4432" data-name="Rectangle 4432" width="24" height="24" transform="translate(-19765 -15890)" fill="#fff" opacity="0.999"/><path id="Path_26866" data-name="Path 26866" d="M15.223,1.223a4.191,4.191,0,0,0-5.919,0L.919,9.607a3.138,3.138,0,0,0,4.438,4.438L13.376,6A1.74,1.74,0,1,0,10.92,3.537L4.98,9.476a.343.343,0,0,0,.485.485l5.944-5.945a1.055,1.055,0,1,1,1.486,1.5L4.872,13.561A2.453,2.453,0,0,1,1.4,10.092L9.789,1.709a3.5,3.5,0,1,1,4.95,4.949L8.8,12.6a.343.343,0,1,0,.485.485l5.939-5.94a4.189,4.189,0,0,0,0-5.918" transform="translate(-19761 -15885)" fill="#333"/></g></svg></a>`,
    item_id: "133ITEM12",
    tag_icons: '<div class="d-flex flex-wrap justify-content-center tag_icons_list"><a class="table-icon flex_icon" data-bs-toggle="tooltip" data-bs-placement="top" title="NEEDS ACTION"><svg id="need-action" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19152 23089)"><rect id="Rectangle_3796" data-name="Rectangle 3796" width="24" height="24" transform="translate(-19152 -23089)" fill="#fff" opacity="0.998"/><g id="Group_11311" data-name="Group 11311" transform="translate(-5.5 17.9)"><path id="Path_26711" data-name="Path 26711" d="M2.031,9.9a.394.394,0,0,1-.281-.117,5.7,5.7,0,0,1,0-8.022,5.6,5.6,0,0,1,7.964,0,5.709,5.709,0,0,1,0,8.022.4.4,0,0,1-.562,0,.4.4,0,0,1,0-.566,4.9,4.9,0,0,0,0-6.891,4.81,4.81,0,0,0-6.841,0,4.9,4.9,0,0,0,0,6.891.4.4,0,0,1,0,.566A.394.394,0,0,1,2.031,9.9Z" transform="translate(-19141 -23104)" fill="#333"/><path id="Path_26712" data-name="Path 26712" d="M3.6,20.2a.4.4,0,0,1-.306-.144L.451,16.6a1.54,1.54,0,0,1,.2-2.154,1.516,1.516,0,0,1,2.14.2L3.84,15.922V9.63a1.519,1.519,0,1,1,3.039,0v4.5H8.726a3.353,3.353,0,0,1,2.4,1,3.4,3.4,0,0,1,.993,2.413V19.8a.4.4,0,1,1-.794,0v-2.26a2.6,2.6,0,0,0-.76-1.847,2.566,2.566,0,0,0-1.835-.766H6.482a.4.4,0,0,1-.4-.4V9.63a.725.725,0,1,0-1.45,0v7.4a.4.4,0,0,1-.262.376.4.4,0,0,1-.441-.121L2.177,15.158a.724.724,0,0,0-1.021-.095.735.735,0,0,0-.093,1.028L3.91,19.543a.4.4,0,0,1-.052.563A.394.394,0,0,1,3.6,20.2Z" transform="translate(-19141 -23106.1)" fill="#333"/></g></g></svg></a> <a class="table-icon flex_icon" data-bs-toggle="tooltip" data-bs-placement="top" title="ESCALATION"><svg id="escalation" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19124 23089)"><rect id="Rectangle_3796" data-name="Rectangle 3796" width="24" height="24" transform="translate(-19124 -23089)" fill="#fff"/><g id="Group_11312" data-name="Group 11312" transform="translate(2.398 7)"><path id="Path_26622" data-name="Path 26622" d="M18.391,22.784h-18a.391.391,0,1,1,0-.783h18a.391.391,0,1,1,0,.783" transform="translate(-19123.398 -23097.783)" fill="#333"/><path id="Path_26623" data-name="Path 26623" d="M3.735,21.7a.391.391,0,0,1-.391-.391V17.784H1.779v3.522a.391.391,0,0,1-.783,0V17.784A.783.783,0,0,1,1.779,17H3.344a.783.783,0,0,1,.783.783v3.522a.391.391,0,0,1-.391.391" transform="translate(-19123.615 -23096.697)" fill="#333"/><path id="Path_26624" data-name="Path 26624" d="M9.735,20.609a.391.391,0,0,1-.391-.391V12.784H7.779v7.434a.391.391,0,0,1-.783,0V12.784A.783.783,0,0,1,7.779,12H9.344a.783.783,0,0,1,.783.783v7.434a.391.391,0,0,1-.391.391" transform="translate(-19124.918 -23095.609)" fill="#333"/><path id="Path_26625" data-name="Path 26625" d="M15.735,21.044a.391.391,0,0,1-.391-.391V14.784H13.779v5.869a.391.391,0,0,1-.783,0V14.784A.783.783,0,0,1,13.779,14h1.565a.783.783,0,0,1,.783.783v5.869a.391.391,0,0,1-.391.391" transform="translate(-19126.225 -23096.045)" fill="#333"/><path id="Path_26626" data-name="Path 26626" d="M21.735,19.522a.391.391,0,0,1-.391-.391V7.784H19.779V19.131a.391.391,0,1,1-.783,0V7.784A.783.783,0,0,1,19.779,7h1.565a.783.783,0,0,1,.783.783V19.131a.391.391,0,0,1-.391.391" transform="translate(-19127.529 -23094.521)" fill="#333"/><path id="Path_26627" data-name="Path 26627" d="M2.888,8.609a.391.391,0,0,1-.25-.692L6.666,4.562a1.944,1.944,0,0,1,1.87-.354l2.911.971a1.168,1.168,0,0,0,1.233-.315l4.4-4.739a.391.391,0,0,1,.574.532L13.254,5.4a1.959,1.959,0,0,1-2.054.526l-2.91-.971a1.162,1.162,0,0,0-1.122.212L3.138,8.518a.387.387,0,0,1-.25.091" transform="translate(-19123.939 -23093)" fill="#333"/><path id="Path_26628" data-name="Path 26628" d="M20.522,3.914a.391.391,0,0,1-.391-.391V.784H17.391a.391.391,0,1,1,0-.783h3.13a.391.391,0,0,1,.391.391v3.13a.391.391,0,0,1-.391.391" transform="translate(-19127.096 -23093)" fill="#333"/></g></g></svg></a></div>',
    otlt_id: "82923114431",
    dba_name: "133ITEM13",
    dba_address: "232 W. MARKET ST. GREENSBORO, NC 27401",
    signed_date: "01/09/23",
    inv_start_date: "12/05/22",
    last_inv_update: "12/05/22",
    inv_status: "PENDING SUPPORTING DOCUMENTS",
    funding_impact: "ACTIVE FUNDING HOLD FUND EX- $24,452.22",
    priority: "HIGH RM ASSI.",
    heading: "lorem ipsum",
    heading: "lorem ipsum",
    heading: "lorem ipsum",
    link: "./investigation-queue-detail.html",
    daily_funding: "55,534",
    "30_day_funding": "40,000",
    legal_names: "LL ENTERPRISES",
    assigned_rm: "TUSJ - TIM STAHL",
    phone: "336-255-7733",
    url: "LISOXFANS.COM",
    portfolio: "KEY DIGITAL",
    no_of_otlts: "1",
    signed_vol: "$500,000 / $150",
    review_days: "5",
    last_comms_date: "12/10/21",
    daily_funding: "$55,534",
    day_funding: "$40,000",
    pts_sales: "$5,233",
    pts_refund: "$5,233",
    pts_cumm_refund: "$40,000",
    "133ITEM12": {
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
    view_notes: `<a href="javascript:openToggler('./view-notes.html','835px','494px','viewNotes');" class="table-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="NOTES"><svg id="viewnotes" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19927 15890)"><rect id="Rectangle_3796" data-name="Rectangle 3796" width="24" height="24" transform="translate(-19927 -15890)" fill="#fff" opacity="0.999"/><g id="Group_11975" data-name="Group 11975" transform="translate(-70 2.217)"><g id="Group_11965" data-name="Group 11965" transform="translate(-19849.699 -15887.217)"><path id="Path_26863" data-name="Path 26863" d="M12.783,12.361H4.976A.977.977,0,0,1,4,11.385V.976A.977.977,0,0,1,4.976,0h6.237a.97.97,0,0,1,.69.286l1.571,1.571a.97.97,0,0,1,.286.69v8.839a.977.977,0,0,1-.976.976M4.976.651a.326.326,0,0,0-.325.325V11.385a.326.326,0,0,0,.325.325h7.807a.326.326,0,0,0,.325-.325V2.546a.322.322,0,0,0-.095-.23L11.442.746a.322.322,0,0,0-.23-.095Z" transform="translate(-2.699)" fill="#333"/><path id="Path_26864" data-name="Path 26864" d="M10.783,14.711H2.976A.977.977,0,0,1,2,13.735V3.325a.325.325,0,1,1,.651,0V13.735a.326.326,0,0,0,.325.325h7.807a.325.325,0,1,1,0,.651" transform="translate(-2 -1.048)" fill="#333"/></g><path id="Path_26865" data-name="Path 26865" d="M8.783,16.711H.976A.977.977,0,0,1,0,15.735V5.325a.325.325,0,1,1,.651,0V15.735a.326.326,0,0,0,.325.325H8.783a.325.325,0,1,1,0,.651" transform="translate(-19851 -15888.964)" fill="#333"/></g></g></svg></a>`,
    email_icon: `<a href="javascript:openToggler('./view-email.html','910px','494px','viewEmail');" class="table-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="EMAILS"><svg id="email" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19824 15890)"><rect id="Rectangle_4431" data-name="Rectangle 4431" width="24" height="24" transform="translate(-19824 -15890)" fill="#fff" opacity="0.999"/><g id="Group_11974" data-name="Group 11974" transform="translate(88.912 -40.58)"><path id="Rectangle_4379" data-name="Rectangle 4379" d="M.742-.5H15.668A1.244,1.244,0,0,1,16.911.742V9.828a1.244,1.244,0,0,1-1.242,1.242H.742A1.244,1.244,0,0,1-.5,9.828V.742A1.244,1.244,0,0,1,.742-.5ZM15.668,10.45a.622.622,0,0,0,.621-.621V.742a.622.622,0,0,0-.621-.621H.742A.622.622,0,0,0,.121.742V9.828a.622.622,0,0,0,.621.621Z" transform="translate(-19909.412 -15842.92)" fill="#333"/><path id="Path_26861" data-name="Path 26861" d="M9.515,8.636a.31.31,0,0,1-.169-.05l-6.2-4.015a.311.311,0,0,1,.337-.522L9.515,7.955,15.551,4.05a.311.311,0,0,1,.337.522l-6.2,4.015A.31.31,0,0,1,9.515,8.636Z" transform="translate(-19910.723 -15844.498)" fill="#333"/><path id="Line_2399" data-name="Line 2399" d="M-.189,1.581a.31.31,0,0,1-.27-.157A.311.311,0,0,1-.344,1L2.211-.459a.311.311,0,0,1,.424.116A.311.311,0,0,1,2.52.08L-.035,1.54A.309.309,0,0,1-.189,1.581Z" transform="translate(-19907.223 -15835.986)" fill="#333"/><path id="Line_2400" data-name="Line 2400" d="M2.365,1.581a.309.309,0,0,1-.154-.041L-.344.08A.311.311,0,0,1-.459-.344.311.311,0,0,1-.035-.459L2.52,1a.311.311,0,0,1-.154.58Z" transform="translate(-19897.367 -15835.986)" fill="#333"/></g></g></svg></a>`,
    attach_icon: `<a href="javascript:openToggler('./attachment.html','780px','430px','Attachments');" class="table-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="ATTACHMENT"><svg id="attachment" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19765 15890)"><rect id="Rectangle_4432" data-name="Rectangle 4432" width="24" height="24" transform="translate(-19765 -15890)" fill="#fff" opacity="0.999"/><path id="Path_26866" data-name="Path 26866" d="M15.223,1.223a4.191,4.191,0,0,0-5.919,0L.919,9.607a3.138,3.138,0,0,0,4.438,4.438L13.376,6A1.74,1.74,0,1,0,10.92,3.537L4.98,9.476a.343.343,0,0,0,.485.485l5.944-5.945a1.055,1.055,0,1,1,1.486,1.5L4.872,13.561A2.453,2.453,0,0,1,1.4,10.092L9.789,1.709a3.5,3.5,0,1,1,4.95,4.949L8.8,12.6a.343.343,0,1,0,.485.485l5.939-5.94a4.189,4.189,0,0,0,0-5.918" transform="translate(-19761 -15885)" fill="#333"/></g></svg></a>`,
    item_id: "133HJKL2",
    tag_icons: '<div class="d-flex flex-wrap justify-content-center tag_icons_list"><a class="table-icon flex_icon" data-bs-toggle="tooltip" data-bs-placement="top" title="NEEDS ACTION"><svg id="need-action" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19152 23089)"><rect id="Rectangle_3796" data-name="Rectangle 3796" width="24" height="24" transform="translate(-19152 -23089)" fill="#fff" opacity="0.998"/><g id="Group_11311" data-name="Group 11311" transform="translate(-5.5 17.9)"><path id="Path_26711" data-name="Path 26711" d="M2.031,9.9a.394.394,0,0,1-.281-.117,5.7,5.7,0,0,1,0-8.022,5.6,5.6,0,0,1,7.964,0,5.709,5.709,0,0,1,0,8.022.4.4,0,0,1-.562,0,.4.4,0,0,1,0-.566,4.9,4.9,0,0,0,0-6.891,4.81,4.81,0,0,0-6.841,0,4.9,4.9,0,0,0,0,6.891.4.4,0,0,1,0,.566A.394.394,0,0,1,2.031,9.9Z" transform="translate(-19141 -23104)" fill="#333"/><path id="Path_26712" data-name="Path 26712" d="M3.6,20.2a.4.4,0,0,1-.306-.144L.451,16.6a1.54,1.54,0,0,1,.2-2.154,1.516,1.516,0,0,1,2.14.2L3.84,15.922V9.63a1.519,1.519,0,1,1,3.039,0v4.5H8.726a3.353,3.353,0,0,1,2.4,1,3.4,3.4,0,0,1,.993,2.413V19.8a.4.4,0,1,1-.794,0v-2.26a2.6,2.6,0,0,0-.76-1.847,2.566,2.566,0,0,0-1.835-.766H6.482a.4.4,0,0,1-.4-.4V9.63a.725.725,0,1,0-1.45,0v7.4a.4.4,0,0,1-.262.376.4.4,0,0,1-.441-.121L2.177,15.158a.724.724,0,0,0-1.021-.095.735.735,0,0,0-.093,1.028L3.91,19.543a.4.4,0,0,1-.052.563A.394.394,0,0,1,3.6,20.2Z" transform="translate(-19141 -23106.1)" fill="#333"/></g></g></svg></a> <a class="table-icon flex_icon" data-bs-toggle="tooltip" data-bs-placement="top" title="ESCALATION"><svg id="escalation" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19124 23089)"><rect id="Rectangle_3796" data-name="Rectangle 3796" width="24" height="24" transform="translate(-19124 -23089)" fill="#fff"/><g id="Group_11312" data-name="Group 11312" transform="translate(2.398 7)"><path id="Path_26622" data-name="Path 26622" d="M18.391,22.784h-18a.391.391,0,1,1,0-.783h18a.391.391,0,1,1,0,.783" transform="translate(-19123.398 -23097.783)" fill="#333"/><path id="Path_26623" data-name="Path 26623" d="M3.735,21.7a.391.391,0,0,1-.391-.391V17.784H1.779v3.522a.391.391,0,0,1-.783,0V17.784A.783.783,0,0,1,1.779,17H3.344a.783.783,0,0,1,.783.783v3.522a.391.391,0,0,1-.391.391" transform="translate(-19123.615 -23096.697)" fill="#333"/><path id="Path_26624" data-name="Path 26624" d="M9.735,20.609a.391.391,0,0,1-.391-.391V12.784H7.779v7.434a.391.391,0,0,1-.783,0V12.784A.783.783,0,0,1,7.779,12H9.344a.783.783,0,0,1,.783.783v7.434a.391.391,0,0,1-.391.391" transform="translate(-19124.918 -23095.609)" fill="#333"/><path id="Path_26625" data-name="Path 26625" d="M15.735,21.044a.391.391,0,0,1-.391-.391V14.784H13.779v5.869a.391.391,0,0,1-.783,0V14.784A.783.783,0,0,1,13.779,14h1.565a.783.783,0,0,1,.783.783v5.869a.391.391,0,0,1-.391.391" transform="translate(-19126.225 -23096.045)" fill="#333"/><path id="Path_26626" data-name="Path 26626" d="M21.735,19.522a.391.391,0,0,1-.391-.391V7.784H19.779V19.131a.391.391,0,1,1-.783,0V7.784A.783.783,0,0,1,19.779,7h1.565a.783.783,0,0,1,.783.783V19.131a.391.391,0,0,1-.391.391" transform="translate(-19127.529 -23094.521)" fill="#333"/><path id="Path_26627" data-name="Path 26627" d="M2.888,8.609a.391.391,0,0,1-.25-.692L6.666,4.562a1.944,1.944,0,0,1,1.87-.354l2.911.971a1.168,1.168,0,0,0,1.233-.315l4.4-4.739a.391.391,0,0,1,.574.532L13.254,5.4a1.959,1.959,0,0,1-2.054.526l-2.91-.971a1.162,1.162,0,0,0-1.122.212L3.138,8.518a.387.387,0,0,1-.25.091" transform="translate(-19123.939 -23093)" fill="#333"/><path id="Path_26628" data-name="Path 26628" d="M20.522,3.914a.391.391,0,0,1-.391-.391V.784H17.391a.391.391,0,1,1,0-.783h3.13a.391.391,0,0,1,.391.391v3.13a.391.391,0,0,1-.391.391" transform="translate(-19127.096 -23093)" fill="#333"/></g></g></svg></a> <a class="table-icon flex_icon" data-bs-toggle="tooltip" data-bs-placement="top" title="HIGH RISK"><svg id="high-risk" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19097 23089)"><rect id="Rectangle_3796" data-name="Rectangle 3796" width="24" height="24" transform="translate(-19097 -23089)" fill="#fff" opacity="0.998"/><g id="Group_11313" data-name="Group 11313" transform="translate(-2.645 33.5)"><path id="Path_26659" data-name="Path 26659" d="M9,18a9,9,0,1,1,9-9,9.01,9.01,0,0,1-9,9M9,.75A8.25,8.25,0,1,0,17.25,9,8.259,8.259,0,0,0,9,.75" transform="translate(-19091.355 -23119.5)" fill="#333"/><path id="Path_26660" data-name="Path 26660" d="M11.4,12.053a1.864,1.864,0,0,1-1.327-.55,1.885,1.885,0,0,1-.023-2.629c.6-.6,5.6-3.685,6.172-4.034a.375.375,0,0,1,.515.516c-.349.569-3.429,5.566-4.033,6.166a1.866,1.866,0,0,1-1.306.531m3.86-5.734C13.226,7.59,10.918,9.071,10.588,9.4a1.13,1.13,0,0,0,.018,1.573,1.154,1.154,0,0,0,1.578.014c.328-.327,1.808-2.634,3.078-4.668" transform="translate(-19093.738 -23120.695)" fill="#333"/><path id="Path_26661" data-name="Path 26661" d="M4.5,12.25H3.375a.375.375,0,0,1,0-.75H4.5a.375.375,0,0,1,0,.75" transform="translate(-19092.105 -23122.375)" fill="#333"/><path id="Path_26662" data-name="Path 26662" d="M6.66,7.035a.377.377,0,0,1-.266-.11l-.794-.8a.375.375,0,0,1,.53-.53l.8.794a.375.375,0,0,1-.265.641" transform="translate(-19092.729 -23120.873)" fill="#333"/><path id="Path_26663" data-name="Path 26663" d="M11.875,4.875A.375.375,0,0,1,11.5,4.5V3.375a.375.375,0,0,1,.75,0V4.5a.375.375,0,0,1-.375.375" transform="translate(-19094.23 -23120.25)" fill="#333"/><path id="Path_26664" data-name="Path 26664" d="M20,12.25H18.875a.375.375,0,0,1,0-.75H20a.375.375,0,0,1,0,.75" transform="translate(-19095.98 -23122.375)" fill="#333"/><path id="Path_26665" data-name="Path 26665" d="M16.191,19.2a.369.369,0,0,1-.213-.067,10.624,10.624,0,0,0-6.254-1.884,10.607,10.607,0,0,0-6.269,1.884.375.375,0,1,1-.426-.616A11.337,11.337,0,0,1,9.724,16.5,11.25,11.25,0,0,1,16.4,18.517a.375.375,0,0,1-.214.683" transform="translate(-19092.072 -23123.625)" fill="#333"/></g></g></svg></a> <a class="table-icon flex_icon" data-bs-toggle="tooltip" data-bs-placement="top" title="CRITICAL"><svg id="Critical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19069 23089)"><rect id="Rectangle_3796" data-name="Rectangle 3796" width="24" height="24" transform="translate(-19069 -23089)" fill="#fff"/><g id="Group_11314" data-name="Group 11314" transform="translate(16.112 42.613)"><path id="Rectangle_3727" data-name="Rectangle 3727" d="M1.07,0H11.658a1.071,1.071,0,0,1,1.07,1.07V11.658a1.071,1.071,0,0,1-1.07,1.07H1.07A1.071,1.071,0,0,1,0,11.658V1.07A1.071,1.071,0,0,1,1.07,0ZM11.658,12.015a.357.357,0,0,0,.357-.357V1.07a.357.357,0,0,0-.357-.357H1.07a.357.357,0,0,0-.357.357V11.658a.357.357,0,0,0,.357.357Z" transform="translate(-19082.113 -23119.613) rotate(-45)" fill="#333"/><path id="Line_2065" data-name="Line 2065" d="M-.143,5.62A.357.357,0,0,1-.5,5.264V-.143A.357.357,0,0,1-.143-.5a.357.357,0,0,1,.357.357V5.264A.357.357,0,0,1-.143,5.62Z" transform="translate(-19072.951 -23123.309)" fill="#333"/><path id="Path_26658" data-name="Path 26658" d="M10.916,15.716H10.9a.552.552,0,0,1-.4-.924l0,0a.551.551,0,0,1,.382-.173h.032a.553.553,0,0,1,.536.535.547.547,0,0,1-.529.564Z" transform="translate(-19084.004 -23131.473)" fill="#333"/><path id="Line_2066" data-name="Line 2066" d="M-.136.214H-.143A.357.357,0,0,1-.5-.143.357.357,0,0,1-.143-.5h.007A.357.357,0,0,1,.22-.143.357.357,0,0,1-.136.214Z" transform="translate(-19072.959 -23116.357)" fill="#333"/></g></g></svg></a></div>',
    otlt_id: "82923114432",
    dba_name: "RAJ'S RECORD SHOP",
    dba_address: "232 W. MARKET ST. GREENSBORO, NC 27401",
    signed_date: "22/05/22",
    inv_start_date: "13/05/22",
    last_inv_update: "13/05/22",
    inv_status: "PENDING SUPPORTING DOCUMENTS",
    funding_impact: "ACTIVE FUNDING HOLD FUND EX- $24,452.22",
    priority: "HIGH RM ASSI.",
    heading: "lorem ipsum",
    heading: "lorem ipsum",
    heading: "lorem ipsum",
    link: "./investigation-queue-detail.html",
    daily_funding: "55,531",
    "30_day_funding": "41,000",
    daily_funding: "55,534",
    "30_day_funding": "40,000",
    legal_names: "LL ENTERPRISES",
    assigned_rm: "TUSJ – TIM STAHL",
    phone: "336-255-7733",
    url: "LISOXFANS.COM",
    portfolio: "KEY DIGITAL",
    no_of_otlts: "1",
    signed_vol: "$500,000 / $150",
    review_days: "5",
    last_comms_date: "12/10/21",
    daily_funding: "$55,534",
    day_funding: "$40,000",
    pts_sales: "$5,233",
    pts_refund: "$5,233",
    pts_cumm_refund: "$40,000",
    "133HJKL2": {
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
    view_notes: `<a href="javascript:openToggler('./view-notes.html','835px','494px','viewNotes');" class="table-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="NOTES"><svg id="viewnotes" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19927 15890)"><rect id="Rectangle_3796" data-name="Rectangle 3796" width="24" height="24" transform="translate(-19927 -15890)" fill="#fff" opacity="0.999"/><g id="Group_11975" data-name="Group 11975" transform="translate(-70 2.217)"><g id="Group_11965" data-name="Group 11965" transform="translate(-19849.699 -15887.217)"><path id="Path_26863" data-name="Path 26863" d="M12.783,12.361H4.976A.977.977,0,0,1,4,11.385V.976A.977.977,0,0,1,4.976,0h6.237a.97.97,0,0,1,.69.286l1.571,1.571a.97.97,0,0,1,.286.69v8.839a.977.977,0,0,1-.976.976M4.976.651a.326.326,0,0,0-.325.325V11.385a.326.326,0,0,0,.325.325h7.807a.326.326,0,0,0,.325-.325V2.546a.322.322,0,0,0-.095-.23L11.442.746a.322.322,0,0,0-.23-.095Z" transform="translate(-2.699)" fill="#333"/><path id="Path_26864" data-name="Path 26864" d="M10.783,14.711H2.976A.977.977,0,0,1,2,13.735V3.325a.325.325,0,1,1,.651,0V13.735a.326.326,0,0,0,.325.325h7.807a.325.325,0,1,1,0,.651" transform="translate(-2 -1.048)" fill="#333"/></g><path id="Path_26865" data-name="Path 26865" d="M8.783,16.711H.976A.977.977,0,0,1,0,15.735V5.325a.325.325,0,1,1,.651,0V15.735a.326.326,0,0,0,.325.325H8.783a.325.325,0,1,1,0,.651" transform="translate(-19851 -15888.964)" fill="#333"/></g></g></svg></a>`,
    email_icon: `<a href="javascript:openToggler('./view-email.html','910px','494px','viewEmail');" class="table-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="EMAILS"><svg id="email" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19824 15890)"><rect id="Rectangle_4431" data-name="Rectangle 4431" width="24" height="24" transform="translate(-19824 -15890)" fill="#fff" opacity="0.999"/><g id="Group_11974" data-name="Group 11974" transform="translate(88.912 -40.58)"><path id="Rectangle_4379" data-name="Rectangle 4379" d="M.742-.5H15.668A1.244,1.244,0,0,1,16.911.742V9.828a1.244,1.244,0,0,1-1.242,1.242H.742A1.244,1.244,0,0,1-.5,9.828V.742A1.244,1.244,0,0,1,.742-.5ZM15.668,10.45a.622.622,0,0,0,.621-.621V.742a.622.622,0,0,0-.621-.621H.742A.622.622,0,0,0,.121.742V9.828a.622.622,0,0,0,.621.621Z" transform="translate(-19909.412 -15842.92)" fill="#333"/><path id="Path_26861" data-name="Path 26861" d="M9.515,8.636a.31.31,0,0,1-.169-.05l-6.2-4.015a.311.311,0,0,1,.337-.522L9.515,7.955,15.551,4.05a.311.311,0,0,1,.337.522l-6.2,4.015A.31.31,0,0,1,9.515,8.636Z" transform="translate(-19910.723 -15844.498)" fill="#333"/><path id="Line_2399" data-name="Line 2399" d="M-.189,1.581a.31.31,0,0,1-.27-.157A.311.311,0,0,1-.344,1L2.211-.459a.311.311,0,0,1,.424.116A.311.311,0,0,1,2.52.08L-.035,1.54A.309.309,0,0,1-.189,1.581Z" transform="translate(-19907.223 -15835.986)" fill="#333"/><path id="Line_2400" data-name="Line 2400" d="M2.365,1.581a.309.309,0,0,1-.154-.041L-.344.08A.311.311,0,0,1-.459-.344.311.311,0,0,1-.035-.459L2.52,1a.311.311,0,0,1-.154.58Z" transform="translate(-19897.367 -15835.986)" fill="#333"/></g></g></svg></a>`,
    attach_icon: `<a href="javascript:openToggler('./attachment.html','780px','430px','Attachments');" class="table-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="ATTACHMENT"><svg id="attachment" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19765 15890)"><rect id="Rectangle_4432" data-name="Rectangle 4432" width="24" height="24" transform="translate(-19765 -15890)" fill="#fff" opacity="0.999"/><path id="Path_26866" data-name="Path 26866" d="M15.223,1.223a4.191,4.191,0,0,0-5.919,0L.919,9.607a3.138,3.138,0,0,0,4.438,4.438L13.376,6A1.74,1.74,0,1,0,10.92,3.537L4.98,9.476a.343.343,0,0,0,.485.485l5.944-5.945a1.055,1.055,0,1,1,1.486,1.5L4.872,13.561A2.453,2.453,0,0,1,1.4,10.092L9.789,1.709a3.5,3.5,0,1,1,4.95,4.949L8.8,12.6a.343.343,0,1,0,.485.485l5.939-5.94a4.189,4.189,0,0,0,0-5.918" transform="translate(-19761 -15885)" fill="#333"/></g></svg></a>`,
    item_id: "133ITEM13",
    tag_icons: '<div class="d-flex flex-wrap justify-content-center tag_icons_list"><a class="table-icon flex_icon" data-bs-toggle="tooltip" data-bs-placement="top" title="NEEDS ACTION"><svg id="need-action" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19152 23089)"><rect id="Rectangle_3796" data-name="Rectangle 3796" width="24" height="24" transform="translate(-19152 -23089)" fill="#fff" opacity="0.998"/><g id="Group_11311" data-name="Group 11311" transform="translate(-5.5 17.9)"><path id="Path_26711" data-name="Path 26711" d="M2.031,9.9a.394.394,0,0,1-.281-.117,5.7,5.7,0,0,1,0-8.022,5.6,5.6,0,0,1,7.964,0,5.709,5.709,0,0,1,0,8.022.4.4,0,0,1-.562,0,.4.4,0,0,1,0-.566,4.9,4.9,0,0,0,0-6.891,4.81,4.81,0,0,0-6.841,0,4.9,4.9,0,0,0,0,6.891.4.4,0,0,1,0,.566A.394.394,0,0,1,2.031,9.9Z" transform="translate(-19141 -23104)" fill="#333"/><path id="Path_26712" data-name="Path 26712" d="M3.6,20.2a.4.4,0,0,1-.306-.144L.451,16.6a1.54,1.54,0,0,1,.2-2.154,1.516,1.516,0,0,1,2.14.2L3.84,15.922V9.63a1.519,1.519,0,1,1,3.039,0v4.5H8.726a3.353,3.353,0,0,1,2.4,1,3.4,3.4,0,0,1,.993,2.413V19.8a.4.4,0,1,1-.794,0v-2.26a2.6,2.6,0,0,0-.76-1.847,2.566,2.566,0,0,0-1.835-.766H6.482a.4.4,0,0,1-.4-.4V9.63a.725.725,0,1,0-1.45,0v7.4a.4.4,0,0,1-.262.376.4.4,0,0,1-.441-.121L2.177,15.158a.724.724,0,0,0-1.021-.095.735.735,0,0,0-.093,1.028L3.91,19.543a.4.4,0,0,1-.052.563A.394.394,0,0,1,3.6,20.2Z" transform="translate(-19141 -23106.1)" fill="#333"/></g></g></svg></a> <a class="table-icon flex_icon" data-bs-toggle="tooltip" data-bs-placement="top" title="ESCALATION"><svg id="escalation" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19124 23089)"><rect id="Rectangle_3796" data-name="Rectangle 3796" width="24" height="24" transform="translate(-19124 -23089)" fill="#fff"/><g id="Group_11312" data-name="Group 11312" transform="translate(2.398 7)"><path id="Path_26622" data-name="Path 26622" d="M18.391,22.784h-18a.391.391,0,1,1,0-.783h18a.391.391,0,1,1,0,.783" transform="translate(-19123.398 -23097.783)" fill="#333"/><path id="Path_26623" data-name="Path 26623" d="M3.735,21.7a.391.391,0,0,1-.391-.391V17.784H1.779v3.522a.391.391,0,0,1-.783,0V17.784A.783.783,0,0,1,1.779,17H3.344a.783.783,0,0,1,.783.783v3.522a.391.391,0,0,1-.391.391" transform="translate(-19123.615 -23096.697)" fill="#333"/><path id="Path_26624" data-name="Path 26624" d="M9.735,20.609a.391.391,0,0,1-.391-.391V12.784H7.779v7.434a.391.391,0,0,1-.783,0V12.784A.783.783,0,0,1,7.779,12H9.344a.783.783,0,0,1,.783.783v7.434a.391.391,0,0,1-.391.391" transform="translate(-19124.918 -23095.609)" fill="#333"/><path id="Path_26625" data-name="Path 26625" d="M15.735,21.044a.391.391,0,0,1-.391-.391V14.784H13.779v5.869a.391.391,0,0,1-.783,0V14.784A.783.783,0,0,1,13.779,14h1.565a.783.783,0,0,1,.783.783v5.869a.391.391,0,0,1-.391.391" transform="translate(-19126.225 -23096.045)" fill="#333"/><path id="Path_26626" data-name="Path 26626" d="M21.735,19.522a.391.391,0,0,1-.391-.391V7.784H19.779V19.131a.391.391,0,1,1-.783,0V7.784A.783.783,0,0,1,19.779,7h1.565a.783.783,0,0,1,.783.783V19.131a.391.391,0,0,1-.391.391" transform="translate(-19127.529 -23094.521)" fill="#333"/><path id="Path_26627" data-name="Path 26627" d="M2.888,8.609a.391.391,0,0,1-.25-.692L6.666,4.562a1.944,1.944,0,0,1,1.87-.354l2.911.971a1.168,1.168,0,0,0,1.233-.315l4.4-4.739a.391.391,0,0,1,.574.532L13.254,5.4a1.959,1.959,0,0,1-2.054.526l-2.91-.971a1.162,1.162,0,0,0-1.122.212L3.138,8.518a.387.387,0,0,1-.25.091" transform="translate(-19123.939 -23093)" fill="#333"/><path id="Path_26628" data-name="Path 26628" d="M20.522,3.914a.391.391,0,0,1-.391-.391V.784H17.391a.391.391,0,1,1,0-.783h3.13a.391.391,0,0,1,.391.391v3.13a.391.391,0,0,1-.391.391" transform="translate(-19127.096 -23093)" fill="#333"/></g></g></svg></a> <a class="table-icon flex_icon" data-bs-toggle="tooltip" data-bs-placement="top" title="HIGH RISK"><svg id="high-risk" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19097 23089)"><rect id="Rectangle_3796" data-name="Rectangle 3796" width="24" height="24" transform="translate(-19097 -23089)" fill="#fff" opacity="0.998"/><g id="Group_11313" data-name="Group 11313" transform="translate(-2.645 33.5)"><path id="Path_26659" data-name="Path 26659" d="M9,18a9,9,0,1,1,9-9,9.01,9.01,0,0,1-9,9M9,.75A8.25,8.25,0,1,0,17.25,9,8.259,8.259,0,0,0,9,.75" transform="translate(-19091.355 -23119.5)" fill="#333"/><path id="Path_26660" data-name="Path 26660" d="M11.4,12.053a1.864,1.864,0,0,1-1.327-.55,1.885,1.885,0,0,1-.023-2.629c.6-.6,5.6-3.685,6.172-4.034a.375.375,0,0,1,.515.516c-.349.569-3.429,5.566-4.033,6.166a1.866,1.866,0,0,1-1.306.531m3.86-5.734C13.226,7.59,10.918,9.071,10.588,9.4a1.13,1.13,0,0,0,.018,1.573,1.154,1.154,0,0,0,1.578.014c.328-.327,1.808-2.634,3.078-4.668" transform="translate(-19093.738 -23120.695)" fill="#333"/><path id="Path_26661" data-name="Path 26661" d="M4.5,12.25H3.375a.375.375,0,0,1,0-.75H4.5a.375.375,0,0,1,0,.75" transform="translate(-19092.105 -23122.375)" fill="#333"/><path id="Path_26662" data-name="Path 26662" d="M6.66,7.035a.377.377,0,0,1-.266-.11l-.794-.8a.375.375,0,0,1,.53-.53l.8.794a.375.375,0,0,1-.265.641" transform="translate(-19092.729 -23120.873)" fill="#333"/><path id="Path_26663" data-name="Path 26663" d="M11.875,4.875A.375.375,0,0,1,11.5,4.5V3.375a.375.375,0,0,1,.75,0V4.5a.375.375,0,0,1-.375.375" transform="translate(-19094.23 -23120.25)" fill="#333"/><path id="Path_26664" data-name="Path 26664" d="M20,12.25H18.875a.375.375,0,0,1,0-.75H20a.375.375,0,0,1,0,.75" transform="translate(-19095.98 -23122.375)" fill="#333"/><path id="Path_26665" data-name="Path 26665" d="M16.191,19.2a.369.369,0,0,1-.213-.067,10.624,10.624,0,0,0-6.254-1.884,10.607,10.607,0,0,0-6.269,1.884.375.375,0,1,1-.426-.616A11.337,11.337,0,0,1,9.724,16.5,11.25,11.25,0,0,1,16.4,18.517a.375.375,0,0,1-.214.683" transform="translate(-19092.072 -23123.625)" fill="#333"/></g></g></svg></a> <a class="table-icon flex_icon" data-bs-toggle="tooltip" data-bs-placement="top" title="CRITICAL"><svg id="Critical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(19069 23089)"><rect id="Rectangle_3796" data-name="Rectangle 3796" width="24" height="24" transform="translate(-19069 -23089)" fill="#fff"/><g id="Group_11314" data-name="Group 11314" transform="translate(16.112 42.613)"><path id="Rectangle_3727" data-name="Rectangle 3727" d="M1.07,0H11.658a1.071,1.071,0,0,1,1.07,1.07V11.658a1.071,1.071,0,0,1-1.07,1.07H1.07A1.071,1.071,0,0,1,0,11.658V1.07A1.071,1.071,0,0,1,1.07,0ZM11.658,12.015a.357.357,0,0,0,.357-.357V1.07a.357.357,0,0,0-.357-.357H1.07a.357.357,0,0,0-.357.357V11.658a.357.357,0,0,0,.357.357Z" transform="translate(-19082.113 -23119.613) rotate(-45)" fill="#333"/><path id="Line_2065" data-name="Line 2065" d="M-.143,5.62A.357.357,0,0,1-.5,5.264V-.143A.357.357,0,0,1-.143-.5a.357.357,0,0,1,.357.357V5.264A.357.357,0,0,1-.143,5.62Z" transform="translate(-19072.951 -23123.309)" fill="#333"/><path id="Path_26658" data-name="Path 26658" d="M10.916,15.716H10.9a.552.552,0,0,1-.4-.924l0,0a.551.551,0,0,1,.382-.173h.032a.553.553,0,0,1,.536.535.547.547,0,0,1-.529.564Z" transform="translate(-19084.004 -23131.473)" fill="#333"/><path id="Line_2066" data-name="Line 2066" d="M-.136.214H-.143A.357.357,0,0,1-.5-.143.357.357,0,0,1-.143-.5h.007A.357.357,0,0,1,.22-.143.357.357,0,0,1-.136.214Z" transform="translate(-19072.959 -23116.357)" fill="#333"/></g></g></svg></a></div>',
    otlt_id: "82923114433",
    dba_name: "RAJ'S RECORD SHOP",
    dba_address: "232 W. MARKET ST. GREENSBORO, NC 27401",
    signed_date: "14/06/22",
    inv_start_date: "02/05/22",
    last_inv_update: "02/05/22",
    inv_status: "PENDING SUPPORTING DOCUMENTS",
    funding_impact: "ACTIVE FUNDING HOLD FUND EX- $24,452.22",
    priority: "HIGH RM ASSI.",
    heading: "lorem ipsum",
    heading: "lorem ipsum",
    heading: "lorem ipsum",
    link: "./investigation-queue-detail.html",
    daily_funding: "55,531",
    "30_day_funding": "41,000",
    daily_funding: "55,534",
    "30_day_funding": "40,000",
    legal_names: "LL ENTERPRISES",
    assigned_rm: "TUSJ – TIM STAHL",
    phone: "336-255-7733",
    url: "LISOXFANS.COM",
    portfolio: "KEY DIGITAL",
    no_of_otlts: "1",
    signed_vol: "$500,000 / $150",
    review_days: "5",
    last_comms_date: "12/10/21",
    daily_funding: "$55,534",
    day_funding: "$40,000",
    pts_sales: "$5,233",
    pts_refund: "$5,233",
    pts_cumm_refund: "$41,000",
    "133ITEM13": {
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
  fixedColumns: {
    leftColumns: 6,
    rightColumns: 1,
  },
  responsive: false,
  autoWidth: false,
  info: true,
  searching: true,
  dom: "Bfrtip",
  fixedHeader: true,
  order: [
    // [5, "asc"],
  ],
  columns: [
    {
      className: "input-select",
      defaultContent: "",
      data: null,
      orderable: false,
    },
    {
      className: "details-control",
      defaultContent: "",
      data: null,
      orderable: false,
    },
    {
      className: "view-notes popupopen",
      defaultContent: "",
      data: "view_notes",
      orderable: false,
    },
    {
      className: "email-icon popupopen",
      defaultContent: "",
      data: "email_icon",
      orderable: false,
    },
    {
      className: "attach-icon popupopen",
      defaultContent: "",
      data: "attach_icon",
      orderable: false,
    },
    { data: "item_id", className: "item-id" },
    {
      className: "tag-icons",
      defaultContent: "",
      data: "tag_icons",
      orderable: false,
    },
    { data: "otlt_id" },
    { data: "dba_name" },
    { data: "dba_address" },
    { data: "signed_date", sType: "date-uk" },
    { data: "inv_start_date", sType: "date-uk" },
    { data: "last_inv_update", sType: "date-uk" },
    { data: "inv_status" },
    { data: "funding_impact" },
    { data: "priority" },
    { data: "heading" },
    { data: "heading" },
    { data: "heading" },
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
      // "sFileName": "report.xlsx",
      action: function (e, dt, button, config) {
        exportTableToCSV.apply(this, [
          $("#iv-table"),
          "investigation-queue.csv",
        ]);
      },
    },
  ],
  columnDefs: [
    { type: "date-uk", targets: 5 },
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
    search: "",
    infoFiltered: "",
    zeroRecords: "No records to display",
  },
});
jQuery.extend(jQuery.fn.dataTableExt.oSort, {
  "date-uk-pre": function (a) {
    if (a == null || a == "") {
      return 0;
    }
    var ukDatea = a.split("/");
    return (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
  },

  "date-uk-asc": function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  },

  "date-uk-desc": function (a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
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
  $("#iv-table_wrapper .buttons-html5").click();
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
    $("#iv-table th").each(function (i) {
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
                    <div class="dropdown month-classify" data-trigger=${tableColumnDatas.item_id} data-row=${tableColumnDatas.id}>
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
              <div class="activity-chart" data-id=${tableColumnDatas.item_id}></div>
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
                    <p>${xAxisCategory[dataPointIndex]
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
let tableDataElements = $("#iv-table > tbody > tr > td.item-id");
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
  let itemData = $(this).data("id");
  let itemIndex = $(this).data("index");
  if (row.child.isShown()) {
    tr.next("tr").removeClass("details-row");
    row.child.hide();
    tr.removeClass("shown");
  } else {
    row.child(AccordionOutput(row.data())).show();
    tr.next("tr").addClass("details-row");
    tr.addClass("shown");
    let chart = new ApexCharts(
      document.querySelector(`.activity-chart[data-id="${itemData}"]`),
      options
    );

    chart.render();
    setTimeout(() => {
      tableColumnDatas.forEach((columnData) => {
        if (columnData.item_id === itemData) {
          let actualData = columnData[itemData]["12months"];
          chart.updateSeries(actualData);
        }
      });
      // if drag functionality is required
      // $(".copy-element").on("click", function () {
      //   let currentText = $(this).text();
      //   $("mark").contents().unwrap();
      //   $(this).html(`<mark>${currentText}</mark>`);
      //   $(this).find("mark").addClass("table-mark");
      //   $("body").append('<input class="clipboard-text">');
      //   $(".clipboard-text").val(currentText).select();
      //   document.execCommand("copy");
      //   $(".clipboard-text").remove();
      // });
    }, 0);

    let tableWrapWidth = $("#iv-table_wrapper").innerWidth();
    $("tr.details-row .table-inner-content").css("width", tableWrapWidth);
    $(".table-inner-content").css("left", $(".iv-table-parent").scrollLeft());
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

// Activate scroll for small screens

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
  let tableWrapWidth = $("#iv-table_wrapper").innerWidth();
  $("tr.details-row .table-inner-content").css("width", tableWrapWidth);
});
ResizeWidthAccordion();

// Sliding Arrows in datatable
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
        let tableWrapWidth = $("#iv-table_wrapper").width();
        $("tr.details-row .table-inner-content").css("width", tableWrapWidth);
      }
    }, 1000);
  }
});

$(window).on("scroll", function () {
  $(
    "table.collapsible-table.fixedHeader-floating,table.collapsible-table.fixedHeader-locked"
  ).css("width", $("#iv-table_wrapper").outerWidth() + "px");
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// open newWindow
function openToggler(url, width, height, popupName) {
  window.open(url, popupName, `height=${height},width=${width},left=0,top=0,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no`)
}

// blur when click icons
$(".investigation-icons .icon-btn,#iv-table .table-icon").on("click", function () {
  $(this).blur();
})