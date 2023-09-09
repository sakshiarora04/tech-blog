const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/:id', withAuth, async (req, res) => {
  try {
    console.log('here is the req.body', req.body);
    const updateData = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updateData[0]) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletePost = await Post.destroy({ where: { id: req.params.id } });
    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
