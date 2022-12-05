// export const login = () => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(setUser());
//     }, 2000);
//   };
// };

import { client } from "../../../api/users";

// export const logout = () => {
//   return {
//     type: 'auth/logOut',
//   };
// };

export const setUser = (user) => {
  return {
    type: "auth/setUser",
    payload: user,
  };
};

export const unsetUser = () => {
  return {
    type: "auth/unsetUser",
  };
};

export const setUserStats = (userStats) => {
  return {
    type: "auth/setUserStats",
    payload: userStats,
  };
};

// the computer "thunk" a bit
// before responding

export const createUser = (userId) => {
  return async (_, getState) => {
    const { profile } = getState();
    const { stats } = profile;

    const { data } = await client.post("/users", {
      id: userId,
      stats,
    });

    return data;
  };
};

// GET-> /users/88447675665

export const readUser = (userId) => {
  return async () => {
    const { data } = await client.get(`users/${userId}`);

    return data;
  };
};

// PATCH -> /users/85653893
export const updateUser = (userId, payload) => {};
