const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestLowercase = alphabets
    .filter(char => char.toLowerCase() === char)
    .sort((a, b) => b.localeCompare(a))[0] || [];

  res.json({
    is_success: true,
    user_id: "Bhumireddy Thanmaye", 
    email: "bhumireddy.thanmaye2021@vitstudent.ac.in", 
    roll_number: "21BCI0013", 
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
