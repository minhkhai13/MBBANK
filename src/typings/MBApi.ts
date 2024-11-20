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
  amount: number;

  content: string;

  accountName: string;

  accountNumber: string;

  time_transfer: string;
}
