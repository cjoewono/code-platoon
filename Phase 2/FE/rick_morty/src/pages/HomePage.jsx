const HomePage = () => {
    return (
        <>
            <div className="text-center py-10">
                <h1 className="text-5xl font-bold text-green-400 mb-4">
                    🛸 Rick and Morty
                </h1>
                                <img 
                src="https://myhotposters.com/cdn/shop/products/mL3562_67ea248e-034a-498e-8b38-e1eb1d5729cc_1024x1024.jpg?v=1748534343" 
                className="d-block mx-auto w-75 rounded shadow"
                alt="Rick and Morty"
                />
                <p className="text-2xl text-green-300 font-semibold">
                    "Wubba lubba dub dub!" - Rick Sanchez
                </p>
            </div>
        </>
    )
}
export default HomePage