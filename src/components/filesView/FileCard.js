import React from 'react'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import "../../styles/FilesView.css"

function FileCard( { name }) {
    return (
        <div className='fileCard'>
            <div className="fileCard--top">
                <InsertDriveFileIcon style={{ fontSize: 130, fill: 'rgb(66,133,244)'}}/>
            </div>

            <div className="fileCard--bottom">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FileCard
