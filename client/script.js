const typeEffect = (element, text, speed) => {
    let i = 0;
    const interval = setInterval(() => {
        element.innerHTML += text[i];
        i++;
        if (i === text.length) clearInterval(interval);
    }, speed);
};
const typewriter = document.querySelector('.typewriter');
if (typewriter) {
    typeEffect(typewriter, "Hi, I'm Balasubramanian", 150);
}

const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
    });
}

//contact form

// document.getElementById('contactform').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         message: document.getElementById('message').value,
//     };

//     try{
//         const response = await fetch('http://localhost:5000/send-email', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData),
//         });

//         if(response.ok) {
//             alert("Your Message has been sent..");
//             document.getElementById('contactform').reset();
//         } else {
//             const errorData = await response.json();
//             alert("Failed to send Message..");
//         }
//     } catch (error) {
//         console.error("Server Error Occured.. Please try after sometimes...");
//         alert("Server Error Occured.. Please try after sometimes...");
//     }
// });

document.getElementById('contactform').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = '<div class="alert alert-info">Sending... ⏳</div>';

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    try {
        const response = await fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            formMessage.innerHTML = '<div class="alert alert-success">✅ Your message has been sent successfully!</div>';
            document.getElementById('contactform').reset();
        } else {
            formMessage.innerHTML = '<div class="alert alert-danger">❌ Failed to send message. Please try again.</div>';
        }
    } catch (error) {
        console.error("Server Error Occurred:", error);
        formMessage.innerHTML = '<div class="alert alert-warning">⚠️ Server Error. Please try again later.</div>';
    }
});
