const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', async (req, res) => {
  try {
    // Fetch all tags and include associated products
    const tags = await Tag.findAll({ include: Product });
    res.json(tags);
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET a specific tag by ID
router.get('/:id', async (req, res) => {
  try {
    // Find a tag by its primary key (ID) and include associated products
    const tag = await Tag.findByPk(req.params.id, { include: Product });
    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.json(tag);
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json(err);
  }
});

// POST a new tag
router.post('/', async (req, res) => {
  try {
    const { tag_name } = req.body; // Extracting desired content name from request body

    // Check if required fields are missing in the request body
    if (!tag_name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new tag with the provided tag_name
    const newTag = await Tag.create({ tag_name });
    res.status(201).json(newTag);
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT update an existing tag by ID
router.put('/:id', async (req, res) => {
  try {
    const { tag_name } = req.body; // Update to use "tag_name"

    // Update the tag with the provided tag_name
    const updatedTag = await Tag.update({ tag_name }, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedTag);
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE a tag by ID
router.delete('/:id', async (req, res) => {
  try {
    const tagId = parseInt(req.params.id, 10); // Parse id parameter as integer with base 10
    if (isNaN(tagId)) {
      return res.status(400).json({ error: 'Invalid tag ID' });
    }

    // Delete the tag with the provided ID
    const deletedTag = await Tag.destroy({
      where: {
        id: tagId,
      },
    });
    if (deletedTag === 0) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (err) {
    console.error('Error in route:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
