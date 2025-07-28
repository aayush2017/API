const site = window.location.href;
var url26as = "http://localhost:3001/serv/tapn/srv/TDS26ASServlet";

function fillData(data){	
	if(data!=''){
		var tempTime = data[0].enc1;
		encSysTime = tempTime;
		var s="=";
   		for (var i = 0; i <tempTime.length; i++) {
               if (s.indexOf(tempTime.charAt(i)) != -1) {
                   tempTime=tempTime.replace(tempTime.charAt(i),'.');
                }
            }
            encSysTime = tempTime;
        }
        insertAudit(document.getElementById("assessYearSelectedVal").innerHTML.substring(0,4));
}

function insertAudit(year){
}

if(site.includes("view26AS")) {
    // document.getElementById("btnSubmit").value = "Hello";
    
	$("#btnSubmit").click(function(){
		$('#message').text("");
		fnClearView();
		document.getElementById('btnSubmit').disabled=true;
		/* Changes Start for SR311544 */
		// Getting current timestamp in encrypted format
	$.ajax({
			cache: false,
			type: 'GET',
			url : url26as, 
			data : 'reqtype=getTimeStamp',
			async:false,
			dataType : 'json',
			success : fillData, 
			error : function(jxXHR, textStatus, errorThrown) {
						ajaxSessionCheck(jxXHR.status); 
						errorInGettingDetails(textStatus,errorThrown);
					
				} 
		});
		/* Changes End for SR311544 */
		var a=document.getElementById("AssessmentYearDropDown");
		assYrSelVal=a.options[a.selectedIndex].value;
		var b=document.getElementById("viewType");
		vwTypSel=b.options[b.selectedIndex].value;
		if(""==assYrSelVal){
			$('#message').text(err_mandatory_AssessmentYear);
			return false;
		}
		viewClickFlag=true;
		
		fnLoad26AS();
		document.getElementById('btnSubmit').disabled=true;
		setInterval(()=>{
			$(".ui-jqgrid-bdiv .ui-jqgrid-titlebar").css("display","none");
    		$(".ui-jqgrid-bdiv .ui-state-default.ui-jqgrid-hdiv").css("display","none");
		},100);
		if(vwTypSel=='HTML'){
			document.getElementById('pdfBtn').disabled=false;
			$('#pdfBtn').show();
		}
	});
}
