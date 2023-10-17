import PropTypes from 'prop-types';

const Friend = ({friend}) => {
    const {name, email} = friend;
    return (
        <div className="box1">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
};

Friend.propTypes = {
    friend: PropTypes.object.isRequired
    
}

export default Friend;