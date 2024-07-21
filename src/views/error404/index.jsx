import { useRouteError } from "react-router-dom";

const Error404 = () =>{

    const error = useRouteError();

    return(
        <div style={{margin: '0', position: 'absolute', top: '50%', left: '35%', transform: 'translateY(-50%, -50%)'}}>
            <h3 style={{fontSize: '56px',fontWeight:'500',margin:'0'}}>{error.status} Ops!</h3>
            <p style={{fontSize:'28px',margin:'0'}}>{ error.data}</p>
        </div>
    );
}

export default Error404;