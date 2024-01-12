//Imagine you have a big sandwich, and you want to share it with your friends. 
//The terms "slice" and "splice" in JavaScript are a bit like that, 
//but with arrays instead of sandwiches.

    //Slice:
        //Slicing is like cutting a piece of the sandwich to share.
        //In JavaScript, when you use slice on an array, you are creating a new array that contains a portion of the original array.
        //It doesn't change the original array; it just gives you a part of it.
        //For example:


    //let originalArray = [1, 2, 3, 4, 5];
    //let slicedArray = originalArray.slice(1, 4);
    // slicedArray will be [2, 3, 4], and originalArray is still [1, 2, 3, 4, 5]

    //Splice:

    //Splicing is like taking some ingredients out or putting new ones into the sandwich, changing it.
    //In JavaScript, when you use splice on an array, you can add or remove elements from the array.
    //It does change the original array.
    //For example:



        //let originalArray = [1, 2, 3, 4, 5];
        //originalArray.splice(2, 1, 6);
        // originalArray will be [1, 2, 6, 4, 5]

        //In this example, we removed one element starting from index 2, and then added the number 6 in its place.

//In simple terms, "slice" gives you a part of the array without changing it,
// like cutting a piece of the sandwich to share, 
//while "splice" allows you to modify the array by adding or removing elements, 
//like changing the ingredients in the sandwich.