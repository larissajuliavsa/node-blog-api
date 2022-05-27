const services = require('../services');

const getPosts = async (_req, res, next) => {
  try {
    const posts = await services.post.getPosts();    
    
    return res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getPosts,
};
