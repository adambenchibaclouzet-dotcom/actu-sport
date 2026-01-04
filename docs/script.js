// ========================================
// DIAPORAMA
// ========================================

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (n >= slides.length) currentSlideIndex = 0;
  if (n < 0) currentSlideIndex = slides.length - 1;
  
  slides[currentSlideIndex].classList.add('active');
  dots[currentSlideIndex].classList.add('active');
}

function changeSlide(n) {
  currentSlideIndex += n;
  showSlide(currentSlideIndex);
}

function currentSlide(n) {
  currentSlideIndex = n;
  showSlide(currentSlideIndex);
}

// Changement automatique toutes les 5 secondes
setInterval(() => {
  currentSlideIndex++;
  showSlide(currentSlideIndex);
}, 5000);

// ========================================
// SONDAGE
// ========================================

const pollVotes = {
  football: 0,
  basketball: 0,
  formule1: 0,
  volley: 0,
  nfl: 0
};

document.getElementById('pollForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const selected = document.querySelector('input[name="sport"]:checked');
  
  if (selected) {
    pollVotes[selected.value]++;
    
    const total = Object.values(pollVotes).reduce((a, b) => a + b, 0);
    
    for (let sport in pollVotes) {
      const percentage = total > 0 ? Math.round((pollVotes[sport] / total) * 100) : 0;
      document.getElementById(`${sport}-percent`).textContent = percentage + '%';
      document.getElementById(`${sport}-bar`).style.width = percentage + '%';
    }
    
    document.getElementById('pollResults').style.display = 'block';
    alert('Merci pour votre vote ! 🎉');
  } else {
    alert('Veuillez sélectionner une option');
  }
});

// ========================================
// QUIZ
// ========================================

document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const selected = document.querySelector('input[name="quiz"]:checked');
  const resultDiv = document.getElementById('quizResult');
  
  if (selected) {
    if (selected.value === 'argentine') {
      resultDiv.innerHTML = '✅ Correct ! L\'Argentine a remporté la Coupe du Monde 2022 ! 🏆';
      resultDiv.style.color = 'green';
    } else {
      resultDiv.innerHTML = '❌ Dommage ! La bonne réponse était l\'Argentine.';
      resultDiv.style.color = 'red';
    }
  } else {
    alert('Veuillez sélectionner une réponse');
  }
});