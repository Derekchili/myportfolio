import photo from '../images/derek.jpg';

export default function Home(){
    return(
        <section className="flex flex-col items-center">
            <h1 className="text-3xl border-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl">My name is Derek</h1>
            <img className="object-cover h-96 border-4 border-gray-700 rounded-lg" src={photo} alt="Picture of me and my daughter"/>
            <p className='border-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl font-medium hover:text-2xl'>I live in Lake Stevens Washington, I am married with two daughters that are the love of my life. I am currently enrolled in a University of Washington boot camp learning web development. I have been working for the last 30+ years of my life, but my body has taken too much damage and can no longer work for Waste Management. I really love fixing problems and I figured this would be a great thing to learn I can use for a long time. It has not been a easy learning curve so far but things are starting to click more as I keep practicing to code. I love anything to do with outdoors, fishing, hunting, hiking, and spending time with family and friends.</p>
            
        </section>
    );
}