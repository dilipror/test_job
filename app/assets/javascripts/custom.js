$(document).on('click', '.create_btn', function() {
  validate_and_submit();
  return false
});

$(document).on('keypress', '.text-input', function(e){
  if(e.keyCode == 13){
    validate_and_submit();
    return false
  }  
});

function validate_and_submit(){
  var url = $('#website_url_name').val();
  if(/^(www\.|http:\/\/www\.|https:\/\/www\.|http:\/\/|[a-z])[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url))
  {
    $.ajax({
      type: 'post',
      url: '/website_urls',
      data: $('form').serialize()
    });
    $('#website_url_name').val('');
  }
}
