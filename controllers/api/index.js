const router = require('express').Router();
const userRoutes = require('./userRoutes');
const addPostRoutes = require('./addPostRoutes');
const commentRoutes = require('./commentRoutes');



router.use('/users', userRoutes);
router.use('/add-post', addPostRoutes);

router.use('/comments', commentRoutes);




module.exports = router;
