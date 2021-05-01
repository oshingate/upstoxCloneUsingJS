console.group("data.js");
// the default array of allStocks available which are to be added in stocksAvailable array by using Class method
allStocks = [
  {
    name: "PVR",
    marketType: "NSE EQ",
    graph: "graphimg",
    previousPrice: 1188,
    price: 1136,
    priceChange: -52,
    priceChangePercentage: 4,
  },
  {
    name: "YESBANK",
    marketType: "NSE EQ",
    graph: "graphimg",
    previousPrice: 15,
    price: 14,
    priceChange: 1,
    priceChangePercentage: 0.34,
  },
  {
    name: "SBIN",
    marketType: "NSE EQ",
    graph: "graphimg",
    previousPrice: 359,
    price: 353,
    priceChange: -6,
    priceChangePercentage: 2,
  },
  {
    name: "AXISBANK",
    marketType: "NSE EQ",
    graph: "graphimg",
    previousPrice: 720,
    price: 715,
    priceChange: -5,
    priceChangePercentage: 1,
  },
  {
    name: "KOTAKBANK",
    marketType: "NSE EQ",
    graph: "graphimg",
    previousPrice: 1805,
    price: 1749,
    priceChange: -56,
    priceChangePercentage: 3,
  },
  {
    name: "ICICIBANK",
    marketType: "NSE EQ",
    graph: "graphimg",
    previousPrice: 621,
    price: 600,
    priceChange: -21,
    priceChangePercentage: 3,
  },
  {
    name: "HDFCBANK",
    marketType: "NSE EQ",
    graph: "graphimg",
    previousPrice: 1472,
    price: 1412,
    priceChange: -60,
    priceChangePercentage: 4,
  },
];
// the arrays which we are going to use with their methods in prototype

users = [
  //   {
  //     name: "onkar",
  //     userName: "oshingate",
  //     password: "onkar123",
  //     dob: "24-02-1997",
  //     stocks: {
  //       watchList: {},
  //       orders: {
  //         // all: [],
  //         // open: [],
  //         // closed: [],
  //       },
  //       portfolio: {},
  //     },
  //     funds: {
  //       availableToTrade: 0.88,
  //       usedFunds: 0.0,
  //       totalFunds: 0.88,
  //     },
  //   },
];
stocksAvailable = [];

// ============== class to create new user ===========================================

class UserStocks {
  constructor() {
    this.watchList = [];
    this.orders = [];
    this.portfolio = [];
  }
  addToWatchlist(stock) {
    this.watchList.push(stock);
  }
  addToOrders(stock) {
    this.orders.push(stock);
  }
  addToPortfolio(Stock) {
    this.portfolio.push(Stock);
  }
}
class User {
  constructor(name, userName, password, DOB) {
    this.name = name;
    this.userName = userName;
    this.password = password;
    this.dob = DOB;
    this.stocks = new UserStocks();
    this.funds = {
      availableToTrade: 0,
      usedFunds: 0,
      totalFunds: 0,
    };
  }
  //   get funds() {
  //     this.funds.totalFunds = this.funds.availableToTrade + this.funds.usedFunds;
  //     return funds;
  //   }
  //   set funds(amount) {
  //     //   this.totalFunds = this.funds.availableToTrade + this.funds.usedFunds;
  //   }
  addFundsToAccount(amount) {
    this.funds.availableToTrade += Number(amount);
  }
}

// ============================= class to create new eachstock ============================

class CreateStock {
  constructor(stockName, marketType, Graph, previousPrice = 0, currentPrice) {
    this.stockName = stockName;
    this.marketType = marketType;
    this.Graph = Graph;
    this.previousPrice = previousPrice;
    this.currentPrice = currentPrice;
    this.priceChange = this.currentPrice - this.previousPrice;
    this.priceChangePercentage = (this.priceChange / this.currentPrice) * 100;
  }
  changePriceOfStock(amount) {
    this.previousPrice = this.currentPrice;
    this.currentPrice = Number(amount);
  }
}
// =================== adding all stocks to stocks array from allStocks array =========================

allStocks.forEach((ele) => {
  let stock = new CreateStock(
    ele.name,
    ele.marketType,
    ele.graph,
    ele.previousPrice,
    ele.price
  );
  stocksAvailable.push(stock);
});

//==================  calling class to add onkar and user to users array ===================

let onkar = new User("onkar", "oshingate", "onkar@123", "24-02-1997");
let user1 = new User("abc", "abcdefg", "abc@123", "20-03-2001");
users.push(onkar);
users.push(user1);
user1.addFundsToAccount(100);
console.log(users);

let selectedUser = users[0];
console.log(selectedUser);

console.groupEnd();
