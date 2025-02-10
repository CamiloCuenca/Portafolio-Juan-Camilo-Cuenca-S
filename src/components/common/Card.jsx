
export default function Card({name}){
    return(
        <div className="bg-white h-70 w-50 p-4 rounded-lg  shadow-2xl">
            <h1>{name}</h1>
        </div>
    );
}