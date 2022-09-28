var myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event){
    event.preventDefault();
})
function  valider (){
    var name = document.getElementById('name');
    var first_name = document.getElementById('first_name');
    var phone = document.getElementById('phone');
    var mail = document.getElementById('email');
    var day = document.getElementById('day');
    var month = document.getElementById('month');
    var year = document.getElementById('year');
    var rue = document.getElementById('adresse');
    var commune = document.getElementById('commune');
    var province = document.getElementById('province');

    // noms  prenoms
    if (name.value == "") {
        alert("Mettez votre nom");
        name.focus();
        return false
    }
    if (first_name.value =="") {
        alert ('Mettez votre prénom');
        first_name.focus();
        return false
    }

    // Telephone
    if (phone.value == "") {
        alert("Mettez votre numérou de téléphone");
        phone.focus();
        return false
    }

    // mail
    if (mail.value == ""){
        alert("Mettez une adresse mail");
        mail.focus();
        return false
    }
    if (mail.value.indexOf(".", 0)<0){
        alert("Mettez une adresse mail valide");
        mail.focus();
        return false
    }
    if (mail.value.indexOf("@", 0)<0){
        alert("Mettez une adresse mail valide");
        mail.focus();
        return false
    }

    // //Anniversaire
    // if (day.value == "") {
    //     alert("Mettez votre date de naissance");
    //     day.focus()
    //     return false
    // }
    // if (day.value > 31 ) {
    //     alert("Mettez une date de naissance valide");
    //     day.focus()
    //     return false
    // }
    // if (day.value > 29 & month.value == "fevrier"){
    //     alert("Mettez une date de naissance valide");
    //     day.focus()
    //     return false
    // }

    // if (month.value == "") {
    //     alert("Mettez votre date de naissance");
    //     month.focus()
    //     return false
    // }
    // if (year.value == "") {
    //     alert("Mettez votre date de naissance");
    //     year.focus()
    //     return false
    // }
    // if(year.value)


    // adresse
    if (rue.value == ""){
        alert('Mettez votre adresse')
        rue.focus();
        return false
    }
    if (commune.value ="") {
        alert("Mettez votre commune");
        commune.focus();
        return false
    }
    if (province.value == "") {
        alert('Mettez votre province');
        province.focus();
        return false
    }
    return true
}