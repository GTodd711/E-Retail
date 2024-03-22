const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
router.get('/', async (req, res) => {
  try {
    // Fetch all categories and include associated products
    const categories = await Category.findAll({ include: Product });
    res.json(categories);
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET a specific category by ID
router.get('/:id', async (req, res) => {
  try {
    // Find a category by its primary key (ID) and include associated products
    const category = await Category.findByPk(req.params.id, { include: Product });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.json(category);
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new category
router.post('/', async (req, res) => {
  try {
    const { category_name } = req.body; // Extracting desired content name from request body

    if (!category_name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new category with the provided category_name
    const newCategory = await Category.create({ category_name });
    res.status(201).json(newCategory);
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT update an existing category by ID
router.put('/:id', async (req, res) => {
  try {
    const { category_name } = req.body;

    // Check if category_name exists in the request body
    if (!category_name) {
      return res.status(400).json({ error: 'Missing category_name field' });
    }

    // Update the category and fetch the updated category data
    const [rowsAffected, updatedCategory] = await Category.update(
      { category_name },
      {
        where: { id: req.params.id },
        returning: true, // This ensures that the updated data is returned
      }
    );

    // Check if any rows were affected (category updated successfully)
    if (rowsAffected === 0 || !updatedCategory || updatedCategory.length === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json(updatedCategory[0]);
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE a category by ID
router.delete('/:id', async (req, res) => {
  try {
    const categoryId = parseInt(req.params.id,); // Parse id parameter as integer
    if (isNaN(categoryId)) {
      return res.status(400).json({ error: 'Invalid category ID' });
    }

    // Delete the category with the provided ID
    const deletedCategory = await Category.destroy({
      where: {
        id: categoryId,
      },
    });
    if (deletedCategory === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
