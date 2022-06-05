const name1 = document.getElementById('name');
const surname = document.getElementById('surname');
const mail = document.getElementById('mail');
const password = document.getElementById('password');

const cb1 = document.getElementById('cb1');
const cb2 = document.getElementById('cb2');
const cb3 = document.getElementById('cb3');

function UyeOl(){


let text = "";
var sayac = 0;
var eksikler = [];

    if(name1.value.length == 0){

        eksikler[sayac] = "Ad";
        sayac++;
    }

    if(surname.value.length == 0){

        eksikler[sayac] = "Soyad";
        sayac++;
    }

    if(mail.value.length == 0){

        
        eksikler[sayac] = "E-mail Adresi";
        sayac++;
    }


    if(password.value.length == 0){
        
        eksikler[sayac] = "Şifre";
        sayac++;
    }




    for (let i = 0; i < eksikler.length; i++) {

        text += eksikler[i];

        if(i != eksikler.length-1){
            text += " / "
        }

    }

    if (mail.value.length != 0 && !mail.value.includes("@")){

        alert("Geçersiz E-Posta Adresi!");
    
    }

    else{

    if(sayac>0){
        alert("Şu alanları boş bırakamazsınız: " + text);
    }




else{

    if(!cb2.checked && !cb3.checked){
        alert("Lütfen Üyelik Sözleşmesi'ni ve D&R Üyeliği Aydınlatma Metni'ni onaylayın")

    }

    else if(!cb2.checked){
        alert("Lütfen Üyelik Sözleşmesi'ni onaylayın")
        }

    else if (!cb3.checked){

        alert("Lütfen D&R Üyeliği Aydınlatma Metni'ni onaylayın")
    }

    else{
        alert("Giriş Başarılı!");
        Sayfa3();
    }    




}

}

    

}

const mail2 = document.getElementById('mail2');
const password2 = document.getElementById('password2');

function GirisYap(){


    

let text = "";
var sayac = 0;
const eksikler = [];





    if(mail2.value.length == 0){

        
        eksikler[sayac] = "E-mail Adresi";
        sayac++;
    }

    if(password2.value.length == 0){
        
        eksikler[sayac] = "Şifre";
        sayac++;
    }

    for (let i = 0; i < eksikler.length; i++) {

        text += eksikler[i];

        if(i != eksikler.length-1){
            text += " / "
        }

    }

    if (mail2.value != 0 && !mail2.value.includes("@")){

        alert("Geçersiz E-Posta Adresi!");
    
    }

    else{

    if( sayac>0){
        alert("Şu alanları boş bırakamazsınız: " + text);
    }

    else{
        alert("Giriş Başarılı!");
        Sayfa4();
    }

}
    


}



function Sayfa2(){

    window.location='sayfa2.html';

}

function Sayfa3(){

    window.location='sayfa3.html';
}

function Sayfa4(){

    window.location='sayfa4.html';
}
    









