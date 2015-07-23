// To open hidden elements
$('.js-uncap').click(function() {
    var group = $(this).data('group');
    $('.js-hidden[data-group="' + group + '"]').removeClass('js-hidden');
    $(this).removeClass('clicable-row');
    $(this).find('.icon-container').remove();
    $(this).find('.js-view-more').remove();
});


//To hide/open side panels
$('.btn-hide-left-panel').click(function() {
	var $panel = $('.navigation-panel'),
        $btnHide = $('.btn-hide-left-panel'),
        $mainSection = $('#main');

    if ($panel.is(':visible')) {
        $btnHide.css('left', '0');
        $mainSection.css('margin-left', '0');
    } else {
        $btnHide.css('left', '24%');
        $mainSection.css('margin-left', '25%');
    }

    $panel.toggle(0, fixMainPanelWidth);
});

$('.btn-hide-right-panel').click(function() {
    var $panel = $('.addition-info'),
        $btnHide = $('.btn-hide-right-panel'),
        $mainSection = $('#main');

    if ($panel.is(':visible')) {
        $btnHide.css('right', '0');
    } else {
        $btnHide.css('right', '24%');
    }

    $panel.toggle(0, fixMainPanelWidth);
});

function fixMainPanelWidth() {
    var $rightPanel = $('.addition-info'),
        $leftPanel = $('.navigation-panel');

    var width = 50;
    if (!$rightPanel.is(':visible')) {
        width += 25;
    }
    if (!$leftPanel.is(':visible')) {
        width += 25;
    }

    $('#main').css('width', width + '%');
}