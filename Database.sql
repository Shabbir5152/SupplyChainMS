create database SupplyChainMS;
use SupplyChainMS;

CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerName VARCHAR(100) NOT NULL,
    OrderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    DeliveryDate DATE,
    Status ENUM('Pending', 'In Progress', 'Delivered') DEFAULT 'Pending',
    WarehouseID INT NOT NULL,
    FOREIGN KEY (WarehouseID) REFERENCES Warehouses(WarehouseID) ON DELETE CASCADE
);

CREATE TABLE Inventory (
    InventoryID INT AUTO_INCREMENT PRIMARY KEY,
    WarehouseID INT NOT NULL,
    ProductID INT NOT NULL,
    Stock INT CHECK (Stock >= 0),
    LowStockThreshold INT DEFAULT 5,
    FOREIGN KEY (WarehouseID) REFERENCES Warehouses(WarehouseID) ON DELETE CASCADE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE
);

CREATE TABLE Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Category VARCHAR(50),
    Price DECIMAL(10, 2),
    SupplierID INT,
    FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID) ON DELETE CASCADE
);

CREATE TABLE Suppliers (
    SupplierID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    ContactDetails VARCHAR(200),
    Email VARCHAR(100) UNIQUE
);

CREATE TABLE Warehouses (
    WarehouseID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Location VARCHAR(100) NOT NULL,
    Capacity INT
);

CREATE VIEW LowStockAlerts AS
SELECT 
    Products.Name AS Product,
    Warehouses.Name AS Warehouse,
    Inventory.Stock
FROM 
    Inventory
JOIN Products ON Inventory.ProductID = Products.ProductID
JOIN Warehouses ON Inventory.WarehouseID = Warehouses.WarehouseID
WHERE 
    Inventory.Stock < Inventory.LowStockThreshold;

CREATE VIEW OrdersSummary AS
SELECT 
    Warehouses.Name AS Warehouse,
    COUNT(Orders.OrderID) AS TotalOrders,
    SUM(CASE WHEN Orders.Status = 'Delivered' THEN 1 ELSE 0 END) AS DeliveredOrders
FROM 
    Orders
JOIN Warehouses ON Orders.WarehouseID = Warehouses.WarehouseID
GROUP BY 
    Warehouses.Name;

DELIMITER //
CREATE PROCEDURE AddOrder(
    IN CustomerName VARCHAR(100),
    IN WarehouseID INT,
    IN DeliveryDate DATE
)
BEGIN
    INSERT INTO Orders (CustomerName, WarehouseID, DeliveryDate)
    VALUES (CustomerName, WarehouseID, DeliveryDate);
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE RestockInventory(
    IN WarehouseID INT,
    IN ProductID INT,
    IN RestockAmount INT
)
BEGIN
    UPDATE Inventory
    SET Stock = Stock + RestockAmount
    WHERE WarehouseID = WarehouseID AND ProductID = ProductID;
END //
DELIMITER ;

CREATE PROCEDURE Fac


DELIMITER //
CREATE TRIGGER UpdateInventoryOnOrder
AFTER INSERT ON Orders
FOR EACH ROW
BEGIN
    DECLARE product_id INT;

    -- Fetch the first ProductID related to the WarehouseID
    SELECT ProductID 
    INTO product_id
    FROM Inventory
    WHERE WarehouseID = NEW.WarehouseID
    ORDER BY ProductID ASC
    LIMIT 1;

    -- Update Inventory to reduce stock
    UPDATE Inventory
    SET Stock = Stock - 1
    WHERE WarehouseID = NEW.WarehouseID AND ProductID = product_id;
END //
DELIMITER ;


DELIMITER //
CREATE TRIGGER LowStockNotification
AFTER UPDATE ON Inventory
FOR EACH ROW
BEGIN
    IF NEW.Stock < NEW.LowStockThreshold THEN
        INSERT INTO Alerts (Message, CreatedAt)
        VALUES (CONCAT('Low stock alert for ProductID: ', NEW.ProductID, ' Product Name: ', NEW.Name ' at WarehouseID: ', NEW.WarehouseID), NOW());
    END IF;
END //
DELIMITER ;

CREATE TABLE Alerts (
    AlertID INT AUTO_INCREMENT PRIMARY KEY,
    Message VARCHAR(255) NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Suppliers (Name, ContactDetails, Email)
VALUES 
('Global Supplies', '123 Main St, New York, NY', 'contact@globalsupplies.com'),
('TechParts Inc.', '456 Elm St, Chicago, IL', 'info@techparts.com'),
('Food Wholesale Co.', '789 Oak St, Dallas, TX', 'sales@foodwholesale.com');


INSERT INTO Products (Name, Category, Price, SupplierID)
VALUES 
('Laptop', 'Electronics', 999.99, 1),
('Processor', 'Electronics', 299.99, 2),
('Apples', 'Groceries', 0.99, 3),
('Chairs', 'Furniture', 49.99, 1),
('Coffee Beans', 'Groceries', 4.99, 3);


INSERT INTO Warehouses (WarehouseID, Name, Location, Capacity)
VALUES 
(242, 'Central Warehouse', 'New York', 100),
(301, 'North Warehouse', 'Chicago', 50),
(410, 'South Warehouse', 'Dallas', 75);

UPDATE Warehouses SET Name = '9th Avenue', Location = 'Florida', Capacity = 150 WHERE WarehouseID = 242;

INSERT INTO Inventory (WarehouseID, ProductID, Stock, LowStockThreshold)
VALUES 
(242, 1, 50, 10),
(242, 2, 30, 5),
(301, 3, 100, 20),
(301, 4, 20, 5),
(410, 4, 4, 20),
(410, 5, 200, 15);

INSERT INTO Orders (CustomerName, DeliveryDate, Status, WarehouseID)
VALUES 
('Shabbir', '2024-12-01', 'Pending', 1),
('Jay', '2024-12-05', 'Pending', 2),
('Vanshik', '2024-12-10', 'Pending', 3);


TRUNCATE TABLE Orders;


select * FROM orders;
select * from suppliers;
select * from warehouses;

select * from inventory;

set FOREIGN_KEY_CHECKS = 0;
TRUNCATE Table warehouses;
TRUNCATE Table orders;
TRUNCATE Table suppliers;
TRUNCATE Table products;
TRUNCATE Table inventory;
TRUNCATE Table alerts;
set FOREIGN_KEY_CHECKS = 1;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM warehouses WHERE WarehouseID = 106;
SET SQL_SAFE_UPDATES = 1;