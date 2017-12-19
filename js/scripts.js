$(function () {
    // // ############ MODAL
    // ABRIR
    $('[data-toggle="wc_modal"]').on('click', function () {
        var _this = $(this);
        var _target = _this.data('target');
        var modal = $(_target);
        var modal_acao = $(_target + ' .wc_modal-dialog'); 

        modal.fadeIn().css('display', 'block');
        modal_acao.animate({"top": "0"}, 250);

        return false;
    });

    //FECHAR MODAL
    $('.wc_modal').on('click', function (e) {
        var modal = $(this);
        var target = $(e.target); 
        var modal_acao = $('#' + target[0].id + ' .wc_modal-dialog');
        
        if (!target.closest('.wc_modal-dialog').length) {
            modal_acao.animate({"top": "-100%"}, 250);
            modal.fadeOut('fast');
        }
    });

    //FECHAR MODAL - BOTÃO
    $('[data-close="wc_modal"]').on('click', function () {
        var _this = $(this);
        var modal = _this.closest('.wc_modal');
        var modal_acao = $('#' + modal[0].id + ' .wc_modal-dialog');
        
        modal_acao.animate({"top": "-100%"}, 250);
        modal.fadeOut('fast');
        return false;
    });
});


function OpenModal(modal) {
    $(modal).fadeIn().css('display', 'block');
    $(modal + ' .wc_modal-dialog').animate({"top": "0"}, 250);
}

function CloseModal(modal) {
    $(modal + ' .wc_modal-dialog').animate({"top": "-100%"}, 250);
    $(modal).fadeOut('fast');
}
