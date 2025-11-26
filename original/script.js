const allPagesCheckbox = document.querySelector(
    '.menu-with-checkbox:first-child input[type="checkbox"]'
);

const pageCheckboxes = document.querySelectorAll(
    '.menu-with-checkbox:not(:first-child) input[type="checkbox"]'
);

allPagesCheckbox.addEventListener("change", function () {
    pageCheckboxes.forEach((checkbox) => (checkbox.checked = allPagesCheckbox.checked));
});
