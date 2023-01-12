import React from 'react'
import { Container } from 'react-bootstrap';
import '../style/component/footer.css'

const CompFoot = () => {
    return (

        <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
        </footer>

    )
}
export default CompFoot;