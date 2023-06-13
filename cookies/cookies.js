window.onload = function() {
    const cookieHeader = document.getElementById('cookie-header');
    cookieHeader.style.color = 'yellow';
  };

  window.onload = function() {
    const cookieList = document.getElementById('cookie-jar').getElementsByTagName('li');
    const cookieCount = cookieList.length;
    const cookieCountElement = document.getElementById('cookie-count');
    
    cookieCountElement.textContent = `There are ${cookieCount} cookie(s) in the cookie jar!`;
    cookieCountElement.style.color = '#f7f16d';
  };

  window.onload = function() {
    const cookieList = document.getElementById('cookie-jar');
    const cookieCountElement = document.getElementById('cookie-count');
    
    function removeLastCookie() {
      const lastCookie = cookieList.lastElementChild;
      
      if (lastCookie) {
        cookieList.removeChild(lastCookie);
        cookieCountElement.textContent = `There are ${cookieList.children.length} cookie(s) in the cookie jar!`;
      }
    }
    setInterval(removeLastCookie, 3000);
  };
  