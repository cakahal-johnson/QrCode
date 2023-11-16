function generateQRCode() {
    // Get student name and laptop tag from input fields
    const studentName = document.getElementById('studentName').value;
    const studentClass = document.getElementById('studentClass').value;
    const studentSet = document.getElementById('studentSet').value;
    const laptopTag = document.getElementById('laptopTag').value;

    // Combine student name and laptop tag to create a unique identifier
    const data = `${studentName} - ${studentClass} ${studentSet} - ${laptopTag}`;

    // Create QR Code
    const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: data,
        width: 200,
        height: 200
    });

    const users_name = document.getElementById('users_name')
    const users_class = document.getElementById('users_class')
    const users_set = document.getElementById('users_set')
    const users_tag = document.getElementById('users_tag')
    users_name.innerHTML = studentName;
    users_class.innerHTML = studentClass;
    users_set.innerHTML = studentSet;
    users_tag.innerHTML = laptopTag;
    



// const userList = document.querySelector('#users')

// const li = document.createElement('li');
// li.appendChild(document.createTextNode(`${studentName} ${studentClass} ${studentSet}  ${laptopTag}`));

// userList.appendChild(li);

// // clear fields
// studentName.value = '';
// studentClass.value = '';
// studentSet.value = '';
// laptopTag.value = '';

// console.log(li)

}