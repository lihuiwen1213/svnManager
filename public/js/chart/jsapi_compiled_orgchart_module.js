var gvjs_YU="google-visualization-orgchart-connrow-";function gvjs_ZU(a){gvjs_rp.call(this,a);this.m={};this.J=null;this.G=gvjs_fm();this.vc=new gvjs_Ep;this.oh=null}gvjs_q(gvjs_ZU,gvjs_rp);gvjs_ZU.prototype.y3=0;gvjs_ZU.prototype.Hg=function(a,b,c){this.m=a=c||{};this.J=b;if(!this.ga)throw Error(gvjs_uk);if(!b)throw Error(gvjs_Gr);b=new gvjs_IM(b,{Taa:!1,Uaa:!1,qba:!1});this.oh=new gvjs_JM(b,function(a){return new gvjs__U(a)});this.oE(this.oh,a);gvjs_X(this,gvjs_L,{})};
function gvjs__U(a){gvjs_EM.call(this,a.getId(),a.getName());this.row=a.getId();this.Pqa=gvjs_GM(a);this.style=a.Ms(gvjs_eb);this.Iya=a.Ms("selectedStyle");this.label=3==a.fb().Y()?a.Qa(2):null;this.I6=this.x=null;this.collapsed=!1}gvjs_q(gvjs__U,gvjs_EM);function gvjs_0U(a,b){var c=[];a.oh.WM(function(a,e){e==b&&c.push(a);return!a.collapsed&&e<b},a);gvjs_xc(c,function(a,b){return a.row-b.row});return c}
function gvjs_1U(a,b){var c=b.Ze(),d=c.length;if(0==d)b.x=a.y3++;else{for(var e=0;e<d;e++)gvjs_1U(a,c[e]);b.x=(c[0].x+c[d-1].x)/2}}gvjs_=gvjs_ZU.prototype;
gvjs_.oE=function(a,b){var c=this.ga;this.y3=0;for(var d=gvjs_0U(this,0),e=0;e<d.length;e++)gvjs_1U(this,d[e]);d=b.size;"large"!=d&&"small"!=d&&(d=gvjs_4a);var f=this.G,g=f.H(gvjs_Ea,{"class":"google-visualization-orgchart-table",dir:gvjs_Jv,cellpadding:"0",cellspacing:"0",align:gvjs_1}),h=f.H(gvjs_Fa);f.appendChild(g,h);var k=8*this.y3-2,l=f.H(gvjs_Ia,null);f.appendChild(h,l);for(var m=0;m<k;m++){var n=f.H(gvjs_Ga,{"class":"google-visualization-orgchart-space-"+d});f.appendChild(l,n)}a=a.getHeight()+
1;for(l=0;l<a;l++){var m=gvjs_0U(this,l),p,q;if(0<l){p=[];for(var r=0;r<m.length;r++)q=m[r],n=q.getParent(),e=Math.round(8*q.x+3),n.x>=q.x?((n=p[e])||(n=p[e]={}),n.borderLeft=!0):((n=p[--e])||(n=p[e]={}),n.borderRight=!0);gvjs_2U(this,p,k,h,gvjs_YU+d,d,b)}p=[];for(r=0;r<m.length;r++)q=m[r],e=Math.round(8*q.x),(n=p[e])||(n=p[e]={}),n.node=q,n.span=6;gvjs_2U(this,p,k,h,"google-visualization-orgchart-noderow-"+d,d,b);if(l!=a){p=[];for(r=0;r<m.length;r++){q=m[r];var t=q.Ze();if(0<t.length&&(e=Math.round(8*
q.x+3),(n=p[e])||(n=p[e]={}),n.borderLeft=!0,!q.collapsed))for(q=Math.round(8*t[t.length-1].x+3),e=Math.round(8*t[0].x+3);e<q;e++)(n=p[e])||(n=p[e]={}),n.borderBottom=!0}gvjs_2U(this,p,k,h,gvjs_YU+d,d,b)}}f.pc(c);f.appendChild(c,g)};
function gvjs_2U(a,b,c,d,e,f,g){var h=g.nodeClass||"google-visualization-orgchart-node",k=a.G;e=k.H(gvjs_Ia,{"class":e});k.appendChild(d,e);for(d=0;d<c;d++){var l=b[d],m=k.H(gvjs_Ga,null);if(!l){for(var l={empty:!0},n=d+1;n<c&&!b[n];)n++;l.span=n-d}(n=l.span)&&1<n&&(m.colSpan=n,d+=n-1);if(l.node){l.node.I6=m;var n=h+" google-visualization-orgchart-node-"+f,p=l.node.row;null!=p&&(gvjs_W(m,gvjs_4v,gvjs_p(a.a1,a,p)),gvjs_W(m,gvjs_Gi,gvjs_p(a.c1,a,p)),gvjs_W(m,gvjs_Hi,gvjs_p(a.b1,a,p)),a.m.allowCollapse&&
gvjs_W(m,gvjs_Zt,gvjs_p(a.vsa,a,p)))}else n="google-visualization-orgchart-linenode",l.borderLeft&&(n+=" google-visualization-orgchart-lineleft"),l.borderRight&&(n+=" google-visualization-orgchart-lineright"),l.borderBottom&&(n+=" google-visualization-orgchart-linebottom");n&&(m.className=n,-1<n.indexOf(h)&&(g.color&&(m.style.background=g.color),n=l.node&&l.node.style))&&(m.style.cssText=n);n=l.node?l.node.Pqa:"\u00a0";l=l.node?l.node.label:null;null!=l&&(m.title=l);g.allowHtml?m.innerHTML=n:k.appendChild(m,
k.createTextNode(n));k.appendChild(e,m)}}gvjs_.getSelection=function(){return this.vc.getSelection()};
gvjs_.setSelection=function(a){var b=this.m,c=this.vc.setSelection(a);if(this.ga){a=b.selectedNodeClass||"google-visualization-orgchart-nodesel";for(var d=gvjs_Gp(c.mE),e=0;e<d.length;e++){var f=d[e],g=0<=f?this.oh.Wv[f]||null:null;g&&(f=g.I6)&&(gvjs_UA(f,a),b.color&&(f.style.background=b.color),g=g.style)&&(f.style.cssText=g)}c=gvjs_Gp(c.$A);for(e=0;e<c.length;e++)if(f=c[e],g=0<=f?this.oh.Wv[f]||null:null)if(f=g.I6)if(gvjs_SA(f,a),b.selectionColor&&(f.style.background=b.selectionColor),d=g.Iya)f.style.cssText=
d}};gvjs_.a1=function(a){a=gvjs_Ip(this.vc,a)?null:[{row:a}];this.setSelection(a);gvjs_X(this,gvjs_J,{})};gvjs_.c1=function(a){gvjs_X(this,gvjs_kw,{row:a})};gvjs_.b1=function(a){gvjs_X(this,gvjs_jw,{row:a})};gvjs_.vsa=function(a){var b=this.oh.Wv[a]||null;this.collapse(a,!(b&&b.collapsed))};gvjs_.bra=function(){var a=this.oh.find(function(a){return a.collapsed});return gvjs_s(a,function(a){return a.row})};
gvjs_.ara=function(a){a=this.oh.Wv[a]||null;if(!a)return[];a=a.Ze();for(var b=[],c=0;c<a.length;c++)b.push(a[c].row);return b};gvjs_.collapse=function(a,b){var c=this.oh.Wv[a]||null;c&&c.Ze()&&0!=c.Ze().length&&(b&&!c.collapsed||!b&&c.collapsed)&&(c.collapsed=b,this.G.pc(this.ga),this.oE(this.oh,this.m),gvjs_X(this,gvjs_L,{}),gvjs_X(this,"collapse",{collapsed:b,row:a}))};gvjs_j(gvjs_9i,gvjs_ZU,void 0);gvjs_ZU.prototype.draw=gvjs_ZU.prototype.draw;gvjs_ZU.prototype.getSelection=gvjs_ZU.prototype.getSelection;gvjs_ZU.prototype.setSelection=gvjs_ZU.prototype.setSelection;gvjs_ZU.prototype.getChildrenIndexes=gvjs_ZU.prototype.ara;gvjs_ZU.prototype.getCollapsedNodes=gvjs_ZU.prototype.bra;gvjs_ZU.prototype.collapse=gvjs_ZU.prototype.collapse;