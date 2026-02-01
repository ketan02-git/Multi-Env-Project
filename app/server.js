import express from 'express';
const app = express();

const PORT = 3000;
const ENV = "Dev";

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js App</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #ff9a9e, #fad0c4, #a18cd1, #fbc2eb);
          font-family: 'Arial', sans-serif;
        }
        h1 {
          color: #fff;
          font-size: 2.5rem;
          text-align: center;
          text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
        }
      </style>
    </head>
    <body>
      <h1>🚀 Node.js App Running In ${ENV} Environment</h1>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
