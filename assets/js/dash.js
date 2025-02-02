//   to toggle the sidebar
const menuIconEl = $(".menu-icon");
    const sidenavEl = $(".sidenav");
    const sidenavCloseEl = $(".sidenav__close-icon");

    // Add and remove provided class names
    function toggleClassName(el, className) {
      if (el.hasClass(className)) {
        el.removeClass(className);
      } else {
        el.addClass(className);
      }
    }

    // Open the side nav on click
    menuIconEl.on("click", function () {
      toggleClassName(sidenavEl, "active");
    });

    // Close the side nav on click
    sidenavCloseEl.on("click", function () {
      toggleClassName(sidenavEl, "active");
    });
    
   // JavaScript for handling the calendar and timeline interactions
    document.querySelectorAll('.calendar button').forEach(button => {
        button.addEventListener('click', () => {
          const date = button.getAttribute('data-date');
          if (date) {
            document.querySelectorAll('.timeline li').forEach(item => {
              item.style.display = item.getAttribute('data-date') === date ? 'block' : 'none';
            });
          } else {
            document.querySelectorAll('.timeline li').forEach(item => {
              item.style.display = 'block';
            });
          }
        });
      });
  
      // View All button interaction
      document.getElementById('view-all').addEventListener('click', () => {
        document.querySelectorAll('.timeline li').forEach(item => {
          item.style.display = 'block';
        });
      });
  
      // Button interactions for confirm, reschedule, and cancel
      document.querySelectorAll('.confirm').forEach(button => {
        button.addEventListener('click', (e) => {
          const status = e.target.closest('li').querySelector('.status');
          status.textContent = 'Status: Confirmed';
        });
      });
  
      document.querySelectorAll('.reschedule').forEach(button => {
        button.addEventListener('click', (e) => {
          const newDate = prompt('Enter the new date (YYYY-MM-DD):');
          if (newDate) {
            const item = e.target.closest('li');
            item.setAttribute('data-date', newDate);
            const status = item.querySelector('.status');
            status.textContent = 'Status: Rescheduled';
          }
        });
      });
  
      document.querySelectorAll('.cancel').forEach(button => {
        button.addEventListener('click', (e) => {
          const status = e.target.closest('li').querySelector('.status');
          status.textContent = 'Status: Cancelled';
        });
      });