using System;
using System.Linq;
using System.Text;
using NUnit.Framework;
using System.Threading.Tasks;
using System.Collections.Generic;

using NUnit.Framework;

using TestApp.Chat;

namespace TestApp.Tests;

[TestFixture]
public class ChatRoomTests
{
    private ChatRoom _chatRoom = null!;
    
    [SetUp]
    public void Setup()
    {
        this._chatRoom = new();
    }
    
    [Test]
    public void Test_SendMessage_MessageSentToChatRoom()
    {
        // Arrange
        _chatRoom.SendMessage("Kriso", "Tozi put stanah po rano");
        string expected = "Chat Room Messages:" + Environment.NewLine +
                          "Kriso: Tozi put stanah po rano";

        // Act & Assert
        string result = _chatRoom.DisplayChat();
        Assert.That(result, Is.EqualTo(expected));

    }

    [Test]
    public void Test_DisplayChat_NoMessages_ReturnsEmptyString()
    {
       
        // Act
        string result = _chatRoom.DisplayChat();
        // Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_DisplayChat_WithMessages_ReturnsFormattedChat()
    {
        // Arrange
        _chatRoom.SendMessage("Kriso", "Tozi put stanah po rano");
        _chatRoom.SendMessage("Vess", "Tova e tvurde lesno");
        string expected = "Chat Room Messages:" + Environment.NewLine +
                          "Kriso: Tozi put stanah po rano" + Environment.NewLine +
                          "Vess: Tova e tvurde lesno";

        // Act & Assert
        string result = _chatRoom.DisplayChat();
        Assert.That(result, Is.EqualTo(expected));
    }
}
