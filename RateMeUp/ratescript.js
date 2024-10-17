const ratings = [
    { emoji: "😍", name: "Yesssss! Dean's List kana oy" },
    { emoji: "😊", name: "Okay ra ni #LabanPinas" },
    { emoji: "😁", name: "Muntik na molapas" },
    { emoji: "😐", name: "Naa mi Bonsai sa amo Ma'am" },
    { emoji: "😞", name: "Di madag Floorwax Ma'am? Huhu" },
];

const stars = document.querySelectorAll('.star');
const emoji = document.querySelector('.emoji');
const ratingText = document.querySelector('.rating-text');
const editRatingSection = document.getElementById('edit-rating-section');
let currentRating = 0;

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        currentRating = index + 1;
        updateRating(currentRating);
    });
});

function updateRating(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });

    const ratingIndex = rating - 1;
    emoji.textContent = ratings[ratingIndex].emoji;
    ratingText.textContent = ratings[ratingIndex].name;

    // If rating is 1, show edit action
    if (rating === 1) {
        editRatingSection.style.display = 'block';
    } else {
        editRatingSection.style.display = 'none';
    }
}

function editRating() {
    // Allow the user to click the stars again to change their rating
    alert('Please select another rating.');
    stars.forEach(star => {
        star.classList.remove('active');
    });
    emoji.textContent = "";
    ratingText.textContent = "";
    editRatingSection.style.display = 'none';
}

function exit() {
    window.location.href = '../Home/home.html';
}
