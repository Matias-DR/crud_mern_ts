import { Router, Request, Response } from 'express';
import { UserCtrler } from '../controllers/user-ctrler';

class Routes {
    router: Router;
    private usrCtrler: UserCtrler;

    constructor() {
        this.router = Router();
        this.usrCtrler = new UserCtrler();
    }

    config(): void {
        this.router.post('/get_users', this.usrCtrler.getUsers)
        this.router.post('/get_user', this.usrCtrler.getUser)
        this.router.post('/add_user', this.usrCtrler.addUser)
        this.router.post('/edit_user', this.usrCtrler.editUser)
        this.router.post('/del_user', this.usrCtrler.delUser)
    }
}

const routes = new Routes();

export default routes.router;