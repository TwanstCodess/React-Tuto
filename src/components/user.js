const User=()=>{
  const info={
    username:"Twanst",
    age:21,
    job:"Developer",
    city:"Erbil",
    country:"Kurdistan",
    language:"Kurdish"
  }
    return(
        <div>
            <h1>Name:{info.username}</h1>
            <h2>Age:{info.age}</h2>
            <h2>Job:{info.job}</h2>
            <h2>City:{info.city}</h2>
            <h2>Country:{info.country}</h2>
            <h2>speek:{info.language}</h2>
        </div>
    )
}
export default User