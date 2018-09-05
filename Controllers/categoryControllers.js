const Category = require('../Models/Categories');
const Place = require('../Models/Places');
const cloud = require('../functions/cloudinary');

exports.addCategory = function(req, res) {
    // const category = new Category({
        const category = {
            categoryName: req.body.categoryName,
            image: req.file.path,
            imageID: '',
            placeId: req.body.placeId
        }
        
    // });

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

//     category
//     .save()
//     .then(result => {
//         // console.log(`This category have been added!`);
//         res.status(200).json({message: 'Successfully added!'});
//     })
//     .catch(err => {
//         // console.log(err);
//         res.status(500).json({
//             error: "Cannot add category, please try again", err
//         });
//     });
// }

exports.getAllCategories = (req, res, next) => {
    Category.find().select('_id categoryName image')
    .exec((err, categories) => {
        if(err) res.status(404).json({message: 'error occured somewhere'});
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
    Category.findOne({'categoryName': category})
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


exports.deleteCategory = (req, res, next) => {
    try {
        const id = req.params.id;
        Category.findById(id)
        .exec()
        .then(category => {
            const imageID = category.imageID;
            cloud.delete(imageID);
            Category.remove({_id: req.params.id}).exec()
            .then(result => {
                res.status(200).json({message: 'This category have been deleted!'});
            })
            .catch(err => {
                res.status(405).json({err: err});
            });
        })
        .catch(err => {
            res.status(500).json({err: 'Cannot delete this category'});
        });
    } catch(error) {
        res.status(408).json(error);
    }
}



