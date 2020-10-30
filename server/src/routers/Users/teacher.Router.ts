import { Router } from 'express';
import teacherController from '../../controllers/user/teacher.controllers';

class TeacherRouter {

    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/' , teacherController.all)
        this.router.post('/' , teacherController.CreateTeacher);
    }
}

const teacherRouter = new TeacherRouter();
export default teacherRouter.router;