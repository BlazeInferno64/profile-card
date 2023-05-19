const followBtn = document.querySelector(".follow-btn");
const body = document.querySelector("body");

/*document.addEventListener('contextmenu',(e) =>{
    e.preventDefault();
    alert("For Source Code Visit :- https://github.com/blaizinginfernodragon123/profile-card/")
})*/

followBtn.onclick = function(){
    followBtn.innerText = 'Following...';
    alert("Thanks for following me , you will be notified of my latest projectes soon, However if you want to unfollow then just long press in the button again if you are in a mobile, and in a desktop just right click on this button");
    const storage = localStorage.setItem("Follow","True");
    console.log("Thanks for following me , you will be notified of my latest projectes soon, However if you want to unfollow then just long press in the button again");
    console.log(storage);
}
body.onload = function(){
    const item = localStorage.getItem("Follow");
    if (item == 'True'){
        followBtn.innerText = 'Following...';
    }
    //else{
        //followBtn.innerText = 'Follow Me';
    //}
}
followBtn.addEventListener('contextmenu',(e) =>{
    e.preventDefault();
     enter = prompt("Are you sure you want to stop following? Please type in Yes or No to continue");
    if(enter.value = 'Yes'){
        localStorage.removeItem("Follow");
        followBtn.innerText = 'Follow Me';
        console.log("Unfollowed successfully!!");
    }
    else  if (enter.value = 'No'){
        alert("Wish granted !!, you are still following me :)");
    }
    else{
        alert("Current Status : Following")
        window.location.reload(true);
    }
    console.log(e);
})
