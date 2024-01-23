document.addEventListener('DOMContentLoaded', function() {
    const ratings = document.querySelectorAll('.rating');
    console.log(ratings)
    ratings.forEach(rating => {
        rating.addEventListener('click', function() {
            ratings.forEach(rating => rating.classList.remove('active'));
            rating.classList.toggle('active');
        });
    })
}); 