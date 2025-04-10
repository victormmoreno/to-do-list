# To-Do List App con React y Zustand

![App Preview](public/screenshot.png) <!-- Agrega una captura de pantalla luego -->

Una aplicación de lista de tareas moderna construida con:

- ⚛️ React 18
- 🎨 Tailwind CSS
- 🏗️ Vite
- 🗄️ Zustand para gestión de estado
- 📅 Persistencia en localStorage

## Características principales

✅ Gestión completa de tareas (crear, editar, eliminar, marcar como completadas)  
📅 Fechas límite con recordatorios  
🔍 Filtrado y ordenamiento de tareas  
📱 Diseño responsive  
🌙 Modo oscuro/claro (próximamente)  

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/victormmoreno/todo-list-app.git
cd todo-list-app
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Inicia la aplicación:
```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173)

## Estructura del proyecto

```
/src
├── components/    # Componentes reutilizables
├── hooks/         # Custom hooks
├── store/         # Zustand stores
├── utils/         # Funciones utilitarias
├── views/         # Componentes de vista
└── App.jsx        # Componente principal
```

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [date-fns](https://date-fns.org/) (para manejo de fechas)

## Contribución

Si deseas contribuir al proyecto:

1. Haz fork del repositorio
2. Crea una rama con tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

MIT © [Victor Moreno]
