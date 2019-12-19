function supression(id){
    sup = document.getElementById(id);

    document.body.removeChild(sup);

    alert(id + " est bien supprimer");
}