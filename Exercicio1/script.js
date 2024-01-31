function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 0 && hora <= 12){
        img.innerText = 'Bom Dia'

    } else if(hora >= 12 && hora <= 18){
        img.innerText = 'Boa Tarde'

    }else{
        img.innerText = 'Boa Noite'
    }
}