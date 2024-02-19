let addFriend = document.querySelector("#btn2");
addFriend.addEventListener('click', ()=>{
    document.querySelector("#status").innerHTML = "Friend";
});

let removeFriend = document.querySelector("#btn1");

let FriendStatus = document.querySelector("#status");
    removeFriend.addEventListener('click', ()=>{
        if (FriendStatus.innerHTML === "Not a Friend" || FriendStatus.innerHTML === "UnFriended") {
            alert("Not a Friend or already UnFriended");
        }else{
            document.querySelector("#status").innerHTML = "UnFriended";
        }
    });
