$(document).ready(function(){var a=document.getElementById("snapshot-service-url").textContent.trim();
console.log(a);
if(a.length==0){return
}var b=askSnapshotStatus(a);
console.log(b);
if(b==="CREATED"){updateSnapshotImageSrc(a);
return
}if(b==="JsonParseException"){updateDefaultImageSrc();
return
}if(b==="NOT_EXIST"){askSnapshot(a)
}var d=0;
var c=setInterval(function(){if(askSnapshotStatus(a)==="CREATED"){updateSnapshotImageSrc(a);
clearInterval(c)
}d++;
if(d==8){updateDefaultImageSrc();
clearInterval(c)
}},1000)
});
function updateSnapshotImageSrc(a){updateImageSrc(a)
}function updateDefaultImageSrc(){updateImageSrc(document.getElementById("fail-snapshot-url").textContent.trim())
}function updateImageSrc(b){var a=document.getElementById("snapshot");
a.src=b;
a.removeAttribute("style");
removeHiddenData()
}function askSnapshotStatus(a){var c=new XMLHttpRequest();
a=a.replace("/?","/?status=true");
c.open("GET",a,false);
c.send(null);
try{var b=JSON.parse(c.responseText).status
}catch(d){return"JsonParseException"
}return b
}function askSnapshot(a){var b=new XMLHttpRequest();
b.open("POST",a,false);
b.send(null)
}function removeHiddenData(){removeElement(document.getElementById("snapshot-service-url"));
removeElement(document.getElementById("fail-snapshot-url"))
}function removeElement(a){a.parentNode.removeChild(a)
};