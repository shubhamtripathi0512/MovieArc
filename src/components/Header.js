import React from "react";

const Header = props => {
  return (
    <header className="App-header">
      <table>
        <tbody>
          <tr>
           <td>
             <img src="Logo.png" alt="Logo" width="50"></img>
           </td>
           <td width="8">
             MovieArc
           </td>
        </tr>
      </tbody>
      </table>
    </header>
  );
};

export default Header;
