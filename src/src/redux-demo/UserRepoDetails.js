import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchUser } from './redux/GitRedux/userAction.js';

function UserRepoDetails() {
    const { username, repos } = useParams();
    const history = useHistory();
    const users = useSelector((state)=>state.repositoryData);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUser(`https://api.github.com/users/${username}/${repos}`));
    }, []);
    return (
        <div id="btn_container">
            <h1>Repository Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Forks</th>
                        <th>Issues</th>
                        <th>Size</th>
                        <th>Repository Name</th>
                    </tr>
                </thead>
                <tbody>
                       { users.length > 0 && users.map((item, index)=>{
                        return (
                            <tr key={item.id}>
                                <td>{item.forks}</td> 
                                <td>{item.open_issues}</td>
                                <td>{item.size}</td> 
                                <td>{item.full_name}</td> 
                            </tr>
                        )
                    })}
                </tbody>
            </table> 
            <div> 
                <button type="button" onClick={()=> {history.goBack()}}>Go Back</button>
            </div>
        </div>
    );
}

export default UserRepoDetails;