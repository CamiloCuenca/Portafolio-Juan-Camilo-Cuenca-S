# Guía de Tipografía - Sistema Estandarizado

## Descripción General

Se ha implementado un sistema de tipografía estandarizado para mantener consistencia en todos los tamaños de fuente y estilos del proyecto. Este sistema utiliza variables CSS personalizadas y clases utilitarias.

## Variables CSS Definidas

### Tamaños de Fuente
```css
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */
```

### Pesos de Fuente
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Altura de Línea
```css
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

## Clases de Tipografía Estandarizadas

### Títulos
- `.text-heading-1` - Títulos principales (30px, bold)
- `.text-heading-2` - Títulos secundarios (24px, bold)
- `.text-heading-3` - Subtítulos (20px, semibold)
- `.text-heading-4` - Subtítulos menores (18px, semibold)

### Texto de Cuerpo
- `.text-body-large` - Texto grande (18px, normal)
- `.text-body` - Texto normal (16px, normal)
- `.text-body-small` - Texto pequeño (14px, normal)
- `.text-caption` - Texto muy pequeño (12px, normal)

## Uso en Componentes

### Antes (Inconsistente)
```jsx
<h1 className="text-2xl font-semibold">Título</h1>
<h2 className="text-3xl font-bold">Otro título</h2>
<p className="text-base sm:text-lg">Párrafo</p>
<span className="text-sm">Texto pequeño</span>
```

### Después (Estandarizado)
```jsx
<h1 className="text-heading-2">Título</h1>
<h2 className="text-heading-1">Otro título</h2>
<p className="text-body-large">Párrafo</p>
<span className="text-body-small">Texto pequeño</span>
```

## Jerarquía de Títulos

1. **Títulos principales de sección**: `.text-heading-1` (30px)
   - Certificados
   - Recomendaciones y Testimonios

2. **Títulos de sección**: `.text-heading-2` (24px)
   - Acerca de mí
   - Mis Skills
   - Mis Proyectos
   - Formación Académica
   - Experiencia laboral
   - GitHub Stats

3. **Subtítulos importantes**: `.text-heading-3` (20px)
   - Nombres de proyectos en cards
   - Cargos en experiencia laboral
   - Nombres de certificados

4. **Subtítulos menores**: `.text-heading-4` (18px)
   - Categorías de skills (Languages, Frameworks, Tools)
   - Nombres de instituciones educativas
   - Títulos de certificados

## Texto de Cuerpo

- **Texto grande**: `.text-body-large` (18px) - Para párrafos importantes
- **Texto normal**: `.text-body` (16px) - Para texto general
- **Texto pequeño**: `.text-body-small` (14px) - Para información secundaria
- **Texto muy pequeño**: `.text-caption` (12px) - Para fechas, etiquetas, etc.

## Beneficios del Sistema

1. **Consistencia**: Todos los tamaños de fuente siguen una escala coherente
2. **Mantenibilidad**: Cambios centralizados en las variables CSS
3. **Escalabilidad**: Fácil agregar nuevos tamaños si es necesario
4. **Legibilidad**: Jerarquía clara y espaciado apropiado
5. **Responsividad**: Las clases funcionan bien en todos los dispositivos

## Componentes Actualizados

Los siguientes componentes han sido actualizados para usar el sistema estandarizado:

- ✅ AboutMe.jsx
- ✅ Skills.jsx
- ✅ Projects.jsx
- ✅ Card.jsx
- ✅ Education.jsx
- ✅ Experience.jsx
- ✅ Certificates.jsx
- ✅ CardCertificates.jsx
- ✅ Testimonial.jsx
- ✅ SocialLinks.jsx
- ✅ GitHubStats.jsx
- ✅ Footer.jsx
- ✅ Header.jsx

## Recomendaciones

1. **Siempre usar las clases estandarizadas** en lugar de clases de Tailwind directas para tipografía
2. **Mantener la jerarquía** de títulos según la importancia del contenido
3. **Usar texto de cuerpo apropiado** según el contexto y la importancia
4. **Evitar mezclar** clases de Tailwind con las clases estandarizadas para tipografía 