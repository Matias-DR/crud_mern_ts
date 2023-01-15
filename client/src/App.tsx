import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './components/user/user-list'

interface Props { }
interface State {
    userSearchInput: string;
}

export default class App extends Component<Props, State> {

    state = {
        userSearchInput: ''
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ userSearchInput: e.target.value });
    }

    render() {
        return (
            <div className="App">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">CRUD MERN</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/add_user">Agregar usuario</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Users input={this.state.userSearchInput}/>}></Route>
                    <Route path='/add_user' element={<AddUser />}></Route>
                    <Route path='/user_edit/:id' element={<UserEdit />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
        );
    }
}