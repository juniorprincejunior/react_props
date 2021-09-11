import PropTypes from 'prop-types'
import cool from './cool.jpg'

export const Profile = ({FullName,Bio,profession,clickme}) => {
    return (
        <>
            <img src={cool} alt="image1" />
            <h3>{FullName}</h3>
            <h3>{Bio}</h3>
            <h3>{profession}</h3>
            <button className="btn btn-success" onClick = {clickme}>click me</button>
        </>
    )
}

Profile.defaultProps={
    FullName:'Herve',
    Bio:'BDH',
    profession:'Informatique',
}

Profile.propTypes = {
    FullName : PropTypes.string,
    Bio : PropTypes.string,
    profession : PropTypes.string,
    clickme : PropTypes.func

}
export default Profile
