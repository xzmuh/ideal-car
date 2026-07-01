import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  AnimatedSection,
  AnimatedTitle,
  FadeIn,
  PremiumButton,
  PremiumCard,
  RevealOnScroll,
  StaggerContainer,
  StaggerItem
} from './components/animations';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const logoUrl = new URL('../references/logo.jpg', import.meta.url).href;
const whatsappBase = 'https://wa.me/5514991062069';
const heroImage = new URL('../references/fotos/header.jpeg', import.meta.url).href;
const civicImage = new URL('../references/fotos/estoque/honda-civic-2020.jpg', import.meta.url).href;
const corollaImage = new URL('../references/fotos/estoque/toyota-corolla-2021.jpg', import.meta.url).href;
const onixImage = new URL('../references/fotos/estoque/chevrolet-onix-2022.jpg', import.meta.url).href;
const hb20Image = new URL('../references/fotos/estoque/hyundai-hb20-2023-optimized.jpg', import.meta.url).href;
const tcrossImage = new URL('../references/fotos/estoque/volkswagen-tcross-2022-optimized.jpg', import.meta.url).href;
const jeepImage = new URL('../references/fotos/estoque/jeep-compass-2021-optimized.jpg', import.meta.url).href;
const toroImage = new URL('../references/fotos/estoque/fiat-toro-optimized.jpg', import.meta.url).href;
const kicksImage = new URL('../references/fotos/estoque/nissan-kicks-2022.jpg', import.meta.url).href;
const bmwImage = new URL('../references/fotos/estoque/bmw-320i-2020.jpg', import.meta.url).href;
const serviceCards = [
  {
    title: 'Compra e venda',
    text: 'Você encontra boas oportunidades ou negocia seu veículo atual com avaliação clara e atendimento próximo.',
    icon: (
      <path
        d="M3 13h18M5 13l2-5h10l2 5M7 13v4m10-4v4M6 17h2m8 0h2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    )
  },
  {
    title: 'Troca e financiamento',
    text: 'Use seu carro como parte da negociação e avalie condições de financiamento antes de decidir.',
    icon: (
      <path
        d="M7 7h11m0 0-3-3m3 3-3 3M17 17H6m0 0 3 3m-3-3 3-3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    )
  },
  {
    title: 'Seguro automotivo',
    text: 'Cotação orientada para proteger seu veículo conforme perfil, rotina e tipo de uso.',
    icon: (
      <path
        d="M9 12l2 2 4-4m5-4.5A11.7 11.7 0 0 1 12 3 11.7 11.7 0 0 1 4 5.5V11c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10V5.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    )
  }
];

const stockCards = [
  { name: 'Honda Civic Touring', price: 138900, year: 2020, km: 62400, transmission: 'Automático', category: 'Sedan', image: civicImage },
  { name: 'Toyota Corolla XEI', price: 124900, year: 2021, km: 48700, transmission: 'Automático', category: 'Sedan', image: corollaImage },
  { name: 'Chevrolet Onix Premier', price: 82900, year: 2022, km: 39100, transmission: 'Automático', category: 'Hatch', image: onixImage },
  { name: 'Hyundai HB20 Platinum', price: 78900, year: 2023, km: 28400, transmission: 'Automático', category: 'Hatch', image: hb20Image },
  { name: 'Jeep Compass Longitude', price: 156900, year: 2021, km: 51700, transmission: 'Automático', category: 'SUV', image: jeepImage },
  { name: 'Volkswagen T-Cross Highline', price: 132900, year: 2022, km: 42600, transmission: 'Automático', category: 'SUV', image: tcrossImage },
  { name: 'Fiat Toro Volcano', price: 149900, year: 2021, km: 58900, transmission: 'Automático', category: 'Pickup', image: toroImage },
  { name: 'Nissan Kicks Advance', price: 104900, year: 2022, km: 45300, transmission: 'Automático', category: 'SUV', image: kicksImage },
  { name: 'BMW 320i GP', price: 219900, year: 2020, km: 35800, transmission: 'Automático', category: 'Sedan', image: bmwImage }
];

const idealOptions = [
  { category: 'Compra', title: 'Comprar veículo', text: 'Atendimento para encontrar a opção certa sem pressa e sem negociação confusa.', highlights: ['Curadoria Ideal', 'Transparência', 'Acompanhamento'] },
  { category: 'Venda', title: 'Vender veículo', text: 'Avaliação justa e visibilidade para vender seu carro com agilidade, clareza e segurança.', highlights: ['Avaliação clara', 'Divulgação', 'Negociação segura'] },
  { category: 'Troca', title: 'Trocar veículo', text: 'Use seu carro na negociação e avance para um modelo mais adequado ao seu momento.', highlights: ['Seu usado na troca', 'Boas opções', 'Processo simples'] },
  { category: 'Financiamento', title: 'Financiar', text: 'Simulações personalizadas para encontrar uma parcela que caiba no seu planejamento.', highlights: ['Simulação rápida', 'Condições claras', 'Suporte completo'] },
  { category: 'Seguro', title: 'Seguro automotivo', text: 'Proteção para seu veículo, sua rotina e seu bolso desde o primeiro dia.', highlights: ['Cobertura ideal', 'Assistência', 'Cotação orientada'] },
  { category: 'Contato', title: 'Atendimento direto', text: 'Fale com nosso time pelo WhatsApp e resolva tudo com praticidade e proximidade.', highlights: ['Resposta rápida', 'Atendimento humano', 'Ideal Agudos'] }
];

function WhatsIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function SiteHeader({ dark = false }) {
  const homePrefix = window.location.pathname === '/estoque' ? '/' : '';
  const textClass = dark ? 'text-dark hover:text-primary' : 'text-white hover:text-primary';
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ['Início', 'Serviços', 'Como funciona', 'Estoque', 'Contato'];
  const navTargets = ['#inicio', '#servicos', '#como-funciona', '#estoque-preview', '#contato'];

  useEffect(() => {
    const handleScroll = () => setHidden(window.scrollY > 88);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`hero-nav z-50 flex w-full items-center justify-between px-4 py-3 transition-all duration-500 sm:px-5 sm:py-5 lg:px-10 ${hidden && !menuOpen ? 'pointer-events-none -translate-y-4 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100' : 'translate-y-0 opacity-100'} ${dark ? 'mobile-stock-nav sticky top-0 border-b border-gray-100 bg-white/90 backdrop-blur-xl' : 'mobile-hero-nav absolute left-0 right-0 top-0'}`}>
      <a className="flex items-center gap-2.5" href={`${homePrefix}#inicio`} aria-label="Ideal Veículos">
        <img alt="Logo Ideal Veículos" className="h-10 w-10 rounded-full bg-white object-contain p-1 ring-1 ring-black/5 sm:h-11 sm:w-11" src={logoUrl} />
        <span className={`${dark ? 'text-dark' : 'text-dark md:text-white'} text-lg font-black tracking-tight sm:text-xl`}>Ideal<span className="text-primary">.</span></span>
      </a>
      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item, index) => (
          <a className={`${textClass} text-sm font-semibold transition-colors`} href={`${homePrefix}${navTargets[index]}`} key={item}>{item}</a>
        ))}
      </nav>
      <PremiumButton className={`${dark ? 'bg-dark text-white' : 'bg-white text-dark'} hero-cta hidden min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors hover:bg-primary hover:text-white md:flex`} href={`${whatsappBase}?text=Olá,%20vim%20pelo%20site%20da%20Ideal%20Veículos%20e%20quero%20atendimento.`} rel="noopener" target="_blank">WhatsApp <WhatsIcon /></PremiumButton>
      <button aria-expanded={menuOpen} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} className={`${dark ? 'bg-dark text-white' : 'bg-white text-dark'} flex h-10 min-w-16 items-center justify-center rounded-full px-4 text-xs font-black uppercase tracking-wider shadow-lg md:hidden`} onClick={() => setMenuOpen((open) => !open)} type="button">{menuOpen ? 'Fechar' : 'Menu'}</button>
      <nav className={`absolute left-3 right-3 top-[4.25rem] overflow-hidden rounded-2xl bg-white/95 p-2 text-dark shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}>
        {navItems.map((item, index) => <a className="flex min-h-11 items-center justify-between rounded-xl px-4 text-sm font-bold hover:bg-soft" href={`${homePrefix}${navTargets[index]}`} key={item} onClick={() => setMenuOpen(false)}>{item}<span className="text-primary">→</span></a>)}
      </nav>
    </header>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });

      intro
        .from('.hero-copy', { y: 34, opacity: 0, filter: 'blur(8px)', duration: 0.9 })
        .from('.hero-title span', { yPercent: 115, opacity: 0, filter: 'blur(10px)', duration: 0.62, stagger: 0.035 }, '-=0.34')
        .from('.hero-float', { y: 28, opacity: 0, filter: 'blur(8px)', duration: 0.82 }, '-=0.42')
        .from('.hero-cta', { y: 12, opacity: 0, filter: 'blur(6px)', duration: 0.68 }, '-=0.58');

      gsap.to(imageRef.current, {
        scale: 1.08,
        yPercent: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8
        }
      });
    },
    { scope: heroRef }
  );

  return (
    <section className="relative bg-white p-3 sm:p-5 lg:p-7" id="inicio" ref={heroRef}>
      <div className="hero-card relative h-[78svh] min-h-[560px] overflow-hidden rounded-[1.5rem] bg-zinc-900 shadow-premium sm:h-[82vh] sm:min-h-[620px] sm:rounded-[2rem]">
        <img
          alt="Carro em destaque"
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] will-change-transform sm:object-center"
          ref={imageRef}
          src={heroImage}
        />

        <SiteHeader />

        <div className="hero-copy absolute left-5 right-5 top-24 z-20 max-w-md sm:left-10 sm:right-auto lg:top-28">
          <p className="inline-flex rounded-full border border-white/20 px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.16em] text-dark glass-effect sm:px-4 sm:text-xs sm:tracking-[0.24em]">
            Compra | Venda | Troca | Financiamento
          </p>
          <p className="mt-4 max-w-[18rem] text-base font-semibold leading-6 text-white/90 sm:mt-5 sm:max-w-none sm:text-lg sm:leading-7">
            Seu novo carro está aqui, com atendimento direto em Agudos.
          </p>
        </div>

        <div className="absolute bottom-2 left-0 right-0 z-10 px-4 text-center lg:bottom-0">
          <h1 className="hero-title select-none overflow-hidden text-[clamp(3rem,15vw,4.4rem)] font-black uppercase leading-[0.82] tracking-[-0.085em] text-white sm:text-[7rem] lg:text-[11rem] xl:text-[13rem]">
            <span className="inline-block">Ideal</span>{' '}
            <span className="inline-block">Veículos</span>
          </h1>
        </div>

        <div className="hero-float absolute bottom-8 left-6 z-20 hidden max-w-sm rounded-3xl p-6 text-dark glass-effect lg:block">
          <p className="text-xs font-black uppercase tracking-[0.26em] text-primary">R. Jose de Rosas, 445</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Compra, venda, troca, financiamento e seguro automotivo com orientação clara do início ao fim.
          </p>
        </div>
      </div>
    </section>
  );
}

function BrandStrip() {
  return (
    <AnimatedSection className="border-b border-gray-100 bg-white pb-10 pt-5 sm:pb-12 sm:pt-6">
      <div className="container mx-auto px-4">
        <StaggerContainer
          className="hide-scrollbar flex items-center justify-start gap-8 overflow-x-auto pb-2 text-gray-300 sm:flex-wrap sm:justify-between sm:overflow-visible"
          amount={0.35}
        >
          {['Compra', 'Venda', 'Troca', 'Financiamento', 'Seguro', 'Agudos'].map((item) => (
            <StaggerItem as="span" className="shrink-0 text-xl font-black tracking-tight opacity-70 sm:text-2xl" key={item}>
              {item}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}

function Services() {
  const servicesRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        gsap.from('.service-card', {
          y: 54,
          opacity: 0,
          filter: 'blur(8px)',
          duration: 0.58,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      mm.add('(max-width: 1023px)', () => {
        gsap.from('.service-card', {
          y: 42,
          opacity: 0,
          filter: 'blur(8px)',
          duration: 0.58,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 88%'
          }
        });
      });

      return () => mm.revert();
    },
    { scope: servicesRef }
  );

  return (
    <section
      id="servicos"
      className="mx-3 mt-5 overflow-hidden rounded-[2rem] bg-dark py-16 text-white dark-texture sm:mx-4 sm:mt-8 sm:rounded-[3rem] sm:py-24"
      ref={servicesRef}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:mb-16 sm:gap-8 lg:flex-row">
          <div className="max-w-xl">
            <FadeIn as="span" className="service-kicker text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Nossos serviços
            </FadeIn>
            <AnimatedTitle
              as="h2"
              className="service-title text-3xl font-black leading-tight sm:text-4xl lg:text-5xl"
              text="Um atendimento completo para seu próximo carro"
            />
          </div>
          <FadeIn className="service-copy max-w-md text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            A Ideal Veículos une negociação, documentação, financiamento e seguro em uma experiência simples, elegante e
            objetiva.
          </FadeIn>
        </div>
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          amount={0.2}
        >
          {serviceCards.map((card) => (
            <PremiumCard
              className="service-card frosted-dark-card group rounded-3xl p-6 transition-colors hover:border-primary/70 sm:p-8 lg:p-10"
              key={card.title}
              reveal={false}
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 ring-1 ring-white/10 group-hover:bg-primary transition-colors">
                <svg className="h-8 w-8 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-7">{card.text}</p>
            </PremiumCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = idealOptions[activeIndex];

  return (
    <section id="como-funciona" className="overflow-hidden bg-white py-12 soft-texture sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-9 text-center sm:mb-12">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary sm:mb-4 sm:text-sm">Opções Ideal</span>
          <h2 className="text-3xl font-black sm:text-4xl lg:text-6xl">Escolha o caminho do seu próximo carro</h2>
          <div className="filter-marquee -mx-4 mt-7 overflow-hidden sm:mx-auto sm:mt-9 sm:max-w-3xl">
            <div className="filter-marquee-track flex w-max gap-2 py-2">
              {[...idealOptions.slice(0, 5), ...idealOptions.slice(0, 5)].map((item, index) => {
                const optionIndex = index % 5;
                return <button aria-hidden={index >= 5} aria-pressed={activeIndex === optionIndex} className={`min-h-11 shrink-0 rounded-full px-6 py-3 text-sm font-bold transition-all sm:px-7 ${activeIndex === optionIndex ? 'bg-dark text-white shadow-lg' : 'bg-white text-muted ring-1 ring-gray-200 hover:text-primary'}`} key={`${item.category}-${index}`} onClick={() => setActiveIndex(optionIndex)} tabIndex={index >= 5 ? -1 : 0} type="button">{item.category}</button>;
              })}
            </div>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
          <StaggerContainer className="options-rail hide-scrollbar relative -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-3 pt-2 lg:mx-0 lg:block lg:space-y-2 lg:overflow-visible lg:px-0 lg:pb-0 lg:before:absolute lg:before:bottom-8 lg:before:left-6 lg:before:top-8 lg:before:w-px lg:before:bg-gray-200">
            {idealOptions.map((item, index) => (
              <StaggerItem as="button" className={`relative z-10 flex min-w-[82vw] snap-center items-center gap-3 rounded-2xl p-4 text-left transition-all sm:min-w-[330px] lg:w-full lg:min-w-0 lg:gap-4 ${activeIndex === index ? 'bg-white shadow-card ring-1 ring-primary/30' : 'bg-white/60 hover:bg-white/70'}`} key={item.title} onClick={() => setActiveIndex(index)} type="button">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-black ${activeIndex === index ? 'bg-primary text-white' : 'bg-white text-dark ring-1 ring-gray-200'}`}>{String(index + 1).padStart(2, '0')}</span>
                <span><strong className="block text-base">{item.title}</strong><small className="mt-1 block leading-5 text-muted">{item.text.slice(0, 58)}...</small></span>
                <span className="ml-auto text-xl text-muted">›</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <RevealOnScroll className="option-panel relative min-h-0 overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-premium sm:min-h-[580px] sm:rounded-[2rem] sm:p-11">
            <span className="absolute right-7 top-3 text-[8rem] font-black leading-none text-dark/[0.035] sm:text-[11rem]">{String(activeIndex + 1).padStart(2, '0')}</span>
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex rounded-full border border-primary/20 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">{active.category}</span>
              <h3 className="mt-6 text-3xl font-black sm:mt-7 sm:text-6xl">{active.title}</h3>
              <div className="my-7 h-1 w-14 rounded-full bg-primary" />
              <p className="max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">{active.text}</p>
            </div>
            <div className="relative z-10 mt-12 grid gap-3 sm:grid-cols-3">
              {active.highlights.map((item, index) => <div className="rounded-2xl border border-gray-200 bg-white/90 p-4" key={item}><span className="mb-2 block text-xl text-primary">{['◇', '⌕', '◎'][index]}</span><strong className="text-sm">{item}</strong></div>)}
            </div>
            <div className="absolute bottom-16 right-[-8%] hidden h-40 w-[58%] rounded-[50%] bg-gradient-to-r from-primary/10 via-primary to-dark car-shape opacity-90 lg:block" />
            <PremiumButton className="relative z-10 mt-9 flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-dark px-8 py-4 font-bold text-white transition-colors hover:bg-primary sm:inline-flex sm:w-auto" href={`${whatsappBase}?text=Olá,%20quero%20saber%20mais%20sobre%20${encodeURIComponent(active.title)}.`} rel="noopener" target="_blank">Falar com a Ideal <WhatsIcon /></PremiumButton>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function formatPrice(price) { return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }); }
function formatKm(km) { return `${km.toLocaleString('pt-BR')} km`; }

function VehicleCard({ car }) {
  return <PremiumCard className="group overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-gray-200/80 transition-all">
    <div className="relative h-44 overflow-hidden bg-gradient-to-br from-stone-100 via-white to-orange-50 sm:h-52 lg:h-56">
      {car.image ? <img alt={car.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={car.image} /> : <><div className="absolute inset-0 stock-grid" /><div className="absolute bottom-12 left-1/2 h-24 w-[78%] -translate-x-1/2 bg-gradient-to-br from-dark via-zinc-600 to-primary car-shape" /></>}
      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-wider text-primary sm:left-4 sm:top-4 sm:text-xs">{car.category}</span>
    </div>
    <div className="p-4 sm:p-5"><div className="flex items-start justify-between gap-3"><h3 className="text-lg font-black leading-tight sm:text-xl">{car.name}</h3><span className="whitespace-nowrap text-base font-black text-primary sm:text-lg">{formatPrice(car.price)}</span></div>
      <div className="my-3.5 flex flex-wrap gap-1.5 text-[0.68rem] font-semibold text-muted sm:my-5 sm:gap-2 sm:text-xs"><span className="rounded-full bg-gray-100 px-2.5 py-1.5 sm:px-3 sm:py-2">{car.year}</span><span className="rounded-full bg-gray-100 px-2.5 py-1.5 sm:px-3 sm:py-2">{car.transmission}</span><span className="rounded-full bg-gray-100 px-2.5 py-1.5 sm:px-3 sm:py-2">{formatKm(car.km)}</span></div>
      {/* <PremiumButton className="block min-h-11 rounded-full bg-dark px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-primary" href={`${whatsappBase}?text=Ola,%20tenho%20interesse%20no%20${encodeURIComponent(car.name)}.`} rel="noopener" target="_blank">Tenho interesse</PremiumButton> */}
    </div>
  </PremiumCard>;
}

function StockPreview() {
  return (
    <AnimatedSection id="estoque-preview" className="border-t border-gray-100 bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center sm:mb-14">
          <FadeIn as="span" className="text-primary font-bold text-lg mb-3 block">
            Estoque
          </FadeIn>
          <AnimatedTitle
            as="h2"
            className="text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl"
            text="Explore nosso estoque"
          />
          <div className="filter-marquee -mx-4 mt-7 overflow-hidden sm:mx-0 sm:mt-9">
            <div className="filter-marquee-track flex w-max gap-2 py-2">
              {[...['Todos', 'SUV', 'Sedan', 'Hatch', 'Pickup'], ...['Todos', 'SUV', 'Sedan', 'Hatch', 'Pickup']].map((item, index) => (
                <span aria-hidden={index >= 5} className={`min-w-24 shrink-0 rounded-full px-6 py-3 text-sm font-semibold shadow-sm ${index % 5 === 0 ? 'bg-slate-950 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200'}`} key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <StaggerContainer
          className="stock-preview-grid relative grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          amount={0.15}
        >
          {stockCards.slice(0, 6).map((car, index) => <StaggerItem className={index > 2 ? 'hidden md:block' : ''} key={car.name}><VehicleCard car={car} /></StaggerItem>)}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-white via-white/80 to-transparent md:hidden" />
        </StaggerContainer>

        <RevealOnScroll className="relative z-20 -mt-8 text-center md:mt-12">
          <PremiumButton
            className="inline-flex min-h-12 rounded-full bg-slate-950 px-9 py-4 text-sm font-bold text-white shadow-xl transition-colors hover:bg-primary"
            href="/estoque"
          >
            Ver todos
          </PremiumButton>
        </RevealOnScroll>
      </div>
    </AnimatedSection>
  );
}

function StockFilters({ search, setSearch, category, setCategory, maxPrice, setMaxPrice, compact = false }) {
  return (
    <div className={compact ? 'pt-4' : ''}>
      <label className="block text-[0.68rem] font-black uppercase tracking-wider text-muted">
        Buscar
        <input className="mt-2 min-h-11 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary" onChange={(event) => setSearch(event.target.value)} placeholder="Marca ou modelo" type="search" value={search} />
      </label>
      <fieldset className="mt-5">
        <legend className="text-[0.68rem] font-black uppercase tracking-wider text-muted">Tipo de veículo</legend>
        <div className="hide-scrollbar -mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1 lg:block lg:space-y-2 lg:overflow-visible lg:px-0">
          {['Todos', 'SUV', 'Sedan', 'Hatch', 'Pickup'].map((item) => (
            <button className={`min-h-10 shrink-0 rounded-xl px-4 py-2 text-left text-sm font-bold transition-colors lg:block lg:w-full ${category === item ? 'bg-primary text-white' : 'bg-gray-50 hover:bg-gray-100'}`} key={item} onClick={() => setCategory(item)} type="button">{item}</button>
          ))}
        </div>
      </fieldset>
      <label className="mt-5 block text-[0.68rem] font-black uppercase tracking-wider text-muted">
        Até {formatPrice(maxPrice)}
        <input className="mt-3 w-full accent-primary" max="220000" min="80000" onChange={(event) => setMaxPrice(Number(event.target.value))} step="10000" type="range" value={maxPrice} />
      </label>
    </div>
  );
}

function StockPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');
  const [maxPrice, setMaxPrice] = useState(220000);
  const [sort, setSort] = useState('relevant');
  const filteredCars = useMemo(() => {
    const list = stockCards.filter((car) => car.name.toLowerCase().includes(search.toLowerCase()) && (category === 'Todos' || car.category === category) && car.price <= maxPrice);
    return [...list].sort((a, b) => sort === 'price-asc' ? a.price - b.price : sort === 'price-desc' ? b.price - a.price : b.year - a.year);
  }, [search, category, maxPrice, sort]);

  return (
    <><SiteHeader dark /><main className="min-h-screen bg-soft py-7 text-dark sm:py-12 lg:py-16"><div className="container mx-auto px-3.5 sm:px-4">
      <div className="mb-5 sm:mb-8 md:flex md:items-end md:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-primary sm:text-sm">Ideal Veículos</p><h1 className="mt-1.5 text-3xl font-black sm:mt-2 sm:text-5xl lg:text-6xl">Estoque em Agudos</h1><p className="mt-2 text-sm text-muted sm:mt-3 sm:text-base">{filteredCars.length} veículos encontrados.</p></div>
        <label className="mt-4 flex items-center justify-between text-xs font-bold text-muted md:mt-0 md:block md:text-sm">Ordenar<select className="ml-3 min-h-10 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-dark sm:min-h-11" onChange={(event) => setSort(event.target.value)} value={sort}><option value="relevant">Mais recentes</option><option value="price-asc">Menor preço</option><option value="price-desc">Maior preço</option></select></label></div>
      <details className="group mb-5 rounded-2xl bg-white px-4 shadow-card ring-1 ring-gray-200 lg:hidden"><summary className="flex min-h-12 cursor-pointer list-none items-center justify-between text-sm font-black">Filtros <span className="text-primary transition-transform group-open:rotate-45">+</span></summary><StockFilters category={category} compact maxPrice={maxPrice} search={search} setCategory={setCategory} setMaxPrice={setMaxPrice} setSearch={setSearch} /><button className="mb-4 mt-3 w-full rounded-xl bg-gray-100 py-2.5 text-xs font-black text-primary" onClick={() => { setSearch(''); setCategory('Todos'); setMaxPrice(220000); }} type="button">Limpar filtros</button></details>
      <div className="grid gap-5 sm:gap-7 lg:grid-cols-[240px_1fr]"><aside className="hidden h-fit rounded-3xl bg-white p-5 shadow-card ring-1 ring-gray-200 lg:block"><div className="flex items-center justify-between"><h2 className="text-xl font-black">Filtros</h2><button className="min-h-10 px-2 text-xs font-black text-primary" onClick={() => { setSearch(''); setCategory('Todos'); setMaxPrice(220000); }} type="button">Limpar</button></div><StockFilters category={category} maxPrice={maxPrice} search={search} setCategory={setCategory} setMaxPrice={setMaxPrice} setSearch={setSearch} /></aside>
        <section><div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">{filteredCars.map((car) => <VehicleCard car={car} key={car.name} />)}</div>{filteredCars.length === 0 && <div className="rounded-3xl bg-white p-8 text-center shadow-card sm:p-12"><h2 className="text-xl font-black sm:text-2xl">Nenhum veículo encontrado</h2><p className="mt-3 text-sm text-muted sm:text-base">Ajuste os filtros para ver outras opções.</p></div>}</section></div>
    </div></main><Footer /></>
  );
}

function Insurance() {
  return (
    <AnimatedSection id="seguro" className="overflow-hidden bg-soft py-16 soft-texture sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10 overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-lg sm:rounded-[3rem] sm:p-10 lg:flex-row lg:gap-16 lg:p-20">
          <div className="lg:w-1/2">
            <FadeIn as="span" className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Seguro e protecao
            </FadeIn>
            <AnimatedTitle
              as="h2"
              className="mb-6 text-3xl font-black leading-tight sm:mb-8 sm:text-4xl lg:text-5xl"
              text="Seu carro protegido desde o primeiro dia."
            />
            <FadeIn as="p" className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Além da negociação do veículo, a Ideal Veículos também atende seguro automotivo. Você recebe orientação
              para cotar uma cobertura adequada para seu carro, sua rotina e seu bolso.
            </FadeIn>
            <FadeIn className="mt-8 flex flex-wrap gap-3">
              {['Roubo e furto', 'Colisão', 'Assistência'].map((item) => (
                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-muted" key={item}>
                  {item}
                </span>
              ))}
            </FadeIn>
          </div>
          <RevealOnScroll className="lg:w-1/2 relative flex justify-center">
            <PremiumCard
              as="div"
              className="relative z-10 w-full max-w-sm rotate-[-2deg] rounded-[2.25rem] bg-dark p-3 text-white shadow-2xl sm:rotate-[-4deg] sm:p-4"
            >
              <div className="rounded-[1.75rem] border border-white/10 bg-graphite p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <img alt="Logo Ideal Veículos" className="h-16 w-16 rounded-full bg-white object-contain p-2" src={logoUrl} />
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-black">Agudos</span>
                </div>
                <p className="mt-8 text-sm font-bold uppercase tracking-widest text-primary">Ideal Veículos</p>
                <h3 className="mt-3 text-2xl font-black sm:text-3xl">Compra | Venda | Troca | Financiamento</h3>
                <p className="mt-5 text-white/70 leading-7">
                  R. Jose de Rosas, 445 - Agudos
                  <br />
                  WhatsApp: (14) 99106-2069
                </p>
                <PremiumButton
                  className="mt-8 block rounded-full bg-white py-3 text-center text-sm font-black text-dark transition hover:bg-primary hover:text-white"
                  href={`${whatsappBase}?text=Olá,%20quero%20cotação%20de%20seguro%20automotivo.`}
                  rel="noopener"
                  target="_blank"
                >
                  Cotar seguro
                </PremiumButton>
              </div>
            </PremiumCard>
            <div className="absolute top-10 left-1/2 -z-0 h-72 w-56 translate-x-10 rotate-[6deg] rounded-[2rem] bg-dark/10"></div>
          </RevealOnScroll>
        </div>
      </div>
    </AnimatedSection>
  );
}

function Footer() {
  return (
    <footer id="contato" className="bg-dark pb-8 pt-14 text-white sm:pb-10 sm:pt-20">
      <div className="container mx-auto px-4">
        <FadeIn className="mb-12 flex flex-col items-stretch justify-between rounded-[2rem] border border-zinc-800 bg-zinc-900 p-6 sm:mb-16 sm:p-8 md:flex-row md:items-center lg:p-12">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Fale com a Ideal Veículos</h3>
            <p className="text-gray-400">Seu novo carro está aqui. Atendimento direto em Agudos.</p>
          </div>
          <PremiumButton
            className="min-h-12 rounded-full bg-primary px-8 py-4 text-center font-bold text-white transition-colors hover:bg-white hover:text-primary"
            href={`${whatsappBase}?text=Olá,%20vim%20pelo%20site%20da%20Ideal%20Veículos.`}
            rel="noopener"
            target="_blank"
          >
            Chamar no WhatsApp
          </PremiumButton>
        </FadeIn>

        <div className="mb-12 grid grid-cols-1 gap-10 sm:mb-16 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img alt="Logo Ideal Veículos" className="h-10 w-10 rounded-full bg-white object-contain p-1" src={logoUrl} />
              <span className="text-white font-bold text-2xl tracking-tight">
                Ideal<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Ideal Veículos em Agudos. Compra, venda, troca, financiamento e seguro automotivo.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Compra</li>
              <li>Venda</li>
              <li>Troca</li>
              <li>Financiamento</li>
              <li>Seguro automotivo</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li>R. Jose de Rosas, 445</li>
              <li>Agudos - SP</li>
              <li>(14) 99106-2069</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>Ideal Veículos. Todos os direitos reservados.</p>
          <p>Compra | Venda | Troca | Financiamento | Seguro</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  if (window.location.pathname === '/estoque') {
    return <StockPage />;
  }

  return (
    <>
      <main>
        <Hero />
        <BrandStrip />
        <Services />
        <HowItWorks />
        <StockPreview />
        <Insurance />
      </main>
      <Footer />
    </>
  );
}
