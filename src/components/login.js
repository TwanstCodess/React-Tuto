const login=()=>{
    const first = (name) => { 
        console.log("Hi "+ name)
     }
    return(
        <div>
        <input  type="text" placeholder="Enter your name"/>
        <input type="text" placeholder="Enter your password"/>
        <button onClick={
            // sudi ananamas function bo function parimtara zor sudfi haia ba kare bena agar paramitari nabu awa ba kare ma hene
            ()=>{
              first("sara")
            }
        }>Login</button>
        </div>  
    )
}
export default login