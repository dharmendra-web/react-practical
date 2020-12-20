
import React from 'react';
import { TextField, Paper, TableRow, CssBaseline, Container, TablePagination, TableHead, TableContainer, TableCell, TableBody, Table } from '@material-ui/core';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 10,
            setData: [],
            intData: [],
        }
    }

    // getting api data 
    componentDidMount() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => this.setState({ setData: data, initData: data }));
    }

    // // Filter the text box  by latter and name
    filterNameData(event, i) {
        let array = this.state.setData;
        if (event.target.value == '') {
            this.setState({ setData: this.state.initData })
        } else {
            let string = event.target.value;
            let newArray = array.filter((o) =>
                Object.keys(o).some((k) =>
                    o[k].toString().toLowerCase().includes(string.toLowerCase())
                )
            );
            this.setState({ setData: newArray })
        }
    }

    // getting 10 rows per page
    handleChangeRowsPerPage = (event) => {
        this.setState({
            page: 0,
            rowsPerPage: parseInt(event.target.value, 10)
        })
    };

    render() {
        const { page, rowsPerPage } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.state.setData - page * rowsPerPage);
        const handleChangePage = (event, newPage) => { this.setState({ page: newPage }) };
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md" style={{ marginTop: '20px' }}>
                    <div >
                        <Paper >
                            <TableContainer>
                                <Table
                                    aria-labelledby="tableTitle"
                                    size={'small'}
                                    aria-label="enhanced table"
                                >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><TextField type="search" size="small" variant="outlined" onChange={this.filterNameData.bind(this)} placeholder="search title" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><b>ID</b></TableCell>
                                            <TableCell><b>TITLE</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.setData
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row, index) => {

                                                return (
                                                    <TableRow>
                                                        <TableCell>{row.id}</TableCell>
                                                        <TableCell >{row.title}</TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        {emptyRows > 0 && (
                                            <TableRow style={{ height: (33) * emptyRows }}>
                                                <TableCell colSpan={6} />
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 10]}
                                component="div"
                                count={this.state.setData.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={(e) => this.handleChangeRowsPerPage(e)}
                            />
                        </Paper>
                    </div>
                </Container>
            </React.Fragment >

        );
    }
}

export default App;