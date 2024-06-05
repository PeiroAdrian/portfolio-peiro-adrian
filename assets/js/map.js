document.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        document.querySelector('#load-iframe-map').innerHTML = `
             <iframe class="contact__iframe" frameborder="no" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223152.61530549792!2d-111.1531291601846!3d29.083247602359997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce84687adfaee5%3A0xb33d5395e9887ff9!2sHermosillo%2C%20Son.!5e0!3m2!1ses-419!2smx!4v1717553251360!5m2!1ses-419!2smx"></iframe>
        `;
    
    }, 500);

})