
function Table ()
{
    return(
<div>
<h1 style={{color:"green",fontFamily:"-moz-initial",alignItems:"center"}}>HELLO Everyone, This is my frist Application in React</h1> 
      <h1 style={{color:"red",alignItems:"center",fontFamily:"-moz-initial"}}>Sneha's Hi-Tech Solutions</h1>
      <p>Employee Table</p>
      <table border="5" cellspacing="7" cellpadding="10">
        <tr>
          <th bgcolor="green">EmName</th>
          <th bgcolor="green">idNo</th>
          <th colspan="2" bgcolor="green">dpt</th>
          <th bgcolor="green">experience</th>
        </tr>
        <tr>
          <td bgcolor="grey">Prudhvi</td>
          <td bgcolor="grey">236</td>
          <td bgcolor="grey">Frontend Developer</td>
          <td bgcolor="grey">Company Manager</td>
          <td bgcolor="grey">10 years</td>
        </tr>
        <tr>
          <td bgcolor="red">Neeha</td>
          <td bgcolor="red">654</td>
          <td bgcolor="red">Backend</td>
          <td bgcolor="red">Company Director</td>
          <td bgcolor="red">12 years</td>
        </tr>
        <tr>
          <td bgcolor="orange">Sneha</td>
          <td bgcolor="orange">1</td>
          <td bgcolor="orange">Java fullstack Developer</td>
          <td bgcolor="orange">CEO of the Company</td>
          <td bgcolor="orange">15 years</td>
        </tr>
      </table>
</div>
    );
} 
export default Table;