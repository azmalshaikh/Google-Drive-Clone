import React from 'react'
import "../../styles/FilesView.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { db } from '../../firebase'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function FileItem( { files, user } ) { 

    const fileDate = (timestamp) => {
        return timestamp?.toDate().getDate() + monthNames[timestamp?.toDate().getMonth() + 1] + timestamp?.toDate().getFullYear()
    }

    const getReadableFileSizeString = (fileSizeInBytes) => {
        let i = -1;
        const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    };

    const handleDeleteFile = (id) => {
        db.collection(user).doc(id).delete();
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right" className="fileItem--mobile">Last modified </TableCell>
                            <TableCell align="right" className="fileItem--mobile">File Size</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            files.map(( { id, item}) => (
                                <TableRow>
                                    <TableCell component="th" scope="row"> <a href={item.fileUrl} target="_blank" rel="noreferrer" download className="fileURL">{item.caption}</a></TableCell>
                                    <TableCell align="right" className="fileItem--mobile"><p>{fileDate(item.timestamp)}</p></TableCell>
                                    <TableCell align="right" className="fileItem--mobile"><p>{getReadableFileSizeString(item.size)}</p></TableCell>
                                    <TableCell align="right"><DeleteIcon onClick={() => {handleDeleteFile(id)}} /></TableCell>
                                </TableRow>
                             ))
                        }
                    </TableBody>
                </Table>
                       
            </TableContainer>
        </div>
    )
}

export default FileItem
