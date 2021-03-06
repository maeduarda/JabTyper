//calcula o tamanho da frase e imprime no console
var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;


var tempoJogo = $("#tempo");
var tempoInicial = tempoJogo.text();

//pega o tamanho da frase e apresenta em tela
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);




var campo = $("#campo-digitacao");
campo.on("input", function () {
    //pega o contúdo do campo de texto 
    var frase = campo.val();
    //conta quantos caracteres existem na frase digitada
    var nCaracteresDigitados = frase.length;
    //exibe a quantidade na tela
    $("#caracteres-digitados").text(nCaracteresDigitados);
    //quebra a frade em palavras e conta as palavras
    var nPalavrasDigitadas = frase.split(" ").length;
    //exibe a quantidade de palavras na tela
    $("#palavras-digitadas").text(nPalavrasDigitadas);
});



campo.on("focus", function () {
    var cronometro = setInterval(function () {
        var tempoRestante = tempoJogo.text();
        if (tempoRestante <= 0) {
            campo.attr("disabled", true);
            clearInterval(cronometro);
            nome = $("#nome").val()
            pontuacao = $("#palavras-digitadas").text() / tempoInicial * 60
            $('#tabela-resultado').append('<tr><td>' + nome + '</td><td>' + pontuacao + ' ppm </td></tr>');
        } else {
            tempoRestante--;
            tempoJogo.text(tempoRestante);
        }
    }, 1000);
});

$("#botao-reiniciar").on("click", function () {
    campo.attr("disabled", false);
    campo.val("");
    $("#caracteres-digitados").text("0");
    $("#palavras-digitadas").text("0");
    $("#tempo").text(tempoInicial);
});