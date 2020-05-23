import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrapperComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrapperComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? (
                <WrapperComponent {...props}/>
                ) : 
                <p>{props.info}</p>
            }
            <p>Sup Motherfucker</p>
           
        </div>
    );
};



// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Your ass is freeee!" />, document.getElementById('app'))