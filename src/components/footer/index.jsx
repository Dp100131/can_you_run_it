export function Footer() {

    return(
        <footer className="bg-primary rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col gap-y-3">
                    <div>
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">Integrantes:</span>
                        </a>
                    </div> 
                    <div>
                        <ul className="flex flex-col mb-6 text-sm font-medium text-white  sm:mb-0 dark:text-gray-400"> 
                            <li>Brayan Yesid Quintero santander - 2221707</li>
                            <li>Daniel Andrés Pinto Ortega - 2190558</li>
                        </ul>
                    </div> 
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-white  sm:text-center dark:text-white ">© 2023 <a href="https://flowbite.com/" className="hover:underline">Can you run it?</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
    
}