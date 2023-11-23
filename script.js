$(document).ready(function(){

    // Variáveis
    minus = 'abcdefghijklmnopqrstuvwxyz';
    maius = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    nums = '1234567890';
    esp = '!@#$5&_?-';





    // Funções
    function geraSenha() {
        caracteres = '';
        caracteres += $('#minus').is(':checked') ? minus : '';
        caracteres += $('#maius').is(':checked') ? maius : '';
        caracteres += $('#nums').is(':checked') ? nums : '';
        caracteres += $('#esp').is(':checked') ? esp : '';

        if (caracteres == '') {
            $('#selecione').modal();
            $("#minus").prop("checked", true);
        } else {

            qtd = Number($('#qtdnum').val());
            senha = '';
            for (let c = 0; c < qtd; c++) {
                senha += caracteres[Math.floor((Math.random() * caracteres.length))];
            }
            
            $('#visor').val(senha);

        }
    }





    // Eventos
    // $('#qtd').mousemove(function(){
    //     $('#qtdnum').val($(this).val());
    // });

    // $('#qtd').mouseup(function(){
    //     geraSenha();
    // });

    $('#qtd').change(function() {
        $('#qtdnum').val($(this).val());
        geraSenha();
    });



    $('#copiar').click(function() {
        if ($('#visor').val().length <= 0) {
            $('#semsenha').modal();
        } else {
            let senha = $('#visor').val();

            const copiar = document.createElement('textarea');
            copiar.value = senha;

            document.body.appendChild(copiar);
            copiar.select();
            document.execCommand('copy');
            document.body.removeChild(copiar);

            $('#copiado').modal();
        }
    });



    $('#gerar').click(function(){ geraSenha(); });
    $('#minus').click(function(){ geraSenha(); });
    $('#maius').click(function(){ geraSenha(); });
    $('#nums').click(function(){ geraSenha(); });
    $('#esp').click(function(){ geraSenha(); });



    











});