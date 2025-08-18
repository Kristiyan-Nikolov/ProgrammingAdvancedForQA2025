using System;
using System.Text;
using System.Linq;
using System.Collections.Generic;

using NUnit.Framework;

using TestApp.Product;

namespace TestApp.Tests;

[TestFixture]
public class ProductInventoryTests
{
    private ProductInventory _inventory = null!;
    
    [SetUp]
    public void SetUp()
    {
        this._inventory = new();
    }
    
    [Test]
    public void Test_AddProduct_ProductAddedToInventory()
    {   // Arrange
        string nameProduct = "Aloe";
        double cost = 2.15;
        int quantity = 15;
        string expected = "Product Inventory:"+ Environment.NewLine+"Aloe - Price: $2.15 - Quantity: 15";
        // Act
        _inventory.AddProduct(nameProduct, cost, quantity);
        
        // Assert
        Assert.That(_inventory.DisplayInventory, Is.EqualTo(expected));
    }

    [Test]
    public void Test_DisplayInventory_NoProducts_ReturnsEmptyString()
    {   // Arrange
        string expected = "Product Inventory:";
        // Act & Assert
        Assert.That(_inventory.DisplayInventory, Is.EqualTo(expected));
    }

    [Test]
    public void Test_DisplayInventory_WithProducts_ReturnsFormattedInventory()
    {
        // Arrange
        _inventory.AddProduct("Aloe", 2.15, 15);
        _inventory.AddProduct("Svoge", 3.25, 14);
        _inventory.AddProduct("Savoy", 17.80, 10);
        string expected = "Product Inventory:" + Environment.NewLine + "Aloe - Price: $2.15 - Quantity: 15"+ Environment.NewLine +
                          "Svoge - Price: $3.25 - Quantity: 14" + Environment.NewLine+
                          "Savoy - Price: $17.80 - Quantity: 10";
        // Act
         Assert.That(_inventory.DisplayInventory, Is.EqualTo(expected));
    }

    [Test]
    public void Test_CalculateTotalValue_NoProducts_ReturnsZero()
    {
 
        // Act
        double result = _inventory.CalculateTotalValue();
        // Assert
       Assert.That(result, Is.Zero);
    }

    [Test]
    public void Test_CalculateTotalValue_WithProducts_ReturnsTotalValue()
    {
        // Arrange
        _inventory.AddProduct("Aloe", 2.15, 15);
        _inventory.AddProduct("Svoge", 3.25, 14);
        _inventory.AddProduct("Savoy", 17.80, 10);
        double expected = 2.15 * 15 + 3.25 * 14 + 17.80 * 10;
        // Act
        double result = _inventory.CalculateTotalValue();
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
