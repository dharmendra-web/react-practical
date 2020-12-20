import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchUser } from './redux/GitRedux/userAction.js';

function UserDetails() {
    const { username } = useParams();
    const history = useHistory();
    const user = useSelector((state)=>state.usersData);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUser(`https://api.github.com/users/${username}`, 'usersDetails'));
    }, []);
    return (
        <div id="btn_container">
            <h1>User Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Followers</th>
                        <th>Name</th>
                        <th>Public Gists</th>
                        <th>Public Repository</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr style={{textAlign: 'center'}}>
                            <td style={{border: '1px solid'}}><img src={user.avatar_url} alt="avatar image"/></td> 
                            <td>{user.followers}</td> 
                            <td>{user.name}</td> 
                            <td>{user.public_gists}</td> 
                            <td>{user.public_repos}</td>
                        </tr>
                    }
                </tbody>
            </table> 
            <div> 
                <button type="button" onClick={()=> {history.goBack()}}>Go Back</button>
                {(user && user.id) ? (
                    <button type="button" onClick={()=> {history.push(user.login + '/' + 'repos')}}>Dashboard</button>
                ): null}
            </div>
        </div>
    );
}

export default UserDetails;