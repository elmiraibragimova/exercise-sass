// To open hidden elements
$('.js-uncap').click(function() {
    var group = $(this).data('group');
    $('.js-hidden[data-group="' + group + '"]').removeClass('js-hidden');
    $(this).removeClass('clicable-row');
    $(this).find('.icon-container').remove();
    $(this).find('.js-view-more').remove();
});



