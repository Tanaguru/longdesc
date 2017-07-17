$(document).ready(function(){buildResultByThemeChart();
buildPieChart();
buildScoreDonut()
});
buildResultByThemeChart=function(){var d=[],p=[],u=[],q,f,g,o,k,r,m,j,i,s,h,a,c,e,l,t,b;
d3.selectAll("#result-by-theme thead tr").selectAll("th").each(function(w,n){var v={};
v.label=d3.select(this).text();
v.shortLabel="Th"+(n+1);
d.push(v)
});
d3.selectAll("#result-by-theme tbody tr").selectAll("th").each(function(){p.push(d3.select(this).text())
});
d3.selectAll("#result-by-theme tbody tr").each(function(y,w){var x={},v=[],n=w;
x.name=p[w];
d3.select(this).selectAll("td").each(function(C,A){var B=parseInt(d3.select(this).text(),10),z={};
z.x=d[A].label;
z.y=B;
z.themeRank=A+1;
z.resultTypeRank=n;
v.push(z)
});
x.values=v;
u.push(x)
});
q=p.length;
f=d3.layout.stack();
g=f(d3.range(q).map(function(n){var v=u[n].values;
return v
}));
o=d3.max(g,function(n){return d3.max(n,function(v){return v.y0+v.y
})
});
k={top:30,right:70,bottom:100,left:50};
r=700-k.left-k.right;
m=480-k.top-k.bottom;
j=d3.scale.ordinal().domain(d.map(function(n){return n.label
})).rangeRoundBands([0,r],0.3);
i=d3.scale.linear().domain([0,o]).range([m,0]);
s=d3.scale.ordinal().domain([0,q-1]).range(["#ec4d63","#CCCCCC","#a0d261","#5ac2e7"]);
h=buildAxis().scale(j).gridSize(-m-15).tickSize(6,0).orient("bottom");
a=buildAxis().scale(i).tickSize(6,0).ticks(6).gridSize(r).tickPadding(10).tickSubdivide(4).tickFormat(d3.format(",.0f")).orient("left");
e=buildBullet().scale(i).ticks(6).orient("left");
c=buildBullet().scale(j).orient("bottom");
l=d3.select("#result-by-theme-graph").append("svg").attr("width",r+k.left+k.right).attr("height",m+k.top+k.bottom).append("g").attr("transform","translate("+k.left+","+k.top+")");
l.append("g").attr("class","x axis").attr("transform","translate(0,"+m+")").call(h);
l.append("g").attr("class","y axis").call(a).append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em");
t=l.selectAll(".layer").data(g).enter().append("g").attr("class","layer").style("fill",function(v,n){return s(n)
}).style("fill-opacity",1);
b=t.selectAll("rect").data(function(n){return n
}).enter().append("rect").attr("x",function(n){return j(n.x)
}).attr("y",m).attr("width",j.rangeBand()).attr("height",0);
b.append("title").text(function(n){return d[n.themeRank-1].label+" : "+n.y+" "+p[n.resultTypeRank]
});
l.append("g").attr("class","y bullet").call(e);
l.append("g").attr("class","x bullet").attr("transform","translate(0,"+m+")").call(c);
b.transition().delay(function(v,n){return 500
}).attr("y",function(n){return i(n.y0+n.y)
}).attr("height",function(n){return i(n.y0)-i(n.y0+n.y)
});
b.on("click",function(v){location.href=location.href+"#theme"+v.themeRank;
var n=location.href.indexOf("#theme");
if(n!=-1){location.href=location.href.substr(0,n)+"#theme"+v.themeRank
}else{location.href=location.href+"#theme"+v.themeRank
}})
};
buildPieChart=function(){var i=[],h,g,e,b,j,a,f,d,c;
$("#result-synthetized-text").find(".col02").each(function(m,l){if(!$(this).prev("td").hasClass("nt")){var k={};
k.label=$(this).text();
k.value=Math.abs(parseInt($(this).siblings("td").text(),10));
i.push(k)
}});
h={top:5,right:0,bottom:0,left:15};
g=250;
e=175;
b=Math.min(g,e)/2.2;
j=d3.scale.ordinal().range(["#a0d261","#ec4d63","#CCCCCC","#5ac2e7"]);
a=d3.svg.arc().outerRadius(b-10).innerRadius(0);
f=d3.layout.pie().sort(null).value(function(k){return k.value
});
d=d3.select("#result-repartition-pie-graph").append("svg").attr("width",g).attr("height",e).append("g").attr("transform","translate("+((g/2)+h.left)+","+((e/2)+h.top)+")");
c=d.selectAll(".arc").data(f(i)).enter().append("g").attr("class","arc");
c.append("path").attr("d",a).style("fill",function(l,k){return j(k)
}).style("fill-opacity",1);
c.append("title").text(function(k){return k.data.label+" : "+k.value
})
};
buildScoreDonut=function(){var b="audit-score",a=d3.select("#"+b),c,d;
if(a!=null){c=a.select("div:first-child").text();
if(c!="Echec"||c!="Fail"){d=parseInt(c,10);
drawScore(a,d,160,160,2.1,17,"d3-"+b,null,null,true,-44,-28,-1,5,36,15,-5,45,22);
a.select("div").remove()
}}};
buildAxis=function(){var d=d3.scale.linear(),h="bottom",g=6,e=6,a=4,b=0,k=3,j=[10],f=null,i;
function c(l){l.each(function(){var I=d3.select(this);
var K=f==null?d.ticks?d.ticks.apply(d,j):d.domain():f,B=i==null?d.tickFormat?d.tickFormat.apply(d,j):String:i;
var q=svg_axisSubdivide(d,K,tickSubdivide),p=I.selectAll(".minor").data(q,String),D=p.enter().insert("line","g").attr("class","minor"),C=d3.transition(p.exit()).style("opacity",0.000001).remove(),n=d3.transition(p);
var G=I.selectAll("g").data(K,String),y=G.enter().insert("g","path").style("opacity",0.000001),A=d3.transition(G.exit()).style("opacity",0.000001).remove(),s=d3.transition(G).style("opacity",0.5),m;
var w=scaleRange(d),z=I.selectAll(".domain").data([0]),L=d3.transition(z);
var E=d.copy(),F=this.__chart__||E;
this.__chart__=E;
y.append("line").attr("class","tick").attr("y2","0");
y.append("text");
var o=y.select("line"),J=s.select("line"),v=G.select("text").text(B),r=y.select("text"),H=s.select("text");
switch(h){case"bottom":m=svg_axisX;
D.attr("y2",a);
n.attr("x2",0).attr("y2",a);
o.attr("y2",e);
r.attr("y",Math.max(g,0)+k);
J.attr("x2",0).attr("y2",e);
H.attr("x",-10).attr("y",0);
v.attr("dy",".3em").style("text-anchor","end").attr("class","xAxis-label").attr("transform","rotate(-35)");
L.attr("d","M"+w[0]+","+b+"V0H"+w[1]+"V"+b);
break;
case"left":m=svg_axisY;
D.attr("x2",-a);
n.attr("x2",-a).attr("y2",0);
o.attr("x2",e);
r.attr("x",-(Math.max(g,0)+k));
J.attr("x2",e).attr("y2",0);
H.attr("x",-(Math.max(g,0)+k)).attr("y",0);
v.attr("dy",".32em").style("text-anchor","end");
break
}if(d.ticks){y.call(m,F);
s.call(m,E);
A.call(m,E);
D.call(m,F);
n.call(m,E);
C.call(m,E)
}else{var u=E.rangeBand()/2,t=function(x){return E(x)+u
};
y.call(m,t);
s.call(m,t)
}})
}c.scale=function(l){if(!arguments.length){return d
}d=l;
return c
};
c.orient=function(l){if(!arguments.length){return h
}h=l;
return c
};
c.gridSize=function(l){if(!arguments.length){return e
}e=l;
return c
};
c.ticks=function(){if(!arguments.length){return j
}j=arguments;
return c
};
c.tickValues=function(l){if(!arguments.length){return f
}f=l;
return c
};
c.tickFormat=function(l){if(!arguments.length){return i
}i=l;
return c
};
c.tickSize=function(l,o){if(!arguments.length){return g
}var m=arguments.length-1;
g=+l;
a=m>1?+o:g;
b=m>0?+arguments[m]:g;
return c
};
c.tickPadding=function(l){if(!arguments.length){return k
}k=+l;
return c
};
c.tickSubdivide=function(l){if(!arguments.length){return tickSubdivide
}tickSubdivide=+l;
return c
};
return c
};
function svg_axisX(b,a){b.attr("transform",function(c){return"translate("+a(c)+",0)"
});
b.each(function(e,c){if(c%2==0){d3.select(this).select("line").attr("class","no-draw tick")
}})
}function svg_axisX_bullet(b,a){b.attr("transform",function(c){return"translate("+a(c)+",0)"
})
}function svg_axisY(a,b){a.attr("transform",function(c){return"translate(0,"+b(c)+")"
})
}function svg_axisSubdivide(c,h,b){k=[];
if(b&&h.length>1){var o=scaleExtent(c.domain()),k,f=-1,a=h.length,g=(h[1]-h[0])/++b,e,l;
while(++f<a){for(e=b;
--e>0;
){if((l=+h[f]-e*g)>=o[0]){k.push(l)
}}}for(--f,e=0;
++e<b&&(l=+h[f]+e*g)<o[1];
){k.push(l)
}}return k
}function scaleExtent(b){var c=b[0],a=b[b.length-1];
return c<a?[c,a]:[a,c]
}function scaleRange(a){return a.rangeExtent?a.rangeExtent():scaleExtent(a.range())
}buildBullet=function(){var e=d3.scale.linear(),b="bottom",c=[10],a=null;
function d(f){f.each(function(){var m=d3.select(this);
var l=a==null?e.ticks?e.ticks.apply(e,c):e.domain():a;
var j=m.selectAll("g").data(l,String),i=j.enter().insert("g","path"),o=d3.transition(j),k;
var n=e.copy();
this.__chart__=n;
i.append("circle").attr("class","tick").attr("cy","0").attr("r","5");
var h=i.select("circle");
switch(b){case"bottom":k=svg_axisX_bullet;
h.attr("cx",15);
break;
case"left":k=svg_axisY;
h.attr("cx",-3);
break
}o.call(k,n)
})
}d.scale=function(f){if(!arguments.length){return e
}e=f;
return d
};
d.orient=function(f){if(!arguments.length){return b
}b=f;
return d
};
d.ticks=function(){if(!arguments.length){return c
}c=arguments;
return d
};
return d
};