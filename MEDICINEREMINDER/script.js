// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("medicineForm");
//     const reminderList = document.getElementById("reminderList");

//     form.addEventListener("Set Reminder", function (event) {
//         event.preventDefault();
//         SetReminder();
//     });

//     function SetReminder() {
//         const medicineName = document.getElementById("medicineName").value;
//         const dosage = document.getElementById("dosage").value;
//         const time = document.getElementById("time").value;
//         const frequency = document.getElementById("frequency").value;

//         const reminder = {
//             MedicineName: medicineName,
//             dosage: dosage,
//             time: time,
//             frequency: frequency,
//         };

//         const reminderItem = document.createElement("li");
//         reminderItem.innerHTML = `<span>${medicineName} - ${dosage}</span> <span>${time} (${frequency})</span> <button class="delete-btn">Delete</button>`;
//         reminderList.appendChild(reminderItem);

//         addDeleteButtonEventListener(reminderItem);
//     }

//     function addDeleteButtonEventListener(reminderItem) {
//         const deleteButton = reminderItem.querySelector(".delete-btn");
//         deleteButton.addEventListener("click", function () {
//             reminderItem.remove();
//         });
//     }
// });
