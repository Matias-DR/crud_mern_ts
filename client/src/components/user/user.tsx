import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Swal from 'sweetalert2';
import { UserModel } from '../../../../src/models/user-model';

interface Props {
    data: UserModel;
    userDeleted: any;
}
interface State {
    aos: any
}

export default class User extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            aos: AOS
        }
    }

    componentDidMount() {
        this.state.aos.init()
    }

    delUser() {
        axios.post('api/user/del_user', { id: this.props.data.id }).then(
            res => {
                Swal.fire(res.data)
                this.props.userDeleted(true)
            }).catch(err => { alert(err) })
    }

    render() {
        return (
            <div className="col">
                <div className="card h-100" data-aos="zoom-in">
                    <img src={this.props.data.prof_img} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.name}</h5>
                        <p className="card-text">{this.props.data.email}</p>
                        <p className="card-text">{this.props.data.phone}</p>
                        <p className="card-text">{this.props.data.location}</p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col">
                            <Link to={`/user_edit/${this.props.data.id}`}>
                                <button type="button" className="btn btn-sm btn-warning mb-2">Editar</button>
                            </Link>
                            <button type="button" className="btn btn-sm btn-outline-danger ms-2 mb-2" onClick={this.delUser}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}