function checkAttendance() {
    var employeeName = document.getElementById('employeeName').value.trim();
    var messageElement = document.getElementById('message');
    var attendanceTable = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];
    console.log(attendanceTable);

    if (employeeName === "") {
        messageElement.textContent = "Please enter employee name.";
        messageElement.style.color = "black";
        return;
    }

    var currentTime = new Date();
    var checkInTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    var status = "";
    var checkInDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
    console.log(checkInDate);
    var warningDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
    console.log(warningDate);
    if (currentTime <= checkInDate) {
        status = "Good";
        messageElement.style.color = "green";
    } else if (currentTime <= warningDate) {
        status = "Warning";
        messageElement.style.color = "orange";
    } else {
        status = "Late (Salary Deduction)";
        messageElement.style.color = "red";
    }

    messageElement.textContent = `${employeeName} checked in at ${checkInTime}. Status: ${status}`;

    const newRow = attendanceTable.insertRow();
    newRow.insertCell(0).textContent = employeeName;
    newRow.insertCell(1).textContent = checkInTime;
    newRow.insertCell(2).textContent = status;

    document.getElementById('employeeName').value = ""; // Clear the input field
}
