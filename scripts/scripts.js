$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'views/' + $(this).data('include') + '.html'
      $(this).load(file)
    })

    document.title = "Endangered Rhinos"

  })

    $('#link').click(function () {
        var src = 'http://www.youtube.com/v/FSi2fJALDyQ&amp;autohttps://www.youtube.com/watch?v=Q8eh58Z249o&t=306slay=1';
        $('#myModal').modal('show');
        $('#myModal iframe').attr('src', src);
    });

    $('#myModal button').click(function () {
        $('#myModal iframe').removeAttr('src');
    });