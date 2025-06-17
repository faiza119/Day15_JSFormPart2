// Submit Button Functionality
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  // Get form field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Basic validation
  if (name === "" || email === "" || phone === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (isNaN(phone)) {
    alert("Phone number should contain only numbers.");
    return;
  }

  // Display data dynamically below the form
  const outputDiv = document.getElementById("output");
  outputDiv.style.display = "block";
  outputDiv.innerHTML = `
    <h3>Submitted Data:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
  `;
});

// Clear Button Functionality
document.getElementById("clearBtn").addEventListener("click", function() {
  // Reset form fields
  document.getElementById("registrationForm").reset();

  // Clear submitted data
  const outputDiv = document.getElementById("output");
  outputDiv.style.display = "none";
  outputDiv.innerHTML = "";
});
