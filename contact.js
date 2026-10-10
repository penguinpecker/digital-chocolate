const form = document.querySelector(".contact-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const fields = new FormData(form);
  const name = String(fields.get("name") || "").trim();
  const email = String(fields.get("email") || "").trim();
  const topic = String(fields.get("topic") || "").trim() || "Studio enquiry";
  const message = String(fields.get("message") || "").trim();
  const subject = encodeURIComponent(`Digital Chocolate — ${topic}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`,
  );

  window.location.href = `mailto:digitalchocolate@gmail.com?subject=${subject}&body=${body}`;
});
