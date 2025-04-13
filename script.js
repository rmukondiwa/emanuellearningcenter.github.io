let approvedPostsGlobal = [];
document.addEventListener('DOMContentLoaded', function () {
    const languageToggle = document.getElementById('language-toggle');
    const translations = {
        en: {
            'Home': 'Home',
            'Volunteer': 'Volunteer',
            'Tutoring': 'Tutoring',
            'Explore Tutoring Services': 'Explore Tutoring Services',
            'Our Mission': 'Our Mission',
            'Our Location': 'Our Location',
            'Testimonies from Our Parents!': 'Testimonies from Our Parents!',
            'Sign Your Child Up!': 'Sign Your Child Up!',
            'Empowering Your Child\'s Journey to Academic Success': 'Empowering Your Child\'s Journey to Academic Success',
            'About Us': 'About Us',
            'The tutoring program at Iglesia Emanuel began in 2018. Realizing that their students were falling behind in the school system, parents were seeking additional support and encouragement for their children. Their academic needs increased even more during the pandemic, as school closures disproportionately affected Latinx and other minority students.':
                'The tutoring program at Iglesia Emanuel began in 2018. Realizing that their students were falling behind in the school system, parents were seeking additional support and encouragement for their children. Their academic needs increased even more during the pandemic, as school closures disproportionately affected Latinx and other minority students.',
            'The Emanuel Learning Center has partnered with Duke Service Learning, various organizations at Duke, as well as local faith communities, to encourage volunteers to join the tutoring program. The dynamic between tutors and students brings much excitement to the program, and together, they create an effective learning environment that is joyful, flexible, and tailored to each student’s individual needs.':
                'The Emanuel Learning Center has partnered with Duke Service Learning, various organizations at Duke, as well as local faith communities, to encourage volunteers to join the tutoring program. The dynamic between tutors and students brings much excitement to the program, and together, they create an effective learning environment that is joyful, flexible, and tailored to each student’s individual needs.',
            '"Joining the Emanuel Learning Center has been a game-changer for my daughter. She\'s not only catching up academically but also developing a genuine love for learning. The staff\'s dedication is remarkable. Highly recommend!"':
                '"Joining the Emanuel Learning Center has been a game-changer for my daughter. She\'s not only catching up academically but also developing a genuine love for learning. The staff\'s dedication is remarkable. Highly recommend!"',
            '"Ever since my child joined the Emanuel Learning Center, her confidence and grades have soared. The tutors are incredible, making learning fun and impactful. A true blessing for our family!"':
                '"Ever since my child joined the Emanuel Learning Center, her confidence and grades have soared. The tutors are incredible, making learning fun and impactful. A true blessing for our family!"',
            '"The difference in my son’s attitude towards school since starting at Emanuel Learning Center is night and day. He\'s more engaged, enthusiastic, and his academic performance has dramatically improved. We\'re beyond thankful!"':
                '"The difference in my son’s attitude towards school since starting at Emanuel Learning Center is night and day. He\'s more engaged, enthusiastic, and his academic performance has dramatically improved. We\'re beyond thankful!"',
            'Tutoring Services': 'Tutoring Services',
            'If your child would like to be part of the Emanuel Learning Center, we would love to have them! We welcome students who are in kindergarten-12th grade. Students may come on Tuesdays or Thursdays, or preferably both days. Every student will be paired with a tutor. Tutors are volunteers from the community. Some are college students, some are teachers at local schools, and some come from other professions. All of them are excited about working with students and helping them learn!':
                'If your child would like to be part of the Emanuel Learning Center, we would love to have them! We welcome students who are in kindergarten-12th grade. Students may come on Tuesdays or Thursdays, or preferably both days. Every student will be paired with a tutor. Tutors are volunteers from the community. Some are college students, some are teachers at local schools, and some come from other professions. All of them are excited about working with students and helping them learn!',
            'We ask that all students who come are able to make a consistent commitment to the program and attend regularly. Because our tutors are volunteers, we want to make sure they can depend on their student coming. We ask the same commitment of our tutors. The relationship between the student and the tutor is at the heart of the program, so we ask that everyone be present as much as possible!':
                'We ask that all students who come are able to make a consistent commitment to the program and attend regularly. Because our tutors are volunteers, we want to make sure they can depend on their student coming. We ask the same commitment of our tutors. The relationship between the student and the tutor is at the heart of the program, so we ask that everyone be present as much as possible!',
            'Students do not need to bring homework or other school supplies when they come to tutoring.':
                'Students do not need to bring homework or other school supplies when they come to tutoring.',
            'We will try to accommodate as many students as we can, but are limited by the number of tutors who are available. When you apply, we will let you know if there is a space for your child (or children), or if they are on the waitlist. We will do our very best to keep you updated and to get your child paired with a tutor as soon as we can.':
                'We will try to accommodate as many students as we can, but are limited by the number of tutors who are available. When you apply, we will let you know if there is a space for your child (or children), or if they are on the waitlist. We will do our very best to keep you updated and to get your child paired with a tutor as soon as we can.',
            'Student Application': 'Student Application',
            'Volunteer Opportunities': 'Volunteer Opportunities',
            'If you are looking for a way to connect with students and be part of a joyful learning environment, we would love to have you join us at the Emanuel Learning Center. All tutors are volunteers who come from a variety of backgrounds—many are college students, some are teachers, and others are professionals who love working with kids! Some speak Spanish fluently, while others may have no second language skills. Regardless of why they choose to tutor, all of our tutors share a vision of education that is student-centered, celebratory, and culturally responsive.':
                'If you are looking for a way to connect with students and be part of a joyful learning environment, we would love to have you join us at the Emanuel Learning Center. All tutors are volunteers who come from a variety of backgrounds—many are college students, some are teachers, and others are professionals who love working with kids! Some speak Spanish fluently, while others may have no second language skills. Regardless of why they choose to tutor, all of our tutors share a vision of education that is student-centered, celebratory, and culturally responsive.',
            'Volunteers do not need any formal teaching or tutoring experience. We will provide an orientation and basic training to help you be the best possible tutor. We meet on Tuesdays and Thursdays from 5:45-7:00, and ask that tutors choose at least one of those days to attend regularly, though some tutors come for both nights. If you cannot make a regular commitment, you are also welcome to volunteer as a substitute and work with different kids when you are able to come. Substitutes are almost always needed! All tutors are required to pass a background check.':
                'Volunteers do not need any formal teaching or tutoring experience. We will provide an orientation and basic training to help you be the best possible tutor. We meet on Tuesdays and Thursdays from 5:45-7:00, and ask that tutors choose at least one of those days to attend regularly, though some tutors come for both nights. If you cannot make a regular commitment, you are also welcome to volunteer as a substitute and work with different kids when you are able to come. Substitutes are almost always needed! All tutors are required to pass a background check.',
            'Our students range from Kindergarten through Twelfth Grade, though most are in upper elementary and early middle school. We focus primarily on reading and math. The emphasis is on skill building rather than on homework help. This approach enables tutors to work with the student to develop capacities they will use every day in school, rather than solely on the next day. It also gives tutors more flexibility and creativity as they adapt the tutoring session to the individual needs and wants of the student. We center the relationship between the tutor and student, and learn through an internet program, games, writing, and reading. We want everyone to feel energized by tutoring, and this is an environment where substantial learning is paired with a lot of fun!':
                'Our students range from Kindergarten through Twelfth Grade, though most are in upper elementary and early middle school. We focus primarily on reading and math. The emphasis is on skill building rather than on homework help. This approach enables tutors to work with the student to develop capacities they will use every day in school, rather than solely on the next day. It also gives tutors more flexibility and creativity as they adapt the tutoring session to the individual needs and wants of the student. We center the relationship between the tutor and student, and learn through an internet program, games, writing, and reading. We want everyone to feel energized by tutoring, and this is an environment where substantial learning is paired with a lot of fun!',
            'Volunteer Application': 'Volunteer Application'
        },
        es: {
            'Home': 'Inicio',
            'Volunteer': 'Voluntario',
            'Tutoring': 'Tutoría',
            'Explore Tutoring Services': 'Explora Servicios de Tutoría',
            'Our Mission': 'Nuestra Misión',
            'Our Location': 'Nuestra Ubicación',
            'Testimonies from Our Parents!': 'Testimonios de Nuestros Padres!',
            'Sign Your Child Up!': '¡Inscribe a Tu Hijo!',
            'Empowering Your Child\'s Journey to Academic Success': 'Empoderando el Viaje Académico de Su Hijo Hacia el Éxito',
            'About Us': 'Sobre Nosotros',
            'The tutoring program at Iglesia Emanuel began in 2018. Realizing that their students were falling behind in the school system, parents were seeking additional support and encouragement for their children. Their academic needs increased even more during the pandemic, as school closures disproportionately affected Latinx and other minority students.':
                'El programa de tutoría en la Iglesia Emanuel comenzó en 2018. Al darse cuenta de que sus estudiantes se estaban quedando atrás en el sistema escolar, los padres buscaron apoyo y aliento adicional para sus hijos. Sus necesidades académicas aumentaron aún más durante la pandemia, ya que el cierre de escuelas afectó desproporcionadamente a los estudiantes latinos y de otras minorías.',
            'The Emanuel Learning Center has partnered with Duke Service Learning, various organizations at Duke, as well as local faith communities, to encourage volunteers to join the tutoring program. The dynamic between tutors and students brings much excitement to the program, and together, they create an effective learning environment that is joyful, flexible, and tailored to each student’s individual needs.':
                'El Centro de Aprendizaje Emanuel se ha asociado con Duke Service Learning, varias organizaciones en Duke, así como con comunidades de fe locales, para fomentar la participación de voluntarios en el programa de tutoría. La dinámica entre tutores y estudiantes aporta mucha emoción al programa, y juntos crean un ambiente de aprendizaje efectivo que es alegre, flexible y adaptado a las necesidades individuales de cada estudiante.',
            '"Joining the Emanuel Learning Center has been a game-changer for my daughter. She\'s not only catching up academically but also developing a genuine love for learning. The staff\'s dedication is remarkable. Highly recommend!"':
                '"Unirse al Centro de Aprendizaje Emanuel ha sido un cambio radical para mi hija. No solo está poniéndose al día académicamente, sino que también está desarrollando un genuino amor por el aprendizaje. La dedicación del personal es notable. ¡Altamente recomendado!"',
            '"Ever since my child joined the Emanuel Learning Center, her confidence and grades have soared. The tutors are incredible, making learning fun and impactful. A true blessing for our family!"':
                '"Desde que mi hija se unió al Centro de Aprendizaje Emanuel, su confianza y calificaciones han aumentado. Los tutores son increíbles, hacen que el aprendizaje sea divertido y significativo. ¡Una verdadera bendición para nuestra familia!"',
            '"The difference in my son’s attitude towards school since starting at Emanuel Learning Center is night and day. He\'s more engaged, enthusiastic, and his academic performance has dramatically improved. We\'re beyond thankful!"':
                '"La diferencia en la actitud de mi hijo hacia la escuela desde que comenzó en el Centro de Aprendizaje Emanuel es de día y noche. Está más comprometido, entusiasta, y su rendimiento académico ha mejorado drásticamente. ¡Estamos más que agradecidos!"',
            'Tutoring Services': 'Servicios de Tutoría',
            'If your child would like to be part of the Emanuel Learning Center, we would love to have them! We welcome students who are in kindergarten-12th grade. Students may come on Tuesdays or Thursdays, or preferably both days. Every student will be paired with a tutor. Tutors are volunteers from the community. Some are college students, some are teachers at local schools, and some come from other professions. All of them are excited about working with students and helping them learn!':
                'Si su hijo desea formar parte del Centro de Aprendizaje Emanuel, ¡nos encantaría tenerlo! Damos la bienvenida a estudiantes que están en kínder a 12º grado. Los estudiantes pueden venir los martes o jueves, o preferiblemente ambos días. Cada estudiante será emparejado con un tutor. Los tutores son voluntarios de la comunidad. Algunos son estudiantes universitarios, algunos son maestros en escuelas locales, y otros provienen de otras profesiones. ¡Todos están entusiasmados por trabajar con los estudiantes y ayudarles a aprender!',
            'We ask that all students who come are able to make a consistent commitment to the program and attend regularly. Because our tutors are volunteers, we want to make sure they can depend on their student coming. We ask the same commitment of our tutors. The relationship between the student and the tutor is at the heart of the program, so we ask that everyone be present as much as possible!':
                'Pedimos que todos los estudiantes que asistan puedan hacer un compromiso consistente con el programa y asistir regularmente. Dado que nuestros tutores son voluntarios, queremos asegurarnos de que puedan contar con la asistencia de su estudiante. Pedimos el mismo compromiso a nuestros tutores. La relación entre el estudiante y el tutor está en el corazón del programa, ¡así que pedimos que todos estén presentes tanto como sea posible!',
            'Students do not need to bring homework or other school supplies when they come to tutoring.':
                'Los estudiantes no necesitan traer tareas u otros útiles escolares cuando vengan a la tutoría.',
            'We will try to accommodate as many students as we can, but are limited by the number of tutors who are available. When you apply, we will let you know if there is a space for your child (or children), or if they are on the waitlist. We will do our very best to keep you updated and to get your child paired with a tutor as soon as we can.':
                'Intentaremos acomodar a tantos estudiantes como podamos, pero estamos limitados por la cantidad de tutores disponibles. Cuando se inscriba, le informaremos si hay espacio para su hijo (o hijos), o si están en la lista de espera. Haremos nuestro mejor esfuerzo para mantenerlo informado y para que su hijo sea emparejado con un tutor lo antes posible.',
            'Student Application': 'Solicitud de Estudiante',
            'Volunteer Opportunities': 'Oportunidades de Voluntariado',
            'If you are looking for a way to connect with students and be part of a joyful learning environment, we would love to have you join us at the Emanuel Learning Center. All tutors are volunteers who come from a variety of backgrounds—many are college students, some are teachers, and others are professionals who love working with kids! Some speak Spanish fluently, while others may have no second language skills. Regardless of why they choose to tutor, all of our tutors share a vision of education that is student-centered, celebratory, and culturally responsive.':
                'Si está buscando una forma de conectarse con los estudiantes y ser parte de un ambiente de aprendizaje alegre, nos encantaría que se uniera a nosotros en el Centro de Aprendizaje Emanuel. Todos los tutores son voluntarios que provienen de una variedad de orígenes; muchos son estudiantes universitarios, algunos son maestros y otros son profesionales que aman trabajar con niños. Algunos hablan español con fluidez, mientras que otros pueden no tener habilidades en un segundo idioma. Independientemente de por qué eligen ser tutores, todos nuestros tutores comparten una visión de la educación centrada en el estudiante, celebratoria y culturalmente receptiva.',
            'Volunteers do not need any formal teaching or tutoring experience. We will provide an orientation and basic training to help you be the best possible tutor. We meet on Tuesdays and Thursdays from 5:45-7:00, and ask that tutors choose at least one of those days to attend regularly, though some tutors come for both nights. If you cannot make a regular commitment, you are also welcome to volunteer as a substitute and work with different kids when you are able to come. Substitutes are almost always needed! All tutors are required to pass a background check.':
                'Los voluntarios no necesitan ninguna experiencia formal en enseñanza o tutoría. Proporcionaremos una orientación y una capacitación básica para ayudarlo a ser el mejor tutor posible. Nos reunimos los martes y jueves de 5:45 a 7:00, y pedimos que los tutores elijan al menos uno de esos días para asistir regularmente, aunque algunos tutores asisten ambas noches. Si no puede hacer un compromiso regular, también es bienvenido a ser voluntario como sustituto y trabajar con diferentes niños cuando pueda venir. ¡Casi siempre se necesitan sustitutos! Todos los tutores deben pasar una verificación de antecedentes.',
            'Our students range from Kindergarten through Twelfth Grade, though most are in upper elementary and early middle school. We focus primarily on reading and math. The emphasis is on skill building rather than on homework help. This approach enables tutors to work with the student to develop capacities they will use every day in school, rather than solely on the next day. It also gives tutors more flexibility and creativity as they adapt the tutoring session to the individual needs and wants of the student. We center the relationship between the tutor and student, and learn through an internet program, games, writing, and reading. We want everyone to feel energized by tutoring, and this is an environment where substantial learning is paired with a lot of fun!':
                'Nuestros estudiantes van desde kínder hasta el duodécimo grado, aunque la mayoría están en los grados superiores de la escuela primaria y en los primeros años de la escuela secundaria. Nos enfocamos principalmente en la lectura y las matemáticas. El énfasis está en el desarrollo de habilidades en lugar de la ayuda con la tarea. Este enfoque permite a los tutores trabajar con el estudiante para desarrollar capacidades que utilizarán todos los días en la escuela, en lugar de solo para el día siguiente. También brinda a los tutores más flexibilidad y creatividad al adaptar la sesión de tutoría a las necesidades y deseos individuales del estudiante. Centramos la relación entre el tutor y el estudiante, y aprendemos a través de un programa en internet, juegos, escritura y lectura. ¡Queremos que todos se sientan energizados por la tutoría, y este es un entorno donde el aprendizaje sustancial se combina con mucha diversión!',
            'Volunteer Application': 'Solicitud de Voluntario'
        }
    };

    let currentLanguage = 'en';

    function translatePage(language) {
        document.querySelectorAll('nav a, .hero-button, h1, h2, p').forEach(element => {
            const originalText = element.getAttribute('data-original-text');
            const currentText = element.textContent.trim();
            const translation = translations[language][originalText || currentText];

            if (!originalText) {
                element.setAttribute('data-original-text', currentText);
            }

            if (translation) {
                element.textContent = translation;
            }
        });
    }

    languageToggle.addEventListener('click', function () {
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
        translatePage(currentLanguage);
        languageToggle.textContent = currentLanguage === 'en' ? 'Español' : 'English';
    });

    console.log("✅ DOM fully loaded");
    fetchBlogPosts();

    // Initial page load translation based on current language
    translatePage(currentLanguage);
});


document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (href === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        }
    });
});


document.querySelector(".blog-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", document.getElementById("blog-title").value);
    formData.append("author", document.getElementById("author-name").value);
    formData.append("category", document.getElementById("category").value);
    formData.append("content", document.getElementById("content").value);
    formData.append("image", document.getElementById("image").files[0]); // ✅ get file

    const response = await fetch("/api/blogentries", {
        method: "POST",
        body: formData // ✅ no need for headers
    });

    const result = await response.json();
    alert(result.message);
    window.location.href = "blogposts.html";
});
function showModal(post) {
    const modal = document.getElementById("blog-modal");
    document.getElementById("modal-image").src = post.imageUrl || "";
    document.getElementById("modal-title").textContent = post.title;
    document.getElementById("modal-author").textContent = `By ${post.author}`;
    document.getElementById("modal-content").textContent = post.content;

    modal.style.display = "flex";

    // Close button handler
    document.querySelector(".close-btn").onclick = function () {
        modal.style.display = "none";
    };

    // Close if clicking outside modal content
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

async function fetchBlogPosts() {
    const response = await fetch("/api/blogentries");
    const posts = await response.json();
    console.log("Fetched Blog Posts:", posts);

    // Save globally
    approvedPostsGlobal = posts.filter(post => post.approved === true);
    
    renderBlogPosts(approvedPostsGlobal);
    document.querySelectorAll(".category-tag").forEach(tag => {
        tag.addEventListener("click", function () {
            const selectedCategory = this.getAttribute("data-category");
            const sortedPosts = [...approvedPostsGlobal].sort((a, b) => {
                if (a.category === selectedCategory && b.category !== selectedCategory) return -1;
                if (a.category !== selectedCategory && b.category === selectedCategory) return 1;
                return 0;
            });
            renderBlogPosts(sortedPosts);
        });
    });
}

function renderBlogPosts(posts) {
    const blogContainer = document.querySelector(".blog-grid");
    blogContainer.innerHTML = "";

    posts.forEach(post => {
        const postElement = document.createElement("article");
        postElement.classList.add("blog-card");
        postElement.innerHTML = `
            <div class="blog-content">
                ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Blog image" class="blog-image">` : ""}
                <span class="category-tag tag-${post.category.toLowerCase()} capitalize">${post.category}</span>
                <h3 class="blog-title">${post.title}</h3>
                <div class="blog-meta">
                    <span>${new Date(post.createdAt).toLocaleDateString()}</span>
                    <span>by ${post.author}</span>
                </div>
                <p class="blog-excerpt">${post.content.substring(0, 150)}...</p>
                <a href="#" class="read-more">Continue Reading →</a>
            </div>
        `;
        blogContainer.appendChild(postElement);

        postElement.querySelector(".read-more").addEventListener("click", function (e) {
            e.preventDefault();
            showModal(post);
        });
    });

    if (posts.length === 0) {
        blogContainer.innerHTML = "<p>No blog posts available yet. Check back soon!</p>";
    }
}

document.addEventListener("DOMContentLoaded", fetchBlogPosts);


document.getElementById("image").addEventListener("change", function () {
    const preview = document.getElementById("image-preview");
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }

});





