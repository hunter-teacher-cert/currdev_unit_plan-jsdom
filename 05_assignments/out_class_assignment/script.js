// mermaid: topRight
// duck: bottomLeft
// dog: topLeft

document.querySelector("button").addEventListener("click", function(){
    var userItem = document.querySelector("#itemsList").value;
    var userCorner = document.querySelector("input[name='corner']:checked").value;
    if(userItem == "mermaid"){
        if(userCorner == "topLeft"){
            alert("Keep looking");
        } else if(userCorner == "topRight"){
            var userName = document.querySelector("#user-name").value;
            alert("You have a good eye, " + userName);
        } else if(userCorner == "bottomLeft"){
            alert("Keep looking");
        } else if(userCorner == "bottomRight"){
            alert("Keep looking");
        }
    } else if(userItem == "duck"){
        if(userCorner == "topLeft"){
            alert("Keep looking");
        } else if(userCorner == "topRight"){
            alert("Keep looking");
        } else if(userCorner == "bottomLeft"){
            var userName = document.querySelector("#user-name").value;
            alert("You have a good eye, " + userName);
        } else if(userCorner == "bottomRight"){
            alert("Keep looking");
        }
    } else if(userItem == "dog"){
        if(userCorner == "topLeft"){
            var userName = document.querySelector("#user-name").value;
            alert("You have a good eye, " + userName);
        } else if(userCorner == "topRight"){
            alert("Keep looking");
        } else if(userCorner == "bottomLeft"){
            alert("Keep looking");
        } else if(userCorner == "bottomRight"){
            alert("Keep looking");
        }
    }
});





