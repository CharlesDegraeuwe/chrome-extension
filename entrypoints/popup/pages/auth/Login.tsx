import { useState, useCallback } from "react";
import Input from "@/entrypoints/components/design_system/input/Input.tsx";
import {Link, useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    //submit
    const handleSubmit = useCallback(() => {}, []);

    return (
        <div className={"w-full h-full flex flex-col items-center gap-5 p-3 py-8"}>
            <img src="/alice-icon.webp" alt="alice-icon" className={"w-15 h-fit"}/>
            <h1 className={"font-light text-2xl"}>Welcome</h1>
            <h2 className={"text-sm"}>Log in to continue to Alice.</h2>

            <form
                className={"w-full flex flex-col gap-3"}
                onSubmit={handleSubmit}>
                <Input value={email} setValue={setEmail} type="email" placeholder="Email address" obliged/>
                <Input value={pwd} setValue={setPwd} type="password" placeholder="Password" obliged/>
                <Link
                    to={"/reset-pwd"}
                    type={"button"}
                    className={"text-sm w-fit font-semibold text-indigo-500"}>
                    Reset password
                </Link>

                <button
                    className={" h-12 text-sm px-3 rounded bg-indigo-500 hover:bg-indigo-600/90 transition-colors duration-300 cursor-pointer text-white"}
                    type={"submit"}
                >
                    Continue
                </button>
            </form>
            <div className={"flex flex-row w-full gap-1 items-center text-sm"}>
                <span>Don't have an account? </span>
                <Link to={"/register"} className={"text-indigo-500"}>Sign up</Link>
            </div>
        </div>
    );
}

export default Login;
