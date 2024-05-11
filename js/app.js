function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdeIngressos = parseInt(document.getElementById('qtd').value);
    let qtdDisponivel = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);


    if (!tipoIngresso || tipoIngresso.trim() === '') {
        alert(`Selecione um tipo de ingresso válido`);
        return;
    }

    if (!qtdeIngressos || qtdeIngressos === 0) {
        alert(`Selecione uma quantidade de ingressos válido`);
        return;
    }

    if (!qtdDisponivel || qtdDisponivel === 0) {
        alert(`Os ingresso para a area ${tipoIngresso} acabaram`);
        return;
    }

    if (qtdeIngressos > qtdDisponivel) {
        alert(`Não temos essa quantidade de ingresso disponíveis na area ${tipoIngresso}`);
        return;
    }

    qtdDisponivel -= qtdeIngressos;
    alert('Compra realizada com sucesso');

    document.getElementById('qtd').value = '';
    document.getElementById(`qtd-${tipoIngresso}`).textContent = qtdDisponivel;

}