const express = require('express');
const router = express.Router();
const Users = require('../db/models/users');
const Products = require('../db/models/products');
const Reviews = require('../db/models/reviews');

router.get('/:id', (req, res) => {
  Reviews.findAll({
    where: {
      productId: req.params.id,
    },
  }).then(reviews => {
    res.send(reviews);
  });
});

router.post('/:id', (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const star = req.body.star;
  const productId = req.params.id;
  const userId = req.body.userId;
  Reviews.create({
    title,
    description: description,
    star: star,
  })
    .then(newReview => {
      newReview.setProduct(productId);
      newReview.setUser(userId);
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => res.status(500).send(err));
});

router.put('/:id', (req, res) => {
  const id = req.params.id;

  Reviews.update(req.body, {
    where: {
      id: id,
    },
    returning: true,
  })
    .then(response => {
      const review = response[1][0];
      return review;
    })
    .then(review => res.send(review))
    .catch(err => res.send(err.message));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Reviews.destroy({
    where: { id: id },
  })
    .then(deletedReview => {
      res.json(deletedReview);
    })
    .catch(res.send);
});

module.exports = router;
