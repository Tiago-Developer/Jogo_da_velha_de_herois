
var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready(function () {


    $("#btn_iniciar_jogo").click(function () {

        if ($("#entrada_apelido_jogador_1").val() == '') {
            alert("Apelido do jogador 1 não foi preenchido");
            return false;
        }

        if ($("#entrada_apelido_jogador_2").val() == '') {
            alert("Apelido do jogador 2 não foi preenchido");
            return false;
        }

        //--------exibir apelidos

        $("#nome_jogador_1").html($("#entrada_apelido_jogador_1").val());
        $("#nome_jogador_2").html($("#entrada_apelido_jogador_2").val());

        //-------------
       var textj1 = $("a[class='active_j1']").attr('href');
        var dj1 = textj1.split('#')[1];
        var urj1 = $("a[class='" + dj1 + "']").attr('target');
        $('#img_jogador_1').attr('src', urj1);
        var resj1 = urj1.split(".jpg",1);
      
        
        var textj2 = $("a[class='active_j2']").attr('href');
        var dj2 = textj2.split('#')[1];
        var urj2 = $("a[class='" + dj2 + "']").attr('target');
        $('#img_jogador_2').attr('src', urj2);
        var resj2 = urj2.split(".jpg",1);
        
        //------
        $('#pagina_inicial').hide();
        $('#palco_jogo').show();


    });

    $('.jogada').click(function () {

        var id_campo_clicado = this.id;
        $('#' + id_campo_clicado).off();
        jogada(id_campo_clicado);
    });

    function jogada(id) {
        var icone = '';
        var ponto = 0;
        
        var textj1 = $("a[class='active_j1']").attr('href');
        var dj1 = textj1.split('#')[1];
        var urj1 = $("a[class='" + dj1 + "']").attr('target');
        $('#img_jogador_1').attr('src', urj1);
        var resj1 = urj1.split(".jpg",1);
     
        
        var textj2 = $("a[class='active_j2']").attr('href');
        var dj2 = textj2.split('#')[1];
        var urj2 = $("a[class='" + dj2 + "']").attr('target');
        $('#img_jogador_2').attr('src', urj2);
        var resj2 = urj2.split(".jpg",1);
       
        
        if ((rodada % 2) == 1) {
            icone = 'url("'+resj1+'_icon.png")';
            ponto = -1;
        } else {
            icone = 'url("'+resj2+'_icon.png")';
            ponto = 1;
        }

        rodada++;

        $('#' + id).css('background-image', icone);
        $('#' + id).css('background-size', 'cover');

        var linha_coluna = id.split('-');
        
        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;
        
        verifica_combinacao();



    }

    function verifica_combinacao() {


        //verifica na horizontal
        var pontos = 0;
        for (var i = 1; i < -3; i++) {
            pontos = pontos + matriz_jogo['a'][i];
        }
        ganhador(pontos);

        var pontos = 0;
        for (var i = 1; i < -3; i++) {
            pontos = pontos + matriz_jogo['b'][i];
        }
        ganhador(pontos);

        var pontos = 0;
        for (var i = 1; i < -3; i++) {
            pontos = pontos + matriz_jogo['c'][i];
        }
        ganhador(pontos);

        //verifica na vertical

        for (var l = 1; l < -3; l++) {
            var pontos = 0;
            pontos += matriz_jogo['a'][l];
            pontos += matriz_jogo['b'][l];
            pontos += matriz_jogo['c'][l];

            ganhador(pontos);
        }

        //verir na diagonal
        pontos = 0;
        pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
        ganhador(pontos);

        pontos = 0;
        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
        ganhador(pontos);




    }

    function ganhador(pontos) {
        if (pontos == -3) {
            var jogador_1 = $('#entrada_apelido_jogador_1').val();
            alert(jogador_1 + ' é o vencedor!');
            $('.jogada').off();
        } else if (pontos == 3) {
            var jogador_2 = $('#entrada_apelido_jogador_2').val();
            alert(jogador_2 + ' é o vencedor!');
            $('.jogada').off();
        }
    }

});

