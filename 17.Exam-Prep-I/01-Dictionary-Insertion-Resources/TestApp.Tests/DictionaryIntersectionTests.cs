using System;
using System.Text;
using System.Linq;
using System.Collections.Generic;

using NUnit.Framework;

namespace TestApp.Tests;

[TestFixture]
public class DictionaryIntersectionTests
{
    [Test]
    public void Test_Intersect_TwoEmptyDictionaries_ReturnsEmptyDictionary()
    {
        // Arrange
        Dictionary<string, int> dict1 = new Dictionary<string, int>() { };
        Dictionary<string, int> dict2 = new Dictionary<string, int>() { };
        Dictionary<string, int> expected = new Dictionary<string, int>() { };
        // Act
        Dictionary<string, int> result = DictionaryIntersection.Intersect(dict1, dict2);
        // Assert
        CollectionAssert.AreEquivalent(result, expected);
    }

    [Test]
    public void Test_Intersect_OneEmptyDictionaryAndOneNonEmptyDictionary_ReturnsEmptyDictionary()
    {
        // Arrange
        Dictionary<string, int> dict1 = new Dictionary<string, int>() 
        { 
            { "Parchevic", 29 },
            { "Parushev", 14 }
        };
        Dictionary<string, int> dict2 = new Dictionary<string, int>() { };
        Dictionary<string, int> expected = new Dictionary<string, int>() { };
        // Act
        Dictionary<string, int> result = DictionaryIntersection.Intersect(dict1, dict2);
        // Assert
        CollectionAssert.AreEquivalent(result, expected);
    }

    [Test]
    public void Test_Intersect_TwoNonEmptyDictionariesWithNoCommonKeys_ReturnsEmptyDictionary()
    {
        // Arrange
        Dictionary<string, int> dict1 = new Dictionary<string, int>()
        {
            { "Parchevic", 29 },
            { "Parushev", 14 }
        };
        Dictionary<string, int> dict2 = new Dictionary<string, int>() 
        {
            {"Ankalec", 14 },
            {"Boris III", 3 },
            {"Slivnitsa", 1 }
        };
        Dictionary<string, int> expected = new Dictionary<string, int>() { };
        // Act
        Dictionary<string, int> result = DictionaryIntersection.Intersect(dict1, dict2);
        // Assert
        CollectionAssert.AreEquivalent(result, expected);
    }

    [Test]
    public void Test_Intersect_TwoNonEmptyDictionariesWithCommonKeysAndValues_ReturnsIntersectionDictionary()
    {
        // Arrange
        Dictionary<string, int> dict1 = new Dictionary<string, int>()
        {
            { "Parchevic", 29 },
            { "Parushev", 14 },
            { "Dobrudja", 7 }
        };
        Dictionary<string, int> dict2 = new Dictionary<string, int>()
        {
            { "Ankalec", 14 },
            { "Parchevic", 29 },
            { "Parushev", 14 },
            { "Boris III", 3 },
            { "Slivnitsa", 1 }
        };
        Dictionary<string, int> expected = new Dictionary<string, int>() 
        {
            { "Parchevic", 29 },
            { "Parushev", 14 }
        };
        // Act
        Dictionary<string, int> result = DictionaryIntersection.Intersect(dict1, dict2);
        // Assert
        CollectionAssert.AreEquivalent(result, expected);
    }

    [Test]
    public void Test_Intersect_TwoNonEmptyDictionariesWithCommonKeysAndDifferentValues_ReturnsEmptyDictionary()
    {
        {
            // Arrange
            Dictionary<string, int> dict1 = new Dictionary<string, int>()
        {
            { "Parchevic", 29 },
            { "Parushev", 14 },
            { "Dobrudja", 7 }
        };
            Dictionary<string, int> dict2 = new Dictionary<string, int>()
        {
            
            { "Parchevic", 28 },
            { "Parushev", 16 },
            {"Dobrudja", 6 }
            
        };
            Dictionary<string, int> expected = new Dictionary<string, int>()
        {
            
        };
            // Act
            Dictionary<string, int> result = DictionaryIntersection.Intersect(dict1, dict2);
            // Assert
            CollectionAssert.AreEquivalent(result, expected);
        }
    }
}
