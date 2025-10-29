export default function handler(req, res) {
  const sample = require('../../app/data/cards.json')
  res.status(200).json({ cards: sample.slice(0, 12) })
}
