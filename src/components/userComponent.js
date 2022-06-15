import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userAction";

const UserContainer = () => {
  // in user az combine reducer miad - kole initial state ro darim bar migardoonim
  //mitoonim azash pty bgirim -> state.user.loading !
  const userData = useSelector((state) => state.user);

  //inja ham k amlan initial state ro dsrctr kardim esh !
  const { loading, error, user } = userData;
  console.log(userData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderUsers = () => {
    if (loading) return <p> Loading . . . </p>;
    if (!loading && error) return <p> {error}</p>;
    if (!loading && !error && user.length && userData)
      return (
        <div>
          <h2> User Lists </h2>
          {user.map((u) => (
            <p key={u.id}> {u.name} </p>
          ))}
        </div>
      );
  };
  return <div> {renderUsers()} </div>;
};

export default UserContainer;
