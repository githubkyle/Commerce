const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  try {
    const allTags = Tag.findAll({
      include: [{ model: Product }, { model: ProductTag }]
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  try {
    const oneTag = Tag.findByPk(req.params.id, {
      include: [{ model: Product }, { model: ProductTag }]
    });

    res.status(200).json(oneTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new tag
  try {
    const newTag = Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  try {
    const userData = Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value

  try {
    const nukeTag = Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(nukeTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
