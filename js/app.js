$(document).ready(function() {
    //  Menu Items as Objects
  let menuObject = {
    eggdrop: {
      name: "Egg Drop Soup",
      price: 6.99,
      quantity: 0
    },
    porriage: {
      name: "Rice Porriage",
      price: 8.99,
      quantity: 0
    },
    turnipcake: {
      name: "Turnip Cake",
      price: 11.99,
      quantity: 0
    },
    shumai: {
      name: "Shu Mai Dumplings",
      price: 14.99,
      quantity: 0
    },
    chickenfeet: {
      name: "Steamed Chicken Feet",
      price: 15.99,
      quantity: 0
    },
    noodlerolls: {
      name: "Noodle Rolls",
      price: 11.99,
      quantity: 0
    }
  }

  //  Access Menu Item on the Website
  $(".container").click(function(event) {
    event.preventDefault();

    // console.log("Event Target...", event.target);

    //  Add Event Listener and Capture Current Click with Unique ID
    if ($(event.target).is(".material-icons")) {
      // console.log("Clicked!");
      let current = $(event.target).attr("id");

      // console.log("Current ID...", current);

      //  Increment Item Quality per Click Action
      menuObject[current].quantity += 1;

      // console.log(menuObject[current].quantity);

      createTable(menuObject);

      // console.log("Event Target 2...", $(event.target));
    }
  })

  //  Access Table Elements
  function createTable(data) {
    let table = $(".orderlist");
    let tbody = $(".orderlist > tbody");

    tbody.html("");

    // console.log("Table Status...", table.children());

    //  Account for Zero Quantity
    let subtotal = 0;

    for (let item in menuObject) {
      if (menuObject[item].quantity !== 0) {
        // console.log("Quantity...", menuObject[item].quantity);
        // console.log("Price...", menuObject[item].price);
        //  Create Necessary Variable
        let itemName = menuObject[item].name;
        let itemQuantity = menuObject[item].quantity;
        let itemPrice = menuObject[item].price;
        let itemTotal = itemQuantity * itemPrice;

        //  Compiling Calculation

        subtotal += itemTotal;
        let tax = (subtotal * 0.08).toFixed(2);
        let total = parseInt(subtotal) + parseInt(tax);

        $("#subtotal").text(`$${subtotal}`);
        $("#tax").text(`$${tax}`);
        $("#total").text(`$${total}`);

        // Building/Updating Table

        let tableRow = $(`<tr></tr>`).appendTo(tbody);

        // console.log("Table Row...", tableRow);

        $(`<td>${itemName}</td>`).appendTo(tableRow);
        $(`<td>${itemQuantity}</td>`).appendTo(tableRow);
        $(`<td>${itemTotal}</td>`).appendTo(tableRow);
      }
    }

    return table[0];
  }

//  Your Order Button Action
  $("ul.tabs").tabs();
  $(".yourOrder").click(function() {
    $("ul.tabs").tabs("select_tab", "order");
  });

//  Your Order Button Action
// "href" attr of .submitOrder must specify the intended trigger modal ID
  $('.submitOrder').leanModal();
})
