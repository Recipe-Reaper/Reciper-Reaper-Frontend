import { Link } from 'react-router-dom';
const Home = function() {

    return(
        <div className="home">
            <div className="left">
		<button className="button1">My Foods</button>
		<div className="sub">
		    <button className="button1">Pantry</button>
		    <button className="button1">Fridge</button>
		    <button className="button1">Freezer</button>
		</div>
		<button className="button1">My Lists</button>
		<div className="sub">
		<button className="button1">Frequently Purchased</button>
		<button className="button1">Expiring Soon</button>
		<button className="button1">In Need Of</button>
		</div>
		<button className="button1">My Recipes</button>
		<div className="sub">
		<button className="button1">Ready to Eat</button>
		<button className="button1">Saved Recipes</button>
		<button className="button1">Meal Generation</button>
		</div>
	    </div>
	    <div className="right">
	        <Link className="link" to="/groceries">
	        <button className="button2">+ Add New Groceries</button>
	        </Link>
	        <img src="reaper.png" alt="Reaper Image" className="Reaper Image" />
	    </div>
        </div>
    )
}

export default Home;
