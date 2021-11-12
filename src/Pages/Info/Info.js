import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Info = () => {
    const [users,setUsers] = useState([])
    const [albums,setAlbums] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setAlbums(data.slice(0,12)))
    },[])

    console.log(albums)

    return (
        <div>
            <Container>
                <div className="row">
                <div className="col-12 col-md-6">
                    <div>
                    {
                        users.map(user => <div key={user?.name} className="d-flex align-items-center my-3">
                        <div className="border me-3 rounded" style={{height:'80px',width:'80px',overflow:'hidden'}}><img className="w-100" src="https://picsum.photos/id/1005/90/90" alt="" /></div>
                        <div>
                            <h4 className="p-0 m-0">{user?.name}</h4>
                            <p className="p-0 m-0">{user?.email}</p>
                            <p className="p-0 m-0">{user?.phone}</p>
                            <p className="p-0 m-0">{user?.company?.name}</p>
                        </div>
                    </div>)
                    }
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div>
                    <div>
                    {
                        albums.map(album => <div key={album?.title} className="d-flex align-items-center my-3">
                        <div className="border me-3 rounded" style={{height:'80px',width:'80px',overflow:'hidden'}}><img className="w-100" src= "https://picsum.photos/id/101/90/90" alt="" /></div>
                        <div>
                            <h4 className="p-0 m-0">{album?.title}</h4>
                        </div>
                    </div>)
                    }
                    </div>
                    </div>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Info;