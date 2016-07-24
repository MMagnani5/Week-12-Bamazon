USE Bamazon_db;

DROP TABLE Products;

CREATE TABLE Products(
    
        ItemID INT NOT NULL,
        ProductName VARCHAR(100) NOT NULL,
        DepartmentName VARCHAR(100) NOT NULL,
        Price DECIMAl (10,2) NOT NULL,
        StockQuantity INT NOT NULL,
        PRIMARY KEY (`ItemID`)
);

INSERT INTO Products (ItemID,ProductName,DepartmentName,Price,StockQuantity) VALUE (1, "Hammer", "Hardware",15.99,50);
INSERT INTO Products (ItemID,ProductName,DepartmentName,Price,StockQuantity) VALUE (2, "Drill", "Hardware",24.99,42);
INSERT INTO Products (ItemID,ProductName,DepartmentName,Price,StockQuantity) VALUE (3, "Shovel", "Hardware",32.99,22);
INSERT INTO Products (ItemID,ProductName,DepartmentName,Price,StockQuantity) VALUE (4, "Tool Box", "Hardware",45.95,74);
INSERT INTO Products (ItemID,ProductName,DepartmentName,Price,StockQuantity) VALUE (5, "TV", "Electronics",799.00,24);
INSERT INTO Products (ItemID,ProductName,DepartmentName,Price,StockQuantity) VALUE (6, "DVD Player", "Electronics",45.99,31);
INSERT INTO Products(ItemID,ProductName,DepartmentName,Price,StockQuantity) VALUE (7, "Blu Ray PLayer", "Electronics",49.99,39);
INSERT INTO Products (ItemID,ProductName,DepartmentName,Price,StockQuantity) VALUE (8, "Mac Laptop", "Electronics",643.99,57);
INSERT INTO Products (ItemID,ProductName,DepartmentName,Price,StockQuantity) VALUE (9, "Camera", "Electronics",146.99,39);
INSERT INTO Products (ItemID,ProductName,DepartmentName,Price,StockQuantity) VALUE (10, "Cell Phone", "Electronics",199.99,57);

SELECT * FROM Products;