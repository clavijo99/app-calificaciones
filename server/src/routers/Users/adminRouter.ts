import { Router, Request, Response} from 'express';
import adminController from '../../controllers/user/admin.controller'

class AdminRouters { 

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
    this.router.get('/' , adminController.allAdmin);
    this.router.get('/:id' , adminController.allAdminById)
    this.router.post('/' , adminController.CreateAdmin)
    this.router.delete('/:id' , adminController.DeleteAmind)
    }
}

const adminRouter = new AdminRouters();

export default adminRouter.router;