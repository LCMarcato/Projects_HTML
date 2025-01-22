// Função para validar o telefone
function validarTelefone(telefone) {
    const regex = /^[\(\)\s\+\d-]+$/;
    return regex.test(telefone);
}

// Função de agendamento via WhatsApp
function enviarWhatsApp() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    if (!nome || !telefone || !data || !hora) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!validarTelefone(telefone)) {
        alert("Por favor, insira um número de telefone válido.");
        return;
    }

    // Formatação de data e hora no formato do Google Calendar
    const dataFormatada = data.split("-");
    const ano = dataFormatada[0];
    const mes = dataFormatada[1].padStart(2, '0');
    const dia = dataFormatada[2].padStart(2, '0');

    const horaFormatada = hora.replace(":", "");

    // Obtenção do fuso horário local
    const dataHoraInicio = `${ano}${mes}${dia}T${horaFormatada}00`;
    
    const horaFim = (parseInt(hora.split(":")[0]) + 1).toString().padStart(2, '0');
    const dataHoraFim = `${ano}${mes}${dia}T${horaFim}${hora.split(":")[1]}00`;

    // Link para o evento do Google Calendar
    const eventoLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=Horario+${nome}&dates=${dataHoraInicio}/${dataHoraFim}&details=Agendamento+realizado+por:+${nome}&location=Barbearia+do+Soares&sf=true&output=xml`;

    const mensagem = `Olá, gostaria de agendar um horário na Barbearia do Soares.\n\n` +
                     `*Nome:* ${nome}\n` +
                     `*Telefone:* ${telefone}\n` +
                     `*Data:* ${data}\n` +
                     `*Hora:* ${hora}\n\n` +
                     `Você pode adicionar este evento diretamente à sua agenda clicando no link abaixo:\n${eventoLink}`;

    const telefoneBarbearia = "5515997142013";
    const url = `https://wa.me/${telefoneBarbearia}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}