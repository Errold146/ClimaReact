import { Search } from "lucide-react";

const WeatherSearch = ({ city, setCity, onSearch }) => {
    //recibo estado y setEstado como props e igual la funcion de busqueda

    const handleInputChange = (e) => {
        //esta funcion al ser de un input recibe un evento "e"
        setCity(e.target.value); //actualizamos el estado con el valor del input
    };

    const handleSubmit = (e) => {
        //esta funcion captura el envio del formulario
        e.preventDefault(); //esto hace que la pagina no se recargue al enviar el formulario
        onSearch(city.trim());
    };

    return (
        <form 
            onSubmit={handleSubmit}
            className=" text-center my-10 "
        >
            <input
                type="text"
                placeholder="Escribe una ciudad..."
                onChange={handleInputChange}
                className=" flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg mr-4 text-gray-100 dark:bg-gray-800 dark:text-gray-200"
            />
            <button 
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition duration-300 font-semibold"
            >
               Consultar <Search className="inline-block ml-2" />
            </button>
        </form>
    );
};

export default WeatherSearch;
