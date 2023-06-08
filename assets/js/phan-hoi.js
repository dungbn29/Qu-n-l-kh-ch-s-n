var selectedRating = 0;

function rateProduct(rating) {
    selectedRating = rating;

    var stars = document.querySelectorAll(".rating span");

    for (var i = 0; i < stars.length; i++) {
        if (i < rating) {
            stars[i].classList.add("checked");
        } else {
            stars[i].classList.remove("checked");
        }
    }
}

function submitComment() {
    var nameInput = document.getElementById("name-kh");
    var commentInput = document.getElementById("comment");

    var name = nameInput.value;
    var comment = commentInput.value;

    if (name.trim() === "" || selectedRating === 0 || comment.trim() === "") {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    var commentList = document.getElementById("comment-list");

    var li = document.createElement("li");
    li.classList.add("comment");

    var nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.textContent = name;

    var ratingElement = document.createElement("div");
    ratingElement.classList.add("rating");
    ratingElement.textContent = "Số sao: " + selectedRating;

    var commentElement = document.createElement("div");
    commentElement.textContent = comment;

    li.appendChild(nameElement);
    li.appendChild(ratingElement);
    li.appendChild(commentElement);

    commentList.appendChild(li);

    // Reset form fields
    nameInput.value = "";
    commentInput.value = "";

    // Reset rating stars
    var stars = document.querySelectorAll(".rating span");
    for (var i = 0; i < stars.length; i++) {
        stars[i].classList.remove("checked");
    }
    selectedRating = 0;
}