const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for cases where userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.send(user);
  }
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});