

export default function Home(){
    const projects = [
        {
          name: '@ a Glance',
          link: 'https://projectfirst.herokuapp.com/'
        },
        {
          name: 'Book-Finder',
          link: 'https://github.com/Derekchili/book-finder-group5.git'
        },
        {
          name: 'Weather App',
          link: 'https://github.com/Derekchili/dereks-weather-app.git'
        },
        {
          name: 'Team Profile Generator',
          link: 'https://github.com/Derekchili/Team-profile-generator.git'
        },
        {
          name: 'Social Network DB',
          link: 'https://github.com/Derekchili/Social-NetworkDC.git'
        }
      ];
      
    return(
    <section>
        <h1>Projects</h1>
        <section>
            {Object.keys(projects).map((key, index)=>{
            return(
                <article key={index}>
                <a href='{projects[key]}'>
                {key}
                </a>
                </article>
            );
            })}
        </section>
    </section>
    );
}