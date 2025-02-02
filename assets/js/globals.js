document.addEventListener("DOMContentLoaded", () => {
  // Initialize event listeners and components if elements exist
  attachFormSubmissionHandlers();
  initializeFlatpickr();
  attachToggleMenuHandler();
  attachChatButtonHandlers();
  attachChatInputHandler();
});

// Function to handle form submissions
const attachFormSubmissionHandlers = () => {
  const loginForm = document.getElementById("loginForm");
  const adminLoginForm = document.getElementById("adminLoginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", handleFormSubmission("../Patient/dashboard.html"));
  }

  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", handleFormSubmission("../counsellor/dashboard.html"));
  }
};

// Higher-order function to handle form submissions and redirects
const handleFormSubmission = (redirectUrl) => (event) => {
  event.preventDefault();
  window.location.href = redirectUrl;
};

// Function to initialize Flatpickr for date input
const initializeFlatpickr = () => {
  if (typeof flatpickr !== 'undefined') {
    flatpickr('#appointment-date', { dateFormat: 'Y-m-d' });
  }
};

// Function to attach the toggle menu handler
const attachToggleMenuHandler = () => {
  document.querySelector('.lg:hidden')?.addEventListener('click', toggleMenu);
};

// Function to toggle the navigation menu visibility
const toggleMenu = () => {
  const navButtons = document.getElementById('nav-buttons');
  if (navButtons) {
    navButtons.classList.toggle('hidden');
    navButtons.classList.toggle('slide-in');
  }
};

// Function to attach chat button handlers
const attachChatButtonHandlers = () => {
  document.querySelectorAll('button[onclick^="startChat"]').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const counselorName = button.getAttribute('onclick').match(/'(.*)'/)[1];
      startChat(counselorName);
    });
  });
};

// Function to handle starting a chat with a counselor
const startChat = (counselorName) => {
  const chatHeader = document.getElementById('chat-header');
  if (chatHeader) {
    chatHeader.textContent = `Chat with ${counselorName}`;
  }
  const chatModal = document.getElementById('chatModal');
  if (chatModal) {
    chatModal.classList.add('active');
  }
};

// Function to close the chat modal
const closeChatModal = () => {
  const chatModal = document.getElementById('chatModal');
  if (chatModal) {
    chatModal.classList.remove('active');
  }
};

// Function to attach the chat input handler
const attachChatInputHandler = () => {
  const chatInput = document.getElementById('chat-input');
  if (chatInput) {
    chatInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        sendMessage(event);
      }
    });
  }
};

// Function to handle sending messages in the chat
const sendMessage = (event) => {
  if (event) {
    event.preventDefault();
  }
  const message = document.getElementById('chat-input').value;
  if (message) {
    displayMessage('sent', message);
    document.getElementById('chat-input').value = ''; // Clear input
    simulateCounselorResponse();
  }
};

// Function to display a message in the chat
const displayMessage = (type, message) => {
  const chatBox = document.getElementById('chat-box');
  if (chatBox) {
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', type);
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
  }
};

// Function to simulate a counselor response in the chat
const simulateCounselorResponse = () => {
  setTimeout(() => {
    displayMessage('received', 'Counselor: How are you feeling today?');
  }, 2000); // Counselor responds 2 seconds after user sends a message
};

// Function to show a specific section
const showSection = (section) => {
  const sections = document.querySelectorAll('.dashboard-section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(section)?.classList.add('active');
};

// Function to open the appointment modal
const openAppointmentModal = () => {
  document.getElementById('appointmentModal')?.classList.add('active');
};

// Function to close the appointment modal
const closeAppointmentModal = () => {
  document.getElementById('appointmentModal')?.classList.remove('active');
};

// Function to save a new appointment
const saveAppointment = () => {
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
};

// Function to open the booking modal
const openBookingModal = () => {
  document.getElementById('bookingModal')?.classList.add('active');
};

// Function to close the booking modal
const closeBookingModal = () => {
  document.getElementById('bookingModal')?.classList.remove('active');
};

// Function to book a counselor
const bookCounselor = () => {
  const date = document.getElementById('calendar').value;
  const time = document.getElementById('time').value;

  if (date && time) {
    alert('Counselor Booked!');
    closeBookingModal();
  } else {
    alert('Please select a date and time.');
  }
};