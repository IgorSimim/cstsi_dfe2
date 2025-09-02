import Title from './Title.jsx'
import Avatar from './Avatar.jsx'

function Profile({ user }) {
  return <>

    <Avatar user={user} />
    <Title content={user.name} link={user.wiki} />
  </>
}

export default Profile;