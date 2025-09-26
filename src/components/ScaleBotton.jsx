export default function ScaleBotton(){

    return(
        <button onClick={(e)=>console.log('botton has been clicked', e)
        } className="absolute bottom-3 right-3 h-10 w-10 font-extrabold rounded-full bg-white cursor-pointer opacity-60 scale-110 font-bold shadow-md transition">
          +
        </button>
    )
}