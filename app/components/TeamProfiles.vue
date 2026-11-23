<script setup lang="ts">
const team = [
 { image:'karina', name:'Dra. Karina C. de Almeida Martins', specialty:'Reabilitação oral', details:['Formada pela Escola de Odontologia de Volta Redonda — Fundação Oswaldo Aranha, 2003.','Pós-graduada em Dentística Restauradora e Estética — CEPO, 2003 / ABOBM, 2011.','Especialista em Prótese Dentária — UNICAMP, 2006.','Aperfeiçoamento em prótese removível total e parcial — CEPO, 2008.','Pós-graduada em cirurgia e prótese sobre implante — CEPO, 2008.','Intensivo em prótese sobre implante — ILAPEO, 2012.','Atualização em DSD (Digital Smile Design), Christian Coachman — SP, 2014.','Atualização em laminados cerâmicos — Instituto Guy Puglisi, RJ, 2016.'] },
 { image:'equipe-2', name:'Dr. Marcus Vinícius Amorim', specialty:'Implantodontia', details:['Formado pela Escola de Odontologia de Volta Redonda — FOA, 1994.','Especialista em Implantodontia — UNIFOA, 2005.','Pós-graduação em cirurgia e prótese sobre implantes — CEPO.','Professor do curso de especialização de Implantodontia — UNIFOA.'] },
 { image:'equipe-3', name:'Dr. Leandro Osório Appesa', specialty:'Bucomaxilofacial', details:['Formado pela Escola de Odontologia de Volta Redonda — FOA, 2007.','Habilitação em sedação com óxido nitroso, 2009.','Especialista em CTBMF — CPO São Leopoldo Mandic, 2010.','Aperfeiçoamento em Implantodontia, 2010.'] },
 { image:'equipe-4', name:'Dra. Maria Isabel', specialty:'Periodontista', details:['Especialista em Periodontia — ABORJ, 1989.','Especialista em Prótese — Unigran Rio, 1992.','Especialista em didática do ensino superior — Instituto Isabel, 1994.','Mestre em Odontologia na área de Implantodontia — CPO São Leopoldo Mandic, 2005.'] },
 { image:'equipe-5', name:'Dra. Livia Dolinski', specialty:'Ortodontista', details:['Especialista em Ortodontia — UNESA, 2007.','Aperfeiçoamento em Ortodontia — AORJ, 2009.','Curso em Odontopediatria e Ortopedia — ABO-RJ.','Dentista credenciada no sistema Clear Aligner, 2016.'] },
 { image:'equipe-6', name:'Dra. Renata Koga', specialty:'Periodontista', details:['Enfermagem pela Universidade Estadual do Rio de Janeiro — UERJ, 1990.','Formada pela Escola de Odontologia de Volta Redonda — FOA, 1995.','Especialista em Periodontia — UNIFOA, 2000.','Aperfeiçoamento em cirurgia plástica periodontal e reconstrução tecidual estética periodontal e peri-implantar.','Atualização em Implantodontia.','Capacitação no uso terapêutico de proteína botulínica, fototerapia e preenchimento orofacial.'] },
 { image:'equipe-7', name:'Dra. Bruna Batalha', specialty:'Prótese', details:['Formada pela Escola de Odontologia de Volta Redonda — FOA, 2009.','Atualização em Ortodontia — ABO Barra Mansa/RJ, 2010.','Especialista em Prótese Dentária — CPO São Leopoldo Mandic, 2013.'] },
 { image:'equipe-8', name:'Dr. Leonardo Barroso', specialty:'Endodontista', details:['Especialista e mestre em Endodontia — UNITAU-SP.','Coordenador de pós-graduação em Endodontia — UNIFOA/RJ e Núcleo Endo/RJ.','Associate member da American Association of Endodontists — AAE-USA.','Membro da Sociedade Brasileira de Endodontia — SBENDO.','Master em programação neurolinguística.'] },
 { image:'equipe-9', name:'Dra. Elismara Medeiros', specialty:'Odontologia do sono', details:['Formada pela Faculdade de Odontologia Júlio de Mesquita Filho — UNESP Araçatuba, 1994.','Especialista e mestre em Endodontia.','Aperfeiçoamento em Ortodontia.','Membro da Associação Brasileira do Sono; capacitada em Odontologia do Sono.','MBA em Gestão de Pessoas.'] },
]
const selected = ref<(typeof team)[number] | null>(null)
const dialog = ref<HTMLDialogElement | null>(null)
async function openPerson(person: (typeof team)[number]) {
 selected.value = person
 await nextTick()
 dialog.value?.showModal()
}
function closePerson() { dialog.value?.close() }
</script>
<template>
 <div class="tiles team-tiles">
  <button v-for="person in team" :key="person.image" class="team-card" type="button" @click="openPerson(person)">
   <img :src="`/images/${person.image}.jpg`" :alt="person.name" loading="lazy">
   <span class="team-overlay"><strong>{{ person.name }}</strong><span>{{ person.specialty }}</span><small>Conheça o perfil</small></span>
  </button>
 </div>
 <Teleport to="body">
  <dialog ref="dialog" class="team-dialog" aria-labelledby="team-dialog-title" @click.self="closePerson" @close="selected = null">
   <article v-if="selected" class="team-profile">
    <button type="button" class="team-close" aria-label="Fechar" autofocus @click="closePerson">×</button>
    <img :src="`/images/${selected.image}.jpg`" :alt="selected.name">
    <div class="team-profile-content">
     <h2 id="team-dialog-title">{{ selected.name }}</h2>
     <p class="team-specialty">{{ selected.specialty }}</p>
     <ul><li v-for="detail in selected.details" :key="detail">{{ detail }}</li></ul>
    </div>
   </article>
  </dialog>
 </Teleport>
</template>
