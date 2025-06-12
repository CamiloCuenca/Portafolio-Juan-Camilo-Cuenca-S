export default function HeroSection() {
  return (
    <div className="bg-tertiary py-6 px-4 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 lg:gap-20">
      {/* Imagen de perfil */}
      <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-t from-tertiary to-primary rounded-full overflow-hidden flex items-center justify-center">
        <img
          className="w-full h-full object-cover rounded-full"
          src="/assets/FotoPerfil.png"
          alt="Foto Perfil"
        />
      </div>

      {/* Imagen de Hero */}
      <div className="w-full max-w-2xl">
        <img
          className="w-full h-auto"
          src="/assets/HeroSection.svg"
          alt="Hero Section"
        />
      </div>
    </div>
  );
}
