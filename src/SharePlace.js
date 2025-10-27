class PlaceFinder {
    constructor(){

        //here we are selecting elements from the DOM
        const addressForm = document.queryselector('form');
        const locateUserBtn = document.queryselector('locate-btn');

        //adding event listeners to the elements
        locateUserBtn.addEventListener('click', this.locateUserHandler); 
    }    

    //creating the locateUserHandler method that will be called when the button is clicked
    locateUserHandler(){

    }
}


