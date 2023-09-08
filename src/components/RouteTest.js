import {Link} from 'react-router-dom';
 
const RouteTest = () =>{
    return <>
        <Link to={"/"}>home</Link>
        <br></br>
        <Link to={"/diary"}>Diary</Link>
        <br></br>
        <Link to={"/new"}>New</Link>
        <br></br>
        <Link to={"/edit"}>Edit</Link>
    </>
}
export default RouteTest;