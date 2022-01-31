/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css'
import { Copyright, Socials } from '../../components';

const Footer = () => {

    return (
        <div className="footer">
            <div className="max-w-6xl mx-auto">
                <div className="primary-nav flex justify-between py-6">
                    <div className="logo">
                        <a href="">Ferhat Cihaner</a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="">HAKKIMDA</a>
                        <a href="">ÇALIŞMALARIMIZ</a>
                        <a href="">YOLCULUĞA BAŞLA</a>
                        <a href="">İLETİŞİM</a>
                    </div>
                </div>
                <div className='flex justify-between pb-12'>
                    <Socials color="#696969"/>
                    <Copyright color="#FFFFFF" />
                </div>
            </div>
        </div>
      );
}

export default Footer