document.addEventListener("DOMContentLoaded", function () {
    // Redirect after User Login Form submission
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); 
        window.location.href = "patient_dash.html"; // Redirect 
    });

    // Redirect after Admin Login Form submission
    document.getElementById("adminLoginForm").addEventListener("submit", function (event) {
        event.preventDefault(); 
        window.location.href = "dashboard.html"; // Redirect 
    });
});

  // Function to open the modal and initialize Flatpickr
  function openModal() {
    const modal = document.getElementById("bookingModal");
    modal.classList.remove("hidden"); // Show the modal

    // Initialize Flatpickr dynamically
    flatpickr("#calendar", {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      minDate: "today", // Disable past dates
    });
  }

   // Function to close the modal
   function closeModal() {
    const modal = document.getElementById("bookingModal");
    modal.classList.add("hidden"); // Hide the modal

    // Clear inputs
    document.getElementById("calendar").value = "";
    document.getElementById("time").value = "";
  }

  // Function to confirm the booking
  function confirmBooking() {
    const date = document.getElementById("calendar").value;
    const time = document.getElementById("time").value;

    if (date && time) {
      alert(`Booking confirmed for ${date} at ${time}`);
      closeModal();
    } else {
      alert("Please select both a date and time.");
    }
  }