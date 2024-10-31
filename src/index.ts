import express, { Request, Response } from "express";
import MB from "./MB"; // Assuming MB is properly typed

const app = express();
const port = process.env.PORT || 3009;
app.use(express.json());

app.post("/get-transaction-history", async (req: Request, res: Response) => {
  const { username, password, accountNumber, fromDate, toDate } = req.body;

  const mb = new MB({ username: username, password: password });
  const data = await mb.getTransactionsHistory({
    accountNumber: accountNumber,
    fromDate: fromDate,
    toDate: toDate,
  });
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
