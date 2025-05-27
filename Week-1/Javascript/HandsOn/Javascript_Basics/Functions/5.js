//callback functions
// Callback functions are functions that are passed as arguments to other functions.
function callback(yes,no) //here yes and no used as a function
{
    console.log(yes()+' '+no());// calling the functions yes and no
}
function yes()
{
    return 'Yes';
}
function no()
{
    return 'No'
}
callback(yes,no) // passing yes and no functions as arguments to callback function
callback(function(){return 'Ram'},function(){return 'Krishna'}) // passing anonymous functions as arguments to callback function
callback(()=>"Ram",()=>'Rahim') // passing arrow functions as arguments to callback function