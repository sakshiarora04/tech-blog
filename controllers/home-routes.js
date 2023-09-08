const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
// route to get all posts
router.get('/', async (req, res) => {
  // We find all posts in the db
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('signup');
});
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: {
            model: User,
          },
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render('one-post', {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// // route to get all categories and recipies
// router.get('/', async (req, res) => {
//   try {
//     const loggedIn = req.session.logged_in;
//     const categoryData = await Category.findAll();
//     const recipeData = await Recipe.findAll();
//     const categories = categoryData.map((category) =>
//       category.get({ plain: true })
//     );
//     const dateCreated = await Recipe.findAll({
//       order: [['date_created', 'ASC']],
//     });
//     const dateCreate = dateCreated.map((date) => date.get({ plain: true }));
//     const recipes = recipeData.map((recipie) => recipie.get({ plain: true }));
//     res.render('all', { dateCreate, recipes, categories, logged_in: loggedIn });
//   } catch (error) {
//     res.status(500).json(err);
//   }
// });
// // route to get date created-latest recipes
// router.get('/date', async (req, res) => {
//   try {
//     const loggedIn = req.session.logged_in;
//     const categoryData = await Category.findAll();
//     const recipeData = await Recipe.findAll();
//     const categories = categoryData.map((category) =>
//       category.get({ plain: true })
//     );
//     const dateCreated = await Recipe.findAll({
//       order: [['date_created', 'DESC']],
//     });
//     const dateCreate = dateCreated.map((date) => {
//       const recipe = date.get({ plain: true });
//       recipe.date_created = new Date(recipe.date_created).toLocaleString(
//         'en-AU'
//       );
//       return recipe;
//     });
//     const recipes = recipeData.map((recipie) => recipie.get({ plain: true }));
//     res.render('recipeDateCreated', {
//       dateCreate,
//       recipes,
//       categories,
//       logged_in: loggedIn,
//     });
//   } catch (error) {
//     res.status(500).json(err);
//   }
// });

// // get Recipe by Category id
// router.get('/:id', async (req, res) => {
//   try {
//     const loggedIn = req.session.logged_in;
//     const categoryData = await Category.findAll();
//     const categories = categoryData.map((category) =>
//       category.get({ plain: true })
//     );
//     const recipePktData = await Category.findByPk(req.params.id, {
//       include: [{ model: Recipe }],
//     });
//     const recipePK = recipePktData.get({ plain: true });
//     res.render('all', { recipePK, categories, logged_in: loggedIn });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // get recipe by id
// router.get('/recipes/:id', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//     });

//     const categoryData = await Category.findAll();
//     const categories = categoryData.map((category) =>
//       category.get({ plain: true })
//     );
//     // recipe including comments by user
//     const recipeData = await Recipe.findByPk(req.params.id, {
//       include: [
//         {
//           model: Comment,
//           include: {
//             model: User,
//           },
//         },
//       ],
//     });
//     const recipe = recipeData.get({ plain: true });
//     res.render('recipes', {
//       userData,
//       recipe,
//       categories,
//       logged_in: req.session.logged_in,
//       login: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
