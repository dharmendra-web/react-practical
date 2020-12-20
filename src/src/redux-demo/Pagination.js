import React, { useEffect, useState } from 'react';

function Pagination(props) {
const [find_data, setData] = useState([]);
const [show_data, setShow] = useState([]);
const [count, setCount] = useState(0);
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            setData(res.data);
            setShow(find_data.slice(0, 10));
        }).catch((error)=>{setData(error.message)});
    }, []);
    function handleShow(arg) {
        if (arg == 'next') {
            setCount((prevVal)=>{prevVal + 1});
        } else {
            setCount((prevVal)=>{prevVal - 1});
        }
        setShow(find_data.slice(count*10, count + 10));
    }
    return (
        <>
                
            <div>
                <button type="button" onClick={handleShow('next')} >Next</button>
                <button type="" onClick={handleShow('prev')} >Prev</button>
            </div>
        </>
    );
}

export default Pagination;