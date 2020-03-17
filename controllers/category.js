const Category = require('../models/category');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.categoryById = (req, res, next, id) => {
    Product.findById(id).exec((err, category) => {
        if(err || !category) {
            return res.status(400).json({
                error: 'Category does not exist'
            })
        }
        req.category = category;
        next();
    })
}

// CREATE
exports.create = ( req, res ) => {
  const category = new Category(req.body);
  category.save( (err, data) => {
      if( err ) {
          return res.status(400).json({
              error: errorHandler(err)
          })
      }
      res.json({ data });
  });
};

// READ
exports.read = (req, res) => {
    return res.json(req.category);
}

// READ ALL
exports.read = (req, res) => {
    Category.find().exec((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data); 
    })
}

// UPDATE
exports.update = (req, res) => {
    const category = req.category;
    category.name = req.body.name
    category.save( (err, data) => {
        if( err ) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    });
}

// DELETE
exports.remove = (req, res) => {
    const category = req.category;
    category.remove( (err, data) => {
        if( err ) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "Category Deleted"
        });
    });
}

