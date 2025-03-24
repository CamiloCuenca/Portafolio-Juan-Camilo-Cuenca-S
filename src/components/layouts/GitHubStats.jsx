export default function GithubStats() {
    return (
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-3 text-start">Github stats</h2>
        <div className="bg-white p-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-3">
          <img
            src="https://camo.githubusercontent.com/498b73131df221361f6b628981ebca77e45fb66cc18f746b73227b7b918d93f2/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d63616d696c6f6375656e63612673686f775f69636f6e733d74727565266c6f63616c653d656e267468656d653d746f6b796f6e69676874"
            alt="GitHub Stats"
            className="w-auto h-20 sm:h-30 md:h-40 lg:h-50"
          />
          <img
            src="https://camo.githubusercontent.com/dc11ea31d806f27981eeb16a06619f1519864c323200ca941811ca6e764aed47/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d63616d696c6f6375656e63612673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374267468656d653d746f6b796f6e69676874"
            alt="Top Languages"
            className="w-auto h-20 sm:h-30 md:h-40 lg:h-50"
          />
        </div>
      </div>
    );
  }
  