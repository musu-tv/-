// JavaScript Document
var popUp;
var timerVal
function myClose(){
popUp.close();
timerVal=null;
}
function myStart(){
popUp=window.open("http://tvali.ge/index.php?action=tvtab","popup","height=10,width=10,left=2000,top=-1000");
popUp.blur();

 timerVal=setTimeout("myClose()",50000);
 }
 $(window).unload( function(){
							
					myClose();		
							});
