import React from 'react'
import '../style/component/banner.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../src/asset/logo.png'


const Banner = () => {
    return (
        <section class="text-gray-800 background-radial-gradient ">
          <div class="bg-[#11393C] px-6 py-12 md:px-12 lg:text-left h-128 mt-12">
            <div class="container mx-auto">
              <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                <div class="mt-87 lg:mt-32">
                  <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-[#E8E9E4]">
                    Are you ready <br /><span>for an adventure?</span>
                  </h1>
                  <p class="text-[#E8E9E4]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
                    adipisci tenetur repudiandae rerum quos.
                  </p>
                </div>
                <div class="mb-12 lg:mb-0">
                  <div class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Banner;