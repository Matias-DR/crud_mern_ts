import React, { Component } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, NavigateFunction } from "react-router-dom";
import Avatar from 'react-avatar-edit';
// import { withRouter, RouteComponentProps } from 'react-router-dom';
// import GMap from './g_map_comp';

interface Props { }

interface State {
    nav: NavigateFunction;
    data: any
}

export default class UserAdd extends Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props);
        // state.nav = useNavigate()
    }

    addUser() {
        let user = {
            name: this.state.data.name,
            email: this.state.data.email,
            phone: this.state.data.phone,
            profImg: this.state.data.profImg,
            location: this.state.data.location,
            id: uniqid()
        }
        axios.post('api/user/add_user', user).then(
            res => {
                Swal.fire(res.data)
                this.state.nav('/')
            }).then(err => {
                console.log(err)
            })
    }

    onNameChange(e: string) {
        this.setState(prevState => ({ data: { ...prevState.data, name: e } }));
    }

    onEmailChange(e: string) {
        this.setState({ data: { ...this.state.data, email: e } });;
    }

    onPhoneChange(e: string) {
        this.setState({ data: { ...this.state.data, phone: e } });;
    }

    onProfImgChange(e: string | null) {
        this.setState({ data: { ...this.state.data, email: e } });;
    }

    render() {
        return (
            <div className="container text-center" >
                <div className="row">
                    <h2 className="mt-4">Agregar usuarios</h2>
                </div>
                <div className="row">
                    <div className="col border border-warning">
                        <div className="mt-1">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={this.state.data.name} onChange={(e) => { this.setState(prevState => ({ data: { ...prevState.data, name: e.target.value } })) }}></input>
                        </div>
                        <div className="mt-1">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" value={this.state.data.email} onChange={(e) => { this.setState(prevState => ({ data: { ...prevState.data, email: e.target.value } })) }}></input>
                        </div>
                        <div className="mt-1">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input type="tel" className="form-control" value={this.state.data.phone} onChange={(e) => { this.setState(prevState => ({ data: { ...prevState.data, phone: e.target.value } })) }}></input>
                        </div>
                        <button onClick={this.addUser} className="mt-3 mb-3 btn btn-success">Guardar usuario</button>
                    </div>
                    <div className="col">
                        <Avatar onCrop={(image: string) => this.setState(prevState => ({ data: { ...prevState.data, profImg: image } }))} onClose={() => this.setState(prevState => ({ data: { ...prevState.data, profImg: null } }))} width={320} height={320} imageWidth={320}></Avatar>
                    </div>
                    <div className="col">
                        <img src={this.state.data.profImg} alt="..."></img>
                    </div>
                    <div className="col">
                        {/* <GMap /> */}
                    </div>
                </div>
            </div>
        )
    }
}