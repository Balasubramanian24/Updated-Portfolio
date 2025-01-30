const typeEffect = (element, text, speed) => {
    let i = 0;
    const interval = setInterval(() => {
        element.innerHTML += text[i];
        i++;
        if (i === text.length) clearInterval(interval);
    }, speed);
};
const typewriter = document.querySelector('.typewriter');
typeEffect(typewriter, "Hi, I'm Balasubramanian", 150);

const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

//contact form

document.getElementById('contactform').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    try{
        const response = await fetch('/api/send-email', {
            method: POST,
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if(response.ok) {
            alert("Your Message has been sent..");
        } else {
            alert("Failed to send Message..");
        }
    } catch (erro) {
        console.error("Server Error Occured.. Please try after sometimes...");
    }
});