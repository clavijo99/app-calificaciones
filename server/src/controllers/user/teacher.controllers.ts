import { Request, Response } from 'express';
import teacherSchema from '../../models/user/teacher.model';


class TeacherController {

    public async all(req: Request, res: Response): Promise<void> {
        const teacher = await teacherSchema.find({}, (err, response) => {
            if (err) {
                res.json('erro')
            } else {
                res.json(response);
            }
        })
    }
    public async CreateTeacher(req: Request, res: Response): Promise<void> {
        const data = req.body;

        const teacher = new teacherSchema(data);
        teacher.save();
        res.json(data)
    }
}

const teacherController = new TeacherController();
export default teacherController;