import fetch from "isomorphic-fetch";
import Router from "next/router";


const Team = (props) => (
     <div className="middle ">
<h1 >OUR TEAM</h1>
   
      <ul className="list-team">
      
        {props.users.map((user) => (
          <li className="list-team-item" key={user.id} >
               
            <div>
              <h3>
                 {user.first_name} {user.last_name}
              </h3>
              <p>Email: {user.email}</p>
               <button className="button" onClick={() => Router.push(`/team/[id]`, `/team/${user.id}`)} >View profile</button>
            </div>
            <img src={user.avatar} alt="" className="imgteam"  />
          </li>
        ))}
      </ul>
    </div>
  
);

Team.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return {
    users: resJSON.data,
  };
};

export default Team;