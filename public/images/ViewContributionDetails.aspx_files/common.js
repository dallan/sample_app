var menuActive = false;var pageLoaded = false;var focusFunctionCalled = false;if(document.layers) reloadPage(true);
function initOnLoad() {pageLoaded = true}
function changeImage(obj, imageFile) {if (useRollover == "yes") {for (var i=0; i < changeImage.arguments.length; i+=2) {document[changeImage.arguments[i]].src = changeImage.arguments[i+1];}}}
function openPopupWindow(windowurl, windowid) {var sWindowID = new String();sWindowID = windowid;var popupWindow = window.open(windowurl, sWindowID, 'width=800, height=475 ,top=0 ,left=' + screen.availWidth - 800 - 10 + ',location=1,menubar=1,scrollbars=1,status=1,toolbar=1,resizable=1');if(popupWindow != null){popupWindow.focus();}}
function helpWindow() {var helpWin = window.open(arguments[0], 'helpWindow', 'width=304,height=475,top=0,left=' + (screen.availWidth - 314) + ',location=0,menubar=1,scrollbars=1,status=0,toolbar=0,resizable=1');helpWin.focus();if(helpWin != null){helpWin.focus();}}
function validateGlobalSearch(formObj) {if (formObj.SearchString.value == "") {alert("Please enter a word or phrase before searching.");return false;}else {return true}}
function confirmAction(strConfTxt) {if (confirm(strConfTxt)) return true; else return false;}
function focusFormField(formId){if (!focusFunctionCalled){for (j=0;j<formId.length;j++) {if (formId.elements[j].type!="hidden" && formId.elements[j].type!="select-one" &&  formId.elements[j].type!="submit" &&  formId.elements[j].type!="button" && !formId.elements[j].readOnly==true && !formId.elements[j].disabled==true) {formId.elements[j].focus();break;}}focusFunctionCalled = true;}}
function redirectBrowser(slctObj,frmObj) {if (slctObj != '') frmObj.action = slctObj;frmObj.submit();}
function isEmail(email){var regE = /^[^\s\n]+\@[a-zA-Z0-9][a-zA-Z0-9\-\.]*\.[a-zA-Z]{2,4}$/;if (email.match(regE)){return true;}else {return false;}}
function ValidateCombo(oCombo, sErrMessage){if (typeof(oCombo) == "undefined") return false; if (oCombo[oCombo.selectedIndex].value != "_") return true;if (sErrMessage != "") alert(sErrMessage);oCombo.focus();return false;}
function ValidateText(oTextbox, oRegEx, sErrMessage){if (typeof(oTextbox) == "undefined") return false;if (typeof(oRegEx) == "undefined") return false;if (oRegEx.test(oTextbox.value)) return true;if (sErrMessage != "") alert(sErrMessage);oTextbox.focus();return false;}
function ValidateText2(oTextbox, oRegEx, sErrMessage) /* Same as ValidateText but with inverted RegEx test */ {if (typeof (oTextbox) == "undefined") return false; if (typeof (oRegEx) == "undefined") return false; if (!oRegEx.test(oTextbox.value)) return true; if (sErrMessage != "") alert(sErrMessage); oTextbox.focus(); return false; }
function ValidateDate(oDay, oMonth, oYear, sErrorMessage){if (!ValidateText(oDay, /^\d{1,2}$/, sErrorMessage)) return false;if (!ValidateText(oMonth, /^\d{1,2}$/, sErrorMessage)) return false;if (!ValidateText(oYear, /^\d{2,4}$/, sErrorMessage)) return false;return true;}
function ValidateTextAsEmail(oTextbox, sErrMessage){if (typeof(oTextbox) == "undefined") return false;if (isEmail(oTextbox.value)) return true;if (sErrMessage != "") alert(sErrMessage);oTextbox.focus();return false;}
function ValidateUnique(oArray, sErrMessage, oFocus){for (var i = 0; i<oArray.length; i++) {for (var j = 0; j<oArray.length; j++){if (i != j) {if (oArray[i] == oArray[j]) {if (sErrMessage != "") alert(sErrMessage);oFocus.focus();return false;}}return true;}}}
function reloadPage(init) {if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {document.pgW=innerWidth; document.pgH=innerHeight; onresize=reloadPage; }}else if (innerWidth!=document.pgW || innerHeight!=document.pgH) location.reload();}
function FadeLyr(iStep,oLyrObj){var oDocElem = document.getElementById(oLyrObj);if(iStep<100) {iStep+=10;oDocElem.style.filter="alpha(Opacity="+iStep+")";setTimeout("FadeLyr(" + iStep + ",'" + oLyrObj + "')",20);}else {iStep=0;}}
function GetElementLeft(eElement) {var nLeftPos = eElement.offsetLeft;var eParElement = eElement.offsetParent;while (eParElement != null){nLeftPos += eParElement.offsetLeft;eParElement = eParElement.offsetParent;}return nLeftPos;}
function GetElementTop(eElement){var nTopPos = eElement.offsetTop;var eParElement = eElement.offsetParent;while (eParElement != null){nTopPos += eParElement.offsetTop;eParElement = eParElement.offsetParent;}return nTopPos;}
function OpenPlainPopupWindow(sWindowURL, sWindowID, iWidth, iHeight) {var sDimension = "width=" + iWidth + ",height=" + iHeight + ",top=0,left=0"; var popupWindow = window.open(sWindowURL, sWindowID, sDimension);if(popupWindow != null){popupWindow.focus();}}
function OpenPlainPopupWindowScroll(sWindowURL, sWindowID, iWidth, iHeight) {var sDimension = "width=" + iWidth + ",height=" + iHeight + ",top=0,left=0,scrollbars=1"; var popupWindow = window.open(sWindowURL, sWindowID, sDimension);if(popupWindow != null){popupWindow.focus();}}
function newWin(url, id, attr) {var winID = new String();winID = id;var win = window.open(url, winID, attr);if(win != null){win.focus();}}
if (typeof expandIt != 'function') {
	function expandIt(id) {
		var o = document.getElementById(id);
		if (o && o.style) {
			if (o.style.display == "none") {o.style.display = 'block';} 
			else {o.style.display = "none";}
		}
	}
}

















