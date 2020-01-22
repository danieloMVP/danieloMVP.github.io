// JavaScript Document
$(document).ready( function() {
 $.getJSON('https://spreadsheets.google.com/feeds/cells/1SL5xcqkvDlpDe3o8VDIfbVavpf6TRsyPhzPLA9CD7OE/default/public/full?alt=json',
 function(data) {
 $('#noticias').append("<p>"+data.feed.entry[0].content.$t+"</p>");
$('#noticias').append("<p>"+data.feed.entry[1].content.$t+"</p>");
$('#noticias').append("<p>"+data.feed.entry[2].content.$t+"</p>");
 });
});