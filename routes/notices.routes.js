const router = require('express').Router();
const noticeController = require('../controllers/notices.controllers');

// define routes here
router.post('/notices', noticeController.createNotice);
router.get('/notices', noticeController.viewNotices);
router.get('/notices/:id', noticeController.viewNoticeById);
router.put('/notices/:id', noticeController.updateNoticeById);
router.put('/notices/:id/noofviewers', noticeController.updateNoticeViewersById);
router.delete('/notices/view/:id', noticeController.deleteNoticeById);

module.exports = router;