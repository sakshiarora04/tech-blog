const router = require('express').Router();

const userRoutes = require('./userRoutes');
const addPostRoutes = require('./addPostRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/add-post', addPostRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);





module.exports = router;
