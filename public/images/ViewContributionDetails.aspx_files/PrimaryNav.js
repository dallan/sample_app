function LoadCssForIE6() 
{
	if (document.all&&document.getElementById) 
	{
		appendHandler(document.getElementById("primaryMenu"));
		appendHandler(document.getElementById("primaryMenuRight"));
		appendHandler(document.getElementById("primaryMenuR1"));
 	}
}

function appendHandler(el) {
	if (el) {var navRoot=el.childNodes[0];}
	if (navRoot&&navRoot.nodeName=="UL") {
		for (var i=0; i<navRoot.childNodes.length; i++) {
			var node=navRoot.childNodes[i];
			if (node.nodeName=="LI") {
				node.onmouseover=function() {
					this.className+=" over";
					
					//Add IFRAME if IE6
					if (/MSIE 6/.test(navigator.userAgent)) {
						var ul=document.getElementById(this.id+"_ul");
						if (ul!=null) {
							var iframeShim=document.getElementById(ul.id+"_hvrShm");
							if (iframeShim!=null) {
								iframeShim.style.display="block";
							} else {
							    var wid=ul.offsetWidth + 3;
							    ul.insertAdjacentHTML("beforeBegin",
									'<iframe style="display:block;position:absolute;z-index:-1;filter:mask();top:'+ul.style.top+';left:'+ul.style.left+';width:'+ wid + ';height:'+ul.offsetHeight+';" '+ 
									'src="BLOCKED SCRIPT" '+ 
									'id="'+ul.id+"_hvrShm"+'" />');
							}
						}
					}
				}
				node.onmouseout=function() {
					this.className=this.className.replace(" over", "");
					
					//Hide IFRAME if IE6
					if (/MSIE 6/.test(navigator.userAgent)) {
						if (!this.contains(event.toElement)) {
							var iframeShim=document.getElementById(this.id+"_ul_hvrShm");
							if (iframeShim) {
								iframeShim.style.display="none";
							}
						}
					}
 				}
 			}
		}
	}
}













































