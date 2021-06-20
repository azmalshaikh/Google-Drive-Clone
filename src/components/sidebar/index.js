import React from 'react'
import "../../styles/Sidebar.css";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import NewFile from './NewFile';
import SidebarItem from './SidebarItem';

function index( { user } ) {
    return (
        <div className="sidebar">
            <NewFile user = {user}/>

            <div className="sidebar__itemsContainer">
                <SidebarItem arrow icon={(<InsertDriveFileIcon style={{fill: 'rgb(66,133,244)'}}/>)} label={'My Drive'} active/>
                <SidebarItem arrow icon={(<ImportantDevicesIcon />)} label={'Computers'} />
                <SidebarItem icon={(<PeopleAltIcon />)} label={'Shared with me'} />
                <SidebarItem icon={(<QueryBuilderIcon />)} label={'Recent'} />
                <SidebarItem icon={(<StarBorderIcon />)} label={'Starred'} />
                <SidebarItem icon={(<DeleteOutlineIcon />)} label={'Bin'} />
                
                <hr/>
                
                <SidebarItem icon={(<CloudQueueIcon />)} label={'Storage'} />
            </div>
        </div>
    )
}

export default index;
