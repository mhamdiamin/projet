import React from "react";

const navbar = () => {
  return (
    <div >
    <table border={1} width={1519}>
      <tr>
        <td>
        <img src="logo.jpg" width={50} height={50} />
        </td>

      <td>
        <table >
        <tr><ul>
          <td width={50} ><li> art </li> </td>
          <td width={110} ><li> technologie</li> </td>
          <td width={70} ><li> sport </li> </td>
          <td width={100} ><li> cinema </li> </td>
        </ul></tr>
        </table>
      </td>
      <td>
        <table>
        <tr><ul>
        <td width={70} >  <li> amin </li></td>
        <td width={70} >  <li> Logout </li></td>
        <td width={70} >  <li> Ecrire </li> </td>

        </ul></tr>
        </table>
      </td>
      </tr>
      </table>
    </div>
  );
};

export default navbar ;