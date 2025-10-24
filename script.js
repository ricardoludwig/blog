function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`Thanks for subscribing with ${email}! (This is a demo)`);
    e.target.reset();
}
