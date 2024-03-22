const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// GET all products
router.get('/', async (req, res) => {
  try {
    // Fetch all products and include associated categories and tags
    const products = await Product.findAll({ include: [Category, Tag] });
    res.json(products);
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET a specific product by ID
router.get('/:id', async (req, res) => {
  try {
    // Find a product by its primary key (ID) and include associated categories and tags
    const product = await Product.findByPk(req.params.id, { include: [Category, Tag] });
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new product
router.post('/', async (req, res) => {
  try {
    const { product_name, price, stock, category_id, tagIds } = req.body;

    // Check if required fields are missing in the request body
    if (!product_name || !price || !stock || !category_id || !tagIds || !tagIds.length) {
      return res.status(400).json({ error: 'Missing required fields or tags' });
    }

    // Check if the provided category_id exists in the categories table
    const existingCategory = await Category.findByPk(category_id);
    if (!existingCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }

    // Check if all tagIds provided exist in the tags table
    const existingTags = await Tag.findAll({ where: { id: tagIds } });
    if (existingTags.length !== tagIds.length) {
      return res.status(404).json({ error: 'One or more tags not found' });
    }

    // Create the new product
    const newProduct = await Product.create({
      product_name,
      price,
      stock,
      category_id,
    });

    // Associate the product with tags
    const productTagIdArr = tagIds.map((tag_id) => ({
      product_id: newProduct.id,
      tag_id,
    }));
    await ProductTag.bulkCreate(productTagIdArr);

    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT update an existing product by ID
router.put('/:id', async (req, res) => {
  try {
    const { product_name, price, stock, category_id, tagIds } = req.body;

    // Check if required fields are missing in the request body
    if (!product_name || !price || !stock || !category_id) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Update the product with the provided data and fetch the updated product data
    const [rowsAffected, [updatedProduct]] = await Product.update(
      { product_name, price, stock, category_id },
      {
        where: { id: req.params.id },
        returning: true, // This ensures that the updated data is returned
      }
    );

    // Check if any rows were affected (product updated successfully)
    if (rowsAffected === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // If tagIds are provided in the request body, update product tags
    if (tagIds && tagIds.length) {
      await ProductTag.destroy({ where: { product_id: req.params.id } });
      const productTagIdArr = tagIds.map((tag_id) => ({
        product_id: req.params.id,
        tag_id,
      }));
      await ProductTag.bulkCreate(productTagIdArr);
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const productId = parseInt(req.params.id, 10);
    if (isNaN(productId)) {
      return res.status(400).json({ error: 'Invalid product ID' });
    }

    // Delete the product with the provided ID
    const deletedProduct = await Product.destroy({
      where: {
        id: productId,
      },
    });
    
    // Check if any product was deleted
    if (deletedProduct === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
