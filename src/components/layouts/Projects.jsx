import Card from "../common/Card";


export default function Projects(){
    const name = "EjemploProject"

    return(
        <div>
            <h1 className="text-2xl font-bold text-start mb-6">Mis Proyectos</h1>
            <div className="flex justify-center space-x-5">
                
                <Card name={name}></Card>
                <Card name={name}></Card>
                <Card name={name}></Card>
                <Card name={name}></Card>
                <Card name={name}></Card>
                <Card name={name}></Card>
                

            </div>
        </div>
    );
}