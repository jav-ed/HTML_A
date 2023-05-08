
// see: https://popper.js.org/docs/v2/tutorial/

/* ========================================================================== */
/* ============================ show_Tooltip_Pop ============================ */
/* ========================================================================== */
function show_Tooltip_Pop() {
  // Make the tooltip visible
  tooltip.setAttribute('data-show', '');

  // Enable the event listeners
  popperInstance.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: true },
    ],
  }));

  // Update its position
  popperInstance.update();
}

/* ========================================================================== */
/* ============================ hide_Tooltip_Pop ============================ */
/* ========================================================================== */
function hide_Tooltip_Pop() {
  // Hide the tooltip
  tooltip.removeAttribute('data-show');

  // Disable the event listeners
  popperInstance.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: false },
    ],
  }));
}


function run_Pop(popcorn){
  const showEvents_Tooltip_Pop = ['mouseenter', 'focus'];
  const hideEvents_Tooltip_Pop = ['mouseleave', 'blur'];

  // make sure that the tooltips are displayed and hidden when mouseenter and mouseleave
  showEvents_Tooltip_Pop.forEach((event) => {
    popcorn.addEventListener(event, show_Tooltip_Pop);
  });

  hideEvents_Tooltip_Pop.forEach((event) => {
    popcorn.addEventListener(event, hide_Tooltip_Pop);
  });

}