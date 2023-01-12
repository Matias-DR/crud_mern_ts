import { Request, Response } from 'express';
import { UserModel } from '../models/user-model';
import fs from 'fs';

export class UserCtrler {
    private user_def_prof_pic: string;

    constructor() {
        this.user_def_prof_pic = "data:image/png;base64," + fs.readFileSync('./routes/user_def_prof_pic')
    }

    public getUsers(req: Request, res: Response): void {
        UserModel.find({ name: { $regex: req.body.input } }, (err: NativeError | null, users: []) => {
            if (err) res.send('Error al cargar los usuarios, por favor reintente')
            else res.send(users)
        })
    }

    public getUser(req: Request, res: Response): void {
        UserModel.findOne({ id: req.body.id }, (err: NativeError | null, user: []) => {
            if (err) res.send('Error al cargar los usuarios, por favor reintente')
            else res.send(user)
        })
    }

    public addUser(req: Request, res: Response): void {
        const new_user = new UserModel({
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            prof_img: req.body.prof_img ? req.body.prof_img : this.user_def_prof_pic
        })
        new_user.save((err: NativeError | null) => {
            if (err) res.send('No se pudo agregar, por favor reintente')
            else res.send('Usuario añadido')
        })
    }

    public editUser(req: Request, res: Response): void {
        UserModel.findOneAndUpdate(
            { 'id': req.body.id }, {
            'name': req.body.name,
            'email': req.body.email,
            'phone': req.body.phone,
            'prof_img': req.body.prof_img ? req.body.prof_img : this.user_def_prof_pic
        }, (err: NativeError | null) => {
            if (err) res.send('Error al editar el usuario, por favor reintente')
            else res.send('Usuario editado')
        })
    }

    public delUser(req: Request, res: Response): void {
        UserModel.findOneAndDelete({ id: req.body.id }, (err: NativeError | null) => {
            if (err) res.send('Error al eliminar el usuario, por favor reintente')
            else res.send(`Usuario eliminado`)
        })
    }
}