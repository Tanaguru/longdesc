$(document).ready(function(){var a=$(".test-result-detailed").hide();
$(".rule-id .hide-test-details-link-icon").each(function(f){$(this).parent().parent().siblings(".rule-label").addClass("expandable");
var d=$(this).parent().parent().parent().parent().next(a)[0].id,h=$("<a>",{href:"#"+d,"class":"test-expand",title:$(this).next().attr("alt"),"aria-expanded":"false","aria-controls":d});
$(this).next().andSelf().wrapAll(h);
var g=null;
var b=window.location.hash.substring(1).toString();
var e=b.substring(5).toString();
if(e.match(/^\d+\.\d+\.\d+/)){g="r"+e+"-detailed"
}var c=$(this).parent().parent().parent().parent().parent().parent().children(".test-result-detailed").attr("id");
if(g!==null&&c===g){$(this).parent().attr("aria-expanded",true).parent().parent().parent().parent().next(a).show();
$(this).parent().children(".hide-test-details-link-icon").show();
$(this).parent().attr("title",$(this).attr("alt"));
$(this).parent().children(".show-test-details-link-icon").hide()
}else{$(this).hide();
$(this).next().show()
}});
$(".rule-id .test-expand").click(function(){var b;
if($(this).attr("aria-expanded")==="false"){$(this).attr("aria-expanded",true).parent().parent().parent().parent().next(a).show();
b=$(this).children(".hide-test-details-link-icon");
b.show();
$(this).attr("title",b.attr("alt"));
$(this).children(".show-test-details-link-icon").hide()
}else{$(this).attr("aria-expanded",false).parent().parent().parent().parent().next(a).hide();
b=$(this).children(".show-test-details-link-icon");
b.show();
$(this).attr("title",b.attr("alt"));
$(this).children(".hide-test-details-link-icon").hide()
}return false
});
$(".rule-label.expandable").click(function(){$(this).siblings(".rule-id").find(".test-expand").click()
})
});