const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
// route to get all posts

router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/edit/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        // {
        //   model: Comment,
        //   include: {
        //     model: User,
        //     attributes: ['username'],
        //   },
        // },
        {
          model: User,
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render('edit-delete', {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/add', (req, res) => {
  res.render('add-post', {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
