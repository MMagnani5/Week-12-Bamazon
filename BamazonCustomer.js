//create NPM package
 var mysql = require('mysql');
 var prompt = require('prompt');

// connect to mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "yankeesny2", //Your password
    database: "Bamazon_db"
})

connection.connect();
//database query, customer view, which shows ItemID, ProductName, and Price
connection.query('SELECT * FROM Products', function(err, results) {
  if (err) throw err;
 
  for (var i = 0; i < results.length; i++) {
    console.log('Product ID: ', results[i].ItemID);
    console.log('Product Name: ', results[i].ProductName);
    console.log('Price: ', + '$' results[i].Price);
    console.log("----------------------------------------------------");
  }
  customerPurchase(); //customerPurchase function callback
});

function customerPurchase(){
  var productInfo = {
    properties: {
      ItemID: {description: 'Please choose the item you would like to purchase by inputting the item ID'},
      Quantity: {description: 'How many would you like to purchase at this time?'}
    },
  };


//create a prompt for the input

prompt.start();
    prompt.get(productInfo, function (err, res){
      var purchase = {
        ItemID: res.ItemID,
        Quantity: res.Quantity
      };


//

//push users purchase to query Products table
  customerOrder.push(purchase);
      //connections used to query different MySQL views/commands
      //this query takes the order info
      connection.query('SELECT * FROM Products WHERE ItemID=?', customerOrder[0].ItemID, function(err, res){
        if (res[0].StockQuantity >= customerOrder[0].Quantity) {
          
          console.log('Your total comes to: '+ (customerOrder[0].Quantity*res[0].Price));
         
          stockLeft = res[0].StockQuantity - customerOrder[0].Quantity;

          // Stock Quantity 
          connection.query('UPDATE Products SET StockQuantity ='+ stockLeft + ' WHERE ItemID ='+ customerOrder[0].ItemID, function(err, res){
           
            console.log("Your order has been processed. Thank you for shopping Bamazon!");
            connection.end();
          });
        } else {
          console.log("We are currently out of stock. Please check back soon!");
          connection.end();
        }
      });
    })
}        