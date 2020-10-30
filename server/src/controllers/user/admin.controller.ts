import { Request, Response } from 'express'
import adminSchema from '../../models/user/admin.model';


class AdminController {

    public async allAdmin(req: Request, res: Response): Promise<void> {
        const admin = await adminSchema.find({}, function (err, response) {
            if (err) {
                res.json('erro')
            } else {
                res.json(response);
            }
        });
    }

    public async allAdminById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await adminSchema.find({ id: id }, (err, response) => {
            if (err) {
                res.json(err)
            }
            if (response[0] == null) {
                res.json(null)
            } else {
                res.json(response[0])
            }
        })
    }

    public async CreateAdmin(req: Request, res: Response): Promise<void> {
        const data = req.body;
        const usu = new adminSchema(data);
        usu.save();
        res.json({ status: 'exelent' })
    }
    public async DeleteAmind(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        await adminSchema.deleteMany({ id: id }, (err) => {
            if (err) {
                res.json(err)
            }else{
                res.json('user delect')
            }
        })
    }
}


const adminController = new AdminController();
export default adminController;