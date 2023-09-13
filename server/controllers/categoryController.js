const Category = require('../models/Category');

module.exports = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  getCategoryById: async (req, res) => {
    const { id } = req.params;

    try {
      const category = await Category.findById(id);

      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }

      res.json(category);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  createCategory: async (req, res) => {
    const { name } = req.body;

    try {
      const category = new Category({ name });
      await category.save();

      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  updateCategory: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const category = await Category.findByIdAndUpdate(id, { name }, { new: true });

      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }

      res.json(category);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  deleteCategory: async (req, res) => {
    const { id } = req.params;

    try {
      const category = await Category.findByIdAndDelete(id);

      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }

      res.json({ message: 'Category deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },
};
