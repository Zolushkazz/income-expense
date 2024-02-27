import { client } from "../genIndex.js";

//records table ruu users mdeelel oruulna
const recordsQuery = async (
  userId,
  amount,
  category,
  date,
  time,
  payee,
  note,
  expense
) => {
  const userRecords = `INSERT INTO records (userId, amount, category, date, time, payee, note, expense) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`;

  const records = await client.query(userRecords, [
    userId,
    amount,
    category,
    date,
    time,
    payee,
    note,
    expense,
  ]);

  return records;
};

export const recordsUsers = async (req) => {
  const { userId, amount, category, date, time, payee, note, expense } =
    req.body;

  try {
    const records = await recordsQuery(
      userId,
      amount,
      category,
      date,
      time,
      payee,
      note,
      expense
    );
    return records;
  } catch (err) {
    console.log(err);
  }
};
