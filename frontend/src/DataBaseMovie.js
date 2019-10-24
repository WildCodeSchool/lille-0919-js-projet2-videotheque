const movieList = [
  {
    title: "Doctor Sleep",
    picture:
      "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/10/11/11/36/5168199.jpg",
    duration: "2h32",
    genre: "Horror",
    synopsis:
      "Encore profondément marqué par le traumatisme qu'il a vécu, enfant, à l'Overlook Hotel, Dan Torrance a dû se battre pour tenter de trouver un semblant de sérénité. Mais quand il rencontre Abra, courageuse adolescente aux dons extrasensoriels, ses vieux démons resurgissent. Car la jeune fille, consciente que Dan a les mêmes pouvoirs qu'elle, a besoin de son aide : elle cherche à lutter contre la redoutable Rose Claque et sa tribu du Nœud Vrai qui se nourrissent des dons d'innocents comme elle pour conquérir l'immortalité. Formant une alliance inattendue, Dan et Abra s'engagent dans un combat sans merci contre Rose. Face à l'innocence de la jeune fille et à sa manière d'accepter son don, Dan n'a d'autre choix que de mobiliser ses propres pouvoirs, même s'il doit affronter ses peurs et réveiller les fantômes du passé… "
  },
  {
    title: "Shining",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/pictures/19/09/24/09/25/3228359.jpg",
    duration: "2h23",
    genre: "Horror",
    synopsis:
      "Écrivain, Jack Torrance est engagé comme gardien, pendant tout l’hiver, d’un grand hôtel isolé du Colorado – l’Overlook – où il espère surmonter enfin sa panne d’inspiration. Il s’y installe avec sa femme Wendy et son fils Danny, doté d’un don de médium. Tandis que Jack n’avance pas dans son livre et que son fils est de plus en plus hanté par des visions terrifiantes, il découvre les terribles secrets de l’hôtel et bascule peu à peu dans une forme de folie meurtrière où il s’en prend à sa propre famille… "
  },
  {
    title: "L'Exorciste",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/65/19/82/18835952.jpg",
    duration: "2h01",
    genre: "Horror",
    synopsis:
      "L'actrice Chris McNeil est inquiète au sujet de sa fillette Regan : après que l'on ait entendu des bruits curieux venant de sa chambre, la petite a changé, proférant de constantes insanités. Une force para-normale l'habite, qui coûte la vie au metteur en scène de Chris. Désespérée, cette dernière fait appel à deux exorcistes... "
  },
  {
    title: "Alien, le huitième passager",
    picture:
      "http://fr.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/35/14/60/18363837.jpg",
    duration: "1h56",
    genre: "Horror",
    synopsis:
      "Le vaisseau commercial Nostromo et son équipage, sept hommes et femmes, rentrent sur Terre avec une importante cargaison de minerai. Mais lors d'un arrêt forcé sur une planète déserte, l'officier Kane se fait agresser par une forme de vie inconnue, une arachnide qui étouffe son visage. Après que le docteur de bord lui retire le spécimen, l'équipage retrouve le sourire et dîne ensemble. Jusqu'à ce que Kane, pris de convulsions, voit son abdomen perforé par un corps étranger vivant, qui s'échappe dans les couloirs du vaisseau... "
  },
  {
    title: "Very Bad Trip",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/o_club300-overlay-ok.png_0_se/medias/nmedia/18/70/03/08/19109117.jpg",
    duration: "1h30",
    genre: "comedy",
    synopsis:
      "Au réveil d'un enterrement de vie de garçon bien arrosé, les trois amis du fiancé se rendent compte qu'il a disparu 40 heures avant la cérémonie de mariage. Ils vont alors devoir faire fi de leur gueule de bois et rassembler leurs bribes de souvenirs pour comprendre ce qui s'est passé."
  },
  {
    title: "Bienvenue chez les Ch'tis",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/64/74/53/18889951.jpg",
    duration: "1h46",
    genre: "comedy",
    synopsis:
      "Philippe Abrams est directeur de la poste de Salon-de-Provence. Il est marié à Julie, dont le caractère dépressif lui rend la vie impossible. Pour lui faire plaisir, Philippe fraude afin d'obtenir une mutation sur la Côte d'Azur. Mais il est démasqué: il sera muté à Bergues, petite ville du Nord. Pour les Abrams, sudistes pleins de préjugés, le Nord c'est l'horreur, une région glacée, peuplée d'êtres rustres, éructant un langage incompréhensible, le 'cheutimi'. Philippe ira seul. A sa grande surprise, il découvre un endroit charmant, une équipe chaleureuse, des gens accueillants, et se fait un ami : Antoine, le facteur et le carillonneur du village, à la mère possessive et aux amours contrariées. Quand Philippe revient à Salon, Julie refuse de croire qu'il se plait dans le Nord. Elle pense même qu'il lui ment pour la ménager. Pour la satisfaire et se simplifier la vie, Philippe lui fait croire qu'en effet, il vit un enfer à Bergues. Dès lors, sa vie s'enfonce dans un mensonge confortable... "
  },
  {
    title: "Star Wars : Episode IV - Un nouvel espoir",
    picture:
      "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/35/41/59/18422600.jpg",
    duration: "2h05",
    genre: "sf",
    synopsis:
      "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l'Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au coeur des montagnes désertiques de Tatooine... "
  },
  {
    title: "Star Wars : Episode IV - Un nouvel espoir",
    picture:
      "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/35/41/59/18422600.jpg",
    duration: "2h05",
    genre: "sf",
    synopsis:
      "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l'Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au coeur des montagnes désertiques de Tatooine... "
  },
  {
    title: "Pokémon Détective Pikachu",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/pictures/19/04/03/14/15/2748213.jpg",
    duration: "1h45",
    genre: "family",
    synopsis:
      "Après la disparition mystérieuse de Harry Goodman, un détective privé, son fils Tim va tenter de découvrir ce qui s’est passé.  Le détective Pikachu, ancien partenaire de Harry, participe alors à l’enquête : un super-détective adorable à la sagacité hilarante, qui en laisse plus d’un perplexe, dont lui-même. Constatant qu’ils sont particulièrement bien assortis, Tim et Pikachu unissent leurs forces dans une aventure palpitante pour résoudre cet insondable mystère.  À la recherche d’indices dans les rues peuplées de néons de la ville de Ryme – métropole moderne et tentaculaire où humains et Pokémon vivent côte à côte dans un monde en live-action très réaliste –, ils rencontrent plusieurs personnages Pokémon et découvrent alors un complot choquant qui pourrait bien détruire cette coexistence pacifique et menacer l’ensemble de leur univers. "
  },
  {
    title: "Pokémon Détective Pikachu",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/pictures/19/04/03/14/15/2748213.jpg",
    duration: "1h45",
    genre: "family",
    synopsis:
      "Après la disparition mystérieuse de Harry Goodman, un détective privé, son fils Tim va tenter de découvrir ce qui s’est passé.  Le détective Pikachu, ancien partenaire de Harry, participe alors à l’enquête : un super-détective adorable à la sagacité hilarante, qui en laisse plus d’un perplexe, dont lui-même. Constatant qu’ils sont particulièrement bien assortis, Tim et Pikachu unissent leurs forces dans une aventure palpitante pour résoudre cet insondable mystère.  À la recherche d’indices dans les rues peuplées de néons de la ville de Ryme – métropole moderne et tentaculaire où humains et Pokémon vivent côte à côte dans un monde en live-action très réaliste –, ils rencontrent plusieurs personnages Pokémon et découvrent alors un complot choquant qui pourrait bien détruire cette coexistence pacifique et menacer l’ensemble de leur univers. "
  },
  {
    title: "Akira",
    picture:
      "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/64/25/05/19199449.jpg",
    duration: "",
    genre: "anime",
    synopsis:
      "Mise en images pour le cinema d'une bande dessinee apocalyptique sur les débuts du XXIe siecle dans la megapole de Neo-Tokyo au Japon. Tetsuo, un adolescent ayant vécu une enfance difficile, est la victime d'expériences visant à développer les capacités psychiques qui dorment en chacun de nous. Ainsi doté d'une puissance que lui meme ne peut imaginer, Tetsuo décide de partir en guerre contre le monde qui l'a opprimé. Dès lors, Il se retrouve au coeur d'une légende populaire qui annonce le retour prochain d'Akira, un enfant aux pouvoirs extra-ordinaires censé délivrer Tokyo du chaos... "
  },
  {
    title: "Akira",
    picture:
      "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/64/25/05/19199449.jpg",
    duration: "",
    genre: "anime",
    synopsis:
      "Mise en images pour le cinema d'une bande dessinee apocalyptique sur les débuts du XXIe siecle dans la megapole de Neo-Tokyo au Japon. Tetsuo, un adolescent ayant vécu une enfance difficile, est la victime d'expériences visant à développer les capacités psychiques qui dorment en chacun de nous. Ainsi doté d'une puissance que lui meme ne peut imaginer, Tetsuo décide de partir en guerre contre le monde qui l'a opprimé. Dès lors, Il se retrouve au coeur d'une légende populaire qui annonce le retour prochain d'Akira, un enfant aux pouvoirs extra-ordinaires censé délivrer Tokyo du chaos... "
  },
  {
    title: "Joker",
    picture:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lbGzEyESjANpOeD48aROlc3X7aa.jpg",
    duration: "2h32",
    genre: "Horror",
    synopsis:
      "Encore profondément marqué par le traumatisme qu'il a vécu, enfant, à l'Overlook Hotel, Dan Torrance a dû se battre pour tenter de trouver un semblant de sérénité. Mais quand il rencontre Abra, courageuse adolescente aux dons extrasensoriels, ses vieux démons resurgissent. Car la jeune fille, consciente que Dan a les mêmes pouvoirs qu'elle, a besoin de son aide : elle cherche à lutter contre la redoutable Rose Claque et sa tribu du Nœud Vrai qui se nourrissent des dons d'innocents comme elle pour conquérir l'immortalité. Formant une alliance inattendue, Dan et Abra s'engagent dans un combat sans merci contre Rose. Face à l'innocence de la jeune fille et à sa manière d'accepter son don, Dan n'a d'autre choix que de mobiliser ses propres pouvoirs, même s'il doit affronter ses peurs et réveiller les fantômes du passé… ",
    releasedDate: "1 january, 2019",
    with: "Anna Blanders, Jim Carrey",
    by: "John Café",
    trailer:
      "https://www.youtube.com/embed/t433PEQGErc?modestbranding=1&autohide=1&showinfo=0&controls=0",
    trailerThumb: ""
  },
  {
    title: "Doctor Sleep",
    picture:
      "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/10/11/11/36/5168199.jpg",
    duration: "2h32",
    genre: "Horror",
    synopsis:
      "Encore profondément marqué par le traumatisme qu'il a vécu, enfant, à l'Overlook Hotel, Dan Torrance a dû se battre pour tenter de trouver un semblant de sérénité. Mais quand il rencontre Abra, courageuse adolescente aux dons extrasensoriels, ses vieux démons resurgissent. Car la jeune fille, consciente que Dan a les mêmes pouvoirs qu'elle, a besoin de son aide : elle cherche à lutter contre la redoutable Rose Claque et sa tribu du Nœud Vrai qui se nourrissent des dons d'innocents comme elle pour conquérir l'immortalité. Formant une alliance inattendue, Dan et Abra s'engagent dans un combat sans merci contre Rose. Face à l'innocence de la jeune fille et à sa manière d'accepter son don, Dan n'a d'autre choix que de mobiliser ses propres pouvoirs, même s'il doit affronter ses peurs et réveiller les fantômes du passé… "
  },
  {
    title: "Shining",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/pictures/19/09/24/09/25/3228359.jpg",
    duration: "2h23",
    genre: "Horror",
    synopsis:
      "Écrivain, Jack Torrance est engagé comme gardien, pendant tout l’hiver, d’un grand hôtel isolé du Colorado – l’Overlook – où il espère surmonter enfin sa panne d’inspiration. Il s’y installe avec sa femme Wendy et son fils Danny, doté d’un don de médium. Tandis que Jack n’avance pas dans son livre et que son fils est de plus en plus hanté par des visions terrifiantes, il découvre les terribles secrets de l’hôtel et bascule peu à peu dans une forme de folie meurtrière où il s’en prend à sa propre famille… "
  },
  {
    title: "L'Exorciste",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/65/19/82/18835952.jpg",
    duration: "2h01",
    genre: "Horror",
    synopsis:
      "L'actrice Chris McNeil est inquiète au sujet de sa fillette Regan : après que l'on ait entendu des bruits curieux venant de sa chambre, la petite a changé, proférant de constantes insanités. Une force para-normale l'habite, qui coûte la vie au metteur en scène de Chris. Désespérée, cette dernière fait appel à deux exorcistes... "
  },
  {
    title: "Alien, le huitième passager",
    picture:
      "http://fr.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/35/14/60/18363837.jpg",
    duration: "1h56",
    genre: "Horror",
    synopsis:
      "Le vaisseau commercial Nostromo et son équipage, sept hommes et femmes, rentrent sur Terre avec une importante cargaison de minerai. Mais lors d'un arrêt forcé sur une planète déserte, l'officier Kane se fait agresser par une forme de vie inconnue, une arachnide qui étouffe son visage. Après que le docteur de bord lui retire le spécimen, l'équipage retrouve le sourire et dîne ensemble. Jusqu'à ce que Kane, pris de convulsions, voit son abdomen perforé par un corps étranger vivant, qui s'échappe dans les couloirs du vaisseau... "
  },
  {
    title: "Very Bad Trip",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/o_club300-overlay-ok.png_0_se/medias/nmedia/18/70/03/08/19109117.jpg",
    duration: "1h30",
    genre: "comedy",
    synopsis:
      "Au réveil d'un enterrement de vie de garçon bien arrosé, les trois amis du fiancé se rendent compte qu'il a disparu 40 heures avant la cérémonie de mariage. Ils vont alors devoir faire fi de leur gueule de bois et rassembler leurs bribes de souvenirs pour comprendre ce qui s'est passé."
  },
  {
    title: "Bienvenue chez les Ch'tis",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/64/74/53/18889951.jpg",
    duration: "1h46",
    genre: "comedy",
    synopsis:
      "Philippe Abrams est directeur de la poste de Salon-de-Provence. Il est marié à Julie, dont le caractère dépressif lui rend la vie impossible. Pour lui faire plaisir, Philippe fraude afin d'obtenir une mutation sur la Côte d'Azur. Mais il est démasqué: il sera muté à Bergues, petite ville du Nord. Pour les Abrams, sudistes pleins de préjugés, le Nord c'est l'horreur, une région glacée, peuplée d'êtres rustres, éructant un langage incompréhensible, le 'cheutimi'. Philippe ira seul. A sa grande surprise, il découvre un endroit charmant, une équipe chaleureuse, des gens accueillants, et se fait un ami : Antoine, le facteur et le carillonneur du village, à la mère possessive et aux amours contrariées. Quand Philippe revient à Salon, Julie refuse de croire qu'il se plait dans le Nord. Elle pense même qu'il lui ment pour la ménager. Pour la satisfaire et se simplifier la vie, Philippe lui fait croire qu'en effet, il vit un enfer à Bergues. Dès lors, sa vie s'enfonce dans un mensonge confortable... "
  },
  {
    title: "Star Wars : Episode IV - Un nouvel espoir",
    picture:
      "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/35/41/59/18422600.jpg",
    duration: "2h05",
    genre: "sf",
    synopsis:
      "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l'Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au coeur des montagnes désertiques de Tatooine... "
  },
  {
    title: "Star Wars : Episode IV - Un nouvel espoir",
    picture:
      "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/35/41/59/18422600.jpg",
    duration: "2h05",
    genre: "sf",
    synopsis:
      "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l'Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au coeur des montagnes désertiques de Tatooine... "
  },
  {
    title: "Pokémon Détective Pikachu",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/pictures/19/04/03/14/15/2748213.jpg",
    duration: "1h45",
    genre: "family",
    synopsis:
      "Après la disparition mystérieuse de Harry Goodman, un détective privé, son fils Tim va tenter de découvrir ce qui s’est passé.  Le détective Pikachu, ancien partenaire de Harry, participe alors à l’enquête : un super-détective adorable à la sagacité hilarante, qui en laisse plus d’un perplexe, dont lui-même. Constatant qu’ils sont particulièrement bien assortis, Tim et Pikachu unissent leurs forces dans une aventure palpitante pour résoudre cet insondable mystère.  À la recherche d’indices dans les rues peuplées de néons de la ville de Ryme – métropole moderne et tentaculaire où humains et Pokémon vivent côte à côte dans un monde en live-action très réaliste –, ils rencontrent plusieurs personnages Pokémon et découvrent alors un complot choquant qui pourrait bien détruire cette coexistence pacifique et menacer l’ensemble de leur univers. "
  },
  {
    title: "Pokémon Détective Pikachu",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/pictures/19/04/03/14/15/2748213.jpg",
    duration: "1h45",
    genre: "family",
    synopsis:
      "Après la disparition mystérieuse de Harry Goodman, un détective privé, son fils Tim va tenter de découvrir ce qui s’est passé.  Le détective Pikachu, ancien partenaire de Harry, participe alors à l’enquête : un super-détective adorable à la sagacité hilarante, qui en laisse plus d’un perplexe, dont lui-même. Constatant qu’ils sont particulièrement bien assortis, Tim et Pikachu unissent leurs forces dans une aventure palpitante pour résoudre cet insondable mystère.  À la recherche d’indices dans les rues peuplées de néons de la ville de Ryme – métropole moderne et tentaculaire où humains et Pokémon vivent côte à côte dans un monde en live-action très réaliste –, ils rencontrent plusieurs personnages Pokémon et découvrent alors un complot choquant qui pourrait bien détruire cette coexistence pacifique et menacer l’ensemble de leur univers. "
  },
  {
    title: "Akira",
    picture:
      "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/64/25/05/19199449.jpg",
    duration: "",
    genre: "anime",
    synopsis:
      "Mise en images pour le cinema d'une bande dessinee apocalyptique sur les débuts du XXIe siecle dans la megapole de Neo-Tokyo au Japon. Tetsuo, un adolescent ayant vécu une enfance difficile, est la victime d'expériences visant à développer les capacités psychiques qui dorment en chacun de nous. Ainsi doté d'une puissance que lui meme ne peut imaginer, Tetsuo décide de partir en guerre contre le monde qui l'a opprimé. Dès lors, Il se retrouve au coeur d'une légende populaire qui annonce le retour prochain d'Akira, un enfant aux pouvoirs extra-ordinaires censé délivrer Tokyo du chaos... "
  },
  {
    title: "Akira",
    picture:
      "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/64/25/05/19199449.jpg",
    duration: "",
    genre: "anime",
    synopsis:
      "Mise en images pour le cinema d'une bande dessinee apocalyptique sur les débuts du XXIe siecle dans la megapole de Neo-Tokyo au Japon. Tetsuo, un adolescent ayant vécu une enfance difficile, est la victime d'expériences visant à développer les capacités psychiques qui dorment en chacun de nous. Ainsi doté d'une puissance que lui meme ne peut imaginer, Tetsuo décide de partir en guerre contre le monde qui l'a opprimé. Dès lors, Il se retrouve au coeur d'une légende populaire qui annonce le retour prochain d'Akira, un enfant aux pouvoirs extra-ordinaires censé délivrer Tokyo du chaos... "
  },
  {
    title: "Joker",
    picture:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lbGzEyESjANpOeD48aROlc3X7aa.jpg",
    duration: "2h32",
    genre: "Horror",
    synopsis:
      "Encore profondément marqué par le traumatisme qu'il a vécu, enfant, à l'Overlook Hotel, Dan Torrance a dû se battre pour tenter de trouver un semblant de sérénité. Mais quand il rencontre Abra, courageuse adolescente aux dons extrasensoriels, ses vieux démons resurgissent. Car la jeune fille, consciente que Dan a les mêmes pouvoirs qu'elle, a besoin de son aide : elle cherche à lutter contre la redoutable Rose Claque et sa tribu du Nœud Vrai qui se nourrissent des dons d'innocents comme elle pour conquérir l'immortalité. Formant une alliance inattendue, Dan et Abra s'engagent dans un combat sans merci contre Rose. Face à l'innocence de la jeune fille et à sa manière d'accepter son don, Dan n'a d'autre choix que de mobiliser ses propres pouvoirs, même s'il doit affronter ses peurs et réveiller les fantômes du passé… ",
    releasedDate: "1 january, 2019",
    with: "Anna Blanders, Jim Carrey",
    by: "John Café",
    trailer:
      "https://www.youtube.com/embed/t433PEQGErc?modestbranding=1&autohide=1&showinfo=0&controls=0",
    trailerThumb: ""
  },
  {
    title: "Doctor Sleep",
    picture:
      "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/10/11/11/36/5168199.jpg",
    duration: "2h32",
    genre: "Horror",
    synopsis:
      "Encore profondément marqué par le traumatisme qu'il a vécu, enfant, à l'Overlook Hotel, Dan Torrance a dû se battre pour tenter de trouver un semblant de sérénité. Mais quand il rencontre Abra, courageuse adolescente aux dons extrasensoriels, ses vieux démons resurgissent. Car la jeune fille, consciente que Dan a les mêmes pouvoirs qu'elle, a besoin de son aide : elle cherche à lutter contre la redoutable Rose Claque et sa tribu du Nœud Vrai qui se nourrissent des dons d'innocents comme elle pour conquérir l'immortalité. Formant une alliance inattendue, Dan et Abra s'engagent dans un combat sans merci contre Rose. Face à l'innocence de la jeune fille et à sa manière d'accepter son don, Dan n'a d'autre choix que de mobiliser ses propres pouvoirs, même s'il doit affronter ses peurs et réveiller les fantômes du passé… "
  },
  {
    title: "Shining",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/pictures/19/09/24/09/25/3228359.jpg",
    duration: "2h23",
    genre: "Horror",
    synopsis:
      "Écrivain, Jack Torrance est engagé comme gardien, pendant tout l’hiver, d’un grand hôtel isolé du Colorado – l’Overlook – où il espère surmonter enfin sa panne d’inspiration. Il s’y installe avec sa femme Wendy et son fils Danny, doté d’un don de médium. Tandis que Jack n’avance pas dans son livre et que son fils est de plus en plus hanté par des visions terrifiantes, il découvre les terribles secrets de l’hôtel et bascule peu à peu dans une forme de folie meurtrière où il s’en prend à sa propre famille… "
  },
  {
    title: "L'Exorciste",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/65/19/82/18835952.jpg",
    duration: "2h01",
    genre: "Horror",
    synopsis:
      "L'actrice Chris McNeil est inquiète au sujet de sa fillette Regan : après que l'on ait entendu des bruits curieux venant de sa chambre, la petite a changé, proférant de constantes insanités. Une force para-normale l'habite, qui coûte la vie au metteur en scène de Chris. Désespérée, cette dernière fait appel à deux exorcistes... "
  },
  {
    title: "Alien, le huitième passager",
    picture:
      "http://fr.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/35/14/60/18363837.jpg",
    duration: "1h56",
    genre: "Horror",
    synopsis:
      "Le vaisseau commercial Nostromo et son équipage, sept hommes et femmes, rentrent sur Terre avec une importante cargaison de minerai. Mais lors d'un arrêt forcé sur une planète déserte, l'officier Kane se fait agresser par une forme de vie inconnue, une arachnide qui étouffe son visage. Après que le docteur de bord lui retire le spécimen, l'équipage retrouve le sourire et dîne ensemble. Jusqu'à ce que Kane, pris de convulsions, voit son abdomen perforé par un corps étranger vivant, qui s'échappe dans les couloirs du vaisseau... "
  },
  {
    title: "Very Bad Trip",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/o_club300-overlay-ok.png_0_se/medias/nmedia/18/70/03/08/19109117.jpg",
    duration: "1h30",
    genre: "comedy",
    synopsis:
      "Au réveil d'un enterrement de vie de garçon bien arrosé, les trois amis du fiancé se rendent compte qu'il a disparu 40 heures avant la cérémonie de mariage. Ils vont alors devoir faire fi de leur gueule de bois et rassembler leurs bribes de souvenirs pour comprendre ce qui s'est passé."
  },
  {
    title: "Bienvenue chez les Ch'tis",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/64/74/53/18889951.jpg",
    duration: "1h46",
    genre: "comedy",
    synopsis:
      "Philippe Abrams est directeur de la poste de Salon-de-Provence. Il est marié à Julie, dont le caractère dépressif lui rend la vie impossible. Pour lui faire plaisir, Philippe fraude afin d'obtenir une mutation sur la Côte d'Azur. Mais il est démasqué: il sera muté à Bergues, petite ville du Nord. Pour les Abrams, sudistes pleins de préjugés, le Nord c'est l'horreur, une région glacée, peuplée d'êtres rustres, éructant un langage incompréhensible, le 'cheutimi'. Philippe ira seul. A sa grande surprise, il découvre un endroit charmant, une équipe chaleureuse, des gens accueillants, et se fait un ami : Antoine, le facteur et le carillonneur du village, à la mère possessive et aux amours contrariées. Quand Philippe revient à Salon, Julie refuse de croire qu'il se plait dans le Nord. Elle pense même qu'il lui ment pour la ménager. Pour la satisfaire et se simplifier la vie, Philippe lui fait croire qu'en effet, il vit un enfer à Bergues. Dès lors, sa vie s'enfonce dans un mensonge confortable... "
  },
  {
    title: "Star Wars : Episode IV - Un nouvel espoir",
    picture:
      "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/35/41/59/18422600.jpg",
    duration: "2h05",
    genre: "sf",
    synopsis:
      "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l'Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au coeur des montagnes désertiques de Tatooine... "
  },
  {
    title: "Star Wars : Episode IV - Un nouvel espoir",
    picture:
      "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/35/41/59/18422600.jpg",
    duration: "2h05",
    genre: "sf",
    synopsis:
      "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l'Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au coeur des montagnes désertiques de Tatooine... "
  },
  {
    title: "Pokémon Détective Pikachu",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/pictures/19/04/03/14/15/2748213.jpg",
    duration: "1h45",
    genre: "family",
    synopsis:
      "Après la disparition mystérieuse de Harry Goodman, un détective privé, son fils Tim va tenter de découvrir ce qui s’est passé.  Le détective Pikachu, ancien partenaire de Harry, participe alors à l’enquête : un super-détective adorable à la sagacité hilarante, qui en laisse plus d’un perplexe, dont lui-même. Constatant qu’ils sont particulièrement bien assortis, Tim et Pikachu unissent leurs forces dans une aventure palpitante pour résoudre cet insondable mystère.  À la recherche d’indices dans les rues peuplées de néons de la ville de Ryme – métropole moderne et tentaculaire où humains et Pokémon vivent côte à côte dans un monde en live-action très réaliste –, ils rencontrent plusieurs personnages Pokémon et découvrent alors un complot choquant qui pourrait bien détruire cette coexistence pacifique et menacer l’ensemble de leur univers. "
  },
  {
    title: "Pokémon Détective Pikachu",
    picture:
      "http://fr.web.img6.acsta.net/c_215_290/pictures/19/04/03/14/15/2748213.jpg",
    duration: "1h45",
    genre: "family",
    synopsis:
      "Après la disparition mystérieuse de Harry Goodman, un détective privé, son fils Tim va tenter de découvrir ce qui s’est passé.  Le détective Pikachu, ancien partenaire de Harry, participe alors à l’enquête : un super-détective adorable à la sagacité hilarante, qui en laisse plus d’un perplexe, dont lui-même. Constatant qu’ils sont particulièrement bien assortis, Tim et Pikachu unissent leurs forces dans une aventure palpitante pour résoudre cet insondable mystère.  À la recherche d’indices dans les rues peuplées de néons de la ville de Ryme – métropole moderne et tentaculaire où humains et Pokémon vivent côte à côte dans un monde en live-action très réaliste –, ils rencontrent plusieurs personnages Pokémon et découvrent alors un complot choquant qui pourrait bien détruire cette coexistence pacifique et menacer l’ensemble de leur univers. "
  },
  {
    title: "Akira",
    picture:
      "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/64/25/05/19199449.jpg",
    duration: "",
    genre: "anime",
    synopsis:
      "Mise en images pour le cinema d'une bande dessinee apocalyptique sur les débuts du XXIe siecle dans la megapole de Neo-Tokyo au Japon. Tetsuo, un adolescent ayant vécu une enfance difficile, est la victime d'expériences visant à développer les capacités psychiques qui dorment en chacun de nous. Ainsi doté d'une puissance que lui meme ne peut imaginer, Tetsuo décide de partir en guerre contre le monde qui l'a opprimé. Dès lors, Il se retrouve au coeur d'une légende populaire qui annonce le retour prochain d'Akira, un enfant aux pouvoirs extra-ordinaires censé délivrer Tokyo du chaos... "
  },
  {
    title: "Akira",
    picture:
      "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/64/25/05/19199449.jpg",
    duration: "",
    genre: "anime",
    synopsis:
      "Mise en images pour le cinema d'une bande dessinee apocalyptique sur les débuts du XXIe siecle dans la megapole de Neo-Tokyo au Japon. Tetsuo, un adolescent ayant vécu une enfance difficile, est la victime d'expériences visant à développer les capacités psychiques qui dorment en chacun de nous. Ainsi doté d'une puissance que lui meme ne peut imaginer, Tetsuo décide de partir en guerre contre le monde qui l'a opprimé. Dès lors, Il se retrouve au coeur d'une légende populaire qui annonce le retour prochain d'Akira, un enfant aux pouvoirs extra-ordinaires censé délivrer Tokyo du chaos... "
  },
  {
    title: "Joker",
    picture:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lbGzEyESjANpOeD48aROlc3X7aa.jpg",
    duration: "2h32",
    genre: "Horror",
    synopsis:
      "Encore profondément marqué par le traumatisme qu'il a vécu, enfant, à l'Overlook Hotel, Dan Torrance a dû se battre pour tenter de trouver un semblant de sérénité. Mais quand il rencontre Abra, courageuse adolescente aux dons extrasensoriels, ses vieux démons resurgissent. Car la jeune fille, consciente que Dan a les mêmes pouvoirs qu'elle, a besoin de son aide : elle cherche à lutter contre la redoutable Rose Claque et sa tribu du Nœud Vrai qui se nourrissent des dons d'innocents comme elle pour conquérir l'immortalité. Formant une alliance inattendue, Dan et Abra s'engagent dans un combat sans merci contre Rose. Face à l'innocence de la jeune fille et à sa manière d'accepter son don, Dan n'a d'autre choix que de mobiliser ses propres pouvoirs, même s'il doit affronter ses peurs et réveiller les fantômes du passé… ",
    releasedDate: "1 january, 2019",
    with: "Anna Blanders, Jim Carrey",
    by: "John Café",
    trailer:
      "https://www.youtube.com/embed/t433PEQGErc?modestbranding=1&autohide=1&showinfo=0&controls=0",
    trailerThumb: ""
  },
  {
    title: "Joker",
    picture:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lbGzEyESjANpOeD48aROlc3X7aa.jpg",
    duration: "2h32",
    genre: "Horror",
    synopsis:
      "Encore profondément marqué par le traumatisme qu'il a vécu, enfant, à l'Overlook Hotel, Dan Torrance a dû se battre pour tenter de trouver un semblant de sérénité. Mais quand il rencontre Abra, courageuse adolescente aux dons extrasensoriels, ses vieux démons resurgissent. Car la jeune fille, consciente que Dan a les mêmes pouvoirs qu'elle, a besoin de son aide : elle cherche à lutter contre la redoutable Rose Claque et sa tribu du Nœud Vrai qui se nourrissent des dons d'innocents comme elle pour conquérir l'immortalité. Formant une alliance inattendue, Dan et Abra s'engagent dans un combat sans merci contre Rose. Face à l'innocence de la jeune fille et à sa manière d'accepter son don, Dan n'a d'autre choix que de mobiliser ses propres pouvoirs, même s'il doit affronter ses peurs et réveiller les fantômes du passé… ",
    releasedDate: "1 january, 2019",
    with: "Anna Blanders, Jim Carrey",
    by: "John Café",
    trailer:
      "https://www.youtube.com/embed/t433PEQGErc?modestbranding=1&autohide=1&showinfo=0&controls=0",
    trailerThumb: ""
  }
];

export default movieList;
