export default function HeroSection() {
    return (
      <div className="bg-purple-deep py-3 flex justify-start items-center space-x-25">
        {/* Imagen de perfil */}
        <div className="w-80 h-80 ml-5 bg-gradient-to-t from-purple-deep to-purple rounded-full overflow-hidden flex items-center justify-center">
          <img
            className="w-65 h-75 object-cover rounded-full"
            src="src/assets/FotoPerfil.png"
            alt="Foto Perfil"
          />
        </div>
  
        {/* Imagen de Hero */}
        <div>
          <img className="max-w-full h-auto" src="src/assets/HeroSection.svg" alt="Hero Section" />
        </div>

      </div>
    );
  }
  