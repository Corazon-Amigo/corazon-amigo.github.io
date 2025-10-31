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

Se puede trabajar en un entorno de desarrollo aislado utilizando `docker compose`:

```bash
# Crear el servicio (por unica vez)
docker compose up --no-start

# Instalar las dependencias
docker compose run corazon_amigo npm install

# Ejecutar en modo desarrollo
docker compose up -d

# Verificar el estado
docker compose ps

# Construir para producción
docker compose run corazon_amigo npm run build

# Vista previa de la build
docker compose run corazon_amigo npm run preview

# Detener el servicio
docker compose stop

# Eliminar el servicio (cuando ya no se necesite mas)
docker compose down
```

## 🌐 Despliegue Automático

Este proyecto está configurado con GitHub Actions para despliegue automático en Github Pages.

### Configuración

Ver el archivo `.github/workflows/deploy.yml`.

### Flujo de Despliegue

- **Push a main**: Despliega automáticamente a producción.

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