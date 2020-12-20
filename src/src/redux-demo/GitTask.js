import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './redux/GitRedux/userAction.js';
import { useHistory } from 'react-router-dom';

function GitTask() {
    const users = useSelector((state)=>state.users);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(()=>{
        dispatch(fetchUser('https://api.github.com/users', 'users'));
    }, []);

    function handleClick(args) {
        history.push('users/' + args)
    }
    return (
        <div>
            <h1>User Lists</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 && users.map((item, index)=>{
                        return (
                            <tr key={item.id} onClick={handleClick.bind(this, item.login)}>
                                <td>{item.id}</td> 
                                <td>{item.login}</td> 
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}


export default GitTask;