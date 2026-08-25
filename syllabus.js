<script>
function openModal() {
  document.getElementById("syllabusModal").style.display = "block";
}

function closeModal() {
  document.getElementById("syllabusModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("syllabusModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>
