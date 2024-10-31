export interface BalanceData {
  number: string;
  name: string;
  currency: string;
  balance: string;
}

export interface BalanceList {
  balances?: BalanceData[];
  internationalBalances?: BalanceData[];
  currencyEquivalent: string;
  totalBalance: string;
}

export interface TransactionInfo {
  postingDate: string;
  transactionDate: string;
  accountNo: string;
  creditAmount: string;
  debitAmount: string;
  currency: string;
  description: string;
  addDescription: string;
  availableBalance: string;
  beneficiaryAccount: string;
  refNo: string;
  benAccountName: string;
  bankName: string;
  benAccountNo: string;
  dueDate: string;
  docId: string;
  transactionType: string;
  pos: string;
  tracingType: string;
}
