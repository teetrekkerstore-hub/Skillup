const lessons = [
  {
    id:"ai-basics", title:"L’IA : un copilote, pas un pilote automatique", kicker:"LES BASES", minutes:8,
    intro:"Comprends ce que l’IA générative sait faire — et ce qu’il vaut mieux ne pas lui confier sans contrôle.",
    objective:"Identifier le bon rôle de l’IA dans une tâche professionnelle.",
    sections:[
      {title:"L’idée essentielle", text:"Une IA générative produit du texte, des idées, des synthèses ou du code à partir de ta demande et des informations qu’elle a apprises. Elle peut être très utile, mais elle peut aussi se tromper ou inventer des détails."},
      {title:"Pense à un copilote", text:"Tu restes responsable de l’objectif, du contexte et de la validation. L’IA t’aide à aller plus vite ; elle ne remplace pas ton jugement professionnel."},
      {title:"Le bon réflexe", text:"Commence par une tâche limitée : reformuler un texte non confidentiel, préparer un plan ou générer des idées. Vérifie ensuite le résultat avant de l’utiliser."}
    ],
    deepDive:[{"title":"Ce que l’IA fait réellement","text":"Un modèle génératif repère des régularités dans les données et construit une réponse probable à partir du contexte fourni. Il ne vérifie pas automatiquement chaque phrase dans une base de faits et ne comprend pas les conséquences d’une décision comme le ferait un professionnel responsable. Une réponse peut donc être claire, structurée et pourtant inexacte."},{"title":"La règle des trois zones","text":"Zone verte : idées, plans, reformulations et brouillons sans enjeu sensible. Zone orange : chiffres, faits, recommandations ou documents qui demandent un contrôle renforcé. Zone rouge : données confidentielles non autorisées, décisions critiques ou usages interdits par les règles de l’organisation. En cas de doute, arrête-toi et demande conseil."},{"title":"Quand faut-il garder la main ?","text":"Plus l’impact d’une erreur est important, plus le contrôle humain doit être fort. Pour une reformulation sans données sensibles, une relecture attentive peut suffire. Pour un chiffre financier, une obligation réglementaire ou une décision concernant une personne, il faut une vérification indépendante et, selon le cas, l’avis d’un professionnel compétent. L’IA peut préparer des options ; elle ne doit pas être la seule source de décision."}],
    diagrams:[{ "type":"radial","title":"Le bon partage des rôles","subtitle":"L’IA accélère ; l’humain décide.","nodes":["Ton objectif","IA : proposition","Contrôle humain","Résultat validé"]},{ "type":"cycle","title":"Le feu tricolore de l’usage","subtitle":"Choisis le niveau de vigilance selon le risque.","nodes":["VERT · Brouillon","ORANGE · Vérifier","ROUGE · Stop / demander conseil"]}],
    exampleTitle:"Exemple au travail",
    example:"Au lieu de demander « Fais mon travail », demande : « Propose un plan de compte rendu à partir de ces notes fictives. Signale les informations manquantes et n’invente aucun fait. »",
    takeaway:"Utilise l’IA pour accélérer un travail que tu sais évaluer. Vérifie toujours les faits et respecte les règles de confidentialité de ton organisation.",
    question:"Quel est le meilleur réflexe lorsqu’une IA fournit une information importante pour ton travail ?",
    options:["La reprendre telle quelle si la réponse paraît convaincante.","La vérifier avec des sources fiables et les règles de ton organisation.","Demander à l’IA de garantir qu’elle ne se trompe jamais."],
    answer:1, explanation:"Exactement ! Une réponse fluide peut être fausse. La vérification reste indispensable, surtout pour les décisions et les informations sensibles."
  },
  {
    id:"prompt-clarity", title:"Formuler une demande qui donne de meilleurs résultats", kicker:"MIEUX DEMANDER", minutes:10,
    intro:"Une demande précise aide l’IA à comprendre le résultat attendu et à limiter les réponses vagues.",
    objective:"Structurer un prompt avec un objectif, du contexte et un format.",
    sections:[
      {title:"Les quatre ingrédients d’une bonne demande", text:"Précise le rôle attendu, l’objectif, le contexte utile et la forme de la réponse. Ajoute les contraintes importantes : longueur, ton, public ou éléments à éviter."},
      {title:"Donne un résultat observable", text:"« Aide-moi à préparer une réunion » est assez vague. « Prépare un ordre du jour de 30 minutes pour une réunion d’avancement, avec les décisions à prendre et les actions à attribuer » est beaucoup plus exploitable."},
      {title:"Itère sans repartir de zéro", text:"Lis la réponse, identifie ce qui manque et demande une amélioration précise. Une bonne conversation avec l’IA se construit souvent en plusieurs étapes."}
    ],
    deepDive:[{"title":"Le brief en cinq pièces","text":"1) Rôle : quelle expertise ou quel point de vue l’assistant doit-il adopter ? 2) Objectif : quel livrable précis doit-il produire ? 3) Contexte : quelles informations sont utiles ? 4) Format : liste, tableau, mail, plan ou synthèse ? 5) Contraintes : ton, longueur, public, limites et éléments à ne pas inventer. Toutes les pièces ne sont pas nécessaires à chaque demande, mais elles aident à éviter les ambiguïtés."},{"title":"Définis la qualité avant de lancer","text":"Un prompt est plus facile à améliorer lorsque tu sais ce qu’est une bonne réponse. Exemples de critères : les cinq points essentiels sont présents, le texte tient en 200 mots, chaque action a un responsable, les données manquantes sont signalées et aucun chiffre n’a été inventé. Des critères observables rendent les itérations plus efficaces."},{"title":"Ajoute un exemple et une limite","text":"Quand le format attendu est difficile à décrire, montre un exemple fictif de sortie réussie. Précise aussi les limites : ce que l’assistant ne doit pas supposer, le niveau de détail à éviter et la façon de traiter les informations absentes. Un prompt n’a pas besoin d’être long ; il doit surtout être clair, cohérent et adapté à la tâche."}],
    diagrams:[{ "type":"funnel","title":"Anatomie d’un prompt solide","subtitle":"Construis la consigne comme un brief.","nodes":["Rôle","Objectif","Contexte","Format + contraintes"]},{ "type":"radial","title":"Du vague à l’actionnable","subtitle":"Chaque précision réduit l’ambiguïté.","nodes":["Demande vague","Précisions utiles","Critères de réussite","Réponse exploitable"]}],
    exampleTitle:"Prompt à tester",
    example:"« Tu es un assistant de gestion de projet. Prépare un compte rendu court à partir des notes ci-dessous. Structure-le en décisions, actions, responsables et échéances. N’invente pas les informations manquantes : liste-les à la fin. »",
    takeaway:"Objectif + contexte + format + contraintes : cette structure simple améliore souvent la qualité de la réponse.",
    question:"Quel prompt a le plus de chances de produire un résultat utile ?",
    options:["« Fais quelque chose de professionnel. »","« Explique-moi tout sur la gestion. »","« Résume ces notes en 5 points, puis liste les décisions et les actions sans inventer de détails. »"],
    answer:2, explanation:"Oui ! Le résultat attendu, le format et la consigne de ne pas inventer rendent la demande plus précise."
  },
  {
    id:"verify-output", title:"Vérifier une réponse avant de l’utiliser", kicker:"ESPRIT CRITIQUE", minutes:9,
    intro:"Apprends à repérer les signaux qui justifient une vérification avant d’envoyer ou de partager un résultat.",
    objective:"Appliquer une méthode de vérification simple.",
    sections:[
      {title:"Pourquoi vérifier ?", text:"Une IA peut mélanger des faits, utiliser une source ancienne ou donner un chiffre plausible mais incorrect. La présentation soignée d’une réponse ne prouve pas qu’elle est exacte."},
      {title:"La méthode en trois étapes", text:"1. Repère les affirmations factuelles, les dates et les chiffres. 2. Vérifie-les dans une source fiable et récente. 3. Confirme que la réponse correspond à ton contexte et ne contient pas de données confidentielles."},
      {title:"Quand l’enjeu est élevé", text:"Pour une question juridique, financière, médicale ou réglementaire, ne te repose pas uniquement sur une réponse générée. Consulte les sources officielles ou le professionnel compétent."}
    ],
    deepDive:[{"title":"La vérification en pratique","text":"Classe les affirmations en trois catégories : vérifiables (date, chiffre, nom, règle), interprétatives (analyse, recommandation) et inconnues (information absente). Vérifie les premières auprès de sources fiables, examine les hypothèses des secondes et marque les troisièmes comme à confirmer. Ne transforme jamais une supposition en fait simplement parce qu’elle apparaît dans une réponse bien rédigée."},{"title":"Une source fiable doit répondre à la bonne question","text":"Contrôle l’auteur, la date de publication, le contexte et la source d’origine. Une page ancienne peut être exacte historiquement mais inadaptée à une règle actuelle. Pour un chiffre, vérifie l’unité, la période et le périmètre ; pour une règle, vérifie le texte officiel et son champ d’application. Garde une trace des points que tu as contrôlés lorsque l’enjeu le justifie."},{"title":"Documenter les vérifications importantes","text":"Pour un livrable à enjeu, garde une liste des affirmations contrôlées, des sources consultées et des points restant à confirmer. Cette trace facilite la relecture et permet à un collègue de comprendre pourquoi une information a été conservée. Si une source contredit la réponse générée, privilégie la source fiable et corrige le livrable."}],
    diagrams:[{ "type":"cycle","title":"La boucle de vérification","subtitle":"Ne passe pas directement de la génération à la diffusion.","nodes":["Réponse IA","Repérer les affirmations","Vérifier les sources","Corriger / valider"]},{ "type":"matrix","title":"Trois statuts pour les informations","subtitle":"Sépare ce que tu sais de ce que tu supposes.","nodes":["FAIT · Source confirmée","ANALYSE · À examiner","INCONNU · À confirmer"]}],
    exampleTitle:"Mini-cas",
    example:"L’IA cite une règle de droit et une date d’entrée en vigueur. Avant de la reprendre dans un document professionnel, consulte le texte officiel à jour et vérifie que la règle s’applique bien à ton cas.",
    takeaway:"Vérifie les faits importants à la source, en tenant compte de la date et du contexte.",
    question:"Une réponse contient une statistique précise, mais aucune source. Que fais-tu ?",
    options:["Tu la gardes si elle semble réaliste.","Tu demandes une source, puis tu vérifies l’information indépendamment.","Tu la partages et tu corriges plus tard si nécessaire."],
    answer:1, explanation:"Bonne méthode : demande la source et contrôle-la indépendamment avant de réutiliser la statistique."
  },
  {
    id:"confidentiality", title:"Protéger les informations professionnelles", kicker:"USAGE RESPONSABLE", minutes:8,
    intro:"Gagner du temps ne doit jamais se faire au détriment de la confidentialité, des données personnelles ou des règles internes.",
    objective:"Choisir une manière plus sûre d’utiliser un assistant IA.",
    sections:[
      {title:"Reconnais les données sensibles", text:"Les noms de clients, coordonnées, informations financières, données RH, identifiants, secrets commerciaux et documents internes peuvent être confidentiels."},
      {title:"Adapte ton usage", text:"Respecte les politiques de ton entreprise et les outils autorisés. Lorsque c’est possible, remplace les noms et données réelles par des exemples fictifs ou anonymisés."},
      {title:"En cas de doute", text:"Ne colle pas une information dans un outil externe simplement parce que c’est pratique. Demande conseil à ton référent sécurité, conformité ou protection des données."}
    ],
    deepDive:[{"title":"Minimiser les données","text":"Avant de copier un texte, demande-toi : l’outil est-il autorisé ? Ai-je réellement besoin de transmettre toutes ces informations ? Puis-je remplacer les noms, références, montants et dates par des exemples fictifs ? La minimisation réduit l’exposition, mais elle ne remplace pas l’autorisation de l’outil ni les règles de ton organisation."},{"title":"L’anonymisation n’est pas toujours évidente","text":"Même sans nom, une combinaison de métier, de date, de montant, de lieu ou d’événement rare peut permettre de reconnaître une personne ou un dossier. Supprime les détails inutiles, utilise des données synthétiques et n’envoie jamais de mots de passe, clés d’accès ou secrets techniques. En cas d’incident, applique la procédure interne sans tenter de le dissimuler."},{"title":"Appliquer le principe du moindre privilège","text":"Transmets uniquement le minimum nécessaire à l’objectif et utilise un service validé pour le type de données concerné. Vérifie les conditions de conservation, de partage et d’utilisation des données selon les règles de ton organisation. Un compte personnel et un compte professionnel peuvent avoir des garanties différentes : ne les considère pas comme interchangeables."}],
    diagrams:[{ "type":"radial","title":"Le contrôle avant partage","subtitle":"Quatre questions avant de coller un contenu.","nodes":["Outil autorisé ?","Données nécessaires ?","Données réduites ?","Partage conforme ?"]},{ "type":"flow","title":"Réduire l’exposition","subtitle":"Conserve le sens utile, retire les identifiants.","nodes":["Document réel","Données sensibles retirées","Exemple fictif","Usage contrôlé"]}],
    exampleTitle:"Exemple",
    example:"Pour demander de l’aide sur un courriel, remplace le nom du client, les références de dossier et les montants réels par des valeurs fictives, et vérifie que l’usage de l’outil est autorisé.",
    takeaway:"Utilise uniquement les données et les outils autorisés par ton organisation. L’anonymisation ne suffit pas toujours à rendre un partage acceptable.",
    question:"Tu veux faire résumer un courriel client dans un outil IA externe. Quel est le meilleur réflexe ?",
    options:["Copier le courriel complet pour préserver le contexte.","Vérifier les règles de l’entreprise et utiliser uniquement un outil autorisé, avec les données nécessaires.","Changer seulement le prénom et envoyer le reste."],
    answer:1, explanation:"Exact. Il faut respecter les règles internes et minimiser les données partagées ; remplacer un prénom ne garantit pas l’anonymisation."
  },
  {
    id:"daily-workflow", title:"Créer un petit rituel IA utile", kicker:"PASSER À L’ACTION", minutes:9,
    intro:"Transforme un apprentissage en habitude en choisissant une tâche simple, répétitive et facile à contrôler.",
    objective:"Concevoir un test d’usage limité et mesurable.",
    sections:[
      {title:"Choisis une tâche récurrente", text:"Exemples : préparer un ordre du jour, améliorer la clarté d’un texte non confidentiel, organiser une liste de tâches ou trouver des variantes de formulation."},
      {title:"Définis un test simple", text:"Avant de commencer, précise le temps que tu y consacres habituellement et ce que tu considères comme un bon résultat. Essaie l’IA sur une tâche à faible risque."},
      {title:"Mesure et décide", text:"Compare le résultat avec ta méthode habituelle : qualité, temps gagné, corrections nécessaires et respect des règles internes. Garde l’usage seulement s’il apporte une vraie valeur."}
    ],
    deepDive:[{"title":"Choisir une tâche adaptée","text":"Privilégie une tâche fréquente, répétitive, à faible risque et dont le résultat est facile à contrôler. Évite de commencer par une décision irréversible ou une activité où une erreur pourrait avoir des conséquences importantes. Définis une situation de référence : combien de temps prends-tu aujourd’hui et quelles erreurs rencontres-tu habituellement ?"},{"title":"Mesurer au-delà de la vitesse","text":"Chronomètre le temps total, y compris la rédaction du prompt, la relecture et les corrections. Évalue aussi la qualité, le nombre d’oublis, la facilité d’usage et le respect des règles. Si le gain de temps disparaît après vérification, ou si la qualité baisse, ajuste le processus ou abandonne cet usage."},{"title":"Formaliser le rituel en une fiche","text":"Note le déclencheur de la tâche, les données autorisées, le prompt, le contrôle obligatoire et le critère qui te fera arrêter le test. Cette fiche évite de refaire les mêmes erreurs et permet de reproduire le résultat. Après quelques essais, ajuste le prompt à partir des défauts réellement observés plutôt que d’ajouter des consignes au hasard."}],
    diagrams:[{ "type":"cycle","title":"Le cycle d’expérimentation","subtitle":"Teste petit, mesure, puis décide.","nodes":["Choisir une tâche","Tester sur un cas simple","Mesurer + vérifier","Garder / ajuster / arrêter"]},{ "type":"matrix","title":"La fiche de mesure","subtitle":"Compare avant et après sur les mêmes critères.","nodes":["Temps total","Qualité","Corrections","Risque maîtrisé"]}],
    exampleTitle:"Ton défi de 10 minutes",
    example:"Choisis une tâche non confidentielle. Rédige un prompt précis, vérifie le résultat et note : ce qui t’a fait gagner du temps, ce que tu as dû corriger et ce que tu essaieras la prochaine fois.",
    takeaway:"Un usage IA vaut la peine d’être conservé s’il améliore réellement le résultat ou le temps passé, sans augmenter les risques.",
    question:"Comment savoir si un nouvel usage de l’IA vaut la peine d’être conservé ?",
    options:["Parce que l’IA répond très vite.","Parce qu’il est à la mode dans ton secteur.","Parce qu’un test montre une amélioration utile, vérifiée et compatible avec les règles internes."],
    answer:2, explanation:"C’est ça : mesure le bénéfice réel, vérifie la qualité et respecte les règles applicables."
  },
  {
    id:"workflow-design", title:"Construire un workflow IA de bout en bout", kicker:"MÉTHODE PRATIQUE", minutes:11,
    intro:"Passe d’une demande isolée à une méthode reproductible : préparer les données, demander un résultat, contrôler puis finaliser.",
    objective:"Décrire un processus de travail avec l’IA et ses points de contrôle.",
    sections:[
      {title:"1. Définis le résultat avant l’outil",text:"Décris le livrable attendu, son destinataire et le critère qui permettra de juger sa qualité. Exemple : un compte rendu d’une page, destiné à une équipe projet, avec décisions, actions, responsables et échéances."},
      {title:"2. Prépare un contexte propre",text:"Rassemble uniquement les informations nécessaires. Retire les données personnelles ou confidentielles et utilise un outil autorisé par ton organisation. Si une information manque, demande à l’IA de la signaler au lieu de la deviner."},
      {title:"3. Sépare génération et contrôle",text:"Demande d’abord une première version structurée. Ensuite, dans une seconde étape, fais vérifier la cohérence, les omissions et les affirmations qui nécessitent une source. Termine par une relecture humaine."},
      {title:"4. Mesure la valeur",text:"Compare le temps total, corrections comprises, avec ta méthode habituelle. Note les erreurs détectées, la qualité du résultat et les cas où il vaut mieux ne pas utiliser l’IA."}
    ],
    deepDive:[{"title":"Définir les entrées et les sorties","text":"Un workflow robuste précise ce qui entre dans le processus, les transformations attendues et le format de sortie. Par exemple : entrée = notes fictives structurées ; traitement = extraction des faits puis classement ; sortie = tableau décisions/actions et liste des informations manquantes. Plus les frontières sont claires, plus il est simple de repérer une erreur."},{"title":"Placer les contrôles aux étapes sensibles","text":"Ne concentre pas toute la vérification à la fin. Contrôle la qualité des données avant l’envoi, vérifie les faits après génération et fais valider le livrable avant diffusion. Prévois aussi une solution de repli : si l’entrée est ambiguë, si une source manque ou si le résultat ne passe pas les critères, reviens à une méthode manuelle."},{"title":"Prévoir les exceptions et le retour arrière","text":"Un processus fiable indique quoi faire si les notes sont incomplètes, si le format n’est pas respecté ou si le contrôle échoue. Par exemple, l’assistant peut renvoyer une liste de questions au lieu de produire un compte rendu final. Conserve une version source et fais en sorte qu’une personne puisse reprendre la main sans dépendre du résultat généré."}],
    diagrams:[{ "type":"flow","title":"Architecture d’un workflow fiable","subtitle":"Chaque étape possède une entrée et un contrôle.","nodes":["Entrées sûres","Génération","Contrôle qualité","Validation humaine"]},{ "type":"cycle","title":"Les points de contrôle","subtitle":"La qualité se construit à chaque étape.","nodes":["Contrôle des données","Contrôle des faits","Contrôle du format","Décision de diffusion"]}],
    exampleTitle:"Workflow prêt à adapter",
    example:"Entrée : notes fictives de réunion. Étape A : extraire les faits sans interprétation. Étape B : organiser en décisions, actions, responsables et dates. Étape C : lister les informations absentes. Étape D : vérifier chaque élément avec les notes d’origine. Sortie : compte rendu relu par une personne.",
    takeaway:"Un bon workflow ne se limite pas à écrire un prompt : il prévoit les entrées, les contrôles, les limites et la validation finale.",
    question:"Quel élément rend un workflow IA plus fiable ?",
    options:["Automatiser toutes les étapes sans contrôle.","Prévoir des contrôles et une validation humaine avant diffusion.","Utiliser le prompt le plus long possible, quel que soit le besoin."],
    answer:1, explanation:"Exact : les contrôles et la validation humaine limitent les erreurs avant que le résultat soit utilisé."
  },
  {
    id:"prompt-lab", title:"Atelier : améliorer un prompt en trois versions", kicker:"ATELIER GUIDÉ", minutes:13,
    intro:"Tu vas transformer une demande vague en consigne exploitable, puis ajouter des critères de qualité et une étape de vérification.",
    objective:"Améliorer un prompt en utilisant le contexte, le format, les contraintes et les critères de réussite.",
    sections:[
      {title:"Version 1 — la demande vague",text:"« Prépare une présentation sur notre projet. » Le sujet est connu, mais le public, la durée, le message principal et la structure ne le sont pas. Le résultat risque donc d’être générique."},
      {title:"Version 2 — ajouter le contexte et le format",text:"« Tu aides un chef de projet à préparer une présentation de 5 minutes pour une équipe interne. Propose 5 diapositives : objectif, avancement, risques, décisions attendues et prochaines étapes. »"},
      {title:"Version 3 — ajouter des garde-fous",text:"« Utilise uniquement les informations fournies. N’invente aucun chiffre, nom ou échéance. Marque [À CONFIRMER] lorsqu’une donnée manque. Pour chaque risque, indique l’impact et la prochaine action. Termine par une liste des informations à vérifier avant présentation. »"},
      {title:"Évalue le résultat",text:"Note la réponse sur 5 critères : pertinence pour le public, structure, fidélité aux informations, clarté des actions et absence d’invention. Si un critère est faible, modifie uniquement la consigne qui lui correspond puis recommence."}
    ],
    deepDive:[{"title":"Comparer les versions proprement","text":"Pour apprendre de tes essais, change un élément à la fois. Si tu ajoutes simultanément le rôle, le public, le format et dix contraintes, tu ne sauras pas ce qui a amélioré le résultat. Garde la version précédente, évalue les deux avec les mêmes critères et note ce qui a changé."},{"title":"Une grille d’évaluation simple","text":"Attribue une note de 1 à 5 à la pertinence, la fidélité aux informations, la structure, la clarté et la facilité de vérification. Une excellente mise en page ne compense pas une erreur factuelle. Si la fidélité est faible, renforce les consignes sur les sources et les informations manquantes ; si la structure est faible, précise le format attendu."},{"title":"Éviter les consignes contradictoires","text":"Une demande peut devenir moins efficace si elle accumule des règles incompatibles : « sois exhaustif » et « réponds en deux lignes », par exemple. Classe les contraintes par priorité, supprime celles qui ne servent pas l’objectif et précise ce qui doit primer en cas de conflit. La simplicité contrôlée est souvent plus performante qu’un prompt interminable."}],
    diagrams:[{ "type":"funnel","title":"L’atelier en trois versions","subtitle":"Une amélioration ciblée à chaque itération.","nodes":["V1 · Demande vague","V2 · Contexte + format","V3 · Critères + garde-fous","Évaluer"]},{ "type":"matrix","title":"La grille de qualité","subtitle":"Évalue le fond avant l’apparence.","nodes":["Pertinence","Fidélité","Structure","Vérifiabilité"]}],
    exampleTitle:"À toi de pratiquer",
    example:"Prends une tâche non confidentielle que tu connais. Écris un prompt vague, améliore-le avec le contexte et le format, puis ajoute deux critères de qualité et une consigne explicite pour signaler les informations manquantes. Compare les versions.",
    takeaway:"Améliore un prompt par itérations : une modification ciblée, un résultat observé, puis une nouvelle vérification.",
    question:"Après une première réponse médiocre, quelle est la meilleure démarche ?",
    options:["Tout recommencer en demandant simplement « fais mieux ».","Identifier le critère manquant et modifier précisément la consigne.","Ajouter le plus de contraintes possible, même si elles se contredisent."],
    answer:1, explanation:"Oui : un retour ciblé permet de comprendre ce qui manque et d’améliorer la prochaine version."
  },
  {
    id:"final-project", title:"Projet final : créer ton assistant de travail responsable", kicker:"PROJET FINAL", minutes:20,
    intro:"Mobilise les acquis du parcours pour concevoir un mini-assistant IA sur une tâche professionnelle simple, utile et sans données sensibles.",
    objective:"Présenter un cas d’usage, un prompt complet, une méthode de vérification et un indicateur de valeur.",
    sections:[
      {title:"Étape 1 — choisis un cas d’usage sûr",text:"Choisis une tâche répétitive à faible risque : préparer un ordre du jour, reformuler un texte non confidentiel, organiser des tâches ou créer une première trame de compte rendu à partir de notes fictives. Évite les décisions automatisées et les données réelles sensibles."},
      {title:"Étape 2 — rédige le brief",text:"Décris le public, l’objectif, le contexte disponible, le format attendu, les contraintes et les éléments interdits. Ajoute : « N’invente aucun fait. Signale les informations manquantes et distingue les faits des suggestions. »"},
      {title:"Étape 3 — prévois les contrôles",text:"Avant de diffuser le résultat, vérifie les noms, dates, chiffres, affirmations factuelles, omissions et éventuelles données confidentielles. Si une information importante ne peut pas être vérifiée, retire-la ou marque-la comme à confirmer."},
      {title:"Étape 4 — mesure le bénéfice",text:"Réalise un essai avec un exemple fictif. Chronomètre le travail manuel puis le travail avec l’IA, corrections comprises. Compare aussi la qualité et le nombre de corrections nécessaires. N’adopte le workflow que s’il est utile et conforme aux règles applicables."},
      {title:"Livrable final",text:"Prépare une fiche d’une page contenant : le problème choisi, le prompt final, un exemple d’entrée fictive, le format de sortie, ta checklist de vérification, les risques identifiés et un indicateur de réussite. Tu peux la conserver dans tes notes ou la présenter à un collègue."}
    ],
    deepDive:[{"title":"Délimiter un projet réaliste","text":"Le but n’est pas de créer un agent autonome qui fait tout. Définis un seul problème, un utilisateur précis, une entrée fictive et un livrable que tu peux vérifier. Décris également ce que l’assistant ne doit pas faire : prendre une décision à la place d’une personne, inventer une information ou accéder à des données non autorisées."},{"title":"Présenter un résultat démontrable","text":"Ton dossier doit permettre à une autre personne de comprendre le cas d’usage et de reproduire le test. Inclus le prompt, un exemple d’entrée, un exemple de sortie, les contrôles effectués, les limites observées et une mesure avant/après. Mentionne aussi un cas où le système échoue ou doit s’arrêter : connaître les limites fait partie de la compétence."},{"title":"Présenter les limites avec honnêteté","text":"Dans ta restitution, indique les tâches que le mini-assistant réussit, celles qui demandent davantage de contrôle et celles pour lesquelles il ne doit pas être utilisé. Ajoute un exemple d’erreur possible et explique comment elle serait détectée. Un prototype responsable ne prétend pas être infaillible : il montre son périmètre, ses preuves et ses limites."}],
    diagrams:[{ "type":"radial","title":"Le mini-assistant responsable","subtitle":"Un projet utile reste sous contrôle.","nodes":["Problème ciblé","Prompt + exemple fictif","Contrôles définis","Test et validation"]},{ "type":"flow","title":"Le dossier de preuve","subtitle":"Documente le fonctionnement, pas seulement la promesse.","nodes":["Cas d’usage","Entrée / sortie","Checklist de contrôle","Mesure + limites"]}],
    exampleTitle:"Modèle de prompt final",
    example:"« Tu es un assistant de préparation de réunion. À partir des notes fictives ci-dessous, produis un compte rendu structuré en décisions, actions, responsables et échéances. N’ajoute aucun fait qui ne figure pas dans les notes. Utilise [À CONFIRMER] si une information manque. Termine par une checklist des éléments que je dois vérifier avant diffusion. Format : tableau simple, puis 3 lignes de synthèse. »",
    takeaway:"Un projet réussi est utile, vérifiable, respectueux de la confidentialité et évalué sur des résultats concrets — pas seulement sur la qualité apparente du texte.",
    question:"Quel livrable montre le mieux que ton mini-assistant est prêt à être testé ?",
    options:["Un prompt seul, sans exemple ni contrôle.","Une fiche avec cas d’usage, prompt, exemple fictif, checklist de vérification et mesure du bénéfice.","Une promesse de gain de temps sans mesure."],
    answer:1, explanation:"Exact : le prompt est une partie du projet. Les exemples, contrôles, risques et indicateurs rendent le test concret et responsable."
  }
];

const paths = [
  {id:"ai",title:"Maîtriser l’IA au travail",category:"IA & PRODUCTIVITÉ",icon:"✦",style:"violet",desc:"Utilise l’IA avec méthode, esprit critique et confiance.",lessons:8,minutes:"88 min",status:"Disponible"},
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
let reviewMode = false;
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
let activePathId="ai";
function showView(name){
  if(!authUser && ["lesson","paths","program","progress"].includes(name)){
    showView("home");
    authMode="signup";showAuthModal();
    setAuthMessage(name==="progress"?"Crée un compte gratuit pour sauvegarder et consulter ta progression.":"Crée un compte gratuit pour découvrir les parcours et commencer une formation.");
    return;
  }
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===`view-${name}`));
  document.querySelectorAll("[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  document.querySelectorAll(".mobile-nav button").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  if(name==="paths") renderPaths();
  if(name==="program") renderModuleOverview();
  if(name==="progress") renderProgress();
  window.scrollTo({top:0,behavior:"smooth"});
}
function cardHTML(path){
  const isAI=path.id==="ai";
  const progress=isAI?Math.round(state.completed.length/lessons.length*100):0;
  const available=path.status==="Disponible";
  return `<article class="path-card">
    <div class="path-card-top"><div class="path-icon ${path.style}">${path.icon}</div><span class="path-status">${available?"● Disponible":"◷ Bientôt"}</span></div>
    <span class="eyebrow">${path.category}</span><h3>${path.title}</h3><p>${path.desc}</p>
    <div class="path-card-foot"><span>${path.lessons} leçons · ${path.minutes}</span>${available?`<button class="path-open" data-open-path="${path.id}">Voir le programme →</button>`:`<span>À venir</span>`}</div>
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
function nextIncompleteIndex(){
  const index=lessons.findIndex(l=>!state.completed.includes(l.id));
  return index<0?lessons.length-1:index;
}
function renderModuleOverview(){
  const panel=document.getElementById("module-overview");if(!panel)return;
  const path=paths.find(p=>p.id===activePathId)||paths.find(p=>p.id==="ai");
  document.getElementById("program-page-title").textContent=path.title;
  document.getElementById("program-page-description").textContent=path.desc;
  document.getElementById("program-eyebrow").textContent=path.category;
  const completedCount=lessons.filter(l=>state.completed.includes(l.id)).length,nextIndex=nextIncompleteIndex();
  if(path.id!=="ai"){panel.innerHTML='<div class="empty-results">Le contenu de ce parcours arrive bientôt.</div>';return;}
  panel.innerHTML=`<div class="module-overview-head"><div><p class="eyebrow">LE PROGRAMME</p><h2 id="module-overview-title">Maîtriser l’IA au travail</h2><p class="muted">Consulte les titres des prochaines leçons et retrouve librement celles que tu as déjà terminées.</p></div><div class="module-progress-count">${completedCount}<span>/${lessons.length} terminées</span></div></div><div class="module-list">${lessons.map((l,i)=>{const done=state.completed.includes(l.id),available=i===nextIndex&&!done,locked=!done&&!available;const status=done?"Terminée":available?(completedCount===0?"À commencer":"Prochaine leçon"):"À débloquer";const action=done?`<button class="module-action module-review" data-review-lesson="${i}">↺ Revoir</button>`:available?`<button class="module-action module-start" data-start-lesson="${i}">${completedCount===0?"Commencer":"Continuer"} →</button>`:`<span class="module-lock" aria-label="Contenu verrouillé">🔒</span>`;return `<article class="module-row ${done?"is-complete":locked?"is-locked":"is-next"}"><span class="module-number">${done?"✓":String(i+1).padStart(2,"0")}</span><div class="module-row-copy"><strong>${l.title}</strong><small>${status} · ${l.minutes} min</small></div>${action}</article>`;}).join("")}</div>${completedCount===lessons.length?`<div class="module-finished"><strong>Tout le programme est terminé !</strong><p>Tu peux revoir chaque leçon ou passer le quiz final pour valider tes compétences.</p><button class="button button-primary" data-start-final-quiz>Accéder au quiz final →</button></div>`:""}`;
}
function renderStats(){
  const logged=!!authUser;
  document.querySelectorAll(".member-only").forEach(el=>{el.hidden=!logged;});
  document.getElementById("guest-welcome").hidden=logged;
  document.querySelectorAll(".guest-only").forEach(el=>el.hidden=logged);
  document.getElementById("continue-learning").innerHTML=logged?"Continuer mon parcours <span>→</span>":"Créer un compte pour commencer <span>→</span>";
  document.getElementById("auth-open").textContent=logged?(authUser.user_metadata?.display_name||authUser.email?.split("@")[0]||"Mon compte"):"Créer un compte";
  const avatar=document.getElementById("profile-avatar"); avatar.hidden=!logged; avatar.textContent=logged?(authUser.user_metadata?.display_name||authUser.email?.split("@")[0]||"S").trim().charAt(0).toUpperCase():"";
  document.getElementById("home-title").textContent=logged?("Salut, "+(authUser.user_metadata?.display_name||authUser.email?.split("@")[0]||"futur toi")+". ✦"):"Construis tes compétences. Prouve ce que tu sais faire. ✦";
  document.getElementById("home-eyebrow").textContent=logged?"TON MOMENT POUR PROGRESSER":"APPRENDS. PROUVE. DÉCROCHE.";
  document.getElementById("home-lead").textContent=logged?"10 minutes aujourd’hui peuvent changer ta façon de travailler." :"En 30 jours, construis tes premières preuves de compétences numériques et prépare-toi concrètement à décrocher un stage, un premier emploi ou une mission freelance.";
  document.getElementById("today-label").hidden=!logged;
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
  const progressList=document.getElementById("progress-path-list");
  const level=Math.floor(state.xp/100)+1, current=state.xp%100;
  const names=["Explorateur","Curieux","Pratiquant","Confirmé","Expert"];
  document.getElementById("level-name").textContent=names[Math.min(level-1,names.length-1)];
  document.querySelector(".level-medal").innerHTML=`✦<small>NIV. ${level}</small>`;
  document.getElementById("level-bar").style.width=`${current}%`;
  document.getElementById("level-caption").textContent=`${current} / 100 XP vers le niveau suivant`;
  document.getElementById("progress-path-list").innerHTML=paths.map(p=>{
    const progress=p.id==="ai"?pct():0;
    if(p.id==="ai" && state.completed.length>=lessons.length){const passed=state.finalPassed?.ai?.passed;return `<div class="progress-path-row"><div class="path-icon ${p.style}">${p.icon}</div><div class="progress-path-info"><strong>${p.title}</strong><small>${passed?"Quiz final validé · attestation disponible":"Leçons terminées · quiz final à réussir (30/40)"}</small></div><button class="text-button" data-start-final-quiz>${passed?"Repasser le quiz":"Passer le quiz final"} →</button>${passed?'<button class="text-button" data-open-certificate>Attestation ↗</button>':""}</div>`;}return `<div class="progress-path-row"><div class="path-icon ${p.style}">${p.icon}</div><div class="progress-path-info"><strong>${p.title}</strong><small>${p.id==="ai"?`${state.completed.length} leçon(s) terminée(s) sur ${lessons.length}`:"Parcours bientôt disponible"}</small></div><div class="mini-progress"><span style="width:${progress}%"></span></div></div>`;
  }).join("");
}
function svgLabelLines(label,max){const words=String(label).split(/\s+/);const lines=[];let line="";words.forEach(word=>{if((line+" "+word).trim().length>max&&line){lines.push(line);line=word;}else line=(line+" "+word).trim();});if(line)lines.push(line);return lines.slice(0,3);}
function svgText(label,x,y,max,lineHeight){const lines=svgLabelLines(label,max||16);const start=y-((lines.length-1)*(lineHeight||16))/2;return '<text x="'+x+'" y="'+start+'" text-anchor="middle" dominant-baseline="middle" class="infographic-label">'+lines.map((line,i)=>'<tspan x="'+x+'" dy="'+(i===0?0:(lineHeight||16))+'">'+line+'</tspan>').join("")+'</text>';}
function renderInfographic(d,index){
 const palette=["#4d57cf","#f1847f","#8e88ff","#f5a43a","#2697bd","#83b91e"],colors=d.type==="cycle"?["#4d57cf","#f5a43a","#83b91e","#2697bd","#8e88ff"]:palette,nodes=d.nodes||[];let body="";
 if(d.type==="radial"){
  const pts=[[360,66],[555,170],[485,325],[235,325],[165,170]],count=Math.min(nodes.length,pts.length);
  for(let i=0;i<count;i++){const p=pts[i];body+='<line x1="360" y1="205" x2="'+p[0]+'" y2="'+p[1]+'" stroke="'+colors[i]+'" stroke-width="7" stroke-linecap="round" opacity=".8"/>';}
  body+='<circle cx="360" cy="205" r="77" fill="#fff" stroke="#e6e7f4" stroke-width="2"/><circle cx="360" cy="205" r="63" fill="#282d71"/><text x="360" y="198" text-anchor="middle" class="infographic-center">'+(d.center||"IA")+'</text><text x="360" y="221" text-anchor="middle" class="infographic-center-small">EN PRATIQUE</text>';
  for(let i=0;i<count;i++){const p=pts[i];body+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="62" fill="'+colors[i]+'" stroke="#fff" stroke-width="4"/><circle cx="'+(p[0]-43)+'" cy="'+(p[1]-43)+'" r="18" fill="'+colors[i]+'" stroke="#fff" stroke-width="2"/><text x="'+(p[0]-43)+'" y="'+(p[1]-37)+'" text-anchor="middle" class="infographic-number">'+(i+1)+'</text>'+svgText(nodes[i],p[0],p[1]+3,15,16);}
 }else if(d.type==="cycle"){
  const pts=[[360,65],[555,200],[360,335],[165,200]],count=Math.min(nodes.length,4);
  body+='<circle cx="360" cy="200" r="126" fill="none" stroke="#e8e6f6" stroke-width="20" stroke-dasharray="12 9"/>';
  for(let i=0;i<count;i++){const p=pts[i],q=pts[(i+1)%count],mx=(p[0]+q[0])/2+(i%2?25:-25),my=(p[1]+q[1])/2+(i%2?-20:20);body+='<path d="M '+p[0]+' '+p[1]+' Q '+mx+' '+my+' '+q[0]+' '+q[1]+'" fill="none" stroke="'+colors[i]+'" stroke-width="7" stroke-linecap="round" opacity=".9"/>';}
  for(let i=0;i<count;i++){const p=pts[i];body+='<rect x="'+(p[0]-75)+'" y="'+(p[1]-43)+'" width="150" height="86" rx="26" fill="'+colors[i]+'" stroke="#fff" stroke-width="4"/><text x="'+p[0]+'" y="'+(p[1]-23)+'" text-anchor="middle" class="infographic-number">'+(i+1)+'</text>'+svgText(nodes[i],p[0],p[1]+8,16,15);}
  body+='<circle cx="360" cy="200" r="48" fill="#fff" stroke="#e3e2f1" stroke-width="2"/><text x="360" y="196" text-anchor="middle" class="infographic-hub">BOUCLE</text><text x="360" y="215" text-anchor="middle" class="infographic-hub-small">D’AMÉLIORATION</text>';
 }else if(d.type==="funnel"){
  const ys=[48,135,222,309],widths=[520,440,360,280],count=Math.min(nodes.length,4);
  for(let i=0;i<count;i++){const w=widths[i],y=ys[i],x=(720-w)/2;body+='<path d="M '+x+' '+y+' L '+(x+w)+' '+y+' L '+(x+w-22)+' '+(y+66)+' L '+(x+22)+' '+(y+66)+' Z" fill="'+colors[i]+'" stroke="#fff" stroke-width="3"/>'+svgText(nodes[i],360,y+33,27,17);}
 }else if(d.type==="matrix"){
  const pts=[[180,130],[540,130],[180,290],[540,290]],count=Math.min(nodes.length,4);
  body+='<rect x="80" y="28" width="560" height="344" rx="28" fill="#f7f7fc" stroke="#e3e4f2" stroke-width="2"/>';
  for(let i=0;i<count;i++){const p=pts[i];body+='<rect x="'+(p[0]-125)+'" y="'+(p[1]-58)+'" width="250" height="116" rx="22" fill="'+colors[i]+'" stroke="#fff" stroke-width="4"/><circle cx="'+(p[0]-94)+'" cy="'+(p[1]-30)+'" r="15" fill="#fff" opacity=".95"/><text x="'+(p[0]-94)+'" y="'+(p[1]-25)+'" text-anchor="middle" class="infographic-matrix-number">'+(i+1)+'</text>'+svgText(nodes[i],p[0]+8,p[1]+4,22,17);}
 }else{
  const count=Math.min(nodes.length,4),xs=[100,273,446,619];body+='<path d="M 80 200 H 640" stroke="#dddced" stroke-width="12" stroke-linecap="round"/>';
  for(let i=0;i<count;i++){const x=xs[i];if(i<count-1)body+='<path d="M '+(x+61)+' 200 H '+(xs[i+1]-61)+'" stroke="'+colors[i]+'" stroke-width="7" stroke-linecap="round"/><path d="M '+(xs[i+1]-72)+' 190 L '+(xs[i+1]-60)+' 200 L '+(xs[i+1]-72)+' 210" fill="none" stroke="'+colors[i]+'" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>';body+='<circle cx="'+x+'" cy="200" r="61" fill="'+colors[i]+'" stroke="#fff" stroke-width="4"/><text x="'+x+'" y="164" text-anchor="middle" class="infographic-number">'+(i+1)+'</text>'+svgText(nodes[i],x,207,13,15);}
 }
 const caption=d.type==="radial"?"Les éléments se répondent autour d’un principe central.":d.type==="cycle"?"Chaque étape alimente la suivante : le cycle recommence après contrôle.":d.type==="funnel"?"Les étapes resserrent progressivement la demande vers un résultat précis.":d.type==="matrix"?"Compare les dimensions pour repérer les points à renforcer.":"Suis le chemin de gauche à droite et vérifie chaque transition.";
 return '<article class="lesson-diagram infographic-card infographic-'+(d.type||"flow")+'"><div class="infographic-heading"><span class="infographic-kicker">CARTE VISUELLE · 0'+(index+1)+'</span><span class="infographic-symbol">✳</span></div><h3>'+d.title+'</h3><p class="infographic-subtitle">'+d.subtitle+'</p><svg class="infographic-svg" viewBox="0 0 720 400" role="img" aria-label="'+d.title+': '+nodes.join(", ")+'" xmlns="http://www.w3.org/2000/svg">'+body+'</svg><div class="infographic-caption"><span></span>'+caption+'</div></article>';
}
function openLesson(index, asReview=false){
  if(!authUser){showAuthModal();setAuthMessage("Connecte-toi ou crée un compte pour accéder aux parcours.");return;}
  activeLessonIndex=Math.max(0,Math.min(index,lessons.length-1));
  const target=lessons[activeLessonIndex],alreadyCompleted=state.completed.includes(target.id);
  if(asReview&&!alreadyCompleted){toast("Tu pourras revoir cette leçon après l’avoir terminée.");return;}
  if(!asReview&&activeLessonIndex!==nextIncompleteIndex()&&!alreadyCompleted){toast("Termine d’abord la leçon précédente pour débloquer celle-ci.");return;}
  reviewMode=asReview||alreadyCompleted;
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
  document.getElementById("lesson-content").innerHTML=l.sections.map(s=>`<h3>${s.title}</h3><p>${s.text}</p>`).join("")+
    (l.deepDive?.length?`<section class="lesson-deep-dive"><h2>Pour aller plus loin</h2>${l.deepDive.map(d=>`<article class="deep-dive-card"><h3>${d.title}</h3><p>${d.text}</p></article>`).join("")}</section>`:"")+
    (l.diagrams?.length?`<section class="lesson-diagrams" aria-label="Infographies pédagogiques">${l.diagrams.map((d,i)=>renderInfographic(d,i)).join("")}</section>`:"")+
    `<div class="example-box"><strong>${l.exampleTitle}</strong><p>${l.example}</p></div>`;
  document.getElementById("quiz-question").textContent=l.question;
  document.getElementById("quiz-options").innerHTML=l.options.map((o,i)=>`<button class="quiz-option" data-option="${i}"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${o}</span></button>`).join("");
  document.getElementById("quiz-feedback").textContent="";
  document.getElementById("quiz-feedback").className="quiz-feedback";
  document.getElementById("check-answer").classList.remove("hidden");
  document.getElementById("check-answer").disabled=true;
  document.getElementById("next-lesson").classList.add("hidden");
  document.getElementById("next-lesson").textContent=reviewMode?"Retour au programme →":activeLessonIndex===lessons.length-1?"Terminer le parcours ✓":"Leçon suivante →";
  document.getElementById("lesson-count").textContent=`LEÇON ${activeLessonIndex+1} SUR ${lessons.length}${reviewMode?" · RÉVISION":""}`;
  document.getElementById("restart-course-top").classList.toggle("hidden",reviewMode);
  document.getElementById("check-answer").textContent=reviewMode?"Vérifier ma réponse (sans impact)":"Vérifier ma réponse";
  document.querySelector(".xp-aside").classList.toggle("hidden",reviewMode);
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
  if(!reviewMode){if(correct&&!state.passed.includes(l.id)){state.passed.push(l.id);state.xp+=20;}if(!alreadyDone){state.completed.push(l.id);state.xp+=10;}touchDaily();saveState();renderStats();}
  document.getElementById("check-answer").classList.add("hidden");document.getElementById("next-lesson").classList.remove("hidden");
  if(reviewMode)toast("Mode révision : ta progression et tes XP ne changent pas.");else if(correct)toast(alreadyDone?"Bonne réponse ! Aucun XP supplémentaire.":"Leçon terminée : progression enregistrée.");else toast(alreadyDone?"Révision terminée, progression conservée.":"Leçon terminée, tu peux continuer.");
}
function nextLesson(){
  if(reviewMode){showView("program");return;}
  if(activeLessonIndex<lessons.length-1)openLesson(activeLessonIndex+1);else {startFinalQuiz();}
}
document.addEventListener("click",e=>{
  const finalBtn=e.target.closest("[data-start-final-quiz]");if(finalBtn){startFinalQuiz();return;}const certBtn=e.target.closest("[data-open-certificate]");if(certBtn){openEarnedCertificate();return;}
  const viewBtn=e.target.closest("[data-view]");
  if(viewBtn){e.preventDefault();showView(viewBtn.dataset.view);return;}
  const pathBtn=e.target.closest("[data-open-path]");
  if(pathBtn){
    if(!authUser){showAuthModal();setAuthMessage("Crée un compte ou connecte-toi pour découvrir les parcours et commencer une formation.");return;}
    const selectedPath=paths.find(p=>p.id===pathBtn.dataset.openPath);
    if(!selectedPath)return;
    if(selectedPath.status!=="Disponible"){toast("Ce parcours arrive bientôt. On le prépare pour la prochaine version !");return;}
    activePathId=selectedPath.id;
    showView("program");
    return;
  }
  const backPaths=e.target.closest("#back-to-paths");
  if(backPaths){showView("paths");return;}
  const reviewBtn=e.target.closest("[data-review-lesson]");if(reviewBtn){openLesson(Number(reviewBtn.dataset.reviewLesson),true);return;}
  const startBtn=e.target.closest("[data-start-lesson]");if(startBtn){openLesson(Number(startBtn.dataset.startLesson),false);return;}
  const option=e.target.closest("[data-option]");
  if(option){handleOptionClick(option);return;}
});
document.getElementById("continue-learning").addEventListener("click",()=>{if(!authUser){showAuthModal();setAuthMessage("Connecte-toi ou crée un compte pour continuer ton apprentissage.");return;}if(state.completed.length>=lessons.length){startFinalQuiz();return;}openLesson(nextIncompleteIndex(),false);});
document.getElementById("back-to-path").addEventListener("click",()=>showView("program"));
document.getElementById("check-answer").addEventListener("click",checkAnswer);
document.getElementById("next-lesson").addEventListener("click",nextLesson);
document.getElementById("previous-lesson").addEventListener("click",()=>{if(activeLessonIndex>0)openLesson(activeLessonIndex-1);});
document.getElementById("restart-course-top").addEventListener("click",()=>{openLesson(nextIncompleteIndex(),false);toast("Tu reprends à la prochaine leçon non terminée. Ta progression est conservée.");});
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
  document.getElementById("google-auth").classList.toggle("hidden",logged);
  document.querySelector(".auth-divider").classList.toggle("hidden",logged);
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
  else { state={...defaultState,notes:{}};localStorage.removeItem(STORAGE_KEY);renderStats();renderProgress();showView("home"); }
  updateAuthForm();
  supabaseClient.auth.onAuthStateChange((event,session)=>{
    authUser=session?.user||null;
    updateAuthForm();
    if(authUser)setTimeout(()=>loadCloudState(authUser),0);
    else if(event==="SIGNED_OUT")toast("Tu es déconnecté de SkillUp.");
  });
}
document.getElementById("auth-open").addEventListener("click",()=>{authMode=authUser?"login":"signup";showAuthModal();});
document.getElementById("guest-signup").addEventListener("click",()=>{authMode="signup";showAuthModal();});
document.getElementById("guest-login").addEventListener("click",()=>{authMode="login";showAuthModal();});
for(const id of ["mid-signup","bottom-signup"]){const button=document.getElementById(id);if(button)button.addEventListener("click",()=>{authMode="signup";showAuthModal();});}
document.querySelectorAll("[data-category-cta]").forEach(button=>button.addEventListener("click",()=>{const category=button.dataset.categoryCta;if(category==="productivity"){showView("paths");activePathFilter="productivity";document.querySelectorAll("#path-filters [data-filter]").forEach(b=>b.classList.toggle("active",b.dataset.filter==="productivity"));renderPaths();}else{authMode="signup";showAuthModal();setAuthMessage("Crée ton compte gratuitement pour suivre les prochains parcours SkillUp.");}}));
document.getElementById("google-auth").addEventListener("click",async()=>{if(!supabaseClient){setAuthMessage("Connexion indisponible.",true);return;}setAuthMessage("Redirection vers Google…");const {error}=await supabaseClient.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.href}});if(error)setAuthMessage(error.message||"Vérifie la configuration Google dans Supabase.",true);});
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
  authUser=null;clearTimeout(cloudWriteTimer);state={...defaultState,notes:{}};localStorage.removeItem(STORAGE_KEY);renderStats();renderProgress();showView("home");updateAuthForm();hideAuthModal();
});


/* Cookie consent: optional categories stay off until the visitor opts in. */
const COOKIE_CONSENT_KEY = "skillup-cookie-consent-v1";
function readCookieConsent(){
  try { return JSON.parse(localStorage.getItem(COOKIE_CONSENT_KEY)||"null"); }
  catch { return null; }
}
function closeCookieConsent(){ document.getElementById("cookie-consent").classList.add("hidden"); }
function saveCookieConsent(analytics, personalization){
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({essential:true,analytics:!!analytics,personalization:!!personalization,savedAt:new Date().toISOString()}));
  closeCookieConsent();
  toast("Tes préférences de confidentialité sont enregistrées.");
}
function openCookieSettings(){
  const panel=document.getElementById("cookie-consent");
  const choices=document.getElementById("cookie-choices");
  const settingsButton=document.getElementById("cookie-settings");
  const saveButton=document.getElementById("cookie-save");
  const closeButton=document.getElementById("cookie-close");
  const current=readCookieConsent();
  document.getElementById("cookie-analytics").checked=!!current?.analytics;
  document.getElementById("cookie-personalization").checked=!!current?.personalization;
  choices.hidden=false; settingsButton.classList.add("hidden"); saveButton.classList.remove("hidden");
  closeButton.hidden=false; panel.classList.remove("hidden");
  document.getElementById("cookie-title").textContent="Vos préférences";
}
function initCookieConsent(){
  const panel=document.getElementById("cookie-consent");
  if(!readCookieConsent()) panel.classList.remove("hidden");
  document.getElementById("cookie-accept").addEventListener("click",()=>saveCookieConsent(true,true));
  document.getElementById("cookie-reject").addEventListener("click",()=>saveCookieConsent(false,false));
  document.getElementById("cookie-settings").addEventListener("click",openCookieSettings);
  document.getElementById("cookie-save").addEventListener("click",()=>saveCookieConsent(document.getElementById("cookie-analytics").checked,document.getElementById("cookie-personalization").checked));
  document.getElementById("cookie-close").addEventListener("click",closeCookieConsent);
  document.querySelectorAll("[data-cookie-settings]").forEach(el=>el.addEventListener("click",openCookieSettings));
}

renderStats();
renderProgress();
initAuth();
if("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
}

initCookieConsent();

/* Motion is progressive enhancement: content stays visible without IntersectionObserver. */
function initScrollReveals(){
  const items=document.querySelectorAll(".reveal-on-scroll");
  if(!("IntersectionObserver" in window)){items.forEach(el=>el.classList.add("is-visible"));return;}
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}});},{threshold:.14,rootMargin:"0px 0px -35px 0px"});
  items.forEach(el=>observer.observe(el));
}
initScrollReveals();

/* Final assessment: randomized 40-question sample from a larger question bank. */
const finalQuestionBank = [
{t:"Prompting",q:"Quel élément rend une demande à une IA plus utile ?",o:["Une consigne précise avec contexte et résultat attendu","Le plus de mots possible sans structure","Une demande volontairement ambiguë","Uniquement des majuscules"],a:0,e:"Le contexte, l’objectif et le format attendu aident l’IA à produire une réponse pertinente."},
{t:"Prompting",q:"Tu veux un compte rendu de réunion. Que faut-il préciser ?",o:["Seulement « résume »","Le public, les décisions, les actions et le format souhaité","De répondre très vite, sans autre indication","De tout inventer si une information manque"],a:1,e:"Préciser les éléments attendus améliore l’utilité et la structure du compte rendu."},
{t:"Prompting",q:"Une réponse est trop longue. Quelle relance est la plus efficace ?",o:["« Recommence »","« Fais mieux »","« Résume en cinq puces, avec les trois décisions principales »","Répéter exactement la même demande"],a:2,e:"Une relance avec une contrainte mesurable donne une direction claire."},
{t:"Prompting",q:"Pourquoi demander à l’IA d’adopter un rôle peut-il aider ?",o:["Cela garantit toujours la vérité","Cela remplace la vérification","Cela autorise l’accès à des données privées","Cela oriente le ton et l’angle de la réponse"],a:3,e:"Un rôle sert de cadre de rédaction, sans garantir l’exactitude du contenu."},
{t:"Prompting",q:"Quel format demander pour comparer plusieurs options ?",o:["Un texte sans titres","Un tableau avec critères communs","Une histoire fictive","Une liste de synonymes"],a:1,e:"Un tableau facilite la comparaison sur des critères identiques."},
{t:"Prompting",q:"Une bonne instruction concernant les informations manquantes est :",o:["« Complète les trous en devinant »","« Ignore les incertitudes »","« Signale ce qui manque et pose des questions si nécessaire »","« Présente toutes les hypothèses comme des faits »"],a:2,e:"L’incertitude explicite réduit le risque d’informations inventées."},
{t:"Prompting",q:"Comment améliorer une réponse qui ne respecte pas le ton souhaité ?",o:["Préciser le public et demander un ton adapté, avec un exemple","Ajouter des emojis au hasard","Supprimer le contexte","Demander une réponse plus longue uniquement"],a:0,e:"Le public, le ton et un exemple concret cadrent mieux la rédaction."},
{t:"Prompting",q:"Pourquoi décomposer une tâche complexe en étapes ?",o:["Pour éviter tout contrôle humain","Pour rendre la tâche plus vérifiable et corriger chaque étape","Pour rendre le prompt plus mystérieux","Pour garantir un résultat parfait"],a:1,e:"Des étapes explicites facilitent le contrôle et les ajustements."},
{t:"Vérification",q:"L’IA cite une statistique importante sans source. Que faire ?",o:["La reprendre directement","Supposer qu’elle est récente","La vérifier dans une source fiable et datée","La publier puis attendre les corrections"],a:2,e:"Les faits et chiffres importants doivent être vérifiés auprès de sources fiables."},
{t:"Vérification",q:"Que signifie une hallucination d’IA ?",o:["Une réponse fluide mais fausse ou inventée","Une panne d’écran","Une réponse nécessairement mal écrite","Un document chiffré"],a:0,e:"Une IA peut produire une information plausible mais inexacte."},
{t:"Vérification",q:"Quelle information faut-il vérifier en priorité avant diffusion ?",o:["La couleur des titres","Les espaces entre paragraphes","La longueur de la page","Les chiffres, noms, dates et affirmations sensibles"],a:3,e:"Les éléments factuels à fort impact demandent une vérification spécifique."},
{t:"Vérification",q:"Quelle est la meilleure utilisation d’une réponse générée ?",o:["La considérer comme une décision finale","L’utiliser comme brouillon à vérifier et adapter","La diffuser sans la lire","La traiter comme une source juridique officielle"],a:1,e:"L’IA assiste le travail ; l’utilisateur reste responsable de la validation."},
{t:"Vérification",q:"Deux sources fiables se contredisent. Quelle démarche adopter ?",o:["Choisir celle qui confirme son avis","Prendre la plus courte","Comparer leur date, méthode, périmètre et autorité","Mélanger les deux chiffres"],a:2,e:"Le contexte méthodologique et la fraîcheur expliquent souvent les écarts."},
{t:"Vérification",q:"Pourquoi demander les sources d’une réponse ne suffit-il pas ?",o:["Parce qu’une source citée peut être inexistante ou mal interprétée","Parce que les sources sont toujours inutiles","Parce que les liens garantissent la vérité","Parce que l’IA ne peut jamais citer de documents"],a:0,e:"Il faut ouvrir et vérifier les références, pas seulement lire les citations proposées."},
{t:"Vérification",q:"Que faire si tu ne peux pas vérifier une affirmation essentielle ?",o:["La présenter comme certaine","Supprimer toute nuance","Inventer une référence","La signaler comme non vérifiée ou ne pas l’utiliser"],a:3,e:"Une incertitude non résolue doit rester explicite."},
{t:"Vérification",q:"Quel usage est le plus adapté à une IA générative ?",o:["Trancher seule une décision médicale","Produire une première version de texte à relire","Certifier automatiquement un contrat","Garantir l’absence d’erreurs"],a:1,e:"La rédaction de brouillons est utile, à condition de garder un contrôle humain."},
{t:"Données & confidentialité",q:"Que faire avant de coller des données client dans un outil d’IA public ?",o:["Vérifier les règles approuvées et retirer les données sensibles","Copier tout le dossier","Changer uniquement la police","Demander à l’IA de garder le secret"],a:0,e:"Il faut respecter les politiques de sécurité et minimiser les données partagées."},
{t:"Données & confidentialité",q:"Quelle donnée est particulièrement risquée à partager sans autorisation ?",o:["Un titre générique","Une idée publique","Un mot de passe ou un identifiant secret","Une formule de politesse"],a:2,e:"Les identifiants et secrets ne doivent pas être transmis à un service non autorisé."},
{t:"Données & confidentialité",q:"À quoi sert l’anonymisation d’un exemple ?",o:["À garantir que toute donnée peut être partagée","À supprimer les identifiants permettant de relier les données à une personne","À rendre le texte plus long","À confirmer l’exactitude de l’IA"],a:1,e:"L’anonymisation vise à empêcher l’identification, même si elle doit être évaluée avec soin."},
{t:"Données & confidentialité",q:"Un collègue te demande d’utiliser un outil non approuvé avec des données internes. Que faire ?",o:["L’utiliser discrètement","Partager seulement la moitié du fichier","Le faire si c’est urgent","Suivre la politique interne et choisir un outil autorisé"],a:3,e:"La rapidité ne remplace pas les règles de sécurité de l’organisation."},
{t:"Données & confidentialité",q:"Pourquoi faut-il limiter les données envoyées à une IA ?",o:["Pour réduire l’exposition et ne transmettre que le nécessaire","Pour empêcher l’IA de répondre","Pour augmenter la taille du prompt","Pour éviter d’avoir à relire"],a:0,e:"Le principe de minimisation réduit les risques de confidentialité."},
{t:"Données & confidentialité",q:"Un texte généré contient des informations personnelles non nécessaires. Que faire ?",o:["Les mettre en gras","Les envoyer à davantage de personnes","Les retirer et vérifier les règles de traitement","Les conserver pour faire plus professionnel"],a:2,e:"Ne conserver que les données nécessaires protège la vie privée."},
{t:"Données & confidentialité",q:"Quelle affirmation sur les outils d’IA est correcte ?",o:["Tous utilisent les données de la même façon","Les règles de conservation et d’entraînement varient selon le service et le contrat","Aucun outil ne conserve de données","Une donnée publique ne peut jamais être sensible"],a:1,e:"Il faut vérifier les conditions et paramètres propres à chaque service."},
{t:"Productivité",q:"Quelle tâche est un bon candidat à l’assistance de l’IA ?",o:["Approuver seule un paiement important","Contourner une procédure de contrôle","Envoyer automatiquement toutes les réponses sans supervision","Classer et résumer des notes non sensibles"],a:3,e:"Les tâches de synthèse et de structuration se prêtent bien à une assistance supervisée."},
{t:"Productivité",q:"Comment utiliser l’IA pour préparer un courriel professionnel ?",o:["Fournir l’objectif, le destinataire et les points à couvrir, puis relire","Lui donner un mot de passe","Envoyer directement son premier jet","Demander un message sans préciser le contexte"],a:0,e:"Le contexte permet de rédiger un message plus adapté ; une relecture reste nécessaire."},
{t:"Productivité",q:"Quel indicateur aide à évaluer le gain de temps d’un outil ?",o:["Le nombre d’emojis produits","Le nombre de mots du prompt","Le temps avant/après, avec la qualité du résultat","Le nombre de fenêtres ouvertes"],a:2,e:"Le gain doit être mesuré en tenant compte du temps et de la qualité."},
{t:"Productivité",q:"Pour préparer une réunion avec l’IA, que peux-tu lui demander ?",o:["D’inventer les décisions à venir","Un ordre du jour structuré selon les objectifs fournis","De révéler les informations privées des participants","De remplacer la réunion dans tous les cas"],a:1,e:"Un ordre du jour peut être préparé à partir d’objectifs et d’informations appropriés."},
{t:"Productivité",q:"Comment éviter un texte trop générique ?",o:["Supprimer tout détail","Ajouter des affirmations non vérifiées","Demander plus de jargon","Fournir des exemples, le public et les contraintes métier"],a:3,e:"Les détails utiles ancrent la réponse dans le besoin réel."},
{t:"Productivité",q:"Quel est le meilleur usage de l’IA pour analyser un document long ?",o:["Demander une synthèse et vérifier les points importants dans le document original","Supposer que chaque détail sera retenu","Ignorer les annexes pertinentes","Partager le document sans vérifier sa sensibilité"],a:0,e:"La synthèse aide à naviguer, mais les conclusions doivent être contrôlées dans la source."},
{t:"Productivité",q:"L’IA produit un tableau avec des totaux. Quelle vérification est utile ?",o:["Changer les couleurs","Vérifier uniquement le titre","Recalculer quelques valeurs et contrôler les formules","Supposer que le tableau est exact car il est bien présenté"],a:2,e:"Les calculs générés doivent être contrôlés, surtout s’ils soutiennent une décision."},
{t:"Productivité",q:"Comment rendre une tâche récurrente plus efficace avec l’IA ?",o:["Changer d’objectif chaque fois","Créer un modèle de prompt, le tester et l’améliorer","Ne jamais documenter le processus","Automatiser sans étape de contrôle"],a:1,e:"Un modèle réutilisable permet d’obtenir des résultats plus cohérents et mesurables."},
{t:"Esprit critique",q:"Une réponse confirme exactement ton opinion. Quelle attitude adopter ?",o:["La croire immédiatement","Écarter les avis contraires","Demander uniquement d’autres arguments similaires","Chercher aussi les contre-arguments et vérifier les faits"],a:3,e:"La recherche de contre-exemples aide à limiter le biais de confirmation."},
{t:"Esprit critique",q:"Pourquoi un ton assuré n’est-il pas une preuve d’exactitude ?",o:["Le style fluide peut masquer une erreur","Les réponses assurées sont toujours fausses","Les erreurs sont toujours évidentes","Le ton mesure la qualité des sources"],a:0,e:"La confiance exprimée par le texte n’est pas une mesure fiable de vérité."},
{t:"Esprit critique",q:"Comment évaluer une recommandation de l’IA ?",o:["Choisir celle qui est la plus élégante","Suivre la première proposition","Comparer les critères, hypothèses, risques et sources","Ne pas tenir compte du contexte"],a:2,e:"Une recommandation doit être confrontée aux contraintes et aux preuves disponibles."},
{t:"Esprit critique",q:"Que faire si une réponse semble biaisée ?",o:["La diffuser telle quelle","Demander plusieurs perspectives et vérifier les représentations utilisées","Masquer les résultats gênants","Supposer que l’IA est neutre par définition"],a:1,e:"Comparer les perspectives aide à détecter les omissions et biais potentiels."},
{t:"Esprit critique",q:"Une IA propose une décision RH automatisée sur des personnes. Quelle approche est préférable ?",o:["Laisser l’outil décider sans explication","Accepter le classement sans examen","Utiliser des critères cachés","Prévoir une évaluation humaine, équitable, transparente et conforme aux règles"],a:3,e:"Les décisions ayant un impact sur les personnes nécessitent des garanties et un contrôle adapté."},
{t:"Esprit critique",q:"Quelle question aide à juger une analyse produite par IA ?",o:["Quelles hypothèses et limites pourraient changer cette conclusion ?","Peut-elle paraître plus certaine ?","Peut-on supprimer toutes les réserves ?","Peut-on éviter toute source ?"],a:0,e:"Examiner les hypothèses et limites permet de tester la solidité d’une conclusion."},
{t:"Création & contenu",q:"Avant de publier une image créée avec l’IA, que faut-il considérer ?",o:["Seulement sa résolution","Uniquement la couleur dominante","Les droits, les personnes représentées, le contexte et les règles de publication","Rien si l’image est originale"],a:2,e:"Les droits, la transparence et les risques de représentation restent importants."},
{t:"Création & contenu",q:"Comment garder une voix de marque cohérente avec l’IA ?",o:["Laisser chaque texte choisir un style différent","Fournir un guide de ton, des exemples et les expressions à éviter","Demander seulement un texte long","Copier une marque concurrente"],a:1,e:"Un guide rédactionnel aide à maintenir une identité cohérente."},
{t:"Création & contenu",q:"Quel est un bon réflexe face à un texte généré proche d’un contenu existant ?",o:["Le publier sans contrôle","Changer deux mots et ignorer les droits","Prétendre qu’il n’a aucune source","Vérifier l’originalité, les sources et les droits applicables"],a:3,e:"La génération ne dispense pas de vérifier les droits et les ressemblances."},
{t:"Création & contenu",q:"Comment demander une première version de présentation utile ?",o:["Préciser le public, l’objectif, la durée et les messages clés","Dire simplement « fais une présentation parfaite »","Ne fournir aucun sujet","Demander des chiffres inventés"],a:0,e:"Le public, le but et le format cadrent la proposition."},
{t:"Création & contenu",q:"Que faire d’un contenu généré avant de le signer de ton nom ?",o:["Le considérer comme validé automatiquement","Le publier sans lecture","Le relire, vérifier les faits et l’adapter à sa propre intention","Supprimer toute nuance"],a:2,e:"L’auteur doit s’assurer que le contenu final est correct et représente bien son intention."},
{t:"Automatisation",q:"Avant d’automatiser l’envoi d’un message généré, que prévoir ?",o:["Aucune journalisation","Des tests, des limites et une validation adaptée au risque","Un accès administrateur à tous les systèmes","La suppression de tous les contrôles"],a:1,e:"Les tests et garde-fous préviennent les erreurs à grande échelle."},
{t:"Automatisation",q:"Quel processus faut-il automatiser en priorité ?",o:["Un processus mal compris et instable","Une décision sensible sans contrôle","Une tâche dont les règles sont claires et le risque maîtrisé","Une opération irréversible sans test"],a:2,e:"Un processus stable et bien défini se prête mieux à l’automatisation."},
{t:"Automatisation",q:"Pourquoi tester une automatisation sur un petit échantillon ?",o:["Pour détecter les erreurs avant un déploiement plus large","Pour éviter toute mesure","Pour prouver que les erreurs sont impossibles","Pour remplacer la documentation"],a:0,e:"Un test limité permet de détecter les problèmes à moindre risque."},
{t:"Automatisation",q:"Une automatisation échoue de façon inattendue. Quel réflexe adopter ?",o:["La relancer sans regarder","Masquer les erreurs","Augmenter les permissions sans analyse","Suspendre si nécessaire, examiner les journaux et corriger la cause"],a:3,e:"Il faut comprendre la cause et contenir les effets avant de relancer."},
{t:"Bonnes pratiques",q:"Quel rôle l’humain doit-il garder dans l’usage professionnel de l’IA ?",o:["Aucun, si l’outil est récent","La responsabilité de contrôler, contextualiser et décider selon le risque","Uniquement la mise en page","La responsabilité uniquement en cas de panne"],a:1,e:"L’humain conserve la responsabilité du résultat et du niveau de contrôle nécessaire."},
{t:"Bonnes pratiques",q:"Comment savoir si une IA apporte réellement de la valeur ?",o:["Parce qu’elle produit du texte rapidement","Parce que son interface est moderne","En mesurant la qualité, le temps gagné et les risques","Parce que tout le monde en parle"],a:2,e:"L’utilité doit être évaluée par des résultats concrets et des risques maîtrisés."},
{t:"Bonnes pratiques",q:"Quelle est la meilleure première étape pour adopter l’IA au travail ?",o:["Choisir une tâche précise, peu risquée et mesurer le résultat","Automatiser toute l’activité","Partager tous les documents","Remplacer toutes les procédures"],a:0,e:"Commencer petit permet d’apprendre, de mesurer et d’ajuster sans exposer l’organisation."}
];
let finalQuiz = [];
let finalQuizIndex = 0;
let finalQuizSelection = null;
let finalQuizScore = 0;
let finalQuizLocked = false;
function shuffleArray(items){const out=[...items];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
function startFinalQuiz(){
  if(!authUser){showAuthModal();setAuthMessage("Connecte-toi pour valider un parcours et conserver ton attestation.");return;}
  finalQuiz=shuffleArray(finalQuestionBank).slice(0,40).map(q=>({...q,choices:shuffleArray(q.o.map((text,i)=>({text,correct:i===q.a})))}));
  finalQuizIndex=0;finalQuizScore=0;finalQuizSelection=null;finalQuizLocked=false;
  document.getElementById("final-quiz-stage").classList.remove("hidden");
  document.getElementById("final-quiz-result").classList.add("hidden");
  renderFinalQuestion();showView("final-quiz");
}
function renderFinalQuestion(){
 const q=finalQuiz[finalQuizIndex];finalQuizSelection=null;finalQuizLocked=false;
 document.getElementById("final-quiz-counter").textContent=`Question ${finalQuizIndex+1} / 40`;
 document.getElementById("final-quiz-progress").style.width=`${finalQuizIndex/40*100}%`;
 document.getElementById("final-quiz-topic").textContent=q.t.toLocaleUpperCase("fr");
 document.getElementById("final-quiz-question").textContent=q.q;
 document.getElementById("final-quiz-options").innerHTML=q.choices.map((c,i)=>`<button type="button" class="final-quiz-option" data-final-option="${i}"><span class="final-option-letter">${String.fromCharCode(65+i)}</span><span>${c.text}</span></button>`).join("");
 document.getElementById("final-quiz-feedback").textContent="";
 document.getElementById("final-quiz-feedback").className="quiz-feedback final-quiz-feedback";
 const next=document.getElementById("final-quiz-next");next.disabled=true;next.textContent="Valider et continuer →";
}
function submitFinalAnswer(){
 if(finalQuizSelection===null||finalQuizLocked)return;
 finalQuizLocked=true;const q=finalQuiz[finalQuizIndex],chosen=q.choices[finalQuizSelection];
 if(chosen.correct)finalQuizScore++;
 document.querySelectorAll("[data-final-option]").forEach((b,i)=>{b.disabled=true;if(q.choices[i].correct)b.classList.add("selected");});
 const feedback=document.getElementById("final-quiz-feedback");feedback.className=`quiz-feedback final-quiz-feedback ${chosen.correct?"good":"bad"}`;feedback.textContent=(chosen.correct?"Bonne réponse. ":"Réponse attendue : ")+q.choices.find(c=>c.correct).text+" — "+q.e;
 const next=document.getElementById("final-quiz-next");next.disabled=false;next.textContent=finalQuizIndex===39?"Voir mon résultat →":"Question suivante →";
 document.getElementById("final-quiz-counter").textContent=`Question ${finalQuizIndex+1} / 40 · réponse enregistrée`;
}
function finishFinalQuiz(){
 const passed=finalQuizScore>=30;const result=document.getElementById("final-quiz-result"),stage=document.getElementById("final-quiz-stage");
 stage.classList.add("hidden");result.classList.remove("hidden");
 document.getElementById("final-quiz-progress").style.width="100%";
 result.innerHTML=`<div class="final-result-icon">${passed?"✓":"↻"}</div><p class="eyebrow">${passed?"PARCOURS VALIDÉ":"CONTINUE TES EFFORTS"}</p><h2>${passed?"Tu l’as fait. Bravo !":"Tu es tout près."}</h2><div class="final-result-score">${finalQuizScore}<span style="font-size:.42em;color:#858198">/40</span></div><p class="final-result-message">${passed?"Tu as atteint le seuil de 30/40. Ton attestation SkillUp est prête.":"Il te faut au moins 30 bonnes réponses sur 40. Révise les notions puis retente ta chance : les questions seront tirées à nouveau."}</p><div class="final-result-actions">${passed?'<button class="button button-primary" id="open-earned-certificate">Obtenir mon attestation →</button>':'<button class="button button-primary" id="retry-final-quiz">Repasser le quiz ↻</button>'}<button class="button button-quiet" data-view="progress">Ma progression</button></div>`;
 const attempt={score:finalQuizScore,total:40,passed,completedAt:new Date().toISOString()};
 state.finalAttempts=[...(state.finalAttempts||[]),attempt];
 if(passed){state.finalPassed=state.finalPassed||{};state.finalPassed.ai={...attempt,reference:"SU-AI-"+new Date().toISOString().slice(0,10).replaceAll("-","")+"-"+Math.random().toString(36).slice(2,8).toUpperCase()};state.passed=[...new Set([...(state.passed||[]),"final-ai"])];}
 saveState();renderProgress();
}
function openEarnedCertificate(){
 const cert=state.finalPassed?.ai;if(!cert?.passed||cert.score<30){toast("Valide d’abord le quiz final pour obtenir l’attestation.");return;}
 const name=authUser?.user_metadata?.full_name||authUser?.user_metadata?.name||authUser?.user_metadata?.given_name||authUser?.email?.split("@")[0]||"Apprenant SkillUp";
 document.getElementById("certificate-learner").textContent=name;
 document.getElementById("certificate-score").textContent=`${cert.score}/40`;
 document.getElementById("certificate-date").textContent=new Date(cert.completedAt).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});
 document.getElementById("certificate-reference").textContent=cert.reference;
 showView("certificate");
}
document.getElementById("final-quiz-next").addEventListener("click",()=>{if(!finalQuizLocked){submitFinalAnswer();return;}if(finalQuizIndex<39){finalQuizIndex++;renderFinalQuestion();}else finishFinalQuiz();});
document.getElementById("final-quiz-options").addEventListener("click",e=>{const b=e.target.closest("[data-final-option]");if(!b||finalQuizLocked)return;finalQuizSelection=Number(b.dataset.finalOption);document.querySelectorAll("[data-final-option]").forEach(x=>x.classList.toggle("selected",x===b));document.getElementById("final-quiz-next").disabled=false;document.getElementById("final-quiz-next").textContent="Valider ma réponse";});
document.getElementById("final-quiz-exit").addEventListener("click",()=>showView("paths"));
function downloadCertificatePdf(){
 const cert=state.finalPassed?.ai;
 if(!cert?.passed||cert.score<30){toast("Valide d’abord le quiz final pour obtenir l’attestation.");return;}
 const JsPDF=window.jspdf?.jsPDF;
 if(!JsPDF){toast("Le générateur PDF n’est pas disponible. Vérifie ta connexion puis réessaie.");return;}
 const name=(document.getElementById("certificate-learner")?.textContent||"Apprenant SkillUp").trim();
 const course=(document.querySelector(".certificate-course")?.textContent||"Parcours SkillUp").trim();
 const date=(document.getElementById("certificate-date")?.textContent||new Date(cert.completedAt||Date.now()).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"})).trim();
 const reference=(document.getElementById("certificate-reference")?.textContent||cert.reference||"SKILLUP").trim();
 const score=Number(cert.score)||0;
 const doc=new JsPDF({orientation:"landscape",unit:"mm",format:"a4",compress:true});
 const W=297,H=210,mid=W/2;
 const ink=[23,24,45],purple=[113,96,217],gold=[190,161,83],muted=[105,103,124],paper=[255,254,249],pale=[242,238,255];
 doc.setFillColor(...paper);doc.rect(0,0,W,H,"F");
 // A restrained, diploma-style double frame
 doc.setDrawColor(...gold);doc.setLineWidth(1);doc.rect(7,7,W-14,H-14);
 doc.setDrawColor(226,218,192);doc.setLineWidth(.35);doc.rect(10,10,W-20,H-20);
 // Simple corner ornaments, kept clear of all text
 [[0,0],[W,0],[0,H],[W,H]].forEach(([x,y],i)=>{
  const sx=x===0?1:-1,sy=y===0?1:-1;
  doc.setFillColor(...(i%2===0?purple:gold));doc.triangle(x,y,x+sx*22,y,x,y+sy*4,"F");
  doc.setFillColor(...(i%2===0?gold:purple));doc.triangle(x,y+sy*4,x+sx*15,y+sy*4,x,y+sy*8,"F");
 });
 // Brand
 doc.setFillColor(...ink);doc.roundedRect(19,16,11,11,2,2,"F");
 doc.setTextColor(217,255,114);doc.setFont("helvetica","bold");doc.setFontSize(7);doc.text("S+",24.5,23.1,{align:"center"});
 doc.setTextColor(...ink);doc.setFontSize(14);doc.text("SkillUp",34,23.5);
 // Validation seal
 doc.setDrawColor(...purple);doc.setLineWidth(.55);doc.circle(270,22,8.5,"S");
 doc.setTextColor(...purple);doc.setFontSize(5.2);doc.text(["PARCOURS","VALIDÉ"],270,21.2,{align:"center"});
 // One title only: no duplicate "certificat/attestation"
 doc.setTextColor(...purple);doc.setFont("helvetica","bold");doc.setFontSize(8.5);doc.text("A T T E S T A T I O N   D E   R É U S S I T E",mid,42,{align:"center"});
 doc.setDrawColor(...gold);doc.setLineWidth(.55);doc.line(99,47,W-99,47);
 doc.setTextColor(...muted);doc.setFont("helvetica","normal");doc.setFontSize(10);doc.text("SkillUp atteste que",mid,58,{align:"center"});
 // Candidate name with measured font sizing
 let nameSize=27;doc.setFont("times","bolditalic");doc.setFontSize(nameSize);
 while(nameSize>16&&doc.getTextWidth(name)>210){nameSize--;doc.setFontSize(nameSize);}
 doc.setTextColor(142,65,76);doc.text(name,mid,77,{align:"center",maxWidth:220});
 doc.setDrawColor(225,220,206);doc.setLineWidth(.35);doc.line(53,84,W-53,84);
 doc.setTextColor(...muted);doc.setFont("helvetica","normal");doc.setFontSize(10);doc.text("a validé avec succès le parcours de formation",mid,95,{align:"center"});
 // Course title is wrapped and vertically centered in a reserved band
 doc.setTextColor(...purple);doc.setFont("helvetica","bold");
 let courseSize=19;doc.setFontSize(courseSize);
 while(courseSize>12&&doc.getTextWidth(course)>222){courseSize--;doc.setFontSize(courseSize);}
 const courseLines=doc.splitTextToSize(course,222);
 doc.setFontSize(courseSize);doc.text(courseLines,mid,107,{align:"center",lineHeightFactor:1.15});
 const courseBottom=107+(courseLines.length-1)*courseSize*.42;
 // One clean score line; score and threshold never overlap
 const scoreY=Math.max(121,courseBottom+9);
 doc.setFillColor(...pale);doc.roundedRect(mid-37,scoreY-7,74,15,3,3,"F");
 doc.setTextColor(...purple);doc.setFont("helvetica","bold");doc.setFontSize(14);doc.text(score+"/40",mid-18,scoreY+2,{align:"center"});
 doc.setTextColor(...muted);doc.setFont("helvetica","normal");doc.setFontSize(7.5);doc.text("SEUIL DE RÉUSSITE : 30/40",mid+13,scoreY+1.5,{align:"center"});
 // Metadata in three balanced columns
 const metaY=Math.max(151,scoreY+15);
 doc.setDrawColor(224,219,204);doc.line(20,metaY-5,W-20,metaY-5);
 const blocks=[
  {x:23,w:67,label:"DATE DE RÉUSSITE",value:date},
  {x:104,w:91,label:"RÉFÉRENCE DE L’ATTESTATION",value:reference},
  {x:207,w:65,label:"DÉLIVRÉ PAR",value:"SkillUp"}
 ];
 blocks.forEach(b=>{
  doc.setFont("helvetica","bold");doc.setFontSize(6.5);doc.setTextColor(...muted);doc.text(b.label,b.x,metaY);
  doc.setFont("helvetica","normal");doc.setFontSize(8.5);doc.setTextColor(...ink);
  const lines=doc.splitTextToSize(b.value,b.w);
  doc.text(lines.slice(0,2),b.x,metaY+6,{lineHeightFactor:1.15});
 });
 // Clear, factual disclaimer at the bottom; no decorative slogan
 doc.setDrawColor(...gold);doc.setLineWidth(.45);doc.line(24,177, W-24,177);
 doc.setFont("helvetica","normal");doc.setFontSize(7);doc.setTextColor(125,121,134);
 doc.text("Cette attestation confirme la réussite à l’évaluation interne SkillUp.",mid,184,{align:"center"});
 doc.text("Elle ne constitue pas un diplôme d’État ni une certification professionnelle enregistrée.",mid,189,{align:"center"});
 const safeName=name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/^-|-$/g,"").slice(0,45)||"Apprenant";
 doc.save("SkillUp-Attestation-"+safeName+".pdf");
}
document.getElementById("certificate-print").addEventListener("click",downloadCertificatePdf);
document.addEventListener("click",e=>{if(e.target.closest("#open-earned-certificate"))openEarnedCertificate();if(e.target.closest("#retry-final-quiz"))startFinalQuiz();});
