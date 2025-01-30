// Inicializar popovers
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

// Inicializar toasts
const toastEl = document.getElementById('infoToast')
const toast = new bootstrap.Toast(toastEl, { autohide: false })

// Mostrar toast al hacer clic en "Més informació"
document.querySelectorAll('[data-bs-toggle="toast"]').forEach(button => {
    button.addEventListener('click', () => toast.show())
})

// Validación de formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactFormForm')
    
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        event.stopPropagation()

        form.classList.add('was-validated')
        
        if (form.checkValidity()) {
            // Enviar formulario
            alert('Formulari enviat correctament!')
            
            // Cerrar modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('contactForm'))
            modal.hide()
            
            // Resetear formulario
            form.reset()
            form.classList.remove('was-validated')
        }
    }, false)
    
    document.querySelector('[data-bs-target="#contactForm"]').addEventListener('click', function() {
        toast.classList.add('hide')
        const bsToast = bootstrap.Toast.getInstance(toast)
        bsToast.hide()
    })
})

// Handle form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('contactForm')
    // Get the modal element
    const modal = document.getElementById('contactForm')
    // Get the toast element
    const toast = document.getElementById('infoToast')

    // Handle close button click
    toast.querySelector('.btn-close').addEventListener('click', function() {
        toast.classList.add('hide')
        setTimeout(() => {
            const bsToast = bootstrap.Toast.getInstance(toast)
            bsToast.hide()
        }, 500)
    })

    // Handle the "Omplir formulari" button click
    document.querySelector('[data-bs-target="#contactForm"]').addEventListener('click', function() {
        toast.classList.add('hide')
        const bsToast = bootstrap.Toast.getInstance(toast)
        bsToast.hide()
    })

    
    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        event.stopPropagation()
        
        // Check if all required fields are filled
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const course = document.getElementById('course').value
        
        if (!name || !email || !course) {
            // If fields are empty, show validation
            form.classList.add('was-validated')
            return
        }
        // Show success message
        alert('Formulari enviat correctament!')
        
        // Close the modal
        const modal = bootstrap.Modal.getInstance(modalElement)
        modal.hide()
        
        // Reset the form
        form.classList.remove('was-validated')
        form.reset()
        
        // Optional: You could also do something with the form data here
        console.log('Form data:', {
            name,
            email,
            course,
            message: document.getElementById('message').value
        })
    })
})