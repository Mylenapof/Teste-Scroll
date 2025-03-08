
  document.getElementById("pageSelector").addEventListener("change", function() {
    let selectedPage = this.value; 
    if (selectedPage) { 
        window.location.href = selectedPage;
    }
});