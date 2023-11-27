import React from 'react';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export const StyledDialog = ({ title = '', open, onClose, children }) => {
	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={onClose}
			//   onEntered={handleAnimationEnd}
		>
			{title && <DialogTitle>{title}</DialogTitle>}
			<DialogContent>
				<DialogContentText sx={{ textAlign: 'center' }}>{children}</DialogContentText>
			</DialogContent>
		</Dialog>
	);
};

StyledDialog.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
	children: PropTypes.node,
	title: PropTypes.string,
};
