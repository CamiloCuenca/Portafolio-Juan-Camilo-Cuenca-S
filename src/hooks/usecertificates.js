import { useEffect, useState } from "react";

const CERTIFICATES = [
    {
        nombre: "Excel Avanzado",
        entidad: "Fundación Telefónica",
        fecha: "Expedición: nov. 2024",
        url: "/assets/Pdf-Certificates/Certificado-Excel-Avanzado.pdf",
    },
       {
        nombre: "Gestión de Proyectos con Metodologías Ágiles y Enfoques Lean",
        entidad: "Fundación Telefónica",
        fecha: "Expedición: dic. 2024",
        url: "/assets/Pdf-Certificates/Certificado-Gestión-de-Proyectos-con-Metodologías-Ágiles-y-Enfoques-Lean.pdf",
    },
        {
        nombre: "Programming Fundamentals in Kotlin",
        entidad: "Meta/Coursera",
        fecha: "Expedición: ago. 2024",
        url: "",
    },
        {
        nombre: "Control de versión (GIT)",
        entidad: "Meta/Coursera",
        fecha: "Expedición: jul. 2024",
        url: "",
    },

     {
        nombre: "Cómo resolver problemas y tomar decisiones con eficacia",
        entidad: "University of California, Irvine - The Paul Merage School of Business/Coursera",
        fecha: "Expedición: jul. 2024",
        url: "",
    },

      {
        nombre: "Introducción al desarrollo Back-end",
        entidad: "Meta/Coursera",
        fecha: "Expedición: jul. 2024",
        url: "",
    },

      {
        nombre: "Java Foundations",
        entidad: "Oracle",
        fecha: "Expedición: oct. 2023",
        url: "",
    },
   
   
];

export default function useCertificates() {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
       
        setCertificates(CERTIFICATES);
    }, []);

    return certificates;
}