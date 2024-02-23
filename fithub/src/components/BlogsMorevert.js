import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const BlogsMorevert = (props) => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const open = Boolean(anchorEl);

	const handleClose = () => {
		setAnchorEl(null);
        props.edit(true);
	};
    const handleRemoveClose = () => {
		setAnchorEl(null);
	};

    const remove=(id)=>
    {
        fetch(`http://localhost:4000/Blogs/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        handleRemoveClose();
		window.location.reload();
    }

	return (
		<div
			style={{
				marginLeft: "40%",
			}}
		>
			<IconButton
				aria-label="more"
				onClick={handleClick}
				aria-haspopup="true"
				aria-controls="long-menu"
                style={{boxShadow:"none",width:"auto", height:"auto"}}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				keepMounted
				onClose={handleClose}
				open={open}
			>
				<div style={{display:"flex", flexDirection:"column",color:"black"}}>

				<MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={()=>remove(props.id)}>Remove</MenuItem>

				</div>
			</Menu>
		</div>
	);
};

export default BlogsMorevert;