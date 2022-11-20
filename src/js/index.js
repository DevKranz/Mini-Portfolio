/*

OBJETIVO- quando clicarmos na aba temos que mostrar 
o conteúdo da aba que foi clicada pelo usuário e
esconder o conteúdi da aba anterior

-passo 1 - dar um jeoto de pegar os elementos que 
representam as abas HTML
-passo 2- dar um jeito de identificar a clique no elemento 
da aba
-passo 3- quando o usuário clicar, desmarcar a aba selecionanda
-passo 4- marcar aba clicada como selecionada
-passo 5 - esconder o conteúdo anterior
-passo 6- monstar o conteúdo da aba selecionada
*/

// passo 1 - dar um jeoto de pegar os elementos que representam as abas HTML

const abas = document.querySelectorAll(".aba");

//passo 2- dar um jeito de identificar a clique no elemento da aba
abas.forEach(aba=>{
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }
        
        selecionarAba(aba)
        mostrarInformacoesAba(aba)
        


    });
});

function selecionarAba(aba) {
    //passo 3- quando o usuário clicar, desmarcar a aba selecionanda
    const abaSelecionada= document.querySelector(".aba.selecionado")
    console.log("abaSelecionada");
    abaSelecionada.classList.remove("selecionado")

    //passo 4- marcar aba clicada como selecionada
    aba.classList.add("selecionado")

}

function mostrarInformacoesAba(aba){
    //passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada= document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //passo 6- monstar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba= `informacao-${aba.id}`
    const informacaoASerMastrada= document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMastrada.classList.add("selecionado");
}