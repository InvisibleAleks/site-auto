document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.image-container').forEach(container => {
      let images = container.querySelectorAll('img');
      let index = 0;

      if (images.length > 1) {
          setInterval(() => {
              images[index].classList.remove('active');
              index = (index + 1) % images.length;
              images[index].classList.add('active');
          }, 2000);
      }
  });
});
