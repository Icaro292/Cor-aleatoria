
        function gerarCorAleatoria() {
           
            let cor = '#';
      
            for (let i = 0; i < 6; i++) {
                cor += Math.floor(Math.random() * 16).toString(16);
            }
            return cor;
        }

        function mudarCor() {
            let novaCor = gerarCorAleatoria();
           
            document.body.style.backgroundColor = gerarCorAleatoria();
            document.getElementById('codigoCor').innerText = `Cor atual: ${novaCor}`;
        }