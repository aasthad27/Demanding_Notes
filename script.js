// JavaScript code for the demanding notes website

// Function to dynamically add contributor cards
function addContributorCard(name, image, description,identity) {
    var contributorContainer = document.getElementById('contributorsContainer');
    var contributorCard = document.createElement('div');
    contributorCard.className = 'contributor-card';
  
    // var contributorImage = document.createElement('img');
    // contributorImage.src = image;
    // contributorImage.alt = name + ' Image';
    // contributorCard.appendChild(contributorImage);
  
    var contributorName = document.createElement('h3');
    contributorName.textContent = name;
    contributorCard.appendChild(contributorName);
  
    var contributorDesc = document.createElement('p');
    contributorDesc.textContent = description;
    contributorCard.appendChild(contributorDesc);

    var contributorIden = document.createElement('p');
    contributorIden.textContent = identity;
    contributorCard.appendChild(contributorIden);
    contributorContainer.appendChild(contributorCard);
  }
  
  // Function to load contributors from an API or database
  function loadContributors() {
    // Simulated data for demonstration purposes
    var contributors = [
      {
        name: 'Aastha Dubey',
        description: 'Admin',
        identity: '2nd year, Btech CSE'
      },
      
      // Add more contributors here
    ];
  
    contributors.forEach(function(contributor) {
      addContributorCard(contributor.name, contributor.image, contributor.description,contributor.identity);
    });
  }
  
  // Load contributors when the page finishes loading
  window.addEventListener('load', function() {
    loadContributors();
  });
  
  