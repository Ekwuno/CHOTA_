const Category = require('../Models/Categories');
const Place = require('../Models/Places');
const cloud = require('../functions/cloudinary');

exports.addCategory = function(req, res) {
        const category = {
            categoryName: req.body.categoryName,
            image: req.file.path,
            imageID: '',
            placeId: req.body.placeId
        }

    cloud.upload(category.image).then(result => {
        category.image = result.url;
        category.imageID = result.Id;
        Category.create(category, (err, inst) => {
            if(err) res.status(401).json({err: err, message: 'Cannot add category, try again', err});
            else {
                res.status(200).json({message: 'Category added succesfully!'});
            }
        })
    })
}

exports.getAllCategories = (req, res, next) => {
    Category.find().select('_id categoryName image')
    .exec((err, categories) => {
        if(err) res.status(404).json({message: 'error occured somewhere1'});
        else {
            try {
                res.status(200).json(categories);
            } catch(error) {
                res.status(206).json(error);
            }
        }
    })
}

exports.getACategory = (req, res, next) => {
    const category = req.params.category;
    Category.findOne({'categoryName': {$regex: category, $options: 'i'}})
    .populate('placeId')
    .exec()
    .then(result => {
        if(!result) {
            res.status(208).json({err: 'Oops! There is no result for your search'});
        }
        res.status(200).json({result: result});
    })
    .catch(err => {
        res.status(208).json({err: err});
    });
}

exports.getCategory = (req, res, next) => {
    const category = req.params.category;
    Category.findOne({'categoryName': category}).populate('placeId')
    .exec((err, result) => {
        if(err) res.status(302).json({message: err});
        res.json(result);
    })
}

exports.deleteAllCategory = (req, res, next) =>{
    const cat = req.params.category;
    Category.remove({})
    .exec()
    .then(place => {
        res.status(200).json({
            message: 'Yeap! Entry deleted successfully'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({
            error: 'Can\'t delete the specified place', err
        });
    })
};