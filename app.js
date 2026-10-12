const lessons = [
  {
    id:"ai-basics", title:"L’IA : un copilote, pas un pilote automatique", kicker:"LES BASES", minutes:6,
    intro:"Comprends ce que l’IA générative sait faire — et ce qu’il vaut mieux ne pas lui confier sans contrôle.",
    objective:"Identifier le bon rôle de l’IA dans une tâche professionnelle.",
    sections:[
      {title:"L’idée essentielle", text:"Une IA générative produit du texte, des idées, des synthèses ou du code à partir de ta demande et des informations qu’elle a apprises. Elle peut être très utile, mais elle peut aussi se tromper ou inventer des détails."},
      {title:"Pense à un copilote", text:"Tu restes responsable de l’objectif, du contexte et de la validation. L’IA t’aide à aller plus vite ; elle ne remplace pas ton jugement professionnel."},
      {title:"Le bon réflexe", text:"Commence par une tâche limitée : reformuler un texte non confidentiel, préparer un plan ou générer des idées. Vérifie ensuite le résultat avant de l’utiliser."}
    ],
    exampleTitle:"Exemple au travail",
    example:"Au lieu de demander « Fais mon travail », demande : « Propose un plan de compte rendu à partir de ces notes fictives. Signale les informations manquantes et n’invente aucun fait. »",
    takeaway:"Utilise l’IA pour accélérer un travail que tu sais évaluer. Vérifie toujours les faits et respecte les règles de confidentialité de ton organisation.",
    question:"Quel est le meilleur réflexe lorsqu’une IA fournit une information importante pour ton travail ?",
    options:["La reprendre telle quelle si la réponse paraît convaincante.","La vérifier avec des sources fiables et les règles de ton organisation.","Demander à l’IA de garantir qu’elle ne se trompe jamais."],
    answer:1, explanation:"Exactement ! Une réponse fluide peut être fausse. La vérification reste indispensable, surtout pour les décisions et les informations sensibles."
  },
  {
    id:"prompt-clarity", title:"Formuler une demande qui donne de meilleurs résultats", kicker:"MIEUX DEMANDER", minutes:7,
    intro:"Une demande précise aide l’IA à comprendre le résultat attendu et à limiter les réponses vagues.",
    objective:"Structurer un prompt avec un objectif, du contexte et un format.",
    sections:[
      {title:"Les quatre ingrédients d’une bonne demande", text:"Précise le rôle attendu, l’objectif, le contexte utile et la forme de la réponse. Ajoute les contraintes importantes : longueur, ton, public ou éléments à éviter."},
      {title:"Donne un résultat observable", text:"« Aide-moi à préparer une réunion » est assez vague. « Prépare un ordre du jour de 30 minutes pour une réunion d’avancement, avec les décisions à prendre et les actions à attribuer » est beaucoup plus exploitable."},
      {title:"Itère sans repartir de zéro", text:"Lis la réponse, identifie ce qui manque et demande une amélioration précise. Une bonne conversation avec l’IA se construit souvent en plusieurs étapes."}
    ],
    exampleTitle:"Prompt à tester",
    example:"« Tu es un assistant de gestion de projet. Prépare un compte rendu court à partir des notes ci-dessous. Structure-le en décisions, actions, responsables et échéances. N’invente pas les informations manquantes : liste-les à la fin. »",
    takeaway:"Objectif + contexte + format + contraintes : cette structure simple améliore souvent la qualité de la réponse.",
    question:"Quel prompt a le plus de chances de produire un résultat utile ?",
    options:["« Fais quelque chose de professionnel. »","« Explique-moi tout sur la gestion. »","« Résume ces notes en 5 points, puis liste les décisions et les actions sans inventer de détails. »"],
    answer:2, explanation:"Oui ! Le résultat attendu, le format et la consigne de ne pas inventer rendent la demande plus précise."
  },
  {
    id:"verify-output", title:"Vérifier une réponse avant de l’utiliser", kicker:"ESPRIT CRITIQUE", minutes:6,
    intro:"Apprends à repérer les signaux qui justifient une vérification avant d’envoyer ou de partager un résultat.",
    objective:"Appliquer une méthode de vérification simple.",
    sections:[
      {title:"Pourquoi vérifier ?", text:"Une IA peut mélanger des faits, utiliser une source ancienne ou donner un chiffre plausible mais incorrect. La présentation soignée d’une réponse ne prouve pas qu’elle est exacte."},
      {title:"La méthode en trois étapes", text:"1. Repère les affirmations factuelles, les dates et les chiffres. 2. Vérifie-les dans une source fiable et récente. 3. Confirme que la réponse correspond à ton contexte et ne contient pas de données confidentielles."},
      {title:"Quand l’enjeu est élevé", text:"Pour une question juridique, financière, médicale ou réglementaire, ne te repose pas uniquement sur une réponse générée. Consulte les sources officielles ou le professionnel compétent."}
    ],
    exampleTitle:"Mini-cas",
    example:"L’IA cite une règle de droit et une date d’entrée en vigueur. Avant de la reprendre dans un document professionnel, consulte le texte officiel à jour et vérifie que la règle s’applique bien à ton cas.",
    takeaway:"Vérifie les faits importants à la source, en tenant compte de la date et du contexte.",
    question:"Une réponse contient une statistique précise, mais aucune source. Que fais-tu ?",
    options:["Tu la gardes si elle semble réaliste.","Tu demandes une source, puis tu vérifies l’information indépendamment.","Tu la partages et tu corriges plus tard si nécessaire."],
    answer:1, explanation:"Bonne méthode : demande la source et contrôle-la indépendamment avant de réutiliser la statistique."
  },
  {
    id:"confidentiality", title:"Protéger les informations professionnelles", kicker:"USAGE RESPONSABLE", minutes:5,
    intro:"Gagner du temps ne doit jamais se faire au détriment de la confidentialité, des données personnelles ou des règles internes.",
    objective:"Choisir une manière plus sûre d’utiliser un assistant IA.",
    sections:[
      {title:"Reconnais les données sensibles", text:"Les noms de clients, coordonnées, informations financières, données RH, identifiants, secrets commerciaux et documents internes peuvent être confidentiels."},
      {title:"Adapte ton usage", text:"Respecte les politiques de ton entreprise et les outils autorisés. Lorsque c’est possible, remplace les noms et données réelles par des exemples fictifs ou anonymisés."},
      {title:"En cas de doute", text:"Ne colle pas une information dans un outil externe simplement parce que c’est pratique. Demande conseil à ton référent sécurité, conformité ou protection des données."}
    ],
    exampleTitle:"Exemple",
    example:"Pour demander de l’aide sur un courriel, remplace le nom du client, les références de dossier et les montants réels par des valeurs fictives, et vérifie que l’usage de l’outil est autorisé.",
    takeaway:"Utilise uniquement les données et les outils autorisés par ton organisation. L’anonymisation ne suffit pas toujours à rendre un partage acceptable.",
    question:"Tu veux faire résumer un courriel client dans un outil IA externe. Quel est le meilleur réflexe ?",
    options:["Copier le courriel complet pour préserver le contexte.","Vérifier les règles de l’entreprise et utiliser uniquement un outil autorisé, avec les données nécessaires.","Changer seulement le prénom et envoyer le reste."],
    answer:1, explanation:"Exact. Il faut respecter les règles internes et minimiser les données partagées ; remplacer un prénom ne garantit pas l’anonymisation."
  },
  {
    id:"daily-workflow", title:"Créer un petit rituel IA utile", kicker:"PASSER À L’ACTION", minutes:7,
    intro:"Transforme un apprentissage en habitude en choisissant une tâche simple, répétitive et facile à contrôler.",
    objective:"Concevoir un test d’usage limité et mesurable.",
    sections:[
      {title:"Choisis une tâche récurrente", text:"Exemples : préparer un ordre du jour, améliorer la clarté d’un texte non confidentiel, organiser une liste de tâches ou trouver des variantes de formulation."},
      {title:"Définis un test simple", text:"Avant de commencer, précise le temps que tu y consacres habituellement et ce que tu considères comme un bon résultat. Essaie l’IA sur une tâche à faible risque."},
      {title:"Mesure et décide", text:"Compare le résultat avec ta méthode habituelle : qualité, temps gagné, corrections nécessaires et respect des règles internes. Garde l’usage seulement s’il apporte une vraie valeur."}
    ],
    exampleTitle:"Ton défi de 10 minutes",
    example:"Choisis une tâche non confidentielle. Rédige un prompt précis, vérifie le résultat et note : ce qui t’a fait gagner du temps, ce que tu as dû corriger et ce que tu essaieras la prochaine fois.",
    takeaway:"Un usage IA vaut la peine d’être conservé s’il améliore réellement le résultat ou le temps passé, sans augmenter les risques.",
    question:"Comment savoir si un nouvel usage de l’IA vaut la peine d’être conservé ?",
    options:["Parce que l’IA répond très vite.","Parce qu’il est à la mode dans ton secteur.","Parce qu’un test montre une amélioration utile, vérifiée et compatible avec les règles internes."],
    answer:2, explanation:"C’est ça : mesure le bénéfice réel, vérifie la qualité et respecte les règles applicables."
  }
];

const paths = [
  {id:"ai",title:"Maîtriser l’IA au travail",category:"IA & PRODUCTIVITÉ",icon:"✦",style:"violet",desc:"Utilise l’IA avec méthode, esprit critique et confiance.",lessons:5,minutes:"35 min",status:"Disponible"},
  {id:"career",title:"Emploi & évolution",category:"CARRIÈRE",icon:"↗",style:"peach",desc:"Prépare tes entretiens et mets tes compétences en valeur.",lessons:8,minutes:"50 min",status:"Bientôt"},
  {id:"project",title:"Les bases de la gestion de projet",category:"ORGANISATION",icon:"▦",style:"green",desc:"Priorise, organise les actions et communique clairement.",lessons:8,minutes:"55 min",status:"Bientôt"}
];

const STORAGE_KEY = "skillup-mvp-v1";
const defaultState = {xp:0, completed:[], passed:[], currentLesson:0, lastActive:null, streak:0, bestStreak:0, lastDailyBonus:null, notes:{}};
let state = loadState();
let activeLessonIndex = 0;
let selectedOption = null;
let answered = false;
let toastTimer;
let activePathFilter = "all";
let pathSearchTerm = "";

function loadState(){
  try { return {...defaultState,...JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}")}; }
  catch { return {...defaultState}; }
}
function saveState(){ localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); }
if(!state.notes || typeof state.notes!=="object") state.notes={};
function todayKey(){ const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; }
function daysBetween(a,b){ return Math.round((new Date(b+"T12:00:00")-new Date(a+"T12:00:00"))/86400000); }
function touchDaily(){
  const today=todayKey();
  if(state.lastActive!==today){
    if(state.lastActive && daysBetween(state.lastActive,today)===1) state.streak=(state.streak||0)+1;
    else state.streak=1;
    state.lastActive=today;
    state.bestStreak=Math.max(state.bestStreak||0,state.streak);
    saveState();
  }
}
function toast(msg){const el=document.getElementById("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2500)}
function pct(){return Math.round(state.completed.length/lessons.length*100)}
function showView(name){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===`view-${name}`));
  document.querySelectorAll("[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  document.querySelectorAll(".mobile-nav button").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  if(name==="progress") renderProgress();
  if(name==="paths") renderPaths();
  window.scrollTo({top:0,behavior:"smooth"});
}
function cardHTML(path){
  const isAI=path.id==="ai";
  const progress=isAI?Math.round(state.completed.length/lessons.length*100):0;
  const available=path.status==="Disponible";
  return `<article class="path-card">
    <div class="path-card-top"><div class="path-icon ${path.style}">${path.icon}</div><span class="path-status">${available?"● Disponible":"◷ Bientôt"}</span></div>
    <span class="eyebrow">${path.category}</span><h3>${path.title}</h3><p>${path.desc}</p>
    <div class="path-card-foot"><span>${path.lessons} leçons · ${path.minutes}</span>${available?`<button class="path-open" data-open-path="${path.id}">${progress?"Continuer":"Découvrir"} →</button>`:`<span>À venir</span>`}</div>
    <div class="mini-progress"><span style="width:${progress}%"></span></div>
  </article>`;
}
function renderPaths(){
  document.getElementById("home-paths").innerHTML=paths.map(cardHTML).join("");
  const filtered=paths.filter(p=>{
    const term=pathSearchTerm.trim().toLocaleLowerCase("fr");
    const matchesText=!term || `${p.title} ${p.category} ${p.desc}`.toLocaleLowerCase("fr").includes(term);
    const matchesFilter=activePathFilter==="all"
      || (activePathFilter==="available" && p.status==="Disponible")
      || (activePathFilter==="career" && p.category==="CARRIÈRE")
      || (activePathFilter==="productivity" && p.category==="IA & PRODUCTIVITÉ");
    return matchesText && matchesFilter;
  });
  document.getElementById("all-paths").innerHTML=filtered.length?filtered.map(cardHTML).join(""):`<div class="empty-results">Aucun parcours ne correspond à ta recherche. Essaie un autre mot-clé.</div>`;
  const count=document.getElementById("path-results-count");
  if(count) count.textContent=`${filtered.length} parcours affiché${filtered.length>1?"s":""}`;
  document.getElementById("hero-progress-label").textContent=`${pct()}% terminé`;
}
function renderStats(){
  document.getElementById("top-xp").textContent=`${state.xp} XP`;
  document.getElementById("stat-xp").textContent=`${state.xp} XP`;
  document.getElementById("stat-streak").textContent=`${state.streak||0} jour${state.streak===1?"":"s"}`;
  document.getElementById("side-streak").textContent=`${state.streak||0} jour${state.streak===1?"":"s"}`;
  document.getElementById("stat-lessons").textContent=`${state.completed.length} / ${lessons.length}`;
  document.getElementById("today-label").textContent=new Date().toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"}).toUpperCase();
  renderPaths();
}
function renderProgress(){
  renderStats();
  document.getElementById("progress-xp").textContent=state.xp;
  document.getElementById("best-streak").textContent=`${state.bestStreak||0} jour${state.bestStreak===1?"":"s"}`;
  document.getElementById("quizzes-passed").textContent=state.passed.length;
  const level=Math.floor(state.xp/100)+1, current=state.xp%100;
  const names=["Explorateur","Curieux","Pratiquant","Confirmé","Expert"];
  document.getElementById("level-name").textContent=names[Math.min(level-1,names.length-1)];
  document.querySelector(".level-medal").innerHTML=`✦<small>NIV. ${level}</small>`;
  document.getElementById("level-bar").style.width=`${current}%`;
  document.getElementById("level-caption").textContent=`${current} / 100 XP vers le niveau suivant`;
  document.getElementById("progress-path-list").innerHTML=paths.map(p=>{
    const progress=p.id==="ai"?pct():0;
    return `<div class="progress-path-row"><div class="path-icon ${p.style}">${p.icon}</div><div class="progress-path-info"><strong>${p.title}</strong><small>${p.id==="ai"?`${state.completed.length} leçon(s) terminée(s) sur ${lessons.length}`:"Parcours bientôt disponible"}</small></div><div class="mini-progress"><span style="width:${progress}%"></span></div></div>`;
  }).join("");
}
function openLesson(index){
  activeLessonIndex=Math.max(0,Math.min(index,lessons.length-1));
  selectedOption=null;answered=false;
  const l=lessons[activeLessonIndex];
  document.getElementById("lesson-category").textContent="IA & PRODUCTIVITÉ";
  document.getElementById("lesson-count").textContent=`LEÇON ${activeLessonIndex+1} SUR ${lessons.length}`;
  document.getElementById("lesson-progress-bar").style.width=`${(activeLessonIndex/lessons.length)*100}%`;
  document.getElementById("lesson-kicker").textContent=l.kicker;
  document.getElementById("lesson-title").textContent=l.title;
  document.getElementById("lesson-intro").textContent=l.intro;
  document.getElementById("lesson-objective").textContent=l.objective;
  document.getElementById("lesson-takeaway").textContent=l.takeaway;
  document.getElementById("lesson-note").value=state.notes?.[l.id]||"";
  document.getElementById("note-status").textContent=state.notes?.[l.id]?"Note enregistrée sur cet appareil":"Privé sur cet appareil";
  document.getElementById("lesson-content").innerHTML=l.sections.map(s=>`<h3>${s.title}</h3><p>${s.text}</p>`).join("")+`<div class="example-box"><strong>${l.exampleTitle}</strong><p>${l.example}</p></div>`;
  document.getElementById("quiz-question").textContent=l.question;
  document.getElementById("quiz-options").innerHTML=l.options.map((o,i)=>`<button class="quiz-option" data-option="${i}"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${o}</span></button>`).join("");
  document.getElementById("quiz-feedback").textContent="";
  document.getElementById("quiz-feedback").className="quiz-feedback";
  document.getElementById("check-answer").classList.remove("hidden");
  document.getElementById("check-answer").disabled=true;
  document.getElementById("next-lesson").classList.add("hidden");
  document.getElementById("next-lesson").textContent=activeLessonIndex===lessons.length-1?"Terminer le parcours ✓":"Leçon suivante →";
  document.getElementById("lesson-progress-bar").style.width=`${(activeLessonIndex/lessons.length)*100}%`;
  showView("lesson");
}
function handleOptionClick(button){
  if(answered)return;
  selectedOption=Number(button.dataset.option);
  document.querySelectorAll(".quiz-option").forEach(b=>b.classList.toggle("selected",b===button));
  document.getElementById("check-answer").disabled=false;
}
function checkAnswer(){
  if(selectedOption===null||answered)return;
  answered=true;
  const l=lessons[activeLessonIndex],correct=selectedOption===l.answer;
  document.querySelectorAll(".quiz-option").forEach((b,i)=>{
    if(i===l.answer)b.classList.add("correct");
    if(i===selectedOption&&!correct)b.classList.add("wrong");
  });
  const feedback=document.getElementById("quiz-feedback");
  feedback.className=`quiz-feedback ${correct?"good":"bad"}`;
  feedback.textContent=(correct?"✓ Bonne réponse ! ":"Pas tout à fait. ")+l.explanation;
  const alreadyDone=state.completed.includes(l.id);
  if(correct&&!state.passed.includes(l.id)){state.passed.push(l.id);state.xp+=20;}
  if(!alreadyDone){state.completed.push(l.id);state.xp+=10;}
  touchDaily();saveState();renderStats();
  document.getElementById("check-answer").classList.add("hidden");
  document.getElementById("next-lesson").classList.remove("hidden");
  if(correct)toast(alreadyDone?"Bien joué !":"+"+(30-(state.passed.includes(l.id)?0:20))+" XP — leçon terminée !");
  else toast(alreadyDone?"Révision terminée":"Leçon validée : +10 XP");
}
function nextLesson(){
  if(activeLessonIndex<lessons.length-1)openLesson(activeLessonIndex+1);
  else {showView("progress");toast("Bravo ! Tu as parcouru toutes les leçons disponibles.");}
}
document.addEventListener("click",e=>{
  const viewBtn=e.target.closest("[data-view]");
  if(viewBtn){e.preventDefault();showView(viewBtn.dataset.view);return;}
  const pathBtn=e.target.closest("[data-open-path]");
  if(pathBtn){if(pathBtn.dataset.openPath==="ai")openLesson(state.completed.length<lessons.length?state.completed.length:0);else toast("Ce parcours arrive bientôt. On le prépare pour la prochaine version !");return;}
  const option=e.target.closest("[data-option]");
  if(option){handleOptionClick(option);return;}
});
document.getElementById("continue-learning").addEventListener("click",()=>openLesson(state.completed.length<lessons.length?state.completed.length:0));
document.getElementById("back-to-path").addEventListener("click",()=>showView("paths"));
document.getElementById("check-answer").addEventListener("click",checkAnswer);
document.getElementById("next-lesson").addEventListener("click",nextLesson);
document.getElementById("reset-progress").addEventListener("click",()=>{
  if(confirm("Réinitialiser les points et toutes les leçons terminées sur cet appareil ?")){
    state={...defaultState,notes:{}};saveState();renderStats();renderProgress();toast("Progression réinitialisée.");
  }
});
document.getElementById("path-search").addEventListener("input",e=>{
  pathSearchTerm=e.target.value;
  renderPaths();
});
document.getElementById("path-filters").addEventListener("click",e=>{
  const button=e.target.closest("[data-filter]");
  if(!button)return;
  activePathFilter=button.dataset.filter;
  document.querySelectorAll("#path-filters [data-filter]").forEach(b=>b.classList.toggle("active",b===button));
  renderPaths();
});
document.getElementById("save-note").addEventListener("click",()=>{
  const l=lessons[activeLessonIndex];
  state.notes[l.id]=document.getElementById("lesson-note").value.trim();
  saveState();
  document.getElementById("note-status").textContent=state.notes[l.id]?"Note enregistrée sur cet appareil":"Note effacée";
  toast(state.notes[l.id]?"Ton idée a été enregistrée.":"Ta note a été effacée.");
});
renderStats();
renderProgress();
if("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
}
