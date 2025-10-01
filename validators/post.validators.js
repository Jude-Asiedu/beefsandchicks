// validators/post.validator.js
module.exports = {
  createPost: {
    title: { type: "string", optional: false, max: 100 },
    content: { type: "string", optional: false, max: 5000 },
    image_url: { type: "string", optional: false, max: 100 }
  },
  updatePost: {
    title: { type: "string", optional: false, max: 100 },
    content: { type: "string", optional: true, max: 5000 }
  },
  postIdParam: {
    id: { type: "number", positive: true, integer: true }
  }
};
