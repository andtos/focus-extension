function hideHTML() {
    const body = document.body;
    body.style.display = 'none';
  
    setTimeout(() => {
      body.style.display = 'block';
    }, 5000); // 5 seconds
  }
  
  hideHTML();