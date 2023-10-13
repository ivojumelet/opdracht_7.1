
    let budget = 100;
    //parseFloat(prompt("Wat is het saldo?","));
    
    let productprijs = 60;
    //let productprijs=parseFloat=prompt("Wat is de prijs van het product?", ""));
    let saldo = document.getElementById("saldo");
    
    if (budget > productprijs) {
      let over = budget - productprijs;
      saldo.innerHTML = "U heeft genoeg geld! " + over + " is er over van: "  + budget + "euro";
      saldo.style.color = "green";
    } 
    else {
      saldo.innerHTML = "Helaas, u heeft te weinig geld!";
      saldo.style.color = "red";
    }
