import { Link } from "react-router-dom";

function Home() {
    return (
        <div className={"w-full h-full flex flex-col items-center gap-5 p-5"}>
            <h1 className={"font-light text-2xl"}>Home</h1>
            <h2 className={"text-sm"}>You are logged in to Alice.</h2>
            <Link to="/" className={"text-sm underline"}>Log out</Link>
        </div>
    );
}

export default Home;
