const db = require('../models')
const Users = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt')


exports.create = async (req, res, next) => {

    const { name, email, password, age, gender, phoneNumber, address } = req.body;
        
  
    try {
    
        const hashedPassword = await bcrypt.hash(password, 12);
    
        const result = await Users.create({ name, email, password: hashedPassword, age, gender, phoneNumber, address});
    

        res.status(201).json(result);
      } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        
        console.log(error);
      }
    };


exports.findAll = async (req, res, next) => {
    try {
      const ALL = await Users.findAll();
      return res.status(200).json(ALL);
    } catch (error) {
      return res.status(500).json(error);
    }
  };


exports.findOne = async (req, res, next) => {
    try {
      const user = await Users.findByPk(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

exports.update = (req, res) => {
    const id = req.params.id;

    Users.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "user was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating user with id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Users.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "user was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete user with id=${id}. Maybe user was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete user with id=" + id
        });
      });
};
