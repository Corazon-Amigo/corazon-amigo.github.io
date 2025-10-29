# Corazón Amigo - Comedor Social

Una landing page hermosa y responsive para el comedor social "Corazón Amigo", construida con React, TypeScript y TailwindCSS.

## 🌟 Características

- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Navegación Suave**: Scroll suave entre secciones
- **Integración WhatsApp**: Botón flotante para contacto directo
- **Google Maps**: Ubicación embebida del comedor
- **Galería de Actividades**: Imágenes y descripciones de las actividades
- **Sección de Donaciones**: Información sobre cómo colaborar
- **Accesibilidad**: Cumple con estándares de accesibilidad web

## 🚀 Tecnologías Utilizadas

- React 18
- TypeScript
- TailwindCSS
- Vite
- Lucide React (iconos)

## 📦 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone <tu-repositorio>
cd corazon-amigo

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

## 🌐 Despliegue Automático

Este proyecto está configurado con GitHub Actions para despliegue automático a Netlify.

### Configuración de Secrets

Para que el despliegue automático funcione, necesitas configurar los siguientes secrets en tu repositorio de GitHub:

1. Ve a tu repositorio en GitHub
2. Navega a Settings > Secrets and variables > Actions
3. Agrega los siguientes secrets:

#### `NETLIFY_AUTH_TOKEN`
1. Ve a [Netlify](https://app.netlify.com/)
2. Inicia sesión en tu cuenta
3. Ve a User settings > Applications > Personal access tokens
4. Genera un nuevo token y cópialo

#### `NETLIFY_SITE_ID`
1. Ve a tu sitio en Netlify
2. En Site settings > General > Site details
3. Copia el "Site ID"

### Flujo de Despliegue

- **Push a main**: Despliega automáticamente a producción
- **Pull Request**: Crea un preview deploy para revisión
- **Build automático**: Instala dependencias, ejecuta tests y construye el proyecto

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx          # Navegación principal
│   ├── Hero.tsx           # Sección de bienvenida
│   ├── Activities.tsx     # Actividades del comedor
│   ├── Location.tsx       # Ubicación y contacto
│   ├── Donations.tsx      # Información de donaciones
│   ├── Footer.tsx         # Pie de página
│   └── WhatsAppButton.tsx # Botón flotante de WhatsApp
├── App.tsx                # Componente principal
├── main.tsx              # Punto de entrada
└── index.css             # Estilos globales
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en TailwindCSS:
- Naranja: `orange-500` (#F97316)
- Rojo: `red-500` (#EF4444)
- Verde: `green-500` (#10B981)

### Contenido
Para modificar el contenido, edita los componentes correspondientes en la carpeta `src/components/`.

### Imágenes
Las imágenes se cargan desde Pexels. Para cambiarlas, reemplaza las URLs en los componentes.

## 📱 Contacto

- **WhatsApp**: +54 9 11 2253-1240
- **Dirección**: Agüero 2476, Rafael Calzada, Buenos Aires

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 💝 Sobre Corazón Amigo

Corazón Amigo es un comedor social que desde hace 5 años trabaja con amor y dedicación para brindar alimentación, contención y esperanza a los niños de Rafael Calzada, Buenos Aires. 

**Nuestra misión**: "Donde cada comida es un abrazo y cada sonrisa una esperanza"

---

Hecho con ❤️ para la comunidad