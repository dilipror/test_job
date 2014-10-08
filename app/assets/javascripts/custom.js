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
  var extension = url.split('.');
  if((extension.length > 2) && (/^(www\.|http:\/\/www\.|https:\/\/www\.|http:\/\/|[a-z])[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url)) || url == '')
  {
    $('#spinner').show();
    $.ajax({
      type: 'post',
      url: '/website_urls',
      data: $('form').serialize()
    });
  }else{
    $('#set_flash_message').addClass('alert-error').html('URL is not valid');
  }
}

$(document).ajaxStop(function() {
  $("#spinner").hide();
  $('#website_url_name').val('');
});
