var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// no wait list
$("table.datadisplaytable tbody tr").each(function( index) {
  var available = $( this ).find('td:nth-child(14)');
  var available_text = $.trim(available.text());
  var available_test = available_text !== "0";
  var item = $( this ).find('td:nth-child(16)');
  var item_text = $.trim(item.text());
  var item_test = item_text === "0";
  if ( item_test  && available_test )
	$( this ).addClass("class-open");
  else
	$( this ).addClass("class-closed");
});
$("table.datadisplaytable tbody tr.class-open").css("font-weight", "700");

// simplify document
removeElements = (elms) => elms.forEach(el => el.remove());
removeElements( document.querySelectorAll(".headerwrapperdiv") );
removeElements( document.querySelectorAll(".footerbeforediv") );
removeElements( document.querySelectorAll(".footerlinksdiv") );
removeElements( document.querySelectorAll(".footerafterdiv") );
removeElements( document.querySelectorAll(".globalafterdiv") );
removeElements( document.querySelectorAll(".globalfooterdiv") );
removeElements( document.querySelectorAll(".pagefooterdiv") );
removeElements( document.querySelectorAll(".poweredbydiv") );
removeElements( document.querySelectorAll(".div1") );
removeElements( document.querySelectorAll(".div2") );
removeElements( document.querySelectorAll(".div3") );
removeElements( document.querySelectorAll(".div4") );
removeElements( document.querySelectorAll(".div5") );
removeElements( document.querySelectorAll(".div6") );
removeElements( document.querySelectorAll(".banner_copyright") );
removeElements( document.querySelectorAll("table.plaintable") );
removeElements( document.querySelectorAll("a.skiplinks") );
removeElements( document.querySelectorAll("div.infotextdiv") );
$( "td" ).removeClass( "dddefault" );
$(".datadisplaytable tr td:contains('OCY')").parent().remove();
$(".datadisplaytable tr td:contains('OAN')").parent().remove();
