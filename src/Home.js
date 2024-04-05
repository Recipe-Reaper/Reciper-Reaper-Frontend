const Home = function() {
    return(
        <div id="wrapper">
            <h1>Welcome to Recipe Reaper!</h1>
	        <img src="reaper.svg" alt="Reaper Image" />
            <br/>
            <a href="/login">Login</a> 
            <br/>
            <a href="/groceries">Groceries</a> 
        </div>
    )
}

export default Home;