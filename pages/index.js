import axios from 'axios';
import Link from 'next/link';
// import React, { Component } from 'react'

// class Index extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
             
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>My Index Page</h1>
//             </div>
//         )
//     }
// }


const Index = ({posts}) => {
    return (
    <div>
        <h1>My Index Page</h1>
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    );
};

Index.getInitialProps = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const { data } = res;
    return { posts: data }; 
};

export default Index;