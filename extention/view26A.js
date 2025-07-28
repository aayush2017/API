var assYrSelVal, vwTypSel, firstClick, chkyear, reqId, tp, peakFlg, dClick, fClick, gClick;
function fnLoad26AS() {
    var e, a, r, t;
    $("#message").text(""),
    e = document.getElementById("viewType"),
    $("#navgride").jqGrid("GridUnload"),
    vwTypSel = e.options[e.selectedIndex].value,
    a = document.getElementById("AssessmentYearDropDown"),
    assYrSelVal = a.options[a.selectedIndex].value,
    r = a.options[a.selectedIndex].text,
    t = assYrSelVal.substring(0, 4),
    peakFlg = document.getElementById("peakflg").value,
    "" == assYrSelVal ? alert(err_mandatory_AssessmentYear) : (document.getElementById("assessYearSelectedVal").innerHTML = r,
    document.getElementById("financialYear").innerHTML = t - 1 + "-" + (t - 2e3 < 10 ? "0" + (t - 2e3) : t - 2e3),
    $("#loading").dialog({
        modal: !0,
        open: function() {
            $(".ui-dialog-titlebar-close").hide();
        }
    }),
    "PDF" == vwTypSel || "Text" == vwTypSel || "Excel" == vwTypSel || "JPDF" == vwTypSel ? (jQuery("#navgridA2").jqGrid("footerData", "set", {
        "3A2": "Gross Total Across Deductor(s)",
        "6A2": "0.00",
        "7A2": "0.00"
    }),
    jQuery("#navgridf").jqGrid("footerData", "set", {
        "3F": "Gross Total Across Deductee(s)",
        "6F": "0.00",
        "7F": "0.00",
        "8F": "0.00"
    }),
    $("#btnSubmit").attr("disabled", "disabled"),
    window.location.assign("http://localhost:3001/serv/tapn/srv/TDS26ASServlet" + "?reqtype=GetTaxPayer&assessYear=" + assYrSelVal + "&viewType=" + vwTypSel + "&reqTime=" + encSysTime),
    $("#loading").dialog("close")) : "HTML" == vwTypSel && ($("#navgride").jqGrid("GridUnload"),
    lbl_namofair = 2017 <= assYrSelVal ? ($("#sftpart_id").show(),
    lbl_partEhed = "Part E - Details of SFT Transaction",
    "Name of SFT Filer") : ($("#sftpart_id").hide(),
    lbl_partEhed = "Part E - Details of AIR Transaction",
    "Name of AIR Filer"),
    assYrSelVal == chkyear ? $("#loading").dialog("close") : (chkyear = "",
    $.ajax({
        type: "POST",
        url: 'http://localhost:3001/serv/tapn/srv/TDS26ASServlet',
        data: "reqtype=GetTaxPayer&assessYear=" + assYrSelVal + "&viewType=HTML",
        dataType: "json",
        success: fillTDS26ASData,
        error: function(e, a, r) {
            500 == e.status ? errInGetDet(e, a, r) : 410 == e.status ? (alert(expiredMessage),
            window.location = redirectTo) : fillTDS26ASData()
        }
    })),
    $("#pdfBtn").show()))
}
function errInGetDet(e, a, r) {
    $("#loading").dialog("close"),
    $("#navgrid").jqGrid("clearGridData"),
    $("#navgridA1").jqGrid("clearGridData"),
    $("#navgridA2").jqGrid("clearGridData"),
    $("#navgridb").jqGrid("clearGridData"),
    $("#navgridc").jqGrid("clearGridData"),
    $("#navgridd").jqGrid("clearGridData"),
    $("#navgridf").jqGrid("clearGridData"),
    $("#navgridf1").jqGrid("clearGridData"),
    $("#navgridf2").jqGrid("clearGridData"),
    $("#navgridG").jqGrid("clearGridData"),
    $("#navgride").jqGrid("clearGridData"),
    $("#navgridH").jqGrid("clearGridData"),
	$("#navgridA3").jqGrid("clearGridData"),
	$("#navgridV").jqGrid("clearGridData"),
	$("#navgridIX").jqGrid("clearGridData"),
    $("#message").text(err_invalidDetails)
}
function fillTDS26ASData(r) {
    console.log("r",r);
	$("#message").text(""),
	$("#loading").dialog("close"),
	2023 <= assYrSelVal ? $("#gridWrapperC").hide() : $("#gridWrapperC").show();
	2023 <= assYrSelVal ? $("#partCGrid").hide() : $("#partCGrid").show();
	2023 <= assYrSelVal ? $("#gridWrapperE").hide() : $("#gridWrapperE").show();
	2023 <= assYrSelVal ? $("#PART_E1").hide() : $("#PART_E1").show();
	2023 <= assYrSelVal ? $("#Part_E").hide() : $("#Part_E").show();
    assYrSelVal >=2023 ? $("#gridWrapperH").hide() : 2020 <= assYrSelVal ? $("#gridWrapperH").show():$("#gridWrapperH").hide();
	2023 <= assYrSelVal ? $("#gridWrapperIII").show() : $("#gridWrapperIII").hide();
	2023 <= assYrSelVal ? $("#gridWrapper3").show() : $("#gridWrapper3").hide();
		2023 <= assYrSelVal ? $("#gridWrapperV").show() : $("#gridWrapperV").hide();
	2023 <= assYrSelVal ? $("#gridWrapperIX").show() : $("#gridWrapperIX").hide();
	2021 == assYrSelVal ? $("#gridH1").show() : $("#gridH1").hide();
	assYrSelVal >=2023 ? $("#sftpart_id").hide() : 2017 <= assYrSelVal ? $("#sftpart_id").show():$("#sftpart_id").hide();
	var e, a, a3, pV, pVS, s5, pIX, pIXS1, pIXS2, s9, t, i, d, l, o, n, s, c, g, p, b, u, m, h, _, f, w = "N", y = "N";
    return null != (pdfData = r) && (w = r.countMax,
    y = r.countTan,
    downldErr = r.downldErr),
    "Y" == downldErr && $("#message").text(err_26AS_download),
    "B" == y ? ($("#message").text(err_tpReg),
    document.getElementById("pdfBtn").disabled = !0) : "Y" != y ? "B" == w ? ($("#message").text(err_tpReg),
    document.getElementById("pdfBtn").disabled = !0) : "Y" != w ? (null != r && (r.partabtxt && (e = r.partabtxt.detA,
    a = r.partabtxt.detA1,
	a3 = r.partabtxt.detA3,
    i = r.partabtxt.detB),
    r.partGtxt && (s = r.partGtxt.detG),
    r.partA2txt && (t = r.partA2txt.detA2),
    r.partVtxt && (pV = r.partVtxt.detPV),
    r.partIXtxt && (pIX = r.partIXtxt.detPIX),
    r.partctxt && (d = r.partctxt.detC),
    r.partdtxt && (l = r.partdtxt.detD),
    r.partetxt && (o = r.partetxt.detE),
    r.partftxt && (n = r.partftxt.detF),
    r.partHtxt && (f = r.partHtxt.detH),
    r.partA2sum && (c = (m = r.partA2sum.split("^"))[0],
    g = m[1]),
    r.partfsum && (p = (h = r.partfsum.split("^"))[0],
    b = h[1],
    u = h[2])),
    r.partVsum && (pVS = (s5 = r.partVsum.split("^"))[0]),
    r.partIXsum && (pIXS1 = (s9 = r.partIXsum.split("^"))[0],
    pIXS2 = s9[1]),
    $("#gridWrapperA").show(),
    // $(".ui-state-default.ui-jqgrid-hdiv").css("display", "none"),
    // $(".ui-jqgrid-bdiv .ui-jqgrid-titlebar").css("display","none"),
    // $(".ui-jqgrid-bdiv .ui-state-default").css("display","none"),
    $("#gridWrapperA1").show(),
    $("#gridWrapperA2").show(),
    $("#gridWrapperB").show(),
   // $("#gridWrapperC").show(),
    "N" == peakFlg ? ($("#gridWrapperD").show(),
    $("#gridWrapperF").show(),
    $("#gridWrapperF1").show(),
    $("#gridWrapperF2").show(),
    $("#gridWrapperG").show()) : ($("#partDLinkBox").show(),
    $("#partFLinkBox").show(),
    $("#partGLinkBox").show()),
   // $("#gridWrapperE").show(),
    firstClick || ($("#navgrid").jqGrid("clearGridData"),
    $("#navgridA1").jqGrid("clearGridData"),
    $("#navgridA2").jqGrid("clearGridData"),
    $("#navgridb").jqGrid("clearGridData"),
    $("#navgridc").jqGrid("clearGridData"),
	$("#navgridA3").jqGrid("clearGridData"),
	$("#navgridV").jqGrid("clearGridData"),
	$("#navgridIX").jqGrid("clearGridData"),
    "N" == peakFlg ? ($("#navgridd").jqGrid("clearGridData"),
    $("#navgridf").jqGrid("clearGridData"),
    $("#navgridf1").jqGrid("clearGridData"),
    $("#navgridf2").jqGrid("clearGridData"),
    $("#navgridG").jqGrid("clearGridData")) : ($("#partDLinkBox").show(),
    $("#partFLinkBox").show(),
    $("#partGLinkBox").show(),
    $("#gridWrapperD").hide(),
    $("#gridWrapperF").hide(),
    $("#gridWrapperF1").hide(),
    $("#gridWrapperF2").hide(),
    $("#gridWrapperG").hide()),
    $("#navgride").jqGrid("clearGridData"),
    jQuery("#navgrid").jqGrid("setGridParam", {
        data: e,
        beforeRequest: function() {
            try {
                null != e && 0 != e.length || (jQuery("#navgrid")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgrid").p.page = 0
            }
        },
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        subGridRowExpanded: function(e, a) {
            subGrdA(e, a, r)
        }
    }).trigger("reloadGrid"),
    jQuery("#navgridA1").jqGrid("setGridParam", {
        data: a,
        beforeRequest: function() {
            try {
                null != a && 0 != a.length || (jQuery("#navgridA1")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridA1").p.page = 0
            }
        },
        datatype: "local",
        subGridRowExpanded: function(e, a) {
            subGrdA1(e, a, r)
        }
    }).trigger("reloadGrid"),
	 jQuery("#navgridA3").jqGrid("setGridParam", {
        data: a3,
        beforeRequest: function() {
            try {
                null != a3 && 0 != a3.length || (jQuery("#navgridA3")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridA3").p.page = 0
            }
        },
        datatype: "local",
        subGridRowExpanded: function(e, a) {
            subGrdA3(e, a, r)
        }
    }).trigger("reloadGrid"),
    jQuery("#navgridA2").jqGrid("setGridParam", {
        data: t,
        beforeRequest: function() {
            try {
                null != t && 0 != t.length || (jQuery("#navgridA2")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridA2").p.page = 0
            }
        },
        datatype: "local",
        subGridRowExpanded: function(e, a) {
         	if (assYrSelVal >= '2023' ){
				subGrdIV(e, a, r)
			}else{
			   subGrdA2(e, a, r)
			}
		}
    }).trigger("reloadGrid"),
    jQuery("#navgridV").jqGrid("setGridParam", {
        data: pV,
        beforeRequest: function() {
            try {
                null != pV && 0 != pV.length || (jQuery("#navgridV")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridV").p.page = 0
            }
        },
        datatype: "local",
        subGridRowExpanded: function(e, a) {
        	subGrdPV(e, a, r)
        }
    }).trigger("reloadGrid"),
    jQuery("#navgridb").jqGrid("setGridParam", {
        data: i,
        beforeRequest: function() {
            try {
                null != i && 0 != i.length || (jQuery("#navgridb")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridb").p.page = 0
            }
        },
        datatype: "local",
        subGridRowExpanded: function(e, a) {
            subGrdB(e, a, r)
        }
    }).trigger("reloadGrid"),
    jQuery("#navgridc").jqGrid("setGridParam", {
        data: d,
        beforeRequest: function() {
            try {
                null != d && 0 != d.length || (jQuery("#navgridc")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridc").p.page = 0
            }
        },
        datatype: "local"
    }).trigger("reloadGrid"),
    "N" == peakFlg && jQuery("#navgridd").jqGrid("setGridParam", {
        data: l,
        beforeRequest: function() {
            try {
                null != l && 0 != l.length || (jQuery("#navgridd")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridd").p.page = 0
            }
        },
        datatype: "local"
    }).trigger("reloadGrid"),
    jQuery("#navgride").jqGrid("setGridParam", {
        data: o,
        beforeRequest: function() {
            try {
                null != o && 0 != o.length || (jQuery("#navgride")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgride").p.page = 0
            }
        },
        datatype: "local"
    }).trigger("reloadGrid"),
    "N" == peakFlg && (jQuery("#navgridf").jqGrid("setGridParam", {
        data: n,
        beforeRequest: function() {
            try {
                null != n && 0 != n.length || (jQuery("#navgridf")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridf").p.page = 0
            }
        },
        datatype: "local"
    }).trigger("reloadGrid"),
    jQuery("#navgridIX").jqGrid("setGridParam", {
        data: pIX,
        beforeRequest: function() {
            try {
                null != pIX && 0 != pIX.length || (jQuery("#navgridIX")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridIX").p.page = 0
            }
        },
        datatype: "local",
        subGridRowExpanded: function(e, a) {
        	subGrdPIX(e, a, r)
        }
    }).trigger("reloadGrid"),
    jQuery("#navgridG").jqGrid("setGridParam", {
        data: s,
        beforeRequest: function() {
            try {
                null != s && 0 != s.length || (jQuery("#navgridG")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridG").p.page = 0
            }
        },
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        subGridRowExpanded: function(e, a) {
            subGrdG(e, a, r)
        }
    }).trigger("reloadGrid")),
    jQuery("#navgridH").jqGrid("setGridParam", {
        data: f,
        beforeRequest: function() {
            try {
                null != f && 0 != f.length || (jQuery("#navgridH")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridH").p.page = 0
            }
        },
        datatype: "local"
    }).trigger("reloadGrid"),
    firstClick = !1),
    jQuery("#navgrid").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: e,
        beforeRequest: function() {
            try {
                null != e && 0 != e.length || (jQuery("#navgrid")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgrid").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_namDed, lbl_tanDed, lbl_totAmtPaid + WebRupee, lbl_totTaxDed + WebRupee, lbl_totTdsDep + WebRupee],
        colModel: [{
            name: "1A",
            sortable: !1,
            align: "right",
            sorttype: "int",
            width: 40
        }, {
            name: "3A",
            sortable: !1,
            width: 402
        }, {
            name: "TA",
            sortable: !1,
            align: "center",
            width: 100
        }, {
            name: "5A",
            sortable: !1,
            align: "right",
            width: 100,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "6A",
            sortable: !1,
            align: "right",
            width: 100,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "7A",
            sortable: !1,
            align: "right",
            width: 100,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 15,
        width: 950,
        pager: "#pagernav",
        viewrecords: !0,
        caption:lbl_partAhed,		
        hiddengrid: !1,
        subGrid: !0,
        height: "100%",
		loadComplete: function () { 
			if(assYrSelVal>='2023'){
				$('#navgrid').jqGrid('setCaption', lbl_part1hed)
			}else{
				$('#navgrid').jqGrid('setCaption', lbl_partAhed)
			}
		},
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        },
        subGridRowExpanded: function(e, a) {
            subGrdA(e, a, r)
        }
    }).trigger("reloadGrid"),
    jQuery("#navgridA1").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: a,
        beforeRequest: function() {
            try {
                null != a && 0 != a.length || (jQuery("#navgridA1")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridA1").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_namDed, lbl_tanDed, lbl_totAmtPaid + WebRupee, lbl_totTaxDed + WebRupee, lbl_totTdsDep + WebRupee],
        colModel: [{
            name: "1A1",
            align: "right",
            sortable: !1,
            sorttype: "int",
            width: 48
        }, {
            name: "2A1",
            sortable: !1,
            width: 300
        }, {
            name: "TA1",
            align: "center",
            sortable: !1,
            width: 100
        }, {
            name: "4A1",
            align: "right",
            sortable: !1,
            width: 100,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "5A1",
            align: "right",
            sortable: !1,
            width: 100,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "6A1",
            align: "right",
            sortable: !1,
            width: 100,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 15,
        width: 950,
        pager: "#pagernavA1",
        viewrecords: !0,
        caption: lbl_partA1hed,
        hiddengrid: !1,
        subGrid: !0,
		loadComplete: function () { 
			if(assYrSelVal>='2023'){
				$('#navgridA1').jqGrid('setCaption', lbl_part2hed)
			}else{
				$('#navgridA1').jqGrid('setCaption', lbl_partA1hed)
			}
		},
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        },
        subGridRowExpanded: function(e, a) {
            subGrdA1(e, a, r)
        }
    }).trigger("reloadGrid"),
	jQuery("#navgridA3").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: a3,
        beforeRequest: function() {
            try {
                null != a3 && 0 != a3.length || (jQuery("#navgridA3")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridA3").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_namDed, lbl_tanDed, lbl_totAmtPaid + WebRupee],
        colModel: [{
            name: "1A3",
            align: "right",
            sortable: !1,
            sorttype: "int",
            width: 48
        }, {
            name: "2A3",
            sortable: !1,
            width: 300
        }, {
            name: "TA3",
            align: "center",
            sortable: !1,
            width: 100
        }, {
            name: "4A3",
            align: "right",
            sortable: !1,
            width: 300,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        
        }],
        rowNum: 15,
        width: 950,
        pager: "#pagernavA3",
        viewrecords: !0,
        caption: lbl_part3hed,
        loadComplete: function () { 
			if(assYrSelVal>='2024'){
				$('#navgridA3').jqGrid('setCaption', lbl_part3hedIII)
			}else{
				$('#navgridA3').jqGrid('setCaption', lbl_part3hed)
			}
		},
        hiddengrid: !1,
        subGrid: !0,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        },
        subGridRowExpanded: function(e, a) {
            subGrdA3(e, a, r)
        }
    }).trigger("reloadGrid"),
    jQuery("#navgridA2").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: t,
        beforeRequest: function() {
            try {
                null != t && 0 != t.length || (jQuery("#navgridA2")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridA2").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_ackNo, lbl_namDed, lbl_panOfDed, lbl_transDate, lbl_totTransAmt + WebRupee, lbl_tot_tdsDeposit + WebRupee],
        colModel: [{
            name: "1A2",
            align: "right",
            sortable: !1,
            width: 35,
            resizable: !1
        }, {
            name: "AA2",
            sortable: !1,
            align: "center",
            width: 80,
            resizable: !1
        }, {
            name: "3A2",
            sortable: !1,
            align: "center",
            width: 200,
            resizable: !1
        }, {
            name: "AA4",
            sortable: !1,
            align: "center",
            width: 85,
            resizable: !1
        }, {
            name: "5A2",
            sortable: !1,
            align: "center",
            width: 85,
            resizable: !1
        }, {
            name: "6A2",
            sortable: !1,
            align: "right",
            width: 85,
            resizable: !1,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "7A2",
            sortable: !1,
            align: "right",
            width: 80,
            resizable: !1,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 15,
        width: 950,
        pager: "#pagernavA2",
        viewrecords: !0,
        caption: lbl_partA2hed,
        hiddengrid: !1,
        subGrid: !0,
        height: "100%",
        footerrow: !0,
		loadComplete: function () { 
			if(assYrSelVal>='2023'){
				$('#navgridA2').jqGrid('setCaption', lbl_part4hed)
			}else{
				$('#navgridA2').jqGrid('setCaption', lbl_partA2hed)
			}
		},
        userDataOnFooter: !0,
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        },
        subGridRowExpanded: function(e, a) {
            if (assYrSelVal >= '2023' ){
				subGrdIV(e, a, r)
			}else{
			   subGrdA2(e, a, r)
			}
        }
    }).trigger("reloadGrid"),
    (_ = $("#navgridA2").closest(".ui-jqgrid-bdiv").next(".ui-jqgrid-sdiv").find(".footrow")).find('>td[aria-describedby="navgridA2_1A2"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridA2_AA2"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridA2_3A2"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridA2_AA4"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridA2_5A2"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridA2_6A2"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridA2_7A2"]').css("background", "#99CCFF"),
    $("#navgridA2").parents("div.ui-jqgrid-bdiv").css("max-height", "200px"),
    jQuery("#navgridA2").jqGrid("footerData", "set", {
        "3A2": "Gross Total Across Deductor(s)",
        "6A2": c,
        "7A2": g
    }),
    jQuery("#navgridV").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: pV,
        beforeRequest: function() {
            try {
                null != pV && 0 != pV.length || (jQuery("#navgridV")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridV").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_ackNo, lbl_name_buyer, lbl_panofbuyer, lbl_transDate, lbl_totTransAmt + WebRupee],
        colModel: [{
            name: "1PV",
            align: "right",
            sortable: !1,
            sorttype: "int",
            width: 48
        }, {
            name: "APV",
            sortable: !1,
            width: 250
        }, {
            name: "3PV",
            sortable: !1,
            width: 250
        }, {
            name: "PPV",
            align: "center",
            sortable: !1,
            width: 150
        }, {
            name: "5PV",
            align: "center",
            sortable: !1,
            width: 150
        }, {
            name: "6PV",
            align: "right",
            sortable: !1,
            width: 300,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        
        }],
        rowNum: 15,
        width: 950,
        pager: "#pagernavV",
        viewrecords: !0,
        caption: lbl_partVhed,
        hiddengrid: !1,
        subGrid: !0,
        height: "100%",
        footerrow: !0,
        userDataOnFooter: !0,
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        },
        subGridRowExpanded: function(e, a) {
            subGrdPV(e, a, r)
        }
    }).trigger("reloadGrid"),
    (_ = $("#navgridV").closest(".ui-jqgrid-bdiv").next(".ui-jqgrid-sdiv").find(".footrow")).find('>td[aria-describedby="navgridV_1PV"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridV_APV"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridV_3PV"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridV_PPV"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridV_5PV"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridV_6PV"]').css("background", "#99CCFF"),
    $("#navgridV").parents("div.ui-jqgrid-bdiv").css("max-height", "200px"),
    jQuery("#navgridV").jqGrid("footerData", "set", {
        "3PV": "Gross Total Across Buyer(s)",
        "6PV": pVS
    }),
    jQuery("#navgridb").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: i,
        beforeRequest: function() {
            try {
                null != i && 0 != i.length || (jQuery("#navgridb")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridb").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_nameColctr, lbl_tanColctr, lbl_totAmtDebtd + WebRupee, lbl_totTaxColctd + WebRupee, lbl_totTcsDepstd + WebRupee],
        colModel: [{
            name: "1B",
            align: "right",
            sortable: !1,
            width: 40
        }, {
            name: "2B",
            sortable: !1,
            width: 402
        }, {
            name: "TB",
            align: "center",
            sortable: !1,
            width: 100
        }, {
            name: "4B",
            align: "right",
            sortable: !1,
            width: 100,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "5B",
            align: "right",
            sortable: !1,
            width: 100,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "6B",
            align: "right",
            sortable: !1,
            width: 100,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 15,
        width: 950,
        pager: "#pagernavb",
        viewrecords: !0,
        caption: lbl_partBhed,
        hiddengrid: !1,
        subGrid: !0,
        height: "100%",
		loadComplete: function () { 
			if(assYrSelVal>='2023'){
				$('#navgridb').jqGrid('setCaption', lbl_part5hed)
			}else{
				$('#navgridb').jqGrid('setCaption', lbl_partBhed)
			}
		},
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        },
        subGridRowExpanded: function(e, a) {
            subGrdB(e, a, r)
        }
    }).trigger("reloadGrid"),
    jQuery("#navgridc").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: d,
        beforeRequest: function() {
            try {
                null != d && 0 != d.length || (jQuery("#navgridc")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridc").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_majHedCode, lbl_minHedCode, lbl_tax + WebRupee, lbl_surcharge + br + WebRupee, lbl_eduCess + WebRupee, lbl_pnlAmt + br + WebRupee, lbl_intAmt + WebRupee, lbl_others + br + WebRupee, lbl_totTax + WebRupee, lbl_bsr, lbl_dateofdep, lbl_taxPayer_challanSerialNumber, lbl_remarkRevrsal],
        colModel: [{
            name: "C1",
            align: "right",
            sortable: !1,
            width: 32
        }, {
            name: "C2",
            sortable: !1,
            align: "right",
            width: 55
        }, {
            name: "C3",
            sortable: !1,
            align: "right",
            width: 55
        }, {
            name: "C4",
            sortable: !1,
            align: "right",
            width: 80,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "C5",
            sortable: !1,
            align: "right",
            width: 75,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "C6",
            sortable: !1,
            align: "right",
            width: 80,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "C7",
            sortable: !1,
            align: "right",
            width: 72,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "C8",
            sortable: !1,
            align: "right",
            width: 70,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "C9",
            sortable: !1,
            align: "right",
            width: 71,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "C10",
            sortable: !1,
            align: "right",
            width: 80,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "C11",
            sortable: !1,
            align: "center",
            width: 70
        }, {
            name: "C12",
            sortable: !1,
            align: "center",
            width: 70
        }, {
            name: "C13",
            sortable: !1,
            align: "center",
            width: 60
        }, {
            name: "C14",
            sortable: !1,
            align: "center",
            width: 80
        }],
        rowNum: 10,
        width: 950,
        pager: "#pagernavc",
        viewrecords: !0,
        caption: lbl_partChed,
        hiddengrid: !1,
        subGrid: !1,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        }
    }).trigger("reloadGrid"),
    "N" == peakFlg && (jQuery("#navgridd").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: l,
        beforeRequest: function() {
            try {
                null != l && 0 != l.length || (jQuery("#navgridd")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridd").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_ayRefPaid, lbl_modeofpaymnt, lbl_tan_pan_26AS, lbl_source_26AS, lbl_amtofRef + WebRupee, lbl_interest + WebRupee, lbl_dateRefPaid, lbl_remarks],
        colModel: [{
            name: "D1",
            align: "right",
            sortable: !1,
            width: 50
        }, {
            name: "D2",
            sortable: !1,
            align: "center",
            width: 150
        }, {
            name: "D3",
            sortable: !1,
            align: "center",
            width: 100
        }, {
            name: "D4",
            sortable: !1,
            align: "center",
            width: 100
        }, {
            name: "D5",
            sortable: !1,
            align: "center",
            width: 100
        }, {
            name: "D6",
            sortable: !1,
            align: "right",
            width: 100,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "D7",
            sortable: !1,
            align: "right",
            width: 100
        }, {
            name: "D8",
            sortable: !1,
            align: "center",
            width: 100
        }, {
            name: "D9",
            align: "center",
            width: 100
        }],
        rowNum: 10,
        width: 950,
        pager: "#pagernavd",
        viewrecords: !0,
        caption: lbl_partDhed,
        hiddengrid: !1,
        subGrid: !1,
        height: "100%",
		loadComplete: function () { 
			if(assYrSelVal>='2023'){
				$('#navgridd').jqGrid('setCaption', lbl_part6hed)
			}else{
				$('#navgridd').jqGrid('setCaption', lbl_partDhed)
			}
		},
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        }
    }).trigger("reloadGrid"),
    jQuery("#navgridf").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: n,
        beforeRequest: function() {
            try {
                null != n && 0 != n.length || (jQuery("#navgridf")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridf").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_ackNo, lbl_namdctee, lbl_pandctee, lbl_transDate, lbl_totTransAmt + WebRupee, lbl_tot_tds_depo + WebRupee, lbl_otherAmt + WebRupee],
        colModel: [{
            name: "1F",
            align: "right",
            sortable: !1,
            width: 35
        }, {
            name: "FF",
            sortable: !1,
            align: "center",
            width: 80
        }, {
            name: "3F",
            sortable: !1,
            align: "center",
            width: 200
        }, {
            name: "FF4",
            sortable: !1,
            align: "center",
            width: 85
        }, {
            name: "5F",
            sortable: !1,
            align: "center",
            width: 85
        }, {
            name: "6F",
            sortable: !1,
            align: "right",
            width: 85,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "7F",
            sortable: !1,
            align: "right",
            width: 80,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "8F",
            sortable: !1,
            align: "right",
            width: 80,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 10,
        width: 950,
        pager: "#pagernavf",
        viewrecords: !0,
        caption: lbl_partFhed,
        hiddengrid: !1,
        subGrid: !0,
        height: "100%",
		loadComplete: function () { 
			if(assYrSelVal>='2023'){
				$('#navgridf').jqGrid('setCaption', lbl_part7hed)
			}else{
				$('#navgridf').jqGrid('setCaption', lbl_partFhed)
			}
		},
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        },
        footerrow: !0,
        userDataOnFooter: !0,
        subGridRowExpanded: function(e, a) {
            if (assYrSelVal >= '2023' ){
				subGrdVII(e, a, r)
			}else{
				subGrdF(e, a, r)
			}
        }
    }).trigger("reloadGrid"),
    (_ = $("#navgridf").closest(".ui-jqgrid-bdiv").next(".ui-jqgrid-sdiv").find(".footrow")).find('>td[aria-describedby="navgridf_1F"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridf_FF"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridf_3F"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridf_FF4"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridf_5F"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridf_6F"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridf_7F"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridf_8F"]').css("background", "#99CCFF"),
    $("#navgridf").parents("div.ui-jqgrid-bdiv").css("max-height", "200px"),
    jQuery("#navgridf").jqGrid("footerData", "set", {
        "3F": "Gross Total Across Deductee(s)",
        "6F": p,
        "7F": b,
        "8F": u
    }),
    jQuery("#navgridIX").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: pIX,
        beforeRequest: function() {
            try {
                null != pIX && 0 != pIX.length || (jQuery("#navgridIX")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridIX").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_ackNo, lbl_name_seller, lbl_pan_seller, lbl_transDate, lbl_totTransAmt + WebRupee, lbl_otherAmt + WebRupee],
        colModel: [{
            name: "1PIX",
            align: "right",
            sortable: !1,
            sorttype: "int",
            width: 48
        }, {
            name: "APIX",
            sortable: !1,
            width: 250
        }, {
            name: "3PIX",
            sortable: !1,
            width: 300
        }, {
            name: "PPIX",
            align: "center",
            sortable: !1,
            width: 150
        }, {
            name: "5PIX",
            align: "center",
            sortable: !1,
            width: 150
        }, {
            name: "6PIX",
            align: "right",
            sortable: !1,
            width: 250,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        
        }, {
            name: "7PIX",
            align: "right",
            sortable: !1,
            width: 300,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        
        }],
        rowNum: 15,
        width: 950,
        pager: "#pagernavIX",
        viewrecords: !0,
        caption: lbl_partIXhed,
        hiddengrid: !1,
        subGrid: !0,
        height: "100%",
        footerrow: !0,
        userDataOnFooter: !0,
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        },
        subGridRowExpanded: function(e, a) {
            subGrdPIX(e, a, r)
        }
    }).trigger("reloadGrid"),
    (_ = $("#navgridIX").closest(".ui-jqgrid-bdiv").next(".ui-jqgrid-sdiv").find(".footrow")).find('>td[aria-describedby="navgridIX_1PIX"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridIX_APIX"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridIX_3PIX"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridIX_PPIX"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridIX_5PIX"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridIX_6PIX"]').css("background", "#99CCFF"),
    _.find('>td[aria-describedby="navgridIX_7PIX"]').css("background", "#99CCFF"),
    $("#navgridIX").parents("div.ui-jqgrid-bdiv").css("max-height", "200px"),
    jQuery("#navgridIX").jqGrid("footerData", "set", {
        "3PIX": "Gross Total Across Seller(s)",
        "6PIX": pIXS1,
        "7PIX": pIXS2
    }),
    jQuery("#navgridG").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: s,
        beforeRequest: function() {
            try {
                null != s && 0 != s.length || (jQuery("#navgridG")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridG").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_financialYear, lbl_shortPay, lbl_shortDeduction, lbl_deflts_pymnt_int, lbl_deflts_ded_int, lbl_late_flng_levy, lbl_intrst, lbl_partGTD],
        colModel: [{
            name: "1G",
            align: "right",
            sortable: !1,
            width: 35
        }, {
            name: "TG",
            sortable: !1,
            align: "center",
            width: 80
        }, {
            name: "3G",
			index: "3G",
            sortable: !1,
            align: "center",
            width: 85,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "4G",
			index: "4G",
            sortable: !1,
            align: "center",
            width: 85,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "5G",
			index: "5G",
            sortable: !1,
            align: "center",
            width: 85,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "6G",
            sortable: !1,
            align: "center",
            width: 80,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "7G",
            sortable: !1,
            align: "center",
            width: 80,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "8G",
            sortable: !1,
            align: "center",
            width: 60,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "9G",
            sortable: !1,
            align: "center",
            width: 70,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 10,
        width: 950,
        pager: "#pagernavG",
        viewrecords: !0,
        caption: lbl_partGhed,
        hiddengrid: !1,
        subGrid: !0,
        height: "100%",
		loadComplete: function () { 
			if(assYrSelVal>='2023'){
				$("#navgridG").jqGrid('setLabel', '4G', 'Short Deduction/ Collection');
				$("#navgridG").jqGrid('setLabel', '5G', 'Interest on TDS/TCS Payments default');
				$("#navgridG").jqGrid('setLabel', '6G', 'Interest on TDS/TCS Deduction/ Collection Default');
				$('#navgridG').jqGrid('setCaption', lbl_part8hed)
			}else{
				$('#navgridG').jqGrid('setCaption', lbl_partGhed)
				$("#navgridG").jqGrid('setLabel', '4G', lbl_shortDeduction);
				$("#navgridG").jqGrid('setLabel', '5G', lbl_deflts_pymnt_int);
				$("#navgridG").jqGrid('setLabel', '6G', lbl_deflts_ded_int); 
			}
		},
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        },
        subGridRowExpanded: function(e, a) {
            subGrdG(e, a, r)
        }
    }).trigger("reloadGrid")),
    jQuery("#navgride").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: o,
        beforeRequest: function() {
            try {
                null != o && 0 != o.length || (jQuery("#navgride")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgride").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_natoftrnsc, lbl_namofair, lbl_transDate, lbl_singleorjoint, lbl_namofjointtrnsc, lbl_taxPayer_amount + WebRupee, lbl_modeoftrnsc, lbl_remarkRevrsal],
        colModel: [{
            name: "E1",
            align: "right",
            sortable: !1,
            width: 35
        }, {
            name: "E2",
            sortable: !1,
            align: "center",
            width: 150
        }, {
            name: "E3",
            sortable: !1,
            align: "center",
            width: 250
        }, {
            name: "E4",
            sortable: !1,
            align: "center",
            width: 80
        }, {
            name: "E5",
            sortable: !1,
            align: "center",
            width: 80,
            hidden: 2017 <= assYrSelVal
        }, {
            name: "E6",
            sortable: !1,
            align: "center",
            width: 60,
            hidden: 2017 <= assYrSelVal
        }, {
            name: "E7",
            sortable: !1,
            align: "center",
            width: 100
        }, {
            name: "E8",
            sortable: !1,
            align: "center",
            width: 80,
            hidden: 2017 <= assYrSelVal
        }, {
            name: "E9",
            sortable: !1,
            align: "center",
            width: 80
        }],
        rowNum: 10,
        width: 950,
        pager: "#pagernave",
        viewrecords: !0,
        caption: lbl_partEhed,
        hiddengrid: !1,
        subGrid: !1,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        }
    }).trigger("reloadGrid"),
	  jQuery("#navgridH").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: f,
        beforeRequest: function() {
            try {
                null != f && 0 != f.length || (jQuery("#navgridH")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridH").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_partH_GSTIN, lbl_partH_ARN, lbl_partH_DtofFil, lbl_partH_RtnPrd, lbl_partH_TxblTrnvr, lbl_partH_TotTrnvr],
        colModel: [{
            name: "H1",
            align: "right",
            sortable: !1,
            width: 35
        }, {
            name: "H2",
            sortable: !1,
            align: "center",
            width: 100
        }, {
            name: "H3",
            sortable: !1,
            align: "center",
            width: 200
        }, {
            name: "H4",
            sortable: !1,
            align: "center",
            width: 80
        }, {
            name: "H5",
            sortable: !1,
            align: "center",
            width: 80
        }, {
            name: "H6",
            sortable: !1,
            align: "right",
            width: 100,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "H7",
            sortable: !1,
            align: "right",
            width: 100,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 10,
        width: 950,
        pager: "#pagernavH",
        viewrecords: !0,
        caption: lbl_partHhed,
        hiddengrid: !1,
        subGrid: !1,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        }
    }).trigger("reloadGrid"),
    chkyear = assYrSelVal) : ("Y" == tp ? showModalWindow_tp : showModalWindow_traces)() : ("Y" == tp ? showModalWindow_tp : showModalWindow_traces)(),
    !0
}
function showModalWindow_traces() {
    "Excel" == getQueryVariable("viewType") ? $("#sbmt_modalExcel").dialog({
        modal: !0,
        width: '450',
        buttons: {
            Proceed: function() {
                submit26ASRequest(),
                $(this).dialog("close")
            },
            Cancel: function() {
                $(this).dialog("close")
            }
        }
    }) : $("#sbmt_modal").dialog({
        modal: !0,
        width: '450',
        open: function() {
            $(".ui-dialog-titlebar-close").hide();
        },
        buttons: {
            Proceed: function() {
                submit26ASRequest(),
                $(this).dialog("close")
            },
            Cancel: function() {
                $(this).dialog("close")
            }
        }
    })
}
function submit26ASRequest() {
    var e, a = getQueryVariable("viewType");
    assYrSelVal ? e = assYrSelVal.substring(0, 4) : (e = document.getElementById("assYr").value,
    peakFlg = document.getElementById("peakflg").value);
    var r = g_ContextPath + "/srv/CreateDwnldReqServlet?fy=" + e + "&qr=0&ft=26AS&dt=15&viewType=" + a;
    $.ajax({
        type: "POST",
        url: r,
        dataType: "json",
        success: showModalWindows,
        error: function(e, a, r, t) {
            500 == e.status ? errInGetDet(e, a, r, t) : 410 == e.status && (alert(expiredMessage),
            window.location = redirectTo)
        }
    })
}
function subGrdA(subgrid_id, row_id, text) {
    var subgrid_table_id, pager_id, ret, tan, mntDetArA, subgrid_table_id = subgrid_id + "_t", pager_id = "p_" + subgrid_table_id, ret = jQuery("#navgrid").jqGrid("getRowData", row_id), tan = ret.TA, mntDetArA = eval("text.partabtxt.tanA" + tan);
    $("#" + subgrid_id).html("<table id='" + subgrid_table_id + "' class='scroll'></table><div id='" + pager_id + "' class='scroll'></div>"),
    jQuery("#" + subgrid_table_id).jqGrid({
        data: mntDetArA,
        datatype: "local",
        colNames: [bundle_lbl_srNo, lbl_secDedMade, lbl_transDate, lbl_statOfBooking, lbl_dateOfbokng, lbl_remarkRevrsal, lbl_amtPaidCrdt + WebRupee, lbl_taxdedSur + br + WebRupee, lbl_tdsDep + WebRupee],
        colModel: [{
            name: "A1",
            sortable: !1,
            width: 40,
            align: "right",
            key: !0
        }, {
            name: "A2",
            sortable: !1,
            width: 102,
            align: "center"
        }, {
            name: "A3",
            sortable: !1,
            width: 100,
            align: "center"
        }, {
            name: "A4",
            sortable: !1,
            width: 90,
            align: "center"
        }, {
            name: "A5",
            sortable: !1,
            width: 98,
            align: "center"
        }, {
            name: "A6",
            sortable: !1,
            width: 102,
            align: "center"
        }, {
            name: "A7",
            sortable: !1,
            width: 102,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "A8",
            sortable: !1,
            width: 98,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "A9",
            sortable: !1,
            width: 98,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 15,
        width: 918,
        pager: pager_id,
        viewrecords: !0,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "0"
        }
    })
}
function subGrdA1(subgrid_id, row_id, text) {
    var subgrid_table_id, pager_id, ret, tan, mntDetArA1, subgrid_table_id = subgrid_id + "_t", pager_id = "p_" + subgrid_table_id, ret = jQuery("#navgridA1").jqGrid("getRowData", row_id), tan = ret.TA1, mntDetArA1 = eval("text.partabtxt.tanA1" + tan);
    $("#" + subgrid_id).html("<table id='" + subgrid_table_id + "' class='scroll'></table><div id='" + pager_id + "' class='scroll'></div>"),
    jQuery("#" + subgrid_table_id).jqGrid({
        data: mntDetArA1,
        datatype: "local",
        colNames: [bundle_lbl_srNo, lbl_secDedMade, lbl_transDate, lbl_dateOfbokng, lbl_remarkRevrsal, lbl_amtPaidCrdt + WebRupee, lbl_taxdedSur + WebRupee, lbl_tdsDep + WebRupee],
        colModel: [{
            name: "A11",
            align: "right",
            sortable: !1,
            width: 48,
            key: !0
        }, {
            name: "A12",
            width: 95,
            sortable: !1,
            align: "center"
        }, {
            name: "A13",
            width: 100,
            sortable: !1,
            align: "center"
        }, {
            name: "A14",
            width: 97,
            sortable: !1,
            align: "center"
        }, {
            name: "A15",
            width: 102,
            sortable: !1,
            align: "center"
        }, {
            name: "A16",
            width: 100,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "A17",
            width: 98,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "A18",
            width: 98,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 15,
        width: 918,
        pager: pager_id,
        viewrecords: !0,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "0"
        }
    })
}

function subGrdA3(subgrid_id, row_id, text) {
    var subgrid_table_id, pager_id, ret, tan, mntDetArA1, subgrid_table_id = subgrid_id + "_t", pager_id = "p_" + subgrid_table_id, ret = jQuery("#navgridA3").jqGrid("getRowData", row_id), tan = ret.TA3, mntDetArA1 = eval("text.partabtxt.tanA3" + tan);
    $("#" + subgrid_id).html("<table id='" + subgrid_table_id + "' class='scroll'></table><div id='" + pager_id + "' class='scroll'></div>"),
    jQuery("#" + subgrid_table_id).jqGrid({
        data: mntDetArA1,
        datatype: "local",
         colNames: [bundle_lbl_srNo, lbl_secDedMade, lbl_transDate, lbl_statOfBooking, lbl_remarkRevrsal, lbl_amtPaidCrdt + WebRupee],
        colModel: [{
            name: "A31",
            align: "right",
            sortable: !1,
            width: 48,
            key: !0
        }, {
            name: "A32",
            width: 95,
            sortable: !1,
            align: "center"
        }, {
            name: "A33",
            width: 100,
            sortable: !1,
            align: "center"
        }, {
            name: "A34",
            width: 97,
            sortable: !1,
            align: "center"
        }, {
            name: "A35",
            width: 102,
            sortable: !1,
            align: "center"
        }, {
            name: "A36",
            width: 100,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 15,
        width: 918,
        pager: pager_id,
        viewrecords: !0,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "0"
        }
    })
}

function subGrdB(subgrid_id, row_id, text) {
    var subgrid_table_id, pager_id, ret, tan, mntDetArB, subgrid_table_id = subgrid_id + "_t", pager_id = "p_" + subgrid_table_id, ret = jQuery("#navgridb").jqGrid("getRowData", row_id), tan = ret.TB, mntDetArB = eval("text.partabtxt.tanB" + tan);
    $("#" + subgrid_id).html("<table id='" + subgrid_table_id + "' class='scroll'></table><div id='" + pager_id + "' class='scroll'></div>"),
    jQuery("#" + subgrid_table_id).jqGrid({
        data: mntDetArB,
        datatype: "local",
        colNames: [bundle_lbl_srNo, lbl_secColtnMade, lbl_transDate, lbl_statOfBooking, lbl_dateOfbokng, lbl_remarkRevrsal, lbl_amtPaidDeb + WebRupee, lbl_taxColctd + br + WebRupee, lbl_tcsDep + WebRupee],
        colModel: [{
            name: "B1",
            align: "right",
            sortable: !1,
            width: 40,
            key: !0
        }, {
            name: "B2",
            width: 102,
            sortable: !1,
            align: "center"
        }, {
            name: "B3",
            width: 100,
            sortable: !1,
            align: "center"
        }, {
            name: "B4",
            width: 90,
            sortable: !1,
            align: "center"
        }, {
            name: "B5",
            width: 98,
            sortable: !1,
            align: "center"
        }, {
            name: "B6",
            width: 102,
            sortable: !1,
            align: "center"
        }, {
            name: "B7",
            width: 102,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "B8",
            width: 98,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "B9",
            width: 98,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 15,
        width: 918,
        pager: pager_id,
        viewrecords: !0,
        height: "100%",
		loadComplete: function () { 
			if(assYrSelVal>='2023'){
				$("#" + subgrid_table_id).jqGrid('setLabel', 'B2', 'Section<sup>1</sup>');
			}else{
				$("#" + subgrid_table_id).jqGrid('setLabel', 'B2', lbl_secColtnMade); 
			}
		},
        jsonReader: {
            repeatitems: !1,
            id: "0"
        }
    })
}
function subGrdG(subgrid_id, row_id, text) {
    var subgrid_table_id, pager_id, ret, fy, mntDetArG, subgrid_table_id = subgrid_id + "_t", pager_id = "p_" + subgrid_table_id, ret = jQuery("#navgridG").jqGrid("getRowData", row_id), fy = ret.TG, mntDetArG = eval("text.partGtxt.fyG");
	$("#" + subgrid_id).html("<table id='" + subgrid_table_id + "' class='scroll'></table><div id='" + pager_id + "' class='scroll'></div>"),
    jQuery("#" + subgrid_table_id).jqGrid({
        data: mntDetArG,
        datatype: "local",
        colNames: [bundle_lbl_srNo, lbl_partGTAN, lbl_shortPay, lbl_shortDeduction, lbl_deflts_pymnt_int, lbl_deflts_ded_int, lbl_late_flng_levy, lbl_intrst, lbl_partGTD],
        colModel: [{
            name: "1G1",
            align: "right",
            sortable: !1,
            width: 35,
            key: !0
        }, {
            name: "2G1",
            sortable: !1,
            align: "center",
            width: 80
        }, {
            name: "3G1",
			index:"3G1",
            sortable: !1,
            align: "center",
            width: 85,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "4G1",
			index:"4G1",
            sortable: !1,
            align: "center",
            width: 85,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "5G1",
			index:"5G1",
            sortable: !1,
            align: "center",
            width: 85,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "6G1",
            sortable: !1,
            align: "center",
            width: 80,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "7G1",
            sortable: !1,
            align: "center",
            width: 80,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "8G1",
            sortable: !1,
            align: "center",
            width: 60,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "9G1",
            sortable: !1,
            align: "center",
            width: 70,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
		loadComplete: function () { 
		if(assYrSelVal>='2023'){
				$(("#" + subgrid_table_id)).jqGrid('setLabel', '4G1', 'Short Deduction/ Collection');
				$(("#" + subgrid_table_id)).jqGrid('setLabel', '5G1', 'Interest on TDS/TCS Payments default');
				$(("#" + subgrid_table_id)).jqGrid('setLabel', '6G1', 'Interest on TDS/TCS Deduction/ Collection Default');
			}else{
				$(("#" + subgrid_table_id)).jqGrid('setLabel', '4G1', lbl_shortDeduction);
				$(("#" + subgrid_table_id)).jqGrid('setLabel', '5G1', lbl_deflts_pymnt_int);
				$(("#" + subgrid_table_id)).jqGrid('setLabel', '6G1', lbl_deflts_ded_int);
			}
		},
        rowNum: 25,
        width: 918,
        pager: pager_id,
        viewrecords: !0,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "0"
        }
    })
}
function subGrdA2(subgrid_id, row_id, text) {
    var subgrid_table_id, pager_id, ret, ack, ackDetArA2, subgrid_table_id = subgrid_id + "_t", pager_id = "p_" + subgrid_table_id, ret = jQuery("#navgridA2").jqGrid("getRowData", row_id), ack = ret.AA2 + ret.AA4, ackDetArA2 = eval("text.partA2txt.ack" + ack);
    $("#" + subgrid_id).html("<table id='" + subgrid_table_id + "' class='scroll'></table><div id='" + pager_id + "' class='scroll'></div>"),
    jQuery("#" + subgrid_table_id).jqGrid({
        data: ackDetArA2,
        datatype: "local",
        colNames: [bundle_lbl_srNo, lbl_tdsCertiNo, lbl_dateofdep, lbl_bookStat, lbl_bookDate, lbl_demand_payment_flg, lbl_tdsDeposit + WebRupee],
        colModel: [{
            name: "A21",
            align: "right",
            sortable: !1,
            width: 35,
            key: !0
        }, {
            name: "A22",
            width: 100,
            sortable: !1,
            align: "center"
        }, {
            name: "A23",
            width: 140,
            sortable: !1,
            align: "center"
        }, {
            name: "A24",
            width: 85,
            sortable: !1,
            align: "center"
        }, {
            name: "A25",
            width: 105,
            sortable: !1,
            align: "center"
        }, {
            name: "A26",
            width: 85,
            sortable: !1,
            align: "center"
        }, {
            name: "A27",
            width: 180,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 15,
        width: 918,
        pager: pager_id,
        viewrecords: !0,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "0"
        }
    })
}
function subGrdIV(subgrid_id, row_id, text) {
    var subgrid_table_id, pager_id, ret, ack, ackDetArA2, subgrid_table_id = subgrid_id + "_t", pager_id = "p_" + subgrid_table_id, ret = jQuery("#navgridA2").jqGrid("getRowData", row_id), ack = ret.AA2 + ret.AA4, ackDetArA2 = eval("text.partA2txt.ack" + ack);
    $("#" + subgrid_id).html("<table id='" + subgrid_table_id + "' class='scroll'></table><div id='" + pager_id + "' class='scroll'></div>"),
    jQuery("#" + subgrid_table_id).jqGrid({
        data: ackDetArA2,
        datatype: "local",
        colNames: [bundle_lbl_srNo, lbl_tdsCertiNo, lbl_secDedMade, lbl_dateofdep, lbl_bookStat, lbl_bookDate, lbl_demand_payment_flg, lbl_tdsDeposit + WebRupee],
        colModel: [{
            name: "A21",
            align: "right",
            sortable: !1,
            width: 35,
            key: !0
        }, {
            name: "A22",
            width: 100,
            sortable: !1,
            align: "center"
        }, {
        	 name: "A28",
             sortable: !1,
             width: 102,
             align: "center"
        }, {
            name: "A23",
            width: 100,
            sortable: !1,
            align: "center"
        }, {
            name: "A24",
            width: 85,
            sortable: !1,
            align: "center"
        }, {
            name: "A25",
            width: 105,
            sortable: !1,
            align: "center"
        }, {
            name: "A26",
            width: 85,
            sortable: !1,
            align: "center"
        }, {
            name: "A27",
            width: 160,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 15,
        width: 918,
        pager: pager_id,
        viewrecords: !0,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "0"
        },
        loadComplete: function () {
			//$('#loading').dialog("close");
			 if (assYrSelVal >= '2023' ){
					jQuery("#" + subgrid_table_id).jqGrid('showCol','A28');
					}else{
					jQuery("#" + subgrid_table_id).jqGrid('hideCol','A28');
					} 
        }
    })
}
function subGrdF(subgrid_id, row_id, text) {
    var subgrid_table_id, pager_id, ret, ack, ackDetArF, subgrid_table_id = subgrid_id + "_t", pager_id = "p_" + subgrid_table_id, ret = jQuery("#navgridf").jqGrid("getRowData", row_id), ack = ret.FF + ret.FF4, ackDetArF = eval("text.partftxt.ackF" + ack);
    $("#" + subgrid_id).html("<table id='" + subgrid_table_id + "' class='scroll'></table><div id='" + pager_id + "' class='scroll'></div>"),
    jQuery("#" + subgrid_table_id).jqGrid({
        data: ackDetArF,
        datatype: "local",
        colNames: [bundle_lbl_srNo, lbl_tdsCertiNo, lbl_dateofdep, lbl_bookStat, lbl_bookDate, lbl_demand_payment_flg, lbl_tdsDeposit + WebRupee, lbl_otherAmt + WebRupee],
        colModel: [{
            name: "F1",
            align: "right",
            sortable: !1,
            width: 35,
            key: !0
        }, {
            name: "F2",
            width: 110,
            sortable: !1,
            align: "center"
        }, {
            name: "F3",
            width: 100,
            sortable: !1,
            align: "center"
        }, {
            name: "F4",
            width: 85,
            sortable: !1,
            align: "center"
        }, {
            name: "F5",
            width: 85,
            sortable: !1,
            align: "center"
        }, {
            name: "F6",
            width: 95,
            sortable: !1,
            align: "center"
        }, {
            name: "F7",
            width: 140,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "F8",
            width: 140,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 15,
        width: 918,
        pager: pager_id,
        viewrecords: !0,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "0"     	
        }
    })
}
function subGrdVII(subgrid_id, row_id, text) {
    var subgrid_table_id, pager_id, ret, ack, ackDetArF, subgrid_table_id = subgrid_id + "_t", pager_id = "p_" + subgrid_table_id, ret = jQuery("#navgridf").jqGrid("getRowData", row_id), ack = ret.FF + ret.FF4, ackDetArF = eval("text.partftxt.ackF" + ack);
    $("#" + subgrid_id).html("<table id='" + subgrid_table_id + "' class='scroll'></table><div id='" + pager_id + "' class='scroll'></div>"),
    jQuery("#" + subgrid_table_id).jqGrid({
        data: ackDetArF,
        datatype: "local",
        colNames: [bundle_lbl_srNo, lbl_tdsCertiNo, lbl_secDedMade, lbl_dateofdep, lbl_bookStat, lbl_bookDate, lbl_demand_payment_flg, lbl_tdsDeposit + WebRupee, lbl_otherAmt + WebRupee],
        colModel: [{
            name: "F1",
            align: "right",
            sortable: !1,
            width: 35,
            key: !0
        }, {
            name: "F2",
            width: 90,
            sortable: !1,
            align: "center"
        }, {
        	 name: "F9",
             sortable: !1,
             width: 72,
             align: "center"
        }, {
            name: "F3",
            width: 200,
            sortable: !1,
            align: "center"
        }, {
            name: "F4",
            width: 85,
            sortable: !1,
            align: "center"
        }, {
            name: "F5",
            width: 85,
            sortable: !1,
            align: "center"
        }, {
            name: "F6",
            width: 95,
            sortable: !1,
            align: "center"
        }, {
            name: "F7",
            width: 180,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "F8",
            width: 180,
 sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 15,
        width: 918,
        pager: pager_id,
        viewrecords: !0,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "0"     	
        }
    })
}
  
  function subGrdPV(subgrid_id, row_id, text) {
    var subgrid_table_id, pager_id, ret, ack, ackDetArV, subgrid_table_id = subgrid_id + "_t", pager_id = "p_" + subgrid_table_id, ret = jQuery("#navgridV").jqGrid("getRowData", row_id), ack = ret.APV + ret.PPV, ackDetArV = eval("text.partVtxt.PartV" + ack);
    $("#" + subgrid_id).html("<table id='" + subgrid_table_id + "' class='scroll'></table><div id='" + pager_id + "' class='scroll'></div>"),
    jQuery("#" + subgrid_table_id).jqGrid({
        data: ackDetArV,
        datatype: "local",
        colNames: [bundle_lbl_srNo, lbl_bsr, lbl_dateofdep, lbl_taxPayer_challanSerialNumber, lbl_tot_tax_amt, lbl_bookStat],
        colModel: [{
            name: "PV1",
            align: "right",
            sortable: !1,
            width: 35,
            key: !0
        }, {
            name: "PV2",
            width: 80,
            sortable: !1,
            align: "center"
        }, {
        	 name: "PV3",
             sortable: !1,
             width: 102,
             align: "center"
        }, {
            name: "PV4",
            width: 100,
            sortable: !1,
            align: "center"
        }, {
        	name: "PV5",
            width: 80,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "PV6",
            width: 85,
            sortable: !1,
            align: "center"
        }],
        rowNum: 15,
        width: 918,
        pager: pager_id,
        viewrecords: !0,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "0"
        }
    });
    jQuery("#" + subgrid_table_id).jqGrid('setGroupHeaders', {
		 							useColSpanStyle: true,
		 							groupHeaders:[
		 							{startColumnName:'PV2', numberOfColumns: 4,titleText: '<center>Challan Details mentioned in the Statement</center>'}
		 						]			
    }).trigger("reloadGrid"); 
}

function subGrdPIX(subgrid_id, row_id, text) {
    var subgrid_table_id, pager_id, ret, ack, ackDetArIX, subgrid_table_id = subgrid_id + "_t", pager_id = "p_" + subgrid_table_id, ret = jQuery("#navgridIX").jqGrid("getRowData", row_id), ack = ret.APIX + ret.PPIX, ackDetArIX = eval("text.partIXtxt.PartIX" + ack);
    $("#" + subgrid_id).html("<table id='" + subgrid_table_id + "' class='scroll'></table><div id='" + pager_id + "' class='scroll'></div>"),
    jQuery("#" + subgrid_table_id).jqGrid({
        data: ackDetArIX,
        datatype: "local",
        colNames: [bundle_lbl_srNo, lbl_bsr, lbl_dateofdep, lbl_taxPayer_challanSerialNumber, lbl_tot_tax_amt, lbl_bookStat, lbl_demand_payment_flg, lbl_otherAmt + WebRupee],
        colModel: [{
            name: "PIX1",
            align: "right",
            sortable: !1,
            width: 35,
            key: !0
        }, {
            name: "PIX2",
            width: 80,
            sortable: !1,
            align: "center"
        }, {
        	 name: "PIX3",
             sortable: !1,
             width: 102,
             align: "center"
        }, {
            name: "PIX4",
            width: 100,
            sortable: !1,
            align: "center"
        }, {
        	name: "PIX5",
            width: 80,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "PIX6",
            width: 85,
            sortable: !1,
            align: "center"
        }, {
        	name: "PIX7",
            width: 85,
            sortable: !1,
            align: "center"
        }, {
            name: "PIX8",
            width: 80,
            sortable: !1,
            align: "right",
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 15,
        width: 918,
        pager: pager_id,
        viewrecords: !0,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "0"
        }
    });
    jQuery("#" + subgrid_table_id).jqGrid('setGroupHeaders', {
			useColSpanStyle: true,
			groupHeaders:[
			{startColumnName:'PIX2', numberOfColumns: 4,titleText: '<center>Challan Details</center>'}
		]			
    }).trigger("reloadGrid");
}
           
function showModalWindows(e) {
    $("#btnSubmit").attr("disabled", "disabled");
    var a = null
      , r = null
      , t = null;
    null != e && ($("#reqId").attr("value", e.DWNLDREQID),
    a = e.Submitted,
    t = "Excel" == e.viewType ? "Excel" : "Text"),
    null != a && "N" == a ? r = "Request for Form 26AS/Annual Tax Statement " + t + " file has been submitted for the selected Assessment Year. Request Number is " + e.DWNLDREQID + ". The file will be made available in the 'Downloads' section." : null != a && "Y" == a && (r = "Request for Form 26AS/Annual Tax Statement " + t + " file has already been submitted for the selected Assessment Year. Request Number is " + e.DWNLDREQID + ". The file will be made available in the 'Downloads' section."),
    createDialog(r)
}
function getQueryVariable(e) {
    for (var a = window.location.search.substring(1).split("&"), r = 0; r < a.length; r++) {
        var t = a[r].split("=");
        if (t[0] == e)
            return t[1]
    }
    return -1
}
function createDialog(e) {
    return $("<div title='Submit Form 26AS/Annual Tax Statement Request'><p>" + e + "</p></div>").dialog({
        resizable: !1,
        modal: !0,
        width: '450',
        buttons: {
            Ok: function() {
                $(this).dialog("close")
            }
        }
    })
}
function showModalWindow_tp() {
    $("#sbmt_modal").dialog({
        modal: !0,
        open: function() {
            $(".ui-dialog-titlebar-close").hide();
        },
        buttons: {
            OK: function() {
                $(this).dialog("close")
            }
        }
    })
}
function fnClearView() {

	
    var e, a = (e = document.getElementById("viewType")).options[e.selectedIndex].value;
    $("#navgrid").jqGrid("clearGridData"),
    $("#navgridA1").jqGrid("clearGridData"),
    $("#navgridA2").jqGrid("clearGridData"),
    $("#navgridb").jqGrid("clearGridData"),
    $("#navgridc").jqGrid("clearGridData"),
    $("#navgridd").jqGrid("clearGridData"),
    $("#navgridf").jqGrid("clearGridData"),
    $("#navgridf1").jqGrid("clearGridData"),
    $("#navgridf2").jqGrid("clearGridData"),
    $("#navgridG").jqGrid("clearGridData"),
    $("#navgride").jqGrid("clearGridData"),
    $("#navgridH").jqGrid("clearGridData"),
    "HTML" == a && (chkyear = "",
    $("#btnSubmit").attr("disabled", !1)),
    "PDF" == a || "Text" == a || "Excel" == a ? ($("#partDLinkBox").css({
        color: "grey",
        cursor: "default"
    }),
    $("#partFLinkBox").css({
        color: "grey",
        cursor: "default"
    }),
    $("#partGLinkBox").css({
        color: "grey",
        cursor: "default"
    }),
    $("#btnSubmit").attr("disabled", !1)) : ($("#partDLinkBox").css({
        color: "black",
        cursor: "pointer"
    }),
    $("#partFLinkBox").css({
        color: "black",
        cursor: "pointer"
    }),
    $("#partGLinkBox").css({
        color: "black",
        cursor: "pointer"
    }))
}
function getPartDdata() {
    if ("HTML" != document.getElementById("viewType").value)
        return !1;
    $.ajax({
        type: "POST",
        url: "http://localhost:3001/serv/tapn/srv/TDS26ASServlet",
        data: "reqtype=PartD&assessYear=" + assYrSelVal + "&viewType=HTML",
        dataType: "json",
        success: fillD26ASData,
        error: function(e, a, r) {
            500 == e.status ? errorFunc(e, a, r) : 410 == e.status ? (alert(expiredMessage),
            window.location = redirectTo) : fillD26ASData()
        }
    })
}
function getPartFdata() {
    if ("HTML" != document.getElementById("viewType").value)
        return !1;
    $.ajax({
        type: "POST",
        url: "http://localhost:3001/serv/tapn/srv/TDS26ASServlet",
        data: "reqtype=PartF&assessYear=" + assYrSelVal + "&viewType=HTML",
        dataType: "json",
        success: fillF26ASData,
        error: function(e, a, r) {
            500 == e.status ? errorFunc(e, a, r) : 410 == e.status ? (alert(expiredMessage),
            window.location = redirectTo) : fillF26ASData()
        }
    })
}
function getPartGdata() {
    if ("HTML" != document.getElementById("viewType").value)
        return !1;
    $.ajax({
        type: "POST",
        url: "http://localhost:3001/serv/tapn/srv/TDS26ASServlet",
        data: "reqtype=PartG&assessYear=" + assYrSelVal + "&viewType=HTML",
        dataType: "json",
        success: fillG26ASData,
        error: function(e, a, r) {
            500 == e.status ? errorFunc(e, a, r) : 410 == e.status ? (alert(expiredMessage),
            window.location = redirectTo) : fillG26ASData()
        }
    })
}
function fillD26ASData(e) {
    var a, r;
    $("#partDLinkBox").hide(),
    r = "N",
    null != e && (e.partdtxt && (a = e.partdtxt.detD),
    r = e.countMax),
    dClick || (jQuery("#navgridd").jqGrid("setGridParam", {
        data: a,
        beforeRequest: function() {
            try {
                null != a && 0 != a.length || (jQuery("#navgridd")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridd").p.page = 0
            }
        },
        datatype: "local"
    }).trigger("reloadGrid"),
    dClick = !1),
    "B" == r ? ($("#partDLinkBox").show(),
    $("#message").text(err_tpReg),
    document.getElementById("pdfBtn").disabled = !0) : "Y" != r ? (jQuery("#navgridd").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: a,
        beforeRequest: function() {
            try {
                null != a && 0 != a.length || (jQuery("#navgridd")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridd").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_ayRefPaid, lbl_modeofpaymnt, lbl_tan_pan_26AS, lbl_source_26AS, lbl_amtofRef + WebRupee, lbl_interest + WebRupee, lbl_dateRefPaid, lbl_remarks],
        colModel: [{
            name: "D1",
            align: "right",
            sortable: !1,
            width: 50
        }, {
            name: "D2",
            sortable: !1,
            align: "center",
            width: 150
        }, {
            name: "D3",
            sortable: !1,
            align: "center",
            width: 100
        }, {
            name: "D4",
            sortable: !1,
            align: "center",
            width: 100
        }, {
            name: "D5",
            sortable: !1,
            align: "center",
            width: 100
        }, {
            name: "D6",
            sortable: !1,
            align: "right",
            width: 100,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "D7",
            sortable: !1,
            align: "right",
            width: 100
        }, {
            name: "D8",
            sortable: !1,
            align: "center",
            width: 100
        }, {
            name: "D9",
            align: "center",
            width: 100
        }],
        rowNum: 10,
        width: 950,
        pager: "#pagernavd",
        viewrecords: !0,
        caption: lbl_partDhed,
        hiddengrid: !1,
        subGrid: !1,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        }
    }).trigger("reloadGrid"),
    $("#gridWrapperD").show()) : ($("#partDLinkBox").show(),
    showModalWindow_traces())
}
function fillF26ASData(r) {
    var e, a, t, i, d, l, o;
    $("#partFLinkBox").hide(),
    a = "N",
    null != r && (r.partftxt && (e = r.partftxt.detF),
    r.partfsum && (t = (l = r.partfsum.split("^"))[0],
    i = l[1],
    d = l[2]),
    a = r.countMax),
    fClick || (jQuery("#navgridf").jqGrid("setGridParam", {
        data: e,
        beforeRequest: function() {
            try {
                null != e && 0 != e.length || (jQuery("#navgridf")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridf").p.page = 0
            }
        },
        datatype: "local"
    }).trigger("reloadGrid"),
    fClick = !1),
    "B" == a ? ($("#partFLinkBox").show(),
    $("#message").text(err_tpReg),
    document.getElementById("pdfBtn").disabled = !0) : "Y" != a ? (jQuery("#navgridf").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: e,
        beforeRequest: function() {
            try {
                null != e && 0 != e.length || (jQuery("#navgridf")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridf").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_ackNo, lbl_namdctee, lbl_pandctee, lbl_transDate, lbl_totTransAmt + WebRupee, lbl_tot_tds_depo + WebRupee, lbl_otherAmt + WebRupee],
        colModel: [{
            name: "1F",
            align: "right",
            sortable: !1,
            width: 35
        }, {
            name: "FF",
            sortable: !1,
            align: "center",
            width: 80
        }, {
            name: "3F",
            sortable: !1,
            align: "center",
            width: 200
        }, {
            name: "FF4",
            sortable: !1,
            align: "center",
            width: 85
        }, {
            name: "5F",
            sortable: !1,
            align: "center",
            width: 85
        }, {
            name: "6F",
            sortable: !1,
            align: "right",
            width: 85,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "7F",
            sortable: !1,
            align: "right",
            width: 80,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "8F",
            sortable: !1,
            align: "right",
            width: 80,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 10,
        width: 950,
        pager: "#pagernavf",
        viewrecords: !0,
        caption: lbl_partFhed,
        hiddengrid: !1,
        subGrid: !0,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        },
        footerrow: !0,
        userDataOnFooter: !0,
        subGridRowExpanded: function(e, a) {
			if (assYrSelVal >= '2023' ){
				subGrdVII(e, a, r)
			}else{
				subGrdF(e, a, r)
			}
        }
    }).trigger("reloadGrid"),
    (o = $("#navgridf").closest(".ui-jqgrid-bdiv").next(".ui-jqgrid-sdiv").find(".footrow")).find('>td[aria-describedby="navgridf_1F"]').css("background", "#99CCFF"),
    o.find('>td[aria-describedby="navgridf_FF"]').css("background", "#99CCFF"),
    o.find('>td[aria-describedby="navgridf_3F"]').css("background", "#99CCFF"),
    o.find('>td[aria-describedby="navgridf_FF4"]').css("background", "#99CCFF"),
    o.find('>td[aria-describedby="navgridf_5F"]').css("background", "#99CCFF"),
    o.find('>td[aria-describedby="navgridf_6F"]').css("background", "#99CCFF"),
    o.find('>td[aria-describedby="navgridf_7F"]').css("background", "#99CCFF"),
    o.find('>td[aria-describedby="navgridf_8F"]').css("background", "#99CCFF"),
    $("#navgridf").parents("div.ui-jqgrid-bdiv").css("max-height", "200px"),
    jQuery("#navgridf").jqGrid("footerData", "set", {
        "3F": "Gross Total Across Deductee(s)",
        "6F": t,
        "7F": i,
        "8F": d
    }),
    $("#gridWrapperF").show(),
    $("#gridWrapperF1").show(),
    $("#gridWrapperF2").show()) : ($("#partFLinkBox").show(),
    showModalWindow_traces())
}
function fillG26ASData(r) {
    var e, a;
    $("#partGLinkBox").hide(),
    a = "N",
    null != r && (r.partGtxt && (e = r.partGtxt.detG),
    a = r.countMax),
    gClick || (jQuery("#navgridG").jqGrid("setGridParam", {
        data: e,
        beforeRequest: function() {
            try {
                null != e && 0 != e.length || (jQuery("#navgridG")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridG").p.page = 0
            }
        },
        dataype: "local",
        emptyrecords: erro_26AsNoData,
        subGridRowExpanded: function(e, a) {
            subGrdG(e, a, r)
        }
    }).trigger("reloadGrid"),
    gClick = !1),
    "B" == a ? ($("#partGLinkBox").show(),
    $("#message").text(err_tpReg),
    document.getElementById("pdfBtn").disabled = !0) : "Y" != a ? (jQuery("#navgridG").jqGrid({
        datatype: "local",
        emptyrecords: erro_26AsNoData,
        data: e,
        beforeRequest: function() {
            try {
                null != e && 0 != e.length || (jQuery("#navgridG")[0].p.page = 0)
            } catch (e) {
                jQuery("#navgridG").p.page = 0
            }
        },
        colNames: [bundle_lbl_srNo, lbl_financialYear, lbl_shortPay, lbl_shortDeduction, lbl_deflts_pymnt_int, lbl_deflts_ded_int, lbl_late_flng_levy, lbl_intrst, lbl_partGTD],
        colModel: [{
            name: "1G",
            align: "right",
            sortable: !1,
            width: 35
        }, {
            name: "TG",
            sortable: !1,
            align: "center",
            width: 80
        }, {
            name: "3G",
			sortable: !1,
            align: "center",
            width: 85,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "4G",
            sortable: !1,
            align: "center",
            width: 85,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "5G",
            sortable: !1,
            align: "center",
            width: 85,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "6G",
            sortable: !1,
            align: "center",
            width: 80,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "7G",
            sortable: !1,
            align: "center",
            width: 80,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "8G",
            sortable: !1,
            align: "center",
            width: 60,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }, {
            name: "9G",
            sortable: !1,
            align: "center",
            width: 70,
            formatter: "currency",
            formatoptions: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2
            }
        }],
        rowNum: 10,
        width: 950,
        pager: "#pagernavG",
        viewrecords: !0,
        caption: lbl_partGhed,
        hiddengrid: !1,
        subGrid: !0,
        height: "100%",
        jsonReader: {
            repeatitems: !1,
            id: "srno"
        },
        subGridRowExpanded: function(e, a) {
            subGrdG(e, a, r)
        }
    }).trigger("reloadGrid"),
    $("#gridWrapperG").show()) : ($("#partGLinkBox").show(),
    showModalWindow_traces())
}
function errorFunc(e, a, r) {
    $("#partDLinkBox").show(),
    $("#partFLinkBox").show(),
    $("#partGLinkBox").show(),
    $("#gridWrapperD").hide(),
    $("#gridWrapperF").hide(),
    $("#gridWrapperF1").hide(),
    $("#gridWrapperF2").hide(),
    $("#gridWrapperG").hide(),
    $("#message").text(err_invalidDetails)
}

function updatePart(){
	var fy, assYrSel = (e = document.getElementById("AssessmentYearDropDown")).options[e.selectedIndex].value;
	if(assYrSel>=2023)
		updateNameFY23();
	else
		updateName();
}
function updateNameFY23(){
	lbl_partAhed= lbl_part1hed;
	lbl_partA1hed= lbl_part2hed;
	lbl_partA2hed= lbl_part4hed;
	lbl_partBhed= lbl_part5hed;
	lbl_partDhed= lbl_part6hed;
	lbl_partFhed= lbl_part7hed;
	lbl_partGhed= lbl_part8hed;
	$("#infomsgh").hide();
	$("#partG_msg").hide();
	$("#partVIII_msg").show();
	$("#NoteSpace").hide();
	$(".partIX_msg").show();
}

function updateName(){
	lbl_partAhed= lbl_partAhed_1;
	lbl_partA1hed= lbl_partA1hed_1;
	lbl_partA2hed= lbl_partA2hed_1;
	lbl_partBhed= lbl_partBhed_1;
	lbl_partDhed= lbl_partDhed_1;
	lbl_partFhed= lbl_partFhed_1;
	lbl_partGhed= lbl_partGhed_1;
	$("#partG_msg").show();
	$("#infomsgh").show();
	$("#partVIII_msg").hide();
	$("#NoteSpace").show();
	$(".partIX_msg").hide();	
}
$(document).ready(function() {
    $("#btnSubmit").attr("disabled", !1);
    var e, a = getQueryVariable("err");
    "Y" == a ? (viwType = getQueryVariable("viewType"),
    assYrVal = getQueryVariable("assessYear"),
    document.getElementById("downCount").value = a,
    document.getElementById("viewType").value = viwType,
    document.getElementById("AssessmentYearDropDown").value = assYrVal) : (e = getQueryVariable("showWindow"),
    tp = getQueryVariable("tp"),
    "Y" == e && (viewType = getQueryVariable("viewType"),
    assYrSelVal = getQueryVariable("assessYear"),
    document.getElementById("viewType").value = viewType,
    document.getElementById("AssessmentYearDropDown").value = assYrSelVal,
    ("Y" == tp ? showModalWindow_tp : showModalWindow_traces)()))
});
