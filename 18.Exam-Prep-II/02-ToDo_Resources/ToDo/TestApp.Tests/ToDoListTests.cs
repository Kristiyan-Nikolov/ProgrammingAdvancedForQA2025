using Microsoft.VisualBasic;
using NUnit.Framework;
using NUnit.Framework.Constraints;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TestApp.Todo;

namespace TestApp.Tests;

[TestFixture]
public class ToDoListTests
{
    private ToDoList _toDoList = null!;
    
    [SetUp]
    public void SetUp()
    {
        this._toDoList = new();
    }
    
    [Test]
    public void Test_AddTask_TaskAddedToToDoList()
    {
        // Arrange
        string title = "Finish exam prep";
        DateTime dateTime = DateTime.Now;
        
        
        // Act
        _toDoList.AddTask(title, dateTime);
        // Assert
        Assert.That(_toDoList.DisplayTasks, Does.Contain("To-Do List:" + Environment.NewLine+"[ ] Finish exam prep - Due: " + dateTime.ToString("MM/d/yyyy")));
    }

    [Test]
    public void Test_CompleteTask_TaskMarkedAsCompleted()
    {
        // Arrange
        string title = "Finish exam prep";
        DateTime dateTime = DateTime.Now;
        _toDoList.AddTask(title, dateTime);

        // Act
        _toDoList.CompleteTask(title);
        // Assert
        Assert.That(_toDoList.DisplayTasks, Does.Contain("To-Do List:" + Environment.NewLine + "[✓] Finish exam prep - Due: " + dateTime.ToString("MM/d/yyyy")));
    }

    [Test]
    public void Test_CompleteTask_TaskNotFound_ThrowsArgumentException()
    {   
        //arrange
        string title = "Finish exam prep";
        DateTime dateTime = DateTime.Now;
        _toDoList.AddTask(title, dateTime);
        //act and assert
        Assert.That(()=>  _toDoList.CompleteTask("Chill"), Throws.ArgumentException);
    }

    [Test]
    public void Test_DisplayTasks_NoTasks_ReturnsEmptyString()
    {
        // Arrange
        string expected = "To-Do List:";

        Assert.That(_toDoList.DisplayTasks, Is.EqualTo(expected));
    }

    [Test]
    public void Test_DisplayTasks_WithTasks_ReturnsFormattedToDoList()
    {
        // Arrange
        _toDoList.AddTask("Read Lecture", DateTime.Now.AddDays(2));
        _toDoList.AddTask("Finish examp prep", DateTime.Now.AddDays(1));


        // Act
        string result = _toDoList.DisplayTasks();
        // Assert
        Assert.That(result, Does.Contain("To-Do List:"));
        Assert.That(result, Does.Contain("[ ] Read Lecture - Due: 08/18/2025"));
        Assert.That(result, Does.Contain("[ ] Finish examp prep - Due: 08/17/2025"));
    }
}
