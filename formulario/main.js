function keywordVerify() {
    let keyword1 = document.getElementById('keyword').value;
    let keyword2 = document.getElementById('confirmKeyword').value;

    if(keyword1 != keyword2){
        let msg = document.getElementById('mensagem');
        msg.innerHTML = 'A senhas não conferem!';
        return false;
    }
    return true;
}