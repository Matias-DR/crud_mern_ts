import React, { Component } from 'react';
import axios from 'axios';
import User from './user'
import { UserModel } from '../../../../src/models/user-model';

interface Props {
    input: any;
}

interface State {
    auxInput: string;
    users: UserModel[];
    userDeleted: boolean;
}

export default class Users extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            auxInput: '',
            users: [],
            userDeleted: false,
        }
    }

    private onMountOrUpdate() {
        if ((this.props.input !== this.state.auxInput) || (this.props.input === '' && this.state.users.length === 0) || this.state.userDeleted) {
            axios.post('api/user/get_users', { input: this.props.input }).then(res => this.setState({ users: res.data })).catch(
                err => console.log('Petición fallida', err)
            )
            this.setState({ auxInput: this.props.input });
            this.setState({ userDeleted: false });
        }
    }

    componentDidMount() {
        this.onMountOrUpdate()
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        this.onMountOrUpdate()
    }

    render() {
        const userList = this.state.users.map((user: UserModel) => {
            return (
                <div key={user.id}>
                    <User data={user} userDeleted={this.state.userDeleted} />
                </div>
            )
        })
        return (
            <div className="container text-center">
                <div className="row row-cols-1">
                    <h1 className="col">Lista de usuarios</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {userList}
                </div>
            </div>
        )
    }
}