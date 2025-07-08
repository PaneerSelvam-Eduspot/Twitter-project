let body = document.body;
let themer = document.querySelector(".themer");
const followButtons = document.querySelectorAll(".follow-button");

themer.addEventListener("click", toggleTheme);

function toggleTheme() {
  if (body.className === "light-theme") {
    body.className = "dark-theme";
    themer.innerText = "Light";
  } else {
    body.className = "light-theme";
    themer.innerText = "Dark";
  }
}
let popup = document.querySelector('.popup')
const popupOverlay = document.querySelector('.popup-overlay')

 followButtons.forEach((btn,index) => {
   const user = document.querySelectorAll('.username')[index].textContent;
   
  
  btn.addEventListener("click", () =>{
    if(btn.innerText === "Unfollow" || btn.innerText === "following") {
      showpopup(user, btn)
    }else{
      followUnFollow(btn);
    }
  });

 
  btn.addEventListener("mouseover", () => {
    if ( btn.innerText === "following") {
      btn.innerText = "Unfollow";
    }
  });

  btn.addEventListener("mouseout", () => {
    if (btn.innerText === "Unfollow") {
      btn.innerText = "following";
    }
  });
});


function showpopup(username, button) {
  popupOverlay.style.display = "flex";

   popup.innerHTML = `
   <div class="popup-text">
    <h1>Unfollow</h1><h3>@${username}?</h3>
    <p class="popup-para">Their posts will no longer show up in your For You timeline. You can still view their profile, unless their posts are protected. </p>
    <div class= "popup-btns">
    <button id="confirm-unfollow">Unfollow</button>
    <button id="cancel">Cancel</button> 
    </div>
    `


document.getElementById("confirm-unfollow").addEventListener("click", () => {
  followUnFollow(button);
  popupOverlay.style.display = "none";
});

document.getElementById("cancel").addEventListener("click", () => {
  popupOverlay.style.display = "none";
})
}


function followUnFollow(button) {
  button.classList.toggle("followed");
  if (button.innerText == "Follow")
     {button.innerText = "following";}
  else
   {button.innerText = "Follow";}
}








