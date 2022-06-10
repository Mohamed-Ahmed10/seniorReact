import Nav from "../components/nav";

const About = () => {
    return (
        <div>
            <Nav />
            This is about

            <button onClick={addNew}>Click here</button>
        </div>
    );
}

var  addNew = () =>
{
    console.log("TEST")
}
export default About;