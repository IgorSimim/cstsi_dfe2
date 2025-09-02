import './App.css';
import Profile from './components/Profile.jsx'; 
// import Avatar from './components/Avatar.jsx';
// import Title from './components/Title.jsx'; 

const users = [{
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
  wiki: 'https://pt.wikipedia.org/wiki/Hedy_Lamarr',
},
{
  name: 'Ada Lovelace',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Ada_lovelace.jpg',
  imageSize: 90,
  wiki: 'https://pt.wikipedia.org/wiki/Ada_Lovelace',
},
{
  name: 'Isaac Newton',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg/800px-Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg',
  imageSize: 90,
  wiki: 'https://pt.wikipedia.org/wiki/Isaac_Newton',
}];

function App() {
  console.info('render');
  return (
    <>
      {users.map((user) =>
        <Profile key={user.name} user={user} />
      )}
    </>
  );
}

export default App;
