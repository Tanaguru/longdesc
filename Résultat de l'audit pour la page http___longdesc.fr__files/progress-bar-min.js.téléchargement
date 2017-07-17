$(document).ready(function(){$("#launch-audit-submit").click(function(){var a=10;
if($("#launch-audit-submit").parent().attr("id").indexOf("relaunch")>=0){$("#launch-audit-submit").attr("disabled","disabled");
setTimeout(function(){$("#launch-audit-submit").removeAttr("disabled")
},1000);
a=1001
}setTimeout(launchProcessDialog,a)
})
});
function launchProcessDialog(){var b=[],a=0;
$(".process-message").each(function(e,c){b.push($(this).text());
$(this).hide()
});
$("#process-anim").show();
$("#process-dialog").append("<p id='process-msg' aria-live='true'>"+b[a]+"</p>").dialog({autoOpen:true,modal:true,title:"",resizable:false,draggable:false,dialogClass:"noCloseBtn",width:300});
setInterval(function(){a++;
$("#process-msg").text(b[a])
},1500)
};