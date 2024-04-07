

$(document).ready(function() {
    $('#cep').mask('00000-000'); 

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(resposta) {
            console.log(resposta)
            const lorgradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${lorgradouro}, ${bairro},  ${cidade},  ${estado}`;
            $('#endereco').val(endereco)

            setTimeout(function() {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 4000);
        })
    })
})