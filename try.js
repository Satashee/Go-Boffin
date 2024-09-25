// Prompt user for the job they want to search for
const jobTitle = prompt("Enter the job title you want to search for:");

if (jobTitle) {
    // Construct the URL with user input
    const url = `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=46fa62a5&app_key=aba9f6707c42fc03c3a0846c92a203bf&results_per_page=50&what=${encodeURIComponent(jobTitle)}&content-type=application/json`;

    // Fetch data from the API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data.results) && data.results.length > 0) {
                // Create a table element
                const table = document.createElement('table');
                table.classList.add('job-table'); // Add CSS class for styling
                
                // Create table header row
                const headerRow = table.insertRow();
                const headers = ['Title', 'Description', 'Company', 'Location', 'Job Link'];
                headers.forEach(headerText => {
                    const header = document.createElement('th');
                    header.textContent = headerText;
                    headerRow.appendChild(header);
                });

                // Populate table rows with job data
                data.results.forEach(job => {
                    const row = table.insertRow();
                    row.classList.add('job-row'); // Add CSS class for styling
                    const titleCell = row.insertCell();
                    const descriptionCell = row.insertCell();
                    const companyCell = row.insertCell();
                    const locationCell = row.insertCell();
                    const linkCell = row.insertCell();

                    titleCell.textContent = job.title;
                    descriptionCell.textContent = job.description;
                    companyCell.textContent = job.company.display_name;
                    locationCell.textContent = job.location.display_name;
                    linkCell.innerHTML = `<a href="${job.redirect_url}" target="_blank">View Job</a>`;
                });

                // Append the table to an existing HTML element with id="jobTable"
                const jobTableElement = document.getElementById('jobTable');
                jobTableElement.appendChild(table);
            } else {
                console.log("No job listings found.");
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
} else {
    console.log("No job title provided.");
}
