document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const studentName = document.getElementById('studentName').value;
    const attendanceDate = document.getElementById('attendanceDate').value;
    const attendanceStatus = document.getElementById('attendanceStatus').value;

    // Create a new row in the attendance table
    const tableBody = document.getElementById('attendanceTable').querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${studentName}</td>
        <td>${attendanceDate}</td>
        <td>${attendanceStatus}</td>
    `;

    tableBody.appendChild(newRow);

    // Clear the form inputs
    document.getElementById('attendanceForm').reset();
});
