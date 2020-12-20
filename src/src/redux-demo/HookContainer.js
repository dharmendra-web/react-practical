import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      textAlign: 'center',
      margin: 12
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    leftSp: {
        marginLeft: 8,
        marginTop: 12
    },
    parentHeight:  {
        height: 500,
        minWidth: 275,
        textAlign: 'center',
        overflow: 'auto',
        border: '1px solid',
        padding: 10,
        margin: 8
    },
    btn_container:  {
        minWidth: 275,
        textAlign: 'center'
    },
    rightSp: {
        marginLeft: 8,
        marginTop: 12,
        float: 'right',
        marginRight: 12,
        padding: 10
    }
  });
function HookContainer() {
    const [apiData, setApiData] = useState([]);
    const [count, setCount] = useState(0);
    const [showData, setData] = useState([]);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    useEffect(()=> {
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (res)=> {
                setApiData(res.data);
                setData(res.data.slice(0, 10));
            }
            ).catch(
                (error)=>{console.log(error.message)}
            );
    }, []);
    function handleChange(event) {
        let string_data = event.target.value;
        string_data = string_data.toLowerCase();
        if (string_data && string_data.length > 0) {
            let newData = apiData.filter(item=> {return (item.title.toLowerCase().indexOf(string_data) >= 0)});
            setData(newData);
        } else {
            setData(apiData.slice(0,10));
        }
    }

    function handleClick(args) {
        setCount((prev)=>{
            return prev + args
        });
        setData(apiData.slice((count + args) * 10, (count + args) * 10 + 10));
    }

    return (
        <>
        <TextField className={classes.leftSp} id="outlined-basic"  variant="outlined" placeholder="search data" onChange={handleChange}/>
        <div className={classes.parentHeight}>
            {
            showData.map((item, index)=>{
                return(
                    <Card key={item.id} className={classes.root}>
                        <CardContent>
                            <Typography className={classes.pos}>{item.id}</Typography>
                            {item.title}
                        </CardContent>
                    </Card>
                )
            })}
        </div>
        <div className={classes.btn_container}>
            <Button className={classes.leftSp} variant="contained" disabled={(count === 0) ? true: false} color="primary" onClick={()=> {handleClick(-1)}}>Prev</Button>
            <Button className={classes.leftSp} variant="contained" disabled={(count + 1 === Math.ceil(apiData.length/10)) ? true: false} color="primary" onClick={()=> {handleClick(1)}}>Next</Button>
            <div className={classes.rightSp}>
                <span>Per Page Data: 10 </span>
                <span>Page {count + 1} Of {Math.ceil(apiData.length/10)}</span>
            </div>
        </div>
            
        </>
    );
}

export default HookContainer;