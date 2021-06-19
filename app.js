
// Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// var  first_name = prompt( " Enetr your first name " );
// var  last_name = prompt( " Enetr your first name ");
// var full_name = first_name + "  " + last_name;
// document.write(" WELCOME DEAR " + full_name);


// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// var favorite_mobile_phone_model = prompt("What is your favorite mobile phone model");
// var display_the_length = favorite_mobile_phone_model.length;
// document.write("My favorite mobile phone model is : " + favorite_mobile_phone_model +"<br>"+ " length of string :" + display_the_length);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var letter = "Pakistani";
// document.write(" String : "+letter + "<br>");
// var amount = letter.indexOf("n");
// document.write(" index of 'n' : "+amount)

// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser

// var HelloWorld = "Hello World";
// document.write(" String : "+ HelloWorld+"<br>");
// var a = HelloWorld.lastIndexOf("l");
// document.write(" last index of 'l' : " + a);

 
// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.        

// var letter = "Pakistani";
// document.write(" String : "+letter + "<br>");
// var b = letter.charAt(3);
// document.write(" Character at index 3 : " + b);

// 6. Repeat Q1 using string concat() method.

// Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// var firstNmae = prompt("Enter your first name");
// var lastNmae  = prompt("Enter your last name");
// var fullName  = firstNmae.concat("  " + lastNmae );

// document.write(fullName); 

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.
   
// var city = "Hyderabad";
// document.write("city : "+city+"<br>");
// var a = city.replace("Hyder","Islam");
// document.write(" After Replacement : "+a);

// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("before replacment :   "+message+"<br>");
// var a = message.replace(/and/g,"&");
// document.write(a);

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser

// var string = " 472 ";
// document.write(" Value : " + string + "<br>");
// document.write(" Type : " + typeof(string) + "<br>");
// var a = Number(string);
// document.write(" Value : " + a + "<br>");
// document.write(" Type : " + typeof(a) + "<br>");


// Write a program that takes user input. Convert and 
// show the input in capital letters

// var a = prompt("Enter text");
// document.write("User input : " + a + "<br>");
// var a = a.toUpperCase();
// document.write(" Upper case : " + a);

// Write a program that takes user input. Convert and 
// show the input in title case

// var text = prompt("Enter text");
// document.write("User input : " + text + "<br>");
// var a = text.charAt(0);
// a = a.toUpperCase();
// var b = text.slice(1);
// b=b.toLowerCase();
// var c = a+b;
// document.write("Title case : "+ c);

// Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser

// var num = 35.36;
// document.write(" Number : " + num + "<br>");
// var str = num.toString();
// var b = str.replace("." ,"");
// document.write(" Result : " + b + "<br>");


// Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


// var username = prompt(" Enter username : ");
// var in_correct = /^[A-Za-z]+$/;
// if(username.match(in_correct)){
//     true;
//     document.write(" Correct Pasword ");

// } 
// else{
//     document.write(" Enter a valid password ! ");
//     false;
// }


// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability.

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var to_check = prompt("Welcome to my Bakery. what do you want to order sir/mam");
// to_check = to_check.toLowerCase();
        
// var matchFound = false;

// for(var i = 0 ; i<5 ; i++){
//     if(to_check == a[i]){
//         matchFound = true;
//         document.write(to_check +" is available at index : " + i + " in our bakery ");

//     }

// }
// if(matchFound === false){
//     document.write(to_check +" is not available  in our bakery ");

// }

// Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



































// Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var array = university.split('');


//     document.write(array);

// Write a program to display the last character of a user 
// input.

// var user_input = "Pakistan";
// document.write(" user input : " + user_input + "<br>");
// var last_character = user_input.charAt(user_input.length-1) ;
// document.write(" last character " + last_character);

// You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string

var str = "The quick brown fox jumps over the lazy dog";
count = 0;
for(var i = 0 ; i<str.length; i ++){
    if(str.charAt(i) === "the"){
        count++;
        

    }
    
}
document.write(count);