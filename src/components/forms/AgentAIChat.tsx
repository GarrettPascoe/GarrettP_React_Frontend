import { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import blue from "@mui/material/colors/blue";

type ChatMessage = {
  role: "user" | "agent";
  content: string;
  link?: string;
};

const AgentAIChat = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: input },
    ];

    setMessages(newMessages);

    try {
      const response = await fetch(
        "https://garrettpascoe-hsfaechjggevhcc7.centralus-01.azurewebsites.net/carchooser/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input }),
        },
      );

      const data = await response.json();

      setMessages([
        ...newMessages,
        {
          role: "agent",
          content: data.reply.message,
          link: data.reply.link,
        },
      ]);
    } catch (error) {
      console.error(error);
    }

    setInput("");
  };

  return (
    <>
      <Paper elevation={10} sx={{ backgroundColor: blue[50] }}>
        <Paper elevation={11} sx={{ backgroundColor: blue[300] }}>
          <h4 style={{ margin: 10 }}>Ford Vehicle Assistant</h4>
        </Paper>
        <div className="row">
          {messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: "8px" }}>
              <strong>{msg.role === "user" ? "You" : "Agent"}:</strong>
              <div>{msg.content}</div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <TextField
              className="bg-light"
              label="Type your message here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              variant="filled"
            />
          </div>
          <div className="col-1" />
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <button onClick={sendMessage}>Submit</button>
          </div>
          <div className="col-1" />
        </div>
      </Paper>
    </>
  );
};

export default AgentAIChat;
