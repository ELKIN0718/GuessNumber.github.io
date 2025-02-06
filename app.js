
let numeroSecreto = Math.floor(Math.random()*10) + 1;
let numeroUsuario = 0;
let contador = 1;
let palabra = 'intento';
let maximosIntentos = 3;
console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){
    
    

    do{
        numeroUsuario = parseInt(prompt("Escribe un numero: "));
        if (numeroUsuario>10 || numeroUsuario < 1) {
            alert('Numeros de 1 al 10')
        };
    }while(numeroUsuario>10 || numeroUsuario < 1);

    
    

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        console.log('Acertaste');
        alert('Acertaste '+numeroUsuario+'\n Lo hiciste en '+contador+' '+palabra);
        window.location.href = "victoria.html"; // Redirige a la página de victoria
        break;
        
    }else{
        
        if(numeroUsuario > numeroSecreto){
            alert('No acertaste, es menor'+'\n Intento: '+contador);
        }else{
            alert('No acertaste, es mayor'+'\n Intento: '+contador);
        };
    };

    contador++;
    palabra = 'intentos';
    
    if (contador > maximosIntentos) {
        alert('muchos intentos: '+maximosIntentos)
        break;
    }

};
