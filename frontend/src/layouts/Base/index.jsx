import PropTypes from 'prop-types';

export function BaseLayout(props) {
    return <>{props.children}</>;
}

BaseLayout.propTypes = {
    children: PropTypes.children,
};

export default BaseLayout;  