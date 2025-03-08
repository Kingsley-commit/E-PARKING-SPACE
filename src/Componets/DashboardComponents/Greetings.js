import '../../App.css'
const Greeting = () => {
    const name = JSON.parse(localStorage.getItem('user'));
    const displayName = name?.firstName;
    console.log(displayName)
    return (
        <div className='greetings_container'>
            <h1>Welcome, {displayName}!!!</h1>
        </div>
    )
}

export default Greeting;