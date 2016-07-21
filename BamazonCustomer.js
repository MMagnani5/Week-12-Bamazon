var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "yankeesny2", //Your password
    database: "Bamazon_db"
});


  
   

//First Display All of the Items available for sale. This initial display, should include the ids, names, and prices of products for sale

connection.connect(function(err) {
 if (err) throw err;
 console.log("connected as id " + connection.threadId);
});

connection.query('SELECT ItemID,ProductName,Price FROM products',function(err, rows){
  if (err) throw err;

  rows.map(function(row){
   
  
        console.log('Product ID: ', row.ItemID);
        console.log('Product Name: ', row.ProductName);
        console.log('Price: ', '$' +row.Price);
        console.log("----------------------------------------------------");
    });
});

//Users should then be prompted with two messages. The first message should ask them the ID of the product they would like to buy. The second message should ask them how many of the product they would like to buy.





