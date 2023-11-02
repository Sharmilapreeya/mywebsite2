// about me function

document.getElementById("read-more-button").addEventListener("click", function() {
    var moreContent = document.querySelector(".read-more-content");
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        this.innerHTML = "Read Less";
    } else {
        moreContent.style.display = "none";
        this.innerHTML = "Read More";
    }
});

// skills function

document.getElementById("skills1-more-button").addEventListener("click", function() {
    var moreContent = document.querySelector(".skills1-more-content");
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        this.innerHTML = "Read Less";
    } else {
        moreContent.style.display = "none";
        this.innerHTML = "Read More";
    }
});

document.getElementById("skills2-more-button").addEventListener("click", function() {
    var moreContent = document.querySelector(".skills2-more-content");
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        this.innerHTML = "Read Less";
    } else {
        moreContent.style.display = "none";
        this.innerHTML = "Read More";
    }
});

document.getElementById("skills3-more-button").addEventListener("click", function() {
    var moreContent = document.querySelector(".skills3-more-content");
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        this.innerHTML = "Read Less";
    } else {
        moreContent.style.display = "none";
        this.innerHTML = "Read More";
    }
});