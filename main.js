$(document).ready(function() {
    $('#cep').mask('00000-000');
    
    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        botao.find('i').addClass('d-none');
        botao.find('span').removeClass('d-none');  
                    fetch(endpoint)
                        .then(function(resposta) {
                            if (!resposta.ok) {
                                throw new Error('Erro ao buscar o CEP');
                            }
                            return resposta.json();
                        })
                        .then(function(json) {
                            const logradouro = json.logradouro;
                            const bairro = json.bairro;
                            const cidade = json.localidade;
                            const estado = json.uf;
                            const endereco = `${logradouro}, ${bairro}, ${cidade}, ${estado}`;
                            $('#endereco').val(endereco);
                        })
                        .catch(function(erro) {
                            alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.")
                        })
                        .finally(function() {
                            setTimeout(function() {
                                $(botao).find('i').removeClass('d-none');
                                $(botao).find('span').addClass('d-none');
                            }, 4000);
                        })  
                    })                       
                });
            
            