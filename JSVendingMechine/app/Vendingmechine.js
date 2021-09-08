readline = require('readline-sync');

var balance = 0;
var cans = 75;
var chocolate = 150;
var crisps = 100;
var oldBalance = 0;
//setting credits for the user
function setCredits(){

  var test = false;

  while(test==false){
    console.log('Please Enter your credits');
//Asking the user to add credits into the system
    var balance = readline.question('Enter credits here: ');
    console.log('Your credit balance is: ' + balance);
//Due to the lowest cost item being 75 this will stop the user putting anything below 75 into the program
    if(balance < 75){
      console.log('Cannot accept anything below 75');
    }else{
      test = true;

      return balance;

    }
  }
}

//main menu interfce
function main_menu(options){
  console.log('+===================+');
  console.log('|  Vending Machine  |');
  console.log('|     Main Menu     |');
  console.log('+===================+');

  for (var idx = 0; idx < options.length; idx++) {
    console.log(idx + '; ' + options[idx]);
  }
//The user selects a number corsponding from the array

}
function products_menu(products){
  console.log('+===================+');
  console.log('|  Vending Machine  |');
  console.log('|  Products  Menu   |');
  console.log('+===================+');


  for (var idx = 0; idx < products.length; idx++) {
    console.log(idx + '; ' + products[idx]);
  }
//The user selects a number corsponding from the array from the main menu

}
//The user will select a choice from the array from the main menu
function getuserselection(){
  var selection = readline.question('Choice: ');
  console.log('You have chosen option: ' + selection);
  return selection;
}
//The user selcts a choice from the array from the products page
function getuserchoice(){
  var choice = readline.question('Choice: ');
  console.log('You have chosen option: ' + choice);
  return choice;
}
//This is the sub menu from the main menu
function menuSelection(selection) {
  //products page showing all the products and thier prices
  if (selection == 0){
    products_menu(['  Dr Pepper 75', '  Coke 75', '  Pepsi 75' ,
    '  Flake 150', '  KitKat 150', '  Daim 150' ,'  Skips 100',
     '  Monster Munch 100', '  McCoys 100','  main menu']);

  }
  //Allows the user to view thier credits
  if (selection == 1){

      console.log("Your remaining credits are: " + balance) ;

  }
  //refund allows the user to refund their credits
  if (selection == 2){
    console.log("You have been refunded your credits");
    balance = 0;
   console.log("Balance Now: " + balance);

  }
  //top-up allows the user to top up
  if (selection == 3){
    //saving the old balacne
    oldBalance = balance;
    balance = setCredits();
    //adds the old balance the user had with the new balance the user is adding into the program
    balance = parseInt(balance) + parseInt(oldBalance);
   console.log("Balance Now: " + balance);

  }

}

//This function is from the array to allow the user to see what they bought
function purchase(choice){
  if (choice == 0 && balance >= 75){
      console.log("You have purchased Dr Pepper");
  }
  if (choice == 1 && balance >= 75){
      console.log("You have purchased Coke");
  }
  if (choice == 2 && balance >= 75){
      console.log("You have purchased Pepsi");
  }
  if (choice == 3 && balance >= 150){
      console.log("You have purchased Flake");
  }
  if (choice == 4 && balance >= 150){
      console.log("You have purchased KitKat");
  }
  if (choice == 5 && balance >= 150){
      console.log("You have purchased Daim");
  }
  if (choice == 6 && balance >= 100){
      console.log("You have purchased Skips");
  }
  if (choice == 7 && balance >= 100){
      console.log("You have purchased Monster Munch");
  }
  if (choice == 8 && balance >= 100){
    console.log("You have purchased McCoys");
  }

}
//Updateing credits after purchase
function showCredits(){
  //Checking if the balance is correct for cans
  if (choice == 0 && balance < 75 || choice == 1 && balance <75 || choice == 2 && balance < 75){

      console.log("You do not have enough credit for a can please top-up in the main menu Balance: " + balance);
  }
    //updating for chocolate and the balance after purchase
  if (choice == 0 && balance >= 75 || choice == 1 && balance >=75 || choice == 2 && balance >= 75){
      balance = balance - cans;
      console.log("Your remaining credits are: " + balance);
  }
  //Checking if the balance is correct for chocolate
  if (choice == 3 && balance < 150|| choice == 4 && balance < 150 || choice == 5 && balance < 150){

      console.log("You do not have enough credit for a chocolate please top-up in the main menu Balance: " + balance);
  }
    //updating for chocolate and the balance after purchase
  if (choice == 3 && balance >= 150|| choice == 4 && balance >= 150 || choice == 5 && balance >= 150){
      balance = balance - chocolate;
      console.log("Your remaining credits are: " + balance);
  }
  //Checking if the balance is correct for crisps
  if (choice == 6 && balance < 100 || choice == 7 && balance < 100 || choice == 8 && balance < 100){

      console.log("You do not have enough credit for a bag of crisps please top-up in the main menu Balance: " + balance);
  }
  //updating for chocolate and the balance after purchase
  if (choice == 6 && balance >= 100 || choice == 7 && balance >= 100 || choice == 8 && balance >= 100){
      balance = balance - crisps;
      console.log("Your remaining credits are: " + balance);
  }

}
//Asking if the wants to exit the program or not
function askUserexit(){
  var choices = readline.question('Would you like to exit Y/N: ');
  if (choices == 'Y' || choices == 'y' || balance < 0){
    //if the user selcts Y or y the program will end
    balance = 0;
    console.log('The remaining credits have been refunded, balance now: ' + balance);
    return true;
  } else {
    //if the user slects anything other than Y ot y it will return false which will then go back to the main process
    return false;
  }
}
var choice = 0;
var selection = 0;
var exitchoice = false;
//1: it will ask the user for hwo much credits they will like to Enter = setCredits (function)
// Updated balance from what the user has set and the result is shown in the log
balance = setCredits();

//If false it will ask the user if they want to continue with the program
while (exitchoice == false) {
  //will execute the mainProcess()
  mainProcess();
//6 ask user if they want to keep using the program
  exitchoice = askUserexit();
}

//All the code runs through the mainProcess()
function mainProcess(){

  //2: It will then show the Menu = main_menu()
  //options in the main menu array
  main_menu(['Products ','View Credits ','Refund', 'Top-up']);

  //3: The user will select an item = main_menu()
  selection = getuserselection();

  //4: It will then go to what ever menu the user has selecetd
  menuSelection(selection);
  //If user selects Products this code will then show the products menu
if(selection == 0){
  //get the choice from the user from the set array
  choice = getuserchoice();
  //From the choice
  purchase(choice);
  //5; It will show the remaining credit after purchase = purchase()
  showCredits();
}
}
