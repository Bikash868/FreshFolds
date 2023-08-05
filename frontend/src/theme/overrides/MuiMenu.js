function container() {
	// Use the fullscreen element if in fullscreen mode, otherwise just the document's body

	return document.getElementsByClassName('fullscreen') && document.getElementsByClassName('fullscreen').length > 0
		? document.getElementsByClassName('fullscreen')[0]
		: document.body;
}

export default {
	defaultProps: {
		container,
	},
};
