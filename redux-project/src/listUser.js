import React from 'react';
import {connect} from 'react-redux';
import { getUsers } from '../selector';

class listUser extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let users = this.props.users;
        if (!users.length)
            return (<p>Loading data</p>);
        return (
            <div className="my-listbook">
                <h3>Alls users</h3>
                <table border="1" className='table-list'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, key) => {
                            return (<tr key={key}>
                                <td>{user.id}</td>
                                <td className="name">{user.name}</td>
                                    <td className="name">{user.email}</td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>

        )
    }
}
const mapStateToProps = (state) =>{
    return {
        users: getUsers(state),
    }
};

export default connect(mapStateToProps)(listUser);