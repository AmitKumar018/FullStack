import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      category: "programming",
      setup: "Why do programmers prefer dark mode?",
      punchline: "Because light attracts bugs!",
    },
    {
      id: 2,
      category: "tech",
      setup: "How does a computer get drunk?",
      punchline: "It takes screenshots!",
    },
    {
      id: 3,
      category: "developer life",
      setup: "Why did the developer go broke?",
      punchline: "Because he used up all his cache!",
    },
    {
      id: 4,
      category: "AI",
      setup: "Why did the AI cross the road?",
      punchline: "It was trained on the chicken dataset!",
    },
    {
      id: 5,
      category: "frontend",
      setup: "Why did the React developer stay calm?",
      punchline: "Because he kept his state under control!",
    },
    {
      id: 6,
      category: "backend",
      setup: "Why do backend devs love coffee?",
      punchline: "Because they can’t function without it!",
    },
    {
      id: 7,
      category: "database",
      setup: "Why did the SQL query break up with the database?",
      punchline: "It found no connection!",
    },
    {
      id: 8,
      category: "general",
      setup: "Why don’t skeletons fight each other?",
      punchline: "They don’t have the guts.",
    },
    {
      id: 9,
      category: "hardware",
      setup: "Why was the computer cold?",
      punchline: "It left its Windows open!",
    },
    {
      id: 10,
      category: "office",
      setup: "Why did the employee get fired from the calendar factory?",
      punchline: "He took a few days off!",
    },
  ];

  res.send(jokes);
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
