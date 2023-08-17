import { useRouteError } from "react-router-dom";
const Error = () => {
    const  err = useRouteError();
    return (
        <div>
            <h1>Oops!!!</h1>
            <h1>{err?.status + ":" +"Something Went Wrong"}</h1>
        </div>
    );
};

export default Error;