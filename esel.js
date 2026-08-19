 
var esel_url;
var esel_small;
var esel_big;
var esel_s;
var esel_b;

if (esel_url==undefined){
 document.write('<font color="#FF0000">Скрипту Esel не передана ссылка!<br> Ссылку можно передать в скрипте через переменную <b>esel_url</b>.<br> Подробности на <a href="http://seo-cook.ru/forum" target="_blank">Портале Seo-cook</a>.</font><hr>');
}
if (esel_small==undefined){
 document.write('<font color="#FF0000">Скрипту Esel не передано маленькое изображение!<br> Изображение можно передать в скрипте через переменную <b>esel_small</b>.<br>Подробности на <a href="http://seo-cook.ru/forum" target="_blank">Портале Seo-cook</a>.</font><hr>');
}
if (esel_big==undefined){
 document.write('<font color="#FF0000">Скрипту Esel не передано большое изображение!<br> Изображение можно передать в скрипте через переменную <b>esel_big</b>.<br> Подробности на <a href="http://seo-cook.ru/forum" target="_blank">Портале Seo-cook</a>.</font><hr>');
}
var esel = new Object(); 
// --------------------------------------------------------- MODIFY TARGET URL 
esel.ad_url = escape(esel_url); // Change URL to be redirected to when clicking Peel Away Ad 
// --------------------------------------------------------- END TARGET URL 

if (esel_s==undefined) esel.small_path = 'http://seo-cook.ru/ugla/esel_s.swf'; else esel.small_path = esel_s; // Enter the URL of the Peel Away Corner Flash 
esel.small_image = escape(esel_small); // URL of the Image behind the Peel 
if (esel_s==undefined) esel.big_path = 'http://seo-cook.ru/ugla/esel_b.swf'; else esel.big_path = esel_b; // Enter the URL of the Large Peel Away Corner 
esel.big_image = escape(esel_big); // URL of the Big Image Behind the Peel 

// Do NOT Change anything under this line! ----------------------------------------------------------------------------------- 

esel.small_width = '100'; 
esel.small_height = '100'; 
esel.small_params = 'ico=' + esel.small_image; 
esel.big_width = '650'; 
esel.big_height = '650'; 
esel.big_params = 'big=' + esel.big_image + '&ad_url=' + esel.ad_url; 
function sizeup987(){ 
 document.getElementById('eselcornerBig').style.top = '0px'; 
 document.getElementById('eselcornerSmall').style.top = '-1000px'; 
} 
function sizedown987(){ 
 document.getElementById("eselcornerSmall").style.top = "0px"; 
 document.getElementById("eselcornerBig").style.top = "-1000px"; 
} 
esel.putObjects = function () { 
document.write('<div id="eselcornerSmall" style="position:absolute;width:'+ esel.small_width +'px;height:'+ esel.small_height +'px;z-index:9999;right:0px;top:0px;">'); 
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'); 
document.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0"'); 
document.write(' id="eselcornerSmallObject" width="'+esel.small_width+'" height="'+esel.small_height+'">'); 
document.write(' <param name="allowScriptAccess" value="always"/> '); 
document.write(' <param name="menu" value="false"/>'); 
document.write(' <param name="movie" value="'+ esel.small_path +'?'+ esel.small_params +'"/>'); 
document.write(' <param name="wmode" value="transparent" />'); 
document.write(' <param name="quality" value="high" /> '); 
document.write(' <param name="FlashVars" value="'+esel.small_params+'"/>'); 
document.write('<embed menu="false" src="'+ esel.small_path + '?' + esel.small_params +'" name="eselcornerSmallObject" wmode="transparent" quality="high" width="'+ esel.small_width +'" height="'+ esel.small_height +'" flashvars="'+ esel.small_params +'" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://szenprogs.ru/load/8-1-0-92"></embed>'); 
document.write('</object></div></script>'); 
document.write('<div id="eselcornerBig" style="position:absolute;width:'+ esel.big_width +'px;height:'+ esel.big_height +'px;z-index:9999;right:0px;top:0px;">'); 
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'); 
document.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0"'); 
document.write(' id="eselcornerBigObject" width="'+ esel.big_width +'" height="'+ esel.big_height +'">'); 
document.write(' <param name="allowScriptAccess" value="always"/> '); 
document.write(' <param name="menu" value="false"/>'); 
document.write(' <param name="movie" value="'+ esel.big_path +'?'+ esel.big_params +'"/>'); 
document.write(' <param name="wmode" value="transparent"/>'); 
document.write(' <param name="quality" value="high" /> '); 
document.write(' <param name="FlashVars" value="'+ esel.big_params +'"/>'); 
document.write('<embed menu="false" src="'+ esel.big_path + '?' + esel.big_params +'" id="eselcornerBigEmbed" name="eselcornerBigObject" wmode="transparent" quality="high" width="'+ esel.big_width +'" height="'+ esel.big_height +'" flashvars="'+ esel.big_params +'" swliveconnect="true" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://seo-cook.ru/forum"></embed>'); 
document.write('</object></div>'); 
setTimeout('document.getElementById("eselcornerBig").style.top = "-1000px";',1000); 
} 
esel.putObjects();