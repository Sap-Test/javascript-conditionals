let counter = 0;

$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").submit(countClick);
    $("#ageForm").submit(checkAge);
    $("#taxForm").submit(calcSalesTax);
    $("#catForm").submit(recommendFood);
    $("#cardForm").submit(drawCard);

	function countClick(event) {
	    event.preventDefault();



		// Increment a variable that tracks the
		// number of button clicks
        counter++;

		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
        $("p#clickCountOutput").text(counter);

		// When the count gets to 10, reset it to 0
        if(counter === 10)
        {
            counter = 0;
        }



	}


    function checkAge(event) {
        event.preventDefault();

        // Get the user's birth year from the text
        // box with ID of "birthYear"
        let birthYear = parseInt($("input#birthYear").val());
        let age = 2021 - birthYear;

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if (age < 18)
        {
            $("p#birthYearOutput").text("Child");
        }

        // If they are 18 or over, print "Adult" instead
        else
        {
            $("p#birthYearOutput").text("Adult");

        }

    }

    function calcSalesTax(event) {
        event.preventDefault();

        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        let purchaseAmount = parseFloat($("input#purchaseAmount").val());


        // Get the state from the text box with ID "state"
        let state = $("input#state").val();

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        if (state === "WI")
        {
            $("p#salesTaxOutput").text(purchaseAmount * 0.05);
        }
        else if (state === "IL")
        {
                $("p#salesTaxOutput").text(purchaseAmount * 0.08);
        }
        else if (state === "MN")
        {
            $("p#salesTaxOutput").text(purchaseAmount * 0.075);
        }
        else if (state === "MI")
        {
            $("p#salesTaxOutput").text(purchaseAmount * 0.055);
        }
        else
            $("p#salesTaxOutput").text("Error");


        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"

        // If the user enters a state not listed above,
        // print "Error" instead


    }

    function recommendFood(event) {
        event.preventDefault();

        // Get the cat's age from the text box with
        // ID of "catAge"

        let catAge = parseInt($("input#catAge").val());

        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if (catAge < 2)
        {
            $("p#catAgeOutput").text("Kitten Chow");
        }
        else if (catAge < 11)
        {
            $("p#catAgeOutput").text("Adult Chow");
        }
        else
        {
            $("p#catAgeOutput").text("Senior Chow");
        }



        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard(event) {
        event.preventDefault();

        // Generate a random card face value (1 - 13)
        let faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        let suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"

        let value;
        let suitName;
        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"

        if(faceValue === 1)
        {
            value = 1;
        }
        else if (faceValue === 11)
        {
            value = "Jack"
        }
        else if (faceValue === 12)
        {
            value = "Queen";
        }
        else if (faceValue === 13)
        {
            value = "King";
        }
        else if(faceValue < 11)
        {
            value = faceValue;
        }


        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        if(suit === 1)
        {
            suitName = "Clubs";
        }
        else if (suit === 2)
        {
            suitName = "Spades";
        }
        else if (suit === 3)
        {
            suitName = "Hearts";
        }
        else if(suit === 4)
        {
            suitName = "Diamonds";
        }

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"

        let description = `${value} of ${suitName}`;
        $("p#drawCardOutput").text(description);

    }

});