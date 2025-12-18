
<div class="floating-buttons">
    <a href="https://instagram.com/nehuenfit" target="_blank" class="float-btn instagram">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://wa.me/5491122513909?text=Hola%20Nehuen,%20quiero%20consultar%20por%20mi%20rutina" target="_blank" class="float-btn whatsapp">
        <i class="fab fa-whatsapp"></i>
    </a>
</div>

<section id="formulario" class="form-section">
    <div class="container">
        <h2>Solicitá tu rutina personalizada</h2>
        <p>Completá tus datos y me pondré en contacto con vos.</p>
        
        <form action="https://formspree.io/f/nehuen.ezequiel@gmail.com" method="POST" class="contact-form">
            <input type="text" name="nombre" placeholder="Nombre completo" required>
            <input type="email" name="email" placeholder="Tu correo electrónico" required>
            <select name="objetivo">
                <option value="perder-peso">Perder peso / Definición</option>
                <option value="ganar-musculo">Ganar masa muscular</option>
                <option value="salud">Salud y bienestar general</option>
            </select>
            <textarea name="mensaje" placeholder="Contame un poco sobre tu nivel actual y disponibilidad..."></textarea>
            <button type="submit" class="btn-main">ENVIAR SOLICITUD</button>
        </form>
    </div>
</section>

<footer class="footer">
    <div class="container">
        <h2>Empezá hoy</h2>
        <p>Completá el formulario y empezá a entrenar con una rutina pensada para vos.</p>
        <a href="#formulario" class="btn-main">QUIERO MI RUTINA</a>
        <p class="legal">© Nehuen Fit · Todos los derechos reservados</p>
    </div>
</footer>

      /* FONDO Y GENERAL */
body { 
    background-color: #0f172a; 
    color: #e5e7eb; 
    font-family: 'Inter', sans-serif;
}

/* BOTONES FLOTANTES */
.floating-buttons {
    position: fixed;
    bottom: 25px;
    right: 25px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 1000;
}
.float-btn {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: white;
    text-decoration: none;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    transition: transform 0.3s ease;
}
.float-btn:hover { transform: scale(1.1); }
.whatsapp { background-color: #22c55e; } /* El verde que pediste */
.instagram { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }

/* FORMULARIO */
.form-section { background-color: #1e293b; border-top: 1px solid #334155; }
.contact-form {
    max-width: 450px;
    margin: 40px auto 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.contact-form input, .contact-form select, .contact-form textarea {
    padding: 14px;
    background-color: #0f172a;
    border: 1px solid #334155;
    border-radius: 8px;
    color: #ffffff;
    font-size: 16px;
}
.contact-form input:focus { outline: 2px solid #22c55e; }

      
