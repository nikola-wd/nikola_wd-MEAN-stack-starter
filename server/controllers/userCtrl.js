const User = require('../models/userModel');


module.exports = {


  // async await way ----------------------------------------------------------------
  getUsers: async (req, res, next) => {
    const users = await User.find({});
    // throw new Error('dummy error'); // this would be cought by catch method
    res.status(200).json(users);
  },

  // GET
  getUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  },

  // POST
  newUser: async (req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(201).json(user);
  },


  // PUT (replace whole user)
  replaceUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const oldUser = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ success: true });
  },

  // PATCH (replace only a property or a few props)
  updateUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const oldUser = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ success: true });
  },

  // DELETE
  deleteUser: async (req, res, next) => {
    const { userId } = req.params;
    await User.findByIdAndRemove(userId);
    res.status(200).json({ success: true });
  }

  // end - async await way ------------------------------------------------





};
