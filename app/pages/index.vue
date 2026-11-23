<script setup lang="ts">
const menuOpen = ref(false)
const isScrolled = ref(false)
const updateScrollState = () => { isScrolled.value = window.scrollY > 40 }
onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', updateScrollState))
const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
]
const treatments = [
  { image: 'tratamento-1.jpg', alt: 'Tecnologia odontológica' },
  { image: 'estetica-gerada.png', alt: 'Odontologia estética, DSD e clareamento dental' },
  { image: 'tratamento-3.jpg', alt: 'Lentes dentais' },
  { image: 'tratamento-4.jpg', alt: 'Tratamento odontológico' },
  { image: 'tratamento-5.jpg', alt: 'Ilustração de um dente' },
  { image: 'implante-gerado.png', alt: 'Implantodontia e cirurgias' },
  { image: 'facial-gerada.png', alt: 'Botox e preenchimentos faciais' },
  { image: 'tratamento-8.jpg', alt: 'Tratamentos da região da mandíbula' },
]
useHead({
  title: 'Estúdio Almeida | Consultório odontológico',
  meta: [{ name: 'description', content: 'Odontologia integrada em Volta Redonda. Planejamento e tratamento completo em um só lugar.' }],
})
</script>

<template>
  <div id="inicio">

    <header class="header" :class="{ 'is-scrolled': isScrolled }">
      <a class="brand" href="#inicio"><img src="/images/logo.jpg" alt="Karina Almeida — consultório odontológico"></a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="navigation" :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'" @click="menuOpen = !menuOpen"><span></span><span></span><span></span></button>
      <nav id="navigation" :class="{ open: menuOpen }" aria-label="Navegação principal">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="menuOpen = false">{{ link.label }}</a>
      </nav>
    </header>
    <div class="hero">
      <img src="/images/hero-refeito.png" alt="Ambiente do consult&oacute;rio odontol&oacute;gico">
      <div class="hero-message">planejamento e<br>tratamento completo<br><strong>em um s&oacute; lugar.</strong></div>
    </div>
    <main>
      <section id="sobre" class="section about">
        <div class="section-heading"><h1>Praticamos a arte de<br>conceber os mais belos<br>sorrisos</h1><p>- SOBRE NÓS -</p></div>
        <div class="about-content">
          <div class="copy"><p>Somos um espaço único multidiciplinar, amparada por tecnologia e um time de especialistas altamente qualificados.</p><p>Almeida é o sobrenome da Dra Karina Almeida que idealizou e conseguiu reunir profissionais autônomos de vanguarda, que estão sempre a frente, exercendo papel percursor e pioneiro na nossa região.</p><p>O Amor a odontologia nos uniu em um único lugar!</p></div>
          <div class="clinic-photos"><img src="/images/consultorio.jpg" alt="Sala de atendimento"><img src="/images/espera.jpg" alt="Sala de espera"><img src="/images/recepcao.jpg" alt="Recepção do consultório"></div>
        </div>
      </section>
      <section id="tratamentos" class="section treatments">
        <h2 class="section-label">TRATAMENTOS</h2>
        <div class="tiles"><div v-for="item in treatments" :key="item.image" class="treatment-tile" tabindex="0"><img :src="`/images/${item.image}`" :alt="item.alt" loading="lazy"><span aria-hidden="true">{{ item.alt }}</span></div></div>
      </section>
      <section id="equipe" class="team">
        <div class="section">
          <div class="section-heading"><h2>Uma equipe especializada<br>para atender suas<br>necessidades.</h2><p>- NOSSA EQUIPE -</p></div>
          <div class="team-intro">
            <p>Nossa Visão é focada em integrar os diagnósticos, as ações e promover uma odontologia global ao paciente. Utilizando para isto uma das principais características da odontologia brasileira, que é uma boa relação dentista - paciente. Só é possível aplicarmos essa filosofia com a colaboração de um time de especialistas de referência em cada área nas quais atuamos, que compreendem de forma geral a saúde de nossos pacientes.</p>
            <img src="/images/equipe-grupo.jpg" alt="Equipe do consultório" loading="lazy">
          </div>
          <TeamProfiles />
        </div>
      </section>
      <section id="contato" class="contact-section">
        <div class="contact-inner">
          <div class="contact-heading">
            <p class="contact-eyebrow">CONTATO</p>
            <h2>Entre em contato<br>com a nossa equipe.</h2>
            <p>Estamos em Volta Redonda, prontos para receber voc&ecirc;.</p>
          </div>
          <div class="contact-details">
            <div><h3>Endere&ccedil;o</h3><p>Shopping 33 - Torre II<br>Rua 40, n&ordm; 14, Sala 1505<br>Vila Santa Cec&iacute;lia<br>Volta Redonda - RJ</p></div>
            <div><h3>Telefones</h3><p><a href="tel:+552433484530">(24) 3348 - 4530</a><br><a href="tel:+5524981155666">(24) 98115 - 5666</a></p></div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <a class="footer-brand" href="#inicio"><img src="/images/logo.jpg" alt="Karina Almeida - consult&oacute;rio odontol&oacute;gico"></a>
      <nav aria-label="Navegação do rodapé"><a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a></nav>
      <address><strong>Shopping 33</strong> - Torre II<br>Rua 40, nº 14, Sala 1505<br><strong>Vila Santa Cecília</strong><br>Volta Redonda - RJ<br><br><a href="tel:+552433484530">(24) 3348 - 4530</a><br><a href="tel:+5524981155666">(24) 98115 - 5666</a></address>
      <div class="footer-social" aria-label="Redes sociais">
        <a class="social-icon" href="https://www.facebook.com/profile.php?id=100071819425127" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.4 22v-9h3l.45-3.5H13.4V7.26c0-1.01.28-1.7 1.73-1.7h1.85V2.43c-.32-.04-1.42-.13-2.7-.13-2.67 0-4.5 1.63-4.5 4.62V9.5h-3V13h3v9z"/></svg></a>

        <a class="social-icon" href="https://www.instagram.com/estudioalmeidaodonto/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg></a>
      </div>
      <div class="footer-credit"><span>Desenvolvido por</span><a href="https://dec9.com.br/" target="_blank" rel="noopener noreferrer" aria-label="DEC9 Marketing e Tecnologia"><img src="/images/dec9.jpg" alt="DEC9 Marketing e Tecnologia" loading="lazy"></a></div>
    </footer>
    <div class="floating-actions">
      <a v-show="isScrolled" class="floating-top" href="#inicio" aria-label="Voltar ao topo">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 14l7-7 7 7M12 7v12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a class="floating-whatsapp" href="https://wa.me/5524981155666" target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 2a9.86 9.86 0 0 0-8.4 15.02L2.2 22l5.1-1.34A9.98 9.98 0 1 0 12.04 2Zm0 18.13a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.03.8.81-2.94-.2-.31a8.2 8.2 0 1 1 6.88 3.77Zm4.5-6.14c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.96-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.97-1.21-.72-.65-1.21-1.44-1.35-1.69-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.09-.17.05-.31-.02-.44-.06-.12-.55-1.34-.75-1.83-.2-.47-.4-.4-.55-.41h-.47c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z"/></svg>
      </a>
    </div>
  </div>
</template>
