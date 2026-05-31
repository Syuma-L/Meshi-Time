const recettes = {
    /* ============================================
   SECTION : Japonais
   ============================================ */
    "karaage": {
    title: "Karaage",
    image: "recette/karaage.png",
    time: "20 min",
    nation : "🇯🇵  Japon",
    basePersonnes: 2,
    ingredients: [
        {nom : "poulet", quantite: 250, unite: "g"}, 
        {nom : "Sauce soja", quantite: 2, unite: "cuillères à soupe"}, 
        {nom : "Gingembre", quantite: 30, unite: "g"}, 
        {nom : "Ail", quantite: 2, unite: "gousse"}, 
        {nom : "Fécule de pomme de terre", quantite: 50, unite: "g"}
    ],
    etapes: [
        { 
            texte: "Couper le poulet en morceaux réguliers.", 
            photo: ""  // Chemin de ta photo d'étape
        },
        { 
            texte: "Mariner avec le soja, l'ail et le gingembre. Laisser reposer au moins 30 minutes (plus longtemps pour plus de saveur).", 
            photo: "recette/karaage/mariner.jpg" // Laisse vide s'il n'y a pas de photo pour cette étape
        },
        { 
            texte: "Bien imprégner la viande de fécule de pomme de terre.", 
            photo: "recette/karaage/fecule.jpg"  // Chemin de ta photo d'étape
        },
        { 
            texte: "Bien chauffer l'huile et frire le poulet.", 
            photo: "recette/karaage/age.jpg"  // Chemin de ta photo d'étape
        },
        { 
            texte: "Accompagner de sel ou de mayonnaise.", 
            photo: "recette/karaage.png"  // Chemin de ta photo d'étape
        }
    ]
},

"Yakisoba": {
    title: "Yakisoba au Poulet",
    image: "recette/yakisoba.jpg",
    time: "20 min",
    nation : "🇯🇵  Japon",
    basePersonnes: 2,
    ingredients: [
        {nom: "Nouilles Ramen ou Soba", quantite: 200, unite: "g"},
        {nom: "Filet de poulet", quantite: 250, unite: "g"},
        {nom: "Chou chinois", quantite: 100, unite: "g"},
        {nom: "Carotte", quantite: 100, unite: "g"},
        {nom: "Oignon", quantite: 50, unite: "g"},
        {nom: "Sauce Yakisoba (ou soja + huître)", quantite: 2, unite: "cuillères à soupe"},
        {nom: "Gingembre", quantite: 30, unite: "g"},
        {nom: "Cébette", quantite: 50, unite: "g"}
    ],
    etapes: [
        { 
            texte: "Découper le poulet et les légumes en fines lamelles.", 
            photo: "" 
        },
        { 
            texte: "Saisir le poulet à feu vif dans un wok, puis ajouter les légumes pour qu'ils restent croquants.", 
            photo: "" 
        },
        { 
            texte: "Cuire les nouilles à part, les égoutter et les jeter dans le wok.", 
            photo: "" 
        },
        { 
            texte: "Verser la sauce Yakisoba et mélanger activement pour napper tous les ingrédients.", 
            photo: "" 
        },
        { 
            texte: "Servir avec de la cébette ciselée et un peu de gingembre râpé.", 
            photo: "recette/yakisoba.jpg" 
        }
    ]
},
"Curry Japonnais": {
    title: "Curry Japonnais",
    image: "recette/curry_jap/curry_jap.jpeg",
    time: "30 min",
    nation : "🇯🇵  Japon",  
    basePersonnes: 6,
    ingredients: [
        {nom: "Riz", quantite: 300, unite: "g"},
        {nom: "Poulet ou boeuf ou porc", quantite: 250, unite: "g"},
        {nom: "pommes de terre", quantite: 100, unite: "g"},
        {nom: "carottes", quantite: 100, unite: "g"},
        {nom: "oignons", quantite: 50, unite: "g"},
        {nom: "curry en poudre ou pâte de curry japonais", quantite: 2, unite: "cuillères à soupe"},
        {nom: "bouillon de légumes ou dashi", quantite: 1, unite: "litre"},
        {nom: "huile de sésame", quantite: 1, unite: "cuillère à soupe"}
    ],
    etapes: [
        { 
            texte: "Découper le poulet et les légumes grossièrement.", 
            photo: "recette/curry_jap/ingredient.jpeg" 
        },
        { 
            texte: "Faire revenir les oignons émincés dans de l'huile de sésame.", 
            photo: "" 
        },
        { 
            texte: "Faire bouillir les légumes et ajouter la viande (1L d'eau).", 
            photo: "recette/curry_jap/bouillon.jpeg" 
        },
        { 
            texte: "Ajouter le curry et mélanger pour bien enrober les ingrédients (bien faire mijoter pour avoir une texture crémeuse).", 
            photo: "recette/curry_jap/sauce.jpeg" 
        },
        { 
            texte: "Servir avec du riz cuit.", 
            photo: "recette/curry_jap/curry_jap.jpeg" 
        }
    ]
},

"Ramen maison": {
    title: "Ramen Maison",
    image: "recette/ramen/ramen.jpeg",
    time: "20 min", 
    nation : "🇯🇵  Japon",
    basePersonnes: 1,
    ingredients: [
        {nom: "Bouillon (poulet, porc ou légumes)", quantite: 1, unite: "litre"},
        {nom: "Nouilles Ramen", quantite: 200, unite: "g"},
        {nom: "Tranches de porc chashu", quantite: 100, unite: "g"},
        {nom: "Oeuf mollet", quantite: 2, unite: "unités"},
        {nom: "sésame", quantite: 1, unite: "cuillère à soupe"},
        {nom: "Nori (algue)", quantite: 5, unite: "feuilles"},
        {nom: "poireau", quantite: 100, unite: "g"}
    ],
    etapes: [
        { 
            texte: "Préparer le bouillon en faisant mijoter les os de poulet ou de porc avec des légumes et des aromates pendant plusieurs heures.", 
            photo: "recette/ramen/ingredient.jpeg" 
        },
        { 
            texte: "Cuire les nouilles Ramen à part selon les instructions du paquet.", 
            photo: "" 
        },
        { 
            texte: "Préparer les garnitures : tranches de chashu, œuf mollet mariné (6min), poireau émincé, etc.", 
            photo: "recette/ramen/topping.jpeg" 
        },
        { 
            texte: "Dresser les nouilles dans un bol, verser le bouillon chaud par-dessus et disposer les garnitures.", 
            photo: "recette/ramen/dressage.jpeg"
            }
    ] 
 },
 "Tenders Paprika": {
    title: "Tenders Paprika",
    image: "recette/tenders_paprika/tenders_paprika.jpg",
    time: "25 min",
    nation : "🇲🇽  Mexique",
    basePersonnes: 4,
    ingredients: [
        {nom: "poulet", quantite: 500, unite: "g"},
        {nom: "Paprika", quantite: 1, unite: "cuillère à soupe"},
        {nom: "Huile d'olive", quantite: 1, unite: "cuillère à soupe"},
        {nom: "Ail", quantite: 2, unite: "gousses"},
        {nom: "sel", quantite: 1, unite: "pincée"},
        {nom: "poivre", quantite: 1, unite: "pincée"},
        {nom: "farine", quantite: 1, unite: "cuillère à soupe"},
        {nom: "oeuf", quantite: 1, unite: "unité"},
        {nom: "chapelure", quantite: 1, unite: "cuillère à soupe"}
    ],
    etapes: [
        { 
            texte: "Couper le poulet en morceaux réguliers.", 
            photo: ""  // Chemin de ta photo d'étape
        },
        { 
            texte: "Mariner avec l'huile, le paprika, l'ail, le sel et le poivre. Laisser reposer au moins 30 minutes (plus longtemps pour plus de saveur).", 
            photo: "recette/tenders_paprika/mariner.jpg" // Laisse vide s'il n'y a pas de photo pour cette étape
        },
        { 
            texte: "Bien imprégner la viande de farine.", 
            photo: "recette/tenders_paprika/farine.jpg"  // Chemin de ta photo d'étape
        },
         { 
            texte: "Enrober dans l'oeuf battu.", 
            photo: "recette/tenders_paprika/oeuf.jpg"  // Chemin de ta photo d'étape
        },
         { 
            texte: "Enrober dans la chapelure.", 
            photo: "recette/tenders_paprika/chapelure.jpg"  // Chemin de ta photo d'étape
        },
        { 
            texte: "Bien chauffer l'huile et frire le poulet.", 
            photo: "recette/tenders_paprika/tenders_paprika.jpg"  // Chemin de ta photo d'étape
        }
    ]
},

/* ============================================
   SECTION : PÂTES 
   ============================================ */

"Pâtes Arrabbiata": {
    title: "Pâtes Arrabbiata",
    image: "recette/pate_arrabbiata.jpg",
    time: "25 min",
    nation : "🇮🇹  Italie",
    basePersonnes: 2,
    ingredients: [
        {nom: "Pâtes", quantite: 200, unite: "g"},
        {nom: "Tomate concassée", quantite: 400, unite: "g"},
        {nom: "Chorizo", quantite: 150, unite: "g"},
        {nom: "Lardons", quantite: 100, unite: "g"},
        {nom: "Poivron", quantite: 1, unite: "unité"},
        {nom: "Ail", quantite: 2, unite: "gousses"},
        {nom: "Oignon", quantite: 1, unite: "unité"},
        {nom: "Olives", quantite: 50, unite: "g"},
        {nom: "Piment", quantite: 1, unite: "pincée"},
        {nom: "Sel", quantite: 1, unite: "pincée"},
        {nom: "Poivre", quantite: 1, unite: "pincée"}
    ],
    etapes: [
        { 
            texte: "Faire revenir les oignons émincés, l'ail pressé et le poivron coupé en dés dans de l'huile d'olive.", 
            photo: "" 
        },
        { 
            texte: "Ajouter la tomate concassée et le piment, puis laisser mijoter à feu doux.", 
            photo: "" 
        },
        { 
            texte: "Dans une poêle à part, faire griller le chorizo et les lardons, puis les ajouter à la sauce.", 
            photo: "" 
        },
        { 
            texte: "Ajouter les olives, le sel et le poivre selon votre convenance.", 
            photo: "" 
        },
        { 
            texte: "Cuire les pâtes al dente et les mélanger directement dans la sauce avec un peu d'eau de cuisson.", 
            photo: "recette/pate_arrabbiata.jpg" 
        }
    ]
},

"Pâtes Carbonara": {
    title: "Pâtes Carbonara (La Vraie)",
    image: "recette/pate_carbonara.jpg",
    time: "20 min",
    nation : "🇮🇹  Italie",
    basePersonnes: 2,
    ingredients: [
        {nom: "Pâtes (Spaghetti)", quantite: 200, unite: "g"},
        {nom: "Guanciale ou Pancetta", quantite: 150, unite: "g"},
        {nom: "Jaunes d'œufs", quantite: 2, unite: "unité"},
        {nom: "Pecorino Romano", quantite: 50, unite: "g"},
        {nom: "Poivre noir", quantite: 1, unite: "pincée"},
        {nom: "Sel", quantite: 1, unite: "pincée"}
    ],
    etapes: [
        { 
            texte: "Faire dorer le guanciale coupé en morceaux dans une poêle sans matière grasse jusqu'à ce qu'il soit croustillant.", 
            photo: "" 
        },
        { 
            texte: "Dans un bol, mélanger les jaunes d'œufs avec le fromage râpé et beaucoup de poivre noir.", 
            photo: "" 
        },
        { 
            texte: "Cuire les pâtes. Avant de les égoutter, prélever une louche d'eau de cuisson.", 
            photo: "" 
        },
        { 
            texte: "Mélanger les pâtes au guanciale, couper le feu, puis verser le mélange œufs/fromage en remuant énergiquement.", 
            photo: "" 
        },
        { 
            texte: "Ajouter l'eau de cuisson petit à petit pour obtenir une crème onctueuse sans cuire les œufs.", 
            photo: "recette/pate_carbonara.jpg" 
        }
    ]
},

"Pâtes Bolognaise": {
    title: "Pâtes Bolognaise Maison",
    image: "recette/pate_bolognaise.jpg",
    time: "45 min",
    nation : "🇮🇹  Italie",
    basePersonnes: 2,
    ingredients: [
        {nom: "Pâtes (Tagliatelles)", quantite: 200, unite: "g"},
        {nom: "Bœuf haché", quantite: 200, unite: "g"},
        {nom: "Sauce tomate", quantite: 400, unite: "g"},
        {nom: "Concentré de tomates", quantite: 100, unite: "g"},
        {nom: "Carotte", quantite: 1, unite: "unité"},
        {nom: "Céleri", quantite: 1, unite: "unité"},
        {nom: "Oignon", quantite: 1, unite: "unité"},
        {nom: "Ail", quantite: 2, unite: "gousses"},
        {nom: "Vin rouge (optionnel)", quantite: 100, unite: "ml"},
        {nom: "Herbes de Provence", quantite: 1, unite: "pincée"}
    ],
    etapes: [
        { 
            texte: "Hacher finement l'oignon, la carotte et le céleri pour faire un soffritto. Faire revenir dans de l'huile d'olive.", 
            photo: "" 
        },
        { 
            texte: "Ajouter la viande hachée et la faire dorer en l'émiettant bien à la spatule.", 
            photo: "" 
        },
        { 
            texte: "Verser un trait de vin rouge et laisser évaporer, puis ajouter la sauce tomate et le concentré.", 
            photo: "" 
        },
        { 
            texte: "Laisser mijoter à feu très doux pendant au moins 30 minutes pour que les saveurs se développent.", 
            photo: "" 
        },
        { 
            texte: "Servir sur des pâtes fraîches avec une pluie de parmesan râpé.", 
            photo: "recette/pate_bolognaise.jpg" 
        }
    ]
},

"Pâtes au Saumon": {
    title: "Pâtes au Saumon Fumé",
    image: "recette/pate_saumon.jpg",
    time: "15 min",
    nation : "🇮🇹  Italie",
    basePersonnes: 2,
    ingredients: [
        {nom: "Pâtes (Farfalle)", quantite: 200, unite: "g"},
        {nom: "Saumon fumé", quantite: 150, unite: "g"},
        {nom: "Crème fraîche", quantite: 100, unite: "ml"},
        {nom: "Aneth", quantite: 1, unite: "pincée"},
        {nom: "Échalote", quantite: 1, unite: "unité"},
        {nom: "Citron", quantite: 1, unite: "unité"},
        {nom: "Baies roses", quantite: 50, unite: "g"}
    ],
    etapes: [
        { 
            texte: "Faire revenir une échalote ciselée dans un peu de beurre.", 
            photo: "" 
        },
        { 
            texte: "Ajouter la crème fraîche et laisser chauffer doucement avec un filet de jus de citron.", 
            photo: "" 
        },
        { 
            texte: "Couper le saumon fumé en lanières et l'ajouter à la crème (ne pas cuire trop longtemps pour garder le goût).", 
            photo: "" 
        },
        { 
            texte: "Mélanger les pâtes à la préparation et ajouter l'aneth frais haché.", 
            photo: "" 
        },
        { 
            texte: "Décorer avec quelques baies roses pour le croquant et le piquant.", 
            photo: "recette/pate_saumon.jpg" 
        }
    ]
},

"Pâtes au Pesto Rosso": {
    title: "Pâtes au Pesto Rosso",
    image: "recette/pate_pesto_rosso.jpg",
    time: "15 min",
    nation : "🇮🇹  Italie",
    basePersonnes: 2,
    ingredients: [
        {nom: "Pâtes", quantite: 200, unite: "g"},
        {nom: "Tomates séchées", quantite: 100, unite: "g"},
        {nom: "Pignons de pin", quantite: 50, unite: "g"},
        {nom: "Parmesan", quantite: 50, unite: "g"},
        {nom: "Basilic", quantite: 1, unite: "pincée"},
        {nom: "Ail", quantite: 2, unite: "gousses"},
        {nom: "Huile d'olive", quantite: 100, unite: "ml"},
        {nom: "Piment", quantite: 1, unite: "pincée"}
    ],
    etapes: [
        { 
            texte: "Mixer les tomates séchées avec les pignons de pin, l'ail, le parmesan et le basilic.", 
            photo: "" 
        },
        { 
            texte: "Ajouter l'huile d'olive progressivement jusqu'à obtenir une texture de pâte onctueuse.", 
            photo: "" 
        },
        { 
            texte: "Cuire les pâtes dans une grande casserole d'eau salée.", 
            photo: "" 
        },
        { 
            texte: "Diluer le pesto avec deux cuillères d'eau de cuisson des pâtes.", 
            photo: "" 
        },
        { 
            texte: "Mélanger les pâtes au pesto et servir avec quelques feuilles de basilic frais.", 
            photo: "recette/pate_pesto_rosso.jpg" 
        }
    ]
},

"Pâtes aux Crevettes et Citron": {
    title: "Pâtes Crevettes Citronnée",
    image: "recette/pate_crevettes.jpg",
    time: "20 min",
    nation : "🇮🇹  Italie",
    basePersonnes: 2,
    ingredients: [
        {nom: "Pâtes (Linguine)", quantite: 200, unite: "g"},
        {nom: "Crevettes décortiquées", quantite: 150, unite: "g"},
        {nom: "Citron (Zeste et jus)", quantite: 1, unite: "unité"},
        {nom: "Crème liquide", quantite: 100, unite: "ml"},
        {nom: "Ail", quantite: 2, unite: "gousses"},
        {nom: "Persil frais", quantite: 1, unite: "pincée"},
        {nom: "Beurre", quantite: 50, unite: "g"}
    ],
    etapes: [
        { 
            texte: "Faire revenir l'ail haché dans un mélange beurre et huile, puis ajouter les crevettes.", 
            photo: "" 
        },
        { 
            texte: "Une fois les crevettes roses, verser le jus de citron et le zeste.", 
            photo: "" 
        },
        { 
            texte: "Ajouter la crème liquide et laisser réduire légèrement à feu doux.", 
            photo: "" 
        },
        { 
            texte: "Incorporer les pâtes cuites et le persil haché à la sauce.", 
            photo: "" 
        },
        { 
            texte: "Bien mélanger pour que les pâtes s'imprègnent du citron et servir chaud.", 
            photo: "recette/pate_crevettes.jpg" 
        }
    ]
},
"Salade de Gésier": {
    title: "Salade de Gésier",
    image: "recette/salade_gesier.jpg",
    time: "25 min",
    nation : "🇫🇷  France",
    basePersonnes: 2,
    ingredients: [
        {nom: "Gésier", quantite: 200, unite: "g"},
        {nom: "endive", quantite: 1, unite: "unité"},
        {nom: "vinaigre", quantite: 2, unite: "cuillères à soupe"},
        {nom: "huile d'olive", quantite: 3, unite: "cuillères à soupe"},
        {nom: "betterave", quantite: 100, unite: "g"},
        {nom: "oignon", quantite: 1, unite: "unité"},
        {nom: "sel", quantite: 1, unite: "pincée"},
        {nom: "poivre", quantite: 1, unite: "pincée"},
        {nom: "moutarde", quantite: 1, unite: "cuillère à soupe"}
    ],
    etapes: [
        { 
            texte: "Caraméliser les oignons.", 
            photo: ""  // Chemin de ta photo d'étape
        },
        { 
            texte: "Faire chauffer l'huile et y faire revenir le gésier.", 
            photo: ""  // Chemin de ta photo d'étape
        },
        { 
            texte: "Couper les endives et la betterave en lamelles.", 
            photo: ""  // Chemin de ta photo d'étape
        },
        { 
            texte: "Assaisonner avec le sel et le poivre.", 
            photo: ""  // Chemin de ta photo d'étape
        },
        { 
            texte: "Vinaigrette à la moutarde : mélanger sel, poivre, moutarde, huile d'olive et vinaigre.", 
            photo: "recette/salade_gesier.jpg"  // Chemin de ta photo d'étape
        }
    ]
},
"Cote de porc long": {
    title: "Cote de porc long",
    image: "recette/cote_porc_long/cote_porc.jpeg",
    time: "30 min",
    nation : "🇫🇷  France",
    basePersonnes: 4,
    ingredients: [
        {nom: "Cote de porc long", quantite: 400, unite: "g"},
        {nom: "Huile d'olive", quantite: 100, unite: "ml"},
        {nom: "Sel", quantite: 1, unite: "pincée"},
        {nom: "Poivre", quantite: 1, unite: "pincée"},
        {nom: "Thym", quantite: 1, unite: "pincée"},
        {nom: "Romarin", quantite: 1, unite: "pincée"},
        {nom: "Ail", quantite: 2, unite: "gousses"},
        {nom: "Citron (optionnel)", quantite: 1, unite: "unité"},
        {nom: "Beurre", quantite: 50, unite: "g"},
        {nom: "riz", quantite: 200, unite: "g"},
        {nom: "poivron", quantite: 2, unite: "unités"}
    ],
    etapes: [
        { 
            texte: "Salé et poivré la côte de porc, puis faites dorer dans une poêle.", 
            photo: "recette/cote_porc_long/cuire.jpeg"  // Chemin de ta photo d'étape
        },
        { 
            texte: "Ajouter les poivrons coupés grossièrement et les herbes (thym, romarin) pour parfumer la viande pendant la cuisson au four (180°C 30min).", 
            photo: "recette/cote_porc_long/cuisson.png"  // Chemin de ta photo d'étape
        },
        { 
            texte: "Pendant ce temps, cuire le riz et préparer une sauce au beurre citronné pour accompagner.", 
            photo: ""  // Chemin de ta photo d'étape
        },
        { 
            texte: "dressage : attendre 10min après la cuisson de la viande avant de le couper pour que les jus se répartissent bien.", 
            photo: "recette/cote_porc_long/dressage.jpeg"  // Chemin de ta photo d'étape
        }
    ]
}
};