import express, { Request, Response, NextFunction } from "express";
import MB from "./MB"; // Assuming MB is properly typed

(async () => {
    const mb = new MB({ username: "0857300073", password: "Conmeongungoc123@@" });
    await mb.getTransactionsHistory({
      accountNumber: "0857300073",
      fromDate: "20/08/2024",
      toDate: "23/08/2024",
    });
  })();