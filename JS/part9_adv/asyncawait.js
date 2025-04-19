function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Ashutosh", url: "https://google.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching User Data....");
    const userData = await fetchUserData();
    console.log("User data fetched successfully");

    console.log("User Data: ", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getUserData();
