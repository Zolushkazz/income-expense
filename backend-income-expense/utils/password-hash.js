import bcrypt from "bcrypt";

//signup hiihed ashiglana
export const makeHash = (password) => {
  const salt = bcrypt.genSaltSync(1); //1sh iluu text nemne gsn ug
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

//login hiihed ashiglana
export const compareHash = (password, hash) => {
  const isItTrue = bcrypt.compareSync(password, hash);
  return isItTrue;
};
