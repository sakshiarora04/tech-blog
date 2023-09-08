const router = require('express').Router();
const userRoutes = require('./userRoutes');
const addPostRoutes = require('./addPostRoutes');


router.use('/users', userRoutes);
router.use('/add-post', addPostRoutes);



module.exports = router;
