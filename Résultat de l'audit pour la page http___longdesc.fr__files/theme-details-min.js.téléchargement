$(document).ready(function(){var b=$("select[id='result.theme'] > option[selected]").attr("value"),h=false,i=false,a=false,d=false,e,c;
$(".inputs-list  input[checked]").each(function(j){var k=$(this).attr("value");
if(k==="PASSED"){h=true
}else{if(k==="FAILED"){a=true
}else{if(k==="NEED_MORE_INFO"){i=true
}else{if(k==="NOT_APPLICABLE"){d=true
}}}}});
e=(b==="all-theme"&&h&&i&&a&&d)?true:false;
c=$(".theme-details");
if(e){c.hide()
}var f=window.location.hash.substring(1).toString();
var g;
if(f.charAt(6).match("^\\d")){g="theme"+f.charAt(5)+f.charAt(6)+"-details"
}else{g="theme"+f.charAt(5)+"-details"
}$(".theme-info .hide-theme-details-link-icon").each(function(l){var k=$(this).parent().parent().parent().parent().next(c)[0].id,m;
if(e){var j="false";
if(k===g){j="true"
}m=$("<a>",{href:"#"+k,title:$(this).next().attr("alt"),"aria-expanded":j,"aria-controls":k});
$(this).parent().parent().parent().addClass("collapsed");
$(this).next().andSelf().wrapAll(m);
if(k!==g){hidePanel($(this).parent(),c)
}else{showPanel($(this).parent(),c)
}}else{m=$("<a>",{href:"#"+k,title:$(this).attr("alt"),"aria-expanded":"true","aria-controls":k});
$(this).next().andSelf().wrapAll(m);
showPanel($(this).parent(),c)
}});
$("#collapse-all").css("display","inline-block").attr("aria-controls","all-themes");
$("#expand-all").css("display","inline-block").attr("aria-controls","all-themes");
$(".theme-info  a").click(function(){if($(this).attr("aria-expanded")=="false"){showPanel($(this),c)
}else{hidePanel($(this),c)
}return false
});
$(".theme-label > h3").click(function(){$(this).parent().prev("div").find("a:nth-child(1)").click()
});
$("#expand-all").click(function(){$(".theme-info  a").each(function(){if($(this).attr("aria-expanded")=="false"){showPanel($(this),c)
}})
});
$("#collapse-all").click(function(){$(".theme-info  a").each(function(){if($(this).attr("aria-expanded")=="true"){hidePanel($(this),c)
}})
})
});
function showPanel(b,c){b.attr("aria-expanded",true).parent().parent().parent().parent().next(c).show();
b.parent().parent().parent().removeClass("collapsed");
var d=b.children(".hide-theme-details-link-icon"),a;
d.show();
b.attr("title",d.attr("alt"));
b.children(".show-theme-details-link-icon").hide();
a=b.parent().siblings(".theme-result-repartition");
toggleIconResult(a,false)
}function hidePanel(b,c){b.attr("aria-expanded",false).parent().parent().parent().parent().next(c).hide();
b.parent().parent().parent().addClass("collapsed");
var d=b.children(".show-theme-details-link-icon"),a;
d.show();
b.attr("title",d.attr("alt"));
b.children(".hide-theme-details-link-icon").hide();
a=b.parent().siblings(".theme-result-repartition");
toggleIconResult(a,true)
}function toggleIconResult(d,b){var c="-m-gray.png",a="-m.png";
if(b){changeSelectionSrc(d.children('img[src$="ico-passed'+c+'"]'),"ico-passed"+c,"ico-passed"+a);
changeSelectionSrc(d.children('img[src$="ico-failed'+c+'"]'),"ico-failed"+c,"ico-failed"+a);
changeSelectionSrc(d.children('img[src$="ico-nmi'+c+'"]'),"ico-nmi"+c,"ico-nmi"+a);
changeSelectionSrc(d.children('img[src$="ico-na'+c+'"]'),"ico-na"+c,"ico-na"+a);
changeSelectionSrc(d.children('img[src$="ico-nt'+c+'"]'),"ico-nt"+c,"ico-nt"+a)
}else{changeSelectionSrc(d.children('img[src$="ico-passed'+a+'"]'),"ico-passed"+a,"ico-passed"+c);
changeSelectionSrc(d.children('img[src$="ico-failed'+a+'"]'),"ico-failed"+a,"ico-failed"+c);
changeSelectionSrc(d.children('img[src$="ico-nmi'+a+'"]'),"ico-nmi"+a,"ico-nmi"+c);
changeSelectionSrc(d.children('img[src$="ico-na'+a+'"]'),"ico-na"+a,"ico-na"+c);
changeSelectionSrc(d.children('img[src$="ico-nt'+a+'"]'),"ico-nt"+a,"ico-nt"+c)
}}if(typeof String.prototype.startsWith!=="function"){String.prototype.startsWith=function(a){return this.slice(0,a.length)===a
}
}function changeSelectionSrc(d,b,c){var a=d.attr("alt");
if(typeof a!==typeof undefined&&a!==false&&a.length>0&&!a.startsWith("0")){var e=d.attr("src").replace(b,c);
d.attr("src",e)
}};