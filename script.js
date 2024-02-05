//your JS code here. If required.

  function removeSelectedColor() {
    // Get the select element
    const colorSelect = document.getElementById('colorSelect');

    // Get the selected option
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];

    // Remove the selected option
    colorSelect.removeChild(selectedOption);
  }
