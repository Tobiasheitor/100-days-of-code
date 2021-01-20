import axios from 'axios';

function Profile({user = {}}) {

    return <h1>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
    </h1>
}

export async function getStaticProps(context) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users',
        { params: { id: context.params.id } });

    const user = await response.data[0];

    return {
        props: { user },
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } }
        ],
        fallback: true
    };
}

export default Profile;