import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    servico: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides do carrossel - NOVO HERO para ABA Transporte
  const heroSlides = [
    {
      id: 1,
      title: 'Escavação e Terraplanagem',
      subtitle: 'Preparação e movimentação de terrenos com equipamentos de última geração.',
      image: '/images/escavadeira.webp',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 2,
      title: 'Nivelamento e Compactação',
      subtitle: 'Base essencial para obras e projetos de construção com segurança e estabilidade.',
      image: '/images/motoniveladora.webp',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 3,
      title: 'Transporte de Materiais',
      subtitle: 'Fornecimento de terra, areia e brita com frota própria de caminhões.',
      image: '/images/caminhao.jpg',
      cta: 'Solicitar Orçamento'
    },
    {
      id: 4,
      title: 'Frota Completa',
      subtitle: 'Escavadeiras, motoniveladoras, rolos compactadores e muito mais.',
      image: '/images/frota.jpg',
      cta: 'Solicitar Orçamento'
    }
  ];

  // Verificar se está em dispositivo móvel
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carrossel automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Navegação do carrossel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Fechar menu ao clicar em um link
  const handleNavClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para enviar formulário de orçamento
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp - ORÇAMENTO
    const whatsappMessage = `Olá ABA Transporte e Terraplanagem! Gostaria de solicitar um orçamento.%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*E-mail:* ${formData.email}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Cidade:* ${formData.cidade || 'Não informada'}%0A` +
      `*Tipo de Serviço:* ${formData.servico}%0A` +
      `*Detalhes:* ${formData.mensagem || 'Sem detalhes adicionais'}`;
    
    // Número da empresa - ATUALIZADO
    const whatsappNumber = '5547991912095';
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Resetar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      servico: '',
      mensagem: ''
    });
    
    // Mostrar mensagem de sucesso
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // Função para solicitar orçamento de serviço específico
  const solicitarOrcamentoServico = (nomeServico) => {
    const whatsappMessage = `Olá ABA Transporte e Terraplanagem! Gostaria de solicitar um orçamento para o serviço de *${nomeServico}*.%0A%0APoderia me passar mais informações sobre valores, disponibilidade e como funciona a contratação?`;
    
    const whatsappNumber = '5547991912095';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp com mensagem do HERO
  const openWhatsAppHero = () => {
    const whatsappMessage = `Olá ABA Transporte e Terraplanagem! Vi o site de vocês e gostaria de mais informações sobre os serviços de terraplanagem e transporte. Podem me ajudar?`;
    
    const whatsappNumber = '5547991912095';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp - Serviço Personalizado
  const openWhatsAppPersonalizado = () => {
    const whatsappMessage = `Olá ABA Transporte e Terraplanagem! Preciso de um serviço que não encontrei listado no site. Gostaria de conversar sobre uma solução personalizada. Podem me atender?`;
    
    const whatsappNumber = '5547991912095';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp - Botão Flutuante
  const openWhatsAppFlutuante = () => {
    const whatsappMessage = `Olá ABA Transporte e Terraplanagem! Gostaria de solicitar um orçamento para serviços de terraplanagem e transporte.`;
    
    const whatsappNumber = '5547991912095';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    handleNavClick();
  };

  // Função para abrir o Instagram - ATUALIZADO
  const openInstagram = () => {
    window.open('https://www.instagram.com/abatterraplanagem', '_blank');
  };

  // Serviços da ABA Transporte e Terraplanagem - ATUALIZADO
  const services = [
    {
      id: 1,
      name: 'Escavadeira Hidráulica',
      description: 'Escavação de terrenos, abertura de valas, fundações e demolições com precisão.',
      image: '/images/escavadeira.webp'
    },
    {
      id: 2,
      name: 'Caminhão Basculante',
      description: 'Transporte de terra, areia, brita e entulho com frota moderna e ágil.',
      image: '/images/caminhao.jfif'
    },
    {
      id: 3,
      name: 'Moto Niveladora',
      description: 'Nivelamento de terrenos para construção civil, estradas e pavimentação.',
      image: '/images/Motoniveladora.jpg'
    },
    {
      id: 4,
      name: 'Rolos Compactadores',
      description: 'Compactação do solo para garantir estabilidade e segurança nas obras.',
      image: '/images/rolocompactadorideal.png'
    },
    {
      id: 5,
      name: 'Pás Carregadeiras',
      description: 'Carregamento de materiais e movimentação de grandes volumes com eficiência.',
      image: '/images/Pacarregadeira.jpg'
    },
    {
      id: 6,
      name: 'Bulldozer',
      description: 'Serviços pesados de terraplenagem, limpeza de terreno e desmatamento.',
      image: '/images/bulldozer.jpg'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'FJM Terraplanagem',
      text: 'A ABA fez toda a terraplanagem do nosso Terreno. Profissionais pontuais, equipamentos modernos e trabalho de primeira qualidade. Recomendo!',
      rating: 5,
      city: 'Camboriú'
    },
    {
      id: 2,
      name: 'Terraplanagem Camboriú',
      text: 'Excelente serviço de nivelamento e compactação para nossa obra industrial. Entregaram antes do prazo e com qualidade impecável.',
      rating: 5,
      city: 'Camboriú'
    },
    {
      id: 3,
      name: 'Olegario Terraplanagem',
      text: 'Precisei de terra para aterro e a ABA entregou com agilidade. Caminhões bem equipados e preço justo. Recomendo!',
      rating: 5,
      city: 'Camboriú'
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: 'Experiência no Setor',
      description: 'Anos de atuação em obras de terraplanagem e transporte na região'
    },
    {
      id: 2,
      title: 'Equipamentos Modernos',
      description: 'Frota atualizada com máquinas de última geração e manutenção em dia'
    },
    {
      id: 3,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e treinados para cada tipo de serviço'
    },
    {
      id: 4,
      title: 'Projetos Personalizados',
      description: 'Soluções sob medida para cada necessidade e terreno'
    },
    {
      id: 5,
      title: 'Compromisso com Prazos',
      description: 'Entregamos no prazo combinado com eficiência e qualidade'
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <div className="logo">
              <img 
                src='/images/Logo.png' 
                alt='ABA Transporte e Terraplanagem'
                className="logo-image"
              />
            </div>
          </div>
          
          {/* Botão do menu hamburger */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); handleNavClick(); }}>Início</a>
            <a href="#servicos" onClick={handleNavClick}>Serviços</a>
            <a href="#sobre" onClick={handleNavClick}>Sobre Nós</a>
            <a href="#avaliacoes" onClick={handleNavClick}>Avaliações</a>
            <a href="#contato" onClick={handleNavClick} className="nav-cta">Solicitar Orçamento</a>
          </nav>
        </div>
      </header>

      {/* ============================================
          NOVO HERO - FORÇA & MOVIMENTO
          ============================================ */}
      <section className="hero-forca-movimento">
        {/* Camadas de fundo com parallax */}
        <div className="hero-background">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-bg-layer ${index === currentSlide ? 'active' : ''}`}
              style={{ 
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="hero-bg-overlay"></div>
            </div>
          ))}
        </div>

        {/* Elementos geométricos animados (representando movimento de terra) */}
        <div className="geo-elements">
          <div className="geo-cube"></div>
          <div className="geo-triangle"></div>
          <div className="geo-line"></div>
          <div className="geo-dots"></div>
          <div className="geo-wave"></div>
          <div className="geo-mountain"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-content-wrapper">          
            {/* Título com destaque */}
            <h1 className="hero-title">
              <span className="title-line">
                <span className="title-word">{heroSlides[currentSlide].title.split(' ')[0]}</span>
                <span className="title-word-highlight">
                  {heroSlides[currentSlide].title.split(' ').slice(1).join(' ')}
                </span>
              </span>
            </h1>

            {/* Descrição animada */}
            <p className="hero-description">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* Cards de serviços rápidos */}
            <div className="hero-service-cards">
              <div className="service-mini-card" onClick={() => solicitarOrcamentoServico('Escavação')}>
                <span className="mini-card-icon">⛏️</span>
                <span className="mini-card-text">Escavação</span>
              </div>
              <div className="service-mini-card" onClick={() => solicitarOrcamentoServico('Nivelamento')}>
                <span className="mini-card-icon">📐</span>
                <span className="mini-card-text">Nivelamento</span>
              </div>
              <div className="service-mini-card" onClick={() => solicitarOrcamentoServico('Compactação')}>
                <span className="mini-card-icon">⚙️</span>
                <span className="mini-card-text">Compactação</span>
              </div>
              <div className="service-mini-card" onClick={() => solicitarOrcamentoServico('Transporte')}>
                <span className="mini-card-icon">🚛</span>
                <span className="mini-card-text">Transporte</span>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="hero-buttons">
              <a href="#contato" className="btn btn-primary btn-hero" onClick={handleNavClick}>
                <span>📋</span>
                {heroSlides[currentSlide].cta}
              </a>
              <button className="btn btn-secondary btn-hero" onClick={openWhatsAppHero}>
                <span>💬</span>
                WhatsApp Rápido
              </button>
            </div>

            {/* Estatísticas rápidas */}
            <div className="hero-stats">
              <div className="hero-stat-item">
                <span className="hero-stat-number">200+</span>
                <span className="hero-stat-label">Projetos</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">10+</span>
                <span className="hero-stat-label">Máquinas</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">100%</span>
                <span className="hero-stat-label">Satisfação</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controles do carrossel */}
        <button className="hero-control hero-control-prev" onClick={prevSlide} aria-label="Anterior">
          <span>←</span>
        </button>
        <button className="hero-control hero-control-next" onClick={nextSlide} aria-label="Próximo">
          <span>→</span>
        </button>

        {/* Indicadores */}
        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            >
              <span></span>
            </button>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span className="scroll-text">Role para conhecer</span>
          <span className="scroll-line"></span>
        </div>
      </section>

      {/* Serviços - ATUALIZADO */}
      <section id="servicos" className="section servicos">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Frota completa para preparação e movimentação de terrenos</p>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                  <div className="service-overlay">
                    <button 
                      className="btn-service-quick"
                      onClick={() => solicitarOrcamentoServico(service.name)}
                    >
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Serviço Personalizado */}
          <div className="cta-container">
            <div className="cta-content">
              <h3>Precisa de um Serviço Específico?</h3>
              <p>Temos soluções personalizadas para cada tipo de terreno e obra. Conte-nos sua necessidade!</p>
              <button className="btn btn-primary" onClick={openWhatsAppPersonalizado}>
                💬 Falar sobre projeto personalizado
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre - ATUALIZADO */}
      <section id="sobre" className="section sobre">
        <div className="container">
          <h2 className="section-title">Sobre a ABA Transporte e Terraplanagem</h2>
          <div className="sobre-content">
            <div className="sobre-text">
              <p>
                A <strong>ABA Transportes e Terraplenagem LTDA</strong> atua na <strong>preparação e movimentação de terrenos</strong>, 
                oferecendo a base essencial para obras e projetos de construção.
              </p>
              <p>
                A empresa realiza serviços de <strong>escavação, nivelamento, compactação do solo e transporte de terra</strong>, 
                garantindo segurança, estabilidade e conformidade técnica desde a etapa inicial da obra. 
                Também fornecemos materiais como areia e brita, conforme a necessidade do cliente.
              </p>
              <ul className="features">
                <li>Anos de experiência no mercado de terraplanagem</li>
                <li>Equipe técnica altamente qualificada</li>
                <li>Atendimento personalizado e consultoria técnica</li>
                <li>Orçamento gratuito e sem compromisso</li>
                <li>Garantia em todos os serviços realizados</li>
                <li>Frota moderna e equipamentos de última geração</li>
                <li>Projetos sob medida para cada necessidade</li>
                <li>Atendimento em toda Santa Catarina</li>
              </ul>
              <div className="sobre-stats">
                <div className="stat-item">
                  <span className="stat-number">7</span>
                  <span className="stat-label">Anos no Mercado</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Projetos Concluídos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Satisfação</span>
                </div>
              </div>
            </div>
            <div className="sobre-image">
              <img src="/images/frota.jpeg" alt="Frota ABA Transporte e Terraplanagem" />
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="section testimonials">
        <div className="container">
          <h2 className="section-title">Depoimentos de Clientes</h2>
          <p className="section-subtitle">A confiança dos nossos clientes é nosso maior patrimônio</p>
          
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section contato">
        <div className="container">
          <h2 className="section-title">Solicite seu orçamento gratuito</h2>
          <p className="section-subtitle">Preencha o formulário e será direcionado ao WhatsApp - Sem compromisso!</p>
          
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Orçamento Solicitado!</h3>
              <p>Você será redirecionado para o WhatsApp em instantes.</p>
              <p>Caso não tenha sido redirecionado, <a href="https://wa.me/5547991912095" target="_blank" rel="noopener noreferrer">clique aqui</a> para falar conosco.</p>
            </div>
          ) : (
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome">Nome Completo *</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone *</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      placeholder="(47) 99191-2095"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cidade">Cidade *</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      required
                      placeholder="Sua cidade"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="servico">Tipo de Serviço *</label>
                    <select 
                      id="servico" 
                      name="servico" 
                      value={formData.servico}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="Escavação">Escavação</option>
                      <option value="Nivelamento">Nivelamento</option>
                      <option value="Compactação">Compactação</option>
                      <option value="Transporte de Terra">Transporte de Terra</option>
                      <option value="Fornecimento de Areia">Fornecimento de Areia</option>
                      <option value="Fornecimento de Brita">Fornecimento de Brita</option>
                      <option value="Limpeza de Terreno">Limpeza de Terreno</option>
                      <option value="Aterro">Aterro</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensagem">Descrição do Projeto</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto, área do terreno, necessidades específicas..."
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-submit">
                  <span>💬</span> Solicitar orçamento via WhatsApp
                </button>
                
                <p className="form-note">
                  Ao enviar, você será direcionado automaticamente para o WhatsApp da ABA Transporte e Terraplanagem.
                  <br />
                  <strong>Orçamento 100% gratuito e sem compromisso!</strong>
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer - ATUALIZADO */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>ABA Transporte e Terraplanagem</h3>
              <p>Soluções completas em preparação de terrenos, terraplanagem e transporte com qualidade e confiança.</p>
              <div className="contact-info">
                <p><strong>📱 WhatsApp:</strong>(47) 99191-2095</p>
              </div>
            </div>
            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Início</a>
              <a href="#servicos" onClick={handleNavClick}>Serviços</a>
              <a href="#sobre" onClick={handleNavClick}>Sobre Nós</a>
              <a href="#avaliacoes" onClick={handleNavClick}>Depoimentos</a>
              <a href="#contato" onClick={handleNavClick}>Orçamento</a>
            </div>
            <div className="footer-social">
              <h4>Redes Sociais</h4>
              <p>Siga-nos e acompanhe nossos projetos</p>
              <div className="social-icons">
                <button className="social-btn instagram-btn" onClick={openInstagram}>
                  📸 Instagram
                </button>
                <button className="social-btn whatsapp-btn" onClick={openWhatsAppFlutuante}>
                  💬 WhatsApp
                </button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} ABA Transporte e Terraplanagem LTDA. Todos os direitos reservados.</p>
            <p>📍 Santa Catarina</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;