function callback(some) {
    document.getElementById("demo").innerHTML += some + "<br>";
    document.getElementById("demo").style.textAlign = "center";
    document.getElementById("demo").style.color = "black";
    //document.getElementById("demo").style.border = "thick solid black";
    //document.getElementById("demo").style.borderWidth = "auto";
    document.getElementById("demo").style.fontSize = "x-large";
    document.getElementById("demo").style.fontStyle = "italic";
    //document.getElementById("demo").style.backgroundImage = "url('download.jpg')";
    document.getElementById("demo").style.backgroundRepeat="no-repeat";
    document.getElementById("demo").style.backgroundSize="cover";



  }
  
  console.log(10);
  callback(10);
  
  setTimeout(() => {
    console.log(9);
    callback(9);
    setTimeout(() => {
      console.log(8);
      callback(8);
      setTimeout(() => {
        console.log(7);
        callback(7);
        setTimeout(() => {
          console.log(6);
          callback(6);
          setTimeout(() => {
            console.log(5);
            callback(5);
            setTimeout(() => {
              console.log(4);
              callback(4);
              setTimeout(() => {
                console.log(3);
                callback(3);
                setTimeout(() => {
                  console.log(2);
                  callback(2);
                  setTimeout(() => {
                    console.log(1);
                    callback(1);
                    setTimeout(() => {
                      console.log("Happy Independence Day!");
                      callback("Happy Independence Day!");
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);