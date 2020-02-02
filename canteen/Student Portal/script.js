var butons = document.querySelectorAll('.butons');

for(let i=0;i<butons.length;i++){
    butons[i].addEventListener('click', function(e){
        if(e.target != butons[i].children[0]){
            // butons[i].children[0].click();
            console.log(e.target.children[0]);
            e.target.children[0].click();
        }
        else{
            e.target.click();
        }
    });
}