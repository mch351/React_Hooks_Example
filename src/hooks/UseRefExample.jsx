import {useRef, useEffect, useState} from "react";

const UseRefExample = () => {

    const [name,setName]=useState("");

    // const focusRef=useRef(null)
    const inputRef = useRef(null);
    const prevRef=useRef('')
    const renderCount=useRef(1);


    useEffect(() => {
        renderCount.current=renderCount.current+1;
    });
        useEffect
    (() => {
        prevRef.current=name;
    }, [name])

    const focusRef =()=>{
            inputRef.current.focus();
    }

    return (
        <>
            <div className="w-50 d-grid gap-2 mx-auto">
                <h5 className="alert alert-success text-center">
                    آشنایی با هوک UseRef
                </h5>
                <p>{`نام شما برابر است با: ${name}`}</p>
                <p>{`نام شما یه زمانی برابر بود با: ${prevRef.current}`}</p>
                <p>{`تعداد رندر های مجدد: ${renderCount.current}`}</p>
                <input
                    ref={inputRef}
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="form-control"
                    placeholder="give me a name"
                />
                <button onClick={focusRef} type="button" className="btn btn-primary btn-block mt-2">
                    concentrate
                </button>
            </div>
        </>
    )
}

export default UseRefExample;