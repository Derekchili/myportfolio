import glance from '../images/@aglance.png';
import book from '../images/bookfinder.png';
import weather from '../images/weatherapp.png';
import team from '../images/teamgenerator.png';
import social from '../images/socialnetwork.png';

export default function Projects(){
    const projects = [
        {
          name: '@ a Glance',
          link: 'https://projectfirst.herokuapp.com/',
          screenshot: glance
        },
        {
          name: 'Book-Finder',
          link: 'https://github.com/Derekchili/book-finder-group5.git',
          screenshot: book
        },
        {
          name: 'Weather App',
          link: 'https://github.com/Derekchili/dereks-weather-app.git',
          screenshot: weather
        },
        {
          name: 'Team Profile Generator',
          link: 'https://github.com/Derekchili/Team-profile-generator.git',
          screenshot: team
        },
        {
          name: 'Social Network DB',
          link: 'https://github.com/Derekchili/Social-NetworkDC.git',
          screenshot: social
        }
      ];
      
    return(
    <section className='h-full'>
      <h1 className="mb-5 flex justify-center text-3xl font-bold font-sans text-gray-900 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">My Projects</h1>
        <section className='flex flex-wrap justify-center h-5/6'>

            {projects.map((key, index)=>{
            return(
                <article key={index} style={{backgroundImage: `url(${key.screenshot})`, backgroundSize: 'cover'}}class="flex justify-center max-width-30 w-1/4 h-1/4 m-3 border-4 border-gray-700 rounded-lg shadow-lg bg-grey-300 hover:font-bold hover:bg-blue-400 text-xl text-pink-500 font-medium hover:text-2xl"
                >
                <a className="flex grow place-content-center items-center" 
                href={key.link} target='_blank'>
                {key.name}
                </a>
                </article>
            );
            })}
        </section>
    </section>
    );
}