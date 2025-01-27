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

function showSection(section) {
  const sections = document.querySelectorAll('.dashboard-section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(section).classList.add('active');
}

function openAppointmentModal() {
  document.getElementById('appointmentModal').classList.add('active');
}

function closeAppointmentModal() {
  document.getElementById('appointmentModal').classList.remove('active');
}

function saveAppointment() {
  const date = document.getElementById('appointment-date').value;
  const time = document.getElementById('appointment-time').value;
  const counselor = document.getElementById('appointment-counselor').value;
  const type = document.getElementById('appointment-type').value;

  if (date && time && counselor && type) {
    alert('Appointment Saved!');
    closeAppointmentModal();
  } else {
    alert('Please fill in all fields.');
  }
}

flatpickr('#appointment-date', {
  dateFormat: 'Y-m-d',
});
