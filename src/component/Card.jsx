const Card = ({ style, text, image }) => {
  return image && !text ? (
    <img className="absolute w-15 cursor-default" src={image} style={style} alt="" loading="lazy" />
  ) : (
    <div className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-default" style={style}>
      {text}
    </div>
  )
}

export default Card