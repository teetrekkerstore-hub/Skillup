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
  },
  {
    id:"workflow-design", title:"Construire un workflow IA de bout en bout", kicker:"MÉTHODE PRATIQUE", minutes:8,
    intro:"Passe d’une demande isolée à une méthode reproductible : préparer les données, demander un résultat, contrôler puis finaliser.",
    objective:"Décrire un processus de travail avec l’IA et ses points de contrôle.",
    sections:[
      {title:"1. Définis le résultat avant l’outil",text:"Décris le livrable attendu, son destinataire et le critère qui permettra de juger sa qualité. Exemple : un compte rendu d’une page, destiné à une équipe projet, avec décisions, actions, responsables et échéances."},
      {title:"2. Prépare un contexte propre",text:"Rassemble uniquement les informations nécessaires. Retire les données personnelles ou confidentielles et utilise un outil autorisé par ton organisation. Si une information manque, demande à l’IA de la signaler au lieu de la deviner."},
      {title:"3. Sépare génération et contrôle",text:"Demande d’abord une première version structurée. Ensuite, dans une seconde étape, fais vérifier la cohérence, les omissions et les affirmations qui nécessitent une source. Termine par une relecture humaine."},
      {title:"4. Mesure la valeur",text:"Compare le temps total, corrections comprises, avec ta méthode habituelle. Note les erreurs détectées, la qualité du résultat et les cas où il vaut mieux ne pas utiliser l’IA."}
    ],
    exampleTitle:"Workflow prêt à adapter",
    example:"Entrée : notes fictives de réunion. Étape A : extraire les faits sans interprétation. Étape B : organiser en décisions, actions, responsables et dates. Étape C : lister les informations absentes. Étape D : vérifier chaque élément avec les notes d’origine. Sortie : compte rendu relu par une personne.",
    takeaway:"Un bon workflow ne se limite pas à écrire un prompt : il prévoit les entrées, les contrôles, les limites et la validation finale.",
    question:"Quel élément rend un workflow IA plus fiable ?",
    options:["Automatiser toutes les étapes sans contrôle.","Prévoir des contrôles et une validation humaine avant diffusion.","Utiliser le prompt le plus long possible, quel que soit le besoin."],
    answer:1, explanation:"Exact : les contrôles et la validation humaine limitent les erreurs avant que le résultat soit utilisé."
  },
  {
    id:"prompt-lab", title:"Atelier : améliorer un prompt en trois versions", kicker:"ATELIER GUIDÉ", minutes:9,
    intro:"Tu vas transformer une demande vague en consigne exploitable, puis ajouter des critères de qualité et une étape de vérification.",
    objective:"Améliorer un prompt en utilisant le contexte, le format, les contraintes et les critères de réussite.",
    sections:[
      {title:"Version 1 — la demande vague",text:"« Prépare une présentation sur notre projet. » Le sujet est connu, mais le public, la durée, le message principal et la structure ne le sont pas. Le résultat risque donc d’être générique."},
      {title:"Version 2 — ajouter le contexte et le format",text:"« Tu aides un chef de projet à préparer une présentation de 5 minutes pour une équipe interne. Propose 5 diapositives : objectif, avancement, risques, décisions attendues et prochaines étapes. »"},
      {title:"Version 3 — ajouter des garde-fous",text:"« Utilise uniquement les informations fournies. N’invente aucun chiffre, nom ou échéance. Marque [À CONFIRMER] lorsqu’une donnée manque. Pour chaque risque, indique l’impact et la prochaine action. Termine par une liste des informations à vérifier avant présentation. »"},
      {title:"Évalue le résultat",text:"Note la réponse sur 5 critères : pertinence pour le public, structure, fidélité aux informations, clarté des actions et absence d’invention. Si un critère est faible, modifie uniquement la consigne qui lui correspond puis recommence."}
    ],
    exampleTitle:"À toi de pratiquer",
    example:"Prends une tâche non confidentielle que tu connais. Écris un prompt vague, améliore-le avec le contexte et le format, puis ajoute deux critères de qualité et une consigne explicite pour signaler les informations manquantes. Compare les versions.",
    takeaway:"Améliore un prompt par itérations : une modification ciblée, un résultat observé, puis une nouvelle vérification.",
    question:"Après une première réponse médiocre, quelle est la meilleure démarche ?",
    options:["Tout recommencer en demandant simplement « fais mieux ».","Identifier le critère manquant et modifier précisément la consigne.","Ajouter le plus de contraintes possible, même si elles se contredisent."],
    answer:1, explanation:"Oui : un retour ciblé permet de comprendre ce qui manque et d’améliorer la prochaine version."
  },
  {
    id:"final-project", title:"Projet final : créer ton assistant de travail responsable", kicker:"PROJET FINAL", minutes:15,
    intro:"Mobilise les acquis du parcours pour concevoir un mini-assistant IA sur une tâche professionnelle simple, utile et sans données sensibles.",
    objective:"Présenter un cas d’usage, un prompt complet, une méthode de vérification et un indicateur de valeur.",
    sections:[
      {title:"Étape 1 — choisis un cas d’usage sûr",text:"Choisis une tâche répétitive à faible risque : préparer un ordre du jour, reformuler un texte non confidentiel, organiser des tâches ou créer une première trame de compte rendu à partir de notes fictives. Évite les décisions automatisées et les données réelles sensibles."},
      {title:"Étape 2 — rédige le brief",text:"Décris le public, l’objectif, le contexte disponible, le format attendu, les contraintes et les éléments interdits. Ajoute : « N’invente aucun fait. Signale les informations manquantes et distingue les faits des suggestions. »"},
      {title:"Étape 3 — prévois les contrôles",text:"Avant de diffuser le résultat, vérifie les noms, dates, chiffres, affirmations factuelles, omissions et éventuelles données confidentielles. Si une information importante ne peut pas être vérifiée, retire-la ou marque-la comme à confirmer."},
      {title:"Étape 4 — mesure le bénéfice",text:"Réalise un essai avec un exemple fictif. Chronomètre le travail manuel puis le travail avec l’IA, corrections comprises. Compare aussi la qualité et le nombre de corrections nécessaires. N’adopte le workflow que s’il est utile et conforme aux règles applicables."},
      {title:"Livrable final",text:"Prépare une fiche d’une page contenant : le problème choisi, le prompt final, un exemple d’entrée fictive, le format de sortie, ta checklist de vérification, les risques identifiés et un indicateur de réussite. Tu peux la conserver dans tes notes ou la présenter à un collègue."}
    ],
    exampleTitle:"Modèle de prompt final",
    example:"« Tu es un assistant de préparation de réunion. À partir des notes fictives ci-dessous, produis un compte rendu structuré en décisions, actions, responsables et échéances. N’ajoute aucun fait qui ne figure pas dans les notes. Utilise [À CONFIRMER] si une information manque. Termine par une checklist des éléments que je dois vérifier avant diffusion. Format : tableau simple, puis 3 lignes de synthèse. »",
    takeaway:"Un projet réussi est utile, vérifiable, respectueux de la confidentialité et évalué sur des résultats concrets — pas seulement sur la qualité apparente du texte.",
    question:"Quel livrable montre le mieux que ton mini-assistant est prêt à être testé ?",
    options:["Un prompt seul, sans exemple ni contrôle.","Une fiche avec cas d’usage, prompt, exemple fictif, checklist de vérification et mesure du bénéfice.","Une promesse de gain de temps sans mesure."],
    answer:1, explanation:"Exact : le prompt est une partie du projet. Les exemples, contrôles, risques et indicateurs rendent le test concret et responsable."
  }
];

const paths = [
  {id:"ai",title:"Maîtriser l’IA au travail",category:"IA & PRODUCTIVITÉ",icon:"✦",style:"violet",desc:"Utilise l’IA avec méthode, esprit critique et confiance.",lessons:8,minutes:"60 min",status:"Disponible"},
  {id:"career",title:"Emploi & évolution",category:"CARRIÈRE",icon:"↗",style:"peach",desc:"Prépare tes entretiens et mets tes compétences en valeur.",lessons:8,minutes:"50 min",status:"Bientôt"},
  {id:"project",title:"Les bases de la gestion de projet",category:"ORGANISATION",icon:"▦",style:"green",desc:"Priorise, organise les actions et communique clairement.",lessons:8,minutes:"55 min",status:"Bientôt"}
];

const SUPABASE_URL = "https://pjqlfavburyfwjrribsy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Os65_MqwHWETkNc8M8q3SQ_UgFkOATq";
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
let authUser = null;
let authMode = "login";
let cloudWriteTimer = null;
const STORAGE_KEY = "skillup-mvp-v1";
const defaultState = {xp:0, completed:[], passed:[], currentLesson:0, lastActive:null, streak:0, bestStreak:0, lastDailyBonus:null, notes:{}};
let state = {...defaultState};
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
function saveState(){
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  if(authUser && supabaseClient){
    clearTimeout(cloudWriteTimer);
    cloudWriteTimer=setTimeout(async()=>{
      const {error}=await supabaseClient.from("learner_state").upsert({
        user_id:authUser.id, progress:state, updated_at:new Date().toISOString()
      },{onConflict:"user_id"});
      if(error) console.warn("SkillUp cloud sync:",error.message);
    },500);
  }
}
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
  if(name==="lesson" && !authUser){showAuthModal();toast("Connecte-toi ou crée un compte pour accéder aux leçons.");return;}
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
  if(!authUser){showAuthModal();setAuthMessage("Connecte-toi ou crée un compte pour accéder aux parcours.");return;}
  activeLessonIndex=Math.max(0,Math.min(index,lessons.length-1));
  state.currentLesson=activeLessonIndex;
  saveState();
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
  document.getElementById("previous-lesson").disabled=activeLessonIndex===0;
  document.getElementById("previous-lesson").style.opacity=activeLessonIndex===0?".45":"1";
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
  if(pathBtn){if(!authUser){showAuthModal();setAuthMessage("Crée un compte ou connecte-toi pour commencer un parcours.");return;}if(pathBtn.dataset.openPath==="ai")openLesson(Math.min(Number.isInteger(state.currentLesson)?state.currentLesson:0,lessons.length-1));else toast("Ce parcours arrive bientôt. On le prépare pour la prochaine version !");return;}
  const option=e.target.closest("[data-option]");
  if(option){handleOptionClick(option);return;}
});
document.getElementById("continue-learning").addEventListener("click",()=>{if(!authUser){showAuthModal();setAuthMessage("Connecte-toi ou crée un compte pour continuer ton apprentissage.");return;}openLesson(Math.min(Number.isInteger(state.currentLesson)?state.currentLesson:0,lessons.length-1));});
document.getElementById("back-to-path").addEventListener("click",()=>showView("paths"));
document.getElementById("check-answer").addEventListener("click",checkAnswer);
document.getElementById("next-lesson").addEventListener("click",nextLesson);
document.getElementById("previous-lesson").addEventListener("click",()=>{if(activeLessonIndex>0)openLesson(activeLessonIndex-1);});
document.getElementById("restart-course-top").addEventListener("click",()=>{openLesson(0);toast("Tu reprends le parcours depuis la première leçon. Ta progression est conservée.");});
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

function setAuthMessage(message,isError=false){
  const el=document.getElementById("auth-message");
  el.textContent=message;el.classList.toggle("error",isError);
}
function showAuthModal(){
  document.getElementById("auth-modal").classList.remove("hidden");
  updateAuthForm();
}
function hideAuthModal(){document.getElementById("auth-modal").classList.add("hidden");}
function updateAuthForm(){
  const logged=!!authUser;
  document.getElementById("auth-open").textContent=logged?(authUser.user_metadata?.display_name||authUser.email?.split("@")[0]||"Mon compte"):"Connexion";
  document.getElementById("auth-title").textContent=logged?"Ton compte SkillUp":"Retrouve ta progression";
  document.querySelector(".auth-description").textContent=logged
    ? "Ton compte est connecté. Ta progression est synchronisée en ligne."
    : "Crée un compte gratuit pour retrouver tes leçons et tes résultats sur tes appareils.";
  document.getElementById("auth-name").classList.toggle("hidden",authMode!=="signup"||logged);
  document.querySelector('label[for="auth-name"]').classList.toggle("hidden",authMode!=="signup"||logged);
  document.getElementById("auth-email").classList.toggle("hidden",logged);
  document.querySelector('label[for="auth-email"]').classList.toggle("hidden",logged);
  document.getElementById("auth-password").classList.toggle("hidden",logged);
  document.querySelector('label[for="auth-password"]').classList.toggle("hidden",logged);
  document.getElementById("auth-submit").classList.toggle("hidden",logged);
  document.getElementById("auth-submit").textContent=authMode==="signup"?"Créer mon compte":"Se connecter";
  document.getElementById("auth-switch").classList.toggle("hidden",logged);
  document.getElementById("auth-switch").textContent=authMode==="signup"?"Déjà inscrit ? Se connecter":"Pas encore de compte ? Créer un compte";
  document.getElementById("auth-signout").classList.toggle("hidden",!logged);
  setAuthMessage("");
}
async function loadCloudState(user){
  const {data,error}=await supabaseClient.from("learner_state").select("progress").eq("user_id",user.id).maybeSingle();
  if(error){console.warn("SkillUp cloud load:",error.message);return;}
  const cloud=data?.progress;
  if(cloud && typeof cloud==="object" && Object.keys(cloud).length){
    state={...defaultState,...cloud,notes:cloud.notes&&typeof cloud.notes==="object"?cloud.notes:{}};
    if(!Number.isInteger(state.currentLesson))state.currentLesson=0;
    saveState();
  }else{
    const {error:writeError}=await supabaseClient.from("learner_state").upsert({user_id:user.id,progress:state,updated_at:new Date().toISOString()},{onConflict:"user_id"});
    if(writeError)console.warn("SkillUp cloud initial save:",writeError.message);
  }
  renderStats();renderProgress();
}
async function initAuth(){
  if(!supabaseClient){document.getElementById("auth-open").disabled=true;return;}
  const {data}=await supabaseClient.auth.getSession();
  authUser=data.session?.user||null;
  if(authUser)await loadCloudState(authUser);
  else { state={...defaultState,notes:{}};localStorage.removeItem(STORAGE_KEY);renderStats();renderProgress(); }
  updateAuthForm();
  supabaseClient.auth.onAuthStateChange((event,session)=>{
    authUser=session?.user||null;
    updateAuthForm();
    if(authUser)setTimeout(()=>loadCloudState(authUser),0);
    else if(event==="SIGNED_OUT")toast("Tu es déconnecté de SkillUp.");
  });
}
document.getElementById("auth-open").addEventListener("click",showAuthModal);
document.getElementById("auth-close").addEventListener("click",hideAuthModal);
document.getElementById("auth-modal").addEventListener("click",e=>{if(e.target.id==="auth-modal")hideAuthModal();});
document.getElementById("auth-switch").addEventListener("click",()=>{
  authMode=authMode==="login"?"signup":"login";updateAuthForm();
});
document.getElementById("auth-form").addEventListener("submit",async e=>{
  e.preventDefault();
  const email=document.getElementById("auth-email").value.trim();
  const password=document.getElementById("auth-password").value;
  const display_name=document.getElementById("auth-name").value.trim();
  const submit=document.getElementById("auth-submit");
  submit.disabled=true;setAuthMessage(authMode==="signup"?"Création du compte…":"Connexion…");
  try{
    if(authMode==="signup"){
      const {data,error}=await supabaseClient.auth.signUp({email,password,options:{data:{display_name}}});
      if(error)throw error;
      if(data.session){
        authUser=data.user;await loadCloudState(authUser);setAuthMessage("Compte créé et connecté !");updateAuthForm();toast("Bienvenue sur SkillUp !");
      }else{
        authMode="login";updateAuthForm();
        setAuthMessage("Compte créé ! Consulte tes e-mails pour confirmer ton adresse, puis connecte-toi.");
      }
    }else{
      const {data,error}=await supabaseClient.auth.signInWithPassword({email,password});
      if(error)throw error;
      authUser=data.user;await loadCloudState(authUser);updateAuthForm();toast("Connexion réussie !");
    }
  }catch(err){setAuthMessage(err.message||"Une erreur est survenue. Réessaie.",true);}
  finally{submit.disabled=false;}
});
document.getElementById("auth-signout").addEventListener("click",async()=>{
  const {error}=await supabaseClient.auth.signOut();
  if(error){setAuthMessage(error.message,true);return;}
  authUser=null;clearTimeout(cloudWriteTimer);state={...defaultState,notes:{}};localStorage.removeItem(STORAGE_KEY);renderStats();renderProgress();showView("paths");updateAuthForm();hideAuthModal();
});

renderStats();
renderProgress();
initAuth();
if("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
}
