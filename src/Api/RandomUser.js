import { get } from ".";

const getRandomUser = async () => {
  const response = await get("https://randomuser.me/api/");
  return response;
};

export default getRandomUser;
