export default function HeroSection() {
  return (
    <div className="bg-tertiary py-3 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-20 lg:space-x-35">
      {/* Imagen de perfil */}
      <div className="w-75 h-75 ml-5 bg-gradient-to-t from-tertiary to-primary rounded-full overflow-hidden flex items-center justify-center">
        <img
          className="w-65 h-75 sm:w-40 sm:h-50 md:w-65 md:h-75 xl:w-75 xl:h-85 object-contain rounded-full"
          src="/assets/FotoPerfil.png"
          alt="Foto Perfil"
        />
      </div>

      {/* Imagen de Hero */}
      <div className="w-full md:w-2/3 lg:w-3/4 xl:w-auto">
        <img
          className="w-full h-auto"
          src="/assets/HeroSection.svg"
          alt="Hero Section"
        />
      </div>
    </div>
  );
}
