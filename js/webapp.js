// script.js - Complete code with 'emitter-triangle' included

// Get references to the interactive elements
const colorSelect = document.getElementById('color-select');
const hiltSelect = document.getElementById('hilt-select');
const emitterSelect = document.getElementById('emitter-select');

const blade = document.getElementById('blade');
const hilt = document.getElementById('hilt');
const emitter = document.getElementById('emitter');

// List of all possible modifier classes for easy removal
const colorClasses = ['color-blue', 'color-green', 'color-red', 'color-purple', 'color-yellow', 'color-white'];
const hiltClasses = ['hilt-standard', 'hilt-sleek', 'hilt-ornate'];
// *** This is the updated line ***
const emitterClasses = ['emitter-basic', 'emitter-angled', 'emitter-shroud', 'emitter-triangle'];

// Function to update the lightsaber's appearance
function updateLightsaber() {
    // --- Update Blade Color ---
    const selectedColor = colorSelect.value;
    // Remove existing color classes before adding the new one
    blade.classList.remove(...colorClasses);
    // Add the new class based on selection
    blade.classList.add(`color-${selectedColor}`);

    // --- Update Hilt Style ---
    const selectedHilt = hiltSelect.value;
    // Remove existing hilt classes
    hilt.classList.remove(...hiltClasses);
     // Add the new class
    hilt.classList.add(`hilt-${selectedHilt}`);

    // --- Update Emitter Style ---
    const selectedEmitter = emitterSelect.value;
    // Remove existing emitter classes (now includes 'emitter-triangle')
    emitter.classList.remove(...emitterClasses);
    // Add the new class
    emitter.classList.add(`emitter-${selectedEmitter}`);
}

// Add event listeners to the select elements
// When a selection changes, call the updateLightsaber function
colorSelect.addEventListener('change', updateLightsaber);
hiltSelect.addEventListener('change', updateLightsaber);
emitterSelect.addEventListener('change', updateLightsaber);

// Initial call to set the lightsaber based on default selections when the page loads
updateLightsaber();