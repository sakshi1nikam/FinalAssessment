function onFormSubmit()
{
    validatedata();
}

function validatedata()
{
    var dropdownValue = document.getElementById("dropdown").value;
    if (dropdownValue === "") {
        alert("Please select an option before submitting.");
        return false; // Prevent form submission
    }
}