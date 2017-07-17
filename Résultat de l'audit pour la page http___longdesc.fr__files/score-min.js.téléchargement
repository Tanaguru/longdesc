function drawScore(D,x,u,s,q,w,B,n,b,i,r,p,m,l,k,A,o,y,C){var v=2*Math.PI,t,j="grade-f",f,h,c,a,e,g,d=0,z;
if(x>90){j="grade-a"
}else{if(x>80){j="grade-b"
}else{if(x>70){j="grade-c"
}else{if(x>60){j="grade-d"
}else{if(x>50){j="grade-e"
}}}}}f=Math.min(u,s)/q;
h=d3.svg.arc().startAngle(0).outerRadius(f-w).innerRadius(f);
c=D.insert("svg",":first-child").attr("width",u).attr("height",s).attr("class","d3-score-graph").append("g").attr("transform","translate("+((u/2))+","+((s/2))+")");
c.append("path").attr("class","background "+j).attr("d",h.endAngle(v));
a=c.append("path").attr("class",j);
if(i){if(r!==null&&p!==null){c.append("text").attr("text-anchor","start").attr("x",r).attr("y",p).attr("dy",".35em").attr("class","d3-score-tanaguru-meter").text("TanaguruMeter")
}e=c.append("text").attr("text-anchor","middle").attr("x",m).attr("y",l).attr("dy",".35em").attr("class","d3-score-text");
g=c.append("text").attr("text-anchor","middle").attr("x",k).attr("y",A).attr("dy",".35em").attr("class","d3-score-percent").text("%")
}if(B!==null){D.attr("id",B)
}else{if(n!==null&&b!==null){D.classed(n,false);
D.classed(b,true)
}}z=setInterval(function(){t=(v*d)/100;
if(i){e.text(d)
}a.attr("d",h.endAngle(t));
if(d==x){if(i&&x==100){e.attr("x",o);
g.attr("x",y)
}else{if(i&&x<10){g.attr("x",C)
}}clearInterval(z)
}d++
},1)
};