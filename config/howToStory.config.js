module.exports = {
	defaults: {
		howToStory: {
			skin: 'snapgram',      // container class
			avatars: true,         // shows user photo instead of last story item preview
			list: false,           // displays a timeline instead of carousel
			openEffect: true,      // enables effect when opening story
			cubeEffect: true,     // enables the 3d cube effect when sliding story
			autoFullScreen: false, // enables fullscreen on mobile browsers
			backButton: true,      // adds a back button to close the story viewer
			backNative: false,     // uses window history to enable back button on browsers/android
			previousTap: true,     // use 1/3 of the screen to navigate to previous item when tap the story
			localStorage: false,    // set true to save "seen" position. Element must have a id to save properly.
			reactive: false,        // set true if you use frameworks like React to control the timeline (see react.sample.html)
			rtl: false,            // enable/disable RTL

			stories: [
				{
					id: "how-to-story",               // story id
					photo: "/public/img/how-to-story-1.jpeg",            // story photo (or user photo)
					name: "How To BikeTag.Org",             // story name (or user name)
					link: "#",             // story link (useless on story generated by script)
					lastUpdated: "2020-12-20 12:34:56",      // last updated date in unix time format
					seen: false,          // set true if user has opened
				
					items: [              // array of items
						// story item example
						{
							id: "how-to-story-1",       // item id
							type: "photo",     // photo or video
							length: 5,    // photo timeout or video length in seconds - uses 3 seconds timeout for images if not set
							src: "/public/img/how-to-story-1.jpeg",      // photo or video src
							preview: "",  // optional - item thumbnail to show in the story carousel instead of the story defined image
							link: "#",     // a link to click on story
							linkText: "How To", // link text
							time: "",     // optional a date to display with the story item. unix timestamp are converted to "time ago" format
							seen: false,   // set true if current user was read,
						},
						{
							id: "how-to-story-2",       // item id
							type: "photo",     // photo or video
							length: 5,    // photo timeout or video length in seconds - uses 3 seconds timeout for images if not set
							src: "/public/img/how-to-story-2.jpeg",      // photo or video src
							preview: "",  // optional - item thumbnail to show in the story carousel instead of the story defined image
							link: "#",     // a link to click on story
							linkText: "How To", // link text
							time: "",     // optional a date to display with the story item. unix timestamp are converted to "time ago" format
							seen: false,   // set true if current user was read,
						},
						{
							id: "how-to-story-3",       // item id
							type: "photo",     // photo or video
							length: 5,    // photo timeout or video length in seconds - uses 3 seconds timeout for images if not set
							src: "/public/img/how-to-story-3.jpeg",      // photo or video src
							preview: "",  // optional - item thumbnail to show in the story carousel instead of the story defined image
							link: "#",     // a link to click on story
							linkText: "How To", // link text
							time: "",     // optional a date to display with the story item. unix timestamp are converted to "time ago" format
							seen: false,   // set true if current user was read,
						},
					],
				},
			],
		}
	}
}
