//Algorithme Voyelles

fonction nbrVoyelles (texte: Chaine de caracteres) : Entier 
Variables 
    i,nbr: Entier 

    Début 
        nbr ← 0 
        Pour i ← 0 alongueur(texte)-1
          Si texte[i] ='a' ou texte[i] = 'e' ou texte[i] ='i' ou texte[i ='o']
          ou texte[i] ='u' ou texte[i] ='y' alors 
             nbr ← nbr+1
        FinSi 
        FinPour
        Retourne nbr
      fin 
      Variables
            phrase, choix: Chaine de caracteres
    Début
       Répéter
          Ecrire('Entrer une phrase de votre choix:')
          Lire (phrase)
          Ecrire('Oui: Entrer contient ',nbrVoyelles(phrase) , 'voyelle(s)' )
          Ecrire('Oui: Entrer une nouvelle phrase. Non: Quitter le programme')
          Lire(choix)
          Jusqu'a choix='Non' 
    Fin 
            
        
        
