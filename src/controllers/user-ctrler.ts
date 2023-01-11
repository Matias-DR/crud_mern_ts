export class UserCtrler {
    private userModel: any;

    constructor() {
        this.userModel = require("../models/user-model");
    }

    public getUsers(req: any, res: any): void {
        this.userModel.find({ name: { $regex: req.body.input } }, (err: any, users: []) => {
            if (err) res.send('Error al cargar los usuarios, por favor reintente')
            else res.send(users)
        })
    }

    public getUser(req: any, res: any): void {
        this.userModel.findOne({ id: req.body.id }, (err: any, user: []) => {
            if (err) res.send('Error al cargar los usuarios, por favor reintente')
            else res.send(user)
        })
    }

    public addUser(req: Request, res: any): void {
        const new_user = new user_model({
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            prof_img: req.body.prof_img ? req.body.prof_img : user_def_prof_pic
        })
        // Definición de qué hacer con la inforomación
        new_user.save((err) => {
            if (err) res.send('No se pudo agregar, por favor reintente')
            else res.send('Usuario añadido')
        })
    }
}