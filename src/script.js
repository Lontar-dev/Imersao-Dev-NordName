var nomesNordicosM = ["Aleifr", "Olaf", "Olavo", "Axel", "Bjorn", "Erick", "Einar", "Floki", "Gimle", "Hakon", "Harald", "Ingvar", "Igor", "Ivar", "Knut", "Mimir", "Niels", "Oleg", "Ragnar", "Rollo", "Rurik", "Siefried", "Svante", "Svein", "Ulf", "Vagn", "Vidar"]

var nomesNordicosF = ["Alvor", "Aslaug", "Astrid", "Bera", "Drifa", "Eira", "Freya", "Gyda", "Helga", "Olga", "Helmi", "Hilde", "Hilda", "Ilda", "Idun", "Ingrid", "Kaira", "Liv", "Lynae", "Rinda", "Runa", "Saga", "Sigrid", "Siv", "Solveig", "Thyra", "Valquíria"]



    

function gerarNome() {
      var numeroNome = parseInt(Math.random() * 28)
      console.log(numeroNome)
      var nomeF = (nomesNordicosF[numeroNome])
      var nomeM = (nomesNordicosM[numeroNome])

      var nomeTela = document.querySelector('#nomeEscrito')
      var nomeTelaE = nomeTela.value
      var divResultado = document.getElementById("resultadoNome")
       
  if (nomeTelaE.endsWith('F')){
     var nF = nomeF
     divResultado.innerHTML = nF    
  }
  
  else if (nomeTelaE.endsWith('M')){
      var nM = nomeM
      divResultado.innerHTML = nM
     }
}