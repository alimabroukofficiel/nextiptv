'use client'
import Image from 'next/image'
import React, { useState , useEffect } from 'react';
import iconButtom from '../assets/icons/bottom.svg'
import Link from 'next/link';
import iconBack from '../assets/icons/back.svg'
import england from '../../../public/assets/flags/england.svg'
import {countries} from '../data/flags'
export default function Header() {
    const [menu , setMenu] = useState('الرئيسية')
    const [lang , setLang] = useState(england)
    const [activeLang , setActiveLang] = useState(true)
    const [headerstate , setHeaderstate] = useState(false)
    useEffect(() => {
        const body = document.querySelector('body');
        const header = document.querySelector('header');
    
        const handleOverflow = () => {
          if (header.classList.contains('active')) {
            body.style.overflow = 'hidden';
          } else {
            body.style.overflow = 'auto';
          }
        };
    
        handleOverflow(); // Set initial state on mount
    
        // Listen for changes in header's class
        const observer = new MutationObserver(handleOverflow);
        observer.observe(header, { attributes: true });
    
        return () => {
          observer.disconnect();
        };
      }, []);
  return (
<header className={`${headerstate ? 'active' : ""}`} >
            <div className="left__sec">
                <a href="" className="logo__svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" fill="#FF5C28" viewBox="0 0 21 24"><path d="M20.466 11.109c.876-4.8-2.049-9.093-6.627-10.519C5.709-1.94-.052 5.506.014 13.015c.053 6.066 1.354 10.098 1.354 10.101-.058-.18 1.536-1.02 1.72-1.114.625-.32 1.28-.582 1.944-.802 1.372-.456 2.79-.743 4.197-1.064 4.399-1.006 9.127-2.902 10.81-7.47.19-.515.33-1.036.427-1.557Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="24" fill="#ffffffff" viewBox="0 0 88 24"><path fill="#fff" d="M1.201 14.84c.726.44 2.232.934 3.4.934 1.192 0 1.685-.39 1.685-1.038 0-.674-.389-.986-1.842-1.478-2.647-.882-3.657-2.31-3.631-3.814 0-2.386 2.024-4.175 5.16-4.175 1.479 0 2.777.364 3.555.752l-.674 2.724c-.57-.311-1.686-.726-2.75-.726-.959 0-1.503.39-1.503 1.012s.492.934 2.047 1.478c2.412.83 3.4 2.075 3.426 3.917 0 2.386-1.842 4.123-5.473 4.123-1.66 0-3.138-.389-4.097-.908l.697-2.8ZM16.288 2.157V5.58h2.826v2.906h-2.826v4.589c0 1.53.388 2.23 1.554 2.23.545 0 .806-.026 1.167-.104l.026 2.984c-.493.18-1.454.336-2.543.336-1.271 0-2.334-.44-2.982-1.088-.726-.752-1.088-1.97-1.088-3.762V3.219l3.866-1.062ZM33.795 11.78c0 4.642-3.294 6.769-6.692 6.769-3.709 0-6.561-2.439-6.561-6.535 0-4.123 2.696-6.745 6.796-6.745 3.863 0 6.457 2.67 6.457 6.51Zm-9.182.128c0 2.179.91 3.814 2.594 3.814 1.555 0 2.516-1.53 2.516-3.84 0-1.866-.726-3.786-2.516-3.786-1.867.001-2.594 1.946-2.594 3.812ZM36.234 9.756c0-1.867-.026-3.085-.104-4.175h3.373l.155 2.336h.102c.648-1.868 2.18-2.646 3.426-2.646.362 0 .544.026.828.078v3.708a5.867 5.867 0 0 0-1.062-.104c-1.454 0-2.438.778-2.696 1.997a4.66 4.66 0 0 0-.077.883v6.431h-3.944V9.756h-.001ZM49.513 5.58l1.894 6.252c.208.726.466 1.684.622 2.36h.104c.156-.7.363-1.634.544-2.386l1.581-6.225h4.202l-2.956 8.353c-1.816 5.057-3.034 7.053-4.46 8.325-1.349 1.192-2.801 1.634-3.787 1.738l-.858-3.32c.496-.103 1.116-.338 1.712-.674.597-.31 1.272-.959 1.635-1.581.13-.208.207-.416.207-.57 0-.156-.026-.338-.154-.649L45.13 5.584h4.383V5.58ZM64.532 2.157V5.58h2.827v2.906h-2.827v4.589c0 1.53.389 2.23 1.555 2.23.544 0 .804-.026 1.166-.104l.026 2.984c-.492.18-1.452.336-2.542.336-1.27 0-2.334-.44-2.982-1.088-.726-.752-1.089-1.97-1.089-3.762V3.219l3.866-1.062ZM72.547 13.18c.103 1.634 1.738 2.412 3.579 2.412 1.348 0 2.438-.18 3.5-.544l.519 2.67c-1.298.545-2.879.805-4.59.805-4.306 0-6.77-2.489-6.77-6.457 0-3.217 1.996-6.77 6.405-6.77 4.097 0 5.655 3.19 5.655 6.328 0 .674-.078 1.272-.13 1.556h-8.168Zm4.643-2.698c0-.96-.415-2.567-2.23-2.567-1.662 0-2.336 1.53-2.439 2.567h4.669ZM83.208 18.263h3.942V.454l-3.942 1.085v16.724Z"></path></svg>
                </a>
            </div>
            <div className="right__sec">
                <div className="nav__menu">
                    <ul className="nav__list">
                    <li className="nav__item"><Link href="/" onClick={()=>{ setMenu('الرئيسية') ; setHeaderstate(prevState => !prevState); setHeaderstate(prevState => !prevState)}} className={`nav__link ${menu === 'الرئيسية' ? 'border' : ''}`}>الرئيسية</Link></li>
                    <li className="nav__item"><Link href="/" onClick={()=>{ setMenu('قائمة القنوات'); setHeaderstate(prevState => !prevState)}}className={`nav__link ${menu === 'قائمة القنوات' ? 'border' : ''}`}>قائمة القنوات</Link></li>
                    <li className="nav__item"><Link href="/" onClick={()=>{ setMenu('تتبيت'); setHeaderstate(prevState => !prevState)}}className={`nav__link ${menu === 'تتبيت' ? 'border' : ''}`}>تتبيت</Link></li>
                    <li className="nav__item"><Link href="/"  onClick={()=>{ setMenu('من نحن'); setHeaderstate(prevState => !prevState)}}className={`nav__link ${menu === 'من نحن' ? 'border' : ''}`}>من نحن</Link></li>
                    <li className="nav__item"><Link href="/" onClick={()=>{ setMenu('أسئلة متكررة'); setHeaderstate(prevState => !prevState)}}className={`nav__link ${menu === 'أسئلة متكررة' ? 'border' : ''}`}>أسئلة متكررة</Link></li>
                    <li className="nav__item"><Link href="/contact-us" onClick={()=>{ setMenu('تواصل معنا'); setHeaderstate(prevState => !prevState)}}className={`nav__link ${menu === 'تواصل معنا' ? 'border' : ''}`}>تواصل معنا </Link></li>
                    </ul>
                </div>
                <div className="btns__item">
                    <Link href={"pricing"}> <button className='btn__submit'> اشترك الآن</button> </Link>
                    <a  className={`btn__lang`} onClick={()=>{setActiveLang(prevState => !prevState)}} >
                        <Image src={lang} alt='falg' width={22} height={22}/>
                        <Image className={` icon__button ${activeLang ? '' : "active"}`} src={iconButtom} alt='icon menu' width={20} height={20} style={{opacity:".8"}} priority />                        
                    </a>

                    <div className={`selectLang__container ${activeLang ? 'active' : ""}`} >
                        <div className="slectLang__header">
                            <h3>اختر لغتك</h3>
                            <i className='icon__circle' onClick={()=>{setActiveLang(prevState => !prevState)}}>
                                <Image src={iconBack}alt='icon' width={20} height={20}/>
                            </i>
                        </div>
                        <div className="slectLang__list">
                            {
                                countries.map(item =>(
                                    <div key={item.id}>
                                        <Link href={`/${item.to}`}> 
                                        <div className="slectLang__item"  onClick={()=>{setLang(item.svg); setActiveLang(true)}}>
                                                <Image src={item.svg} alt='' width={27} height={27}/>
                                                <span>{item.name} </span>
                                        </div>
                                        </Link>  
                                    </div>
                               
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={`icon__menu `} onClick={()=>{setHeaderstate(prevState => !prevState)}} >
                    <Image src={iconButtom} alt='icon menu' width={22} height={22}  priority />
            </div>
</header>

  )
}




// const [isClicked, setIsClicked] = useState(false);
// const [menu , setMenu] = useState('الرئيسية')
// const handleClick = () => {
    
//   setIsClicked(!isClicked);   
//  };
//  const hiddenMeny = ()=>{
//     setIsClicked(!isClicked);   
//     document.body.style.overflow = "auto";
//  }
// const [lang, setlang] = useState(false);
// const handleLang = (e) => {
//     e.preventDefault()
//     setlang(!lang);
// };
// useEffect(() => {
//     if (isClicked) {
//         document.body.style.overflow = "hidden";
//     } else {
//         document.body.style.overflow = "auto";
//     }
// }, [isClicked]);