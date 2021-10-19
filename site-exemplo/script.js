var data = new Date()
var hora = 18 //data.getHours()
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
msg.innerHTML = `Agora são ${hora} horas`

function carregar() {
    if (hora < 12) {
        //bom dia
        img.src = '/site-exemplo/img/fotomanha.png'
        document.body.style.background = '#F5ED96'
    } else if (hora < 18) {
        //boa tarde
        img.src = '/site-exemplo/img/fototarde.png'
        document.body.style.background = '#F6AA01'
    } else {
        //boa noite
        img.src = '/site-exemplo/img/fotonoite.png'
        document.body.style.background = '#000677'
    }
}