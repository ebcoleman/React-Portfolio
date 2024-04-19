import AboutItem from './AboutItem'

const data  = [
    {
        title: 'Personal',
        details: 'My name is Emily Coleman. I am a Virginia native but currently reside in Michigan. You\'ll often find me outdoors, exploring nature\'s wonders with my wife and daughter. When we\'re not soaking up the sunshine, you\'ll likely find us whipping up delicious meals in the kitchen or cozied up on the couch having a movie night together.'
    },
    {
        title: 'Professional',
        details: 'My professional background is primarily in shipping and receiving management. However, I am actively transitioning my career trajectory towards web development. This shift follows the successful completion of the Full Stack Web Developer Bootcamp offered by edX through Michigan State University. During the bootcamp, I acquired comprehensive skills and knowledge in modern web development practices. '
    },
]
const About = () => {
    return (
        <div id='about' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#4C783F]">About Me</h1>
            {data.map((item, idx)=>(
                <AboutItem 
                key={idx} 
                title={item.title} 
                details={item.details} 
                />
            ))}

        </div>
    )
}

export default About