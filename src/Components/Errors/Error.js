import React from 'react';
import {useLocation} from 'react-router-dom';
const Error = () => {

    const LocationUrl=useLocation();
    const estyle={textAlign:"center",marginTop:"300px"};
    const spanColor={color:"red"};

    return (
        <div style={estyle}>
            <h1>Error <span style={spanColor}> 404</span></h1>
            <p>Invalid URL :::<span><strong>http://localhost:3000{LocationUrl.pathname}</strong></span></p>
        </div>
    );
};

export default Error;