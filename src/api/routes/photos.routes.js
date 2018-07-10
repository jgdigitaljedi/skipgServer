var express = require('express');
var router = express.Router();
var ctrlPhotos = require('../controllers/photos.controller');
var uploadMw = require('../config/upload');

router.get('/', ctrlPhotos.getList);
router.get('/info/:id', ctrlPhotos.getPhotoInfo);
router.post('/', uploadMw.single('photo'), ctrlPhotos.uploadPhotos);
router.get('/:id', ctrlPhotos.downloadPhoto);
router.post('/all', ctrlPhotos.downloadAll);
router.delete('/', ctrlPhotos.deletePhoto);

router.post('/tag', ctrlPhotos.getPhotoByTag);
router.post('/uploader', ctrlPhotos.getPhotoByUploader);
router.patch('/tag/:id', ctrlPhotos.editTags);
router.patch('/comment/:id', ctrlPhotos.editComments);

module.exports = router;
