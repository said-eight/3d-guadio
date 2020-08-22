import { useRouter } from "next/router";

const Profile =  ({ user }) => {
    const router = useRouter();
    const { id } = router.query;
  
    return (
        <div className="middle">
          <div className="profile">
              <div >
                <img
                  src={user.avatar}
                 className="imgteam"/>
              </div>
              <div >
                <h1>
                  {user.first_name} {user.last_name}
                </h1>
                <p>Email: {user.email}</p>
              </div>
            </div>
            </div>
    );
  };
  
  Profile.getInitialProps = async (ctx) => {
    // console.log(ctx.query.id)
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const resJSON = await res.json();
    // console.log(resJSON);
    return { user: resJSON.data };
  };


export default Profile