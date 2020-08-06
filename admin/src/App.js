import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './users';
import { BookingList } from './booking';
import { PostList,PostCreate } from './comments';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group'
import CommentIcon from '@material-ui/icons/Comment'
import Dashboard from './Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import authProvider from './authProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import Comments from './components/comments';
import Login from './components/Login';
import MyLayout from './components/MyLayout';


const myTheme = createMuiTheme({
    palette: {
        primary: pink,
        secondary: purple,
        error: red,
        contrastThreshold: 2,
        tonalOffset: 0.2,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    overrides: {
        MuiButton: { // override the styles of all instances of this component
            root: { // Name of the rule
                color: 'white', // Some CSS
            },
        },
    },
});

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin layout={MyLayout}
    title="Dashboard" theme={myTheme} Comments={Comments} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="Users" list={UserList} icon={UserIcon} />
        <Resource name="Booking" list={BookingList} icon={AssignmentIcon} />
        <Resource name="posts" list={PostList} edit={EditGuesser} create={PostCreate} icon={CommentIcon} />
    </Admin>
    
        
);
export default App;
