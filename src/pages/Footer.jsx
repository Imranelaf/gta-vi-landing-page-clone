

export default function Footer(){

    return(

        <section>
            <div className="ComingSoon z-50 inset-0 flex flex-col justify-center items-center">
			<img
				src="./images/fav.png"
				alt="logo"
				className="relative h-auto w-3/5 md:w-2/5 lg:w-1/5 object-contain"
			/>
			<h1 className="lg:text-[6rem] text-[3rem] text-center leading-tight">
				Coming <br /> May 26th <br /> 2026
			</h1>
            <div className="w-full h-auto flex justify-center m-6 content-evenly">
                <img src="./images/ps-logo.svg" alt="Playstation Logo" />
                <img src="./images/x-logo.svg" alt="Xbox Logo" />
            </div>
		</div>
        </section>
    )
}