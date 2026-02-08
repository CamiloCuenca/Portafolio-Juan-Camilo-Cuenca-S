import { useEffect, useState } from "react";

const CERTIFICATES = [
    {
        nombre: { es: "Excel Avanzado", en: "Advanced Excel" },
        entidad: { es: "Fundación Telefónica", en: "Fundación Telefónica" },
        fecha: { es: "Expedición: nov. 2024", en: "Issued: Nov 2024" },
        url: "/assets/Pdf-Certificates/Certificado-Excel-Avanzado.pdf",
    },
    {
        nombre: { es: "Gestión de Proyectos con Metodologías Ágiles y Enfoques Lean", en: "Project Management with Agile Methodologies and Lean Approaches" },
        entidad: { es: "Fundación Telefónica", en: "Fundación Telefónica" },
        fecha: { es: "Expedición: dic. 2024", en: "Issued: Dec 2024" },
        url: "/assets/Pdf-Certificates/Certificado-Gestión-de-Proyectos-con-Metodologías-Ágiles-y-Enfoques-Lean.pdf",
    },
    {
        nombre: { es: "Programming Fundamentals in Kotlin", en: "Programming Fundamentals in Kotlin" },
        entidad: { es: "Meta/Coursera", en: "Meta/Coursera" },
        fecha: { es: "Expedición: ago. 2024", en: "Issued: Aug 2024" },
        url: "/assets/Pdf-Certificates/Certificado-Programming-Fundamentals-in-Kotlin.pdf",
    },
    {
        nombre: { es: "Control de versión (GIT)", en: "Version Control (GIT)" },
        entidad: { es: "Meta/Coursera", en: "Meta/Coursera" },
        fecha: { es: "Expedición: jul. 2024", en: "Issued: Jul 2024" },
        url: "/assets/Pdf-Certificates/Certificado-Version-Control.pdf",
    },
    {
        nombre: { es: "Cómo resolver problemas y tomar decisiones con eficacia", en: "How to Solve Problems and Make Decisions Effectively" },
        entidad: { es: "University of California, Irvine - The Paul Merage School of Business/Coursera", en: "University of California, Irvine - The Paul Merage School of Business/Coursera" },
        fecha: { es: "Expedición: jul. 2024", en: "Issued: Jul 2024" },
        url: "/assets/Pdf-Certificates/Certificado-Como-resolver-problemas-y-tomar-decisiones-con-eficiencia.pdf",
    },
    {
        nombre: { es: "Introducción al desarrollo Back-end", en: "Introduction to Back-end Development" },
        entidad: { es: "Meta/Coursera", en: "Meta/Coursera" },
        fecha: { es: "Expedición: jul. 2024", en: "Issued: Jul 2024" },
        url: "/assets/Pdf-Certificates/Certificado-introduccion-al-desarollo-de-back-end.pdf",
    },
    {
        nombre: { es: "Java Foundations", en: "Java Foundations" },
        entidad: { es: "Oracle", en: "Oracle" },
        fecha: { es: "Expedición: oct. 2023", en: "Issued: Oct 2023" },
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