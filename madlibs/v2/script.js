(function() {
    'use strict';
    console.log('reading js');

    // Elements for the form and results
    const form = document.querySelector('#alert-form'); 
    const output = document.querySelector('#output'); 
    const results = document.querySelector('#results'); 
    const input = document.querySelector('#warning-form'); 
    const errorMessage = document.querySelector('#error-message'); 

    // Add event listener for submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Get the values from the form inputs
        const alertFrom = document.querySelector('#alert-from').value;
        const scale = document.querySelector('#scale').value;
        const location = document.querySelector('#location').value;
        const noun = document.querySelector('#noun').value;
        const disturbance = document.querySelector('#disturbance').value;
        const pluralNoun = document.querySelector('#plural-n').value;
        const verbIng1 = document.querySelector('#verb-ing-1').value;
        const consequences = document.querySelector('#consequences').value;
        const verbIng2 = document.querySelector('#verb-ing-2').value;

        let myText = '';

        if (alertFrom === 'Select One') {
            myText = "Please select who the alert is from.";
            document.querySelector('#alert-from').focus();
        } else if (scale === 'Select One') {
            myText = "Please select the impact scale.";
            document.querySelector('#scale').focus();
        } else if (location === '') {
            myText = "Please provide a location.";
            document.querySelector('#location').focus();
        } else if (disturbance === 'Select One') {
            myText = "Please select a disturbance.";
            document.querySelector('#disturbance').focus();
        } else if (noun === '') {
            myText = "Please provide a noun.";
            document.querySelector('#noun').focus();
        } else if (pluralNoun === '') {
            myText = "Please provide a plural noun.";
            document.querySelector('#plural-n').focus();
        } else if (verbIng1 === '') {
            myText = "Please provide a verb ending in -ing.";
            document.querySelector('#verb-ing-1').focus();
        } else if (verbIng2 === '') {
            myText = "Please provide another verb ending in -ing.";
            document.querySelector('#verb-ing-2').focus();
        } else if (consequences === 'Select One') {
            myText = "Please select consequences.";
            document.querySelector('#consequences').focus();
        } else {
            // Clear any previous errors
            if (errorMessage) {
                errorMessage.innerHTML = '';
            }

            // If all fields are filled, create the mad lib message
            myText = `   <p>This is an official alert from the <span id="output-alert-from">${alertFrom}</span>. 
                    A <span class="red-text" id="output-disturbance">${disturbance}</span> crisis has been detected in 
                    <span id="output-location">${location}</span>.Reports confirm that the source of the disturbance is 
                    <span id="output-disturbance">${disturbance}</span>, a dangerous force known for their mischievous deeds.
                    Authorities urge all <span id="output-scale">${scale}</span> residents to take immediate action by 
                    <span id="output-verb-ing-1">${verbIng1}</span>. Failure to do so may result in 
                    <span id="output-consequences">${consequences}</span>.</p>
                
                <p>Stay alert, stay informed, and remember: 
                    <span id="output-verb-ing-1">${verbIng1}</span> is the key to survival.An urgent warning has been issued regarding a
                    <span class="red-text" id="output-noun">${noun}</span> in your area. The <span class="red-text" 
                    id="output-plural-n">${pluralNoun}</span> have been seen hiding.If no action is taken, this could result 
                    in <span class="red-text" id="output-consequences">${consequences}</span>. The public is advised to seek shelther 
                    immediately.Further updates will be provided as the situation develops.Please avoid <span class="red-text" id="output-verb-ing-2">
                    ${verbIng2}</span> in the affected area.
                </p>`


            // Clear the form fields after submission
            form.reset();

            // Display the mad lib on the page
            output.innerHTML = myText;

            // Hide the form and show the results 
            input.style.display = 'none';
            results.classList.remove('hidden');
            results.classList.add('showing');
            return;
        }

    });
})();
