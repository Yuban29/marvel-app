### Marvel Task App
### Una aplicación móvil con React Native y Expo Router que combina un gestor de tareas con información de héroes de Marvel.

## 🚀 Características

✅ Gestor de tareas con prioridades y categorías

🦸 Galería de héroes de Marvel

📱 Navegación con Expo Router

🎨 Interfaz con React Native Paper

## 🛠️ Tecnologías

React Native

Expo

Expo Router

React Native Paper

TypeScript

## 📦 Instalación

```bash

Clonar el repositorio
git clone https://github.com/TU_USUARIO/marvel-task-app.git

Navegar al directorio
cd marvel-task-app

Instalar dependencias
npm install

Iniciar la aplicación
npx expo start
```

## 📱 Uso

### Gestor de Tareas

Crear tareas con diferentes prioridades (Alta, Media, Baja)

Organizar por categorías (Trabajo, Personal, Compras, Estudio)

Marcar como recurrentes para tareas periódicas

Marcar como completadas cuando termines

### Galería de Héroes

Explorar héroes de Marvel

Ver detalles completos de cada héroe

Conocer habilidades y primera aparición

## 🎨 Componentes Principales

```typescript
// Estructura de un héroe
interface Hero {
id: string;
name: string;
alias: string;
description: string;
image: string;
abilities: string[];
firstAppearance: string;
}

// Estructura de una tarea
interface Task {
id: string;
title: string;
priority: 'high' | 'medium' | 'low';
category: string;
recurrent: boolean;
completed: boolean;
}
```

## 📁 Estructura del Proyecto

ymarvel-task-app/ ├── app/ │ ├── (tabs)/ │ │ ├── _layout.tsx │ │ ├── index.tsx │ │ ├── tasks.tsx │ │ └── heroes.tsx │ └── heroes/ │ └── [id].tsx ├── components/ │ └── HeroCard.tsx ├── assets/ ├── package.json ├── app.json └── tsconfig.json y

## 🎯 Héroes Incluidos

### Iron Man

Alias: Tony Stark

Habilidades: Tecnología avanzada, Vuelo supersónico, Rayos repulsores

Primera aparición: Tales of Suspense #39 (1963)

### Spider-Man

Alias: Peter Parker

Habilidades: Fuerza sobrehumana, Sentido arácnido, Agilidad mejorada

Primera aparición: Amazing Fantasy #15 (1962)

### Black Panther

Alias: T'Challa

Habilidades: Fuerza mejorada, Traje de vibranium, Estratega experto

Primera aparición: Fantastic Four #52 (1966)

## 🔧 Scripts Disponibles

```bash

Iniciar en modo desarrollo
npm start

Ejecutar en Android
npm run android

Ejecutar en iOS
npm run ios

Ejecutar en web
npm run web
```

## 📝 Próximas Características

Sincronización con backend

Notificaciones push para tareas

Más héroes de Marvel

Modo oscuro

Exportar/importar tareas

## 🤝 Contribuir

Haz fork del proyecto

Crea una rama para tu feature (git checkout -b feature/AmazingFeature)

Commit tus cambios (git commit -m 'Add some AmazingFeature')

Push a la rama (git push origin feature/AmazingFeature)

Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:

Revisa la documentación de Expo

Abre un issue en el repositorio

Contacta al desarrollador

¡Disfruta de la aplicación! 🚀



Abre un issue en el repositorio

Contacta al desarrollador

¡Disfruta de la aplicación! 🚀
