function escolher() {

    let opcao1 = document.getElementById('opcao1').value.trim();
    let opcao2 = document.getElementById('opcao2').value.trim();
    if (opcao1,opcao2) {
        let opcoes = [opcao1, opcao2];
            
    
        let indiceAleatorio = Math.floor(Math.random() * opcoes.length);
        let escolhida = opcoes[indiceAleatorio];
    
        alert(escolhida);
    }else{
        alert('é obrigatorio ter duas opções!')
    }        
    
   
}