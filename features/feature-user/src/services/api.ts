import { mockUserData } from "./mockData";

export const getUserData = async (userId?: string) => {
  // In a real-world application, you would make a fetch or axios request here.
  // For this example, we'll use a mock data.

  const user = mockUserData.find(user => user.id === userId);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 1000);
  });
};
