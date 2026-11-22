import { recoverPassword } from "@netlify/identity";

const form = document.querySelector("#recovery-form");
const status = document.querySelector("#recovery-status");
const token = new URLSearchParams(window.location.hash.slice(1)).get("recovery_token");

if (token) {
  window.history.replaceState(null, "", window.location.pathname);
  status.textContent = "";
  form.hidden = false;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const inputs = new FormData(form);
    const password = inputs.get("password");
    if (password !== inputs.get("confirmation")) {
      status.textContent = "The passwords do not match.";
      return;
    }

    const button = form.querySelector("button");
    button.disabled = true;
    status.textContent = "Updating your password…";
    try {
      await recoverPassword(token, password);
      form.reset();
      form.hidden = true;
      status.textContent = "Your password has been updated. Return to the CMS to sign in.";
    } catch {
      button.disabled = false;
      status.textContent = "Could not update your password. If the link has expired or has already been used, request a new one from the CMS sign-in page.";
    }
  });
} else {
  status.textContent = "Open the link in your password recovery email. You can request a new link from the CMS sign-in page.";
}
