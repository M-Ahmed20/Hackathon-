let signupPage = () => {
    document.getElementById("exampleModal").innerHTML = `<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"
                style="margin-left: auto; font-family: 'Abril Fatface', cursive; letter-spacing: 1px; font-size: 20px;">
                Sign Up
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
                <div class="mb-2">
                    <label for="exampleInputName1" class="form-label" style="font-size: 17px;">Name:</label>
                    <input type="name" id="name" class="form-control" required>
                    <div id="three" style="color: red;"></div>
                </div>
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label" style="font-size: 17px;">Email
                        address:</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    <div id="one" style="color: red;"></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"
                        style="font-size: 17px;">Password:</label>
                    <input type="password" id="password" class="form-control" required>
                    <div id="two" style="color: red;"></div>
                </div>
                <button
                    style="padding: 0; border: none; color: rgb(0, 126, 204); background-color: white; text-decoration: underline;"
                    onclick="loginPage()" id="log">Login?</button>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" id="signup" onclick="signup()" class="btn btn-outline-success">Sign Up</button>
        </div>
    </div>
</div>`;
}

let loginPage = () => {
    document.getElementById("exampleModal").innerHTML = `<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"
                style="margin-left: auto; font-family: 'Abril Fatface', cursive; letter-spacing: 1px; font-size: 20px;">
                Login
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label" style="font-size: 17px;">Email
                    address:</label>
                <input type="email" id="email2" class="form-control" aria-describedby="emailHelp" required>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <div id="one" style="color: red;"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" style="font-size: 17px;">Password:</label>
                <input type="password" id="password2" class="form-control" required>
                <div id="two" style="color: red;"></div>
            </div>
            <button
                style="padding: 0; border: none; color: rgb(0, 126, 204); background-color: white; text-decoration: underline;"
                onclick="signupPage()">Sign
                Up?</button>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="close" data-bs-dismiss="modal">Close</button>
            <button type="submit" onclick="login()" class="btn btn-outline-success">Login</button>
        </div>
    </div>
</div>`
}


let adminSignupPage = () => {
    document.getElementById("exampleModal").innerHTML = `<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"
                style="margin-left: auto; font-family: 'Abril Fatface', cursive; letter-spacing: 1px; font-size: 20px;">
                Admin Pannel
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="mb-2">
                <label for="exampleInputName1" class="form-label" style="font-size: 17px;">Name:</label>
                <input type="name" id="adminName" class="form-control" required>
                <div id="three" style="color: red;"></div>
           </div>
            <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label" style="font-size: 17px;">Email
                    address:</label>
                <input type="email" id="sendAdminEmail" class="form-control" aria-describedby="emailHelp" required>
                <div id="two" style="color: red;"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" style="font-size: 17px;">key:</label>
                <input type="password" id="sendAdminKey" class="form-control" required>
                <div id="one" style="color: red;"></div>
            </div>
            <button
                style="padding: 0; border: none; color: rgb(0, 126, 204); background-color: white; text-decoration: underline;"
                onclick="adminLogin()" id="adLog">Login?</button>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="close" data-bs-dismiss="modal">Close</button>
            <button type="submit" onclick="AdminSignup()" class="btn btn-outline-success">SignUp</button>
        </div>
    </div>
</div>`
}

let signup = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (name == "") {
        document.getElementById("three").innerHTML = "Please enter your name";
        return false;
    }
    else {
        document.getElementById("three").innerHTML = "";
    }
    if (email == "") {
        document.getElementById("one").innerHTML = "Please fill this feild";
        return false;
    }
    else if (email.indexOf("@") == -1 || email.charAt(email.length - 1) == "@") {
        document.getElementById("one").innerHTML = "Please enter the correct email format";
        return false;
    }
    else {
        document.getElementById("one").innerHTML = "";
    }
    if (password.length <= 7) {
        document.getElementById("two").innerHTML = "Password must be 8-digits long";
        return false;
    }
    else {
        document.getElementById("two").innerHTML = "";
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Account created successfully");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("log").click();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            return false;
        });
}

let login = () => {
    var email = document.getElementById("email2").value;
    var password = document.getElementById("password2").value;
    if (email == "") {
        document.getElementById("one").innerHTML = "Please fill this feild";
        return false;
    }
    else if (email.indexOf("@") == -1 || email.charAt(email.length - 1) == "@") {
        document.getElementById("one").innerHTML = "Please enter the correct email format";
        return false;
    }
    else {
        document.getElementById("one").innerHTML = "";
    }
    if (password == "") {
        document.getElementById("two").innerHTML = "Please fill this feild";
        return false;
    }
    else {
        document.getElementById("two").innerHTML = "";
    }
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById("close").click();
            localStorage.setItem("userEmail", document.getElementById("email2").value);
            window.location.replace("userpage.html");
        })
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage);
            return false;
        });
}


let Adminlogin = () => {
    var Adminemail = document.getElementById("adminEmail").value;
    var Adminkey = document.getElementById("adminKey").value;
    if (Adminemail == "") {
        document.getElementById("one").innerHTML = "Please fill this feild";
        return false;
    }
    else if (Adminemail.indexOf("@") == -1 || Adminemail.charAt(Adminemail.length - 1) == "@") {
        document.getElementById("one").innerHTML = "Please enter the correct email format";
        return false;
    }
    else {
        document.getElementById("one").innerHTML = "";
    }
    if (Adminkey == "") {
        document.getElementById("two").innerHTML = "Please fill this feild";
        return false;
    }
    else {
        document.getElementById("two").innerHTML = "";
    }
    firebase.auth().signInWithEmailAndPassword(Adminemail, Adminkey)
        .then((userCredential) => {
            document.getElementById("close").click();
            localStorage.setItem("adminEmail", document.getElementById("adminEmail").value);
            window.location.replace("addDishes.html");
        })
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage);
            return false;
        });
}

let AdminSignup = () => {
    var name = document.getElementById("adminName").value;
    var email = document.getElementById("sendAdminEmail").value;
    var password = document.getElementById("sendAdminKey").value;
    if (name == "") {
        document.getElementById("three").innerHTML = "Please enter your name";
        return false;
    }
    else {
        document.getElementById("three").innerHTML = "";
    }
    if (email == "") {
        document.getElementById("two").innerHTML = "Please fill this feild";
        return false;
    }
    else if (email.indexOf("@") == -1 || email.charAt(email.length - 1) == "@") {
        document.getElementById("two").innerHTML = "Please enter the correct email format";
        return false;
    }
    else {
        document.getElementById("two").innerHTML = "";
    }
    if (password.length <= 7) {
        document.getElementById("one").innerHTML = "Password must be 8-digits long";
        return false;
    }
    else {
        document.getElementById("one").innerHTML = "";
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Account created successfully");
            document.getElementById("adminName").value = "";
            document.getElementById("sendAdminEmail").value = "";
            document.getElementById("sendAdminKey").value = "";
            document.getElementById("adLog").click();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            return false;
        });
}

let signout = () => {
    window.location.replace("index.html");
}

let saveAdminInfo = () => {
    var adminemail = document.getElementById("adminNewEmail").value;
    var newPass = document.getElementById("adminNewPass").value;
    var confirmPass = document.getElementById("confirmNewPass").value;
    if (adminemail == "") {
        document.getElementById("one").innerHTML = "Please enter this feild";
        return false;
    }
    else if (adminemail.indexOf("@") == -1 || adminemail.charAt(adminemail.length - 1) == "@") {
        document.getElementById("one").innerHTML = "Please enter the correct email format";
        return false;
    }
    else {
        document.getElementById("one").innerHTML = "";
    }
    if (newPass == "") {
        document.getElementById("two").innerHTML = "Please enter this feild";
        return false;
    }
    else {
        document.getElementById("two").innerHTML = "";
    }
    if (confirmPass == "") {
        document.getElementById("three").innerHTML = "Please enter this feild";
        return false;
    }
    else if (newPass != confirmPass) {
        document.getElementById("three").innerHTML = "New Key does not match.";
        return false;
    }
    else {
        document.getElementById("three").innerHTML = "";
    }

}

let addDish = () => {
    let itemName = document.getElementById("itemName").value;
    let category = document.getElementById("category").value;
    let itemPrice = document.getElementById("price").value;
    let deliveryFee = document.getElementById("deliveryFee").value;
    let itempic = document.getElementById("itemPic").src;
    let itemPic = document.getElementById("itemPic").files[0]
    let storage = firebase.storage().ref('Item pic').child(itemName)
    storage.put(itemPic)
    .then((succ)=>{
        console.log('success=>',succ)
    })
    .catch((err)=>{
        console.log('error=>',err)
    })
    let itemDetails = {
        itemName: itemName,
        category: category,
        itemPrice: itemPrice,
        deliveryFee: deliveryFee,
        itemPic: itemPic
    }
    firebase.database().ref("resturants").child("Foods Inn").push(itemDetails);
}

let done = () => {
    firebase.database().ref("resturants").child("Foods Inn").on("child_added", function (data) {
        var a = data.val();

        document.getElementById("display").innerHTML += `<div class="card" style="width: 18rem; margin: 30px">
    <img src="${a.itempic}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">Item: ${a.itemName}</h5>
      <p class="card-text">Price: ${a.itemPrice}</p>
      <p class="card-text">Delivery fee: ${a.deliveryFee}</p><hr>
      <a href="" class="btn btn-primary">Order Now :)</a>
    </div>
  </div>`
    })
    alert('Thanks for Ordering')
}