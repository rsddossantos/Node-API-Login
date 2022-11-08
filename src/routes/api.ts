import { Router } from 'express';
import { Auth } from '../middlewares/auth';
import multer from 'multer';

import * as ApiController from '../controllers/apiController';

const upload = multer({
    dest: './tmp',
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
        cb(null, allowed.includes( file.mimetype ));
    },
    limits: { fieldSize: 2000000 }
});

const router = Router();

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

router.get('/list', Auth.private, ApiController.list);

router.post('/upload', upload.single('avatar'), ApiController.uploadFile);

export default router;

