function toggleSolution(question_name) {
    var x = document.getElementById("solution-"+question_name);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }