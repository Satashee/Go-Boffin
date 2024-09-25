const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
  
  
  
  
  
  
const apiKey = 'YOUR_INDEED_API_KEY'; // Replace with your Indeed API key

  // Function to fetch data from the Indeed API
  const fetchData = async () => {
    try {
      const response = await fetch('https://indeed-indeed.p.rapidapi.com/apisearch', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'indeed-indeed.p.rapidapi.com',
          'X-RapidAPI-Key': apiKey,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      console.log(data); // You can handle the data as needed

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call the fetchData function
  fetchData();