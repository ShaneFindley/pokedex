import './Pokemon-Image.css'

// a good check for this would be to lazy load the image only when it is within the view finder,
// this can be done through vanilla JS and use of a default image.
export const PokemonImg: React.FC<{id: number, className?: string}> = ({className, id}) =>
    <div className={`pokemon-img ${className}`} style={{
            backgroundImage: `url(./resources/${id}.png)`
        }} 
    />