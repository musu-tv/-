/*  RayV embedding library
    version 2.0
 *--------------------------------------------------------------------------*/

/* Defaults - Start */
var PluginURL = "http://update.rayv.com/viewer/getnewestversion/setup?affiliate=[AFFILIATE]"; //"http://update.rayv.com/viewer/webinstall/rayvplugin.xpi";
var DefaultAltContent = "<a style='text-decoration: none;' id='embedAltContent_downloadlink' href='[DOWNLOAD_URL]'><img src='[IMAGE_PROMPT_URL]' border='0' style='padding: 10px;' alt='Install RayV Viewer' /></a>"; 
var ImagePromptURL = "http://static.rayv-inc.com/ViewerEmbed/images/getRayv.JPG"; /*should be absolute URL*/
/* Defaults - End */

var Rayv = function() {};
Rayv.DetectableWithVB = false;
Rayv.SessionActivated = false;
Rayv.isInstalled = false;
Rayv.onGetRayV = null;
Rayv.onRayVInstalled = function () {window.location.reload(false);};

/* API - Start */
Rayv.Embed = function(containerElementId,embedParams)
{
    var rayv = new Rayv();
    Rayv.control = rayv;
//    Rayv.isInstalled = false;
    Rayv.isInstalled = Rayv.IsInstalled();
    rayv.containerElement = document.getElementById(containerElementId);
    if (rayv.containerElement != null)
    {
        rayv.setDefaultParams(embedParams);
        rayv.sortEmbedParams();
        rayv.embed();
    }
}

Rayv.IsPlatformSupported = function()
{
    var os = Rayv.GetOSType();
    var browser = Rayv.GetBrowserType();
    
    if (((os == "X" || os == "V") && (browser == "IE" || browser == "FF")) ||
        ((os == "M") && (browser == "SA" || browser == "FF"))) {
        return true;
    }
    
    return false;
}

Rayv.GetRayvViewerObject = function()
{
    if (Rayv.control.browserType=="IE")
    {
        return document.getElementById(Rayv.control.embedParams["id"]);
    }
    else
    {
        return document.embeds[Rayv.control.embedParams["name"]];
    }
}
/* API - End */




/* Global Functions - Start */
Rayv.GetOSType = function()
{
    var type="O";
    if (navigator.userAgent.toLowerCase().indexOf("windows nt 5")!=-1) type="X";
    else if (navigator.userAgent.toLowerCase().indexOf("windows nt 6")!=-1) type="V";
    else if (navigator.userAgent.indexOf("Mac")!=-1) type="M";
    else if (navigator.userAgent.indexOf("X11")!=-1) type="U";
    else if (navigator.userAgent.indexOf("Linux")!=-1) type="L";
    return type;
}

Rayv.GetBrowserType = function()
{
    var type="OT";
    if (navigator.userAgent.indexOf("Firefox")!=-1) type="FF";
    else if(navigator.userAgent.indexOf("MSIE")!=-1) type="IE";
    else if(navigator.userAgent.indexOf("Safari")!=-1) 
    {
        
        if (navigator.userAgent.indexOf("Version/4.") != -1) 
        {
            type="SA4";
        }
        else
        {
            type="SA";
        }    
    }
    
    return type;
}



Rayv.IsInstalled = function()
{
      var attempt = false
    
      // if plugins array is there and not fake
      if (navigator.plugins && navigator.plugins.length > 0)
      {
            var pluginsArrayLength = navigator.plugins.length;
            // for each plugin...
            for (pluginsArrayCounter=0; pluginsArrayCounter < pluginsArrayLength; pluginsArrayCounter++)
            {
                  // if desired plugin name is found in either plugin name or description
                  if( (navigator.plugins[pluginsArrayCounter].name.indexOf('RayV') >= 0) || 
                  (navigator.plugins[pluginsArrayCounter].description.indexOf('RayV') >= 0) )
                  {
                        return true;
                  }
            }
            
            attempt = true;
      }
    
      if (Rayv.DetectableWithVB)
      {
            if (detectActiveXControl('rayvactivex.RayVActiveXCtrl'))
                  return true;
                
            attempt = true;
      }

      if (!attempt)
      {
            // If we have no method to detect installed plugins assume it's installed
            return true;
      }
      
      return false;

}






/* Global Functions - End */

/* Prototype Functions - Start */

/* defaults parameters will be used if not expicitely specefied by embed script*/
Rayv.prototype.setDefaultParams = function(embedParams)
{
    if (!embedParams) embedParams = new Object();
    this.embedParams = embedParams;
    
    if (typeof(this.embedParams["id"])=="undefined") this.embedParams["id"] = this.containerElement.id+"RayvEmbed";
    if (typeof(this.embedParams["name"])=="undefined") this.embedParams["name"] = this.embedParams["id"];
    
    if (this.embedParams["Affiliate"]==undefined || this.embedParams["Affiliate"]=="") this.embedParams.Affiliate = "Rayv";
    if (this.embedParams["ChannelID"]==undefined || this.embedParams["ChannelID"]=="") this.embedParams.ChannelID = "start";
    if (this.embedParams["SessionActive"]==undefined || this.embedParams["SessionActive"]=="") this.embedParams.SessionActive = "1";
    if (this.embedParams["InstallMode"]==undefined || this.embedParams["InstallMode"]=="") this.embedParams.InstallMode = "OnClick";
    if (this.embedParams["CoverImageURL"]==undefined || this.embedParams["CoverImageURL"]=="") this.embedParams.CoverImageURL = ImagePromptURL;
    
    this.coverImageUrl = this.embedParams["CoverImageURL"];
    this.installMode = this.embedParams.InstallMode.toLowerCase();
    this.osType = Rayv.GetOSType();
    this.browserType = Rayv.GetBrowserType();
    
    this.embedParams["width"] = this.getStyle("width");
    this.embedParams["height"] = this.getStyle("height");
    this.embedParams["classid"] = "CLSID:3B1E1AB9-98C2-4B7E-AE01-59C84302BBDB";
    this.embedParams["type"] = "application/x-rayv-plugin" ;
    this.embedParams["data"] = "data:application/x-rayv-plugin," ;
    this.embedParams["pluginspage"] = PluginURL.replace("[AFFILIATE]", this.embedParams.Affiliate);
    if (this.osType=="M") this.embedParams["pluginspage"] += "&product=vmac";
    
    
}

Rayv.prototype.useMIMEObject = function()
{
//    var res=!(Rayv.IsInstalled() && Rayv.GetBrowserType() == 'FF');
    var res=!(Rayv.IsInstalled() );
    return 	res;
}

Rayv.prototype.sortEmbedParams = function()
{
    this.objectAttributes = new Object();
    this.objectParameters = new Object();
    this.embedAttributes = new Object();
    
    for (var i in this.embedParams)
    {
        switch (i)
        {	
            case "data":
                if ( this.useMIMEObject()) 
                {
                    this.objectAttributes[i] = this.embedParams[i];                    
                }
                break;

            case "type":
                if ( this.useMIMEObject()) 
                {
                    this.embedAttributes[i] = this.objectAttributes[i] = this.embedParams[i];
                    
                    
                }
                else
                {
                    this.embedAttributes[i] = this.embedParams[i];
                    
                }
                break;
            case "classid":
                if( !this.useMIMEObject())  // new installation should be using mime type, existing installation should use activeX meanwhile                
                {
                    this.objectAttributes[i] = this.embedParams[i];
                }
                break;
            case "pluginspage":
                break;
            case "src":
                this.embedAttributes[i] = this.embedParams[i];
                break;
            case "ondeactivate":
                this.objectAttributes[i] = this.embedParams[i];
                break;
            case "codebase":
            case "id":
            case "onafterupdate":
            case "onbeforeupdate":
            case "onblur":
            case "oncellchange":
            case "onclick":
            case "ondblClick":
            case "ondrag":
            case "ondragend":
            case "ondragenter":
            case "ondragleave":
            case "ondragover":
            case "ondrop":
            case "onfinish":
            case "onfocus":
            case "onhelp":
            case "onmousedown":
            case "onmouseup":
            case "onmouseover":
            case "onmousemove":
            case "onmouseout":
            case "onkeypress":
            case "onkeydown":
            case "onkeyup":
            case "onload":
            case "onlosecapture":
            case "onpropertychange":
            case "onreadystatechange":
            case "onrowsdelete":
            case "onrowenter":
            case "onrowexit":
            case "onrowsinserted":
            case "onstart":
            case "onscroll":
            case "onbeforeeditfocus":
            case "onactivate":
            case "onbeforedeactivate":
            case "width":
            case "height":
            case "align":
            case "vspace": 
            case "hspace":
            case "class":
            case "title":
            case "accesskey":
            case "name":
            case "tabindex":
                this.embedAttributes[i] = this.objectAttributes[i] = this.embedParams[i];
                break;
            default:
                this.embedAttributes[i] = this.objectParameters[i] = this.embedParams[i];
        }
    }
}

Rayv.prototype.embed = function()
{
//    if (Rayv.IsInstalled())
//    {
        this.addEmbed(true);
//    }
//    else if (Rayv.IsInstallationInProgress())
//    {    
//        //TODO: start check for install completed ?
//        this.initEmbed();
//    }
    
}

/////////////////////////////////////////////
// returns style elements of container object
///////////////////////////////////////////// 
Rayv.prototype.getStyle = function(styleProp) {
	var style;
	if (this.containerElement.currentStyle) {
        style = this.containerElement.currentStyle[styleProp];
    } else if (window.getComputedStyle) {
		style = document.defaultView.getComputedStyle(this.containerElement, null).getPropertyValue(styleProp);
    }
	return style;
}


Rayv.prototype.addEmbed = function(visible)
{
   
    this.containerElement.innerHTML = this.generateEmbedHTML();

//    this.embedElement = document.createElement("div");

//    this.embedElement.style.width=this.embedParams["width"];
//    this.embedElement.style.height=this.embedParams["height"];

//    this.containerElement.appendChild(this.embedElement);
//    this.embedElement.innerHTML = this.generateEmbedHTML();
//    this.setEmbedVisibility(visible);
}

Rayv.prototype.setEmbedVisibility = function(visible)
{
    if (visible)
    {
        this.embedElement.style.display = "block";
    }
    else
    {
        this.embedElement.style.display = "none";
    }
}

Rayv.prototype.generateAltContent =  function()
{
    var lb = "\n";
    var downloadLinkElem = document.getElementById('embedAltContent_downloadlink');
    if(downloadLinkElem)
     {
        downloadLinkElem.href=this.embedParams["pluginspage"];
     }
    
    var defaultContentElem = document.getElementById('embedAltContent');
    var html = '';
    if (defaultContentElem)
    {
        html= defaultContentElem.innerHTML    ;    
    }
    else
    {
        //build default
        html = DefaultAltContent;
        html = html.replace('[IMAGE_PROMPT_URL]', this.coverImageUrl);
        html = html.replace('[DOWNLOAD_URL]', this.embedParams["pluginspage"]);
    }
    
    
    return html ;
}


Rayv.prototype.generateEmbedHTML = function()
{
    var html="";
    
    if (Rayv.GetBrowserType()=="SA4" && Rayv.GetOSType()=="M")
    {
        //temp workaroun for Safari 4 beta on MAC, use embed only
       if(Rayv.IsInstalled())
       {
            // embed is needed for backword - compatibility, as fallback for activeX
            html += '\n<embed ';
            for (var i in this.embedAttributes)
            {
                html += ''+ i + '="' + this.embedAttributes[i] + '" ';
            }
            html += ' ></embed>' ;
        }
        else
        {
            // no need for alternate content when we r sure that plugin is installed
            html += '\n' + this.generateAltContent();
        }
    
    }
    else
    {
        html = '\n<object ';
        for (var i in this.objectAttributes)
        {
            html += i + '="' + this.objectAttributes[i] + '" ';
        }
        html += '>';
        for (var i in this.objectParameters)
        {
            html += '\n<param name="' + i + '" value="' + this.objectParameters[i] + '" /> ';
        }
        if(!this.useMIMEObject())
        {
            // embed is needed for backword - compatibility, as fallback for activeX
            html += '\n<embed ';
            for (var i in this.embedAttributes)
            {
                html += ''+ i + '="' + this.embedAttributes[i] + '" ';
            }
            html += ' ></embed>' ;
        }
        if(!Rayv.IsInstalled())
        {
            // no need for alternate content when we r sure that plugin is installed
            html += '\n' + this.generateAltContent();
        }
    
        html += '\n</object>';
    }
    
    html += '\n<iframe style=\'visibility:hidden;height:0;width:0;border:0px\'></iframe>';
    return html;
}




/* Prototype Functions - End */

if ((navigator.userAgent.indexOf('MSIE') != -1) && (navigator.userAgent.indexOf('Win') != -1))
{
    document.writeln('<script language="VBscript">');

    document.writeln('\'do a one-time test for a version of VBScript that can handle this code');
    document.writeln('Rayv.DetectableWithVB = False');
    document.writeln('If ScriptEngineMajorVersion >= 2 then');
    document.writeln('  Rayv.DetectableWithVB = True');
    document.writeln('End If');

    document.writeln('\'this next function will detect most plugins');
    document.writeln('Function detectActiveXControl(activeXControlName)');
    document.writeln('  on error resume next');
    document.writeln('  detectActiveXControl = False');
    document.writeln('  If Rayv.DetectableWithVB Then');
    document.writeln('     detectActiveXControl = IsObject(CreateObject(activeXControlName))');
    document.writeln('  End If');
    document.writeln('End Function');

    document.writeln('\'and the following function handles QuickTime');
    document.writeln('Function detectQuickTimeActiveXControl()');
    document.writeln('  on error resume next');
    document.writeln('  detectQuickTimeActiveXControl = False');
    document.writeln('  If Rayv.DetectableWithVB Then');
    document.writeln('    detectQuickTimeActiveXControl = False');
    document.writeln('    hasQuickTimeChecker = false');
    document.writeln('    Set hasQuickTimeChecker = CreateObject("QuickTimeCheckObject.QuickTimeCheck.1")');
    document.writeln('    If IsObject(hasQuickTimeChecker) Then');
    document.writeln('      If hasQuickTimeChecker.IsQuickTimeAvailable(0) Then ');
    document.writeln('        detectQuickTimeActiveXControl = True');
    document.writeln('      End If');
    document.writeln('    End If');
    document.writeln('  End If');
    document.writeln('End Function');

    document.writeln('</scr' + 'ipt>');
}
/ * installattion - detection */
Rayv.WaitForInstallCompletion = function()
{
    if ( ! Rayv.isBrowserRestartRequired && Rayv.onRayVInstalled )
    {
        try
        {
				
            navigator.plugins.refresh();
        }
        catch(e)
        {
			
        }
        if ( Rayv.IsInstalled() )
        {
			
            Rayv.onRayVInstalled();
        }
        else
        {	  
              setTimeout(Rayv.WaitForInstallCompletion, 3000);
        }    
    }
}
Rayv.Init = function()
{
	//TODO : better detection browser restart required
    Rayv.isBrowserRestartRequired = Rayv.IsInstalled();
    if ( !Rayv.isBrowserRestartRequired)
    {
        Rayv.WaitForInstallCompletion();
    }
    if (window.removeEventListener) { 
       window.removeEventListener('load', Rayv.Init , false);
    }
    else { 
        window.detachEvent('onload', Rayv.Init );
    }
}

Rayv.SwitchChannel = function(channelKey)
{
    if (!Rayv.IsInstalled()) {
        return; // skip if rayv not installed
    }
    
    var obj = Rayv.GetRayvViewerObject();
    obj.ChannelID = channelKey;
    obj.SessionActive="1";

}
Rayv.GetSupport = function(channelKey)
{
    if (!Rayv.IsInstalled()) {
        return; // skip if rayv not installed
    }
    
    var obj = Rayv.GetRayvViewerObject();
	obj.DoViewerHelp();

}

/* global functions : start */
if (window.addEventListener) 
{
    window.addEventListener('load', Rayv.Init , false);
}
else 
{
    window.attachEvent('onload', Rayv.Init );
}
/* global functions : end */
