$(function(){//Declar function
    $(document).ready(function(){
        var $nbPlay = 0;            // on déclare les var nbWin, nbLose, nbPlay and nbRation
        var $nbWin = 0;
        var $nbLose = 0;
        var $nbRatio = 0;
        //Début de la fonction au click sur le bouton gameValid
        $('#gameValid').on('click', function(){
            var $computerChoice = Math.floor(Math.random()*3); //Génère le choix de l'ordi
            var $playerstone = document.getElementById("stone");
            var $playerpaper = document.getElementById("paper");   //  input radio in var
            var $playerchisel = document.getElementById("chisel");
            var $resultNotif = $('#result');    //Pour avoir le résultat
            var $resultWin = $('#resultWin'); // Résultat de victoires
            var $resultLose = $('#resultLose') // Résultat de défaites
            var $resultRatio = $('#resultRatio'); // Résultat du Ratio

            if($playerstone.checked || $playerpaper.checked || $playerchisel.checked){       // Si le joueur a fait un choix
                if($computerChoice == 0){                                      //Si l'ordi choisit pierre
                    if($playerstone.checked){                        //et que le joueur choisit pierre
                        $resultNotif.text('Égalité !');
                        $resultNotif.css('color', 'blue');
                        $nbPlay++;
                    }else if($playerpaper.checked){                  //et que le joueur choisit papier
                        $resultNotif.text('Gagné !')
                        $resultNotif.css('color', 'green');
                        $nbPlay++;
                        $nbWin++;
                        $resultWin.text('Nombre de partie gagner : ' + $nbWin);
                    }else if($playerchisel.checked){                 //et que le joueur chosii ciseaux
                        $resultNotif.text('Perdu !')
                        $resultNotif.css('color', 'red');
                        $nbPlay++;
                        $nbLose++;
                        $resultLose.text('Nombre de parties perdues : ' + $nbLose);
                    }
                }
                if($computerChoice == 1){                                      //Si l'ordi choisit papier
                    if($playerstone.checked){                        // et que le joueur choisit pierre
                        $resultNotif.text('Perdu !')
                        $resultNotif.css('color', 'red');
                        $nbPlay++;
                        $nbLose++;
                        $resultLose.text('Nombre de partie perdue : ' + $nbLose);
                    }else if($playerpaper.checked){                  //et que le joueur choisit papier
                        $resultNotif.text('Égalité.\'');
                        $resultNotif.css('color', 'blue');
                        $nbPlay++;
                    }else if($playerchisel.checked){                 //et que le joueur choisit ciseaux
                        $resultNotif.text('Gagné !')
                        $resultNotif.css('color', 'green');
                        $nbPlay++;
                        $nbWin++;
                        $resultWin.text('Nombre de partie gagner : ' + $nbWin);
                    }
                }
                if($computerChoice == 2){                                      //si l'ordi choisit ciseaux
                    if($playerstone.checked){                        //et que le joueur choisit pierre
                        $resultNotif.text('Gagné !')
                        $resultNotif.css('color', 'green');
                        $nbPlay++;
                        $nbWin++;
                        $resultWin.text('Nombre de parties gagnées : ' + $nbWin);
                    }else if($playerpaper.checked){                  //et que le joueur choisit papier
                        $resultNotif.text('Perdu ! :c')
                        $resultNotif.css('color', 'red');
                        $nbPlay++;
                        $nbLose++;
                        $resultLose.text('Nombre de parties perdues : ' + $nbLose);
                    }else if($playerchisel.checked){                 //et que le joueur choisit ciseaux
                        $resultNotif.text('Égalité !\'');
                        $resultNotif.css('color', 'blue');
                        $nbPlay++;
                    }
                }
                $nbRatio = (100*$nbWin)/$nbPlay;    //calcul ratio victoires
                $resultRatio.text('Ratio : ' + $nbRatio.toFixed(2) + '%') // Montre le ratio de victoires arrondi au diwièmes
            }else{                                                                              // Si le joueur n'a pas fait de choix
                alert('Faites un choix!');
            }
        });
    });
});
