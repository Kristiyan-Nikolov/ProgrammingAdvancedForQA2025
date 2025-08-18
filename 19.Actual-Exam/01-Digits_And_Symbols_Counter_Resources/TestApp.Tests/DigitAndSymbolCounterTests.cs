using System;
using System.Linq;
using System.Text;
using NUnit.Framework;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace TestApp.Tests;

public class DigitAndSymbolCounterTests
{

    [Test]
    public void Test_EmptyStringInput_ReturnsEmptyDictionary()
    {
        // Arrange
        string input = "";
        Dictionary<string, int> expected = new Dictionary<string, int>();
        // Act
        Dictionary<string, int> result = DigitAndSymbolCounter.CountDigitsAndSymbols(input);
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_NoDigitsStringInput_ReturnsOnlyNonDigitsCount()
    {
        // Arrange
        string input = "aBc#$%fs";
        Dictionary<string, int> expected = new Dictionary<string, int>()
        {
            { "non-digit symbol", 8 } 
        };
        // Act
        Dictionary<string, int> result = DigitAndSymbolCounter.CountDigitsAndSymbols(input);
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_NoOddDigitsStringInput_ReturnsOnlyEvenDigitsAndNonDigitsCount()
    {
        // Arrange
        string input = "aBc#$%fs84620";
        Dictionary<string, int> expected = new Dictionary<string, int>()
        {
            { "even digit", 5  },
            { "non-digit symbol", 8 }
        };
        // Act
        Dictionary<string, int> result = DigitAndSymbolCounter.CountDigitsAndSymbols(input);
        // Assert
        CollectionAssert.AreEquivalent(expected, result);
    }

    [Test]
    public void Test_NoEvenDigitsStringInput_ReturnsOnlyOddDigitsAndNonDigitsCount()
    {
        // Arrange
        string input = "aBc#$%fs13579";
        Dictionary<string, int> expected = new Dictionary<string, int>()
        {
            { "odd digit", 5  },
            { "non-digit symbol", 8 }
        };
        // Act
        Dictionary<string, int> result = DigitAndSymbolCounter.CountDigitsAndSymbols(input);
        result.conta
        // Assert
        CollectionAssert.AreEquivalent(expected, result);
    }

    [Test]
    public void Test_SymbolsEvenAndOddDigitsStringInput_ReturnsAllTypeOfCounts()
    {
        // Arrange
        string input = "aBc#$%fs1357902468";
        Dictionary<string, int> expected = new Dictionary<string, int>()
        {
            { "even digit", 5 },
            { "odd digit", 5  },
            { "non-digit symbol", 8 }
        };
        // Act
        Dictionary<string, int> result = DigitAndSymbolCounter.CountDigitsAndSymbols(input);
        // Assert
        CollectionAssert.AreEquivalent(expected, result);
    }
}