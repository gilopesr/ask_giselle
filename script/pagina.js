function escolher() {

    let opcao1 = document.getElementById('opcao1').value.trim();
    let opcao2 = document.getElementById('opcao2').value.trim();
    if (opcao1,opcao2) {
        let opcoes = [opcao1, opcao2];
            
    
        let indiceAleatorio = Math.floor(Math.random() * opcoes.length);
        let escolha = opcoes[indiceAleatorio];
    
                
                document.getElementById("resultadoEscolha").innerText = "Giselle escolheu: " + escolha;

                
                document.getElementById("mensagemErro").style.display = "none";
        
                
                document.getElementById("janela").style.display = "block";
            } else {
                
                document.getElementById("mensagemErro").innerText = "Por favor, insira as duas opções!";
                document.getElementById("mensagemErro").style.display = "block";
        
                
                document.getElementById("janela").style.display = "block";
            }
        }
        
        const modal = document.getElementById('janela');
        modal.classList.add('abrir');
        
        modal.addEventListener('click', (e) => {
            if (e.target.id == 'fechar' || e.target.id == 'janela') {
                modal.classList.remove('abrir');
                document.getElementById("janela").style.display = "none";  
            }
        });
