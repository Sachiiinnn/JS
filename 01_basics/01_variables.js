const accountId = 123456;
let accountEmail = "sanshu9582@gmail.com";
var accountPassword = "12345678"; 
accountCity = "Delhi"; // This will create a global variable
let accountState;

// accountId = 1; not allowed, as accountId is a constant
accountEmail = "nameanyone626@gmail.com";
accountPassword = "1234567890";
accountCity = "Mumbai"; // This will update the global variable
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);