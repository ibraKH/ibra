if("serviceWorker" in navigator){
    navigator.serviceWorker.register("/scripts/sw.js").then(registration => {
      console.log("SW Registered!");
    }).catch(error => {
      console.log("SW Registration failed");
    })
  }