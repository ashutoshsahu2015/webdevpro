function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment data fetched");
    }, 4000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data");
    // const postData = await fetchUserData();
    // const commentData = await fetchCommentData();

    const [postData, commentData] = await Promise.all([
      fetchUserData(),
      fetchCommentData(),
    ]);
    console.log(postData);
    console.log(commentData);
    console.log("Fetch Complete");
  } catch (error) {
    console.log("Error fetching blog data", error);
  }
}

getBlogData();
