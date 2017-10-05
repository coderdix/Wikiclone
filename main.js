
$(document).ready(function() {
  
  function search() {
    var queryData = {
      action: 'query',
      list:   'search',
      srsearch: $('#search').val(),
      format: 'json'
    }
     
     $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      data: queryData,
      dataType: 'json',
      type: 'GET',
      headers: { 'Api-User-Agent': 'Richard Richardson/1.0' },
      success: function(data) {
        var response = '';
        var url      = 'https://en.wikipedia.org/wiki/';
        for (i=0; i < data.query.search.length; i++) {
          response += "<li><a href='"+url+data.query.search[i].title+"' target='_blank'>'"+data.query.search[i].title+"'</a></li>";
        }
        $('#search-results .articles').html(response);
        
      }
    });
    
    $('#search').autocomplete({ source: availableTitles });
  }  
  
  $('#search-submit').click(function(){ search(); });
  
})
  