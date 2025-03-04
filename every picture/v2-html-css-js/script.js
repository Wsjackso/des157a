(function () {
    "use strict";
    console.log("reading js");

        // Select elements
        const images = document.querySelectorAll(".image-container");
        const overlay = document.querySelector("#overlay");
        const overlayTitle = document.querySelector("#artist-title");
        const overlayDescription = document.querySelector("#artist-description");
        const overlayVideoContainer = document.querySelector("#artist-video-container");
        const closeButton = document.querySelector("#closeButton");


        // Artist Details
        const artistDetails = {
            "ari": {
                name: "Ari Lennox",
                description: "Ari Lennox performed at the Fox Theater in Oakland on February 5th, 2023 as part of her age/sex/location tour. Ari performed songs from her “Shea Butter Baby” album which she released in 2019 before the pandemic.The song the video is playing is called “Unloyal” and is one of my favorite songs by her.",
                video: "images/ari.mp4"
            },
            "ella": {
                name: "Ella Mai",
                description: "Ella Mai performed at the Warfield in San Francisco on May 10th, 2023 as part of her  tour. Ella Mai performed songs from her “Heart On My Sleeve” album which she released May 6th, 2022. The song the video is playing is called “Leave You Alone” and is one of my favorite songs by her.",
                video: "images/ella.mp4"
            },
            "d4vd": {
                name: "D4VD",
                description: "D4vd performed at the Chase Center in San Francisco on October 26th, 2023 as an opener for Sza SOS tour. D4vd performed songs from his new album “Petals To Thorns” which he released on May 26th, 2023. The song the video is playing is called “Here With Me” and is one of my favorite songs by him.",
                video: "images/d4vd.mp4"
            },
            "sza": {
                name: "SZA",
                description: "Sza performed at the Chase Center in San Francisco on October 26th, 2023 as part of her SOS tour. Sza performed songs from her “SOS” album which she released December 9th, 2023. The song the video is playing is called “Nobody Gets Me” and is one of my favorite songs by her.",
                video: "images/sza.mp4"
            }
        };

        // Function to open the overlay
        function openOverlay(event) {
            const artistKey = event.currentTarget.dataset.story; // Get artist key
            const artist = artistDetails[artistKey];

            if (artist) {
                overlayTitle.textContent = artist.name;
                overlayDescription.textContent = artist.description;

                // Add video 
                overlayVideoContainer.innerHTML = `
                    <video controls autoplay>
                        <source src="${artist.video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;

                overlay.classList.add("active"); // Show overlay using a class
            }
        }

        
        function closeOverlay() {
            overlay.classList.remove("active"); 
            overlayVideoContainer.innerHTML = ""; // Stop video 
        }

       
        images.forEach(image => {
            image.addEventListener("click", openOverlay);
        });

        
        closeButton.addEventListener("click", closeOverlay);

        // Close overlay when pressing Escape key
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeOverlay();
            }
        });
    
})();
