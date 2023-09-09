const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


//comments add
router.post('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Comment.create({
      post_id: req.body.postId,
      body: req.body.commentText,
      user_id: req.session.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
