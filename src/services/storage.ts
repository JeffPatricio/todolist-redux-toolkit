interface User {
  mail: string;
  name: string;
}

export const cleanUser = () => {
  localStorage.removeItem("user");
};

export const saveUser = (user: User) => {
  const serializedState = JSON.stringify(user);
  localStorage.setItem("user", serializedState);
};

export const loadUser = (): User | undefined => {
  const serializedState = localStorage.getItem("user");
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};
