<!--
function getposOffset(overlay, offsettype){
	var totaloffset=(offsettype=="left")? overlay.offsetLeft : overlay.offsetTop
	var parentEl=overlay.offsetParent
	while (parentEl!=null){
		totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop
		parentEl=parentEl.offsetParent
	}
	return totaloffset
}

function getScrollXY(){
	var scrOfX = 0, scrOfY = 0;
	if(typeof( window.pageYOffset) == 'number'){
		//Netscape compliant
		scrOfY = window.pageYOffset;
		scrOfX = window.pageXOffset;
	}
	else if(document.body && (document.body.scrollLeft || document.body.scrollTop)){
		//DOM compliant
		scrOfY = document.body.scrollTop;
		scrOfX = document.body.scrollLeft;
	}
	else if(document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)){
		//IE6 standards compliant mode
		scrOfY = document.documentElement.scrollTop;	
		scrOfX = document.documentElement.scrollLeft;;
	}
	return [ scrOfX, scrOfY ];
}
getScrollXY();


var agent = navigator.userAgent.toLowerCase();
if(agent.indexOf("opera")!=-1){br="Opera"; var els=document.getElementsByTagName('EMBED');}
if(agent.indexOf("firefox")!=-1){br="Firefox"; var els=document.getElementsByTagName('EMBED');}
if(agent.indexOf("safari")!=-1){br="Safari"; var els=document.getElementsByTagName('OBJECT');}
if(agent.indexOf("chrome")!=-1){br="Chrome"; var els=document.getElementsByTagName('OBJECT');}
if(navigator.appName.toLowerCase().indexOf("microsoft")>-1){br="IE"; var els=document.getElementsByTagName('OBJECT');}

	







//

if(els){
	//alert("els");
	var div=document.createElement('span');
	div.innerHTML="<img src='resize.gif'>";
	//div.innerHTML="&nbsp;";
	if(document.getElementById('vlc')){
		div.style.cssText='position:relative;top:27px;left:-7px;cursor:nw-resize;display:inline;z-index:100;';
	}
	else{
		div.style.cssText='position:relative;top:7px;left:-7px;cursor:nw-resize;display:inline;z-index:100;';
	}
	div.title='Изменить разрешение плеера';
	el=els[0];
	el.parentNode.insertBefore(div,els[0].nextSibling);
	el.parentNode.style.whiteSpace="nowrap"
	div.onmousedown=function(){
		document.onmousemove=function(ev){
			resize_vlc(el,ev);
			//resize_vlc(els,ev);
			return false;
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
		return false;
	}
}

function resize_vlc(obj,e){
	e=(e)?e:(window.event)?event:null,
	ws=getScrollXY();
	var w = e.clientX-getposOffset(obj,'left'); //для изменения по ширине
	if(document.getElementById('vlc')){
		var h = e.clientY-getposOffset(obj,'top')+ws[1]-20;
	}else{
		var h = e.clientY-getposOffset(obj,'top')+ws[1];
	}
	
	if(w>320){
		obj.style.width=w+'px'; //для изменения по ширине
		if(document.getElementById('vlc_panel')){
			document.getElementById('vlc_panel').style.width=w+'px';
		}
		//document.getElementById('MediaPlayer').style.width=w+'px';
	}
	// obj.style.width='95%';
	if(h>240){
		obj.style.height=h+'px';
	}
}
//–> 