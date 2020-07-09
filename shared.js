var backdrop = document.querySelector(".backdrop");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var buttonNo = document.querySelector(".modal__action--negative");
//console.dir(selectPlanButtons);
//console.dir(backdrop);

for (var i = 0; i<selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener("click", function(){
        modal.style.display="block";
        backdrop.style.display="block";
    });
}

buttonNo.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

function closeModal(){
    modal.style.display="none";
    backdrop.style.display="none";
};

