import './Front.css';
function Front ()
{
    return(
   <div>
    <header className="header">
      <marquee direction="right" behavior="alternate" loop="-1" scrollamount="2" widht="50%">
        <h1>WELCOME TO SNEHA RESTAURANT</h1>
        <button>Book a Table</button>
      </marquee>
    </header>
   </div>
    );
}
export default Front;