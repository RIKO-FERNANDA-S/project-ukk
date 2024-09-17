'use client';
import React from 'react'
import Image from 'next/image';
import Logo from "../../../public/icon.png"

export default function footer() {
  return (
    <main className='bg-cyan-300'>
<footer className="footer text-base-content p-10">
  <aside>
    <Image src={Logo} alt='logo' className='w-24'/>
    <p>
      SMK Darma Siswa 1 Sidoarjo
      <br />
      by Riko Fernanda Saputra | 2024
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </main>
  )
}
