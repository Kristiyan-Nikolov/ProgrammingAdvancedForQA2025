using System;
using System.Text;
using System.Linq;
using System.Collections.Generic;

using NUnit.Framework;

namespace TestApp.Tests;

[TestFixture]
public class FruitsTests
{
   
    [Test]
    public void Test_GetFruitQuantity_FruitExists_ReturnsQuantity()
    {
        // Arrange
        Dictionary<string, int> inputFruits = new Dictionary<string, int>()
        {
            {"Banana", 5 },
            {"Apple", 7 },
            {"Peach", 1 }
        };
        int expected = 7;
        string fruitInput = "Apple";
        // Act
        int result = Fruits.GetFruitQuantity(inputFruits, fruitInput);
        // Assert
        Assert.AreEqual(expected, result);
    }

    [Test]
    public void Test_GetFruitQuantity_FruitDoesNotExist_ReturnsZero()
    {
        // Arrange
        Dictionary<string, int> inputFruits = new Dictionary<string, int>()
        {
            {"Banana", 5 },
            {"Apple", 7 },
            {"Peach", 1 }
        };
        int expected = 0;
        string fruitInput = "Apricot";
        // Act
        int result = Fruits.GetFruitQuantity(inputFruits, fruitInput);
        // Assert
        Assert.AreEqual(expected, result);
    }

    [Test]
    public void Test_GetFruitQuantity_EmptyDictionary_ReturnsZero()
    {
        // Arrange
        Dictionary<string, int> inputFruits = new Dictionary<string, int>()
        {
            //{"Banana", 5 },
            //{"Apple", 7 },
            //{"Peach", 1 }
        };
        int expected = 0;
        string fruitInput = "Apricot";
        // Act
        int result = Fruits.GetFruitQuantity(inputFruits, fruitInput);
        // Assert
        Assert.AreEqual(expected, result);
    }

    [Test]
    public void Test_GetFruitQuantity_NullDictionary_ReturnsZero()
    {
        // Arrange
        Dictionary<string, int> inputFruits = null;
        int expected = 0;
        string fruitInput = "Apricot";
        // Act
        int result = Fruits.GetFruitQuantity(inputFruits, fruitInput);
        // Assert
        Assert.AreEqual(expected, result);
    }

    [Test]
    public void Test_GetFruitQuantity_NullFruitName_ReturnsZero()
    {
        {
            // Arrange
            Dictionary<string, int> inputFruits = new Dictionary<string, int>()
        {
            {"Banana", 5 },
            {"Apple", 7 },
            {"Peach", 1 }
        };
            int expected = 0;
            string fruitInput = null;
            // Act
            int result = Fruits.GetFruitQuantity(inputFruits, fruitInput);
            // Assert
            Assert.AreEqual(expected, result);
        }
    }
}
