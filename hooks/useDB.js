import { auth, db } from "../config/firebase";

const useDB = () => {
  const writeFieldsDB = (user, data) => {
    db.collection("Users")
      .doc(user)
      .set({
        ...data,
      });
  };

  const loadFieldsDB = (user, dispatch, actionCreator) => {
    db.collection("Users")
      .doc(user)
      .get((snapshot) => {
        const data = snapshot.data();
        dispatch(actionCreator(data));
      });
  };

  return { writeFieldsDB, loadFieldsDB };
};

export default useDB;
