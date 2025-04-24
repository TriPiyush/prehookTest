const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '1') {
    res.json({ id, name: 'Alice' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
