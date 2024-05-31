// script.js
// Add your JavaScript here
// Example: Fetch job listings from an API and dynamically add them to the page

document.addEventListener('DOMContentLoaded', function() {
    // Example job listings
    const jobs = [
        {
            title: 'Назва вакансії 1',
            description: 'Опис вакансії 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'Назва вакансії 2',
            description: 'Опис вакансії 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ];

    const jobListingsContainer = document.querySelector('.job-listings .container');

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job';
        
        const jobTitle = document.createElement('h3');
        jobTitle.textContent = job.title;
        
        const jobDescription = document.createElement('p');
        jobDescription.textContent = job.description;
        
        const jobButton = document.createElement('button');
        jobButton.textContent = 'Детальніше';

        jobElement.appendChild(jobTitle);
        jobElement.appendChild(jobDescription);
        jobElement.appendChild(jobButton);

        jobListingsContainer.appendChild(jobElement);
    });
});