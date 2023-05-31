import photo from '../images/derek.jpg';

export default function Home(){
    return(
        <section className="flex flex-col items-center">
            <h1 className="text-3xl border-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">My name is Derek</h1>
            <img className="object-cover h-96 border-4 border-gray-700 rounded-lg" src={photo} alt="Picture of me and my daughter"/>
            
        </section>
    );
}