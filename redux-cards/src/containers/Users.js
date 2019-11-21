import Users from 'components/Users'
import { connect } from 'react-redux'

const mapStateToProps = ({ users }) => {
  return {
    users: users.ids
  }
}

export default connect(mapStateToProps)(Users);