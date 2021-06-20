import {React, useState, useEffect} from 'react'
import { db } from '../../firebase'
import "../../styles/FilesView.css"
import FileItem from './FileItem'
import FileCard from './FileCard'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import emptyImage from "../../media/Empty.JPG";
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';
import { IconButton} from '@material-ui/core';

function FilesView( { user }) {

    const [files, setFiles] = useState([]);

    useEffect(() => {
        db.collection(user).onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    console.log("Files is ", files);

    return (
        <div className='fileView'>
            <div className="fileView__heading">
                <>
                    <p>My Drive </p>
                    <ExpandMoreIcon />
                </>
                <div className="fileView__headingRight">
                    <IconButton>
                        <ListIcon />
                    </IconButton>
                    <IconButton> 
                        <InfoIcon />
                    </IconButton>
                    
                </div>
            </div>

            {
                files.length ? 
                <> 

                    <div className="fileViewRow__heading">
                        <p>Suggested </p>
                    </div>

                    <div className="fileView__row">
                        {
                            files.slice(0, 5).map(({ id, item }) => (
                                <FileCard name={item.caption} />
                            ))
                        }
                    </div>

                    <div className="fileViewRow__heading border">
                        <p>Files </p>
                    </div>

                    <div>
                        <FileItem files={files} user={user}/>
                    </div>
                    <br/>
                </> : 

                <div className="fileViewEmpty">
                    <img src={emptyImage} alt="Empty"/>
                </div>
            }
        </div>
    )
}

export default FilesView
