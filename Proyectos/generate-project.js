// Script para generar páginas de proyectos automáticamente
// Uso: node Proyectos/generate-project.js

const fs = require('fs');
const path = require('path');

// Leer el template base
const templatePath = path.join(__dirname, 'project-template.html');
const template = fs.readFileSync(templatePath, 'utf8');

// Configuración de cada proyecto
const projects = {
    'SuperHero': {
        PROJECT_NAME: 'SuperHero App',
        PROJECT_TITLE: 'SuperHero App - Aplicación Móvil Android',
        PROJECT_SUBTITLE: 'Aplicación móvil nativa para Android que permite explorar el universo de superhéroes con información detallada, características y poderes a través de una API especializada',
        PROJECT_IMAGE: '../assets/img/superhero/Pantalla-Inicio.png',
        PROJECT_TYPE: 'Proyecto Académico - Aplicaciones Móviles Multiplataforma',
        PROJECT_DURATION: '4 semanas',
        PROJECT_STATUS: 'Completado',
        PROJECT_STATUS_CLASS: 'completed',
        PROJECT_TEAM: 'Individual',
        DEMO_LINK: '#screenshots',
        GITHUB_LINK: '#',
        TECH_BADGES: `
            <span class="tech-badge">Android Studio</span>
            <span class="tech-badge">Kotlin</span>
            <span class="tech-badge">API REST</span>
            <span class="tech-badge">Android</span>
            <span class="tech-badge">JSON</span>`,
        TECH_LIST: `
            <div class="tech-item">
                <div class="tech-icon" style="background: #3ddc84;">🤖</div>
                <span>Android Studio</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #7f52ff;">📱</div>
                <span>Kotlin</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #ff6b6b;">📡</div>
                <span>SuperHero API</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #a4c639;">🛠️</div>
                <span>Android SDK</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #f7df1e;">📄</div>
                <span>JSON Parsing</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #2196f3;">🔗</div>
                <span>HTTP Requests</span>
            </div>`,
        PROJECT_DESCRIPTION: 'Aplicación móvil nativa para Android desarrollada en Android Studio como parte de la materia de Aplicaciones Móviles Multiplataforma. La app está programada completamente en Kotlin y consume una API especializada de superhéroes que proporciona información completa sobre múltiples personajes del universo de cómics. Los usuarios pueden explorar una extensa lista de superhéroes, buscar personajes específicos por nombre y acceder a información detallada de cada uno incluyendo características, poderes, descripción y primera aparición.',
        PROJECT_OBJECTIVES: `
            <li>Desarrollar una aplicación móvil nativa para Android completamente funcional</li>
            <li>Aprender desarrollo con Android Studio y programación en Kotlin</li>
            <li>Implementar consumo eficiente de API REST para datos de superhéroes</li>
            <li>Crear una interfaz de usuario intuitiva y responsive para móviles</li>
            <li>Integrar funcionalidad de búsqueda en tiempo real por nombre</li>
            <li>Mostrar información detallada de cada superhéroe de forma organizada</li>
            <li>Aplicar principios de UX/UI design específicos para dispositivos Android</li>`,
        PROJECT_FEATURES: `
            <div class="feature-card">
                <h4>📋 Lista de Superhéroes</h4>
                <p>Visualización completa de superhéroes disponibles en la API con información básica y navegación fluida desarrollada en Kotlin.</p>
            </div>
            <div class="feature-card">
                <h4>🔍 Búsqueda por Nombre</h4>
                <p>Barra de búsqueda integrada que permite encontrar superhéroes específicos escribiendo su nombre en tiempo real.</p>
            </div>
            <div class="feature-card">
                <h4>📊 Información Detallada</h4>
                <p>Vista completa de características, poderes, descripción y primera aparición de cada superhéroe.</p>
            </div>
            <div class="feature-card">
                <h4>📱 Aplicación Android Nativa</h4>
                <p>Desarrollada específicamente para Android usando Android Studio y Kotlin para máximo rendimiento y compatibilidad.</p>
            </div>
            <div class="feature-card">
                <h4>⚡ Navegación Intuitiva</h4>
                <p>Interfaz optimizada para dispositivos táctiles con transiciones suaves entre pantallas programadas en Kotlin.</p>
            </div>
            <div class="feature-card">
                <h4>🦸 Base de Datos Extensa</h4>
                <p>Acceso a información de múltiples superhéroes a través de API especializada y actualizada mediante HTTP requests.</p>
            </div>`,
        DEVELOPMENT_PROCESS: `
            <div class="timeline-item">
                <h4>Fase 1: Setup y Configuración</h4>
                <p>Configuración inicial de Android Studio, setup del proyecto Kotlin y selección de API de superhéroes.</p>
            </div>
            <div class="timeline-item">
                <h4>Fase 2: Diseño de UI</h4>
                <p>Creación de layouts en XML, diseño de la lista principal y pantalla de detalles siguiendo Material Design.</p>
            </div>
            <div class="timeline-item">
                <h4>Fase 3: Integración API</h4>
                <p>Implementación de llamadas HTTP en Kotlin, parsing de JSON y manejo de datos asíncronos.</p>
            </div>
            <div class="timeline-item">
                <h4>Fase 4: Funcionalidades</h4>
                <p>Desarrollo de búsqueda, navegación entre Activities y optimización de rendimiento final.</p>
            </div>`,
        SCREENSHOTS: `
            <div class="screenshot-item">
                <img src="../assets/img/superhero/Pantalla-Inicio.png" alt="Pantalla de inicio de la app" />
                <p class="screenshot-caption">Pantalla de Inicio - Vista principal de la aplicación SuperHero</p>
            </div>
            <div class="screenshot-item">
                <img src="../assets/img/superhero/Pantalla-Busqueda.png" alt="Funcionalidad de búsqueda" />
                <p class="screenshot-caption">Pantalla de Búsqueda - Funcionalidad para buscar superhéroes por nombre</p>
            </div>
            <div class="screenshot-item">
                <img src="../assets/img/superhero/Pantalla-Imagen-Hero.png" alt="Imagen del superhéroe seleccionado" />
                <p class="screenshot-caption">Vista de Imagen - Visualización de la imagen del superhéroe</p>
            </div>
            <div class="screenshot-item">
                <img src="../assets/img/superhero/Pantalla-Skills.png" alt="Habilidades del superhéroe" />
                <p class="screenshot-caption">Pantalla de Habilidades - Estadísticas y poderes del superhéroe</p>
            </div>
            <div class="screenshot-item">
                <img src="../assets/img/superhero/Pantalla-Characters.png" alt="Características del superhéroe" />
                <p class="screenshot-caption">Pantalla de Características - Información detallada y primera aparición</p>
            </div>`,
        CHALLENGES: `
            <li>Manejo eficiente de llamadas HTTP asíncronas en Kotlin</li>
            <li>Parseo correcto de respuestas JSON complejas de la API de superhéroes</li>
            <li>Optimización de rendimiento en la lista de superhéroes con RecyclerView</li>
            <li>Implementación de búsqueda en tiempo real sin afectar performance</li>
            <li>Gestión del ciclo de vida de Activities en Android</li>
            <li>Adaptación de la UI para diferentes tamaños de pantalla Android</li>
            <li>Debugging y manejo de errores en llamadas de red</li>`,
        LEARNINGS: `
            <li>Desarrollo nativo Android con Kotlin y Android Studio desde cero</li>
            <li>Consumo de APIs REST y manejo de respuestas asíncronas en Kotlin</li>
            <li>Diseño de interfaces móviles con XML layouts y Material Design</li>
            <li>Implementación de RecyclerView para listas eficientes y scrolling fluido</li>
            <li>Navegación entre Activities y paso de datos entre pantallas</li>
            <li>Principios de Material Design para aplicaciones Android</li>
            <li>Debugging, testing y deployment en dispositivos Android reales</li>
            <li>Programación orientada a objetos aplicada en desarrollo móvil</li>`,
        OTHER_PROJECTS: `
            <a href="SIGE.html" class="other-project-card">
                <div class="other-project-image">📊</div>
                <div class="other-project-content">
                    <h3>Sistema SIGE</h3>
                    <p>Sistema de gestión empresarial con dashboard interactivo.</p>
                </div>
            </a>
            <a href="Velarys.html" class="other-project-card">
                <div class="other-project-image">🌐</div>
                <div class="other-project-content">
                    <h3>Velarys</h3>
                    <p>Plataforma de aprendizaje de idiomas con Angular.</p>
                </div>
            </a>
            <a href="Peliculas.html" class="other-project-card">
                <div class="other-project-image">🎬</div>
                <div class="other-project-content">
                    <h3>Sistema de Películas</h3>
                    <p>Plataforma para explorar información de películas.</p>
                </div>
            </a>`
    },
        
    'SIGE': {
        PROJECT_NAME: 'Sistema SIGE',
        PROJECT_TITLE: 'Sistema de Información y Gestión Empresarial',
        PROJECT_SUBTITLE: 'Dashboard administrativo completo con gestión de usuarios, reportes automatizados y analytics en tiempo real',
        PROJECT_IMAGE: '../assets/screenshots/sige-hero.jpg',
        PROJECT_TYPE: 'Proyecto Académico',
        PROJECT_DURATION: '4 semanas',
        PROJECT_STATUS: 'Completado',
        PROJECT_STATUS_CLASS: 'completed',
        PROJECT_TEAM: 'Equipo de 3',
        DEMO_LINK: '#screenshots',
        GITHUB_LINK: '#',
        TECH_BADGES: `
            <span class="tech-badge">PHP</span>
            <span class="tech-badge">MySQL</span>
            <span class="tech-badge">JavaScript</span>
            <span class="tech-badge">Bootstrap</span>
            <span class="tech-badge">Chart.js</span>`,
        TECH_LIST: `
            <div class="tech-item">
                <div class="tech-icon" style="background: #777bb4;">🐘</div>
                <span>PHP</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #4479a1;">🗄️</div>
                <span>MySQL</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #f7df1e;">⚡</div>
                <span>JavaScript</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #7952b3;">🎨</div>
                <span>Bootstrap</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #ff6384;">📊</div>
                <span>Chart.js</span>
            </div>`,
        PROJECT_DESCRIPTION: 'Sistema integral de gestión empresarial desarrollado como proyecto final de la materia de Bases de Datos para Aplicaciones. Incluye módulos completos de administración de usuarios, generación de reportes automatizados, dashboard interactivo con métricas en tiempo real y panel de control administrativo avanzado.',
        PROJECT_OBJECTIVES: `
            <li>Desarrollar un sistema de gestión empresarial completo y escalable</li>
            <li>Implementar arquitectura MVC para organización óptima del código</li>
            <li>Crear dashboard interactivo con visualización avanzada de datos</li>
            <li>Aplicar buenas prácticas de seguridad en bases de datos</li>
            <li>Diseñar interfaz responsive y centrada en el usuario</li>`,
        PROJECT_FEATURES: `
            <div class="feature-card">
                <h4>👥 Gestión de Usuarios</h4>
                <p>Sistema completo de registro, autenticación y administración de usuarios con roles diferenciados.</p>
            </div>
            <div class="feature-card">
                <h4>📊 Dashboard Interactivo</h4>
                <p>Panel de control con gráficas dinámicas y métricas empresariales en tiempo real.</p>
            </div>
            <div class="feature-card">
                <h4>📄 Generación de Reportes</h4>
                <p>Módulo automatizado para crear reportes personalizados en PDF y Excel.</p>
            </div>
            <div class="feature-card">
                <h4>🔒 Sistema de Seguridad</h4>
                <p>Autenticación robusta con encriptación avanzada y control granular de accesos.</p>
            </div>`,
        DEVELOPMENT_PROCESS: `
            <div class="timeline-item">
                <h4>Fase 1: Análisis y Diseño</h4>
                <p>Análisis de requerimientos empresariales y diseño de base de datos normalizada.</p>
            </div>
            <div class="timeline-item">
                <h4>Fase 2: Backend Development</h4>
                <p>Implementación de API REST en PHP con arquitectura MVC y conexión a MySQL.</p>
            </div>
            <div class="timeline-item">
                <h4>Fase 3: Frontend Interface</h4>
                <p>Desarrollo de interfaz responsive con Bootstrap y JavaScript interactivo.</p>
            </div>
            <div class="timeline-item">
                <h4>Fase 4: Testing e Integración</h4>
                <p>Pruebas exhaustivas del sistema y optimización de rendimiento.</p>
            </div>`,
        SCREENSHOTS: `
            <div class="screenshot-item">
                <img src="../assets/screenshots/sige-dashboard.jpg" alt="Dashboard principal" />
            </div>
            <div class="screenshot-item">
                <img src="../assets/screenshots/sige-users.jpg" alt="Gestión de usuarios" />
            </div>
            <div class="screenshot-item">
                <img src="../assets/screenshots/sige-reports.jpg" alt="Generación de reportes" />
            </div>`,
        CHALLENGES: `
            <li>Diseño de base de datos normalizada y eficiente para múltiples módulos</li>
            <li>Implementación de sistema de roles y permisos granulares</li>
            <li>Optimización de consultas complejas para grandes volúmenes de datos</li>
            <li>Integración fluida de múltiples módulos empresariales</li>`,
        LEARNINGS: `
            <li>Arquitectura MVC avanzada en PHP para aplicaciones empresariales</li>
            <li>Optimización y tuning de bases de datos MySQL</li>
            <li>Implementación de sistemas de autenticación y autorización</li>
            <li>Creación de dashboards interactivos y reportes automatizados</li>`,
        OTHER_PROJECTS: `
            <a href="Peliculas.html" class="other-project-card">
                <div class="other-project-image">🎬</div>
                <div class="other-project-content">
                    <h3>Sistema de Películas</h3>
                    <p>Plataforma para explorar y gestionar información de películas.</p>
                </div>
            </a>
            <a href="SuperHero.html" class="other-project-card">
                <div class="other-project-image">🦸</div>
                <div class="other-project-content">
                    <h3>SuperHero App</h3>
                    <p>Aplicación para explorar información de superhéroes.</p>
                </div>
            </a>
            <a href="Velarys.html" class="other-project-card">
                <div class="other-project-image">🌐</div>
                <div class="other-project-content">
                    <h3>Velarys</h3>
                    <p>Plataforma de aprendizaje de idiomas con Angular.</p>
                </div>
            </a>`
    },
    
    'Peliculas': {
        PROJECT_NAME: 'SuperHero App',
        PROJECT_TITLE: 'Aplicación de Superhéroes',
        PROJECT_SUBTITLE: 'Plataforma interactiva para explorar el universo de superhéroes con información detallada, estadísticas y búsqueda avanzada',
        PROJECT_IMAGE: '../assets/screenshots/superhero-hero.jpg',
        PROJECT_TYPE: 'Proyecto Personal',
        PROJECT_DURATION: '2 semanas',
        PROJECT_STATUS: 'En progreso',
        PROJECT_STATUS_CLASS: 'in-progress',
        PROJECT_TEAM: 'Individual',
        DEMO_LINK: '#screenshots',
        GITHUB_LINK: '#',
        TECH_BADGES: `
            <span class="tech-badge">React</span>
            <span class="tech-badge">API REST</span>
            <span class="tech-badge">CSS3</span>
            <span class="tech-badge">Axios</span>
            <span class="tech-badge">JSON</span>`,
        TECH_LIST: `
            <div class="tech-item">
                <div class="tech-icon" style="background: #61dafb;">⚛️</div>
                <span>React</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #ff6b6b;">📡</div>
                <span>API REST</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #1572b6;">🎨</div>
                <span>CSS3</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #5a29e4;">🔗</div>
                <span>Axios</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #f7df1e;">📄</div>
                <span>JSON</span>
            </div>`,
        PROJECT_DESCRIPTION: 'Aplicación web interactiva desarrollada con React que permite explorar el vasto universo de superhéroes. Los usuarios pueden buscar, filtrar y obtener información detallada sobre sus superhéroes favoritos, incluyendo poderes, estadísticas completas, biografías extensas y comparaciones entre personajes.',
        PROJECT_OBJECTIVES: `
            <li>Crear una interfaz atractiva e intuitiva para explorar superhéroes</li>
            <li>Implementar búsqueda y filtrado eficiente con múltiples criterios</li>
            <li>Mostrar información detallada y estadísticas de cada personaje</li>
            <li>Aplicar principios modernos de UX/UI design</li>
            <li>Optimizar completamente para dispositivos móviles</li>`,
        PROJECT_FEATURES: `
            <div class="feature-card">
                <h4>🔍 Búsqueda Inteligente</h4>
                <p>Encuentra superhéroes por nombre, poder, universo de origen o editorial.</p>
            </div>
            <div class="feature-card">
                <h4>📊 Estadísticas Detalladas</h4>
                <p>Visualiza poderes, estadísticas de combate y habilidades de cada héroe.</p>
            </div>
            <div class="feature-card">
                <h4>🎨 Interfaz Moderna</h4>
                <p>Diseño inspirado en cómics con animaciones fluidas y efectos visuales.</p>
            </div>
            <div class="feature-card">
                <h4>📱 Totalmente Responsive</h4>
                <p>Experiencia optimizada y fluida para todos los dispositivos.</p>
            </div>`,
        DEVELOPMENT_PROCESS: `
            <div class="timeline-item">
                <h4>Fase 1: Setup y Configuración</h4>
                <p>Configuración inicial de React, setup de herramientas y selección de API.</p>
            </div>
            <div class="timeline-item">
                <h4>Fase 2: Componentes Base</h4>
                <p>Desarrollo de componentes reutilizables y estructura de la aplicación.</p>
            </div>
            <div class="timeline-item">
                <h4>Fase 3: Integración API</h4>
                <p>Conexión con SuperHero API y manejo de datos asíncronos.</p>
            </div>
            <div class="timeline-item">
                <h4>Fase 4: UI/UX Polish</h4>
                <p>Refinamiento visual, animaciones y optimización de experiencia de usuario.</p>
            </div>`,
        SCREENSHOTS: `
            <div class="screenshot-item">
                <img src="../assets/screenshots/superhero-home.jpg" alt="Página principal" />
            </div>
            <div class="screenshot-item">
                <img src="../assets/screenshots/superhero-search.jpg" alt="Búsqueda de héroes" />
            </div>
            <div class="screenshot-item">
                <img src="../assets/screenshots/superhero-detail.jpg" alt="Detalle de superhéroe" />
            </div>`,
        CHALLENGES: `
            <li>Manejo eficiente de grandes volúmenes de datos de API externa</li>
            <li>Optimización de rendimiento en búsquedas y filtrado</li>
            <li>Diseño visual atractivo que capture la esencia de los cómics</li>
            <li>Gestión compleja de estado con múltiples filtros activos</li>`,
        LEARNINGS: `
            <li>Hooks avanzados de React (useEffect, useCallback, useMemo)</li>
            <li>Optimización de consultas a API y caching inteligente</li>
            <li>Técnicas avanzadas de diseño de interfaces de usuario</li>
            <li>Manejo de estado global y local en aplicaciones React</li>`,
        OTHER_PROJECTS: `
            <a href="SIGE.html" class="other-project-card">
                <div class="other-project-image">📊</div>
                <div class="other-project-content">
                    <h3>Sistema SIGE</h3>
                    <p>Sistema de gestión empresarial con dashboard.</p>
                </div>
            </a>
            <a href="Velarys.html" class="other-project-card">
                <div class="other-project-image">🌐</div>
                <div class="other-project-content">
                    <h3>Velarys</h3>
                    <p>Plataforma de aprendizaje de idiomas con Angular.</p>
                </div>
            </a>
            <a href="Peliculas.html" class="other-project-card">
                <div class="other-project-image">🎬</div>
                <div class="other-project-content">
                    <h3>Sistema de Películas</h3>
                    <p>Plataforma para explorar información de películas.</p>
                </div>
            </a>`
    },
    
    'Velarys': {
        PROJECT_NAME: 'Velarys',
        PROJECT_TITLE: 'Velarys - Plataforma de Aprendizaje de Idiomas',
        PROJECT_SUBTITLE: 'Aplicación web integral para el aprendizaje interactivo de idiomas con sistema de roles, cursos estructurados y seguimiento de progreso',
        PROJECT_IMAGE: '../assets/img/Velarys/Pantalla-Bienvenida.png',
        PROJECT_TYPE: 'Proyecto Académico - Integradora I',
        PROJECT_DURATION: '4 meses',
        PROJECT_STATUS: 'Completado',
        PROJECT_STATUS_CLASS: 'completed',
        PROJECT_TEAM: 'Equipo de 4 - Metodología Scrum',
        DEMO_LINK: '#screenshots',
        GITHUB_LINK: 'https://github.com/gusmendez3249/Velarys-Final.git',
        TECH_BADGES: `
            <span class="tech-badge">Angular</span>
            <span class="tech-badge">TypeScript</span>
            <span class="tech-badge">Node.js</span>
            <span class="tech-badge">MySQL</span>
            <span class="tech-badge">Express</span>`,
        TECH_LIST: `
            <div class="tech-item">
                <div class="tech-icon" style="background: #dd1b16;">🅰️</div>
                <span>Angular</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #3178c6;">📘</div>
                <span>TypeScript</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #339933;">🟢</div>
                <span>Node.js</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #4479a1;">🗄️</div>
                <span>MySQL</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #000000;">⚡</div>
                <span>Express.js</span>
            </div>
            <div class="tech-item">
                <div class="tech-icon" style="background: #0052cc;">📋</div>
                <span>Metodología Scrum</span>
            </div>`,
        PROJECT_DESCRIPTION: `
            Velarys es una plataforma educativa desarrollada como proyecto integrador que permite a los usuarios aprender idiomas de manera interactiva y estructurada. El sistema cuenta con dos roles principales: administradores que gestionan cursos y contenido, y usuarios que acceden a lecciones, juegos educativos y seguimiento de progreso. 
            
            Desarrollado utilizando metodología Scrum con un equipo multidisciplinario, el proyecto incluyó planificación directa con el cliente, análisis de requerimientos, diseño de UX/UI y desarrollo full-stack con tecnologías modernas.`,
        PROJECT_OBJECTIVES: `
            <li>Crear una plataforma educativa completa para aprendizaje de idiomas</li>
            <li>Implementar sistema de roles diferenciados (Admin/Usuario)</li>
            <li>Desarrollar arquitectura full-stack escalable con Angular y Node.js</li>
            <li>Aplicar metodología Scrum en un proyecto real con cliente</li>
            <li>Diseñar experiencia de usuario intuitiva y engaging</li>
            <li>Integrar base de datos relacional para gestión de usuarios y progreso</li>`,
        PROJECT_FEATURES: `
            <div class="feature-card">
                <h4>👥 Sistema de Roles</h4>
                <p>Administradores con panel de gestión de cursos y usuarios con acceso a lecciones organizadas por niveles.</p>
            </div>
            <div class="feature-card">
                <h4>📚 Cursos Estructurados</h4>
                <p>Lecciones organizadas por niveles con ejercicios interactivos y contenido multimedia básico.</p>
            </div>
            <div class="feature-card">
                <h4>🎮 Elementos de Gamificación</h4>
                <p>Juegos educativos simples y seguimiento básico de progreso para motivar el aprendizaje.</p>
            </div>
            <div class="feature-card">
                <h4>📊 Seguimiento Básico</h4>
                <p>Vista simple del progreso del estudiante con estadísticas de lecciones completadas.</p>
            </div>
            <div class="feature-card">
                <h4>📱 Diseño Responsive</h4>
                <p>Interfaz que se adapta a diferentes dispositivos para facilitar el aprendizaje móvil.</p>
            </div>
            <div class="feature-card">
                <h4>🔐 Autenticación Básica</h4>
                <p>Sistema de login con encriptación de contraseñas y gestión básica de sesiones de usuario.</p>
            </div>`,
        DEVELOPMENT_PROCESS: `
            <div class="timeline-item">
                <h4>Sprint 0: Planificación con Cliente</h4>
                <p>Reuniones con el cliente para definir requerimientos, alcance del proyecto y establecimiento del product backlog inicial.</p>
            </div>
            <div class="timeline-item">
                <h4>Sprint 1-2: Diseño y Arquitectura</h4>
                <p>Diseño de wireframes, mockups de UI/UX, arquitectura de base de datos y definición de APIs.</p>
            </div>
            <div class="timeline-item">
                <h4>Sprint 3-4: Backend Development</h4>
                <p>Desarrollo de API REST con Node.js/Express, configuración de MySQL y sistema de autenticación.</p>
            </div>
            <div class="timeline-item">
                <h4>Sprint 5-6: Frontend Development</h4>
                <p>Implementación de componentes Angular, integración con backend y desarrollo de interfaces de usuario.</p>
            </div>
            <div class="timeline-item">
                <h4>Sprint 7-8: Testing y Deploy</h4>
                <p>Pruebas integrales, corrección de bugs, optimización de rendimiento y despliegue final.</p>
            </div>`,
        SCREENSHOTS: `
            <div class="screenshot-item">
                <img src="../assets/img/Velarys/Pantalla-Bienvenida.png" alt="Pantalla de Bienvenida" />
                <p class="screenshot-caption">Pantalla de Bienvenida - Primera impresión de la plataforma</p>
            </div>
            <div class="screenshot-item">
                <img src="../assets/img/Velarys/Pantalla-Inicio.png" alt="Pantalla de Inicio" />
                <p class="screenshot-caption">Dashboard Principal - Vista general de cursos disponibles</p>
            </div>
            <div class="screenshot-item">
                <img src="../assets/img/Velarys/Pantalla-Inicio-Admin.png" alt="Panel de Administración" />
                <p class="screenshot-caption">Panel de Administración - Gestión de contenido y usuarios</p>
            </div>
            <div class="screenshot-item">
                <img src="../assets/img/Velarys/Pantalla-Cursos-Users.png" alt="Vista de Cursos para Usuarios" />
                <p class="screenshot-caption">Catálogo de Cursos - Vista del estudiante</p>
            </div>
            <div class="screenshot-item">
                <img src="../assets/img/Velarys/Pantalla-Lecciones-Users.png" alt="Lecciones Interactivas" />
                <p class="screenshot-caption">Lecciones Interactivas - Contenido educativo estructurado</p>
            </div>
            <div class="screenshot-item">
                <img src="../assets/img/Velarys/Pantalla-Juegos-Users.png" alt="Juegos Educativos" />
                <p class="screenshot-caption">Módulo de Juegos - Aprendizaje gamificado</p>
            </div>
            <div class="screenshot-item">
                <img src="../assets/img/Velarys/Pantalla-Juegos-Admin.png" alt="Gestión de Juegos Admin" />
                <p class="screenshot-caption">Panel Admin de Juegos - Configuración de actividades</p>
            </div>
            <div class="screenshot-item">
                <img src="../assets/img/Velarys/Pantalla-Registro.png" alt="Sistema de Registro" />
                <p class="screenshot-caption">Registro de Usuarios - Onboarding simplificado</p>
            </div>`,
        CHALLENGES: `
            <li>Coordinación efectiva del equipo usando Scrum por primera vez</li>
            <li>Integración compleja entre Angular frontend y Node.js backend</li>
            <li>Diseño de base de datos que soporte múltiples idiomas y roles</li>
            <li>Implementación de sistema de autenticación robusto y seguro</li>
            <li>Gestión de requerimientos cambiantes durante el desarrollo</li>
            <li>Optimización de rendimiento para contenido multimedia</li>`,
        LEARNINGS: `
            <li>Metodología Scrum aplicada en proyecto real con cliente</li>
            <li>Desarrollo full-stack con Angular, TypeScript y Node.js</li>
            <li>Diseño de APIs RESTful y integración frontend-backend</li>
            <li>Gestión de bases de datos relacionales complejas</li>
            <li>Trabajo colaborativo en equipo multidisciplinario</li>
            <li>Comunicación efectiva con cliente y gestión de expectativas</li>`,
        OTHER_PROJECTS: `
            <a href="Peliculas.html" class="other-project-card">
                <div class="other-project-image">🎬</div>
                <div class="other-project-content">
                    <h3>Sistema de Películas</h3>
                    <p>Plataforma para explorar información de películas con API.</p>
                </div>
            </a>
            <a href="SIGE.html" class="other-project-card">
                <div class="other-project-image">📊</div>
                <div class="other-project-content">
                    <h3>Sistema SIGE</h3>
                    <p>Sistema de gestión empresarial con PHP y MySQL.</p>
                </div>
            </a>
            <a href="SuperHero.html" class="other-project-card">
                <div class="other-project-image">🦸</div>
                <div class="other-project-content">
                    <h3>SuperHero App</h3>
                    <p>Aplicación React para explorar superhéroes.</p>
                </div>
            </a>`
    }
};

// Función para generar cada página de proyecto
function generateProject(projectKey, projectData) {
    let html = template;
    
    // Reemplazar todos los placeholders con los datos del proyecto
    Object.keys(projectData).forEach(key => {
        const placeholder = new RegExp(`{{${key}}}`, 'g');
        html = html.replace(placeholder, projectData[key]);
    });
    
    // Crear archivo en la misma carpeta (Proyectos)
    const fileName = `${projectKey}.html`;
    const outputPath = path.join(__dirname, fileName);
    
    try {
        fs.writeFileSync(outputPath, html, 'utf8');
        console.log(`✅ Generado: Proyectos/${fileName}`);
    } catch (error) {
        console.error(`❌ Error generando ${fileName}:`, error.message);
    }
}

// Función principal
function main() {
    console.log('🚀 Generando páginas de proyectos...\n');
    
    // Verificar que existe el template
    if (!fs.existsSync(templatePath)) {
        console.error('❌ Error: No se encontró project-template.html');
        console.log('💡 Asegúrate de que project-template.html esté en la carpeta Proyectos/');
        return;
    }
    
    // Generar todos los proyectos
    let successCount = 0;
    Object.keys(projects).forEach(projectKey => {
        try {
            generateProject(projectKey, projects[projectKey]);
            successCount++;
        } catch (error) {
            console.error(`❌ Error generando ${projectKey}:`, error.message);
        }
    });
    
    console.log(`\n✨ Proceso completado! ${successCount}/${Object.keys(projects).length} páginas generadas exitosamente.`);
    
    if (successCount > 0) {
        console.log('\n📋 Páginas creadas en Proyectos/:');
        Object.keys(projects).forEach(projectKey => {
            console.log(`   - ${projectKey}.html`);
        });
        
        console.log('\n🔗 Enlaces actualizados para index.html:');
        console.log('   <a href="Proyectos/Peliculas.html" class="project-link">Ver Proyecto</a>');
        console.log('   <a href="Proyectos/SIGE.html" class="project-link">Ver Proyecto</a>');
        console.log('   <a href="Proyectos/SuperHero.html" class="project-link">Ver Proyecto</a>');
        console.log('   <a href="Proyectos/Velarys.html" class="project-link">Ver Proyecto</a>');
        
        console.log('\n🎯 Demo Links configurados:');
        console.log('   • Todos los botones "Ver Demo" redirigen a #screenshots');
        console.log('   • El botón "Ver Código" de Velarys redirige a GitHub');
        console.log('   • Los demás "Ver Código" están como placeholder (#)');
    }
}

// Ejecutar el script
main();