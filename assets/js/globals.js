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

let messageSent = false; // Track if a message is sent
let isInVideoCall = false; // Track if video call is in progress

// Show section logic
function showSection(section) {
  const sections = document.querySelectorAll('.dashboard-section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(section).classList.add('active');
}

// Handle starting a chat with a counselor
function startChat(counselorName) {
  document.getElementById('chat-header').textContent = `Chat with ${counselorName}`;
  // Optionally, you could load previous chat history here if needed
}

// Handle sending messages in the chat
function sendMessage(event) {
  if (event.key === 'Enter') {
    const message = document.getElementById('chat-input').value;
    if (message) {
      messageSent = true; // Mark that a message was sent
      const chatBox = document.getElementById('chat-box');
      const newMessage = document.createElement('div');
      newMessage.classList.add('message', 'sent');
      newMessage.textContent = message;
      chatBox.appendChild(newMessage);
      document.getElementById('chat-input').value = ''; // Clear input
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
      simulateCounselorResponse(); // Simulate counselor response after user sends a message
    }
  }
}

// Simulating receiving a message from the counselor
function simulateCounselorResponse() {
  if (messageSent) { // Ensure counselor responds only if a message was sent
    setTimeout(() => {
      const chatBox = document.getElementById('chat-box');
      const newMessage = document.createElement('div');
      newMessage.classList.add('message', 'received');
      newMessage.textContent = 'Counselor: How are you feeling today?';
      chatBox.appendChild(newMessage);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 2000); // Counselor responds 2 seconds after user sends a message
  }
}

// Start Video Call
function startVideoCall() {
  if (!isInVideoCall) {
    // Open video call modal
    document.getElementById('video-call-modal').classList.remove('hidden');
    document.getElementById('video-call-btn').disabled = true; // Disable button once video call starts
    isInVideoCall = true;
    initiateVideoStream();
  }
}

// Initialize video stream (placeholder logic for now)
function initiateVideoStream() {
  const userVideo = document.getElementById('user-video');
  const counselorVideo = document.getElementById('counselor-video');
  
  // Get user media (Camera & Microphone)
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
      userVideo.srcObject = stream; // Display user's video
      // Simulate counselor video feed (for now it's hidden, as we don't have an actual video source)
      counselorVideo.classList.remove('hidden');
      counselorVideo.srcObject = stream; // Display simulated counselor's video (for the demo)
    })
    .catch(err => {
      console.log('Error accessing media devices: ', err);
      alert('Could not start the video call. Please check your camera and microphone settings.');
    });
}

// End Video Call
function endVideoCall() {
  // Close the video call modal
  document.getElementById('video-call-modal').classList.add('hidden');
  document.getElementById('video-call-btn').disabled = false; // Enable video call button again
  isInVideoCall = false;
  const userVideo = document.getElementById('user-video');
  const counselorVideo = document.getElementById('counselor-video');
  userVideo.srcObject.getTracks().forEach(track => track.stop()); // Stop user media
  counselorVideo.srcObject.getTracks().forEach(track => track.stop()); // Stop counselor media (simulated)
}