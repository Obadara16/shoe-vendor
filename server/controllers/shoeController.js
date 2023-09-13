
const Shoe = require('../models/Shoe');

module.exports = {
  getAllShoes: async (req, res) => {
    try {
      const shoes = await Shoe.find();
      res.json(shoes);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  getShoeById: async (req, res) => {
    const { id } = req.params;

    try {
      const shoe = await Shoe.findById(id);

      if (!shoe) {
        return res.status(404).json({ message: 'Shoe not found' });
      }

      res.json(shoe);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  createShoe: async (req, res) => {
    const { name, price, color, size, category, subcategory } = req.body;

    try {
      const shoe = new Shoe({ name, price, color, size, category, subcategory });
      await shoe.save();

      res.status(201).json(shoe);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  updateShoe: async (req, res) => {
    const { id } = req.params;
    const { name, price, color, size, category, subcategory } = req.body;

    try {
      const shoe = await Shoe.findByIdAndUpdate(id, { name, price, color, size, category, subcategory }, { new: true });

      if (!shoe) {
        return res.status(404).json({ message: 'Shoe not found' });
      }

      res.json(shoe);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  deleteShoe: async (req, res) => {
    const { id } = req.params;

    try {
      const shoe = await Shoe.findByIdAndDelete(id);

      if (!shoe) {
        return res.status(404).json({ message: 'Shoe not found' });
      }

      res.json({ message: 'Shoe deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },
};
