import './Pokemon-Image.css'

export const PokemonImg: React.FC<{id: number, className?: string}> = ({className, id}) =>
    <div className={`pokemon-img ${className}`} style={{
            backgroundImage: `url(./resources/${id}.png)`
        }} 
    />