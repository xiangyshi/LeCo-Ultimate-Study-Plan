document.addEventListener('DOMContentLoaded', function() {
    // Function to save checkbox state
    function saveCheckboxState(checkbox) {
        const id = checkbox.id || checkbox.getAttribute('data-id');
        localStorage.setItem(id, checkbox.checked);
    }

    // Function to restore checkbox state
    function restoreCheckboxState(checkbox) {
        const id = checkbox.id || checkbox.getAttribute('data-id');
        const savedState = localStorage.getItem(id);
        if (savedState !== null) {
            checkbox.checked = savedState === 'true';
        }
    }

    // Add event listeners to all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        // Generate a unique ID for each checkbox if it doesn't have one
        if (!checkbox.id) {
            checkbox.setAttribute('data-id', `checkbox-${index}`);
        }
        
        // Restore saved state
        restoreCheckboxState(checkbox);
        
        // Add change event listener
        checkbox.addEventListener('change', function() {
            saveCheckboxState(this);
        });
    });
}); 