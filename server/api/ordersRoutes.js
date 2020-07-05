const express = require('express');
const router = express.Router();
const db = require('../db/models/');
const User = db.User;
const Order = db.Order;
const Product = db.Product;
const OrderDetail = db.OrderDetail;
const moment = require('moment');

router.get('/Uncreated/:userId', (req, res) => {
  //buscar usuario logeado
  Order.findOne({
    include: [
      {
        model: Product,
        attributes: ['name', 'id', 'image'],
      },
    ],
    where: {
      status: 'Uncreated',
      userId: req.params.userId,
    },
  }).then(order => res.json(order));
});

router.post('/', (req, res) => {
  // busca si existe una orden con el userid y con status 'Uncreated'
  Order.findOne({
    where: { status: 'Uncreated', userId: req.body.userId },
  }).then(order => {
    console.log(order);
    //si no se cumple la condicion del where crea una nueva orden
    if (!order) {
      Order.create({
        status: 'Uncreated',
        address: 'adress',
        userId: req.body.userId,
      }).then(newOrder => {
        //le agrega una producto a la orden nueva
        Product.findById(req.body.productId).then(product => {
          OrderDetail.create({
            price: product.price,
            amount: 1,
            productId: product.id,
            orderId: newOrder.id,
          }).then(orderDetail => res.json(orderDetail));
        });
      });
    } else {
      //si existe una orden uncreated y con el id del user
      // le agrega al order detail de esa orden el id el producto
      Product.findById(req.body.productId).then(product => {
        OrderDetail.findOne({
          where: { productId: product.id, orderId: order.id },
        }).then(orderdetail => {
          if (!orderdetail) {
            OrderDetail.create({
              price: product.price,
              productId: product.id,
              orderId: order.id,
            }).then(orderDetail => res.json(orderDetail));
          } else {
            orderdetail.update({ amount: Number(orderdetail.amount) + 1 });
          }
        });
      });
    }
  });
});

router.put('/', (req, res) => {
  OrderDetail.findOne({
    where: {
      orderId: req.body.orderId,
      productId: req.body.productId,
    },
  }).then(orderdetail => {
    orderdetail
      .update({ amount: Number(req.body.value) })
      .then(orderdetail => res.json(orderdetail));
  });
});

router.get('/:id/users', (req, res) => {
  Order.findAll({
    where: {
      userId: req.params.id,
    },
  }).then(orders => {
    res.json(orders);
  });
});

router.put('/changestatus', (req, res) => {
  Order.findById(req.body.orderId).then(order =>
    order
      .update({ status: req.body.status })
      .then(() => {
        return Order.findAll({
          include: [
            {
              model: User,
              as: 'user',
            },
          ],
        });
      })
      .then(orders => {
        res.json(orders);
      }),
  );
});

router.get('/', (req, res) => {
  Order.findAll({
    include: [
      {
        model: User,
        as: 'user',
      },
    ],
  }).then(orders => {
    res.json(orders);
  });
});

router.get('/:id/details', (req, res) =>
  Order.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: Product }],
  }).then(order => res.json(order)),
);

module.exports = router;
