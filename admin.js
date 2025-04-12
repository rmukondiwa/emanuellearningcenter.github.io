async function fetchPendingPosts() {
    const container = document.getElementById("pending-posts-container");
    container.innerHTML = "<p>Loading pending blog posts...</p>";
  
    try {
      const response = await fetch("/api/admin/blogentries");
      const posts = await response.json();
  
      if (posts.length === 0) {
        container.innerHTML = "<p>No pending blog posts right now 🎉</p>";
        return;
      }
  
      container.innerHTML = ""; // Clear loading message
  
      posts.forEach(post => {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");
  
        postCard.innerHTML = `
          <h2>${post.title}</h2>
          ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Blog Image" />` : ""}
          <p><strong>Category:</strong> ${post.category || "Uncategorized"}</p>
          <p><strong>Author:</strong> ${post.author}</p>
          <p>${post.content.substring(0, 200)}...</p>
          <div class="buttons">
            <button class="approve-btn" data-id="${post._id}">Approve ✅</button>
            <button class="deny-btn" data-id="${post._id}">Deny ❌</button>
          </div>
        `;
  
        container.appendChild(postCard);
      });
  
      // Attach event listeners after rendering
      document.querySelectorAll(".approve-btn").forEach(button => {
        button.addEventListener("click", async function () {
          const postId = this.getAttribute("data-id");
          await handleApprove(postId);
        });
      });
  
      document.querySelectorAll(".deny-btn").forEach(button => {
        button.addEventListener("click", async function () {
          const postId = this.getAttribute("data-id");
          await handleDeny(postId);
        });
      });
  
    } catch (error) {
      console.error("Error fetching pending posts:", error);
      container.innerHTML = "<p>Error loading posts. Check console.</p>";
    }
  }
  
  
  async function handleApprove(id) {
    try {
      const res = await fetch(`/api/admin/approve/${id}`, {
        method: "POST",
      });
      const result = await res.json();
      alert(result.message || "Approved!");
      fetchPendingPosts(); // Refresh list
    } catch (err) {
      console.error("Error approving post:", err);
      alert("Failed to approve post.");
    }
  }
  
  async function handleDeny(id) {
    // Ask for confirmation before deleting
    if (!confirm("Are you sure you want to deny this post?")) return;
  
    try {
      const response = await fetch(`/api/admin/deny/${id}`, {
        method: "DELETE"
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert(result.message || "Post denied.");
        fetchPendingPosts(); // Refresh the list
      } else {
        alert("Server error: " + (result.message || "Could not deny post."));
      }
    } catch (err) {
      console.error("Error denying post:", err);
      alert("Failed to deny post.");
    }
  }


  
  document.addEventListener("DOMContentLoaded", fetchPendingPosts);
  