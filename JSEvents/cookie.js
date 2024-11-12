// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration date
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
  
  // Function to get a cookie
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null; // Return null if cookie doesn't exist
  }
  
  // Function to check if a cookie exists
  function checkCookie(name) {
    const cookie = getCookie(name);
    if (cookie) {
      console.log(`${name} cookie found: ${cookie}`);
    } else {
      console.log(`${name} cookie not found`);
    }
  }
  
  // Example usage
  setCookie("user", "JohnDoe", 7); // Set a cookie
  checkCookie("user"); // Check if the "user" cookie exists
  console.log(getCookie("user")); // Output: JohnDoe (cookie value)
  