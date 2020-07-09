var backdrop = document.querySelector(".backdrop");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var buttonNo = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// console.dir(backdrop.style["background-image"]);

for (var i = 0; i<selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener("click", function(){
        // modal.style.display="block";
        // backdrop.style.display="block";
        // modal.className = "open"; this will actually overwrite the complite class list!!
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}

if (buttonNo){
    buttonNo.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", function(){
    // mobileNav.style.display = "none";
    mobileNav.classList.remove("open");
    closeModal();
});

function closeModal(){
    if (modal){
        modal.classList.remove("open");
    }
    // modal.style.display="none";
    // backdrop.style.display="none";
    backdrop.classList.remove("open");
};

toggleButton.addEventListener("click", function(){
    // mobileNav.style.display = "block";
    // backdrop.style.display = "block";
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});
