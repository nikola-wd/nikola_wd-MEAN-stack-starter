// const express = require('express');
// const router = express.Router();

const router = require('express-promise-router')(); // this gets express + router + promises

// import controllers for user endpoint
const {
  getUsers,
  getUser,
  newUser,
  replaceUser,
  updateUser,
  deleteUser
} = require('../controllers/userCtrl');

// end of imports ------------------------------------------------------------


/* TEMPORARY */ /* add mognoDB later, and uninstall axios */
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
/* END-TEMPORARY */ /* add mognoDB later, and uninstall axios */


/* default api endpoint /api */
router.get('/', (req, res) => {
  res.send('api works');
});

/* /api/users endpoint */

router.get('/users', getUsers);
router.post('/users', newUser);

router.get('/users/:userId', getUser);
router.put('/users/:userId', replaceUser);
router.patch('/users/:userId', updateUser);
router.delete('/users/:userId', deleteUser);




/* TEMPORARY */ /* add mognoDB later, and uninstall axios */
/* /api/posts endpoint  */
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});
/* END-TEMPORARY */ /* add mognoDB later, and uninstall axios */



module.exports = router;
