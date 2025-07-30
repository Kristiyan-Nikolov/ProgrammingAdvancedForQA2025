using NUnit.Framework;

using System;
using System.Collections.Generic;

namespace TestApp.UnitTests;

public class ExceptionTests
{
    private Exceptions _exceptions = null!;

    [SetUp]
    public void SetUp()
    {
        this._exceptions = new();
    }

    // TODO: finish test
    [Test]
    public void Test_Reverse_ValidString_ReturnsReversedString()
    {
        // Arrange
        string text = "Hello";
        string expected = "olleH";

        // Act
        string result = _exceptions.ArgumentNullReverse(text);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    // TODO: finish test
    [Test]
    public void Test_Reverse_NullString_ThrowsArgumentNullException()
    {
        // Arrange
        string text = null;

        // Act & Assert
        Assert.That(() => this._exceptions.ArgumentNullReverse(text), Throws.ArgumentNullException);
    }

    [Test]
    public void Test_CalculateDiscount_ValidInput_ReturnsDiscountedPrice()
    {
        // TODO: finish test
        // Arrange
        decimal pricePoint = 100;
        decimal discount = 13.5m;
        decimal expected = 86.5m;
        // Act
        decimal result = _exceptions.ArgumentCalculateDiscount(pricePoint, discount);
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    // TODO: finish test
    [Test]
    public void Test_CalculateDiscount_NegativeDiscount_ThrowsArgumentException()
    {
        // Arrange
        decimal pricePoint = 100;
        decimal discount = -13.5m;
        


        // Act & Assert
        Assert.That(() => this._exceptions.ArgumentCalculateDiscount(pricePoint, discount), Throws.ArgumentException);

    }

    // TODO: finish test
    [Test]
    public void Test_CalculateDiscount_DiscountOver100_ThrowsArgumentException()
    {
        // Arrange
        decimal totalPrice = 100.0m;
        decimal discount = 130.0m;

        // Act & Assert
        Assert.That(() => this._exceptions.ArgumentCalculateDiscount(totalPrice, discount), Throws.ArgumentException);
    }

    [Test]
    public void Test_GetElement_ValidIndex_ReturnsElement()
    {
        // Arrange
        int[] input = { 50, 13, 24, 66, 99, 69 };
        int index = 5;
        int expected = 69;
        // Act
        int result = _exceptions.IndexOutOfRangeGetElement(input, index);
        // Assert
        Assert.AreEqual(expected, result);
    }

    // TODO: finish test
    [Test]
    public void Test_GetElement_IndexLessThanZero_ThrowsIndexOutOfRangeException()
    {
        // Arrange
        int[] input = { 50, 13, 24, 66, 99, 69 };
        int index = -1;
        

        // Act & Assert
        Assert.That(() => this._exceptions.IndexOutOfRangeGetElement(input, index), Throws.InstanceOf<IndexOutOfRangeException>());
    }

    // TODO: finish test
    [Test]
    public void Test_GetElement_IndexEqualToArrayLength_ThrowsIndexOutOfRangeException()
    {
        // Arrange
        int[] input = { 50, 13, 24, 66, 99, 69 };
        int index = input.Length;

        // Act & Assert
        Assert.That(()=> this._exceptions.IndexOutOfRangeGetElement(input, index), Throws.InstanceOf<IndexOutOfRangeException>());
    }

    [Test]
    public void Test_GetElement_IndexGreaterThanArrayLength_ThrowsIndexOutOfRangeException()
    {
        // Arrange
        int[] input = { 50, 13, 24, 66, 99, 69 };
        int index = input.Length + 100;

        // Act & Assert
        Assert.That(() => this._exceptions.IndexOutOfRangeGetElement(input, index), Throws.InstanceOf<IndexOutOfRangeException>());
    }

    [Test]
    public void Test_PerformSecureOperation_UserLoggedIn_ReturnsUserLoggedInMessage()
    {
        // Arrange
        bool input = true;
        string expected = "User logged in.";
        // Act
        string result = _exceptions.InvalidOperationPerformSecureOperation(input);
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_PerformSecureOperation_UserNotLoggedIn_ThrowsInvalidOperationException()
    {
        // Arrange
        bool input = false;


        // Act & Assert
        Assert.That(() => this._exceptions.InvalidOperationPerformSecureOperation(input), Throws.InvalidOperationException);
    }

    [Test]
    public void Test_ParseInt_ValidInput_ReturnsParsedInteger()
    {
        // Arrange
        string input = "24";
        int expected = 24;
        // Act
        int result = _exceptions.FormatExceptionParseInt(input);
        // Assert
        Assert.AreEqual(expected, result);  
    }

    [Test]
    public void Test_ParseInt_InvalidInput_ThrowsFormatException()
    {
        // Arrange
        string input = "unparsable";
        
        // Act & Assert
        Assert.That(()=>this._exceptions.FormatExceptionParseInt(input), Throws.TypeOf<FormatException>());
    }

    [Test]
    public void Test_FindValueByKey_KeyExistsInDictionary_ReturnsValue()
    {
        // Arrange
        Dictionary<string, int> input = new Dictionary<string, int>();
        input.Add("Kriso", 6);
        input.Add("Desislava", 7);
        input.Add("Hristina", 2);
        string key = "Hristina";
        int expected = 2;
        // Act
        int result = _exceptions.KeyNotFoundFindValueByKey(input, key);
        // Assert
        Assert.AreEqual(expected, result);
    }

    [Test]
    public void Test_FindValueByKey_KeyDoesNotExistInDictionary_ThrowsKeyNotFoundException()
    {
        // Arrange
        Dictionary<string, int> input = new Dictionary<string, int>();
        input.Add("Kriso", 6);
        input.Add("Desislava", 7);
        input.Add("Hristina", 2);
        string key = "Dimitrichko";
        
        // Act & Assert
        Assert.That(()=>this._exceptions.KeyNotFoundFindValueByKey(input, key), Throws.TypeOf<KeyNotFoundException>());
       
    }

    [Test]
    public void Test_AddNumbers_NoOverflow_ReturnsSum()
    {
        // Arrange
        int a = 5;
        int b = 6;
        int expected = 11;
        // Act
        int result = _exceptions.OverflowAddNumbers(a, b);
        // Assert
        Assert.AreEqual(expected, result);
    }

    [Test]
    public void Test_AddNumbers_PositiveOverflow_ThrowsOverflowException()
    {
        // Arrange
        int a = int.MaxValue;
        int b = 1;
        
        // Act & Assert
        Assert.That(()=>this._exceptions.OverflowAddNumbers(a, b), Throws.InstanceOf<OverflowException>());
        
    }

    [Test]
    public void Test_AddNumbers_NegativeOverflow_ThrowsOverflowException()
    {
        // Arrange
        int a = int.MinValue;
        int b = -1;

        // Act & Assert
        Assert.That(() => this._exceptions.OverflowAddNumbers(a, b), Throws.InstanceOf<OverflowException>());
    }

    [Test]
    public void Test_DivideNumbers_ValidDivision_ReturnsQuotient()
    {
        // Arrange
        int divident = 5;
        int divisor = 5;
        int expected = 1;
        // Act
        int result = _exceptions.DivideByZeroDivideNumbers(divident, divisor);
        // Assert
        Assert.AreEqual(expected, result);
    }

    [Test]
    public void Test_DivideNumbers_DivideByZero_ThrowsDivideByZeroException()
    {
        // Arrange
        int divident = 5;
        int divisor = 0;
        
        // Act & Assert
        Assert.That(()=>this._exceptions.DivideByZeroDivideNumbers(divident, divisor), Throws.TypeOf<DivideByZeroException>());
    }

    [Test]
    public void Test_SumCollectionElements_ValidCollectionAndIndex_ReturnsSum()
    {
        // Arrange
        int[] input = { 50, 13, 24, 66, 99, 69 };
        int index = 4;
        int expected = 24+66+99+69+13+50;
        // Act
        int result = _exceptions.SumCollectionElements(input, index);
        // Assert
        Assert.AreEqual(expected, result);
    }

    [Test]
    public void Test_SumCollectionElements_NullCollection_ThrowsArgumentNullException()
    {
        // Arrange
        int[] input = null;
        int index = 4;

        // Act & Assert
        Assert.That(() => this._exceptions.SumCollectionElements(input, index), Throws.TypeOf<ArgumentNullException>());

    }

    [Test]
    public void Test_SumCollectionElements_IndexOutOfRange_ThrowsIndexOutOfRangeException()
    {
        // Arrange
        int[] input = { 50, 13, 24, 66, 99, 69 };
        int index = 6;

        // Act & Assert
        Assert.That(() => this._exceptions.SumCollectionElements(input, index), Throws.InstanceOf<IndexOutOfRangeException>());
    }

    [Test]
    public void Test_GetElementAsNumber_ValidKey_ReturnsParsedNumber()
    {
        // Arrange
        Dictionary<string, string> input = new Dictionary<string, string>();
        input.Add("Kriso", "6");
        input.Add("Desislava", "7");
        input.Add("Hristina", "2");
        string key = "Hristina";
        int expected = 2;
        // Act
        int result = _exceptions.GetElementAsNumber(input, key);
        // Assert
        Assert.AreEqual(expected, result);
    }

    [Test]
    public void Test_GetElementAsNumber_KeyNotFound_ThrowsKeyNotFoundException()
    {
        // Arrange
        Dictionary<string, string> input = new Dictionary<string, string>();
        input.Add("Kriso", "6");
        input.Add("Desislava", "7");
        input.Add("Hristina", "2");
        string key = "Dimitrichko";

        // Act & Assert
        Assert.That(()=>this._exceptions.GetElementAsNumber(input, key), Throws.InstanceOf<KeyNotFoundException>());
    }

    [Test]
    public void Test_GetElementAsNumber_InvalidFormat_ThrowsFormatException()
    {
        // Arrange
        Dictionary<string, string> input = new Dictionary<string, string>();
        input.Add("Kriso", "6");
        input.Add("Desislava", "7");
        input.Add("Hristina", "UngaBunga");
        string key = "Hristina";

        // Act & Assert
        Assert.That(() => this._exceptions.GetElementAsNumber(input, key), Throws.TypeOf<FormatException>());
    }
}
